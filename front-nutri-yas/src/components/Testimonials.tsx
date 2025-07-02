import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Maria S. Santos',
    role: 'Executiva de Negócios',
    content: 'O programa de nutrição transformou completamente meus níveis de energia e saúde geral. Perdi 11kg em 3 meses e me sinto incrível. Os planos de refeições personalizados tornaram muito fácil manter o foco.',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=150'
  },
  {
    name: 'João P. Silva',
    role: 'Engenheiro de Software',
    content: 'Como alguém com uma agenda corrida, achei que comer saudável era impossível. Este programa me provou o contrário. A orientação de preparo de refeições e receitas rápidas se encaixaram perfeitamente no meu estilo de vida.',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150'
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-sage-400/20 to-peach-300/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-neutral-900 mb-4">
            Veja Avaliações dos Nossos
            <span className="text-sage-600"> Clientes</span>
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Leia o que nossos clientes satisfeitos têm a dizer sobre sua jornada de transformação 
            com nossos programas de nutrição.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="flex text-golden-500">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <Quote className="h-8 w-8 text-sage-200 ml-auto" />
              </div>

              <p className="text-neutral-700 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <p className="font-semibold text-neutral-900">{testimonial.name}</p>
                  <p className="text-sm text-neutral-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-sage-500 to-golden-500 hover:from-sage-600 hover:to-golden-600 text-white px-8 py-3 rounded-full font-semibold transition-all hover:scale-105">
            Ler Mais Avaliações
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;