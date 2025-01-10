import {
    Card,
    CardHeader,
    CardTitle,
    CardContent
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
// TODO: Update skills
const skills = ["TypeScript", "JavaScript", "Python", "SQL", "HTML", "CSS", "TailwindCSS", "NextJS", "ReactJS", "ReactNative", "Expo", "NodeJS", "ExpressJS", "MongoDB", "PostgreSQL", "Supabase", "Prisma", "Git", "Docker", "Linux", "Windows", "MacOS"]

export const Skills = () => {
    return (
        <Card className="mt-6">
            <CardHeader>
                <CardTitle>Skills</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex flex-wrap gap-2">
                    {skills.map((s, i) => (
                        <Badge key={i} variant="secondary">{s}</Badge>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}