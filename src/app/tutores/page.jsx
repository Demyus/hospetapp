'use client';
import AddButton from "@/components/AddButton";
import Card from "@/components/Card";

export default function Tutores () {
    const ligau = `/tutores/${Math.floor(Math.random() * 10) + 1}`;
    return (
        <div className='mx-5 mt-16'>
            <AddButton />
            <div className='fixed w-full -mx-5 px-4 pb-4 bg-white shadow z-[5]'>
                <input className="w-full px-2 py-1 rounded-md border-slate-400 focus:border-hospMorado focus:ring-hospMorado "  placeholder="Buscar Tutor" type="text" name="patientSearch" id="patientSearch" />   
            </div>

            <div className="pt-16 z-0">
                <Card tipo='tutor' titulo='Nombre del Tutor' subtitulo='Paciente 1 | Paciente 2' liga={ligau} />
                <Card tipo='tutor' titulo='Nombre del Tutor' subtitulo='Paciente 1 | Paciente 2' liga={ligau} />
                <Card tipo='tutor' titulo='Nombre del Tutor' subtitulo='Paciente 1 | Paciente 2' liga={ligau} />
                <Card tipo='tutor' titulo='Nombre del Tutor' subtitulo='Paciente 1 | Paciente 2' liga={ligau} />
                <Card tipo='tutor' titulo='Nombre del Tutor' subtitulo='Paciente 1 | Paciente 2' liga={ligau} />
                <Card tipo='tutor' titulo='Nombre del Tutor' subtitulo='Paciente 1 | Paciente 2' liga={ligau} />
                <Card tipo='tutor' titulo='Nombre del Tutor' subtitulo='Paciente 1 | Paciente 2' liga={ligau} />
                <Card tipo='tutor' titulo='Nombre del Tutor' subtitulo='Paciente 1 | Paciente 2' liga={ligau} />
                <Card tipo='tutor' titulo='Nombre del Tutor' subtitulo='Paciente 1 | Paciente 2' liga={ligau} />
                <Card tipo='tutor' titulo='Nombre del Tutor' subtitulo='Paciente 1 | Paciente 2' liga={ligau} />
            </div>

            <div className='pb-40 pt-5 text-center'><h3>Fin de Resultados</h3></div>

        </div>
        
    )
}