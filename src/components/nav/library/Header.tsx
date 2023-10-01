import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faListUl, faPlus, faArrowRight} from "@fortawesome/free-solid-svg-icons";

export const Header = () => {
    return (
        <>
            <section className="w-full grid grid-cols-6 gap-1">
                <button className="col-span-4 flex justify-start items-center gap-3">
                    <FontAwesomeIcon icon={faListUl} width={20}/>
                    <span>Your Library</span>
                </button>
                <button className="col-span-1">
                    <FontAwesomeIcon icon={faPlus} width={20} />
                </button>
                <button className="col-span-1">
                    <FontAwesomeIcon icon={faArrowRight} width={20} />
                </button>
            </section>
        </>
    );
};