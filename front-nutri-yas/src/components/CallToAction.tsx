import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, CheckCircle, Users } from 'lucide-react';

const features = [
  'Nutricionistas Especialistas',
  'Planos Personalizados',
  'Suporte Contínuo',
  'Orientação 24/7'
];

const CallToAction = () => {
  return (
    <section className="relative pt-32 lg:pt-40 pb-20 bg-[#364030]">
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none pointer-events-none">
        <svg
          viewBox="0 0 1440 75"
          className="w-full h-[75px]"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1440,0 C1340,75 1240,75 1040,75 L0,75 L0,0 L1440,0 Z"
            fill="#f9fafb"
          />
        </svg>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative">
            <div className="bg-gradient-to-r from-sage-500 to-golden-500 rounded-3xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-sage-400 rounded-full -translate-y-20 translate-x-20 opacity-50"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-golden-600 rounded-full translate-y-16 -translate-x-16 opacity-50"></div>
              
              <div className="relative z-10">
                <img
                  src="https://images.pexels.com/photos/5945741/pexels-photo-5945741.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Mulher com smoothie verde"
                  className="w-full max-w-md mx-auto rounded-2xl"
                />
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl z-20">
              <div className="flex items-center space-x-4">
                <div className="bg-sage-100 p-3 rounded-full">
                  <CheckCircle className="h-6 w-6 text-sage-600" />
                </div>
                <div>
                  <p className="font-semibold text-neutral-900">(Programas) <br/> Detox & Perda de Peso</p>
                  <p className="text-sm text-neutral-600">Especialista em smoothie verde</p>
                </div>
              </div>
            </div>

            <div className="absolute top-8 -left-6 bg-white rounded-2xl p-4 shadow-xl z-20">
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-sage-600" />
                <div>
                  <p className="font-semibold text-neutral-900 text-sm">(Desafios)<br/>Resultados Rápidos</p>
                  <p className="text-xs text-neutral-600">Em apenas 30 dias</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-white">
                Nosso Tempo Para
                <span className="text-sage-200"> Preparar Para</span>
                O Futuro
              </h2>
              <p className="text-lg text-white/90 leading-relaxed">
                Junte-se ao nosso programa abrangente de nutrição projetado para transformar sua 
                saúde e estilo de vida. Obtenha planos de refeições personalizados, orientação especializada 
                e suporte contínuo em sua jornada de bem-estar.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-sage-200 flex-shrink-0" />
                  <span className="text-white">{feature}</span>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-neutral-600">A partir de</p>
                  <p className="text-3xl font-bold text-neutral-900">
                    R$149<span className="text-lg text-neutral-600">/mês</span>
                  </p>
                </div>
                <Link 
                  to="/cadastro"
                  className="bg-gradient-to-r from-coral-500 to-orange-500 hover:from-coral-600 hover:to-orange-600 text-white px-8 py-3 rounded-full font-semibold transition-all hover:scale-105"
                >
                  Comece Hoje
                </Link>
              </div>
            </div>

            <div className="flex items-center space-x-6 pt-4">
              <div className="flex items-center">
                <Users className="h-5 w-5 text-sage-200 mr-2" />
                <span className="text-sm text-white/90">Junte-se a 2000+ membros</span>
              </div>
              <div className="flex items-center">
                <div className="flex text-golden-500">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg key={i} className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="ml-2 text-sm text-white/90">4.9/5 Avaliação</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;