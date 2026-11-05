import type { Icon } from '@tabler/icons-react';
type SpecCardTypes= {
    children?: React.ReactNode;
    svg:Icon;
    color:`var(--${string})`;
}

export function SpecCard({children,svg:Svg,color}:SpecCardTypes){
    return(
        <div className='hover:scale-102 transition-ease-in-out duration-200 bg-surface border-border border shadow-md rounded-lg p-5 flex flex-col justify-around gap-3 text-left'>
            <div className={`rounded-lg p-3 flex justify-center items-center aspect-square size-min`}
                style={{backgroundColor:`color-mix(in srgb, ${color} 20%, transparent)`}}>
                <Svg color={`${color}`}/>
            </div>
            <div>
                {children}
            </div>
        </div>
    )
}