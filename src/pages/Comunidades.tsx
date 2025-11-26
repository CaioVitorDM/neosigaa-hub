import { GraduationCap, FolderCode, Users, Calculator } from "lucide-react";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { ChatAssistant } from "@/components/ChatAssistant";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { mockCommunities } from "@/lib/mockData";

const communityIcons: Record<string, any> = {
  GraduationCap,
  FolderCode,
  Users,
  Calculator
};

export default function Comunidades() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="flex">
        <Sidebar />
        
        <main className="flex-1 p-6">
          <h1 className="text-3xl font-bold mb-6">COMUNIDADES</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>UFRN</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {mockCommunities.ufrn.map((item) => (
                  <div key={item.id} className="p-3 border rounded-lg hover:bg-secondary/50 transition-colors cursor-pointer">
                    <p className="text-sm">{item.text}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Meu Curso</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {mockCommunities.course.map((item) => (
                  <div key={item.id} className="p-3 border rounded-lg hover:bg-secondary/50 transition-colors cursor-pointer">
                    <p className="text-sm">{item.text}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Minhas Comunidades</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {mockCommunities.my.map((item) => {
                    const Icon = communityIcons[item.icon];
                    return (
                      <div 
                        key={item.id} 
                        className="flex flex-col items-center justify-center p-4 border rounded-lg hover:bg-secondary/50 transition-colors cursor-pointer space-y-2"
                      >
                        <Icon className="h-8 w-8 text-primary" />
                        <span className="text-xs text-center font-medium">{item.name}</span>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>

      <ChatAssistant />
    </div>
  );
}
