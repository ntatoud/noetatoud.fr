import { ArrowRight } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import type { Project } from '@/content/projects/schemas';

export function ProjectCard({ dates, description, tags, title }: Project) {
  return (
    <Card className="bg-background/40">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>
          {dates.from.toUTCString()} – {dates.to.toUTCString()}
        </CardDescription>
        <div className="flex gap-1">
          {tags.map((tag) => (
            <Badge variant="secondary" key={tag}>
              {tag}
            </Badge>
          ))}
        </div>
      </CardHeader>

      <CardContent>{description}</CardContent>

      <CardFooter>
        <CardAction>
          <Button>
            More details
            <ArrowRight />
          </Button>
        </CardAction>
      </CardFooter>

      {/* TODO: Add privacy indicator */}
    </Card>
  );
}
