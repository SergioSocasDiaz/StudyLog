import { BasicAnchor } from "./basic/BasicAnchor.tsx"

export function Hero(){
    return(
        <div className="flex flex-col justify-center items-center p-4 gap-6 text-center max-w-5/6">
            <div className="bg-surface px-3 py-2 rounded-3xl flex justify-center items-center gap-2 max-w-1/2">
                <div className="bg-accent max-w-2 w-full h-2 rounded-full animate-ping"></div>
                <span>Diseñado para ayudarte a alcanzar tus objetivos</span>
            </div>
            <h1 className="text-6xl font-bold">Transforma tus horas de estudio en <span className="text-accent">rendimiento</span> medible.</h1>

            <p className="text-muted-foreground max-w-5/6">Sin distracciones ni interrupciones, StudyLog ofrece telemetria clave de tus asignaturas, control de entregas y cuotas semanales y visualización
                de racha para que puedas mantener tu motivación al máximo. Con StudyLog, cada hora de estudio cuenta y cada logro es medible.
            </p>

            <div className="flex space-x-4">
                {/*Componente igual en header*/}
                <BasicAnchor
                    className="bg-primary p-3 rounded-lg cursor-pointer text-primary-foreground hover:bg-surface/90 hover:text-foreground hover:outline-primary hover:outline-solid transition-all duration-500 cursor-pointer"
                    path="/register"
                >
                    + Crear cuenta gratuita
                </BasicAnchor>
                <BasicAnchor
                    className="flex gap-2 bg-primary p-3 rounded-lg cursor-pointer text-primary-foreground hover:bg-surface/90 hover:text-foreground hover:outline-primary hover:outline-solid transition-all duration-500 cursor-pointer"
                    path="/demo" //TODO: Revisar esto
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-circle-play">
	                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
	                <path d="M9 9.003a1 1 0 0 1 1.517 -.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997a1 1 0 0 1 -1.517 -.86v-5.993" />
	                <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                    </svg>Ver demo interactiva
                </BasicAnchor>
            </div>

            <hr className="w-full h-1 text-border rounded-4xl"></hr>

            <footer className="flex justify-around w-full">
                <div className="text-subject-1 flex flex-col font-bold ">
                    <span className="text-2xl">+18.5h</span>
                    <span>Media semanal auditada</span>
                </div>

                <div className="text-subject-2 flex flex-col font-bold ">
                    <span className="text-2xl">8 Días</span>
                    <span>Racha promedio activa</span>
                </div>

                <div className="text-subject-3 flex flex-col font-bold">
                    <span className="text-2xl">94.2%</span>
                    <span>Cumplimiento de objetivos</span>
                </div>

                <div className="text-subject-5 flex flex-col font-bold ">
                    <span className="text-2xl">0% Ruido</span>
                    <span>Enfoque 100%</span>
                </div>
            </footer>
        </div>
    )
}