import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, Search, Clock, User, Heart, Leaf, Apple } from 'lucide-react';

const ConteudoEducativo = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('todos');

  const categories = [
    { id: 'todos', label: 'Todos', icon: BookOpen },
    { id: 'funcional', label: 'Nutrição Funcional', icon: Heart },
    { id: 'vegetariana', label: 'Nutrição Vegetariana', icon: Leaf },
    { id: 'esportiva', label: 'Nutrição Esportiva', icon: Apple },
    { id: 'receitas', label: 'Receitas Saudáveis', icon: User }
  ];

  const articles = [
    {
      id: 1,
      title: 'Os Fundamentos da Nutrição Funcional',
      category: 'funcional',
      readTime: '8 min',
      author: 'Dra. Ana Silva',
      date: '10 de Janeiro, 2024',
      excerpt: 'Entenda como a nutrição funcional pode transformar sua saúde através de alimentos específicos que atuam como medicina natural.',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400',
      content: `
        <h2>O que é Nutrição Funcional?</h2>
        <p>A nutrição funcional é uma abordagem que considera o alimento como medicina, focando na individualidade bioquímica de cada pessoa. Diferente da nutrição tradicional, que se concentra apenas em calorias e macronutrientes, a nutrição funcional investiga as causas raiz dos problemas de saúde.</p>
        
        <h3>Princípios Fundamentais</h3>
        <ul>
          <li><strong>Individualidade Bioquímica:</strong> Cada pessoa tem necessidades nutricionais únicas</li>
          <li><strong>Alimento como Medicina:</strong> Os alimentos podem prevenir e tratar doenças</li>
          <li><strong>Abordagem Sistêmica:</strong> O corpo funciona como um sistema integrado</li>
          <li><strong>Prevenção:</strong> Foco na prevenção ao invés do tratamento de sintomas</li>
        </ul>
        
        <h3>Benefícios da Nutrição Funcional</h3>
        <p>A nutrição funcional pode ajudar com:</p>
        <ul>
          <li>Melhora da digestão e absorção de nutrientes</li>
          <li>Redução de inflamações crônicas</li>
          <li>Aumento dos níveis de energia</li>
          <li>Fortalecimento do sistema imunológico</li>
          <li>Melhora do humor e função cognitiva</li>
        </ul>
        
        <h3>Como Implementar</h3>
        <p>Para começar com a nutrição funcional:</p>
        <ol>
          <li>Faça uma avaliação completa de sua saúde atual</li>
          <li>Identifique possíveis deficiências nutricionais</li>
          <li>Elimine alimentos inflamatórios</li>
          <li>Inclua alimentos ricos em nutrientes</li>
          <li>Monitore as mudanças em seu bem-estar</li>
        </ol>
      `
    },
    {
      id: 2,
      title: 'Guia Completo da Nutrição Vegetariana',
      category: 'vegetariana',
      readTime: '12 min',
      author: 'Dra. Carla Santos',
      date: '8 de Janeiro, 2024',
      excerpt: 'Descubra como manter uma dieta vegetariana equilibrada e nutritiva, garantindo todos os nutrientes essenciais para sua saúde.',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400',
      content: `
        <h2>Nutrição Vegetariana: Mitos e Verdades</h2>
        <p>A dieta vegetariana, quando bem planejada, pode fornecer todos os nutrientes necessários para uma vida saudável. É importante desmistificar alguns conceitos e entender como obter uma nutrição completa.</p>
        
        <h3>Tipos de Vegetarianismo</h3>
        <ul>
          <li><strong>Ovolactovegetariano:</strong> Exclui carnes, mas inclui ovos e laticínios</li>
          <li><strong>Lactovegetariano:</strong> Exclui carnes e ovos, mas inclui laticínios</li>
          <li><strong>Ovovegetariano:</strong> Exclui carnes e laticínios, mas inclui ovos</li>
          <li><strong>Vegano:</strong> Exclui todos os produtos de origem animal</li>
        </ul>
        
        <h3>Nutrientes de Atenção</h3>
        <p>Alguns nutrientes requerem atenção especial na dieta vegetariana:</p>
        <ul>
          <li><strong>Vitamina B12:</strong> Suplementação é essencial para veganos</li>
          <li><strong>Ferro:</strong> Combine com vitamina C para melhor absorção</li>
          <li><strong>Proteínas:</strong> Combine diferentes fontes vegetais</li>
          <li><strong>Ômega-3:</strong> Inclua sementes de chia, linhaça e nozes</li>
          <li><strong>Cálcio:</strong> Vegetais verde-escuros e sementes de gergelim</li>
        </ul>
        
        <h3>Fontes de Proteína Vegetal</h3>
        <ul>
          <li>Leguminosas (feijões, lentilhas, grão-de-bico)</li>
          <li>Quinoa e amaranto</li>
          <li>Nozes e sementes</li>
          <li>Tofu e tempeh</li>
          <li>Spirulina e chlorella</li>
        </ul>
      `
    },
    {
      id: 3,
      title: 'Nutrição Esportiva: Maximizando Performance',
      category: 'esportiva',
      readTime: '10 min',
      author: 'Dr. Roberto Lima',
      date: '5 de Janeiro, 2024',
      excerpt: 'Aprenda como a nutrição adequada pode melhorar seu desempenho esportivo e acelerar a recuperação muscular.',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400',
      content: `
        <h2>Nutrição para Atletas e Praticantes de Exercícios</h2>
        <p>A nutrição esportiva é fundamental para otimizar o desempenho, acelerar a recuperação e prevenir lesões. Cada fase do exercício requer estratégias nutricionais específicas.</p>
        
        <h3>Periodização Nutricional</h3>
        <h4>Pré-treino (1-3 horas antes)</h4>
        <ul>
          <li>Carboidratos de fácil digestão</li>
          <li>Proteína moderada</li>
          <li>Baixo teor de gordura e fibras</li>
          <li>Hidratação adequada</li>
        </ul>
        
        <h4>Durante o treino</h4>
        <ul>
          <li>Hidratação constante</li>
          <li>Carboidratos para exercícios > 60 minutos</li>
          <li>Eletrólitos em atividades intensas</li>
        </ul>
        
        <h4>Pós-treino (até 2 horas após)</h4>
        <ul>
          <li>Proteína para síntese muscular</li>
          <li>Carboidratos para reposição de glicogênio</li>
          <li>Antioxidantes para reduzir inflamação</li>
          <li>Reidratação completa</li>
        </ul>
        
        <h3>Suplementação Esportiva</h3>
        <p>Suplementos que podem ser benéficos:</p>
        <ul>
          <li><strong>Whey Protein:</strong> Recuperação muscular</li>
          <li><strong>Creatina:</strong> Força e potência</li>
          <li><strong>BCAA:</strong> Redução do catabolismo</li>
          <li><strong>Beta-alanina:</strong> Resistência muscular</li>
          <li><strong>Cafeína:</strong> Energia e foco</li>
        </ul>
      `
    },
    {
      id: 4,
      title: '10 Receitas Saudáveis para o Dia a Dia',
      category: 'receitas',
      readTime: '15 min',
      author: 'Chef Marina Costa',
      date: '3 de Janeiro, 2024',
      excerpt: 'Receitas práticas e nutritivas para facilitar sua rotina alimentar saudável sem abrir mão do sabor.',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400',
      content: `
        <h2>Receitas Saudáveis e Práticas</h2>
        <p>Comer bem não precisa ser complicado. Aqui estão receitas simples e nutritivas para o seu dia a dia.</p>
        
        <h3>1. Smoothie Verde Energizante</h3>
        <h4>Ingredientes:</h4>
        <ul>
          <li>1 banana</li>
          <li>1 xícara de espinafre</li>
          <li>1/2 abacate</li>
          <li>1 colher de sopa de sementes de chia</li>
          <li>200ml de água de coco</li>
        </ul>
        <h4>Modo de preparo:</h4>
        <p>Bata todos os ingredientes no liquidificador até obter consistência cremosa. Sirva imediatamente.</p>
        
        <h3>2. Salada de Quinoa com Vegetais</h3>
        <h4>Ingredientes:</h4>
        <ul>
          <li>1 xícara de quinoa cozida</li>
          <li>1 pepino picado</li>
          <li>1 tomate picado</li>
          <li>1/4 de xícara de hortelã</li>
          <li>2 colheres de sopa de azeite</li>
          <li>Suco de 1 limão</li>
        </ul>
        <h4>Modo de preparo:</h4>
        <p>Misture todos os ingredientes em uma tigela. Tempere com azeite, limão, sal e pimenta a gosto.</p>
        
        <h3>3. Salmão Grelhado com Legumes</h3>
        <h4>Ingredientes:</h4>
        <ul>
          <li>1 filé de salmão</li>
          <li>1 abobrinha em fatias</li>
          <li>1 berinjela em cubos</li>
          <li>1 pimentão vermelho</li>
          <li>Ervas finas a gosto</li>
        </ul>
        <h4>Modo de preparo:</h4>
        <p>Grelhe o salmão por 4-5 minutos de cada lado. Refogue os legumes com pouco azeite. Sirva junto.</p>
      `
    }
  ];

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'todos' || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const [selectedArticle, setSelectedArticle] = useState<typeof articles[0] | null>(null);

  if (selectedArticle) {
    return (
      <div className="min-h-screen bg-neutral-50">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-neutral-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center py-4">
              <button 
                onClick={() => setSelectedArticle(null)}
                className="flex items-center text-neutral-600 hover:text-sage-600 transition-colors mr-4"
              >
                <ArrowLeft className="h-5 w-5 mr-2" />
                Voltar aos artigos
              </button>
              <Link to="/area-paciente" className="flex items-center">
                <div className="bg-gradient-to-r from-sage-500 to-golden-500 text-white p-2 rounded-lg">
                  <User className="h-6 w-6" />
                </div>
                <span className="ml-2 text-xl font-bold text-neutral-900">Yasmin Araújo</span>
              </Link>
            </div>
          </div>
        </header>

        {/* Article Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <article className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <img
              src={selectedArticle.image}
              alt={selectedArticle.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-8">
              <div className="flex items-center space-x-4 text-sm text-neutral-600 mb-4">
                <span>{selectedArticle.author}</span>
                <span>•</span>
                <span>{selectedArticle.date}</span>
                <span>•</span>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  {selectedArticle.readTime}
                </div>
              </div>
              
              <h1 className="text-3xl font-bold text-neutral-900 mb-6">{selectedArticle.title}</h1>
              
              <div 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: selectedArticle.content }}
              />
            </div>
          </article>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center py-4">
            <Link 
              to="/area-paciente" 
              className="flex items-center text-neutral-600 hover:text-sage-600 transition-colors mr-4"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Voltar à área do paciente
            </Link>
            <Link to="/area-paciente" className="flex items-center">
              <div className="bg-gradient-to-r from-sage-500 to-golden-500 text-white p-2 rounded-lg">
                <User className="h-6 w-6" />
              </div>
              <span className="ml-2 text-xl font-bold text-neutral-900">Yasmin Araújo</span>
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-neutral-900 mb-4">Conteúdo Educativo</h1>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Aprenda sobre nutrição com nossos artigos especializados e dicas práticas para uma vida mais saudável.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-2xl p-6 shadow-lg mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-neutral-400" />
              <input
                type="text"
                placeholder="Buscar artigos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-sage-500 focus:border-transparent"
              />
            </div>
            
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center px-4 py-2 rounded-xl font-medium transition-all ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-sage-500 to-golden-500 text-white'
                      : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                  }`}
                >
                  <category.icon className="h-4 w-4 mr-2" />
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article) => (
            <article 
              key={article.id} 
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer"
              onClick={() => setSelectedArticle(article)}
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center space-x-2 text-sm text-neutral-600 mb-3">
                  <span>{article.author}</span>
                  <span>•</span>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {article.readTime}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-neutral-900 mb-3 line-clamp-2">
                  {article.title}
                </h3>
                
                <p className="text-neutral-600 text-sm mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs text-neutral-500">{article.date}</span>
                  <button className="text-sage-600 hover:text-sage-700 font-medium text-sm">
                    Ler mais →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredArticles.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="h-12 w-12 text-neutral-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-neutral-900 mb-2">Nenhum artigo encontrado</h3>
            <p className="text-neutral-600">Tente ajustar sua busca ou filtros.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ConteudoEducativo;