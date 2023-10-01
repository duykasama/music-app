import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronLeft, faChevronRight} from "@fortawesome/free-solid-svg-icons";

export const BreadCrumb = () => {
    return (
        <div>
            <button>
                <FontAwesomeIcon icon={faChevronLeft} width={15}/>
            </button>
            <button>
                <FontAwesomeIcon icon={faChevronRight} width={15}/>
            </button>
        </div>
    );
};