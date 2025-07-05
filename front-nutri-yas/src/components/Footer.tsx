import React from 'react';
import { Link } from 'react-router-dom';
import { User, MessageCircle, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center">
              <div className="bg-gradient-to-r from-sage-500 to-golden-500 text-white p-2 rounded-lg">
                <User className="h-6 w-6" />
              </div>
              <span className="ml-2 text-xl font-bold">Yasmin Araújo</span>
            </Link>
            <p className="text-neutral-400 leading-relaxed text-sm lg:text-base">
              Nutrição com propósito, saúde e prazer. Transforme seu estilo de vida 
              com orientação especializada.
            </p>
            <div className="flex space-x-4">
              <div className="bg-neutral-800 p-2 rounded-lg hover:bg-gradient-to-r hover:from-sage-500 hover:to-golden-500 transition-all cursor-pointer">
                <Facebook className="h-5 w-5" />
              </div>
              <div className="bg-neutral-800 p-2 rounded-lg hover:bg-gradient-to-r hover:from-sage-500 hover:to-golden-500 transition-all cursor-pointer">
                <Instagram className="h-5 w-5" />
              </div>
              <div className="bg-neutral-800 p-2 rounded-lg hover:bg-gradient-to-r hover:from-sage-500 hover:to-golden-500 transition-all cursor-pointer">
                <Twitter className="h-5 w-5" />
              </div>
              <div className="bg-neutral-800 p-2 rounded-lg hover:bg-gradient-to-r hover:from-sage-500 hover:to-golden-500 transition-all cursor-pointer">
                <Linkedin className="h-5 w-5" />
              </div>
            </div>
          </div>

          {/* Serviços */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Nossos Serviços</h3>
            <ul className="space-y-3 text-neutral-400 text-sm lg:text-base">
              <li>Nutrição Funcional</li>
              <li>Nutrição Esportiva</li>
              <li>Nutrição Vegetariana</li>
              <li>Perda de Peso</li>
              <li>Nutrição Infantil</li>
            </ul>
          </div>

          {/* Programas */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Programas Especializados</h3>
            <ul className="space-y-3 text-neutral-400 text-sm lg:text-base">
              <li>Consulta nutricional</li>
              <li>Planejamento de refeições</li>
              <li>Coaching nutricional</li>
              <li>Avaliações de saúde</li>
              <li>Acompanhamento contínuo</li>
            </ul>
          </div>

          {/* Equipe */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Nossa Equipe</h3>
            <ul className="space-y-3 text-neutral-400 text-sm lg:text-base">
              <li>Nutricionistas certificados</li>
              <li>Especialistas funcionais</li>
              <li>Coaches de bem-estar</li>
              <li>Consultores especializados</li>
              <li>Suporte personalizado</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-neutral-800 mt-8 lg:mt-12 pt-6 lg:pt-8">
          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">
                Transforme Sua Vida Com Nutrição de Qualidade
              </h3>
              <p className="text-neutral-400 text-sm lg:text-base">
                Comece sua jornada de transformação hoje com nossos programas especializados.
              </p>
              <Link 
                to="/contato"
                className="inline-block bg-gradient-to-r from-coral-500 to-orange-500 hover:from-coral-600 hover:to-orange-600 text-white px-6 py-3 rounded-full font-semibold transition-all"
              >
                Entre em Contato
              </Link>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Informações de Contato</h3>
              <div className="space-y-3 text-neutral-400 text-sm lg:text-base">
                <a 
                  href="https://wa.me/5511999999999" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center hover:text-sage-400 transition-colors"
                >
                  <MessageCircle className="h-5 w-5 mr-3 text-green-500" />
                  <span>WhatsApp: (11) 99999-9999</span>
                </a>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-3 text-sage-500" />
                  <span>contato@vidasaudavel.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-3 text-sage-500" />
                  <span>Rua da Saúde, 123, São Paulo, SP 01234-567</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-neutral-800 mt-6 lg:mt-8 pt-6 lg:pt-8 text-center text-neutral-400 text-sm">
          <p>&copy; 2025 Yasmin Araújo. Todos os direitos reservados. | Política de Privacidade | Termos de Serviço</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;