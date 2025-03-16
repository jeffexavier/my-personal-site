import { Button } from "@heroui/button";
import { Image } from "@heroui/image";
import { Link } from "@heroui/link";

import { PhoneIcon } from "./icons";

export default function AboutSection() {
  return (
    <>
      <div className="flex gap-4 justify-around" id="about_section">
        <Image alt="teste" src="/images/avatar/avatar_oi.png" />
        <div className="flex flex-col justify-center gap-4 max-w-screen-md">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-bold text-secondary">Sobre mim</h1>
            <p className="text-justify text-gray-50">
              Especialista em Growth, Gestão de Produtos, Análise de Negócios e
              Inteligência de Dados, com experiência na liderança de times de
              Comercial, Marketing e Customer Success. Meu foco está na criação,
              ajuste e automação de processos, aplicando teste, erro,
              aprendizado e repetição para impulsionar crescimento e retenção de
              clientes. Já atuei como Product Owner, Product Manager e Analista
              de BI, liderando projetos estratégicos para diversas empresas e
              desenvolvendo soluções baseadas em dados, tecnologia e inovação.
              Minha especialidade é integrar estratégia, automação e
              inteligência de mercado, transformando desafios complexos em
              oportunidades escaláveis. 🚀
            </p>
          </div>
          <div>
            <Button
              as={Link}
              color="warning"
              href="#"
              startContent={<PhoneIcon width="1em" />}
              variant="ghost"
            >
              Entre em contato
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
