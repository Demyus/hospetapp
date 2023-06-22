'use client';

import AddButton from '@/components/AddButton';
import AgendaDay from '@/components/AgendaDay';
import Card from '@/components/Card';
import CardContainer from '@/components/CardContainer';
import DocumentoDay from '@/components/DocumentoDay';
import Encabezado from '@/components/Encabezado';
import TareaDay from '@/components/TareaDay';
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
                            <div className="w-full">
                                    <Image className='right-3 top-1 absolute' src={'/placeholder3.png'} alt='Foto Perfil' width={110} height={110} />
                                    <h1 className="font-bold text-xl text-hospMorado">Roquefort</h1>
                                    <p className="text-sm"><span className="font-bold">Especie:</span> Felino</p>
                                    <p className="text-sm"><span className="font-bold">Raza:</span> Taby</p>
                                    <p className="text-sm"><span className="font-bold">Color:</span> Naranja</p>
                                    <p className="text-sm"><span className="font-bold">Sexo:</span> Macho</p>
                                <div className='flex justify-between'>
                                    <div>
                                        <p className="text-sm"><span className="font-bold">Peso:</span> 5 kg</p>
                                        <p className="text-sm"><span className="font-bold">Esterilizado:</span> Sí</p>
                                    </div>
                                    <div>
                                        <p className="text-sm"><span className="font-bold">Sangre:</span> A+</p>
                                        <p className="text-sm"><span className="font-bold">Edad:</span> 2 años</p>    
                                    </div>                                    
                                    <div>
                                        <p className="text-sm"><span className="font-bold">Donador:</span> Sí</p>
                                    </div>
                                </div>
                                <p className="text-sm"><span className="font-bold">Señas particulares:</span> Es un hermoso</p>
                                <button onClick={edit} className="text-sm rounded-md bg-hospMorado text-white px-2 py-1 mt-2 mx-auto">Editar Perfil</button>
                            </div>
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
                        <TareaDay dia='MAR' fecha='17' eventos='2' />
                        
                        <Encabezado title='Agenda' />
                        <Title title='Agosto' />
                        <AgendaDay dia='Dom' fecha='22' eventos='1' />

                        <div className='pb-40 pt-5 text-center'><h3>Fin de Resultados</h3></div>

                    </Tab.Panel>

                    <Tab.Panel className='bg-[#F6F8F9]'>
                        <Encabezado title='Agenda' />
                        <Title title='Mayo' />
                        <DocumentoDay dia='MAR' fecha='17' eventos='1' />

                        <Encabezado title='Vacunas' />
                        <Title title='Junio' />
                        <TareaDay dia='MAR' fecha='17' eventos='1' />

                        <Encabezado title='Desparasitaciones' />
                        <Title title='Junio' />
                        <TareaDay dia='MAR' fecha='17' eventos='1' />
                        <TareaDay dia='MAR' fecha='18' eventos='1' />
                        <TareaDay dia='MAR' fecha='19' eventos='1' />

                        <div className='pb-40 pt-5 text-center'><h3>Fin de Resultados</h3></div>

                    </Tab.Panel>

                    <Tab.Panel className='bg-[#F6F8F9]'>

                        <Title title='Mayo' />
                        <DocumentoDay dia='MAR' fecha='17' eventos='4' />

                        <div className='pb-40 pt-5 text-center'><h3>Fin de Resultados</h3></div>

                    </Tab.Panel>
                </Tab.Panels>
            </Tab.Group>
        </div>
    )
}