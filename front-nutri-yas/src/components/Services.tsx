import React from 'react';
import { Heart, Target, Utensils, Leaf } from 'lucide-react';
import SectionDivider from "./SectionDivider"

const services = [
  {
    icon: Heart,
    title: 'Nutrição Funcional',
    description: 'Planos alimentares que tratam a raiz dos problemas de saúde através de alimentos como medicina.'
  },
  {
    icon: Target,
    title: 'Nutrição Esportiva',
    description: 'Estratégias nutricionais específicas para otimizar performance e recuperação de atletas.'
  },
  {
    icon: Leaf,
    title: 'Nutrição Vegetariana',
    description: 'Orientação especializada para dietas plant-based equilibradas e nutritivamente completas.'
  },
  {
    icon: Utensils,
    title: 'Planejamento Personalizado',
    description: 'Cardápios individualizados baseados em suas necessidades, preferências e objetivos.'
  }
];

const Services = () => {
  return (
    <section className="relative py-16 lg:py-20 pb-24 lg:pb-32 bg-gradient-to-b from-white to-peach-300/30 rounded-t-3xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6 lg:space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900">
                Nutrição Especializada Para Seu
                <span className="text-sage-600"> Estilo de Vida</span>
              </h2>
              <p className="text-base lg:text-lg text-neutral-600">
                Nossa metodologia comprovada oferece abordagens nutricionais específicas
                para diferentes necessidades e objetivos de saúde.
              </p>
            </div>

            <div className="grid gap-4 lg:gap-6">
              {services.map((service, index) => (
                <div key={index} className="group">
                  <div className="flex items-start space-x-4 p-4 lg:p-6 rounded-2xl bg-white shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="bg-sage-100 p-2 lg:p-3 rounded-xl group-hover:bg-gradient-to-r group-hover:from-sage-500 group-hover:to-golden-500 transition-all">
                      <service.icon className="h-5 w-5 lg:h-6 lg:w-6 text-sage-600 group-hover:text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-neutral-900 mb-2 text-sm lg:text-base">{service.title}</h3>
                      <p className="text-neutral-600 text-xs lg:text-sm">{service.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative w-full px-4 sm:px-6 lg:px-8">
            <div className="relative z-10">
              <img
                src="https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Nutricionista profissional"
                className="w-full object-cover"
                style={{
                  aspectRatio: '7 / 9', // mais largo e mais aberto
                  borderTopLeftRadius: '100% 60%',
                  borderTopRightRadius: '100% 60%',
                  borderBottomLeftRadius: '1rem',
                  borderBottomRightRadius: '1rem',
                  overflow: 'hidden',
                  display: 'block',
                }}
              />
            </div>

            <div className="absolute -bottom-4 lg:-bottom-6 right-4 lg:right-6 bg-white rounded-2xl p-4 lg:p-6 shadow-xl z-20">
              <div className="flex items-center space-x-3 lg:space-x-4">
                <div>
                  <p className="font-semibold text-neutral-900 text-sm lg:text-base">Especialista em Nutrição</p>
                  <p className="text-xs lg:text-sm text-neutral-600">1,5 Anos de Experiência</p>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
};

export default Services;