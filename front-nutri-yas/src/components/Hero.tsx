import { Link } from 'react-router-dom';
import { Play, Star, Heart } from 'lucide-react';
import nutricionistaHero from '../assets/img/hero/hero_destaque2.png';

const Hero = () => {
  return (
    <section className="relative bg-cover bg-center h-screen flex items-center" style={{ backgroundImage: `url(${nutricionistaHero})` }}>
      <div className="absolute inset-0 bg-gradient-to-b from-sage-100/80 via-white/70 to-golden-100/60"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/70"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div></div> {/* Coluna vazia para empurrar o conteúdo para a direita */}
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
                  <Heart className="h-6 w-6 text-golden-500" />
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
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 100"
          className="w-full h-[75px]"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,100 C100,0 200,0 400,0 L1440,0 L1440,100 L0,100 Z"
            fill="#ffffff"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;