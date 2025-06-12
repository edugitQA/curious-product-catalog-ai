
import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { getProductById } from '@/data/products';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ChatSupport from '@/components/ChatSupport';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { 
  ArrowLeft, 
  ShoppingCart, 
  Shield, 
  Check, 
  Star,
  MessageCircle,
  Heart,
  Share2
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [chatOpen, setChatOpen] = useState(false);
  const { toast } = useToast();
  
  if (!id) {
    return <div>Produto não encontrado</div>;
  }

  const product = getProductById(id);

  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-bg">
        <Header />
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-2xl font-bold mb-4">Produto não encontrado</h1>
          <Button asChild>
            <Link to="/">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Voltar aos produtos
            </Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price);
  };

  const handleAddToCart = () => {
    toast({
      title: "Produto adicionado!",
      description: "O produto foi adicionado ao seu carrinho.",
    });
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: product.description,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast({
        title: "Link copiado!",
        description: "O link do produto foi copiado para a área de transferência.",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-bg">
      <Header />

      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Button variant="ghost" asChild className="mb-4">
            <Link to="/">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Voltar aos produtos
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="space-y-4">
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-lg"
              />
              {!product.inStock && (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center rounded-2xl">
                  <Badge variant="secondary" className="bg-white text-foreground text-lg px-4 py-2">
                    Fora de Estoque
                  </Badge>
                </div>
              )}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <Badge className="mb-3">{product.category}</Badge>
              <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                {product.name}
              </h1>
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-muted-foreground">(4.8/5 - 124 avaliações)</span>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {product.description}
              </p>
            </div>

            <div className="space-y-4">
              <div className="text-4xl font-bold text-primary">
                {formatPrice(product.price)}
              </div>
              
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-green-600" />
                <span className="text-sm font-medium">
                  Garantia de {product.warranty.duration}
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <div className="flex space-x-3">
                <Button 
                  size="lg" 
                  className="flex-1 bg-primary hover:bg-primary/90"
                  disabled={!product.inStock}
                  onClick={handleAddToCart}
                >
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  {product.inStock ? 'Adicionar ao Carrinho' : 'Indisponível'}
                </Button>
                <Button variant="outline" size="lg">
                  <Heart className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" onClick={handleShare}>
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full"
                onClick={() => setChatOpen(true)}
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                Tire suas dúvidas com nossa IA
              </Button>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-16 space-y-8">
          {/* Features */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Check className="h-5 w-5 mr-2 text-green-600" />
                Características
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {product.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-green-600 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Warranty Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="h-5 w-5 mr-2 text-blue-600" />
                Informações de Garantia
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Duração: {product.warranty.duration}</h4>
                <p className="text-muted-foreground text-sm mb-4">{product.warranty.terms}</p>
              </div>
              
              <Separator />
              
              <div>
                <h4 className="font-semibold mb-3">Cobertura:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {product.warranty.coverage.map((item, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Check className="h-4 w-4 text-green-600 flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Support CTA */}
          <Card className="bg-brand-50 border-brand-200">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Dúvidas sobre este produto?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                Nossa IA especializada pode responder questões específicas sobre 
                {product.name}, garantia, compatibilidade e muito mais.
              </p>
              <Button 
                size="lg"
                onClick={() => setChatOpen(true)}
                className="bg-primary hover:bg-primary/90"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                Conversar sobre este produto
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
      <ChatSupport isOpen={chatOpen} onToggle={() => setChatOpen(!chatOpen)} />
    </div>
  );
};

export default ProductDetail;
