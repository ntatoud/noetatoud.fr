import { Button } from "@/components/ui/button";

import type { Route } from "./+types/home";
import { ThemeSwitcher } from "@/components/theme-switcher";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Noé Tatoud" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-svh bg-background">
      <Button>Click me</Button>
      <ThemeSwitcher />
    </div>
  );
}
