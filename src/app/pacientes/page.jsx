'use client';
import AddButton from "@/components/AddButton";
import Card from "@/components/Card";

export default function Pacientes () {
    return (
        <div className='mx-5 mt-16'>
            <AddButton />
            <div className='fixed w-full -mx-5 px-4 pb-4 bg-white shadow z-[5]'>
                <input className="w-full px-2 py-1 rounded-md border-slate-400 focus:border-hospMorado focus:ring-hospMorado "  placeholder="Buscar Paciente" type="text" name="patientSearch" id="patientSearch" />   
            </div>

            <div className="pt-16">
                <Card tipo='paciente' titulo='Umi' subtitulo='Nombre del Tutor' liga='/pacientes/23' />
                <Card tipo='paciente' titulo='Nombre Paciente' subtitulo='Nombre del Tutor' liga='/pacientes/23' />
                <Card tipo='paciente' titulo='Roquefort' subtitulo='Nombre del Tutor' liga='/pacientes/23' />
                <Card tipo='paciente' titulo='Morusa' subtitulo='Nombre del Tutor' liga='/pacientes/23' />
                <Card tipo='paciente' titulo='Kinny' subtitulo='Nombre del Tutor' liga='/pacientes/23' />
                <Card tipo='paciente' titulo='Sofi' subtitulo='Nombre del Tutor' liga='/pacientes/23' />
                <Card tipo='paciente' titulo='Ivette' subtitulo='Nombre del Tutor' liga='/pacientes/23' />
                <Card tipo='paciente' titulo='Umi' subtitulo='Nombre del Tutor' liga='/pacientes/23' />
            </div>

            <div className='pb-40 pt-5 text-center'><h3>Fin de Resultados</h3></div>

        </div>
    )
}