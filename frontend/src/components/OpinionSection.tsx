import {OpinionCard} from "./basic/OpinionCard.tsx";
export function OpinionSection(){
    return(
        <div className="flex flex-col justify-center items-center p-4 gap-6">
            <div className="flex flex-col justify-center items-center gap-1 text-center">
                <span className="text-primary font-bold">Comunidad</span>
                <h1 className="text-6xl font-bold">Probado ante semanas de examenes</h1>
            </div>    
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 place-items-center items-center p-2 sm max-w-5/6">
                <OpinionCard/>
                <OpinionCard/>
                <div className="lg:block md:hidden place-items-center">
                    <OpinionCard/>
                </div>
                {//TODO: EN RESPONSIVE SUSTITUIRLO POR UN SWIP DE OPINIONES, PARA QUE NO SE VEA TAN VACIO
                }
            </div>
        </div>
    )
}