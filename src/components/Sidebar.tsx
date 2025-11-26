import { BookOpen, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { mockStudent } from "@/lib/mockData";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export function Sidebar() {
  return (
    <aside className="w-64 bg-sidebar border-r border-sidebar-border p-6 space-y-6 hidden lg:block">
      <div className="flex flex-col items-center space-y-4">
        <div className="relative">
          <img
            src={mockStudent.avatar}
            alt={mockStudent.name}
            className="w-24 h-24 rounded-full border-4 border-primary/20"
          />
        </div>
        
        <div className="text-center w-full">
          <h2 className="font-semibold text-lg">{mockStudent.name}</h2>
        </div>
      </div>

      <Separator />

      <div className="space-y-3 text-sm">
        <div className="flex items-start gap-2">
          <BookOpen className="h-4 w-4 mt-0.5 text-muted-foreground shrink-0" />
          <div>
            <p className="text-muted-foreground text-xs">Curso</p>
            <p className="font-medium">{mockStudent.course}</p>
            <p className="text-muted-foreground">{mockStudent.period}</p>
          </div>
        </div>

        <div>
          <p className="text-muted-foreground text-xs">Email</p>
          <p className="text-sm">{mockStudent.email}</p>
        </div>

        <div>
          <p className="text-muted-foreground text-xs">Telefone</p>
          <p className="text-sm">{mockStudent.phone}</p>
        </div>
      </div>

      <Separator />

      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-xs text-muted-foreground">IRA</span>
          <span className="font-semibold text-primary">{mockStudent.ira}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-xs text-muted-foreground">CR</span>
          <span className="font-semibold text-primary">{mockStudent.cr}</span>
        </div>
      </div>

      <Separator />

      <div className="space-y-2">
        <Button variant="outline" className="w-full justify-start" size="sm" asChild>
          <Link to="/comunidades">
            <Users className="mr-2 h-4 w-4" />
            Comunidade
          </Link>
        </Button>
        <Button variant="outline" className="w-full justify-start" size="sm" asChild>
          <Link to="/oportunidades">
            <BookOpen className="mr-2 h-4 w-4" />
            Oportunidades
          </Link>
        </Button>
      </div>

      <Button variant="ghost" className="w-full" size="sm">
        Editar Perfil
      </Button>
    </aside>
  );
}
