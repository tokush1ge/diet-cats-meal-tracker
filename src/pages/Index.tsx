import { useNavigate } from "react-router-dom";
import { DietCatsLogo } from "@/components/DietCatsLogo";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Trophy, 
  Target, 
  Users, 
  ArrowRight,
  Calendar,
  Award
} from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="bg-gradient-hero border-b p-4">
        <div className="container mx-auto flex items-center justify-between">
          <DietCatsLogo size="md" />
          <Badge className="bg-dietcats-green text-white">
            <Trophy className="w-3 h-3 mr-1" />
            Streak: 7 dias
          </Badge>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 space-y-6">
        {/* Welcome Section */}
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold text-foreground">
            Olá, Paulo! 👋
          </h2>
          <p className="text-muted-foreground">
            Bem-vindo ao DietCats! Acompanhe sua jornada nutricional.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 gap-4">
          <Card className="bg-dietcats-orange/10 border-dietcats-orange/20">
            <CardContent className="pt-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Hoje</p>
                  <p className="text-2xl font-bold text-dietcats-orange">3/4</p>
                  <p className="text-sm text-muted-foreground">Refeições</p>
                </div>
                <Target className="w-8 h-8 text-dietcats-orange" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-dietcats-green/10 border-dietcats-green/20">
            <CardContent className="pt-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Ranking</p>
                  <p className="text-2xl font-bold text-dietcats-green">2º</p>
                  <p className="text-sm text-muted-foreground">Posição</p>
                </div>
                <Trophy className="w-8 h-8 text-dietcats-green" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid gap-4">
          <Card 
            className="cursor-pointer hover:shadow-md transition-shadow"
            onClick={() => navigate('/meals')}
          >
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-dietcats-orange/20 rounded-lg flex items-center justify-center">
                    🍽️
                  </div>
                  <span>Refeições de Hoje</span>
                </div>
                <ArrowRight className="w-5 h-5 text-muted-foreground" />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Registre suas refeições e acompanhe suas metas nutricionais
              </p>
            </CardContent>
          </Card>

          <Card 
            className="cursor-pointer hover:shadow-md transition-shadow"
            onClick={() => navigate('/challenges')}
          >
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-dietcats-blue/20 rounded-lg flex items-center justify-center">
                    🎯
                  </div>
                  <span>Desafios</span>
                </div>
                <ArrowRight className="w-5 h-5 text-muted-foreground" />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Complete desafios diários e semanais para ganhar pontos
              </p>
            </CardContent>
          </Card>

          <Card 
            className="cursor-pointer hover:shadow-md transition-shadow"
            onClick={() => navigate('/competitions')}
          >
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-dietcats-green/20 rounded-lg flex items-center justify-center">
                    🏆
                  </div>
                  <span>Competições</span>
                </div>
                <ArrowRight className="w-5 h-5 text-muted-foreground" />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Dispute com amigos e outros usuários em desafios semanais
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Featured Competition */}
        <Card className="bg-gradient-primary text-white">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="w-5 h-5" />
              Competição Ativa
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <p className="text-white/90">
                "Desafio Verde" - Consuma 5 porções de vegetais por dia
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-white/80">Sua posição:</p>
                  <p className="text-xl font-bold">2º lugar</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-white/80">Participantes:</p>
                  <p className="text-lg font-semibold">48 amigos</p>
                </div>
              </div>
              <Button 
                variant="secondary" 
                className="w-full"
                onClick={() => navigate('/competitions')}
              >
                Ver Detalhes
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Index;
