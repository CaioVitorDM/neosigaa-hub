export const mockStudent = {
  name: "Ana Cabrera",
  email: "ana.cabrera@university.edu",
  phone: "(61) 99999-9999",
  course: "Ciência da Computação",
  period: "7º Período",
  ira: 8.5,
  cr: 8.7,
  avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ana"
};

export const mockModules = [
  { id: 1, title: "Eventos", icon: "Calendar", count: "5 novos", color: "eventos", path: "/eventos" },
  { id: 2, title: "Matérias", icon: "BookOpen", count: "8 novos", color: "materias", path: "/disciplinas" },
  { id: 3, title: "Agenda", icon: "Clock", count: "12 novos", color: "agenda", path: "/dashboard" },
  { id: 4, title: "Fórum", icon: "MessageSquare", count: "23 novos", color: "forum", path: "/dashboard" },
  { id: 5, title: "Cursando", icon: "GraduationCap", count: "6 novos", color: "cursando", path: "/disciplinas" },
];

export const mockMostUsed = [
  { id: 1, title: "Notas", icon: "Star", color: "notas", path: "/dashboard" },
  { id: 2, title: "Horários", icon: "Clock", color: "horarios", path: "/dashboard" },
  { id: 3, title: "Materiais", icon: "BookOpen", color: "materias", path: "/dashboard" },
];

export const mockNews = [
  {
    id: 1,
    title: "UFRN abre inscrições para novo programa de monitoria",
    date: "2024-01-15",
    excerpt: "As inscrições estão abertas até o dia 30 de janeiro para estudantes interessados..."
  },
  {
    id: 2,
    title: "Simpósio de Tecnologia acontece na próxima semana",
    date: "2024-01-14",
    excerpt: "O evento contará com palestras de profissionais renomados da área de TI..."
  },
  {
    id: 3,
    title: "Biblioteca Central amplia horário de funcionamento",
    date: "2024-01-12",
    excerpt: "A partir de fevereiro, a biblioteca funcionará até às 22h durante a semana..."
  }
];

export const mockOpportunities = [
  {
    id: 1,
    title: "Estágio em Desenvolvimento Web",
    company: "Tech Solutions",
    type: "Estágio",
    description: "Oportunidade para desenvolvedores front-end júnior",
    deadline: "2024-02-15"
  },
  {
    id: 2,
    title: "Bolsa de Iniciação Científica",
    company: "UFRN - DIMAp",
    type: "Bolsa",
    description: "Projeto de pesquisa em Inteligência Artificial",
    deadline: "2024-02-20"
  },
  {
    id: 3,
    title: "Projeto de Extensão - Programação",
    company: "UFRN",
    type: "Projeto",
    description: "Ensino de programação para comunidades carentes",
    deadline: "2024-02-10"
  },
  {
    id: 4,
    title: "Vaga de Monitor - Algoritmos",
    company: "UFRN - DIMAp",
    type: "Monitoria",
    description: "Monitoria para a disciplina de Algoritmos e Estruturas de Dados",
    deadline: "2024-02-05"
  },
  {
    id: 5,
    title: "Hackathon Universitário 2024",
    company: "IEEE UFRN",
    type: "Evento",
    description: "Competição de programação com prêmios de até R$ 5.000",
    deadline: "2024-02-25"
  },
  {
    id: 6,
    title: "Estágio em Data Science",
    company: "DataCorp",
    type: "Estágio",
    description: "Análise de dados e machine learning",
    deadline: "2024-02-28"
  }
];

export const mockCommunities = {
  ufrn: [
    { id: 1, text: "Calendário acadêmico 2024.1 já disponível" },
    { id: 2, text: "Matrícula extraordinária: 20 a 25 de fevereiro" },
    { id: 3, text: "Nova plataforma de avaliação docente" },
    { id: 4, text: "Semana de Ciência e Tecnologia - Inscrições abertas" },
    { id: 5, text: "Alteração no regulamento de estágios" }
  ],
  course: [
    { id: 1, text: "Palestra: Carreira em Desenvolvimento Mobile" },
    { id: 2, text: "Workshop de React e Next.js - Vagas limitadas" },
    { id: 3, text: "Defesas de TCC: Cronograma atualizado" },
    { id: 4, text: "Nova grade curricular aprovada pelo colegiado" },
    { id: 5, text: "Grupo de estudos em Machine Learning" }
  ],
  my: [
    { id: 1, name: "Formandos 2024.2", icon: "GraduationCap" },
    { id: 2, name: "Projeto Final", icon: "FolderCode" },
    { id: 3, name: "Estudo em Grupo", icon: "Users" },
    { id: 4, name: "Matemática Aplicada", icon: "Calculator" }
  ]
};

export const mockEvents = {
  myEvents: [
    { id: 1, title: "Apresentação TCC", date: "2024-02-20", time: "14:00", location: "Sala 204" },
    { id: 2, title: "Prova - Banco de Dados", date: "2024-02-22", time: "10:00", location: "Lab 3" },
    { id: 3, title: "Reunião Projeto Final", date: "2024-02-18", time: "16:00", location: "Online" },
    { id: 4, title: "Entrega Trabalho IA", date: "2024-02-25", time: "23:59", location: "SIGAA" },
    { id: 5, title: "Seminário ES", date: "2024-02-19", time: "08:00", location: "Auditório" }
  ],
  upcomingEvents: [
    { id: 1, title: "Hackathon UFRN", date: "2024-03-01", time: "09:00", location: "Centro de Conv." },
    { id: 2, title: "Palestra: IA Generativa", date: "2024-02-28", time: "19:00", location: "Auditório A" },
    { id: 3, title: "Workshop DevOps", date: "2024-03-05", time: "14:00", location: "Lab 1" },
    { id: 4, title: "Feira de Estágios", date: "2024-03-10", time: "08:00", location: "Ginásio" },
    { id: 5, title: "Minicurso Python", date: "2024-03-12", time: "15:00", location: "Lab 2" }
  ]
};

export const mockDisciplines = [
  {
    id: 1,
    code: "DIM0320",
    name: "Inteligência Artificial",
    teacher: "Prof. João Silva",
    schedule: "24M34",
    status: "cursando"
  },
  {
    id: 2,
    code: "DIM0412",
    name: "Banco de Dados II",
    teacher: "Profa. Maria Santos",
    schedule: "35T23",
    status: "cursando"
  },
  {
    id: 3,
    code: "DIM0504",
    name: "Engenharia de Software",
    teacher: "Prof. Carlos Oliveira",
    schedule: "246M12",
    status: "cursando"
  },
  {
    id: 4,
    code: "DIM0403",
    name: "Computação Gráfica",
    teacher: "Prof. Ana Paula",
    schedule: "35M34",
    status: "cursando"
  },
  {
    id: 5,
    code: "DIM0605",
    name: "Projeto de Sistemas",
    teacher: "Prof. Roberto Lima",
    schedule: "24T45",
    status: "cursando"
  }
];
