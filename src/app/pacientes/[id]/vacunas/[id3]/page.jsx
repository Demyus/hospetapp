'use client'

import AddButton from "@/components/AddButton";
import AgendaDay from "@/components/AgendaDay";
import Card from "@/components/Card";
import CardContainer from "@/components/CardContainer";
import Container from "@/components/Container";
import Encabezado from "@/components/Encabezado";
import Event from "@/components/Event";
import Title from "@/components/Title";
import { useRouter } from "next/navigation"

export default function VacunaDetail ({params}) {
    const router = useRouter();

    const edit = () => {
        router.push('/agenda/editar/37')
    }

    return (
        <Container>
            <AddButton />
            <Encabezado title='Vacunas' />
            <CardContainer>
                <Card tipo='anamnesis' titulo='Triple Felina' subtitulo='Lunes 16 Marzo 2022 | Bayer' liga={`/agenda/edit/${Math.floor(Math.random() * 10) + 1}`} />
                <Card tipo='vet' titulo='Karla Ulloa' subtitulo='Administrador General' liga='/perfil' />
            </CardContainer>
            
            <CardContainer>
                <Card tipo='anamnesis' titulo='Triple Felina' subtitulo='Lunes 18 Marzo 2023 | Bayer' liga={`/agenda/edit/${Math.floor(Math.random() * 10) + 1}`} />
                <Card tipo='vet' titulo='Karla Ulloa' subtitulo='Administrador General' liga='/perfil' />
            </CardContainer>

            <CardContainer>
                <div className="">
                    <h2 className="font-bold">Notas</h2>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus, elit nibh et nisl, pellentesque scelerisque faucibus facilisis at. Placerat morbi sem viverra diam lectus odio orci... 
                    </p>
                </div>
            </CardContainer>
            
        </Container>
    )
}