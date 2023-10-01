import {Header} from "@/components/nav/library/Header";
import {PlayList} from "@/components/nav/library/PlayList";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch, faCaretDown} from "@fortawesome/free-solid-svg-icons";

export const Library = () => {
    return (
        <>
            <div className="w-full h-full flex flex-col justify-start gap-2">
                <Header />
                <section className="flex flex-col gap-2">
                    <button className="w-fit bg-neutral-700 py-1 px-3 rounded-3xl">Playlist</button>
                    <div className="flex justify-between items-center">
                        <button className="text-white">
                            <FontAwesomeIcon icon={faSearch} width={20}/>
                        </button>
                        <button className="flex justify-center items-center gap-1">
                            <span>Recents</span>
                            <FontAwesomeIcon icon={faCaretDown} width={15}/>
                        </button>
                    </div>
                    <ul>
                        <li>
                            <PlayList />
                        </li>
                    </ul>
                </section>
            </div>
        </>
    );
};