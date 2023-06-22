import Event from "./Event";

export default function DocumentoDay({dia, fecha, eventos}) {
    const cantidad = eventos;
    const events = [];
  
    for (let i = 0; i < cantidad; i++) {
      events.push(<Event key={`event${i}`} 
      titulo='Reporte Sangre' 
      subtitulo='PDF' 
      usuario='Karla' 
      liga={`/agenda/${Math.floor(Math.random() * 10) + 1}`} />);
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