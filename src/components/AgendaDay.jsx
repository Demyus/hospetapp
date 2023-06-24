import Event from "./Event";

export default function AgendaDay({dia, fecha, tipo="agenda", children}) {
    const color = {
        'agenda': 'hospMorado',
        'tarea': 'hospVerde',
        'doc': 'black',
    }
    const type = tipo || 'agenda';

    return (
        <div className='flex flex-nowrap mb-3'>
            <div className={`font-bold text-${color[tipo]} uppercase flex flex-col w-1/5`}>
                <span className=''>{dia}</span> <span className='text-2xl'>{fecha}</span>
            </div>
            <div className='w-full'>
                {children}
            </div>
        </div>
    )
}