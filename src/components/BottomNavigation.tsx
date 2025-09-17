import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { 
  Home, 
  Trophy, 
  Users, 
  Settings,
  Target
} from "lucide-react";

interface NavItem {
  icon: any;
  label: string;
  path: string;
}

const navItems: NavItem[] = [
  {
    icon: Home,
    label: "Refeições",
    path: "/meals"
  },
  {
    icon: Target,
    label: "Desafios", 
    path: "/challenges"
  },
  {
    icon: Trophy,
    label: "Competições",
    path: "/competitions"
  },
  {
    icon: Settings,
    label: "Config",
    path: "/settings"
  }
];

export const BottomNavigation = () => {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-background border-t border-border z-50">
      <div className="flex items-center justify-around py-2 px-4">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex flex-col items-center gap-1 p-2 rounded-lg transition-colors min-w-0 flex-1",
                isActive 
                  ? "text-dietcats-orange bg-dietcats-orange/10" 
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <Icon 
                className={cn(
                  "w-5 h-5",
                  isActive && "text-dietcats-orange"
                )} 
              />
              <span className={cn(
                "text-xs font-medium truncate",
                isActive && "text-dietcats-orange"
              )}>
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};