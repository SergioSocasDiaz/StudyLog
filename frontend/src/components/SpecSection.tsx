import { SpecCard } from "./basic/SpecCard.tsx";
// SVG
import { IconColorSwatch } from '@tabler/icons-react';
import { IconClock } from '@tabler/icons-react';
import { IconChartBarPopular } from '@tabler/icons-react';
import { IconCalculator } from '@tabler/icons-react';
import { IconCalendarWeek } from '@tabler/icons-react';
import { IconMoon } from '@tabler/icons-react';


export function SpecSection(){
    return(
        <div className="flex flex-col justify-center items-center p-4 gap-6">
            <div className="flex flex-col justify-center items-center gap-1 text-center">
                <span className="text-accent font-bold">Ingeniería del Hábito</span>
                <h1 className="text-6xl font-bold">Diseñado para ayudarte a alcanzar tus objetivos</h1>
            </div>
            <p className="text-muted-foreground max-w-4/6 text-center">StudyLog está diseñado para ayudarte a alcanzar tus objetivos de estudio de manera efectiva y eficiente. Con nuestra plataforma, podrás establecer metas claras, realizar un seguimiento de tu progreso y mantener la motivación a lo largo del camino. Nuestro enfoque se basa en la ingeniería del hábito, lo que significa que te ayudamos a desarrollar hábitos de estudio consistentes y sostenibles que te llevarán al éxito académico.</p>
            <div className="grid lg:grid-cols-3 lg:grid-rows-2 p-2 gap-8 md:grid-cols-2 md:grid-rows-3">
                <SpecCard svg={IconColorSwatch} color="var(--subject-1)">
                    <h1 className="text-lg font-bold">Codigo cromático sin ambiguedad</h1>
                    <p>Un código cromático que no tiene ambigüedades</p>
                </SpecCard>
                <SpecCard svg={IconClock} color="var(--subject-2)">
                    <h1 className="text-lg font-bold">Reloj</h1>
                    <p>Un reloj que muestra la hora actual</p>
                </SpecCard>
                <SpecCard svg={IconChartBarPopular} color="var(--subject-3)">
                    <h1 className="text-lg font-bold">Gráfico de barras populares</h1>
                    <p>Un gráfico de barras que muestra datos populares</p>
                </SpecCard>
                <SpecCard svg={IconCalculator} color="var(--subject-4)">
                    <h1 className="text-lg font-bold">Calculadora</h1>
                    <p>Una calculadora para realizar operaciones matemáticas</p>
                </SpecCard>
                <SpecCard svg={IconCalendarWeek} color="var(--subject-5)">
                    <h1 className="text-lg font-bold">Calendario de la semana</h1>
                    <p>Un calendario que muestra la semana actual</p>
                </SpecCard>
                <SpecCard svg={IconMoon} color="var(--subject-6)">
                    <h1 className="text-lg font-bold">Luna</h1>
                    <p>Una representación de la luna</p>
                </SpecCard>
            </div>
        </div>
    )
}