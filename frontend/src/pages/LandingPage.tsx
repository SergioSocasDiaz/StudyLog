import { Footer } from "../components/Footer.tsx"
import {Header} from "../components/Header"
import { Hero } from "../components/Hero"
import { ImageDemo } from "../components/ImageDemo.tsx"
import { OpinionSection } from "../components/OpinionSection.tsx"
import { SpecSection } from "../components/SpecSection.tsx"

export function LandingPage(){
    return(
        <>
            <Header/>
            <main className="bg-background text-foreground flex flex-col justify-around gap-6 items-center">
                <Hero/>
                <ImageDemo/>
                <hr className="h-1 w-5/6 text-border"></hr>
                <SpecSection/>
                <hr className="h-1 w-5/6 text-border"></hr>
                <OpinionSection/>
                <Footer/>
            </main>
        </>
    )
}


//TODO: Añadir animaciones de scroll y hacer funcionar tanto los enlaces del header como los botones