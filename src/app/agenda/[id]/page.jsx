'use client'

import AddButton from "@/components/AddButton";
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
            <AddButton />
            <Card tipo='anamnesis' titulo='Consulta Toto' subtitulo='Lunes 16 Marzo | 9:30 am - 10:30 am' liga='#' />
            <div className="my-3">
                <Card tipo='paciente' titulo='Toto' subtitulo='Ixchel True Orozco' liga={`/pacientes/${Math.floor(Math.random() * 10) + 1}`} />
                <Card tipo='tutor' titulo='Ixchel True Orozco' subtitulo='Tutor' liga={`/tutores/${Math.floor(Math.random() * 10) + 1}`} />
                <Card tipo='vet' titulo='Karla Ulloa' subtitulo='Administrador General' liga='/perfil' />
                <Card tipo='anamnesis' titulo='Anamnesis' subtitulo='' liga='#' />
            </div>
            <CardContainer>
                <div className="">
                    <h2 className="font-bold">Notas</h2>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus, elit nibh et nisl, pellentesque scelerisque faucibus facilisis at. Placerat morbi sem viverra diam lectus odio orci... 
                    </p>
                </div>
            </CardContainer>
            <CardContainer>
                <h2 className="font-bold">Documentos asociados</h2>
                <Title title='Junio' />
                <AgendaDay dia='Dom' fecha='22' tipo="doc">
                    <Event key={`event${Math.floor(Math.random() * 10) + 1}`} titulo='Reporte Sangre Morusa' subtitulo='PDF' usuario='Karla' tipo="tarea" liga={`/agenda/${Math.floor(Math.random() * 10) + 1}`} />
                </AgendaDay>
                <Title title='Mayo' />
                <AgendaDay dia='Dom' fecha='22' tipo="doc">
                    <Event key={`event${Math.floor(Math.random() * 10) + 1}`} titulo='Reporte Sangre Morusa' subtitulo='PDF' usuario='Karla' tipo="tarea" liga={`/agenda/${Math.floor(Math.random() * 10) + 1}`} />
                </AgendaDay>
                <div className='pb-40 pt-5 text-center'><h3>Fin de Resultados</h3></div>
            </CardContainer>
        </Container>
    )
}