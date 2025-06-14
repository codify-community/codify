import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { LogIn } from "lucide-react";
import { NavItem } from "./nav-item";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <header className="w-full min-h-16 gap-3 flex items-center justify-between border-b-2 px-20 text-white">
      <button
        className="w-35 cursor-pointer"
        onClick={() => navigate("/")}
      >
        <img
          src="/codify-text-icon.svg"
          alt="logo-codify"
          className="min-w-35"
        />
      </button>

      <nav className=" flex justify-center items-center gap-3">
        <NavItem
          title="Home"
          isSelected={location.pathname == '/'}
          navigationFunction={() => navigate("/")}
        />
        <NavItem
          title="Sobre"
          isSelected={location.pathname == '/sobre'}
          navigationFunction={() => navigate("/sobre")}
        />
        <NavItem
          title="Staff"
          isSelected={location.pathname == '/staff'}
          navigationFunction={() => navigate("/staff")}
        />
        <NavItem
          title="Desafios"
          isSelected={location.pathname == '/desafios'}
          navigationFunction={() => navigate("/desafios")}
        />
      </nav>

      <div className="w-35 flex justify-end">
        <Button variant="codify" className="cursor-pointer" onClick={() => navigate("/")}>
          <LogIn />
          Entrar
        </Button>
      </div>
    </header>
  );
}
