import Image from "next/image";
import Link from "next/link";
import {FiThumbsUp} from 'react-icons/fi';

export default function Card2 ({result}) {
    return (
        <div className="cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200 group">
            
            <Link href={`/movie/${result.id}`}>
                <Image 
                    src={`https://image.tmdb.org/t/p/original/${result.backdrop_path || result.poster_path}`} width={500} height={300} className="sm:rounded-t-lg group-hover:opacity-80 transition-opacity duration-200" 
                    placeholder="blur" 
                    blurDataURL="/spinner.svg" 
                    alt="Image is not available"
                    style={{
                        maxWidth: '100%',
                        height: 'auto'
                    }}
                    />
                <div className="p-2">
                    <h2 className="truncate text-lg font-bold mb-2">{result.title || result.name}</h2>
                    <p className="line-clamp-3 text-sm">{result.overview}</p>
                    
                    <div className="mt-3">
                        <span className="float-left"><FiThumbsUp className="inline-block relative -mt-1"/> {result.vote_count} </span> 
                        <span className="float-right">{result.release_date || result.first_air_date}</span>
                    </div>
                    
                </div>
            </Link>
        </div>
        
    )
}