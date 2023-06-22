import Tarea from "./Tarea";

export default function TareaDay({dia, fecha, eventos}) {
    const cantidad = eventos;
    const events = [];
  
    for (let i = 0; i < cantidad; i++) {
      events.push(<Tarea key={i} />);
    }

    return (
        <div className='flex flex-nowrap mb-3'>
            <div className='font-bold text-hospVerde uppercase flex flex-col w-1/5'>
                <span className=''>{dia}</span> <span className='text-2xl'>{fecha}</span>
            </div>
            <div className='w-full'>
                {events}
            </div>
        </div>
    )
}