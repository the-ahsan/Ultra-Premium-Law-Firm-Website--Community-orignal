import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import * as kv from './kv_store.tsx';

const app = new Hono();

app.use('*', logger(console.log));
app.use('*', cors({
  origin: '*',
  allowHeaders: ['*'],
  allowMethods: ['*'],
}));

const supabase = createClient(
  Deno.env.get('SUPABASE_URL')!,
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!,
);

// Contact form submission endpoint
app.post('/make-server-6d1b6a1b/contact', async (c) => {
  try {
    const body = await c.req.json();
    const { name, email, phone, practiceArea, message } = body;

    if (!name || !email || !message) {
      return c.json({ error: 'Missing required fields' }, 400);
    }

    // Store contact form submission
    const contactId = `contact_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    const contactData = {
      id: contactId,
      name,
      email,
      phone: phone || '',
      practiceArea: practiceArea || '',
      message,
      submittedAt: new Date().toISOString(),
      status: 'new'
    };

    await kv.set(contactId, contactData);

    // Also store in a list for admin access
    const existingContacts = await kv.get('contact_submissions') || [];
    existingContacts.push(contactId);
    await kv.set('contact_submissions', existingContacts);

    console.log(`Contact form submitted successfully: ${contactId}`);
    return c.json({ 
      success: true, 
      message: 'Contact form submitted successfully',
      contactId 
    });

  } catch (error) {
    console.log(`Contact form submission error: ${error}`);
    return c.json({ error: 'Failed to submit contact form' }, 500);
  }
});

// Consultation booking endpoint
app.post('/make-server-6d1b6a1b/consultation', async (c) => {
  try {
    const body = await c.req.json();
    const { name, email, phone, practiceArea, preferredDate, preferredTime, message } = body;

    if (!name || !email || !phone) {
      return c.json({ error: 'Missing required fields' }, 400);
    }

    const consultationId = `consultation_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    const consultationData = {
      id: consultationId,
      name,
      email,
      phone,
      practiceArea: practiceArea || '',
      preferredDate: preferredDate || '',
      preferredTime: preferredTime || '',
      message: message || '',
      bookedAt: new Date().toISOString(),
      status: 'pending'
    };

    await kv.set(consultationId, consultationData);

    // Store in consultation list
    const existingConsultations = await kv.get('consultations') || [];
    existingConsultations.push(consultationId);
    await kv.set('consultations', existingConsultations);

    console.log(`Consultation booked successfully: ${consultationId}`);
    return c.json({ 
      success: true, 
      message: 'Consultation booked successfully',
      consultationId 
    });

  } catch (error) {
    console.log(`Consultation booking error: ${error}`);
    return c.json({ error: 'Failed to book consultation' }, 500);
  }
});

// Newsletter signup endpoint
app.post('/make-server-6d1b6a1b/newsletter', async (c) => {
  try {
    const body = await c.req.json();
    const { email, name } = body;

    if (!email) {
      return c.json({ error: 'Email is required' }, 400);
    }

    const subscriberId = `subscriber_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    const subscriberData = {
      id: subscriberId,
      email,
      name: name || '',
      subscribedAt: new Date().toISOString(),
      status: 'active'
    };

    await kv.set(subscriberId, subscriberData);

    // Store in newsletter list
    const existingSubscribers = await kv.get('newsletter_subscribers') || [];
    existingSubscribers.push(subscriberId);
    await kv.set('newsletter_subscribers', existingSubscribers);

    console.log(`Newsletter subscription successful: ${subscriberId}`);
    return c.json({ 
      success: true, 
      message: 'Newsletter subscription successful',
      subscriberId 
    });

  } catch (error) {
    console.log(`Newsletter subscription error: ${error}`);
    return c.json({ error: 'Failed to subscribe to newsletter' }, 500);
  }
});

// User signup endpoint
app.post('/make-server-6d1b6a1b/signup', async (c) => {
  try {
    const body = await c.req.json();
    const { email, password, name } = body;

    if (!email || !password || !name) {
      return c.json({ error: 'Missing required fields' }, 400);
    }

    const { data, error } = await supabase.auth.admin.createUser({
      email: email,
      password: password,
      user_metadata: { name: name },
      // Automatically confirm the user's email since an email server hasn't been configured.
      email_confirm: true
    });

    if (error) {
      console.log(`User signup error: ${error.message}`);
      return c.json({ error: error.message }, 400);
    }

    // Store additional user data
    if (data.user) {
      const userProfile = {
        id: data.user.id,
        email: data.user.email,
        name: name,
        createdAt: new Date().toISOString(),
        role: 'client'
      };

      await kv.set(`user_profile_${data.user.id}`, userProfile);
    }

    console.log(`User signup successful: ${data.user?.email}`);
    return c.json({ 
      success: true, 
      message: 'User created successfully',
      user: data.user 
    });

  } catch (error) {
    console.log(`User signup error: ${error}`);
    return c.json({ error: 'Failed to create user' }, 500);
  }
});

// Get contact submissions (admin endpoint)
app.get('/make-server-6d1b6a1b/admin/contacts', async (c) => {
  try {
    const accessToken = c.req.header('Authorization')?.split(' ')[1];
    const { data: { user }, error } = await supabase.auth.getUser(accessToken);
    
    if (!user?.id) {
      return c.json({ error: 'Unauthorized' }, 401);
    }

    // Check if user is admin (simplified check)
    const userProfile = await kv.get(`user_profile_${user.id}`);
    if (!userProfile || userProfile.role !== 'admin') {
      return c.json({ error: 'Forbidden - Admin access required' }, 403);
    }

    const contactIds = await kv.get('contact_submissions') || [];
    const contacts = [];

    for (const contactId of contactIds) {
      const contact = await kv.get(contactId);
      if (contact) {
        contacts.push(contact);
      }
    }

    return c.json({ contacts });

  } catch (error) {
    console.log(`Get contacts error: ${error}`);
    return c.json({ error: 'Failed to retrieve contacts' }, 500);
  }
});

// Get consultations (admin endpoint)
app.get('/make-server-6d1b6a1b/admin/consultations', async (c) => {
  try {
    const accessToken = c.req.header('Authorization')?.split(' ')[1];
    const { data: { user }, error } = await supabase.auth.getUser(accessToken);
    
    if (!user?.id) {
      return c.json({ error: 'Unauthorized' }, 401);
    }

    const userProfile = await kv.get(`user_profile_${user.id}`);
    if (!userProfile || userProfile.role !== 'admin') {
      return c.json({ error: 'Forbidden - Admin access required' }, 403);
    }

    const consultationIds = await kv.get('consultations') || [];
    const consultations = [];

    for (const consultationId of consultationIds) {
      const consultation = await kv.get(consultationId);
      if (consultation) {
        consultations.push(consultation);
      }
    }

    return c.json({ consultations });

  } catch (error) {
    console.log(`Get consultations error: ${error}`);
    return c.json({ error: 'Failed to retrieve consultations' }, 500);
  }
});

// Get user profile
app.get('/make-server-6d1b6a1b/profile', async (c) => {
  try {
    const accessToken = c.req.header('Authorization')?.split(' ')[1];
    const { data: { user }, error } = await supabase.auth.getUser(accessToken);
    
    if (!user?.id) {
      return c.json({ error: 'Unauthorized' }, 401);
    }

    const userProfile = await kv.get(`user_profile_${user.id}`);
    if (!userProfile) {
      return c.json({ error: 'Profile not found' }, 404);
    }

    return c.json({ profile: userProfile });

  } catch (error) {
    console.log(`Get profile error: ${error}`);
    return c.json({ error: 'Failed to retrieve profile' }, 500);
  }
});

serve(app.fetch);