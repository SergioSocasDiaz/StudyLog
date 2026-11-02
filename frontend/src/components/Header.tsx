import img from "../assets/Logo1.png"
import { BasicAnchor } from "./basic/BasicAnchor.tsx"

export function Header(){
    return(
        <header className="flex justify-between items-center p-3 bg-surface border-b border-border text-foreground">
            <div className="flex flex-row gap-2 items-center">
                <img src={img} alt="Logo" className="h-10 w-10"></img>
                <h1 className="font-display text-2xl font-normal font-semibold">Study Log</h1>
            </div>

            <nav className="flex gap-5 justify-center items-center">
                <ul className="flex gap-5 text-muted-foreground">
                    {/*Hacer componente Navigation Links? */}
                    <li className="hover:text-foreground hover:-translate-y-0.75 hover:underline underline-offset-4 transition-all duration-600 cursor-pointer">Características</li>
                    <li className="hover:text-foreground hover:-translate-y-0.75 hover:underline underline-offset-4 transition-all duration-600 cursor-pointer">Metodología</li>
                    <li className="hover:text-foreground hover:-translate-y-0.75 hover:underline underline-offset-4 transition-all duration-600 cursor-pointer">Opiniones</li>
                </ul>
            </nav>
            <BasicAnchor
                className="bg-primary text-primary-foreground hover:bg-surface/90 hover:text-foreground hover:outline-primary hover:outline-solid transition-all duration-500  px-4 py-2 rounded-lg cursor-pointer"
                path="/register"
            >
                Comenzar ahora
            </BasicAnchor>
        </header>
    )
}