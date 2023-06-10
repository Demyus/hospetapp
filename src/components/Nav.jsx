import MenuItem from "./MenuItem";
import {IoCalendarClearOutline} from 'react-icons/io5';
import {IoPawOutline} from 'react-icons/io5';
import {HiOutlineCube} from 'react-icons/hi';
import {LuEdit} from 'react-icons/lu';
import {TbUsers} from 'react-icons/tb';
import {TbUser} from 'react-icons/tb';



export default function Nav () {

    return (
        <div className="flex justify-between md:hidden w-full bg-hospGrey1 max-w-6xl sm:mx-auto items-center py-6 fixed bottom-0 border-t border-hospBorderGrey1">
            <div className="flex justify-evenly flex-nowrap w-full">
                <MenuItem title={'Agenda'}     address={'/agenda'}     Icon={IoCalendarClearOutline} />
                <MenuItem title={'Pacientes'}  address={'/pacientes'}  Icon={IoPawOutline} />
                <MenuItem title={'Tutores'}    address={'/tutores'}    Icon={TbUser} />
                <MenuItem title={'Inventario'} address={'/inventario'} Icon={HiOutlineCube} />
                <MenuItem title={'Tareas'}     address={'/tareas'}     Icon={LuEdit} />
                <MenuItem title={'Usuarios'}   address={'/usuarios'}   Icon={TbUsers} />
            </div>
        </div>
    )
}

