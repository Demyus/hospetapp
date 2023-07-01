'use client'

import AddButton from "@/components/AddButton";
import AgendaDay from "@/components/AgendaDay";
import Card from "@/components/Card";
import CardContainer from "@/components/CardContainer";
import Container from "@/components/Container";
import Event from "@/components/Event";
import Title from "@/components/Title";
import { useRouter } from "next/navigation"

export default function TareaDetail ({params}) {
    const router = useRouter();

    const edit = () => {
        router.push('/agenda/editar/37')
    }

    return (
        <Container>
            <AddButton />            
            <Card tipo='anamnesis' titulo='Consulta Toto' subtitulo='Lunes 16 Marzo | 9:30 am' liga={`/agenda/edit/${Math.floor(Math.random() * 10) + 1}`} />
            <CardContainer>
                <div className="">
                    <h2 className="font-bold">Notas</h2>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus, elit nibh et nisl, pellentesque scelerisque faucibus facilisis at. Placerat morbi sem viverra diam lectus odio orci... 
                    </p>
                </div>
            </CardContainer>
            <Card tipo='vet' titulo='Karla Ulloa' subtitulo='Administrador General' liga='/perfil' />
        </Container>
    )
}