'use client'

import AgendaDay from "@/components/AgendaDay";
import Card from "@/components/Card";
import CardContainer from "@/components/CardContainer";
import Container from "@/components/Container";
import Event from "@/components/Event";
import Title from "@/components/Title";
import { useRouter } from "next/navigation"

export default function EditAgenda ({params}) {
    const router = useRouter();

    const edit = () => {
        router.push('/agenda/editar/37')
    }

    return (
        <Container>
            <h1 className="font-bold text-xl mb-3">Anamnesis</h1>
            <CardContainer>
                <div className="text-base font-bold mb-3">
                    Paciente                    
                    <input 
                        className="w-full font-normal mb-3 px-2 py-1 rounded-sm border-slate-300 focus:border-hospMorado focus:ring-hospMorado " 
                        name="buscadorTutor" 
                        id="buscadorTutor" 
                        placeholder="Buscar Paciente" 
                        type="text" />
                    <Card tipo='paciente' titulo='Toto' subtitulo='Ixchel True Orozco' liga={`/pacientes/${Math.floor(Math.random() * 10) + 1}`} />
                    Tutor                    
                    <Card tipo='tutor' titulo='Ixchel True Orozco' subtitulo='Tutor' liga={`/tutores`} />
                </div>
            </CardContainer>

            <CardContainer>
               <div className="text-base font-bold">
                    Motivo de la Visita
                    <textarea className="w-full font-normal px-2 py-1 rounded-sm border-slate-300 focus:border-hospMorado focus:ring-hospMorado"
                        name="motivoNotas" id="motivoNotas" rows="6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus, elit nibh et nisl, pellentesque scelerisque faucibus facilisis at. Placerat morbi sem viverra diam lectus odio orci... </textarea>
                </div>
            </CardContainer>

            <CardContainer>
               <div className="text-base font-bold">
                    Peso
                    <input 
                        className="w-full font-normal mb-3 px-2 py-1 rounded-sm border-slate-300 focus:border-hospMorado focus:ring-hospMorado " 
                        name="buscadorTutor" 
                        id="buscadorTutor" 
                        placeholder="Buscar Paciente" 
                        type="text" />                    
                </div>
            </CardContainer>

            <CardContainer>
                <div className="text-base font-bold">
                    Notas
                    <textarea className="w-full font-normal px-2 py-1 rounded-sm border-slate-300 focus:border-hospMorado focus:ring-hospMorado"
                        name="agendaNotas" id="agendaNotas" rows="6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus, elit nibh et nisl, pellentesque scelerisque faucibus facilisis at. Placerat morbi sem viverra diam lectus odio orci... </textarea>
                </div>
            </CardContainer>

            <CardContainer>
                <div className="text-base font-bold">
                    Atendió                    
                    <input 
                        className="w-full font-normal mb-3 px-2 py-1 rounded-sm border-slate-300 focus:border-hospMorado focus:ring-hospMorado " 
                        name="buscadorTutor" 
                        id="buscadorTutor" 
                        placeholder="Buscar" 
                        type="text" />
                    <Card tipo='vet' titulo='Karla Ulloa' subtitulo='Administrador General' liga='/perfil' />
                </div>
            </CardContainer>
            
            <CardContainer>
                <h2 className="font-bold">Documentos asociados</h2>
                <input 
                        className="w-full font-normal mb-3 px-2 py-1 rounded-sm border-slate-300 focus:border-hospMorado focus:ring-hospMorado " 
                        name="buscadorTutor" 
                        id="buscadorTutor" 
                        placeholder="Buscar" 
                        type="text" />
                <Event key={`event${Math.floor(Math.random() * 10) + 1}`} titulo='Reporte Sangre Morusa' subtitulo='PDF' usuario='Karla' tipo="tarea" liga={`/agenda/${Math.floor(Math.random() * 10) + 1}`} />
                <Event key={`event${Math.floor(Math.random() * 10) + 1}`} titulo='Reporte Sangre Morusa' subtitulo='PDF' usuario='Karla' tipo="tarea" liga={`/agenda/${Math.floor(Math.random() * 10) + 1}`} />
                <button className="rounded-md w-full bg-slate-500 hover:bg-slate-700 transition-all duration-300 text-white px-4 py-2 mr-3">Subir Documento</button>                
            </CardContainer>
            <div className='py-4'></div>
            <div className="flex gap-2">
                <button className="rounded-md w-full  bg-slate-300 hover:bg-slate-500 transition-all duration-300 text-white px-4 py-2 mr-3">Cancelar</button>                
                <button className="rounded-md w-full  bg-hospMorado hover:bg-hospDark transition-all duration-300 text-white px-4 py-2 mr-3">Guardar</button>                
            </div>
            
            <div className='pb-40 pt-5'></div>

        </Container>
    )
}