import { Calendar, BookOpen, Clock, MessageSquare, GraduationCap, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { mockModules, mockMostUsed, mockNews } from "@/lib/mockData";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { ChatAssistant } from "@/components/ChatAssistant";

const iconMap: Record<string, any> = {
  Calendar,
  BookOpen,
  Clock,
  MessageSquare,
  GraduationCap,
  Star
};

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="flex">
        <Sidebar />
        
        <main className="flex-1 p-6 space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">Mais Usados</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {mockMostUsed.map((item) => {
                const Icon = iconMap[item.icon];
                return (
                  <Link key={item.id} to={item.path}>
                    <Card className="hover:shadow-md transition-shadow cursor-pointer border-2 hover:border-primary/50">
                      <CardContent className="flex items-center gap-4 p-6">
                        <div className={`p-3 rounded-lg bg-module-${item.color}/10`}>
                          <Icon className={`h-6 w-6 text-module-${item.color}`} />
                        </div>
                        <span className="font-semibold">{item.title}</span>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Módulos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
              {mockModules.map((module) => {
                const Icon = iconMap[module.icon];
                return (
                  <Link key={module.id} to={module.path}>
                    <Card className="hover:shadow-md transition-all hover:scale-105 cursor-pointer h-full">
                      <CardContent className="p-6 flex flex-col items-center text-center space-y-3">
                        <div className={`p-4 rounded-xl bg-module-${module.color}/10`}>
                          <Icon className={`h-8 w-8 text-module-${module.color}`} />
                        </div>
                        <div>
                          <h3 className="font-semibold">{module.title}</h3>
                          <p className="text-sm text-muted-foreground">{module.count}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">NOTÍCIAS</h2>
            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {mockNews.map((news) => (
                    <div key={news.id} className="pb-4 border-b last:border-b-0">
                      <h3 className="font-semibold mb-1">{news.title}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{news.excerpt}</p>
                      <span className="text-xs text-muted-foreground">
                        {new Date(news.date).toLocaleDateString('pt-BR')}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>
        </main>
      </div>

      <ChatAssistant />
    </div>
  );
}
