import {Header} from "../components/Header"
import { Hero } from "../components/Hero"
import { ImageDemo } from "../components/ImageDemo"

export function LandingPage(){
    return(
        <>
            <Header/>
            <main className="bg-background text-foreground flex flex-col justify-around gap-4 items-center">
                <Hero/>
                <ImageDemo/>
            </main>
        </>
    )
}