import { ChevronRight } from "lucide-react";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { ChatAssistant } from "@/components/ChatAssistant";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { mockDisciplines } from "@/lib/mockData";

export default function Disciplinas() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="flex">
        <Sidebar />
        
        <main className="flex-1 p-6">
          <h1 className="text-3xl font-bold mb-6">MINHAS DISCIPLINAS</h1>
          
          <div className="space-y-3 mb-6">
            {mockDisciplines.map((discipline) => (
              <Card 
                key={discipline.id} 
                className="hover:shadow-md transition-shadow cursor-pointer"
              >
                <CardContent className="p-4 flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="font-mono text-sm text-muted-foreground">
                        {discipline.code}
                      </span>
                      <span className="font-semibold text-lg">
                        {discipline.name}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>{discipline.teacher}</span>
                      <span>•</span>
                      <span>{discipline.schedule}</span>
                    </div>
                  </div>
                  <ChevronRight className="h-5 w-5 text-muted-foreground" />
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-end">
            <Button variant="outline" className="gap-2">
              VER TURMAS ANTERIORES
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </main>
      </div>

      <ChatAssistant />
    </div>
  );
}
