import { Divider } from "@heroui/divider";

export default function ResumeHeader() {
  // interface ResumeItems {
  //   time: string;
  //   description: string;
  // }

  // const resumeItems: ResumeItems[] = [
  //   {
  //     time: "5+",
  //     description: "Anos de experiência",
  //   },
  //   {
  //     time: "500+",
  //     description: "Histórias de usuário escritas",
  //   },
  //   {
  //     time: "10+",
  //     description: "Projetos de integração de sistemas documentados",
  //   },
  // ];

  return (
    <>
      <div className="bg-purple-950/50 rounded-lg px-8 py-4 flex justify-center gap-8">
        <div className="flex items-center gap-4 max-w-fit">
          <h1 className="text-gray-50 text-5xl font-bold">5+</h1>
          <p className="text-xl text-secondary font-bold">
            Anos de experiência
          </p>
        </div>
        <Divider
          className="my-2 bg-black w-0.5 rounded-full min-h-20"
          orientation="vertical"
        />
        <div className="flex items-center gap-4 max-w-fit">
          <h1 className="text-gray-50 text-5xl font-bold">500+</h1>
          <p className="text-xl text-secondary font-bold">
            Histórias de usuário escritas
          </p>
        </div>
        <Divider
          className="my-2 bg-black w-0.5 rounded-full min-h-20"
          orientation="vertical"
        />
        <div className="flex items-center gap-4 max-w-fit">
          <h1 className="text-gray-50 text-5xl font-bold">10+</h1>
          <p className="text-xl text-secondary font-bold">
            Projetos de integração de sistemas documentados
          </p>
        </div>
      </div>
    </>
  );
}
