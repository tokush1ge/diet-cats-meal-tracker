import { DietCatsLogo } from "@/components/DietCatsLogo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Trophy, Users, Crown, Medal, Award, Target } from "lucide-react";

const Competitions = () => {
  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="bg-gradient-hero border-b p-4">
        <div className="container mx-auto flex items-center justify-between">
          <DietCatsLogo size="md" />
          <Badge className="bg-dietcats-green text-white">
            <Users className="w-3 h-3 mr-1" />
            3 ativas
          </Badge>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold text-foreground">
            Competições 🏆
          </h2>
          <p className="text-muted-foreground">
            Dispute com amigos e nutricionistas!
          </p>
        </div>

        {/* Active Competition */}
        <Card className="bg-gradient-primary text-white">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="w-5 h-5" />
              Competição da Semana
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-white/90">
                "Desafio Verde" - Consuma 5 porções de vegetais por dia
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-white/80">Sua posição:</p>
                  <p className="text-2xl font-bold flex items-center gap-2">
                    <Medal className="w-6 h-6" />
                    2º lugar
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-white/80">Participantes:</p>
                  <p className="text-lg font-semibold">48 amigos</p>
                </div>
              </div>
              <Button variant="secondary" className="w-full">
                Ver Ranking Completo
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Leaderboard */}
        <section className="space-y-4">
          <h3 className="text-xl font-semibold text-foreground">
            Ranking Atual
          </h3>

          <div className="space-y-3">
            {/* 1st Place */}
            <Card className="border-yellow-400 bg-yellow-50 dark:bg-yellow-950/20">
              <CardContent className="pt-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2">
                      <Crown className="w-5 h-5 text-yellow-500" />
                      <span className="font-bold text-yellow-700 dark:text-yellow-400">1º</span>
                    </div>
                    <Avatar>
                      <AvatarImage src="/placeholder.svg" />
                      <AvatarFallback>MC</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">Maria Clara</p>
                      <p className="text-sm text-muted-foreground">Nutricionista</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-lg">2,450 pts</p>
                    <p className="text-sm text-muted-foreground">35/35 vegetais</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 2nd Place - User */}
            <Card className="border-gray-400 bg-gray-50 dark:bg-gray-950/20">
              <CardContent className="pt-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2">
                      <Medal className="w-5 h-5 text-gray-500" />
                      <span className="font-bold text-gray-700 dark:text-gray-400">2º</span>
                    </div>
                    <Avatar>
                      <AvatarImage src="/placeholder.svg" />
                      <AvatarFallback>PD</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">Paulo (Você)</p>
                      <p className="text-sm text-muted-foreground">Paciente</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-lg">2,180 pts</p>
                    <p className="text-sm text-muted-foreground">31/35 vegetais</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 3rd Place */}
            <Card className="border-orange-400 bg-orange-50 dark:bg-orange-950/20">
              <CardContent className="pt-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2">
                      <Award className="w-5 h-5 text-orange-500" />
                      <span className="font-bold text-orange-700 dark:text-orange-400">3º</span>
                    </div>
                    <Avatar>
                      <AvatarImage src="/placeholder.svg" />
                      <AvatarFallback>JS</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">João Silva</p>
                      <p className="text-sm text-muted-foreground">Paciente</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-lg">1,890 pts</p>
                    <p className="text-sm text-muted-foreground">27/35 vegetais</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Others */}
            {[
              { name: "Ana Costa", role: "Paciente", points: 1650, veggies: 23 },
              { name: "Carlos Lima", role: "Paciente", points: 1420, veggies: 20 }
            ].map((user, index) => (
              <Card key={user.name}>
                <CardContent className="pt-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="font-bold w-6 text-center">{index + 4}º</span>
                      <Avatar>
                        <AvatarImage src="/placeholder.svg" />
                        <AvatarFallback>{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold">{user.name}</p>
                        <p className="text-sm text-muted-foreground">{user.role}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-lg">{user.points.toLocaleString()} pts</p>
                      <p className="text-sm text-muted-foreground">{user.veggies}/35 vegetais</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Other Competitions */}
        <section className="space-y-4">
          <h3 className="text-xl font-semibold text-foreground">
            Outras Competições
          </h3>

          <div className="grid gap-4">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Target className="w-5 h-5 text-dietcats-blue" />
                  Desafio Hidratação
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">
                  Beba pelo menos 2L de água por dia
                </p>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm">12 participantes</span>
                  <Badge variant="outline">Termina em 3 dias</Badge>
                </div>
                <Button className="w-full" variant="outline">
                  Participar
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Trophy className="w-5 h-5 text-dietcats-purple" />
                  Café da Manhã Perfeito
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">
                  Não pule o café da manhã por 14 dias
                </p>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm">8 participantes</span>
                  <Badge variant="outline">Inicia amanhã</Badge>
                </div>
                <Button className="w-full" variant="outline">
                  Participar
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Competitions;
