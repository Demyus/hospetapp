import { useRouter } from "next/navigation";
import { usePathname } from 'next/navigation';
import Nav from "./Nav";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";
import { useEffect } from "react";


export default function Header () {
    const sessionIn = useSelector(state => state.sessionSlice);
    const router = useRouter();
    const pathname = usePathname();
    
    useEffect(()=>{
        if(!sessionIn.loggedIn) {
            router.push('/');
        }
    },[sessionIn])
    

    return (
        <>
        { sessionIn.loggedIn && <Nav /> }
        { sessionIn.loggedIn && <Navbar title={pathname} /> }
        </>
    )
}

