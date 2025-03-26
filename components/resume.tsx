export default function ResumeHeader() {
  interface ResumeItems {
    time: string;
    description: string;
  }

  const resumeItems: ResumeItems[] = [
    {
      time: "5+",
      description: "Anos de experiência",
    },
    {
      time: "500+",
      description: "Histórias de usuário escritas",
    },
    {
      time: "10+",
      description: "Projetos de integração de sistemas documentados",
    },
  ];

  return (
    <div className="flex gap-4 justify-around max-w-full overflow-scroll sm:overflow-auto">
      {resumeItems.map((item, index) => (
        <div
          key={index}
          className="bg-purple-950/50 rounded-lg px-8 py-4 flex flex-col items-start gap-4 max-w-52 min-w-52 sm:flex-row sm:items-center sm:max-w-full"
        >
          <h1 className="text-gray-50 text-5xl font-bold">{item.time}</h1>
          <p className="text-xl text-secondary font-bold">{item.description}</p>
        </div>
      ))}
    </div>
  );
}
