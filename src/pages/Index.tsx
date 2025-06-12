
import { useState } from 'react';
import { products } from '@/data/products';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import ChatSupport from '@/components/ChatSupport';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, Filter, Cpu, Zap, MessageCircle } from 'lucide-react';

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [chatOpen, setChatOpen] = useState(false);

  const categories = Array.from(new Set(products.map(p => p.category)));

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen gradient-bg">
      <Header />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center space-y-8 mb-16">
          <div className="space-y-6">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Cpu className="h-8 w-8 text-neon-cyan animate-pulse-glow" />
              <Zap className="h-6 w-6 text-neon-blue animate-bounce" />
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-foreground">
              Tech
              <span className="block tech-gradient bg-clip-text text-transparent animate-glow">
                Catalog
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Plataforma avançada de produtos com inteligência artificial integrada. 
              Explore especificações técnicas, compare garantias e tire dúvidas em tempo real.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5 group-hover:text-primary transition-colors" />
              <Input
                placeholder="Pesquisar produtos avançados..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 h-14 text-lg dark-glass cyber-border focus:border-neon-cyan/50 transition-all duration-300 focus:neon-glow"
              />
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              <Badge
                variant={selectedCategory === '' ? 'default' : 'outline'}
                className="cursor-pointer px-6 py-3 text-sm tech-glow transition-all duration-300 hover:scale-105 hover:neon-glow"
                onClick={() => setSelectedCategory('')}
              >
                <Filter className="h-3 w-3 mr-2" />
                Todos
              </Badge>
              {categories.map(category => (
                <Badge
                  key={category}
                  variant={selectedCategory === category ? 'default' : 'outline'}
                  className="cursor-pointer px-6 py-3 text-sm transition-all duration-300 hover:scale-105 hover:neon-glow"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="space-y-10">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold text-foreground flex items-center space-x-3">
              <span>{selectedCategory ? `${selectedCategory}` : 'Todos os Produtos'}</span>
              <Badge variant="secondary" className="text-lg px-3 py-1 cyber-border">
                {filteredProducts.length}
              </Badge>
            </h2>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="text-center py-20">
              <div className="dark-glass rounded-2xl p-12 max-w-md mx-auto cyber-border">
                <Cpu className="h-16 w-16 text-muted-foreground mx-auto mb-4 opacity-50" />
                <p className="text-muted-foreground text-xl">
                  Nenhum produto encontrado para sua busca.
                </p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <div key={product.id} className="animate-fade-in">
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <div className="dark-glass rounded-3xl p-10 max-w-2xl mx-auto tech-glow cyber-border">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Zap className="h-8 w-8 text-neon-cyan animate-pulse-glow" />
              <h3 className="text-3xl font-bold text-foreground">
                Assistente IA Avançado
              </h3>
            </div>
            <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
              Nossa inteligência artificial especializada responde dúvidas técnicas sobre produtos, 
              especificações, compatibilidade e políticas de garantia em tempo real.
            </p>
            <button
              onClick={() => setChatOpen(true)}
              className="tech-gradient hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 neon-glow hover:scale-105"
            >
              <MessageCircle className="h-5 w-5 mr-3 inline" />
              Iniciar Conversa com IA
            </button>
          </div>
        </div>
      </section>

      <Footer />
      <ChatSupport isOpen={chatOpen} onToggle={() => setChatOpen(!chatOpen)} />
    </div>
  );
};

export default Index;
