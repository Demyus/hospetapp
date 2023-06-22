'use client'

import AddButton from "@/components/AddButton";
import Card from "@/components/Card";
import CardContainer from "@/components/CardContainer";
import Container from "@/components/Container";
import DocumentoDay from "@/components/DocumentoDay";
import Title from "@/components/Title";
import Image from "next/image";
import { useRouter } from "next/navigation"

export default function EditAgenda ({params}) {
    const router = useRouter();

    const edit = () => {
        router.push('/agenda/editar/37')
    }

    return (
        <Container>
            <AddButton />
            <div className="flex">
                <div className="mr-4">
                    <Image src={'/placeholder3.png'} width={110} height={110} alt="Foto Paciente" />
                </div>
                <div>
                    <h1 className="font-bold">Consulta Toto</h1>
                    <p className="text-sm">
                        Lunes 16 Marzo
                    </p>
                    <p className="text-sm">
                        9:30 am - 10:30 am
                    </p>
                    <button onClick={edit} className="text-sm rounded-md bg-hospMorado text-white px-2 py-1 mt-2 mx-auto">Editar Agenda</button>
                </div>
            </div>
            <div className="my-3">
                <Card tipo='tutor' titulo='Ixchel True Orozco' subtitulo='Tutor' liga={`/tutores/${Math.floor(Math.random() * 10) + 1}`} />
                <Card tipo='paciente' titulo='Toto' subtitulo='Ixchel True Orozco' liga={`/pacientes/${Math.floor(Math.random() * 10) + 1}`} />
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
                <DocumentoDay dia='LUN' fecha='16' eventos='1' />
                <DocumentoDay dia='MAR' fecha='17' eventos='2' />
                <Title title='Mayo' />
                <DocumentoDay dia='mie' fecha='18' eventos='3' />
                <div className='pb-40 pt-5 text-center'><h3>Fin de Resultados</h3></div>
            </CardContainer>
        </Container>
    )
}