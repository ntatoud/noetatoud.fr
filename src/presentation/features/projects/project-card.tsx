import { ArrowRight } from 'lucide-react';

import type { Project } from '#domain/projects/schemas';
import { Badge } from '#presentation/components/ui/badge';
import { Button } from '#presentation/components/ui/button';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '#presentation/components/ui/card';

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
