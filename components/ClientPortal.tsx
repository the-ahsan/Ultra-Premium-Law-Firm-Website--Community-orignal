import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { User, FileText, Calendar, Settings, LogOut, UserPlus } from 'lucide-react';
import { supabase, api } from '../utils/supabase/client';
import { toast } from 'sonner@2.0.3';

interface UserProfile {
  id: string;
  email: string;
  name: string;
  createdAt: string;
  role: string;
}

export function ClientPortal() {
  const [user, setUser] = useState<any>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [authMode, setAuthMode] = useState<'signin' | 'signup' | 'portal'>('signin');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
  });

  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      if (session?.user) {
        setUser(session.user);
        await loadUserProfile(session.access_token);
        setAuthMode('portal');
      }
    } catch (error) {
      console.error('Check user error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const loadUserProfile = async (accessToken: string) => {
    try {
      const { profile } = await api.getProfile(accessToken);
      setProfile(profile);
    } catch (error) {
      console.error('Load profile error:', error);
    }
  };

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      });

      if (error) throw error;

      if (data.session) {
        setUser(data.user);
        await loadUserProfile(data.session.access_token);
        setAuthMode('portal');
        toast.success('Successfully signed in!');
      }
    } catch (error) {
      console.error('Sign in error:', error);
      toast.error(error instanceof Error ? error.message : 'Failed to sign in');
    }
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      await api.signUp({
        email: formData.email,
        password: formData.password,
        name: formData.name,
      });

      toast.success('Account created successfully! Please sign in.');
      setAuthMode('signin');
      setFormData({ email: formData.email, password: '', name: '' });
    } catch (error) {
      console.error('Sign up error:', error);
      toast.error(error instanceof Error ? error.message : 'Failed to create account');
    }
  };

  const handleSignOut = async () => {
    try {
      await supabase.auth.signOut();
      setUser(null);
      setProfile(null);
      setAuthMode('signin');
      toast.success('Successfully signed out');
    } catch (error) {
      console.error('Sign out error:', error);
      toast.error('Failed to sign out');
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-navy-deep flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-gold border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (authMode === 'signin' || authMode === 'signup') {
    return (
      <div className="min-h-screen bg-navy-deep flex items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md"
        >
          <Card className="p-8 bg-gradient-to-br from-gray-900/90 to-black/90 border-gold/20 backdrop-blur-sm">
            <div className="text-center mb-8">
              <User className="w-16 h-16 text-gold mx-auto mb-4" />
              <h1 className="font-serif text-3xl font-bold text-white mb-2">
                {authMode === 'signin' ? 'Client Portal' : 'Create Account'}
              </h1>
              <p className="text-gray-300">
                {authMode === 'signin' 
                  ? 'Sign in to access your legal documents and case updates'
                  : 'Join our client portal for exclusive access'
                }
              </p>
            </div>

            <form onSubmit={authMode === 'signin' ? handleSignIn : handleSignUp} className="space-y-6">
              {authMode === 'signup' && (
                <Input
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  className="bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-gold focus:ring-gold/20"
                  required
                />
              )}
              
              <Input
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                className="bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-gold focus:ring-gold/20"
                required
              />
              
              <Input
                type="password"
                placeholder="Password"
                value={formData.password}
                onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
                className="bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-gold focus:ring-gold/20"
                required
              />

              <Button
                type="submit"
                className="w-full bg-gold hover:bg-gold-light text-navy-deep font-semibold py-3"
              >
                {authMode === 'signin' ? 'Sign In' : 'Create Account'}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <button
                onClick={() => {
                  setAuthMode(authMode === 'signin' ? 'signup' : 'signin');
                  setFormData({ email: '', password: '', name: '' });
                }}
                className="text-gold hover:text-gold-light transition-colors duration-300"
              >
                {authMode === 'signin' 
                  ? "Don't have an account? Sign up" 
                  : 'Already have an account? Sign in'
                }
              </button>
            </div>
          </Card>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-navy-deep p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-between items-center mb-8"
        >
          <div>
            <h1 className="font-serif text-4xl font-bold text-white mb-2">
              Welcome back, {profile?.name || user?.email}
            </h1>
            <p className="text-gray-300">Manage your legal matters and stay updated on your cases</p>
          </div>
          <Button
            onClick={handleSignOut}
            variant="outline"
            className="border-gold text-gold hover:bg-gold hover:text-navy-deep"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Sign Out
          </Button>
        </motion.div>

        {/* Portal Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Tabs defaultValue="dashboard" className="space-y-6">
            <TabsList className="bg-gray-900/50 border border-gold/20">
              <TabsTrigger value="dashboard" className="data-[state=active]:bg-gold data-[state=active]:text-navy-deep">
                <User className="w-4 h-4 mr-2" />
                Dashboard
              </TabsTrigger>
              <TabsTrigger value="documents" className="data-[state=active]:bg-gold data-[state=active]:text-navy-deep">
                <FileText className="w-4 h-4 mr-2" />
                Documents
              </TabsTrigger>
              <TabsTrigger value="appointments" className="data-[state=active]:bg-gold data-[state=active]:text-navy-deep">
                <Calendar className="w-4 h-4 mr-2" />
                Appointments
              </TabsTrigger>
              <TabsTrigger value="settings" className="data-[state=active]:bg-gold data-[state=active]:text-navy-deep">
                <Settings className="w-4 h-4 mr-2" />
                Settings
              </TabsTrigger>
            </TabsList>

            <TabsContent value="dashboard" className="space-y-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="p-6 bg-gradient-to-br from-gray-900/90 to-black/90 border-gold/20">
                  <h3 className="text-white font-semibold text-lg mb-2">Active Cases</h3>
                  <p className="text-3xl font-bold text-gold mb-2">2</p>
                  <p className="text-gray-400">Currently in progress</p>
                </Card>
                
                <Card className="p-6 bg-gradient-to-br from-gray-900/90 to-black/90 border-gold/20">
                  <h3 className="text-white font-semibold text-lg mb-2">Upcoming Meetings</h3>
                  <p className="text-3xl font-bold text-gold mb-2">1</p>
                  <p className="text-gray-400">Next: Tomorrow 2:00 PM</p>
                </Card>
                
                <Card className="p-6 bg-gradient-to-br from-gray-900/90 to-black/90 border-gold/20">
                  <h3 className="text-white font-semibold text-lg mb-2">Documents</h3>
                  <p className="text-3xl font-bold text-gold mb-2">8</p>
                  <p className="text-gray-400">Available for download</p>
                </Card>
              </div>

              <Card className="p-6 bg-gradient-to-br from-gray-900/90 to-black/90 border-gold/20">
                <h3 className="text-white font-semibold text-xl mb-4">Recent Activity</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-4 bg-white/5 rounded-lg">
                    <FileText className="w-5 h-5 text-gold" />
                    <div>
                      <p className="text-white">Contract Review completed</p>
                      <p className="text-gray-400 text-sm">2 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-white/5 rounded-lg">
                    <Calendar className="w-5 h-5 text-gold" />
                    <div>
                      <p className="text-white">Consultation scheduled for tomorrow</p>
                      <p className="text-gray-400 text-sm">1 day ago</p>
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="documents">
              <Card className="p-6 bg-gradient-to-br from-gray-900/90 to-black/90 border-gold/20">
                <h3 className="text-white font-semibold text-xl mb-4">Your Documents</h3>
                <p className="text-gray-300">Document management features would be implemented here, including secure file upload, download, and sharing capabilities.</p>
              </Card>
            </TabsContent>

            <TabsContent value="appointments">
              <Card className="p-6 bg-gradient-to-br from-gray-900/90 to-black/90 border-gold/20">
                <h3 className="text-white font-semibold text-xl mb-4">Your Appointments</h3>
                <p className="text-gray-300">Appointment scheduling and management features would be implemented here.</p>
              </Card>
            </TabsContent>

            <TabsContent value="settings">
              <Card className="p-6 bg-gradient-to-br from-gray-900/90 to-black/90 border-gold/20">
                <h3 className="text-white font-semibold text-xl mb-4">Account Settings</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-white font-semibold mb-2">Email</label>
                    <Input
                      type="email"
                      value={profile?.email || ''}
                      disabled
                      className="bg-white/10 border-white/20 text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-2">Name</label>
                    <Input
                      value={profile?.name || ''}
                      disabled
                      className="bg-white/10 border-white/20 text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-2">Member Since</label>
                    <p className="text-gray-300">
                      {profile?.createdAt ? new Date(profile.createdAt).toLocaleDateString() : 'N/A'}
                    </p>
                  </div>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </div>
  );
}