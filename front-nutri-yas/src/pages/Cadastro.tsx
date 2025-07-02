import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { User, Mail, Lock, Eye, EyeOff, ArrowLeft, MessageCircle } from 'lucide-react';

const Cadastro = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    terms: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Cadastro:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sage-400 via-golden-400 to-orange-400">
      <div className="absolute inset-0 bg-black/10"></div>
      
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-md w-full">
          {/* Botão Voltar */}
          <Link 
            to="/" 
            className="inline-flex items-center text-white hover:text-neutral-200 transition-colors mb-6 lg:mb-8"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Voltar ao início
          </Link>

          {/* Card de Cadastro */}
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-6 lg:p-8">
            <div className="text-center mb-6 lg:mb-8">
              <div className="bg-gradient-to-r from-sage-500 to-golden-500 text-white p-3 rounded-2xl w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <User className="h-8 w-8" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-neutral-800">Crie sua conta</h2>
              <p className="text-neutral-600 mt-2 text-sm lg:text-base">Junte-se a nós para uma vida mais saudável</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 lg:space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
                  Nome completo
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-neutral-400" />
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-sage-500 focus:border-transparent transition-all text-sm lg:text-base"
                    placeholder="Seu nome completo"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                  E-mail
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-neutral-400" />
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-sage-500 focus:border-transparent transition-all text-sm lg:text-base"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-2">
                  WhatsApp
                </label>
                <div className="relative">
                  <MessageCircle className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-green-500" />
                  <input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-sage-500 focus:border-transparent transition-all text-sm lg:text-base"
                    placeholder="(11) 99999-9999"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-neutral-700 mb-2">
                  Senha
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-neutral-400" />
                  <input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="w-full pl-10 pr-12 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-sage-500 focus:border-transparent transition-all text-sm lg:text-base"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-400 hover:text-neutral-600"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>

              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-neutral-700 mb-2">
                  Confirmar senha
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-neutral-400" />
                  <input
                    id="confirmPassword"
                    type={showConfirmPassword ? 'text' : 'password'}
                    required
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                    className="w-full pl-10 pr-12 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-sage-500 focus:border-transparent transition-all text-sm lg:text-base"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-400 hover:text-neutral-600"
                  >
                    {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>

              <div className="flex items-start">
                <input
                  id="terms"
                  type="checkbox"
                  required
                  checked={formData.terms}
                  onChange={(e) => setFormData({ ...formData, terms: e.target.checked })}
                  className="mt-1 rounded border-neutral-300 text-sage-500 focus:ring-sage-500"
                />
                <label htmlFor="terms" className="ml-3 text-sm text-neutral-600">
                  Eu concordo com os{' '}
                  <Link to="#" className="text-sage-500 hover:text-sage-600 transition-colors">
                    Termos de Uso
                  </Link>{' '}
                  e{' '}
                  <Link to="#" className="text-sage-500 hover:text-sage-600 transition-colors">
                    Política de Privacidade
                  </Link>
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-sage-500 to-golden-500 text-white py-3 rounded-xl font-semibold hover:from-sage-600 hover:to-golden-600 transition-all transform hover:scale-105 shadow-lg text-sm lg:text-base"
              >
                Criar conta
              </button>
            </form>

            <div className="mt-6 lg:mt-8 text-center">
              <p className="text-neutral-600 text-sm lg:text-base">
                Já tem uma conta?{' '}
                <Link to="/login" className="text-sage-500 hover:text-sage-600 font-semibold transition-colors">
                  Faça login aqui
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cadastro;