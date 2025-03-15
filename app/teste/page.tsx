"use client";

import { useEffect } from "react";

export default function Teste() {
  console.log(process.env.NEXT_PUBLIC_API_KEY);

  function buttonClick() {
    console.log(process.env.NEXT_PUBLIC_API_KEY);
  }

  useEffect(() => {
    console.log(process.env.NEXT_PUBLIC_API_KEY);
  }, []);

  return (
    <>
      <p>{process.env.NEXT_PUBLIC_API_KEY}</p>
      <p>teste</p>
    </>
  );
}
