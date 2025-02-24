import { Button } from "@heroui/button";
import { Image } from "@heroui/image";
import { Link } from "@heroui/link";

import { PhoneIcon, ArrowDownTrayIcon } from "./icons";
import ResumeHeader from "./resume";

export default function HomeHeader() {
  return (
    <section className="flex flex-col justify-between gap-8">
      <div className="flex justify-between gap-8">
        <div className="flex flex-col gap-8 justify-center max-w-screen-sm">
          <div className="flex flex-col gap-4">
            <p className="text-secondary text-xl">Olá, sou 👋🏻</p>
            <h1 className="text-foreground-900 font-bold text-5xl">
              Jefferson Xavier
            </h1>
            <p className="text-secondary text-xl">
              Ajudo times com processos e tecnologia a<br /> realizarem entregas
              de alto valor, rápido e escalável!
            </p>
          </div>
          <div className="flex gap-2">
            <Button
              as={Link}
              color="warning"
              href="#contact_forms"
              startContent={<PhoneIcon width="1em" />}
              variant="solid"
            >
              Entre em contato
            </Button>
            <Button
              as={Link}
              color="warning"
              href="/files/Jefferson_Xavier_CV_02_2025.pdf"
              startContent={<ArrowDownTrayIcon width="1em" />}
              target="_blank"
              variant="ghost"
            >
              Baixar Curriculum
            </Button>
          </div>
        </div>
        <div>
          <Image alt="teste" src="/images/avatar/avatar_pc.png" />
        </div>
      </div>
      <ResumeHeader />
    </section>
  );
}
