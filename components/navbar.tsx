import { Navbar, NavbarContent, NavbarItem } from "@heroui/navbar";
import { Link } from "@heroui/link";
import { Button } from "@heroui/button";

import { PhoneIcon } from "@/components/icons";

export default function NavbarTop() {
  interface MenuItens {
    item: string;
    color:
      | "text-gray-50"
      | "text-secondary"
      | "foreground"
      | "success"
      | "warning"
      | "danger";
    href: string;
    target: string;
  }

  const menuItems: MenuItens[] = [
    {
      item: "Início",
      color: "text-gray-50",
      href: "http://localhost:3000/",
      target: "_self",
    },
    {
      item: "Sobre",
      color: "text-gray-50",
      href: "#about_section",
      target: "_self",
    },
    {
      item: "Projetos",
      color: "text-gray-50",
      href: "#projects_section",
      target: "_self",
    },
    {
      item: "Competências",
      color: "text-gray-50",
      href: "#skill_section",
      target: "_self",
    },
    {
      item: "GitHub",
      color: "text-secondary",
      href: "https://github.com/jeffexavier",
      target: "_blank",
    },
    {
      item: "Linkedin",
      color: "text-secondary",
      href: "https://www.linkedin.com/in/jeffexavier/",
      target: "_blank",
    },
  ];

  return (
    <Navbar shouldHideOnScroll className="bg-black/80">
      <NavbarContent className="flex gap-4" justify="center">
        {menuItems.map((item, index) => (
          <NavbarItem key={index}>
            <Link className={item.color} href={item.href} target={item.target}>
              {item.item}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent className="flex p-4" justify="center">
        <NavbarItem>
          <Button
            as={Link}
            color="warning"
            href="#contact_forms"
            startContent={<PhoneIcon width="1em" />}
            variant="ghost"
          >
            Entre em contato
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
