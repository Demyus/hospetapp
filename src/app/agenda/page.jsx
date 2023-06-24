'use client';

import AddButton from '@/components/AddButton';
import AgendaDay from '@/components/AgendaDay';
import Event from '@/components/Event';
import Title from '@/components/Title';
import { Tab } from '@headlessui/react';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

export default function Page () {
    return (
        <div className='mx-5'>
            <AddButton />
            <div className='mt-16'></div>
            <Tab.Group>
                <div className='fixed w-full -mx-5 pb-4 bg-white shadow z-[5]'>
                <Tab.List className='flex justify-evenly md:justify-normal mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                    <Tab className={ ({selected})=> classNames(selected ? 'font-bold text-hospMorado border-b-2 border-hospMorado' : 'text-black hover:text-hospMorado', 'md:mr-14 ')}>
                        Vigentes
                    </Tab>
                    <Tab className={ ({selected})=> classNames(selected ? 'font-bold text-hospMorado border-b-2 border-hospMorado' : 'text-black hover:text-hospMorado', 'md:mr-14 ')}>
                        Pasados
                    </Tab>
                </Tab.List>
                </div>

                <Tab.Panels className='pt-16'>
                    <Tab.Panel className='bg-[#F6F8F9]'>

                    <AgendaDay dia='LUN' fecha='16' >
                        <Event key={`event${Math.floor(Math.random() * 10) + 1}`} titulo='Hidratación Morusa' subtitulo='8:00am - 9:00am' usuario='Karla' liga={`/agenda/${Math.floor(Math.random() * 10) + 1}`} />
                        <Event key={`event${Math.floor(Math.random() * 10) + 1}`} titulo='Hidratación Morusa' subtitulo='8:00am - 9:00am' usuario='Karla' liga={`/agenda/${Math.floor(Math.random() * 10) + 1}`} />
                        <Event key={`event${Math.floor(Math.random() * 10) + 1}`} titulo='Hidratación Morusa' subtitulo='8:00am - 9:00am' usuario='Karla' liga={`/agenda/${Math.floor(Math.random() * 10) + 1}`} />
                        <Event key={`event${Math.floor(Math.random() * 10) + 1}`} titulo='Hidratación Morusa' subtitulo='8:00am - 9:00am' usuario='Karla' liga={`/agenda/${Math.floor(Math.random() * 10) + 1}`} />
                    </AgendaDay>
                    <AgendaDay dia='MAR' fecha='17'>
                        <Event key={`event${Math.floor(Math.random() * 10) + 1}`} titulo='Hidratación Morusa' subtitulo='8:00am - 9:00am' usuario='Karla' liga={`/agenda/${Math.floor(Math.random() * 10) + 1}`} />
                        <Event key={`event${Math.floor(Math.random() * 10) + 1}`} titulo='Hidratación Morusa' subtitulo='8:00am - 9:00am' usuario='Karla' liga={`/agenda/${Math.floor(Math.random() * 10) + 1}`} />
                    </AgendaDay>
                    <AgendaDay dia='mie' fecha='18' >
                        <Event key={`event${Math.floor(Math.random() * 10) + 1}`} titulo='Hidratación Morusa' subtitulo='8:00am - 9:00am' usuario='Karla' liga={`/agenda/${Math.floor(Math.random() * 10) + 1}`} />
                        <Event key={`event${Math.floor(Math.random() * 10) + 1}`} titulo='Hidratación Morusa' subtitulo='8:00am - 9:00am' usuario='Karla' liga={`/agenda/${Math.floor(Math.random() * 10) + 1}`} />
                        <Event key={`event${Math.floor(Math.random() * 10) + 1}`} titulo='Hidratación Morusa' subtitulo='8:00am - 9:00am' usuario='Karla' liga={`/agenda/${Math.floor(Math.random() * 10) + 1}`} />
                    </AgendaDay>
                    <AgendaDay dia='Jue' fecha='19' >
                        <Event key={`event${Math.floor(Math.random() * 10) + 1}`} titulo='Hidratación Morusa' subtitulo='8:00am - 9:00am' usuario='Karla' liga={`/agenda/${Math.floor(Math.random() * 10) + 1}`} />
                    </AgendaDay>
                    
                    <Title title='Agosto' />
                    
                    <AgendaDay dia='Vie' fecha='20' eventos='3' >
                        <Event key={`event${Math.floor(Math.random() * 10) + 1}`} titulo='Hidratación Morusa' subtitulo='8:00am - 9:00am' usuario='Karla' liga={`/agenda/${Math.floor(Math.random() * 10) + 1}`} />
                        <Event key={`event${Math.floor(Math.random() * 10) + 1}`} titulo='Hidratación Morusa' subtitulo='8:00am - 9:00am' usuario='Karla' liga={`/agenda/${Math.floor(Math.random() * 10) + 1}`} />
                    </AgendaDay>
                    <AgendaDay dia='Sab' fecha='21' eventos='3' >
                        <Event key={`event${Math.floor(Math.random() * 10) + 1}`} titulo='Hidratación Morusa' subtitulo='8:00am - 9:00am' usuario='Karla' liga={`/agenda/${Math.floor(Math.random() * 10) + 1}`} />
                        <Event key={`event${Math.floor(Math.random() * 10) + 1}`} titulo='Hidratación Morusa' subtitulo='8:00am - 9:00am' usuario='Karla' liga={`/agenda/${Math.floor(Math.random() * 10) + 1}`} />
                    </AgendaDay>
                    <AgendaDay dia='Dom' fecha='22' eventos='3' >
                        <Event key={`event${Math.floor(Math.random() * 10) + 1}`} titulo='Hidratación Morusa' subtitulo='8:00am - 9:00am' usuario='Karla' liga={`/agenda/${Math.floor(Math.random() * 10) + 1}`} />
                        <Event key={`event${Math.floor(Math.random() * 10) + 1}`} titulo='Hidratación Morusa' subtitulo='8:00am - 9:00am' usuario='Karla' liga={`/agenda/${Math.floor(Math.random() * 10) + 1}`} />
                    </AgendaDay>

                    <div className='pb-40 pt-5 text-center'><h3>Fin de Resultados</h3></div>

                    </Tab.Panel>
                    <Tab.Panel className='bg-[#F6F8F9]'>

                    <Title title='Mayo' />
                    
                    <AgendaDay dia='Vie' fecha='20' eventos='3' >
                        <Event key={`event${Math.floor(Math.random() * 10) + 1}`} titulo='Hidratación Morusa' subtitulo='8:00am - 9:00am' usuario='Karla' liga={`/agenda/${Math.floor(Math.random() * 10) + 1}`} />
                        <Event key={`event${Math.floor(Math.random() * 10) + 1}`} titulo='Hidratación Morusa' subtitulo='8:00am - 9:00am' usuario='Karla' liga={`/agenda/${Math.floor(Math.random() * 10) + 1}`} />
                    </AgendaDay>
                    <AgendaDay dia='Sab' fecha='21' eventos='3' >
                        <Event key={`event${Math.floor(Math.random() * 10) + 1}`} titulo='Hidratación Morusa' subtitulo='8:00am - 9:00am' usuario='Karla' liga={`/agenda/${Math.floor(Math.random() * 10) + 1}`} />
                        <Event key={`event${Math.floor(Math.random() * 10) + 1}`} titulo='Hidratación Morusa' subtitulo='8:00am - 9:00am' usuario='Karla' liga={`/agenda/${Math.floor(Math.random() * 10) + 1}`} />
                    </AgendaDay>
                    <AgendaDay dia='Dom' fecha='22' eventos='3' >
                        <Event key={`event${Math.floor(Math.random() * 10) + 1}`} titulo='Hidratación Morusa' subtitulo='8:00am - 9:00am' usuario='Karla' liga={`/agenda/${Math.floor(Math.random() * 10) + 1}`} />
                        <Event key={`event${Math.floor(Math.random() * 10) + 1}`} titulo='Hidratación Morusa' subtitulo='8:00am - 9:00am' usuario='Karla' liga={`/agenda/${Math.floor(Math.random() * 10) + 1}`} />
                    </AgendaDay>

                    <div className='pb-40 pt-5 text-center'><h3>Fin de Resultados</h3></div>

                    </Tab.Panel>
                </Tab.Panels>
            </Tab.Group>
        </div>
    )
}