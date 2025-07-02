import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, User, MessageCircle } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center">
            <div className="bg-gradient-to-r from-sage-500 to-golden-500 text-white p-2 rounded-lg">
              <User className="h-6 w-6" />
            </div>
            <span className="ml-2 text-xl font-bold text-neutral-900">VidaSaudável</span>
          </Link>

          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-neutral-700 hover:text-sage-600 transition-colors">Início</Link>
            <a href="#sobre" className="text-neutral-700 hover:text-sage-600 transition-colors">Sobre</a>
            <a href="#servicos" className="text-neutral-700 hover:text-sage-600 transition-colors">Serviços</a>
            <a href="#programas" className="text-neutral-700 hover:text-sage-600 transition-colors">Programas</a>
            <a href="#contato" className="text-neutral-700 hover:text-sage-600 transition-colors">Contato</a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="https://wa.me/5511999999999" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-neutral-700 hover:text-sage-600 transition-colors"
            >
              <MessageCircle className="h-4 w-4 mr-2 text-green-500" />
              <span className="text-sm">WhatsApp</span>
            </a>
            <Link 
              to="/login" 
              className="text-sage-600 hover:text-sage-700 font-medium transition-colors mr-4"
            >
              Entrar
            </Link>
            <Link 
              to="/cadastro" 
              className="bg-gradient-to-r from-coral-500 to-orange-500 hover:from-coral-600 hover:to-orange-600 text-white px-6 py-2 rounded-full transition-all transform hover:scale-105"
            >
              Começar Agora
            </Link>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden border-t border-neutral-200 py-4">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="text-neutral-700 hover:text-sage-600 transition-colors">Início</Link>
              <a href="#sobre" className="text-neutral-700 hover:text-sage-600 transition-colors">Sobre</a>
              <a href="#servicos" className="text-neutral-700 hover:text-sage-600 transition-colors">Serviços</a>
              <a href="#programas" className="text-neutral-700 hover:text-sage-600 transition-colors">Programas</a>
              <a href="#contato" className="text-neutral-700 hover:text-sage-600 transition-colors">Contato</a>
              <div className="pt-4 border-t border-neutral-200">
                <a 
                  href="https://wa.me/5511999999999" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-neutral-700 hover:text-sage-600 transition-colors mb-3"
                >
                  <MessageCircle className="h-4 w-4 mr-2 text-green-500" />
                  <span className="text-sm">WhatsApp</span>
                </a>
                <Link 
                  to="/login" 
                  className="block text-sage-600 hover:text-sage-700 font-medium transition-colors mb-3"
                >
                  Entrar
                </Link>
                <Link 
                  to="/cadastro" 
                  className="block bg-gradient-to-r from-coral-500 to-orange-500 hover:from-coral-600 hover:to-orange-600 text-white px-6 py-2 rounded-full transition-all w-fit"
                >
                  Começar Agora
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;