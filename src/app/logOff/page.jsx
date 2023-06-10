'use client';

import { sessionActions } from "@/store/session";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux"


export default function logOff () {
    const loggedIn = useSelector(state => state.sessionSlice);
    const dispatch = useDispatch();
    const router = useRouter();

    if(loggedIn) {
        dispatch(sessionActions.logOff());
        router.push('/')
    }

    return (
        <div className="w-full h-full flex flex-wrap justify-center content-center">
            <h1>Cerrando Session...</h1>
        </div>
        
    )
}