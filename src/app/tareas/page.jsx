'use client';

import AddButton from '@/components/AddButton';
import Title from '@/components/Title';
import TareaDay from '@/components/tareaDay';
import { Tab } from '@headlessui/react';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

export default function Tareas () {
    return (
        <div className='mx-5 pt-16'>
            <AddButton />
            <div className='fixed w-full -mx-5 px-4 pb-4 bg-white shadow z-[5]'>
                <input className="w-full px-2 py-1 rounded-md border-slate-400 focus:border-hospMorado focus:ring-hospMorado "  placeholder="Buscar" type="text" name="patientSearch" id="patientSearch" />   
            </div>
            <div className='pt-20'>
            
               <Title title='Junio' />

                <TareaDay dia='LUN' fecha='16' eventos='4' />
                <TareaDay dia='MAR' fecha='17' eventos='2' />
                <TareaDay dia='mie' fecha='18' eventos='3' />
                <TareaDay dia='Jue' fecha='19' eventos='1' />
                    
                <Title title='Agosto' />
                    
                <TareaDay dia='Vie' fecha='20' eventos='3' />
                <TareaDay dia='Sab' fecha='21' eventos='3' />
                <TareaDay dia='Dom' fecha='22' eventos='3' />
            </div>

            <div className='pb-40 pt-5 text-center'><h3>Fin de Resultados</h3></div>
        </div>
    )
}