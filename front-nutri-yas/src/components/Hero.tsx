import { Link } from 'react-router-dom';
import { Play, Star, Heart } from 'lucide-react';
import nutricionistaHero from '../assets/img/hero/hero_destaque.png';

const Hero = () => {
  return (
    <section className="relative bg-cover bg-center h-screen flex items-center" style={{ backgroundImage: `url(${nutricionistaHero})` }}>
      <div className="absolute inset-0 bg-gradient-to-b from-sage-100/80 via-white/70 to-golden-100/60"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 lg:space-y-8">
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white leading-tight">
                Nutrição com
                <span className="text-[#E67C26]"> Propósito</span>,
                Saúde e Prazer
              </h1>
              <p className="text-base lg:text-lg text-white leading-relaxed">
                Transforme seu estilo de vida com nossos programas abrangentes de nutrição.
                Junte-se a milhares que alcançaram seus objetivos de saúde através de
                nutrição adequada e orientação especializada.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/questionario"
                className="bg-gradient-to-r from-coral-500 to-orange-500 hover:from-coral-600 hover:to-orange-600 text-white px-6 lg:px-8 py-3 lg:py-4 rounded-full font-semibold transition-all hover:scale-105 text-center"
              >
                Ser Saudável
              </Link>
              <button className="flex items-center justify-center sm:justify-start text-white hover:text-sage-600 transition-colors">
                <div className="bg-white shadow-lg rounded-full p-3 mr-3">
                  <Play className="h-5 w-5 text-sage-600" />
                </div>
                <span className="hidden sm:inline">Conheça Nossa Metodologia</span>
                <span className="sm:hidden">Nossa Metodologia</span>
              </button>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-4 sm:space-y-0 pt-4">
              <div className="flex items-center">
                <div className="bg-sage-100 p-3 rounded-full">
                  <Heart className="h-6 w-6 text-sage-600" />
                </div>
                <span className="ml-3 text-sm text-white">Nutrição Personalizada</span>
              </div>
              <div className="flex items-center">
                <div className="flex text-golden-500">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <span className="ml-2 text-sm text-white">Excelência em Cuidado</span>
              </div>
            </div>
          </div>

          {/* <div className="relative mt-8 lg:mt-0">
            <div className="relative z-10">
              <img
                src={nutricionistaHero}
                alt="Nutricionista Yasmin sorrindo com frutas"
                className="rounded-3xl shadow-2xl w-full object-cover aspect-[4/4]"
              />
            </div>
            <div className="absolute top-4 lg:top-8 -right-2 lg:-right-4 bg-white/80 backdrop-blur-sm rounded-2xl p-3 lg:p-4 shadow-lg">
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
            <div className="absolute -bottom-2 lg:-bottom-4 left-4 lg:left-8 bg-white/80 backdrop-blur-sm rounded-2xl p-3 lg:p-4 shadow-lg">
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
          </div> */}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 100"
          className="w-full h-[100px]"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,0 C480,100 960,100 1440,0 L1440,100 L0,100 Z"
            fill="#ffffff"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;