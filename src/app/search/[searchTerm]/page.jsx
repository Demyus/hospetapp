import Results from "@/components/Results";

async function searchMovies(searchTerm) {
    const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${searchTerm}&language=en-US&include_adult=false`);
    if(!res.ok){
        throw new Error('error fetching data');
    }

    const data = await res.json();
    return data.results;
}

export default async function SearchPage({params}) {
    const results = await searchMovies(params.searchTerm);


    return (
        <div>
            { results && results.length === 0 && (
                <h1 className="text-center pt-6">No results found</h1>
            )}
            { results && <Results results={results}  /> }
        </div>
    )
}