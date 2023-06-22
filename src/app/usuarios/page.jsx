'use client';
import AddButton from "@/components/AddButton";
import Card from "@/components/Card";
import Title from "@/components/Title";

export default function Usuarios () {
    return (
        <div className='mx-5 mt-16'>
            <AddButton />
            <div className='fixed w-full -mx-5 px-4 pb-4 bg-white shadow z-[5]'>
                <input className="w-full px-2 py-1 rounded-md border-slate-400 focus:border-hospMorado focus:ring-hospMorado "  placeholder="Buscar Usuario" type="text" name="patientSearch" id="patientSearch" />   
            </div>

            <div className="pt-16">
                
                <Title title='Admin' />
                <Card tipo='usuario' titulo='Nombre Apellido' subtitulo='usuario@hospetal.com.mx' liga='#' />
                <Card tipo='usuario' titulo='Nombre Apellido' subtitulo='usuario@hospetal.com.mx' liga='#' />
                <Card tipo='usuario' titulo='Nombre Apellido' subtitulo='usuario@hospetal.com.mx' liga='#' />
                <Card tipo='usuario' titulo='Nombre Apellido' subtitulo='usuario@hospetal.com.mx' liga='#' />
                <Title title='Recepción' />
                <Card tipo='usuario' titulo='Nombre Apellido' subtitulo='usuario@hospetal.com.mx' liga='#' />
                <Card tipo='usuario' titulo='Nombre Apellido' subtitulo='usuario@hospetal.com.mx' liga='#' />
                <Title title='Vet' />
                <Card tipo='usuario' titulo='Nombre Apellido' subtitulo='usuario@hospetal.com.mx' liga='#' />
                <Card tipo='usuario' titulo='Nombre Apellido' subtitulo='usuario@hospetal.com.mx' liga='#' />
                <Title title='Estética' />
                <Card tipo='usuario' titulo='Nombre Apellido' subtitulo='usuario@hospetal.com.mx' liga='#' />
                <Card tipo='usuario' titulo='Nombre Apellido' subtitulo='usuario@hospetal.com.mx' liga='#' />
            </div>

            <div className='pb-40 pt-5 text-center'><h3>Fin de Resultados</h3></div>

        </div>
        
    )
}