
'use client'
import { useRouter } from "next/navigation";

import Image from "next/image";
import {SlCamera} from 'react-icons/sl';
import {AiOutlineMail} from 'react-icons/ai';
import {TbUser} from 'react-icons/tb';
import {BsTelephone} from 'react-icons/bs';
import {MdVpnKey} from 'react-icons/md';
import CardContainer from "@/components/CardContainer";
import Card from "@/components/Card";

export default function EditProfile ({params}) {
    const router = useRouter();
    const userId = params.id;

    const gotoUsers = () => {
        router.push('/perfil')
    }

    const gotoProfile = () => {
        router.back();
    }

    return (
        <div className="mt-28 mx-5">
            <div className="relative max-w-[158px] max-h-[158px] mx-auto mb-6">
                <button className="bg-hospMorado rounded-full p-3 absolute bottom-0 right-0 ">
                    <SlCamera className='text-white text-2xl' />
                </button>
                <Image className="mt-4 mx-auto" src='/placeholder2.png' width={156} height={156} alt="Foto" />
            </div>
            
        <CardContainer>
            <div className="max-w-[290px] mx-auto">
                <div className="text-base font-bold mb-3">
                    <TbUser className="inline -mt-2" /> Nombre
                    <input 
                        className="w-full font-normal px-2 py-1 rounded-sm border-slate-300 focus:border-hospMorado focus:ring-hospMorado " 
                        name="nombre" 
                        id="nombre" 
                        placeholder="Nombre Apellido" 
                        type="text" />
                </div>
                <div className="text-base font-bold mb-3">
                    <AiOutlineMail className="inline -mt-2" /> Correo
                    <input 
                        className="w-full font-normal px-2 py-1 rounded-sm border-slate-300 focus:border-hospMorado focus:ring-hospMorado " 
                        name="correo" 
                        id="correo" 
                        placeholder="usuario@correo.com" 
                        type="email" />
                </div>
                <div className="text-base font-bold mb-3">
                    <BsTelephone className="inline -mt-2" /> Teléfono <br></br>
                    <input 
                        className="w-16 mr-1 font-normal px-2 py-1 rounded-sm border-slate-300 focus:border-hospMorado focus:ring-hospMorado " 
                        name="lada" 
                        id="lada" 
                        placeholder="(646)" 
                        type="tel" />
                    <input 
                        className=" font-normal px-2 py-1 rounded-sm border-slate-300 focus:border-hospMorado focus:ring-hospMorado " 
                        name="tel" 
                        id="tel" 
                        placeholder="1765692" 
                        type="tel" />
                </div>
                <div className="text-base font-bold mb-3">
                    <MdVpnKey className="inline -mt-2" /> Tipo de Cuenta
                    <span className="block font-normal ml-5 my-2">
                        <input className="mr-2" type="radio" name="tipoCuenta" id="tipoCuenta1" defaultChecked />
                        <label for="tipoCuenta1">Administrador General</label>
                     </span>
                    <span className="block font-normal ml-5 mb-2">
                        <input className="mr-2" type="radio" name="tipoCuenta" id="tipoCuenta2" />
                        <label for="tipoCuenta2">Recepción</label>
                     </span>
                    <span className="block font-normal ml-5 mb-2">
                        <input className="mr-2" type="radio" name="tipoCuenta" id="tipoCuenta3" />
                        <label for="tipoCuenta3">Veterinario</label>
                     </span>
                    <span className="block font-normal ml-5 mb-10">
                        <input className="mr-2" type="radio" name="tipoCuenta" id="tipoCuenta4" />
                        <label for="tipoCuenta4">Estética</label>
                     </span>
                </div>
                <div>
                    <button onClick={gotoProfile} className="rounded-md bg-hospMorado text-white px-4 py-2 mr-3">Cancelar</button>
                    <button onClick={gotoUsers} className="rounded-md bg-hospVerde text-white px-4 py-2">Grabar</button>
                </div>
               
            </div>
            </CardContainer>


        </div>
        
    )

}