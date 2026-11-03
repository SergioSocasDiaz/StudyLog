import image from '../assets/Logo1.png'
export function Footer(){
    return(
        <footer className="w-full bg-surface border-border border flex  gap-3 p-4">
            <div className="flex items-center gap-2">
                <img className="w-10 h-10" src={image} alt="Logo"></img>
                <h1 className="text-xl font-bold">StudyLog</h1>
                <span className="text-sm text-muted-foreground">© 2026 StudyLog. Todos los derechos reservados.</span>
            </div>
            <div>
                {//TODO: PONER ALGO?)
    }
            </div>
        </footer>
    )
}