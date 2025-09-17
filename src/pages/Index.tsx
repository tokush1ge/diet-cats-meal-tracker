import { DietCatsLogo } from "@/components/DietCatsLogo";
import { MealCard } from "@/components/MealCard";
import { StatsCard } from "@/components/StatsCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Trophy, Target, Flame } from "lucide-react";

const Index = () => {
  const handleAddFood = () => {
    // TODO: Implement food addition modal
    console.log("Add food clicked");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-hero border-b p-4">
        <div className="container mx-auto flex items-center justify-between">
          <DietCatsLogo size="md" />
          <div className="flex items-center gap-4">
            <Badge className="bg-dietcats-green text-white">
              <Trophy className="w-3 h-3 mr-1" />
              Streak: 7 dias
            </Badge>
            <Button variant="outline" className="text-white border-white hover:bg-white/20">
              <Users className="w-4 h-4 mr-2" />
              Competições
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 space-y-6">
        {/* Welcome Section */}
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold text-foreground">
            Olá, Paulo! 👋
          </h2>
          <p className="text-muted-foreground">
            Vamos manter sua dieta em dia hoje?
          </p>
        </div>

        {/* Daily Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <StatsCard
            title="Calorias"
            value={1450}
            target={2000}
            unit="kcal"
            color="orange"
            icon="🔥"
          />
          <StatsCard
            title="Proteínas"
            value={85}
            target={150}
            unit="g"
            color="green"
            icon="💪"
          />
          <StatsCard
            title="Carboidratos"
            value={180}
            target={250}
            unit="g"
            color="blue"
            icon="🌾"
          />
          <StatsCard
            title="Gorduras"
            value={45}
            target={65}
            unit="g"
            color="purple"
            icon="🥑"
          />
        </div>

        {/* Today's Meals */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold text-foreground">
              Refeições de Hoje
            </h3>
            <Badge variant="outline" className="gap-1">
              <Target className="w-3 h-3" />
              3/4 refeições
            </Badge>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <MealCard
              mealType="breakfast"
              time="08:30"
              foods={["Aveia com frutas", "Café com leite"]}
              calories={450}
              onAddFood={handleAddFood}
            />
            <MealCard
              mealType="lunch"
              time="12:45"
              foods={["Arroz integral", "Peito de frango grelhado", "Salada verde"]}
              calories={650}
              onAddFood={handleAddFood}
            />
            <MealCard
              mealType="snack"
              time="16:00"
              foods={["Banana", "Castanhas"]}
              calories={200}
              onAddFood={handleAddFood}
            />
            <MealCard
              mealType="dinner"
              onAddFood={handleAddFood}
            />
          </div>
        </section>

        {/* Competition Section */}
        <Card className="bg-gradient-primary text-white">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="w-5 h-5" />
              Competição da Semana
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
                  <p className="text-2xl font-bold">2º lugar</p>
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
      </main>
    </div>
  );
};

export default Index;
