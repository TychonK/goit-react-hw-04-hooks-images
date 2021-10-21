import { useState, useEffect } from 'react'
import { FetchPhotos } from '../searchService';

export function Searchbar({addImages, loadMore, givenPage, annulePage, isLoading}) {
    const [query, setQuery] = useState('')
    const [page, setPage] = useState(1)

    useEffect(async() => {
       if (page != givenPage) {
           await setPage(givenPage)
            isLoading(true)
            let newData;
            await FetchPhotos(query, page).then((data) => { newData = data })
            isLoading(false);
            loadMore(newData)
        } 
    }, [givenPage])

    const handleSearch = async(e) => {
        e.preventDefault()

        let initialPage = 1;
        await annulePage(initialPage)

        let arrData;
        await FetchPhotos(query, page).then((data) => { arrData = data })
        addImages(arrData)
    }

    const handleChange = (e) => {
        setQuery(e.target.value)
    }

    return (
            <header className="Searchbar">
            <form className="SearchForm" onSubmit={handleSearch}>
                <button type="submit" className="SearchForm-button">
                <span className="SearchForm-button-label">Search</span>
                </button>

                <input
                className="SearchForm-input"
                name="searchQuery"
                type="text"
                autoComplete="off"
                autoFocus
                        placeholder="Search images and photos"
                        onChange={handleChange}
                />
            </form>
            </header> 
        )
}
