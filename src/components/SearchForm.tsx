import { useJobItemsContext } from "../contexts/JobItemsContextProvider";
import { useSearchContext } from "../contexts/SearchContextProvider";



export default function SearchForm() {
    const { searchValue, setSearchValue } = useSearchContext();
    const { handleSearchText } = useJobItemsContext();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
        handleSearchText();
    }

    return (
        <form action="#" onSubmit={handleSubmit} className="search">
            <button type="submit">
                <i className="fa-solid fa-magnifying-glass"></i>
            </button>

            <input
                value={searchValue}
                onChange={onChange}
                spellCheck="false"
                type="text"
                required
                placeholder="Find remote developer jobs..."
            />
        </form>
    )
}