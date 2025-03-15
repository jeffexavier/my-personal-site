import { Image } from "@heroui/image";

import TalkToMeForms from "./talkToMeForms";

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
          <TalkToMeForms />
        </div>
      </div>
    </>
  );
}
