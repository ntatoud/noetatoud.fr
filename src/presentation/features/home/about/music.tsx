import { Play, SkipBack, SkipForward, Volume2 } from 'lucide-react';

import { Button } from '@/presentation/components/ui/button';
import { CardContent } from '@/presentation/components/ui/card';
import { Progress } from '@/presentation/components/ui/progress';
import { BentoCard } from '@/presentation/features/home/about/bento-card';

export function MusicCard() {
  return (
    <BentoCard name="music">
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h3 className="text-lg font-semibold">Currently Playing</h3>
            <p className="text-muted-foreground text-sm">Your favorite track</p>
          </div>
          <Button variant="ghost" size="icon">
            <Volume2 className="h-5 w-5" />
          </Button>
        </div>

        <div className="flex items-center justify-center space-x-4">
          <Button variant="ghost" size="icon">
            <SkipBack className="h-5 w-5" />
          </Button>
          <Button size="icon" className="h-12 w-12">
            <Play className="h-6 w-6" />
          </Button>
          <Button variant="ghost" size="icon">
            <SkipForward className="h-5 w-5" />
          </Button>
        </div>

        <div className="space-y-2">
          <Progress value={33} className="h-1" />
          <div className="text-muted-foreground flex justify-between text-xs">
            <span>1:23</span>
            <span>3:45</span>
          </div>
        </div>
      </CardContent>
    </BentoCard>
  );
}
