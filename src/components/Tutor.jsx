import Image from "next/image";
import Link from "next/link";
import {RxCaretRight} from 'react-icons/rx';


export default function Tutor ({data}) {
    return (
        <div className="cursor-pointer p-3 mb-2 rounded-md group hover:bg-amber-300 border border-gray-200  shadow-md bg-white relative">
            <Link href={`#`}>
            <div className="flex ">
                <Image className="mr-2" src={`/t${Math.floor(Math.random() * 6) + 1}.png`} width={40} height={40} alt="Nombre Tutor" />
                <div>
                    <h2 className="truncate text-lg font-bold leading-4">Nombre del Tutor</h2>
                    <div className="">
                        <span className="leading-4 text-slate-500">Paciente 1 | Paiente 2 </span>
                    </div>
                </div>
            </div>
                <RxCaretRight className="absolute right-2 bottom-4 text-slate-500 text-3xl" />
            </Link>
        </div>
        
    )
}