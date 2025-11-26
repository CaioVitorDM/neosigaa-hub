import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";

export default function Login() {
  const navigate = useNavigate();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulando login
    if (login && password) {
      navigate("/dashboard");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 via-background to-accent/10 p-4">
      <Card className="w-full max-w-md p-8 space-y-6 shadow-lg">
        <div className="space-y-2 text-center">
          <div className="flex justify-between items-start mb-8">
            <h1 className="text-4xl font-bold">NEOSIGAA</h1>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/UFRN_logo.svg/200px-UFRN_logo.svg.png"
              alt="UFRN"
              className="h-12 w-12 object-contain"
            />
          </div>
          <p className="text-muted-foreground">Portal Acadêmico da UFRN</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="login">Login</Label>
            <Input
              id="login"
              type="text"
              placeholder="Digite seu login"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
              required
              className="h-12"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Senha</Label>
            <Input
              id="password"
              type="password"
              placeholder="Digite sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="h-12"
            />
          </div>

          <Button type="submit" className="w-full h-12 text-base font-semibold">
            Entrar
          </Button>
        </form>

        <div className="text-center space-y-2">
          <a href="#" className="text-sm text-primary hover:underline block">
            Esqueci minha senha
          </a>
          <a href="#" className="text-sm text-muted-foreground hover:underline block">
            Primeiro acesso?
          </a>
        </div>
      </Card>
    </div>
  );
}
