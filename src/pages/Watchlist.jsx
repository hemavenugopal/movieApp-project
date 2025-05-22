import React from 'react'
import { useContext, useState } from 'react'
import GenreFilter from '../components/GenreFilter'
import MovieCard from '../components/MovieCard'
import { WatchListContext } from '../context/WatchListContext'

const Watchlist = () => {
    const { watchlist,genreList } = useContext(WatchListContext);
    const [search,setSearch] = useState("")
    const [selectedGenre,setSelectedGenre]=useState("")

    const filteredMovies = watchlist.filter((movie)=>
        movie.title.toLowerCase().includes(search.toLowerCase())
    ).filter(movie => {
        return !selectedGenre || movie.genre_ids.includes(Number(selectedGenre))
    })
  return (
     <div className='p-4 pt-16'>
        <input type='text' placeholder='Search Movies...' 
        className='p-2 w-3/4 md:w-1/2 border rounder border-gray-700 bg-gray-800
        opacity-60 text-white backdrop-blur-md fixed top-16 left-1/2 transorm -translate-x-1/2 z-10'
        onChange={(e)=>setSearch(e.target.value)}/>
        <div className='mt-16 flex justify-center'>
            <GenreFilter genreList={genreList}
            setSelectedGenre={setSelectedGenre}/>
             </div>
             <div className="movies-container grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-16">
            {
                filteredMovies.map((movie)=>{
                    return <MovieCard key={movie.id} movie={movie} />
                })
            }
           
        </div>
       
        </div>
        
  )
}

export default Watchlist