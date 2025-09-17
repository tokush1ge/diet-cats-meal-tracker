import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, Camera, Plus } from "lucide-react";

interface MealCardProps {
  mealType: "breakfast" | "lunch" | "dinner" | "snack";
  time?: string;
  foods?: string[];
  calories?: number;
  onAddFood: () => void;
}

export const MealCard = ({ mealType, time, foods = [], calories, onAddFood }: MealCardProps) => {
  const mealEmojis = {
    breakfast: "🥞",
    lunch: "🥗",
    dinner: "🍽️",
    snack: "🍎"
  };

  const mealNames = {
    breakfast: "Café da Manhã",
    lunch: "Almoço", 
    dinner: "Jantar",
    snack: "Lanche"
  };

  return (
    <Card className="shadow-card hover:shadow-glow transition-all duration-300">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">{mealEmojis[mealType]}</span>
            <h3 className="font-semibold text-foreground">{mealNames[mealType]}</h3>
          </div>
          {time && (
            <Badge variant="secondary" className="gap-1">
              <Clock className="w-3 h-3" />
              {time}
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        {foods.length > 0 ? (
          <div className="space-y-2">
            {foods.map((food, index) => (
              <div key={index} className="flex items-center gap-2 p-2 bg-secondary rounded-lg">
                <span className="text-sm text-foreground">{food}</span>
              </div>
            ))}
            {calories && (
              <Badge className="bg-dietcats-green text-white">
                {calories} kcal
              </Badge>
            )}
          </div>
        ) : (
          <div className="text-center py-6 text-muted-foreground">
            <p className="text-sm mb-3">Nenhum alimento registrado</p>
          </div>
        )}
        
        <div className="flex gap-2">
          <Button 
            onClick={onAddFood}
            className="flex-1 bg-gradient-primary hover:opacity-90 text-white"
            size="sm"
          >
            <Plus className="w-4 h-4 mr-1" />
            Adicionar Alimento
          </Button>
          <Button variant="outline" size="sm">
            <Camera className="w-4 h-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};