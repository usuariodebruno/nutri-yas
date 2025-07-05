import React from 'react';
import { TrendingDown, Users, Utensils, Baby, Leaf, Apple } from 'lucide-react';
import bgProblemSolving from '../assets/img/problemSolving/bg_problem_solving.png';

const solutions = [
  {
    title: 'Programa de Perda de Peso',
    description: 'Gerenciamento sustentável de peso',
    image: 'https://images.pexels.com/photos/4474052/pexels-photo-4474052.jpeg?auto=compress&cs=tinysrgb&w=600',
    icon: TrendingDown
  },
  {
    title: 'Consultoria Nutricional',
    description: 'Orientação especializada individual',
    image: 'https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=600',
    icon: Users
  },
  {
    title: 'Nutrição Funcional',
    description: 'Alimentos como medicina natural',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600',
    icon: Apple
  },
  {
    title: 'Alimentação Saudável',
    description: 'Planejamento de refeições nutritivas',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600',
    icon: Utensils
  },
  {
    title: 'Nutrição Vegetariana',
    description: 'Dietas plant-based equilibradas',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600',
    icon: Leaf
  },
  {
    title: 'Nutrição Infantil',
    description: 'Planos pediátricos especializados',
    image: 'https://images.pexels.com/photos/3985363/pexels-photo-3985363.jpeg?auto=compress&cs=tinysrgb&w=600',
    icon: Baby
  }
];

const ProblemSolving = () => {
  return (
    <section className="relative py-16 lg:py-20 pb-24 lg:pb-32 bg-gradient-to-b from-sage-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
            Ajudamos Pessoas a Resolver
            <span className="text-sage-600"> Problemas Complexos</span>
          </h2>
          <p className="text-base lg:text-lg text-neutral-600 max-w-2xl mx-auto">
            Soluções nutricionais personalizadas para transformar sua saúde e bem-estar
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Card 1 - Grande */}
          <div className="lg:col-span-2 group cursor-pointer">
            <div className="relative overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2 h-80">
              <img
                src={solutions[0].image}
                alt={solutions[0].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="bg-coral-500 p-2 rounded-lg">
                    {React.createElement(solutions[0].icon, { className: "h-5 w-5 text-white" })}
                  </div>
                  {/* <div className="bg-coral-500 w-8 h-8 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">2</span>
                  </div> */}
                </div>
                <h3 className="font-bold text-lg mb-1">{solutions[0].title}</h3>
                <p className="text-sm text-white/90">{solutions[0].description}</p>
              </div>
            </div>
          </div>

          {/* Card 2 - Médio */}
          <div className="lg:col-span-2 group cursor-pointer">
            <div className="relative overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2 h-80">
              <img
                src={solutions[1].image}
                alt={solutions[1].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="bg-coral-500 p-2 rounded-lg">
                    {React.createElement(solutions[1].icon, { className: "h-5 w-5 text-white" })}
                  </div>
                  {/* <div className="bg-coral-500 w-8 h-8 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">2</span>
                  </div> */}
                </div>
                <h3 className="font-bold text-lg mb-1">{solutions[1].title}</h3>
                <p className="text-sm text-white/90">{solutions[1].description}</p>
              </div>
            </div>
          </div>

          {/* Cards menores */}
          <div className="lg:col-span-1 group cursor-pointer">
            <div className="relative overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2 h-64">
              <img
                src={solutions[2].image}
                alt={solutions[2].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="bg-coral-500 p-1.5 rounded-lg">
                    {React.createElement(solutions[2].icon, { className: "h-4 w-4 text-white" })}
                  </div>
                  {/* <div className="bg-coral-500 w-6 h-6 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">3</span>
                  </div> */}
                </div>
                <h3 className="font-bold text-sm mb-1">{solutions[2].title}</h3>
                <p className="text-xs text-white/90">{solutions[2].description}</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1 group cursor-pointer">
            <div className="relative overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2 h-64">
              <img
                src={solutions[3].image}
                alt={solutions[3].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="bg-coral-500 p-1.5 rounded-lg">
                    {React.createElement(solutions[3].icon, { className: "h-4 w-4 text-white" })}
                  </div>
                  {/* <div className="bg-coral-500 w-6 h-6 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">4</span>
                  </div> */}
                </div>
                <h3 className="font-bold text-sm mb-1">{solutions[3].title}</h3>
                <p className="text-xs text-white/90">{solutions[3].description}</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1 group cursor-pointer">
            <div className="relative overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2 h-64">
              <img
                src={solutions[4].image}
                alt={solutions[4].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="bg-coral-500 p-1.5 rounded-lg">
                    {React.createElement(solutions[4].icon, { className: "h-4 w-4 text-white" })}
                  </div>
                  {/* <div className="bg-coral-500 w-6 h-6 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">5</span>
                  </div> */}
                </div>
                <h3 className="font-bold text-sm mb-1">{solutions[4].title}</h3>
                <p className="text-xs text-white/90">{solutions[4].description}</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1 group cursor-pointer">
            <div className="relative overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2 h-64">
              <img
                src={solutions[5].image}
                alt={solutions[5].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="bg-coral-500 p-1.5 rounded-lg">
                    {React.createElement(solutions[5].icon, { className: "h-4 w-4 text-white" })}
                  </div>
                  {/* <div className="bg-coral-500 w-6 h-6 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">6</span>
                  </div> */}
                </div>
                <h3 className="font-bold text-sm mb-1">{solutions[5].title}</h3>
                <p className="text-xs text-white/90">{solutions[5].description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-20">
        <div className="w-full h-full bg-white" style={{
          borderTopLeftRadius: '100px',
          borderTopRightRadius: '0px'
        }}></div>
      </div>
    </section>
  );
};

export default ProblemSolving;