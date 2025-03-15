import { Navbar, NavbarContent, NavbarItem } from "@heroui/navbar";
import { Link } from "@heroui/link";
import { Button } from "@heroui/button";

import { PhoneIcon } from "@/components/icons";

export default function NavbarTop() {
  interface MenuItens {
    item: string;
    color:
      | "primary"
      | "secondary"
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
      color: "foreground",
      href: "http://localhost:3000/",
      target: "_self",
    },
    {
      item: "Sobre",
      color: "foreground",
      href: "#about_section",
      target: "_self",
    },
    {
      item: "Projetos",
      color: "foreground",
      href: "#projects_section",
      target: "_self",
    },
    {
      item: "Competências",
      color: "foreground",
      href: "#skill_section",
      target: "_self",
    },
    {
      item: "GitHub",
      color: "secondary",
      href: "https://github.com/jeffexavier",
      target: "_blank",
    },
    {
      item: "Linkedin",
      color: "secondary",
      href: "https://www.linkedin.com/in/jeffexavier/",
      target: "_blank",
    },
  ];

  return (
    <Navbar shouldHideOnScroll>
      <NavbarContent className="flex gap-4" justify="center">
        {menuItems.map((item, index) => (
          <NavbarItem key={index}>
            <Link color={`${item.color}`} href={item.href} target={item.target}>
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
