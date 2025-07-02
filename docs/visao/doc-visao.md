## Histórico de Revisões

| Data                 | Versão | Descrição                                                                  | Autores                    |
| --------------------|--------|----------------------------------------------------------------------------|----------------------------|
| 02 de Julho de 2025 | 1.0    | Versão inicial do documento de visão da Plataforma para Nutricionistas     | [Seu Nome Aqui]            |

## 1. Introdução

A **Plataforma para Nutricionistas** tem como objetivo permitir que profissionais da nutrição vendam programas de alimentação e acompanhamento nutricional em grupo. A solução visa ser escalável, automatizada e com alta taxa de conversão, otimizando o tempo do nutricionista e ampliando seu alcance de forma sustentável.

## 2. Descrição do Problema

### 2.1 Situação Atual

| Elemento                | Descrição                                                                                                                                                       |
|-------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| O problema é            | A dificuldade dos nutricionistas em escalar atendimentos e entregar programas de forma automatizada e padronizada.                                             |
| Afeta                   | Nutricionistas independentes que desejam ampliar sua base de pacientes e otimizar o tempo de atendimento sem perder qualidade no conteúdo entregue.            |
| O impacto que causa é   | Alta demanda operacional, dificuldade de conversão em vendas online e limitação no alcance de atendimento.                                                     |
| Uma solução seria       | Desenvolver uma plataforma digital com automação de entrega, checkout integrado e áreas exclusivas para nutricionista e pacientes.                             |

### 2.2 Função do Produto

| Para             | Nutricionistas e pacientes interessados em programas nutricionais em grupo                                                                                   |
|------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Que              | Desejam entregar e consumir programas de forma automatizada, organizada e interativa                                                                         |
| Nossa plataforma | Oferece um ambiente digital escalável para gerenciamento, venda e entrega de conteúdo nutricional                                                            |
| Diferente de     | Serviços genéricos de venda de cursos online                                                                                                                  |
| Nosso produto    | É especializado em nutrição, com cronogramas alimentares, check-ins, acompanhamento e suporte integrado                                                      |

## 3. Partes Interessadas

| Nome            | Descrição                                                                                                     | Responsabilidades                                                                                                            |
|-----------------|---------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------|
| Nutricionista   | Profissional que cria e gerencia os programas                                                                | - Criar programas<br>- Acompanhar vendas e engajamento<br>- Customizar a área do paciente<br>- Liberar conteúdo semanalmente |
| Cliente/Paciente| Usuário final que compra e consome os programas                                                               | - Acessar conteúdo<br>- Cumprir metas e cronograma<br>- Realizar check-ins<br>- Solicitar suporte                           |
| Equipe Técnica  | Responsável por manter a plataforma em funcionamento                                                          | - Garantir estabilidade, segurança e escalabilidade<br>- Resolver bugs e implementar melhorias                             |

## 4. Funcionalidades Principais

### 4.1 Módulo de Vendas

- Página de apresentação do programa com descrições detalhadas
- Checkout integrado com meios de pagamento (Pix, Cartão, Boleto)
- Acesso automático após pagamento confirmado

### 4.2 Automação

- Envio automático de e-mail com credenciais
- Redirecionamento para a área do paciente com conteúdo liberado

### 4.3 Área do Cliente

- Acesso a planos alimentares, receitas, vídeos e PDFs
- Cronograma semanal com metas e desafios
- Área de progresso (check-ins)
- Suporte via WhatsApp ou chat

### 4.4 Área do Nutricionista

- Cadastro e personalização dos programas
- Painel de vendas e conversão
- Edição de conteúdo por módulo ou semana
- Customização visual com logotipo e mensagens

## 5. Requisitos Não Funcionais

| Código | Requisito                                    | Categoria      | Classificação |
|--------|----------------------------------------------|----------------|---------------|
| RNF01  | Interface responsiva                         | Usabilidade    | Obrigatório   |
| RNF02  | Segurança de dados (LGPD)                    | Segurança      | Obrigatório   |
| RNF03  | Estabilidade para múltiplos acessos          | Desempenho     | Obrigatório   |
| RNF04  | Entrega de conteúdo sem intervenção manual   | Funcionalidade | Desejável     |

## 6. Tecnologias Sugeridas

| Camada        | Tecnologias                                                                 |
|---------------|------------------------------------------------------------------------------|
| Front-end     | React.js / Next.js                                                          |
| Back-end      | Node.js com NestJS ou Django                                                |
| Banco de Dados| PostgreSQL                                                                  |
| Serviços      | Stripe, PagSeguro, Mercado Pago (pagamento)<br>SendGrid, Mailgun (e-mail)<br>Amazon S3, Firebase (armazenamento) |

## 7. Diferenciais Estratégicos

| Diferencial                  | Descrição                                                                                 |
|-----------------------------|-------------------------------------------------------------------------------------------|
| Escalabilidade               | Permite atender dezenas ou centenas de pacientes com o mesmo programa                    |
| Posicionamento Premium       | Permite venda de programas com identidade própria (ex: “Desafio 21 Dias”, “Plano Vegano”)|
| Redução do tempo operacional| Utilização de conteúdo pré-gravado e automações                                          |
| Funil 100% automatizado      | Desde o pagamento até a entrega do conteúdo                                              |
