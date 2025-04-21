import { format } from 'date-fns';
import { ArrowRight } from 'lucide-react';

import { type Project, zProject } from '@/domain/projects/schemas';
import { Badge } from '@/presentation/components/ui/badge';
import { Button } from '@/presentation/components/ui/button';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/presentation/components/ui/card';
import { Link } from '@/presentation/contracts/components/link';

const PROJECT_DATES_FORMAT = 'MMMM yyyy';
export function ProjectCard(project: Project) {
  const {
    dates: rawDates,
    description,
    tags,
    title,
    slug,
  } = zProject().parse(project);

  const dates = {
    from: format(rawDates.from, PROJECT_DATES_FORMAT),
    to: format(rawDates.to, PROJECT_DATES_FORMAT),
  };

  return (
    <Card className="bg-background/40 group relative isolate">
      <CardHeader>
        <CardTitle>
          <Link to={`/projects/${slug}`}>
            {title}
            <span className="absolute inset-0 z-10" />
          </Link>
        </CardTitle>
        <CardDescription>
          {dates.from} – {dates.to}
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
          <Button className="group-hover:-translate-y-0.5">
            More details
            <ArrowRight />
          </Button>
        </CardAction>
      </CardFooter>

      {/* TODO: Add privacy indicator */}
    </Card>
  );
}
