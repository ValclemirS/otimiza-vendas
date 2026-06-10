import type { Planilha, Ebook, StackItem, Depoimento, Faq } from "./types";

export const PRICE = {
  total: "504",
  now: "70",
  installments: "12x de R$ 5,83 sem juros",
  pix: "ou R$ 70 à vista no Pix",
} as const;

export const PLANILHAS: Planilha[] = [
  { id: "01", tag: "Estoque",        name: "Controle de Estoque",       desc: "Entradas, saídas e saldo calculados sozinhos. Alertas de estoque mínimo pra você nunca mais perder venda por falta de produto.", images: ["/assets/estoque/estoque.png"] },
  { id: "02", tag: "Financeiro", name: "Controle - Financeiro", desc: "Controle receitas, despesas, investimentos e metas financeiras em um painel completo e fácil de usar.", images: ["/assets/controle-financeiro/controle-financeiro.png"] },
  { id: "03", tag: "MEI", name: "Controle - MEI", desc: "Contas a pagar e a receber num só lugar. Saiba exatamente quanto entra, quanto sai e quanto sobra.", images: ["/assets/controle-mei/meicapa.jpeg"] },
  { id: "04", tag: "Organização", name: "Organização pessoal", desc: "Organize tarefas, hábitos, metas e compromissos em um único painel para ter mais foco e produtividade.", images: ["/assets/gestao-pessoal/gestao-capa.png"] },
  { id: "05", tag: "Estudo", name: "Planejamento de estudos", desc: "Organize sua rotina, acompanhe seu desempenho e alcance suas metas com um método de estudos eficiente.", images: ["/assets/estudo/estudos.png"] },
  { id: "06", tag: "Metas", name: "Planejamento de Metas", desc: "Defina metas, acompanhe hábitos e organize sua rotina pra crescer com consistência.", images: ["/assets/metas/capa.jpeg"] },
  { id: "07", tag: "Treino e dieta", name: "Controle de Treino e Dieta", desc: "Organize sua rotina fitness, acompanhe metas e evolua com dados claros e indicadores inteligentes.", images: ["/assets/treino-e-dieta/treinocapa.jpeg"] },
];

export const EBOOKS: Ebook[] = [
  { name: "Claude + excel ", sub: "Aprendar o básico de IA com excel", value: "67", desc: "", image: "/assets/ebooks/claude.jpeg" },
  { name: "Gestão com planilhas", sub: "Como usar o excel para gerir seu negócio", value: "67", desc: "Estratégias de foco e produtividade pra você executar mais e travar menos.", image: "/assets/ebooks/gestao-total.jpeg" },
];

export const VALOR_STACK: StackItem[] = [
  { label: "7 Planilhas Profissionais",       value: "70" },
  { label: 'E-book "Do Caos ao Controle"',   value: "67", bonus: true },
  { label: 'E-book "Alta Performance"',       value: "67", bonus: true },
  { label: "Atualizações + acesso vitalício", value: "97", incluso: true },
];

export const DEPOIMENTOS: Depoimento[] = [
  { text: "Eu controlava tudo no caderno e vivia esquecendo de cobrar cliente. Agora vejo o caixa do mês inteiro em segundos.", author: "Js Santos", role: "Loja de roupas" },
  { text: "A planilha de precificação me mostrou que eu vendia 3 produtos no prejuízo. Sozinha já pagou o pack.",               author: "Ds silva", role: "Confeitaria" },
  { text: "Simples de usar até pra quem não entende de Excel. Coloquei meu estoque todo em um dia.",                            author: "Fp carmoso", role: "Distribuidora" },
];

export const FAQS: Faq[] = [
  { q: "Como eu recebo as planilhas?",          a: "Acesso imediato. Assim que o pagamento é aprovado, você recebe o link de download por e-mail e na área de membros." },
  { q: "Funciona no Excel e no Google Sheets?", a: "Sim. As planilhas funcionam no Microsoft Excel e no Google Sheets (Planilhas Google)." },
  { q: "Preciso saber mexer em Excel?",         a: "Não. Tudo já vem pronto, com as fórmulas configuradas. É só preencher os campos indicados em cada planilha." },
  { q: "Funciona no celular?",                  a: "Sim. Dá pra abrir e editar pelo celular usando o app do Google Sheets ou do Excel." },
  { q: "Os 2 e-books são pagos?",               a: "São totalmente grátis pra quem compra o pack agora. É um bônus por tempo limitado." },
  { q: "Tenho garantia?",                       a: "Sim. São 7 dias de garantia incondicional. Se não gostar, devolvemos 100% do seu dinheiro." },
];
