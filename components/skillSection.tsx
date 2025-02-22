import { Progress } from "@heroui/progress";

export default function SkillSection() {
  const skills = [
    { title: "Make / Integromat / N8N", value: 90 },
    { title: "Excel / Google Sheets", value: 95 },
    { title: "Gestão ágil", value: 90 },
    { title: "Gestão de produtos", value: 82 },
    { title: "Liderança de equipe", value: 88 },
    { title: "Scrum", value: 93 },
    { title: "Histórias de usuários", value: 95 },
    { title: "Business Intelligence", value: 86 },
    { title: "SQL", value: 81 },
    { title: "JavaScript", value: 86 },
    { title: "NestJS", value: 74 },
    { title: "Next.js", value: 87 },
    { title: "React", value: 89 },
    { title: "Python", value: 73 },
    { title: "Data Studio", value: 83 },
    { title: "Power BI", value: 87 },
    { title: "Node.js", value: 67 },
    { title: "Apache Airflow", value: 42 },
  ];

  return (
    <>
      <div className="flex flex-col gap-10">
        <h1 className="text-3xl font-bold text-secondary text-center">
          Minhas competências
        </h1>
        <div className="grid grid-cols-2 gap-4">
          {skills.map((item, index) => (
            <div key={index}>
              <p className="text-justify">{item.title}</p>
              <Progress
                aria-label="Loading..."
                color="secondary"
                value={item.value}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
