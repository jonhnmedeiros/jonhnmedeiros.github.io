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
    return (
        <Card className="w-80">
            <CardHeader>
                <CardTitle>{projectCardProps.title}</CardTitle>
                <CardDescription>{projectCardProps.description}</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
                <img src="/public/projects/plann_er.jpeg" alt="Project" className="w-full h-40 object-cover" />
                <ScrollArea className="w-full whitespace-nowrap rounded-md border">
                    <div className="flex w-max space-x-2 p-2">
                        {projectCardProps.tags.map(tag => {
                            return <Badge variant="outline">{tag}</Badge>
                        })}
                    </div>
                    <ScrollBar orientation="horizontal" />
                </ScrollArea>
            </CardContent>
            <CardFooter className="gap-2">
                <Button className="w-full" onClick={(e) => {
                    e.preventDefault();
                    window.location.href = projectCardProps.codeLink;
                }}>Code</Button>
                <Button className="w-full">Live</Button>
                {/* <Link to='https://react.semantic-ui.com/'>
                    <button type="button" className="btn btn-info">Button</button>
                </Link> */}
            </CardFooter>
        </Card>
    )
}