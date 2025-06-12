
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ChatSupport from '@/components/ChatSupport';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  MessageCircle, 
  Send,
  HelpCircle,
  Shield,
  Headphones
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [chatOpen, setChatOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simular envio do formulário
    console.log('Enviando formulário:', formData);
    
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve. Para respostas mais rápidas, use nosso chat de IA.",
    });

    // Limpar formulário
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const faqItems = [
    {
      question: "Como funciona a garantia dos produtos?",
      answer: "Todos os produtos têm garantia contra defeitos de fabricação. A duração varia por produto, geralmente entre 1 a 5 anos."
    },
    {
      question: "Quanto tempo demora a entrega?",
      answer: "Para a região metropolitana: 1-2 dias úteis. Para outras regiões: 3-7 dias úteis."
    },
    {
      question: "Posso devolver um produto?",
      answer: "Sim, você tem 7 dias corridos para devolução sem uso, conforme o Código de Defesa do Consumidor."
    },
    {
      question: "Como acompanhar meu pedido?",
      answer: "Após a compra, você recebe um código de rastreamento por email para acompanhar a entrega."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-bg">
      <Header />

      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Entre em Contato
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Estamos aqui para ajudar! Use nosso chat de IA para respostas instantâneas 
            ou entre em contato através dos canais abaixo.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Headphones className="h-5 w-5 mr-2 text-primary" />
                  Suporte Rápido
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <Button 
                    onClick={() => setChatOpen(true)}
                    className="w-full bg-primary hover:bg-primary/90"
                    size="lg"
                  >
                    <MessageCircle className="h-5 w-5 mr-2" />
                    Chat com IA
                  </Button>
                  <Badge variant="outline" className="mt-2">
                    Resposta Instantânea
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground text-center">
                  Nossa IA responde dúvidas sobre produtos, garantias e atendimento 24/7.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Informações de Contato</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-sm text-muted-foreground">contato@productcatalog.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Telefone</p>
                    <p className="text-sm text-muted-foreground">(11) 9999-9999</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Endereço</p>
                    <p className="text-sm text-muted-foreground">São Paulo, SP - Brasil</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Horário</p>
                    <p className="text-sm text-muted-foreground">
                      Seg-Sex: 9h às 18h<br />
                      Chat IA: 24/7
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Envie uma Mensagem</CardTitle>
                <p className="text-muted-foreground">
                  Para dúvidas rápidas, recomendamos usar o chat de IA. 
                  Para questões mais complexas, use o formulário abaixo.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Nome Completo
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Seu nome completo"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Assunto
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      placeholder="Como podemos ajudar?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Mensagem
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      placeholder="Descreva sua dúvida ou solicitação..."
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90">
                    <Send className="h-4 w-4 mr-2" />
                    Enviar Mensagem
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <HelpCircle className="h-5 w-5 mr-2" />
              Perguntas Frequentes
            </CardTitle>
            <p className="text-muted-foreground">
              Confira as dúvidas mais comuns. Para questões específicas sobre produtos, 
              use nosso chat de IA.
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {faqItems.map((item, index) => (
                <div key={index} className="space-y-2">
                  <h4 className="font-medium text-foreground">{item.question}</h4>
                  <p className="text-sm text-muted-foreground">{item.answer}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-6 bg-brand-50 rounded-lg border border-brand-200">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">
                    Não encontrou sua resposta?
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Nossa IA pode responder dúvidas específicas sobre produtos, garantias e muito mais.
                  </p>
                </div>
                <Button 
                  onClick={() => setChatOpen(true)}
                  className="bg-primary hover:bg-primary/90"
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Perguntar à IA
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Footer />
      <ChatSupport isOpen={chatOpen} onToggle={() => setChatOpen(!chatOpen)} />
    </div>
  );
};

export default Contact;
