
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ShoppingBag, MessageCircle, Phone, Zap } from 'lucide-react';

const Header = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="sticky top-0 z-50 dark-glass border-b cyber-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="tech-gradient rounded-lg p-2 neon-glow">
              <ShoppingBag className="h-6 w-6 text-white" />
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-xl font-bold text-foreground">TechCatalog</span>
              <Zap className="h-4 w-4 text-neon-cyan animate-pulse-glow" />
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`text-sm font-medium transition-all duration-300 hover:text-neon-cyan hover:glow ${
                isActive('/') ? 'text-neon-cyan' : 'text-muted-foreground'
              }`}
            >
              Produtos
            </Link>
            <Link 
              to="/contact" 
              className={`text-sm font-medium transition-all duration-300 hover:text-neon-cyan hover:glow ${
                isActive('/contact') ? 'text-neon-cyan' : 'text-muted-foreground'
              }`}
            >
              Contato
            </Link>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center space-x-3">
            <Button 
              variant="ghost" 
              size="sm"
              className="hidden sm:flex hover:bg-primary/10 hover:text-neon-cyan transition-all duration-300"
              asChild
            >
              <Link to="/contact">
                <Phone className="h-4 w-4 mr-2" />
                Suporte
              </Link>
            </Button>
            
            <Button 
              size="sm"
              className="tech-gradient hover:from-cyan-600 hover:to-purple-700 text-white font-medium neon-glow transition-all duration-300"
            >
              <MessageCircle className="h-4 w-4 mr-2" />
              AI Chat
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
