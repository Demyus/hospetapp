import Event from "./Event";

export default function AgendaDay({dia, fecha, eventos}) {
    const cantidad = eventos;
    const events = [];
  
    for (let i = 0; i < cantidad; i++) {
      events.push(<Event key={i} />);
    }

    return (
        <div className='flex flex-nowrap mb-3'>
            <div className='font-bold text-hospMorado uppercase flex flex-col w-1/5'>
                <span className=''>{dia}</span> <span className='text-2xl'>{fecha}</span>
            </div>
            <div className='w-full'>
                {events}
            </div>
        </div>
    )
}