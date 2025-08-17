import { createClient } from '@supabase/supabase-js';
import { projectId, publicAnonKey } from './info';

export const supabase = createClient(
  `https://${projectId}.supabase.co`,
  publicAnonKey
);

export const serverUrl = `https://${projectId}.supabase.co/functions/v1/make-server-6d1b6a1b`;

// API helper functions
export const api = {
  async submitContactForm(data: {
    name: string;
    email: string;
    phone?: string;
    practiceArea?: string;
    message: string;
  }) {
    const response = await fetch(`${serverUrl}/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${publicAnonKey}`,
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Failed to submit contact form');
    }

    return response.json();
  },

  async bookConsultation(data: {
    name: string;
    email: string;
    phone: string;
    practiceArea?: string;
    preferredDate?: string;
    preferredTime?: string;
    message?: string;
  }) {
    const response = await fetch(`${serverUrl}/consultation`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${publicAnonKey}`,
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Failed to book consultation');
    }

    return response.json();
  },

  async subscribeNewsletter(data: { email: string; name?: string }) {
    const response = await fetch(`${serverUrl}/newsletter`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${publicAnonKey}`,
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Failed to subscribe to newsletter');
    }

    return response.json();
  },

  async signUp(data: { email: string; password: string; name: string }) {
    const response = await fetch(`${serverUrl}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${publicAnonKey}`,
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Failed to create account');
    }

    return response.json();
  },

  async getProfile(accessToken: string) {
    const response = await fetch(`${serverUrl}/profile`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
      },
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Failed to get profile');
    }

    return response.json();
  },
};