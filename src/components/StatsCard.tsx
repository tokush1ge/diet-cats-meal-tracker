import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface StatsCardProps {
  title: string;
  value: number;
  target: number;
  unit: string;
  color: "orange" | "green" | "blue" | "purple";
  icon: string;
}

export const StatsCard = ({ title, value, target, unit, color, icon }: StatsCardProps) => {
  const percentage = Math.min((value / target) * 100, 100);
  
  const colorClasses = {
    orange: "text-dietcats-orange",
    green: "text-dietcats-green", 
    blue: "text-dietcats-blue",
    purple: "text-dietcats-purple"
  };

  return (
    <Card className="shadow-card">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium flex items-center gap-2">
          <span className="text-lg">{icon}</span>
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="space-y-1">
          <div className="flex justify-between items-end">
            <span className={`text-2xl font-bold ${colorClasses[color]}`}>
              {value}
            </span>
            <span className="text-sm text-muted-foreground">
              / {target} {unit}
            </span>
          </div>
          <Progress 
            value={percentage} 
            className="h-2"
          />
        </div>
        <p className="text-xs text-muted-foreground">
          {percentage.toFixed(0)}% da meta diária
        </p>
      </CardContent>
    </Card>
  );
};