'use client';
import { useDispatch } from "react-redux";
import { sessionActions } from "@/store/session";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

import Image from "next/image";
import { useEffect } from "react";

// Fix the problem for "search params object is empty in production with next 13 app dir"
export const dynamic = "force-dynamic"; 

export default function HomeLogin() {
  const sessionIn = useSelector(state => state.sessionSlice);
  const dispatch = useDispatch();
  const router = useRouter();
  
  const logIn = (e) => {
    e.preventDefault();
    router.push(`/agenda`);
    dispatch(sessionActions.logIn());

  }

  useEffect(()=>{
      if(sessionIn.loggedIn) {
          router.push('/agenda');
      }
  },[sessionIn])

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col   px-6 py-12 lg:px-8" style={{background: 'url(/homePic.jpg) center bottom no-repeat'}}>
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Image src={'/hospetal_logo.svg'} width={157} height={78} alt="Hospetal Logo"  />
          <h2 className="mt-10 text-2xl font-bold leading-9 tracking-tight text-gray-900">Inicia sesión</h2>
          <p className="introTxt">Hola! Introduce tu cuenta para poder accesar al sistema. </p>
        </div>

        <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={logIn}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900" >Correo</label>
              <div className="mt-2">
                <input id="email" name="email" type="email" autoComplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900" >Clave</label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-hospMorado hover:text-indigo-500" >Olvide la Clave</a>
                </div>
              </div>
              <div className="mt-2">
                <input id="password" name="password" type="password" autoComplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>

            <div>
              <button type="submit" className="flex w-full justify-center rounded-md bg-hospMorado px-3 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" >
                Entrar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
