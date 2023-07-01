'use client'
import { useRouter } from "next/navigation";

import Image from "next/image";
import {SlCamera} from 'react-icons/sl';
import {AiOutlineMail} from 'react-icons/ai';
import {TbUser} from 'react-icons/tb';
import {BsTelephone} from 'react-icons/bs';
import {MdVpnKey} from 'react-icons/md';
import CardContainer from "@/components/CardContainer";

export default function Perfil () {
    const router = useRouter();

    const gotoUsers = () => {
        router.push('/usuarios')
    }

    const edit = () => {
        router.push('/perfil/editar/29')
    }

    return (
        <div className="mt-28 mx-5">
            <div className="relative max-w-[158px] max-h-[158px] mx-auto mb-6">
                <Image className="mt-4 mx-auto" src='/placeholder2.png' width={156} height={156} alt="Foto" />
            </div>
            <CardContainer>
            <div className="max-w-[290px] mx-auto py-2">
                <div className="text-xl mb-3">
                    <TbUser className="inline -mt-2" /> Karla Ulloa
                </div>
                <div className="text-xl mb-3">
                    <AiOutlineMail className="inline -mt-2" /> karla@hospetal.com.mx
                </div>
                <div className="text-xl mb-3">
                    <BsTelephone className="inline -mt-2" /> {'(646)'} 176 5692
                </div>
                <div className="text-xl mb-3">
                    <MdVpnKey className="inline -mt-2" /> Administrador General
                </div>
                <div>
                    <button onClick={edit} className="rounded-md bg-hospMorado text-white px-4 py-2 mr-3">Editar Perfil</button>
                    <button onClick={gotoUsers} className="rounded-md bg-hospVerde text-white px-4 py-2">Usuarios</button>
                </div>
            </div>
            </CardContainer>


        </div>
        
    )

}