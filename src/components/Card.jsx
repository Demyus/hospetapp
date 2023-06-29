import Image from "next/image";
import Link from "next/link";
import {RxCaretRight} from 'react-icons/rx';


export default function Card ({tipo, titulo, subtitulo, liga}) {
    let imagePic = 't' + (Math.floor(Math.random() * 6) + 1);
    let hide = false;

    if(tipo === 'paciente') {
        imagePic = 'm' + (Math.floor(Math.random() * 6) + 1);    
    } 
    if(tipo === 'anamnesis') {
        hide = true;
    }

    
    return (
        <div className="cursor-pointer p-3 mb-2 rounded-md group hover:bg-amber-300 border border-gray-200  shadow-md bg-white relative">
            <Link href={`${liga}`}>
            <div className="flex ">
                {hide || <Image className="mr-2" src={`/${imagePic}.png`} width={40} height={40} alt="Nombre Paciente" /> }
                <div>
                    <h2 className="truncate text-lg font-bold leading-4">{titulo}</h2>
                    {subtitulo && (<div className="text-sm mt-1">
                        <span className="leading-4 text-slate-500">{subtitulo}</span>
                    </div>)}
                    
                </div>
            </div>
                <RxCaretRight className={`absolute right-2 ${ hide && !subtitulo ? 'bottom-1' : 'bottom-4'} text-slate-500 text-3xl`} />
            </Link>
        </div>
        
    )
}