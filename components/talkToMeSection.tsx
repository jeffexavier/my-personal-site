import { Image } from "@heroui/image";
import { Input, Textarea } from "@heroui/input";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";

import { PhoneIcon } from "./icons";

export default function TalkToMeSection() {
  return (
    <>
      <div
        className="flex gap-4 max-w-screen-xl pb-[210px] items-center"
        id="contact_forms"
      >
        <div className="flex min-w-[30%]">
          <Image
            alt="teste"
            src="/images/avatar/avatar_phone.png"
            width={5000}
          />
        </div>
        <div className="flex flex-col gap-4 min-w-[70%]">
          <h1 className="text-3xl font-bold text-secondary">
            Entre em contato
          </h1>
          <div className="flex flex-col gap-4">
            <Input className="min-w-fit" label="Nome completo" type="text" />
            <Input label="Seu melhor e-mail" type="email" />
            <Input label="WhatsApp" type="tel" />
            <Textarea label="Escreva sua mensagem aqui..." />
          </div>

          <Button
            as={Link}
            color="warning"
            href="#"
            startContent={<PhoneIcon width="1em" />}
            variant="solid"
          >
            Entre em contato
          </Button>
        </div>
      </div>
    </>
  );
}
