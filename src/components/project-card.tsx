import { ScrollArea } from "./ui/scroll-area";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./ui/card";
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
    let livelink;
    if (projectCardProps.liveLink) {
        livelink = <Button className="w-full" onClick={(e) => {
            e.preventDefault();
            window.open(projectCardProps.liveLink, "_blank")
        }}>Live</Button>
    }

    return (
        <Card className="w-80">
            <CardHeader>
                <CardTitle>{projectCardProps.title}</CardTitle>
                <CardDescription className="text-wrap h-10">{projectCardProps.description}</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
                <img src={projectCardProps.image} alt="Project" className="w-full h-40 object-cover" />
                <ScrollArea className="w-full whitespace-nowrap rounded-md border">
                    <div className="flex w-max space-x-2 p-2 mb-1">
                        {projectCardProps.tags.map(tag => {
                            return <Badge variant="secondary">{tag}</Badge>
                        })}
                    </div>
                    <ScrollBar orientation="horizontal" />
                </ScrollArea>
            </CardContent>
            <CardFooter className="gap-2">
                <Button className="w-full" onClick={(e) => {
                    e.preventDefault();
                    window.open(projectCardProps.codeLink, "_blank")
                }}>Code</Button>


                {livelink}

            </CardFooter>
        </Card>
    )
}