import { DietCatsLogo } from "@/components/DietCatsLogo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { 
  User, 
  Bell, 
  Shield, 
  Smartphone, 
  HelpCircle, 
  LogOut,
  ChevronRight,
  Target,
  Calendar,
  Scale
} from "lucide-react";

const Settings = () => {
  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="bg-gradient-hero border-b p-4">
        <div className="container mx-auto flex items-center justify-center">
          <DietCatsLogo size="md" />
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold text-foreground">
            Configurações ⚙️
          </h2>
        </div>

        {/* Profile Section */}
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <Avatar className="w-16 h-16">
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback>PD</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <h3 className="text-xl font-semibold">Paulo Dietrich</h3>
                <p className="text-muted-foreground">paulo@email.com</p>
                <p className="text-sm text-dietcats-green">Plano Premium ✨</p>
              </div>
              <Button variant="outline" size="sm">
                Editar
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Goals Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="w-5 h-5" />
              Metas Diárias
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Scale className="w-4 h-4 text-muted-foreground" />
                <Label>Calorias</Label>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">2.000 kcal</span>
                <ChevronRight className="w-4 h-4 text-muted-foreground" />
              </div>
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Calendar className="w-4 h-4 text-muted-foreground" />
                <Label>Refeições por dia</Label>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">4 refeições</span>
                <ChevronRight className="w-4 h-4 text-muted-foreground" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Notifications Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="w-5 h-5" />
              Notificações
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="meal-reminders">Lembretes de refeição</Label>
              <Switch id="meal-reminders" defaultChecked />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <Label htmlFor="competition-updates">Atualizações de competições</Label>
              <Switch id="competition-updates" defaultChecked />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <Label htmlFor="challenge-notifications">Novos desafios</Label>
              <Switch id="challenge-notifications" />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <Label htmlFor="weekly-reports">Relatórios semanais</Label>
              <Switch id="weekly-reports" defaultChecked />
            </div>
          </CardContent>
        </Card>

        {/* Account Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="w-5 h-5" />
              Conta
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button variant="ghost" className="w-full justify-between">
              <div className="flex items-center gap-3">
                <Shield className="w-4 h-4" />
                <span>Privacidade e Segurança</span>
              </div>
              <ChevronRight className="w-4 h-4" />
            </Button>
            <Separator />
            <Button variant="ghost" className="w-full justify-between">
              <div className="flex items-center gap-3">
                <Smartphone className="w-4 h-4" />
                <span>Dispositivos Conectados</span>
              </div>
              <ChevronRight className="w-4 h-4" />
            </Button>
            <Separator />
            <Button variant="ghost" className="w-full justify-between">
              <div className="flex items-center gap-3">
                <HelpCircle className="w-4 h-4" />
                <span>Ajuda e Suporte</span>
              </div>
              <ChevronRight className="w-4 h-4" />
            </Button>
          </CardContent>
        </Card>

        {/* Professional Section */}
        <Card>
          <CardHeader>
            <CardTitle>Acompanhamento Profissional</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-4">
              <Avatar>
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback>MC</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <p className="font-semibold">Dra. Maria Clara</p>
                <p className="text-sm text-muted-foreground">Nutricionista</p>
              </div>
              <Button variant="outline" size="sm">
                Contato
              </Button>
            </div>
            <Button variant="outline" className="w-full">
              Trocar de Nutricionista
            </Button>
          </CardContent>
        </Card>

        {/* Logout */}
        <Card>
          <CardContent className="pt-6">
            <Button variant="destructive" className="w-full" size="lg">
              <LogOut className="w-4 h-4 mr-2" />
              Sair da Conta
            </Button>
          </CardContent>
        </Card>

        {/* App Version */}
        <div className="text-center text-sm text-muted-foreground">
          DietCats v1.0.0
        </div>
      </main>
    </div>
  );
};

export default Settings;