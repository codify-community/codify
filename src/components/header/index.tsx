import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { LogIn } from "lucide-react";

export default function Header() {
  const navigate = useNavigate();
  return (
    <header className="w-full min-h-16 flex items-center justify-between border-b-2 px-20 text-white">
      <div>
        <img
          src="/codify-text-icon.svg"
          alt="logo-codify"
          className="w-35"
        />
      </div>
      <nav className="flex justify-center items-center gap-3">
        <Button
          className="cursor-pointer"
          variant={"outline"}
          onClick={() => navigate("/teste")}
        >
          Home
        </Button>
        <Button className="cursor-pointer" variant={"ghost"}>
          Sobre
        </Button>
        <Button className="cursor-pointer" variant={"ghost"}>
          Staff
        </Button>
        <Button className="cursor-pointer" variant={"ghost"}>
          Desafios
        </Button>
      </nav>
      <Button className="cursor-pointer" onClick={() => navigate("/")}>
        <LogIn />
        Entrar
      </Button>
    </header>
  );
}
