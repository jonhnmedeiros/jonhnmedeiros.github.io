import { ScrollArea } from "./ui/scroll-area";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./ui/card";
import { ScrollBar } from "./ui/scroll-area";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  codeLink: string;
  liveLink: string;
}

export function ProjectCard(projectCardProps: ProjectCardProps) {
  const hasLiveLink =
    projectCardProps.liveLink && projectCardProps.liveLink.trim() !== "";

  return (
    <Card className="w-80 flex-shrink-0 hover:shadow-xl transition-all duration-300 hover:scale-105 group">
      <CardHeader>
        <CardTitle className="group-hover:text-primary transition-colors">
          {projectCardProps.title}
        </CardTitle>
        <CardDescription className="text-wrap h-10 line-clamp-2">
          {projectCardProps.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="overflow-hidden rounded-lg">
          <img
            src={projectCardProps.image}
            alt={`${projectCardProps.title} preview`}
            className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-300"
            loading="lazy"
          />
        </div>
        <ScrollArea className="w-full whitespace-nowrap rounded-md border">
          <div className="flex w-max space-x-2 p-2 mb-1">
            {projectCardProps.tags.map((tag, index) => {
              return (
                <Badge
                  key={index}
                  variant="secondary"
                  className="hover:bg-primary/20 transition-colors"
                >
                  {tag}
                </Badge>
              );
            })}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </CardContent>
      <CardFooter className="gap-2">
        <Button
          className="w-full hover:shadow-md transition-all"
          variant="outline"
          onClick={(e) => {
            e.preventDefault();
            window.open(
              projectCardProps.codeLink,
              "_blank",
              "noopener,noreferrer",
            );
          }}
        >
          Code
        </Button>
        {hasLiveLink && (
          <Button
            className="w-full hover:shadow-md transition-all"
            onClick={(e) => {
              e.preventDefault();
              window.open(
                projectCardProps.liveLink,
                "_blank",
                "noopener,noreferrer",
              );
            }}
          >
            Live
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
