import React from 'react';
import { Link } from 'react-router-dom';
import { Play, Star, User, Heart } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-peach-300 to-white pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 lg:space-y-8">
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-neutral-900 leading-tight">
                Nutrição com
                <span className="text-sage-600"> Propósito</span>,
                Saúde e Prazer
              </h1>
              <p className="text-base lg:text-lg text-neutral-600 leading-relaxed">
                Transforme seu estilo de vida com nossos programas abrangentes de nutrição. 
                Junte-se a milhares que alcançaram seus objetivos de saúde através de 
                nutrição adequada e orientação especializada.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/cadastro"
                className="bg-gradient-to-r from-coral-500 to-orange-500 hover:from-coral-600 hover:to-orange-600 text-white px-6 lg:px-8 py-3 lg:py-4 rounded-full font-semibold transition-all hover:scale-105 text-center"
              >
                Comece Hoje
              </Link>
              <button className="flex items-center justify-center sm:justify-start text-neutral-700 hover:text-sage-600 transition-colors">
                <div className="bg-white shadow-lg rounded-full p-3 mr-3">
                  <Play className="h-5 w-5 text-sage-600" />
                </div>
                <span className="hidden sm:inline">Assista Histórias de Sucesso</span>
                <span className="sm:hidden">Histórias de Sucesso</span>
              </button>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-4 sm:space-y-0 pt-4">
              <div className="flex items-center">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 lg:w-10 lg:h-10 bg-sage-100 rounded-full border-2 border-white flex items-center justify-center">
                      <User className="h-4 w-4 lg:h-5 lg:w-5 text-sage-600" />
                    </div>
                  ))}
                </div>
                <span className="ml-3 text-sm text-neutral-600">2000+ Clientes Felizes</span>
              </div>
              <div className="flex items-center">
                <div className="flex text-golden-500">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <span className="ml-2 text-sm text-neutral-600">4.9 Avaliação</span>
              </div>
            </div>
          </div>

          <div className="relative mt-8 lg:mt-0">
            <div className="relative z-10">
              <img
                src="https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Mulher comendo salada saudável"
                className="rounded-3xl shadow-2xl w-full"
              />
            </div>
            <div className="absolute top-4 lg:top-8 -right-2 lg:-right-4 bg-white rounded-2xl p-3 lg:p-4 shadow-lg">
              <div className="flex items-center space-x-2 lg:space-x-3">
                <div className="w-8 h-8 lg:w-12 lg:h-12 bg-sage-100 rounded-full flex items-center justify-center">
                  <Star className="h-4 w-4 lg:h-6 lg:w-6 text-sage-600" />
                </div>
                <div>
                  <p className="font-semibold text-neutral-900 text-sm lg:text-base">Resultados Excelentes</p>
                  <p className="text-xs lg:text-sm text-neutral-600">98% Taxa de Sucesso</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-2 lg:-bottom-4 left-4 lg:left-8 bg-white rounded-2xl p-3 lg:p-4 shadow-lg">
              <div className="flex items-center space-x-2 lg:space-x-3">
                <div className="w-8 h-8 lg:w-12 lg:h-12 bg-coral-100 rounded-full flex items-center justify-center">
                  <Heart className="h-4 w-4 lg:h-6 lg:w-6 text-coral-500" />
                </div>
                <div>
                  <p className="font-semibold text-neutral-900 text-sm lg:text-base">Estilo de Vida Saudável</p>
                  <p className="text-xs lg:text-sm text-neutral-600">Planos Personalizados</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;