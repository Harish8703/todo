import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CheckSquare, ArrowRight, Calendar, Flag, Users } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

const Index = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/dashboard');
    }
  }, [user, navigate]);

  const features = [
    {
      icon: CheckSquare,
      title: "Task Management",
      description: "Create, organize, and track your tasks efficiently"
    },
    {
      icon: Calendar,
      title: "Due Dates",
      description: "Never miss a deadline with smart date tracking"
    },
    {
      icon: Flag,
      title: "Priority Levels",
      description: "Set priorities to focus on what matters most"
    },
    {
      icon: Users,
      title: "Personal Workspace",
      description: "Your private space to manage all your tasks"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-accent/20">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-8 animate-fade-in">
            <CheckSquare className="h-16 w-16 text-primary mr-4" />
            <h1 className="text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              TaskFlow
            </h1>
          </div>
          
          <p className="text-xl text-muted-foreground mb-8 animate-slide-in-up">
            Your personal task management companion. Organize, prioritize, and accomplish your goals with ease.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-in-up">
            <Button 
              size="lg" 
              onClick={() => navigate('/auth')}
              className="text-lg px-8 py-6 flex items-center gap-2"
            >
              Get Started
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => navigate('/auth')}
              className="text-lg px-8 py-6"
            >
              Sign In
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Why Choose TaskFlow?</h2>
          <p className="text-muted-foreground text-lg">
            Simple, powerful features to help you stay organized and productive
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="text-center p-6 rounded-lg bg-gradient-card border-0 shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="bg-gradient-card rounded-2xl p-12 text-center shadow-lg border-0">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Organized?</h2>
          <p className="text-muted-foreground text-lg mb-8">
            Join thousands of users who have transformed their productivity with TaskFlow
          </p>
          <Button 
            size="lg" 
            onClick={() => navigate('/auth')}
            className="text-lg px-8 py-6 flex items-center gap-2 mx-auto"
          >
            Start Your Journey
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
