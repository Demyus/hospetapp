

export default function Encabezado({title}) {
    return (
        <div className='flex flex-nowrap py-3 justify-center'>
            <div className='border-t w-full border-hospDark'></div>
            <div className='mx-3'>
                <h2 className='uppercase -mt-2 text-hospDark font-bold'>{title}</h2>
            </div>
            <div className='border-t w-full border-hospDark'></div>
        </div>
    )
}