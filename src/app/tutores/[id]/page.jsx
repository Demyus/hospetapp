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
        router.push('/tutores/editar/37')
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
                        Documentos
                    </Tab>
                </Tab.List>
                </div>

                <Tab.Panels className='pt-16'>
                    <Tab.Panel className='bg-[#F6F8F9]'>

                    <CardContainer>
                        
                        <div className="flex">
                            <div className="mr-4">
                                <Image src={'/placeholder4.png'} alt='Foto Perfil' width={110} height={110} />
                                <button onClick={edit} className="text-sm rounded-md bg-hospMorado text-white px-2 py-1 mt-2 mx-auto">Editar Perfil</button>
                            </div>
                            <div>
                                <h1 className="font-bold text-hospMorado">Ixchel True Orozco</h1>
                                <p className="text-sm">
                                    <span className="font-bold">Teléfono:</span><br/> (646) 176 5692
                                </p>
                                <p className="text-sm">
                                    <span className="font-bold">Celular:</span><br/> (646) 484 2981
                                </p>
                                <p className="text-sm">
                                    <span className="font-bold">Correo:</span><br/>
                                    ixchel.true.orozco@gmail.com
                                </p>
                            </div>
                        </div>
                    </CardContainer>
                    
                    <CardContainer>
                        <div className="">
                            <h2 className="font-bold">Notas</h2>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus, elit nibh et nisl, pellentesque scelerisque faucibus facilisis at. Placerat morbi sem viverra diam lectus odio orci... 
                            </p>
                        </div>
                    </CardContainer>

                    <Encabezado title='Pacientes' />
                    <Card tipo='paciente' titulo='Umi' subtitulo='Nombre del Tutor' liga={`/pacientes/${Math.floor(Math.random() * 10) + 1}`} />
                    <Card tipo='paciente' titulo='Nombre Paciente' subtitulo='Nombre del Tutor' liga={`/pacientes/${Math.floor(Math.random() * 10) + 1}`} />
                    <Card tipo='paciente' titulo='Roquefort' subtitulo='Nombre del Tutor' liga={`/pacientes/${Math.floor(Math.random() * 10) + 1}`} />

                    <Encabezado title='Tareas' />
                    <Title title='Junio' />
                    <AgendaDay dia='Dom' fecha='22' tipo="tarea">
                        <Event key={`event${Math.floor(Math.random() * 10) + 1}`} titulo='Hidratación Morusa' subtitulo='8:00am' usuario='Karla' tipo="tarea" liga={`/agenda/${Math.floor(Math.random() * 10) + 1}`} />
                        <Event key={`event${Math.floor(Math.random() * 10) + 1}`} titulo='Hidratación Morusa' subtitulo='8:00am' usuario='Karla' tipo="tarea" liga={`/agenda/${Math.floor(Math.random() * 10) + 1}`} />
                    </AgendaDay>
                    
                    <Encabezado title='Agenda' />
                    <Title title='Agosto' />
                    <AgendaDay dia='Dom' fecha='22' tipo="agenda">
                        <Event key={`event${Math.floor(Math.random() * 10) + 1}`} titulo='Hidratación Morusa' subtitulo='8:00am - 9:00am' usuario='Karla' liga={`/agenda/${Math.floor(Math.random() * 10) + 1}`} />
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