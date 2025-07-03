import React from 'react';
import { Link } from 'react-router-dom';
import { User, Play, BookOpen, Utensils, Calendar, MessageCircle, LogOut, Bell, Settings } from 'lucide-react';

const AreaPaciente = () => {
  const videos = [
    {
      id: 1,
      title: 'Introdução à Nutrição Funcional',
      duration: '12:30',
      thumbnail: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Entenda os princípios básicos da nutrição funcional'
    },
    {
      id: 2,
      title: 'Como Ler Rótulos de Alimentos',
      duration: '8:45',
      thumbnail: 'https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Aprenda a identificar ingredientes saudáveis'
    },
    {
      id: 3,
      title: 'Preparação de Refeições Saudáveis',
      duration: '15:20',
      thumbnail: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Dicas práticas para meal prep'
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="flex items-center">
              <div className="bg-gradient-to-r from-sage-500 to-golden-500 text-white p-2 rounded-lg">
                <User className="h-6 w-6" />
              </div>
              <span className="ml-2 text-xl font-bold text-neutral-900">VidaSaudável</span>
            </Link>

            <div className="flex items-center space-x-4">
              <button className="p-2 text-neutral-600 hover:text-sage-600 transition-colors">
                <Bell className="h-5 w-5" />
              </button>
              <button className="p-2 text-neutral-600 hover:text-sage-600 transition-colors">
                <Settings className="h-5 w-5" />
              </button>
              <a 
                href="https://wa.me/5511999999999" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-neutral-600 hover:text-sage-600 transition-colors"
              >
                <MessageCircle className="h-5 w-5 mr-2 text-green-500" />
                <span className="text-sm">Suporte</span>
              </a>
              <Link 
                to="/" 
                className="flex items-center text-neutral-600 hover:text-coral-600 transition-colors"
              >
                <LogOut className="h-5 w-5 mr-2" />
                <span className="text-sm">Sair</span>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-sage-500 to-golden-500 rounded-2xl p-6 lg:p-8 text-white mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl lg:text-3xl font-bold mb-2">Bem-vindo, Maria!</h1>
              <p className="text-sage-100">Sua jornada para uma vida mais saudável continua aqui</p>
            </div>
            <div className="hidden lg:block">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                <Calendar className="h-8 w-8 mb-2" />
                <p className="text-sm">Próxima consulta</p>
                <p className="font-semibold">15 de Janeiro</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Link 
            to="/plano-alimentar"
            className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 group"
          >
            <div className="flex items-center space-x-4">
              <div className="bg-coral-100 p-3 rounded-xl group-hover:bg-gradient-to-r group-hover:from-coral-500 group-hover:to-orange-500 transition-all">
                <Utensils className="h-6 w-6 text-coral-600 group-hover:text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-neutral-900">Meu Plano Alimentar</h3>
                <p className="text-sm text-neutral-600">Acesse seu cardápio personalizado</p>
              </div>
            </div>
          </Link>

          <Link 
            to="/conteudo-educativo"
            className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 group"
          >
            <div className="flex items-center space-x-4">
              <div className="bg-sage-100 p-3 rounded-xl group-hover:bg-gradient-to-r group-hover:from-sage-500 group-hover:to-golden-500 transition-all">
                <BookOpen className="h-6 w-6 text-sage-600 group-hover:text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-neutral-900">Conteúdo Educativo</h3>
                <p className="text-sm text-neutral-600">Artigos e dicas sobre nutrição</p>
              </div>
            </div>
          </Link>

          <a 
            href="https://wa.me/5511999999999" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 group"
          >
            <div className="flex items-center space-x-4">
              <div className="bg-green-100 p-3 rounded-xl group-hover:bg-green-500 transition-all">
                <MessageCircle className="h-6 w-6 text-green-600 group-hover:text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-neutral-900">Falar com Nutricionista</h3>
                <p className="text-sm text-neutral-600">Tire suas dúvidas pelo WhatsApp</p>
              </div>
            </div>
          </a>
        </div>

        {/* Videos Section */}
        <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-neutral-900">Vídeos Educativos</h2>
            <button className="text-sage-600 hover:text-sage-700 font-medium">Ver todos</button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video) => (
              <div key={video.id} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-xl mb-4">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-3">
                      <Play className="h-6 w-6 text-sage-600" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </div>
                </div>
                <h3 className="font-semibold text-neutral-900 mb-2">{video.title}</h3>
                <p className="text-sm text-neutral-600">{video.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Progress Section */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h3 className="text-xl font-bold text-neutral-900 mb-4">Meu Progresso</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-neutral-700">Meta de Peso</span>
                  <span className="text-sm text-neutral-600">75% concluído</span>
                </div>
                <div className="w-full bg-neutral-200 rounded-full h-2">
                  <div className="bg-gradient-to-r from-sage-500 to-golden-500 h-2 rounded-full" style={{ width: '75%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-neutral-700">Hidratação Diária</span>
                  <span className="text-sm text-neutral-600">60% concluído</span>
                </div>
                <div className="w-full bg-neutral-200 rounded-full h-2">
                  <div className="bg-gradient-to-r from-coral-500 to-orange-500 h-2 rounded-full" style={{ width: '60%' }}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h3 className="text-xl font-bold text-neutral-900 mb-4">Próximos Compromissos</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 p-3 bg-sage-50 rounded-lg">
                <Calendar className="h-5 w-5 text-sage-600" />
                <div>
                  <p className="font-medium text-neutral-900">Consulta de Retorno</p>
                  <p className="text-sm text-neutral-600">15 de Janeiro, 14:00</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-golden-50 rounded-lg">
                <Calendar className="h-5 w-5 text-golden-600" />
                <div>
                  <p className="font-medium text-neutral-900">Avaliação de Progresso</p>
                  <p className="text-sm text-neutral-600">22 de Janeiro, 10:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AreaPaciente;