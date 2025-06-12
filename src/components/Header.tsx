
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ShoppingBag, MessageCircle, Phone, Zap } from 'lucide-react';

const Header = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="sticky top-0 z-50 glass-effect border-b border-border/30">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-primary to-neon-green rounded-lg p-2 tech-glow">
              <ShoppingBag className="h-6 w-6 text-background" />
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-xl font-bold text-foreground">TechCatalog</span>
              <Zap className="h-4 w-4 text-primary animate-pulse" />
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`text-sm font-medium transition-all duration-300 hover:text-primary hover:glow ${
                isActive('/') ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              Produtos
            </Link>
            <Link 
              to="/contact" 
              className={`text-sm font-medium transition-all duration-300 hover:text-primary hover:glow ${
                isActive('/contact') ? 'text-primary' : 'text-muted-foreground'
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
              className="hidden sm:flex hover:bg-primary/10 transition-all duration-300"
              asChild
            >
              <Link to="/contact">
                <Phone className="h-4 w-4 mr-2" />
                Suporte
              </Link>
            </Button>
            
            <Button 
              size="sm"
              className="bg-gradient-to-r from-primary to-neon-green hover:from-primary/90 hover:to-neon-green/90 text-background font-medium tech-glow transition-all duration-300"
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
