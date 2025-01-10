'use client'
import {
    Card,
    CardTitle,
    CardHeader,
    CardContent
} from "@/components/ui/card";
import ThemeSwitcher from "@/components/ui/ThemeSwitcher";
import useMediaQuery from "@/hook/useMediaQuery";


export const AboutMe = () => {
    const isDesktopOrLaptop  = useMediaQuery("(min-width: 1224px)");
    return (    

    <Card className="mb-6">
        <CardHeader className="flex flex-row justify-between items-baseline">
            <CardTitle>À propos</CardTitle>
            {isDesktopOrLaptop && <ThemeSwitcher />}
        </CardHeader>
        <CardContent>
            <p className="text-muted-foreground">
                {/* Write 1-2 sentences about yourself */}
                Développeur passionné en dernière année d’alternance, je me spécialise dans le développement mobile, en créant des applications intuitives et performantes. En parallèle, j’exerce en freelance, ce qui me permet de travailler sur des projets variés et stimulants. Toujours en quête d’innovation, je combine créativité et technique pour relever de nouveaux défis. 🚀
            </p>
        </CardContent>
    </Card>
    )
}