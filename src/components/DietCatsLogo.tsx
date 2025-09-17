interface DietCatsLogoProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export const DietCatsLogo = ({ size = "md", className = "" }: DietCatsLogoProps) => {
  const sizeClasses = {
    sm: "text-2xl",
    md: "text-4xl",
    lg: "text-6xl"
  };

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative">
        <div className={`${sizeClasses[size]} animate-bounce-gentle`}>
          🐱
        </div>
        <div className="absolute -top-1 -right-1 text-xs">🍽️</div>
      </div>
      <h1 className={`font-bold bg-gradient-primary bg-clip-text text-transparent ${sizeClasses[size]}`}>
        DietCats
      </h1>
    </div>
  );
};