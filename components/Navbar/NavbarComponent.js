import React from "react";
import { Navbar, Button, Link, Text, Card, Radio, useTheme,  } from "@nextui-org/react";
import { Layout } from "./Layout.js";
import { Logo } from "./Logo.js";

export default function NavbarComponent() {

  const [activeColor, setActiveColor] = React.useState("primary");

  const {isDark} = useTheme();

  const variants = [
    "default",
    "highlight",
    "highlight-solid",
    "underline",
    "highlight-rounded",
    "highlight-solid-rounded",
    "underline-rounded",
  ];

  const colors = ["primary", "secondary", "success", "warning", "error"];

  const collapseItems = [
    "Features",
    "Customers",
    "Pricing",
    "Company",
    "Legal",
    "Team",
    "Help & Feedback",
    "Login",
    "Sign Up",
  ];

  return (
  <Layout>
      <Navbar isBordered={isDark} variant="sticky">
        <Navbar.Brand className="p-2">
     
          <Logo />
          <Text b color="inherit" hideIn="xs">
            Users
          </Text>
        </Navbar.Brand>
        <Navbar.Content enableCursorHighlight hideIn="xs" variant="highlight-solid">
          <Navbar.Link href="#">Inicio</Navbar.Link>
          <Navbar.Link isActive href="#">
            Listado
          </Navbar.Link>
          <Navbar.Link href="#">Agregar</Navbar.Link>
          <Navbar.Link href="#">Ayuda</Navbar.Link>
          <Navbar.Toggle aria-label="toggle navigation" className="ms-4"/>
        </Navbar.Content>
        <Navbar.Collapse>
        {collapseItems.map((item, index) => (
          <Navbar.CollapseItem key={item}>
            <Link
              color="inherit"
              css={{
                minWidth: "100%",
                justifyContent: "end"
              }}
              href="#"
            >
              {item}
            </Link>
          </Navbar.CollapseItem>
        ))}
      </Navbar.Collapse>
      </Navbar>
    </Layout>
  )
}

