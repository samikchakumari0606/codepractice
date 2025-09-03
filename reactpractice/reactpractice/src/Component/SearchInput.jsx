import React, { useState, useEffect } from 'react'

const SearchInput = () => {

    const [query, setQuery] = useState("")
    const [result, setResult] = useState([])

    useEffect(() => {
        const delayDebounce = setTimeout(() => {
            if (query) {

                fetch(`https://api.example.com/search?q=${query}`)
                    .then((res) => res.json())
                    .then(data => setResult(data))
            }
        }, 2000)

        return () => clearTimeout(delayDebounce)

    }, [query])

    return (
        <div>
            <h3>{query}</h3>
            <input value={query} placeholder='enter your api search' onChange={(e) => setQuery(e.target.value)} />

            {
                result.map((i, id) => {
                    return (
                        <div key={id}>
                            <h2>{i.title}</h2>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default SearchInput
