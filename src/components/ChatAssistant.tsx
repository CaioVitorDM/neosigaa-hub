import { MessageCircle, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function ChatAssistant() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg z-50 bg-primary hover:bg-primary/90"
        size="icon"
        aria-label="Assistente virtual"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </Button>

      {isOpen && (
        <Card className="fixed bottom-24 right-6 w-80 h-96 shadow-xl z-40 flex flex-col animate-scale-in">
          <div className="bg-primary text-primary-foreground p-4 rounded-t-lg">
            <h3 className="font-semibold">Assistente NEOSIGAA</h3>
            <p className="text-sm opacity-90">Como posso ajudar?</p>
          </div>
          
          <div className="flex-1 p-4 overflow-y-auto">
            <div className="space-y-4">
              <div className="bg-secondary p-3 rounded-lg">
                <p className="text-sm">Olá! Estou aqui para ajudar com dúvidas sobre o portal acadêmico.</p>
              </div>
              
              <div className="space-y-2">
                <p className="text-xs text-muted-foreground">Perguntas frequentes:</p>
                <button className="w-full text-left text-sm p-2 rounded hover:bg-secondary transition-colors">
                  Como visualizar minhas notas?
                </button>
                <button className="w-full text-left text-sm p-2 rounded hover:bg-secondary transition-colors">
                  Como me inscrever em eventos?
                </button>
                <button className="w-full text-left text-sm p-2 rounded hover:bg-secondary transition-colors">
                  Onde encontro meus horários?
                </button>
              </div>
            </div>
          </div>

          <div className="p-4 border-t">
            <input
              type="text"
              placeholder="Digite sua pergunta..."
              className="w-full px-3 py-2 rounded-lg border border-input bg-background text-sm"
            />
          </div>
        </Card>
      )}
    </>
  );
}
