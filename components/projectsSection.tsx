export default function ProjectsSection() {
  const projects = [
    {
      title: "Liderança e estratégia de negócios",
      decription:
        "Profissional especializado em Growth, Gestão de Produtos e Inteligência de Negócios. Sua abordagem estratégica é baseada em teste, erro, aprendizado e repetição, permitindo a criação, ajuste e automação de processos para impulsionar a aquisição e retenção de clientes. Com experiência na liderança de times de Comercial, Marketing e Customer Success, ele garante que estratégias sejam data-driven e alinhadas às necessidades do mercado.",
    },
    {
      title: "Inovação e inteligência de dados",
      decription:
        "Com forte expertise em dados e tecnologia, aplica Business Intelligence, Data Analytics e Automação para otimizar processos e gerar insights estratégicos. Ele desenvolve algoritmos para análise de comportamento do consumidor, segmentação e previsão de vendas, utilizando ferramentas como Python, JavaScript, Node.js, Apache Airflow e Power BI. Sua visão orientada por dados permite escalar negócios e acelerar decisões estratégicas.",
    },
    {
      title: "Gestão Ágil e foco em resultados",
      decription:
        "Com uma base sólida em Product Management e Metodologias Ágeis, gerencia priorização de backlog, definição de roadmap e equipes multidisciplinares. Já liderou projetos estratégicos para empresas como Sebrae, General Shopping, McDonald's e Giraffas, garantindo entregas de alto impacto. Sua missão é conectar tecnologia, processos e experiência do cliente, transformando desafios complexos em crescimento escalável e sustentável.",
    },
  ];

  return (
    <>
      <div className="flex gap-4" id="projects_section">
        {projects.map((item, index) => (
          <div
            key={index}
            className="flex flex-col bg-secondary-50 rounded-lg p-8 gap-4"
          >
            <h1 className="text-3xl font-bold text-secondary">{item.title}</h1>
            <p className="text-justify ">{item.decription}</p>
          </div>
        ))}
      </div>
    </>
  );
}
