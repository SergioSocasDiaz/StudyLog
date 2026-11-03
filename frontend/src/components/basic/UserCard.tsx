export function UserCard({children}:{children?:React.ReactNode}){
    return(
        <div className='flex items-center gap-3'>
            <div className={`rounded-full p-3 flex bg-black aspect-square size-max`}>
                {/*Iria una imagen*/}
            </div>
            <div>
                <h1 className="text-lg font-bold">Nombre del usuario</h1>
                <p className="text-muted-foreground">@usuario</p>
                {children /*Info del usuario*/}
            </div>
        </div>
    )
}