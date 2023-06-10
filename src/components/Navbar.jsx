'use client'
import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { BellIcon } from '@heroicons/react/24/outline';
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { sessionActions } from "@/store/session";

import {TbUser} from 'react-icons/tb';
import {TfiSettings} from 'react-icons/tfi';
import {TfiHelpAlt} from 'react-icons/tfi';
import {RxExit} from 'react-icons/rx';

const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl: '/placeholder.png',
}
const navigation = [
  { name: 'Agenda', href: '/agenda', current: true },
  { name: 'Pacientes', href: '/pacientes', current: false },
  { name: 'Inventario', href: '/inventario', current: false },
  { name: 'Tareas', href: '/tareas', current: false },
  { name: 'Usuarios', href: '/usuarios', current: false },
]
const userNavigation = [
  { name: 'Ver Perfil', href: '#', icon: TbUser  },
  { name: 'Opciones',   href: '#', icon: TfiSettings  },
  { name: 'Ayuda',      href: '#', icon: TfiHelpAlt  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar({title}) {
  const loggedIn = useSelector(state => state.sessionSlice);
  const dispatch = useDispatch();
  const router = useRouter();

  let sectionTitle = title.split('');
  sectionTitle.shift();  
  if(sectionTitle[0]) { sectionTitle[0] = sectionTitle[0].toUpperCase(); }
  sectionTitle = sectionTitle.join('');

  const logOff = () => {
    dispatch(sessionActions.logOff());
    router.push('/');
  }

  return (
    <>
     <Disclosure as="nav" className="bg-white w-full fixed top-0 z-40 ">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <h1 className='text-2xl font-bold'>{sectionTitle}</h1>
                    </div>
                    <div className="hidden md:block">
                      <div className="ml-10 items-baseline space-x-4 hidden md:flex">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current
                                ? 'bg-hospMorado text-white'
                                : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                              'rounded-md px-3 py-2 text-sm font-medium'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="block">
                    <div className="ml-4 flex items-center md:ml-6">
                      <button
                        type="button"
                        className="rounded-full p-1 text-hospMorado  focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                      >
                        <span className="sr-only">View notifications</span>
                        <BellIcon className="h-6 w-6" aria-hidden="true" />
                      </button>

                      {/* Profile dropdown */}
                      <Menu as="div" className="relative ml-3">
                        <div>
                          <Menu.Button className="flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                            <span className="sr-only">Open user menu</span>
                            <img className="h-8 w-8 rounded-full" src={user.imageUrl} alt="" />
                          </Menu.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="absolute right-0 z-10 mt-2 w-52 origin-bottom-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className='px-4 py-2 flex flex-nowrap'>
                              <img className="h-8 w-8 rounded-full mr-2" src='/placeholder.png' alt="" />
                              <div className='flex flex-col'>
                                <span className='text-xs font-bold'>Karla Ulloa</span>
                                <span className='text-[10px]'>karla@hospetal.com.mx</span>
                              </div>
                            </div>
                            
                            {userNavigation.map((item) => (
                              <Menu.Item key={item.name}>
                                {({ active }) => (
                                  <a
                                    href={item.href}
                                    className={classNames(
                                      active ? 'bg-gray-100' : '',
                                      'block px-4 py-2 text-sm text-gray-700'
                                    )}
                                  >
                                  <item.icon className='inline mr-2' /> 
                                    {item.name}
                                  </a>
                                )}
                              </Menu.Item>
                            ))}
                              <Menu.Item key='logOffBtn'>
                                  <a href='#' onClick={logOff} className='block px-4 py-2 text-sm text-gray-700'>
                                   <RxExit className='inline mr-2' /> Cerrar Sesión
                                  </a>
                              </Menu.Item>
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </div>
                  </div>
                </div>
              </div>

            </>
          )}
        </Disclosure>
    </>
  )
}
