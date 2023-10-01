import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHome, faSearch} from "@fortawesome/free-solid-svg-icons";
import {Library} from "@/components/nav/library/Library";

export const Nav = () => {
    return (
        <nav className="w-full h-full grid grid-rows-6 gap-2">
            <div className="row-span-1 bg-neutral-800 p-8 flex flex-col justify-between rounded-md">
                <button className="flex justify-start items-center gap-4">
                    <FontAwesomeIcon icon={faHome} width={25}/>
                    <span>Home</span>
                </button>
                <button className="flex justify-start items-center gap-4">
                    <FontAwesomeIcon icon={faSearch} width={25}/>
                    <span>Search</span>
                </button>
            </div>
            <div className="row-span-5 bg-neutral-800 rounded-md p-4">
                <Library />
            </div>
        </nav>
    );
};