import { Stars } from "./Stars.tsx";
import { UserCard } from "./UserCard.tsx";

type SpecCardTypes= {
    children?: React.ReactNode;
}

export function OpinionCard({children}:SpecCardTypes){
    return(
        <div className="w-full bg-surface border-border border shadow-md rounded-lg p-5 flex flex-col justify-around gap-3 text-left">
            <Stars rating={5}/>
            <h1 className="text-lg font-bold">Excelente aplicación para el seguimiento de hábitos de estudio</h1>
            <p>He estado usando StudyLog durante varias semanas y ha sido una herramienta invaluable para mantenerme enfocado en mis objetivos de estudio.</p>
            <UserCard></UserCard>
        </div>
    )
}