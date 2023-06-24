import Tarea from "./Tarea";

export default function TareaDay({dia, fecha, children}) {

    return (
        <div className='flex flex-nowrap mb-3'>
            <div className='font-bold text-hospVerde uppercase flex flex-col w-1/5'>
                <span className=''>{dia}</span> <span className='text-2xl'>{fecha}</span>
            </div>
            <div className='w-full'>
                {children}
            </div>
        </div>
    )
}