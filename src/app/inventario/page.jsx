import Image from "next/image";

export default function Inventario () {
    return (
        <div className='mx-5 mt-36 flex text-center flex-col h-full '>            
            <Image className="mix-blend-darken mx-auto" src='/homePic.jpg' width={280} height={238}  />
            <h1 className="text-2xl rounded-md font-bold bg-hospMorado text-white py-3">Próximamente...</h1>
        </div>
        
    )
}