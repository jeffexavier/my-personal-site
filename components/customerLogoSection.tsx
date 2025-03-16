import { Image } from "@heroui/image";

export default function CustomerLogoSection() {
  const customerLogoPath = [
    { path: "/images/customers/aramis.png", alt: "aramis logo" },
    { path: "/images/customers/biud.png", alt: "biud logo" },
    { path: "/images/customers/ecosysauto.png", alt: "ecosysauto logo" },
    { path: "/images/customers/giraffas.png", alt: "giraffas logo" },
    { path: "/images/customers/mcdonalds.png", alt: "mcdonalds logo" },
    { path: "/images/customers/v4company.png", alt: "v4company logo" },
  ];

  return (
    <>
      <div className="flex justify-between">
        {customerLogoPath.map((item, index) => (
          <Image key={index} alt={item.alt} src={item.path} />
        ))}
      </div>
    </>
  );
}
