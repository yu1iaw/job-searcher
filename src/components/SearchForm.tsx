import { useSearchContext } from "../contexts/SearchContextProvider";



export default function SearchForm() {
    const { searchValue, setSearchValue } = useSearchContext();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    return (
        <form action="#" onSubmit={handleSubmit} className="search">
            <button type="submit">
                <i className="fa-solid fa-magnifying-glass"></i>
            </button>

            <input
                value={searchValue}
                onChange={e => setSearchValue(e.target.value)}
                spellCheck="false"
                type="text"
                required
                placeholder="Find remote developer jobs..."
            />
        </form>
    )
}