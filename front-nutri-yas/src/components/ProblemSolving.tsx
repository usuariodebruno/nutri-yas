import React from 'react';
import { TrendingDown, Users, Utensils, Baby, Leaf, Apple } from 'lucide-react';

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
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
            Soluções Nutricionais
            <span className="text-sage-600"> Especializadas</span>
          </h2>
          <p className="text-base lg:text-lg text-neutral-600 max-w-2xl mx-auto">
            Nossa abordagem abrangente oferece soluções nutricionais personalizadas 
            para diferentes necessidades e objetivos de saúde.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {solutions.map((solution, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
                <div className="aspect-w-16 aspect-h-10 relative">
                  <img
                    src={solution.image}
                    alt={solution.title}
                    className="w-full h-40 lg:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                
                <div className="p-4 lg:p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="bg-sage-100 p-2 rounded-lg group-hover:bg-gradient-to-r group-hover:from-sage-500 group-hover:to-golden-500 transition-all">
                      <solution.icon className="h-4 w-4 lg:h-5 lg:w-5 text-sage-600 group-hover:text-white" />
                    </div>
                    <h3 className="font-semibold text-neutral-900 text-sm lg:text-base">{solution.title}</h3>
                  </div>
                  <p className="text-neutral-600 text-xs lg:text-sm">{solution.description}</p>
                </div>

                <div className="absolute top-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full p-2">
                    <solution.icon className="h-3 w-3 lg:h-4 lg:w-4 text-sage-600" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSolving;