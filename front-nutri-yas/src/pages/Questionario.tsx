import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, User, Heart, Activity, Utensils, CheckCircle } from 'lucide-react';

interface FormData {
  // Dados pessoais
  nome: string;
  idade: string;
  genero: string;
  altura: string;
  peso: string;
  
  // Perfil DISC
  dominancia: string;
  influencia: string;
  estabilidade: string;
  conformidade: string;
  
  // Sintomas
  sintomas: string[];
  sintomasOutros: string;
  
  // Objetivos
  objetivos: string[];
  objetivosOutros: string;
  
  // Histórico médico
  condicoesMedicas: string[];
  medicamentos: string;
  alergias: string;
  
  // Estilo de vida
  atividadeFisica: string;
  sono: string;
  estresse: string;
  
  // Alimentação atual
  refeicoesDia: string;
  alimentosEvita: string;
  suplementos: string;
}

const Questionario = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    nome: '',
    idade: '',
    genero: '',
    altura: '',
    peso: '',
    dominancia: '',
    influencia: '',
    estabilidade: '',
    conformidade: '',
    sintomas: [],
    sintomasOutros: '',
    objetivos: [],
    objetivosOutros: '',
    condicoesMedicas: [],
    medicamentos: '',
    alergias: '',
    atividadeFisica: '',
    sono: '',
    estresse: '',
    refeicoesDia: '',
    alimentosEvita: '',
    suplementos: ''
  });

  const totalSteps = 6;

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Questionário completo:', formData);
    // Aqui você enviaria os dados para o backend
  };

  const handleCheckboxChange = (field: keyof FormData, value: string) => {
    const currentValues = formData[field] as string[];
    const newValues = currentValues.includes(value)
      ? currentValues.filter(item => item !== value)
      : [...currentValues, value];
    
    setFormData({ ...formData, [field]: newValues });
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <User className="h-12 w-12 text-sage-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-neutral-900">Dados Pessoais</h2>
              <p className="text-neutral-600">Vamos começar conhecendo você melhor</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">Nome completo</label>
                <input
                  type="text"
                  value={formData.nome}
                  onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-sage-500 focus:border-transparent"
                  placeholder="Seu nome completo"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">Idade</label>
                <input
                  type="number"
                  value={formData.idade}
                  onChange={(e) => setFormData({ ...formData, idade: e.target.value })}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-sage-500 focus:border-transparent"
                  placeholder="Sua idade"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">Gênero</label>
                <select
                  value={formData.genero}
                  onChange={(e) => setFormData({ ...formData, genero: e.target.value })}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-sage-500 focus:border-transparent"
                >
                  <option value="">Selecione</option>
                  <option value="feminino">Feminino</option>
                  <option value="masculino">Masculino</option>
                  <option value="outro">Outro</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">Altura (cm)</label>
                <input
                  type="number"
                  value={formData.altura}
                  onChange={(e) => setFormData({ ...formData, altura: e.target.value })}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-sage-500 focus:border-transparent"
                  placeholder="Ex: 170"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-neutral-700 mb-2">Peso atual (kg)</label>
                <input
                  type="number"
                  value={formData.peso}
                  onChange={(e) => setFormData({ ...formData, peso: e.target.value })}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-sage-500 focus:border-transparent"
                  placeholder="Ex: 65"
                />
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <Activity className="h-12 w-12 text-sage-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-neutral-900">Perfil Comportamental (DISC)</h2>
              <p className="text-neutral-600">Entenda seu perfil para personalizar seu plano</p>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-3">
                  Como você se comporta em situações de pressão?
                </label>
                <div className="space-y-2">
                  {[
                    { value: 'direto', label: 'Sou direto e tomo decisões rapidamente' },
                    { value: 'comunicativo', label: 'Busco conversar e envolver outras pessoas' },
                    { value: 'calmo', label: 'Mantenho a calma e analiso com cuidado' },
                    { value: 'detalhista', label: 'Foco nos detalhes e sigo procedimentos' }
                  ].map((option) => (
                    <label key={option.value} className="flex items-center p-3 border border-neutral-200 rounded-lg hover:bg-sage-50 cursor-pointer">
                      <input
                        type="radio"
                        name="dominancia"
                        value={option.value}
                        checked={formData.dominancia === option.value}
                        onChange={(e) => setFormData({ ...formData, dominancia: e.target.value })}
                        className="text-sage-500 focus:ring-sage-500"
                      />
                      <span className="ml-3 text-neutral-700">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-3">
                  Como você prefere receber orientações?
                </label>
                <div className="space-y-2">
                  {[
                    { value: 'objetivas', label: 'Instruções claras e objetivas' },
                    { value: 'motivacionais', label: 'Com encorajamento e motivação' },
                    { value: 'passo-a-passo', label: 'Passo a passo, sem pressa' },
                    { value: 'detalhadas', label: 'Com todos os detalhes e explicações' }
                  ].map((option) => (
                    <label key={option.value} className="flex items-center p-3 border border-neutral-200 rounded-lg hover:bg-sage-50 cursor-pointer">
                      <input
                        type="radio"
                        name="influencia"
                        value={option.value}
                        checked={formData.influencia === option.value}
                        onChange={(e) => setFormData({ ...formData, influencia: e.target.value })}
                        className="text-sage-500 focus:ring-sage-500"
                      />
                      <span className="ml-3 text-neutral-700">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <Heart className="h-12 w-12 text-coral-500 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-neutral-900">Sintomas e Queixas</h2>
              <p className="text-neutral-600">Nos conte sobre seus sintomas atuais</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-3">
                Quais sintomas você tem apresentado? (Selecione todos que se aplicam)
              </label>
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  'Fadiga/Cansaço',
                  'Dores de cabeça',
                  'Problemas digestivos',
                  'Ansiedade',
                  'Insônia',
                  'Dores musculares',
                  'Alterações de humor',
                  'Problemas de pele',
                  'Ganho de peso',
                  'Perda de peso',
                  'Falta de concentração',
                  'Baixa imunidade'
                ].map((sintoma) => (
                  <label key={sintoma} className="flex items-center p-3 border border-neutral-200 rounded-lg hover:bg-coral-50 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.sintomas.includes(sintoma)}
                      onChange={() => handleCheckboxChange('sintomas', sintoma)}
                      className="text-coral-500 focus:ring-coral-500"
                    />
                    <span className="ml-3 text-neutral-700">{sintoma}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">
                Outros sintomas não listados
              </label>
              <textarea
                value={formData.sintomasOutros}
                onChange={(e) => setFormData({ ...formData, sintomasOutros: e.target.value })}
                className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-coral-500 focus:border-transparent"
                rows={3}
                placeholder="Descreva outros sintomas..."
              />
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <Utensils className="h-12 w-12 text-golden-500 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-neutral-900">Objetivos e Metas</h2>
              <p className="text-neutral-600">O que você deseja alcançar?</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-3">
                Quais são seus principais objetivos? (Selecione todos que se aplicam)
              </label>
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  'Perder peso',
                  'Ganhar massa muscular',
                  'Melhorar energia',
                  'Reduzir ansiedade',
                  'Melhorar digestão',
                  'Controlar diabetes',
                  'Reduzir colesterol',
                  'Melhorar sono',
                  'Aumentar imunidade',
                  'Melhorar performance esportiva',
                  'Alimentação mais saudável',
                  'Reduzir inflamação'
                ].map((objetivo) => (
                  <label key={objetivo} className="flex items-center p-3 border border-neutral-200 rounded-lg hover:bg-golden-50 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.objetivos.includes(objetivo)}
                      onChange={() => handleCheckboxChange('objetivos', objetivo)}
                      className="text-golden-500 focus:ring-golden-500"
                    />
                    <span className="ml-3 text-neutral-700">{objetivo}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">
                Outros objetivos específicos
              </label>
              <textarea
                value={formData.objetivosOutros}
                onChange={(e) => setFormData({ ...formData, objetivosOutros: e.target.value })}
                className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-golden-500 focus:border-transparent"
                rows={3}
                placeholder="Descreva outros objetivos..."
              />
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <Heart className="h-12 w-12 text-sage-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-neutral-900">Histórico de Saúde</h2>
              <p className="text-neutral-600">Informações importantes sobre sua saúde</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-3">
                Possui alguma condição médica? (Selecione todas que se aplicam)
              </label>
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  'Diabetes',
                  'Hipertensão',
                  'Colesterol alto',
                  'Problemas tireoide',
                  'Síndrome do intestino irritável',
                  'Refluxo gastroesofágico',
                  'Ansiedade/Depressão',
                  'Artrite/Artrose',
                  'Problemas renais',
                  'Problemas hepáticos',
                  'Alergias alimentares',
                  'Intolerâncias alimentares'
                ].map((condicao) => (
                  <label key={condicao} className="flex items-center p-3 border border-neutral-200 rounded-lg hover:bg-sage-50 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.condicoesMedicas.includes(condicao)}
                      onChange={() => handleCheckboxChange('condicoesMedicas', condicao)}
                      className="text-sage-500 focus:ring-sage-500"
                    />
                    <span className="ml-3 text-neutral-700">{condicao}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Medicamentos em uso
                </label>
                <textarea
                  value={formData.medicamentos}
                  onChange={(e) => setFormData({ ...formData, medicamentos: e.target.value })}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-sage-500 focus:border-transparent"
                  rows={3}
                  placeholder="Liste os medicamentos que você usa..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Alergias conhecidas
                </label>
                <textarea
                  value={formData.alergias}
                  onChange={(e) => setFormData({ ...formData, alergias: e.target.value })}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-sage-500 focus:border-transparent"
                  rows={3}
                  placeholder="Descreva suas alergias..."
                />
              </div>
            </div>
          </div>
        );

      case 6:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <Activity className="h-12 w-12 text-orange-500 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-neutral-900">Estilo de Vida</h2>
              <p className="text-neutral-600">Últimas informações sobre sua rotina</p>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-3">
                  Qual seu nível de atividade física?
                </label>
                <div className="space-y-2">
                  {[
                    { value: 'sedentario', label: 'Sedentário (pouca ou nenhuma atividade)' },
                    { value: 'leve', label: 'Leve (1-3 dias por semana)' },
                    { value: 'moderado', label: 'Moderado (3-5 dias por semana)' },
                    { value: 'intenso', label: 'Intenso (6-7 dias por semana)' }
                  ].map((option) => (
                    <label key={option.value} className="flex items-center p-3 border border-neutral-200 rounded-lg hover:bg-orange-50 cursor-pointer">
                      <input
                        type="radio"
                        name="atividadeFisica"
                        value={option.value}
                        checked={formData.atividadeFisica === option.value}
                        onChange={(e) => setFormData({ ...formData, atividadeFisica: e.target.value })}
                        className="text-orange-500 focus:ring-orange-500"
                      />
                      <span className="ml-3 text-neutral-700">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Quantas horas você dorme por noite?
                  </label>
                  <select
                    value={formData.sono}
                    onChange={(e) => setFormData({ ...formData, sono: e.target.value })}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  >
                    <option value="">Selecione</option>
                    <option value="menos-5">Menos de 5 horas</option>
                    <option value="5-6">5-6 horas</option>
                    <option value="7-8">7-8 horas</option>
                    <option value="mais-8">Mais de 8 horas</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Como você avalia seu nível de estresse?
                  </label>
                  <select
                    value={formData.estresse}
                    onChange={(e) => setFormData({ ...formData, estresse: e.target.value })}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  >
                    <option value="">Selecione</option>
                    <option value="baixo">Baixo</option>
                    <option value="moderado">Moderado</option>
                    <option value="alto">Alto</option>
                    <option value="muito-alto">Muito alto</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Quantas refeições você faz por dia?
                  </label>
                  <select
                    value={formData.refeicoesDia}
                    onChange={(e) => setFormData({ ...formData, refeicoesDia: e.target.value })}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  >
                    <option value="">Selecione</option>
                    <option value="1-2">1-2 refeições</option>
                    <option value="3">3 refeições</option>
                    <option value="4-5">4-5 refeições</option>
                    <option value="6-mais">6 ou mais refeições</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Usa suplementos?
                  </label>
                  <input
                    type="text"
                    value={formData.suplementos}
                    onChange={(e) => setFormData({ ...formData, suplementos: e.target.value })}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Liste os suplementos..."
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Alimentos que evita ou não gosta
                </label>
                <textarea
                  value={formData.alimentosEvita}
                  onChange={(e) => setFormData({ ...formData, alimentosEvita: e.target.value })}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  rows={3}
                  placeholder="Descreva alimentos que você evita..."
                />
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sage-400/20 via-golden-400/20 to-peach-300/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center text-neutral-600 hover:text-sage-600 transition-colors mb-6"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Voltar ao início
          </Link>

          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-2xl font-bold text-neutral-900">Questionário de Pré-consulta</h1>
              <span className="text-sm text-neutral-600">
                Etapa {currentStep} de {totalSteps}
              </span>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-neutral-200 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-sage-500 to-golden-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${(currentStep / totalSteps) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg">
          <form onSubmit={handleSubmit}>
            {renderStep()}

            {/* Navigation */}
            <div className="flex justify-between mt-8 pt-6 border-t border-neutral-200">
              <button
                type="button"
                onClick={handlePrev}
                disabled={currentStep === 1}
                className={`flex items-center px-6 py-3 rounded-xl font-semibold transition-all ${
                  currentStep === 1
                    ? 'bg-neutral-100 text-neutral-400 cursor-not-allowed'
                    : 'bg-neutral-200 text-neutral-700 hover:bg-neutral-300'
                }`}
              >
                <ArrowLeft className="h-5 w-5 mr-2" />
                Anterior
              </button>

              {currentStep === totalSteps ? (
                <button
                  type="submit"
                  className="flex items-center px-6 py-3 bg-gradient-to-r from-sage-500 to-golden-500 text-white rounded-xl font-semibold hover:from-sage-600 hover:to-golden-600 transition-all"
                >
                  <CheckCircle className="h-5 w-5 mr-2" />
                  Finalizar
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleNext}
                  className="flex items-center px-6 py-3 bg-gradient-to-r from-sage-500 to-golden-500 text-white rounded-xl font-semibold hover:from-sage-600 hover:to-golden-600 transition-all"
                >
                  Próximo
                  <ArrowRight className="h-5 w-5 ml-2" />
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Questionario;