import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, User, Calendar, Download, Clock, Utensils, Apple, Coffee, Sunset } from 'lucide-react';

const PlanoAlimentar = () => {
  const [selectedDay, setSelectedDay] = useState('segunda');

  const days = [
    { id: 'segunda', label: 'Segunda' },
    { id: 'terca', label: 'Terça' },
    { id: 'quarta', label: 'Quarta' },
    { id: 'quinta', label: 'Quinta' },
    { id: 'sexta', label: 'Sexta' },
    { id: 'sabado', label: 'Sábado' },
    { id: 'domingo', label: 'Domingo' }
  ];

  const mealPlans = {
    segunda: {
      cafe: {
        title: 'Café da Manhã',
        time: '07:00',
        icon: Coffee,
        items: [
          { food: 'Aveia com frutas vermelhas', amount: '1 xícara', calories: 250 },
          { food: 'Iogurte grego natural', amount: '150g', calories: 130 },
          { food: 'Mel', amount: '1 colher de sopa', calories: 60 },
          { food: 'Castanha do Brasil', amount: '3 unidades', calories: 90 }
        ]
      },
      lanche1: {
        title: 'Lanche da Manhã',
        time: '10:00',
        icon: Apple,
        items: [
          { food: 'Maçã', amount: '1 unidade média', calories: 80 },
          { food: 'Pasta de amendoim integral', amount: '1 colher de sopa', calories: 95 }
        ]
      },
      almoco: {
        title: 'Almoço',
        time: '12:30',
        icon: Utensils,
        items: [
          { food: 'Salmão grelhado', amount: '120g', calories: 250 },
          { food: 'Quinoa cozida', amount: '1/2 xícara', calories: 110 },
          { food: 'Brócolis refogado', amount: '1 xícara', calories: 55 },
          { food: 'Salada verde mista', amount: '1 prato', calories: 30 },
          { food: 'Azeite extra virgem', amount: '1 colher de sopa', calories: 120 }
        ]
      },
      lanche2: {
        title: 'Lanche da Tarde',
        time: '15:30',
        icon: Apple,
        items: [
          { food: 'Smoothie verde', amount: '200ml', calories: 150 },
          { food: 'Biscoito integral', amount: '2 unidades', calories: 80 }
        ]
      },
      jantar: {
        title: 'Jantar',
        time: '19:00',
        icon: Sunset,
        items: [
          { food: 'Peito de frango grelhado', amount: '100g', calories: 165 },
          { food: 'Batata doce assada', amount: '1 unidade média', calories: 100 },
          { food: 'Aspargos grelhados', amount: '1 xícara', calories: 40 },
          { food: 'Salada de rúcula', amount: '1 prato', calories: 25 }
        ]
      }
    }
  };

  const currentPlan = mealPlans[selectedDay as keyof typeof mealPlans] || mealPlans.segunda;
  const totalCalories = Object.values(currentPlan).reduce((total, meal) => 
    total + meal.items.reduce((mealTotal, item) => mealTotal + item.calories, 0), 0
  );

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center">
              <Link 
                to="/area-paciente" 
                className="flex items-center text-neutral-600 hover:text-sage-600 transition-colors mr-4"
              >
                <ArrowLeft className="h-5 w-5 mr-2" />
                Voltar à área do paciente
              </Link>
              <Link to="/area-paciente" className="flex items-center">
                <div className="bg-gradient-to-r from-sage-500 to-golden-500 text-white p-2 rounded-lg">
                  <User className="h-6 w-6" />
                </div>
                <span className="ml-2 text-xl font-bold text-neutral-900">VidaSaudável</span>
              </Link>
            </div>
            
            <button className="flex items-center px-4 py-2 bg-gradient-to-r from-sage-500 to-golden-500 text-white rounded-xl font-medium hover:from-sage-600 hover:to-golden-600 transition-all">
              <Download className="h-4 w-4 mr-2" />
              Baixar PDF
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="bg-gradient-to-r from-sage-500 to-golden-500 rounded-2xl p-6 lg:p-8 text-white mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl lg:text-3xl font-bold mb-2">Meu Plano Alimentar</h1>
              <p className="text-sage-100">Plano personalizado pela Dra. Ana Silva</p>
            </div>
            <div className="hidden lg:block">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
                <Calendar className="h-8 w-8 mb-2 mx-auto" />
                <p className="text-sm">Semana atual</p>
                <p className="font-semibold">10-16 Janeiro</p>
              </div>
            </div>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-xl p-4 shadow-lg">
            <div className="flex items-center space-x-3">
              <div className="bg-coral-100 p-2 rounded-lg">
                <Utensils className="h-5 w-5 text-coral-600" />
              </div>
              <div>
                <p className="text-sm text-neutral-600">Calorias/dia</p>
                <p className="text-xl font-bold text-neutral-900">{totalCalories}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-4 shadow-lg">
            <div className="flex items-center space-x-3">
              <div className="bg-sage-100 p-2 rounded-lg">
                <Apple className="h-5 w-5 text-sage-600" />
              </div>
              <div>
                <p className="text-sm text-neutral-600">Proteínas</p>
                <p className="text-xl font-bold text-neutral-900">120g</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-4 shadow-lg">
            <div className="flex items-center space-x-3">
              <div className="bg-golden-100 p-2 rounded-lg">
                <Coffee className="h-5 w-5 text-golden-600" />
              </div>
              <div>
                <p className="text-sm text-neutral-600">Carboidratos</p>
                <p className="text-xl font-bold text-neutral-900">180g</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-4 shadow-lg">
            <div className="flex items-center space-x-3">
              <div className="bg-orange-100 p-2 rounded-lg">
                <Sunset className="h-5 w-5 text-orange-600" />
              </div>
              <div>
                <p className="text-sm text-neutral-600">Gorduras</p>
                <p className="text-xl font-bold text-neutral-900">65g</p>
              </div>
            </div>
          </div>
        </div>

        {/* Day Selector */}
        <div className="bg-white rounded-2xl p-6 shadow-lg mb-8">
          <h2 className="text-xl font-bold text-neutral-900 mb-4">Selecione o dia da semana</h2>
          <div className="flex flex-wrap gap-2">
            {days.map((day) => (
              <button
                key={day.id}
                onClick={() => setSelectedDay(day.id)}
                className={`px-4 py-2 rounded-xl font-medium transition-all ${
                  selectedDay === day.id
                    ? 'bg-gradient-to-r from-sage-500 to-golden-500 text-white'
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                }`}
              >
                {day.label}
              </button>
            ))}
          </div>
        </div>

        {/* Meal Plan */}
        <div className="space-y-6">
          {Object.entries(currentPlan).map(([mealKey, meal]) => (
            <div key={mealKey} className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-sage-100 p-2 rounded-lg">
                    <meal.icon className="h-5 w-5 text-sage-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-neutral-900">{meal.title}</h3>
                    <div className="flex items-center text-sm text-neutral-600">
                      <Clock className="h-4 w-4 mr-1" />
                      {meal.time}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-neutral-600">Total</p>
                  <p className="text-lg font-bold text-sage-600">
                    {meal.items.reduce((total, item) => total + item.calories, 0)} kcal
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {meal.items.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-neutral-50 rounded-lg">
                    <div>
                      <p className="font-medium text-neutral-900">{item.food}</p>
                      <p className="text-sm text-neutral-600">{item.amount}</p>
                    </div>
                    <span className="text-sm font-medium text-sage-600">{item.calories} kcal</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Notes Section */}
        <div className="bg-white rounded-2xl p-6 shadow-lg mt-8">
          <h3 className="text-lg font-bold text-neutral-900 mb-4">Observações da Nutricionista</h3>
          <div className="space-y-3 text-neutral-700">
            <p>• Beba pelo menos 2 litros de água ao longo do dia</p>
            <p>• Evite açúcar refinado e alimentos processados</p>
            <p>• Faça as refeições em horários regulares</p>
            <p>• Mastigue bem os alimentos</p>
            <p>• Em caso de dúvidas, entre em contato pelo WhatsApp</p>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="bg-gradient-to-r from-coral-500 to-orange-500 rounded-2xl p-6 text-white mt-8">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold mb-2">Precisa de ajuda?</h3>
              <p className="text-coral-100">Entre em contato com sua nutricionista</p>
            </div>
            <a 
              href="https://wa.me/5511999999999" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white/20 backdrop-blur-sm rounded-xl p-3 hover:bg-white/30 transition-all"
            >
              <div className="text-center">
                <div className="bg-white rounded-full p-2 mb-2 mx-auto w-fit">
                  <User className="h-5 w-5 text-coral-500" />
                </div>
                <p className="text-sm font-medium">WhatsApp</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanoAlimentar;