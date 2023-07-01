'use client';

import AddButton from '@/components/AddButton';
import AgendaDay from '@/components/AgendaDay';
import Event from '@/components/Event';
import Title from '@/components/Title';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

export default function Tareas () {
    return (
        <div className='mx-5 pt-16'>
            <AddButton />
            <div className='fixed w-full -mx-5 px-4 pb-4 bg-white shadow z-[5]'>
                <input className="w-full px-2 py-1 rounded-md border-slate-400 focus:border-hospMorado focus:ring-hospMorado "  placeholder="Buscar" type="text" name="patientSearch" id="patientSearch" />   
            </div>
            <div className='pt-20'>
            
               <Title title='Junio' />
                <AgendaDay dia='Dom' fecha='22' tipo="tarea">
                    <Event key={`event${Math.floor(Math.random() * 10) + 1}`} titulo='Hidratación Morusa' subtitulo='8:00am' usuario='Karla' tipo="tarea" liga={`/tareas/${Math.floor(Math.random() * 10) + 1}`} />
                    <Event key={`event${Math.floor(Math.random() * 10) + 1}`} titulo='Hidratación Morusa' subtitulo='8:00am' usuario='Karla' tipo="tarea" liga={`/tareas/${Math.floor(Math.random() * 10) + 1}`} />
                </AgendaDay>

                <AgendaDay dia='Lun' fecha='23' tipo="tarea">
                    <Event key={`event${Math.floor(Math.random() * 10) + 1}`} titulo='Hidratación Morusa' subtitulo='8:00am' usuario='Karla' tipo="tarea" liga={`/tareas/${Math.floor(Math.random() * 10) + 1}`} />
                </AgendaDay>
                <AgendaDay dia='Mar' fecha='24' tipo="tarea">
                    <Event key={`event${Math.floor(Math.random() * 10) + 1}`} titulo='Hidratación Morusa' subtitulo='8:00am' usuario='Karla' tipo="tarea" liga={`/tareas/${Math.floor(Math.random() * 10) + 1}`} />
                    <Event key={`event${Math.floor(Math.random() * 10) + 1}`} titulo='Hidratación Morusa' subtitulo='8:00am' usuario='Karla' tipo="tarea" liga={`/tareas/${Math.floor(Math.random() * 10) + 1}`} />
                    <Event key={`event${Math.floor(Math.random() * 10) + 1}`} titulo='Hidratación Morusa' subtitulo='8:00am' usuario='Karla' tipo="tarea" liga={`/tareas/${Math.floor(Math.random() * 10) + 1}`} />
                </AgendaDay>
                <AgendaDay dia='Mie' fecha='25' tipo="tarea">
                    <Event key={`event${Math.floor(Math.random() * 10) + 1}`} titulo='Hidratación Morusa' subtitulo='8:00am' usuario='Karla' tipo="tarea" liga={`/tareas/${Math.floor(Math.random() * 10) + 1}`} />
                </AgendaDay>
                    
                <Title title='Agosto' />
                <AgendaDay dia='Jue' fecha='26' tipo="tarea">
                    <Event key={`event${Math.floor(Math.random() * 10) + 1}`} titulo='Hidratación Morusa' subtitulo='8:00am' usuario='Karla' tipo="tarea" liga={`/tareas/${Math.floor(Math.random() * 10) + 1}`} />
                </AgendaDay>
                <AgendaDay dia='Jue' fecha='26' tipo="tarea">
                    <Event key={`event${Math.floor(Math.random() * 10) + 1}`} titulo='Hidratación Morusa' subtitulo='8:00am' usuario='Karla' tipo="tarea" liga={`/tareas/${Math.floor(Math.random() * 10) + 1}`} />
                </AgendaDay>    
                
            </div>

            <div className='pb-40 pt-5 text-center'><h3>Fin de Resultados</h3></div>
        </div>
    )
}