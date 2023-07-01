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
            <CardContainer>
                <div className="text-base font-bold mb-3">
                    Titulo
                    <input 
                        className="w-full font-normal px-2 py-1 rounded-sm border-slate-300 focus:border-hospMorado focus:ring-hospMorado " 
                        name="titulo" 
                        id="titulo" 
                        type="text" />
                </div>
                <div className="text-base font-bold mb-3">
                    Fecha
                    <input 
                        className="w-full font-normal px-2 py-1 mb-3 rounded-sm border-slate-300 focus:border-hospMorado focus:ring-hospMorado " 
                        name="fecha" 
                        id="fecha" 
                        type="date" />

                <div className="flex w-full">
                    <div className="w-full mr-3">
                        Inicio <br/>
                        <select name="fromTime" id="fromTime" className="w-full font-normal px-2 py-1 mb-3 rounded-sm border-slate-300 focus:border-hospMorado focus:ring-hospMorado ">
                            <option value="7am">7am</option>
                            <option value="8am">8am</option>
                            <option value="9am">9am</option>
                            <option value="10am">10am</option>
                            <option value="11am">11am</option>
                            <option value="12pm">12pm</option>
                            <option value="1pm">1pm</option>
                            <option value="2pm">2pm</option>
                            <option value="3pm">3pm</option>
                            <option value="4pm">4pm</option>
                            <option value="5pm">5pm</option>
                            <option value="6pm">6pm</option>
                            <option value="7pm">7pm</option>
                            <option value="8pm">8pm</option>
                        </select>
                    </div>
                    <div className="w-full">
                        Duración <br/>
                        <select name="toTime" id="toTime" className="w-full font-normal px-2 py-1 mb-3 rounded-sm border-slate-300 focus:border-hospMorado focus:ring-hospMorado ">
                            <option value="15 Minutos">15 Minutos</option>
                            <option value="30 Minutos">30 Minutos</option>
                            <option value="45 Minutos">45 Minutos</option>
                            <option value="1 Hora">1 Hora</option>
                            <option value="2 Hora">2 Horas</option>
                            <option value="3 Hora">3 Horas</option>
                            <option value="4 Hora">4 Horas</option>
                        </select>
                    </div>
                    
                </div>
                    

                </div>
            </CardContainer>

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
                <div className="text-base font-bold mb-3">
                    Atiende                    
                    <input 
                        className="w-full font-normal mb-3 px-2 py-1 rounded-sm border-slate-300 focus:border-hospMorado focus:ring-hospMorado " 
                        name="buscadorTutor" 
                        id="buscadorTutor" 
                        placeholder="Buscar" 
                        type="text" />
                    <Card tipo='vet' titulo='Karla Ulloa' subtitulo='Administrador General' liga='/perfil' />
                </div>
            </CardContainer>

            <div className="my-3">
                <Card tipo='anamnesis' titulo='Anamnesis' subtitulo='' liga='/pacientes/23/anamnesis/55' />
            </div>
            <CardContainer>
                <div className="text-base font-bold mb-3">
                    Notas
                    <textarea className="w-full font-normal mb-3 px-2 py-1 rounded-sm border-slate-300 focus:border-hospMorado focus:ring-hospMorado"
                        name="agendaNotas" id="agendaNotas" rows="6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus, elit nibh et nisl, pellentesque scelerisque faucibus facilisis at. Placerat morbi sem viverra diam lectus odio orci... </textarea>
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