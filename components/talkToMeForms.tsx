"use client";

import { Input, Textarea } from "@heroui/input";
import { Button } from "@heroui/button";
import { useState } from "react";

import { PhoneIcon } from "./icons";

export default function TalkToMeForms() {
  const [formData, setFormData] = useState({});

  function inputHandler(e: any, input: string) {
    setFormData({ ...formData, [input]: e.target.value });
  }

  async function sendData() {
    const sendRequest = await fetch(
      "https://n8n.jeffersonxavier.com.br/webhook/5344e5a9-b550-4eff-a019-0a81de8c961b",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      },
    );
  }

  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4">
          <Input
            className="min-w-fit"
            label="Nome completo"
            type="text"
            onChange={(e) => inputHandler(e, "name")}
          />
          <Input
            label="Seu melhor e-mail"
            type="email"
            onChange={(e) => inputHandler(e, "email")}
          />
          <Input
            label="WhatsApp"
            type="tel"
            onChange={(e) => inputHandler(e, "phone")}
          />
          <Textarea
            label="Escreva sua mensagem aqui..."
            onChange={(e) => inputHandler(e, "message")}
          />
        </div>
        <Button
          color="warning"
          startContent={<PhoneIcon width="1em" />}
          variant="solid"
          onPress={sendData}
        >
          Entre em contato
        </Button>
      </div>
    </>
  );
}
