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
  }

  const menuItems: MenuItens[] = [
    {
      item: "Início",
      color: "foreground",
    },
    {
      item: "Sobre",
      color: "foreground",
    },
    {
      item: "Projetos",
      color: "foreground",
    },
    {
      item: "Ferramentas",
      color: "foreground",
    },
    {
      item: "GitHub",
      color: "secondary",
    },
    {
      item: "Linkedin",
      color: "secondary",
    },
  ];

  return (
    <Navbar shouldHideOnScroll>
      <NavbarContent className="flex gap-4" justify="center">
        {menuItems.map((item, index) => (
          <NavbarItem key={index}>
            <Link color={`${item.color}`} href="#">
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
            href="#"
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
