import { Divider } from "@heroui/divider";

export default function ResumeHeader() {
  return (
    <>
      <div className="bg-purple-950 rounded-lg px-8 py-4 flex justify-center gap-8">
        <div className="flex items-center gap-4 max-w-fit">
          <h1 className="text-5xl font-bold">5+</h1>
          <p className="text-xl text-secondary font-bold">
            Anos de experiência
          </p>
        </div>
        <Divider
          className="my-2 bg-black w-0.5 rounded-full min-h-20"
          orientation="vertical"
        />
        <div className="flex items-center gap-4 max-w-fit">
          <h1 className="text-5xl font-bold">500+</h1>
          <p className="text-xl text-secondary font-bold">
            Histórias de usuário escritas
          </p>
        </div>
        <Divider
          className="my-2 bg-black w-0.5 rounded-full min-h-20"
          orientation="vertical"
        />
        <div className="flex items-center gap-4 max-w-fit">
          <h1 className="text-5xl font-bold">10+</h1>
          <p className="text-xl text-secondary font-bold">
            Projetos de integração de sistemas documentados
          </p>
        </div>
      </div>
    </>
  );
}
