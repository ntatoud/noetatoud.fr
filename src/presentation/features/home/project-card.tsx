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
import { useImage } from '@/presentation/hooks/use-image';

const PROJECT_DATES_FORMAT = 'MMMM yyyy';
export function ProjectCard(project: Project) {
  const {
    dates: rawDates,
    description,
    tags,
    title,
    image,
    slug,
  } = zProject().parse(project);

  const dates = {
    from: format(rawDates.from, PROJECT_DATES_FORMAT),
    to: format(rawDates.to, PROJECT_DATES_FORMAT),
  };

  const imageSrc = useImage({ src: image });
  return (
    <Card className="bg-background/40 group relative isolate overflow-hidden pt-0">
      <div className="relative w-full">
        <img
          src={imageSrc}
          alt={`${title} preview`}
          className="aspect-[16/9] w-full object-cover"
        />
        <div className="from-background/60 invisible absolute inset-0 bg-gradient-to-t to-transparent group-hover:visible" />
      </div>
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

      <CardFooter className="mt-auto">
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
