'use client';

import AddButton from '@/components/AddButton';
import AgendaDay from '@/components/AgendaDay';
import Card from '@/components/Card';
import CardContainer from '@/components/CardContainer';
import Encabezado from '@/components/Encabezado';
import Event from '@/components/Event';
import Title from '@/components/Title';
import { Tab } from '@headlessui/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

export default function Page ({params}) {
    const router = useRouter();

    const edit = () => {
        router.push('/pacientes/editar/37');
    }

    return (
        <div className='mx-5'>
            <AddButton />
            <div className='mt-16'></div>
            <Tab.Group>
                <div className='fixed w-full -mx-5 pb-4 bg-white shadow z-[5]'>
                <Tab.List className='flex justify-evenly md:justify-normal mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                    <Tab className={ ({selected})=> classNames(selected ? 'font-bold text-hospMorado border-b-2 border-hospMorado' : 'text-black hover:text-hospMorado', 'md:mr-14 ')}>
                        Perfil
                    </Tab>
                    <Tab className={ ({selected})=> classNames(selected ? 'font-bold text-hospMorado border-b-2 border-hospMorado' : 'text-black hover:text-hospMorado', 'md:mr-14 ')}>
                        Historial
                    </Tab>
                    <Tab className={ ({selected})=> classNames(selected ? 'font-bold text-hospMorado border-b-2 border-hospMorado' : 'text-black hover:text-hospMorado', 'md:mr-14 ')}>
                        Documentos
                    </Tab>
                </Tab.List>
                </div>

                <Tab.Panels className='pt-16'>
                    <Tab.Panel className='bg-[#F6F8F9]'>

                        <CardContainer>
                            <div className="flex">
                                <div className='mr-3 mb-3 w-full max-w-[110px]'>
                                    <Image className='block' src={'/placeholder3.png'} alt='Foto Perfil' width={110} height={110} />
                                </div>
                                 <div className='w-full'>
                                    <h1 className="font-bold text-xl text-hospMorado">Roquefort</h1>
                                    <div className=''>
                                        Felino, Taby Naranja, Macho, 2 años, 5kg, Esterilizado, A+, Donador
                                    </div>
                                </div>
                            </div>
                            <p className="text-sm"><span className="font-bold">Señas particulares:</span> Es un hermoso</p>
                                <button onClick={edit} className="text-sm rounded-md bg-hospMorado text-white px-2 py-1 mt-2 w-full tracking-wide mx-auto">Editar Perfil</button>
                        </CardContainer>
                        
                        <Card tipo='tutor' titulo='Ixchel True Orozco' subtitulo='Tutor' liga={`/tutores/${Math.floor(Math.random() * 10) + 1}`} />

                        <CardContainer>
                            <div className="">
                                <h2 className="font-bold">Notas</h2>
                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus, elit nibh et nisl, pellentesque scelerisque faucibus facilisis at. Placerat morbi sem viverra diam lectus odio orci... 
                                </p>
                            </div>
                        </CardContainer>

                        <Encabezado title='Tareas' />
                        <Title title='Junio' />
                        <AgendaDay dia='Dom' fecha='22' tipo="tarea">
                            <Event key={`event${Math.floor(Math.random() * 10) + 1}`} titulo='Hidratación Morusa' subtitulo='8:00am' usuario='Karla' tipo="tarea" liga={`/tareas/${Math.floor(Math.random() * 10) + 1}`} />
                            <Event key={`event${Math.floor(Math.random() * 10) + 1}`} titulo='Hidratación Morusa' subtitulo='8:00am' usuario='Karla' tipo="tarea" liga={`/tareas/${Math.floor(Math.random() * 10) + 1}`} />
                        </AgendaDay>
                        
                        <Encabezado title='Agenda' />
                        <Title title='Agosto' />
                        <AgendaDay dia='Dom' fecha='22' >
                            <Event key={`event${Math.floor(Math.random() * 10) + 1}`} titulo='Hidratación Morusa' subtitulo='8:00am - 9:00am' usuario='Karla' liga={`/agenda/${Math.floor(Math.random() * 10) + 1}`} />
                        </AgendaDay>

                        <div className='pb-40 pt-5 text-center'><h3>Fin de Resultados</h3></div>

                    </Tab.Panel>

                    <Tab.Panel className='bg-[#F6F8F9]'>
                        <Encabezado title='Agenda' />
                        <Title title='Mayo' />
                        <AgendaDay dia='Dom' fecha='22' tipo="agenda">
                            <Event key={`event${Math.floor(Math.random() * 10) + 1}`} titulo='Hidratación Morusa' subtitulo='8:00am' usuario='Karla' tipo="tarea" liga={`/agenda/${Math.floor(Math.random() * 10) + 1}`} />
                            <Event key={`event${Math.floor(Math.random() * 10) + 1}`} titulo='Hidratación Morusa' subtitulo='8:00am' usuario='Karla' tipo="tarea" liga={`/agenda/${Math.floor(Math.random() * 10) + 1}`} />
                        </AgendaDay>

                        <Encabezado title='Vacunas' />
                        <Title title='Junio' />
                        <AgendaDay dia='Dom' fecha='22' tipo="tarea">
                            <Event key={`event${Math.floor(Math.random() * 10) + 1}`} titulo='Nombre Vacuna' subtitulo='Marca/Proveedor' usuario='Karla' tipo="tarea" liga={`/pacientes/23/vacunas/${Math.floor(Math.random() * 10) + 1}`} />
                            <Event key={`event${Math.floor(Math.random() * 10) + 1}`} titulo='Triple Felina' subtitulo='Bayer' usuario='Karla' tipo="tarea" liga={`/pacientes/23/vacunas/${Math.floor(Math.random() * 10) + 1}`} />
                        </AgendaDay>

                        <Encabezado title='Desparasitaciones' />
                        <Title title='Junio' />
                        <AgendaDay dia='Dom' fecha='22' tipo="tarea">
                            <Event key={`event${Math.floor(Math.random() * 10) + 1}`} titulo='Hidratación Morusa' subtitulo='8:00am' usuario='Karla' tipo="tarea" liga={`/agenda/${Math.floor(Math.random() * 10) + 1}`} />
                        </AgendaDay>
                        <Title title='Julio' />
                        <AgendaDay dia='Lun' fecha='23' tipo="tarea">
                            <Event key={`event${Math.floor(Math.random() * 10) + 1}`} titulo='Hidratación Morusa' subtitulo='8:00am' usuario='Karla' tipo="tarea" liga={`/agenda/${Math.floor(Math.random() * 10) + 1}`} />
                        </AgendaDay>

                        <div className='pb-40 pt-5 text-center'><h3>Fin de Resultados</h3></div>

                    </Tab.Panel>

                    <Tab.Panel className='bg-[#F6F8F9]'>

                        <Title title='Mayo' />
                        <AgendaDay dia='Dom' fecha='22' tipo="doc">
                            <Event key={`event${Math.floor(Math.random() * 10) + 1}`} titulo='Reporte Sangre Morusa' subtitulo='PDF' usuario='Karla' tipo="tarea" liga={`/agenda/${Math.floor(Math.random() * 10) + 1}`} />
                            <Event key={`event${Math.floor(Math.random() * 10) + 1}`} titulo='Perfil Completo' subtitulo='PDF' usuario='Karla' tipo="tarea" liga={`/agenda/${Math.floor(Math.random() * 10) + 1}`} />
                        </AgendaDay>

                        <div className='pb-40 pt-5 text-center'><h3>Fin de Resultados</h3></div>

                    </Tab.Panel>
                </Tab.Panels>
            </Tab.Group>
        </div>
    )
}