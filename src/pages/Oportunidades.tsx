import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { ChatAssistant } from "@/components/ChatAssistant";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { mockOpportunities } from "@/lib/mockData";

export default function Oportunidades() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="flex">
        <Sidebar />
        
        <main className="flex-1 p-6">
          <h1 className="text-3xl font-bold mb-6">OPORTUNIDADES</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockOpportunities.map((opportunity) => (
              <Card key={opportunity.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-lg">{opportunity.title}</CardTitle>
                    <Badge variant="secondary">{opportunity.type}</Badge>
                  </div>
                  <p className="text-sm font-medium text-muted-foreground">{opportunity.company}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{opportunity.description}</p>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-muted-foreground">Prazo</span>
                    <span className="font-medium">
                      {new Date(opportunity.deadline).toLocaleDateString('pt-BR')}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </main>
      </div>

      <ChatAssistant />
    </div>
  );
}
