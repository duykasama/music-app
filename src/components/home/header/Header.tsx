import {BreadCrumb} from "@/components/home/header/BreadCrumb";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBell} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import avatar from "../../../../public/anonymous-avatar.jpg";

export const Header = () => {
    return (
        <div className="flex justify-between items-center">
            <BreadCrumb />
            <div className="flex justify-center items-center gap-2">
                <button className="bg-neutral-600 rounded-full p-1.5">
                    <FontAwesomeIcon icon={faBell} width={20}/>
                </button>
                <button className="bg-neutral-600 rounded-full p-1.5">
                    <Image src={avatar} width={20} height={20} alt="Avatar"/>
                </button>
            </div>
        </div>
    );
};