import { ArrowUpRight } from 'lucide-react';

import { SOCIALS } from '@/domain/socials';
import { Button } from '@/presentation/components/ui/button';

export function Socials() {
  return SOCIALS.map(({ label, link }) => (
    <Button
      key={`social-${label}`}
      variant="link"
      className="lowercase"
      asChild
    >
      <a href={link} target="_blank" rel="noopener noreferrer">
        {label}
        <ArrowUpRight />
      </a>
    </Button>
  ));
}
