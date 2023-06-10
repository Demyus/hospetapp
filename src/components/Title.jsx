

export default function Title({title}) {
    return (
        <div className='flex flex-nowrap mb-3'>
            <div className='mr-3'>
                <h2 className='uppercase -mt-2 text-slate-400 font-bold'>{title}</h2>
            </div>
            <div className='border-t w-full border-slate-400'></div>
        </div>
    )
}