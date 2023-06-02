import Link from "next/link";

export default function MenuItem({title, address, Icon}) {
    return (
        <div className="mx-4">
            <Link href={address} className="hover:text-blue-700 hover:underline" >
                <Icon className='block md:hidden  ' />
                <p className="hidden md:block">{title}</p>
            </Link>
        </div>
    )
}