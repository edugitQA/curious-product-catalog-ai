
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  warranty: {
    duration: string;
    coverage: string[];
    terms: string;
  };
  features: string[];
  inStock: boolean;
}

export const products: Product[] = [
  {
    id: "laptop-pro-2024",
    name: "Laptop Pro 2024",
    description: "Laptop de alta performance com processador de última geração, ideal para profissionais e estudantes que precisam de poder computacional.",
    price: 2499.99,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&h=500&fit=crop",
    category: "Eletrônicos",
    warranty: {
      duration: "2 anos",
      coverage: [
        "Defeitos de fabricação",
        "Problemas de hardware",
        "Suporte técnico gratuito",
        "Reparo ou substituição"
      ],
      terms: "Garantia válida mediante apresentação da nota fiscal. Danos por mau uso não estão cobertos."
    },
    features: [
      "Processador Intel i7 13ª geração",
      "16GB RAM DDR5",
      "SSD 512GB NVMe",
      "Tela 15.6\" 4K IPS",
      "Placa de vídeo dedicada RTX 4060"
    ],
    inStock: true
  },
  {
    id: "smartphone-ultra",
    name: "Smartphone Ultra",
    description: "Smartphone premium com câmera profissional e bateria de longa duração. Perfeito para fotografia e uso intensivo.",
    price: 1299.99,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&h=500&fit=crop",
    category: "Eletrônicos",
    warranty: {
      duration: "1 ano",
      coverage: [
        "Defeitos de fabricação",
        "Problemas de software",
        "Bateria",
        "Tela (exceto quebra por queda)"
      ],
      terms: "Garantia limitada de 1 ano. Danos por líquidos e quedas não cobertos. Atualizações de software garantidas por 3 anos."
    },
    features: [
      "Câmera tripla 108MP + 12MP + 5MP",
      "Tela AMOLED 6.7\" 120Hz",
      "Bateria 5000mAh com carregamento rápido",
      "128GB de armazenamento",
      "Resistente à água IP68"
    ],
    inStock: true
  },
  {
    id: "cadeira-ergonomica",
    name: "Cadeira Ergonômica Premium",
    description: "Cadeira de escritório ergonômica com apoio lombar ajustável, projetada para máximo conforto durante longas horas de trabalho.",
    price: 899.99,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=500&fit=crop",
    category: "Móveis",
    warranty: {
      duration: "5 anos",
      coverage: [
        "Defeitos estruturais",
        "Mecanismos de ajuste",
        "Cilindro pneumático",
        "Rodízios e base"
      ],
      terms: "Garantia estendida de 5 anos para estrutura. Tecido e espuma têm garantia de 2 anos contra defeitos de fabricação."
    },
    features: [
      "Apoio lombar ajustável em altura",
      "Braços 4D reguláveis",
      "Base em alumínio polido",
      "Tecido mesh respirável",
      "Suporta até 150kg"
    ],
    inStock: true
  },
  {
    id: "fones-wireless-pro",
    name: "Fones Wireless Pro",
    description: "Fones de ouvido sem fio com cancelamento ativo de ruído e qualidade de áudio premium para uma experiência imersiva.",
    price: 349.99,
    image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=500&h=500&fit=crop",
    category: "Áudio",
    warranty: {
      duration: "1 ano",
      coverage: [
        "Defeitos de fabricação",
        "Problemas de conectividade",
        "Bateria",
        "Cancelamento de ruído"
      ],
      terms: "Garantia de 1 ano contra defeitos de fabricação. Almofadas e cabo USB não cobertos por desgaste natural."
    },
    features: [
      "Cancelamento ativo de ruído",
      "Autonomia de 30 horas",
      "Bluetooth 5.0",
      "Carregamento rápido (15min = 3h)",
      "Compatível com assistentes virtuais"
    ],
    inStock: false
  },
  {
    id: "monitor-gamer-4k",
    name: "Monitor Gamer 4K",
    description: "Monitor gaming 4K com alta taxa de atualização e tecnologia HDR para uma experiência visual excepcional em jogos e trabalho.",
    price: 799.99,
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&h=500&fit=crop",
    category: "Eletrônicos",
    warranty: {
      duration: "3 anos",
      coverage: [
        "Defeitos de pixel",
        "Problemas de backlight",
        "Conectores e cabos",
        "Defeitos de fabricação"
      ],
      terms: "Garantia de 3 anos para defeitos de fabricação. Política de pixel morto: substituição gratuita se mais de 5 pixels defeituosos."
    },
    features: [
      "Resolução 4K (3840x2160)",
      "Taxa de atualização 144Hz",
      "Tecnologia HDR10",
      "Tempo de resposta 1ms",
      "Conectores HDMI 2.1 e DisplayPort"
    ],
    inStock: true
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

export const getAvailableProducts = (): Product[] => {
  return products.filter(product => product.inStock);
};
