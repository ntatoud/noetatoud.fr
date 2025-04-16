import { Brush } from 'lucide-react';
import React from 'react';

import { themes, useTheme } from '#presentation/components/theme-provider';
import { Badge } from '#presentation/components/ui/badge';
import { Button } from '#presentation/components/ui/button';
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '#presentation/components/ui/command';

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  return (
    <>
      <div className="p-4">
        <Button
          size="icon"
          variant="ghost"
          onClick={() => setOpen(true)}
          className="rounded-full border border-accent"
        >
          <span className="sr-only">Look at themes</span>
          <Brush aria-hidden />
        </Button>
      </div>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>Theme not found.</CommandEmpty>
          <CommandGroup heading="Main Themes">
            {themes.map(({ label, value, Icon }) => {
              return (
                <CommandItem
                  key={`theme-${value}`}
                  onSelect={() => {
                    setTheme(value);
                    setOpen(false);
                  }}
                >
                  <Icon className="size-5" aria-hidden />
                  <span>{label}</span>
                  {theme === value && (
                    <Badge className="ml-auto uppercase">Current</Badge>
                  )}
                </CommandItem>
              );
            })}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
