import { motion } from 'motion/react';

import { ThemeSwitcher } from '@/presentation/components/theme-switcher';
import { Button } from '@/presentation/components/ui/button';
import { Link } from '@/presentation/contracts/components/link';
import { useLocation } from '@/presentation/contracts/hooks/use-location';
import { cn } from '@/shared/lib/utils';

export type NavItem = { name: string; path: string; disabled?: boolean };

const navItems = [
  { name: 'home', path: '/' },
  { name: 'projects', path: '/projects' },
] as Array<NavItem>;

export function Header() {
  const location = useLocation();

  return (
    <header className="w-full">
      <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <nav className="flex items-center gap-2">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Button
                key={item.path}
                variant="link"
                className={cn(
                  'relative px-3 py-2 text-sm transition-colors hover:no-underline',
                  isActive
                    ? 'text-primary font-semibold'
                    : 'text-muted-foreground',
                  item.disabled && 'cursor-not-allowed opacity-50'
                )}
                disabled={item.disabled}
                asChild
              >
                <Link to={item.disabled ? '' : item.path}>
                  {item.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavItem"
                      className="bg-primary absolute bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full"
                      transition={{
                        type: 'spring',
                        stiffness: 350,
                        damping: 25,
                        mass: 1.2,
                        duration: 0.8,
                      }}
                    />
                  )}
                </Link>
              </Button>
            );
          })}
        </nav>
        <ThemeSwitcher />
      </div>
    </header>
  );
}
