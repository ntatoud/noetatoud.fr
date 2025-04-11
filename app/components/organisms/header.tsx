import { motion } from 'motion/react';
import { Link, useLocation } from 'react-router';
import { cn } from '@/lib/utils';
import { ThemeSwitcher } from '@/components/theme-switcher';
import { Button } from '@/components/ui/button';

const navItems = [
  { name: 'home', path: '/' },
  { name: 'projects', path: '/projects', disabled: true },
];

export function Navbar() {
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
                      className="absolute bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-primary"
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
