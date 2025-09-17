import { DietCatsLogo } from "@/components/DietCatsLogo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Trophy, Target, Calendar, CheckCircle2, Clock } from "lucide-react";

const Challenges = () => {
  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="bg-gradient-hero border-b p-4">
        <div className="container mx-auto flex items-center justify-between">
          <DietCatsLogo size="md" />
          <Badge className="bg-dietcats-green text-white">
            <Trophy className="w-3 h-3 mr-1" />
            5 concluídos
          </Badge>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold text-foreground">
            Desafios 🎯
          </h2>
          <p className="text-muted-foreground">
            Complete desafios e ganhe pontos!
          </p>
        </div>

        {/* Active Challenges */}
        <section className="space-y-4">
          <h3 className="text-xl font-semibold text-foreground">
            Desafios Ativos
          </h3>

          <div className="grid gap-4">
            {/* Daily Challenge */}
            <Card className="border-dietcats-orange">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Target className="w-5 h-5 text-dietcats-orange" />
                    Desafio Diário
                  </CardTitle>
                  <Badge variant="outline" className="text-dietcats-orange border-dietcats-orange">
                    <Clock className="w-3 h-3 mr-1" />
                    18h restantes
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground">
                  Registre pelo menos 3 refeições hoje
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Progresso</span>
                    <span className="font-semibold">3/3</span>
                  </div>
                  <Progress value={100} className="h-2" />
                </div>
                <Button className="w-full bg-dietcats-orange hover:bg-dietcats-orange/90">
                  <CheckCircle2 className="w-4 h-4 mr-2" />
                  Completo!
                </Button>
              </CardContent>
            </Card>

            {/* Weekly Challenge */}
            <Card className="border-dietcats-green">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Calendar className="w-5 h-5 text-dietcats-green" />
                    Desafio Semanal
                  </CardTitle>
                  <Badge variant="outline" className="text-dietcats-green border-dietcats-green">
                    4 dias restantes
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground">
                  Consuma 5 porções de vegetais por dia durante 7 dias
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Progresso</span>
                    <span className="font-semibold">4/7 dias</span>
                  </div>
                  <Progress value={57} className="h-2" />
                </div>
                <Button variant="outline" className="w-full">
                  Continuar Desafio
                </Button>
              </CardContent>
            </Card>

            {/* Monthly Challenge */}
            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Trophy className="w-5 h-5 text-dietcats-purple" />
                    Desafio Mensal
                  </CardTitle>
                  <Badge variant="outline" className="text-dietcats-purple border-dietcats-purple">
                    12 dias restantes
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground">
                  Mantenha sua meta de calorias por 20 dias no mês
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Progresso</span>
                    <span className="font-semibold">15/20 dias</span>
                  </div>
                  <Progress value={75} className="h-2" />
                </div>
                <Button variant="outline" className="w-full">
                  Ver Detalhes
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Completed Challenges */}
        <section className="space-y-4">
          <h3 className="text-xl font-semibold text-foreground">
            Concluídos Recentemente
          </h3>
          
          <div className="grid gap-3">
            <Card className="bg-muted/50">
              <CardContent className="pt-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-dietcats-green" />
                    <div>
                      <p className="font-medium">Hidratação Máxima</p>
                      <p className="text-sm text-muted-foreground">Beba 2L de água por dia</p>
                    </div>
                  </div>
                  <Badge className="bg-dietcats-green text-white">+50 pts</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-muted/50">
              <CardContent className="pt-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-dietcats-green" />
                    <div>
                      <p className="font-medium">Café da Manhã Campeão</p>
                      <p className="text-sm text-muted-foreground">Não pule o café da manhã por 7 dias</p>
                    </div>
                  </div>
                  <Badge className="bg-dietcats-green text-white">+100 pts</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Challenges;