import {VscAdd} from 'react-icons/vsc';
import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';

import {IoCalendarClearOutline} from 'react-icons/io5';
import {IoPawOutline} from 'react-icons/io5';
import {HiOutlineCube} from 'react-icons/hi';
import {LuEdit} from 'react-icons/lu';
import {TbUsers} from 'react-icons/tb';
import {TbUser} from 'react-icons/tb';
import {IoDocumentOutline} from 'react-icons/io5';


const userNavigation = [
    { name: 'Agenda',     href: '#', icon: IoCalendarClearOutline },
    { name: 'Paciente',   href: '#', icon: IoPawOutline  },
    { name: 'Tutor',      href: '#', icon: TbUser  },
    { name: 'Documento',  href: '#', icon: IoDocumentOutline  },
    { name: 'Inventario', href: '#', icon: HiOutlineCube  },
    { name: 'Proveedor',  href: '#', icon: HiOutlineCube  },
    { name: 'Tarea',      href: '#', icon: LuEdit  },
    { name: 'Usuario',    href: '#', icon: TbUsers  },
  ]

export default function AddButton() {
    return (
        <div className='fixed right-5 bottom-28 z-50'>            
            <Menu as="div" className="relative ml-3">
                        <div>
                          <Menu.Button className="flex max-w-xs items-center rounded-full bg-hospMorado text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                            <span className="sr-only">Agregar</span>
                            <button className='block p-3'>
                                <VscAdd className='text-white text-3xl ' />
                            </button>
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
                          <Menu.Items className="absolute right-0 bottom-16 z-10 mt-2 w-36  origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <p className='block px-4 py-2 text-sm font-bold'>Agregar</p>
                            {userNavigation.map((item) => (
                              <Menu.Item key={item.name}>
                                <a href={item.href} className='block px-4 py-2 text-sm text-gray-700'>
                                   <item.icon className='inline mr-2' /> {item.name}
                                </a>
                              </Menu.Item>
                            ))}
                          </Menu.Items>
                        </Transition>
                      </Menu>
        </div>
    )
}