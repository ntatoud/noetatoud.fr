import { motion } from 'motion/react';

import { ThemeSwitcher } from '#presentation/components/theme-switcher';
import { Button } from '#presentation/components/ui/button';
import { Link } from '#presentation/contracts/components/link';
import { useLocation } from '#presentation/contracts/hooks/use-location';
import { cn } from '#shared/lib/utils';

const navItems = [
  { name: 'home', path: '/' },
  { name: 'projects', path: '/projects' },
] as Array<{ name: string; path: string; disabled?: boolean }>;

export function Header() {
  const location = useLocation();

  return (
    <header className="fixed top-0 z-50 w-full">
      <div className="container mx-auto flex h-16 items-center justify-end gap-4 px-4">
        <nav className="flex items-center gap-2">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Button
                key={item.path}
                variant="link"
                className={cn(
                  'relative px-3 py-2 text-sm transition-colors hover:no-underline',
                  isActive ? 'font-bold' : 'font-normal',
                  item.disabled ? 'cursor-not-allowed' : ''
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
