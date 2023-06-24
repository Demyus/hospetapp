import Image from "next/image";
import Link from "next/link";

export default function Tarea ({titulo, subtitulo, usuario, liga}) {
    return (
        <div className="cursor-pointer px-3 py-2 mb-2 rounded-md group hover:bg-amber-300 border border-gray-200  shadow-md bg-white">
            <Link href={`#`}>
                <h2 className="truncate text-lg font-bold">{titulo}</h2>
                <div className="">
                    <span className="">{subtitulo}</span>
                    <span className="float-right inline">
                    Karla
                    <Image 
                    src={`/placeholder.png`} width={24} height={24} 
                    className="ml-2 inline" 
                    placeholder="blur" 
                    blurDataURL="/spinner.svg" 
                    alt="Imagen Responsable"
                    style={{
                        maxWidth: '100%',
                        height: 'auto'
                    }}
                    />
                    </span>
                </div>
            </Link>
        </div>
        
    )
}