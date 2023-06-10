import Link from "next/link";

export default function MenuItem({title, address, Icon}) {
    return (
        <div className="mx-2">
            <Link href={address} className="hover:text-blue-700 hover:underline text-center " >
                <Icon className='mx-auto text-2xl mb-1 text-hospMorado' />
                <p className="mx-auto text-xs text-hospMorado">{title}</p>
            </Link>
        </div>
    )
}