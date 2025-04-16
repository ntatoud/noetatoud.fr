import { ArrowUpRight } from 'lucide-react';

import { Button } from '#presentation/components/ui/button';

export function Socials() {
  return (
    <div className="flex w-full justify-end">
      <Button variant="link" className="lowercase" asChild>
        <a
          href="https://www.linkedin.com/in/noetatoud/"
          target="_blank"
          rel="noopener noreferrer"
        >
          linkedin
          <ArrowUpRight />
        </a>
      </Button>
      <Button variant="link" className="lowercase" asChild>
        <a
          href="https://twitter.com/nowaytatoud"
          target="_blank"
          rel="noopener noreferrer"
        >
          twitter
          <ArrowUpRight />
        </a>
      </Button>
      <Button variant="link" className="lowercase" asChild>
        <a
          href="https://github.com/ntatoud"
          target="_blank"
          rel="noopener noreferrer"
        >
          github
          <ArrowUpRight />
        </a>
      </Button>
    </div>
  );
}
