'use client';
import AddButton from "@/components/AddButton";
import Tutor from "@/components/Tutor";

export default function Tutores () {
    return (
        <div className='mx-5 mt-16'>
            <AddButton />
            <div className='fixed w-full -mx-5 px-4 pb-4 bg-white shadow z-[5]'>
                <input className="w-full px-2 py-1 rounded-md border-slate-400 focus:border-hospMorado focus:ring-hospMorado "  placeholder="Buscar Paciente" type="text" name="patientSearch" id="patientSearch" />   
            </div>

            <div className="pt-16">
                <Tutor />
                <Tutor />
                <Tutor />
                <Tutor />
                <Tutor />
                <Tutor />
                <Tutor />
            </div>

            <div className='pb-40 pt-5 text-center'><h3>Fin de Resultados</h3></div>

        </div>
        
    )
}