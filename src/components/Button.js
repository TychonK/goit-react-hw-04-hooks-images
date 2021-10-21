import { useState, useEffect } from 'react'

export function Button({pageCount, givenPage}) {
    const [page, setPage] = useState(1)

    useEffect(async () => {
        if (page != givenPage) {
            await setPage(givenPage)
        }
    }, [givenPage])

    const incrementPage = async() => {
        await setPage(page + 1)
        await pageCount(page)
    }

    return (
            <button
                type="button"
                className="Button"
                onClick={incrementPage}
            >Load More
            </button>
        )
}