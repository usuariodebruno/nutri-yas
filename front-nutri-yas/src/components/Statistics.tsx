import React, { useState, useEffect } from 'react';

const stats = [
  { label: 'Acompanhamento Nutricional', value: 95, color: 'bg-sage-500' },
  { label: 'Gerenciamento de Peso', value: 88, color: 'bg-golden-500' },
  { label: 'Nutrição Funcional', value: 92, color: 'bg-coral-500' }
];

const Statistics = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('statistics');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="statistics" className="relative py-16 lg:py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Conteúdo textual */}
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900">
              Nutrição de Qualidade Para Seu
              <span className="text-sage-600"> Estilo de Vida Saudável</span>
            </h2>
            <p className="text-lg text-neutral-600">
              Nossos programas nutricionais cientificamente comprovados entregam resultados excepcionais.
              Aqui está o que nossos dados mostram sobre as taxas de sucesso dos clientes.
            </p>
          </div>

          {/* Estatísticas */}
          <div className="space-y-6">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-neutral-900">{stat.label}</span>
                  <span className="font-bold text-neutral-900">{stat.value}%</span>
                </div>
                <div className="w-full bg-neutral-200 rounded-full h-3">
                  <div
                    className={`h-3 rounded-full ${stat.color} transition-all duration-1000 ease-out`}
                    style={{
                      width: isVisible ? `${stat.value}%` : '0%'
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>     
    </section>
  );
};

export default Statistics;