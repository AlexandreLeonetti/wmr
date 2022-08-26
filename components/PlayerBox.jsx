import React, {useState, useRef}  from 'react'
import {
        SearchCircleIcon,
        EmojiHappyIcon,
        PhotographIcon,
        CalendarIcon,
        LocationMarkerIcon,
        }                         from '@heroicons/react/outline'
import {  useSession }            from 'next-auth/react'
import {toast}                    from 'react-hot-toast'




function PlayerBox ( ) {

        const {data : session}                   =   useSession()               ;
        const handleSubmit = ( e )=> {
                                   e.preventDefault()
                                    postPlayer()        ;
                                    setCountry('_')     ;
                                    setLevel('_')       ;
		                		    setInput('_')       ;
                                } 
        function countUnique(iterable) {
              return new Set(iterable).size;
        }

        /*console.log(countUnique(players.country))
        console.log(Array.from(players,x => x.country))
const countries = (Array.from(players,x => x.country))
console.log(countUnique(countries))*/
        return(
            <div className=" text-justify  px-1 py-4 md:p-9 md:bg-white rounded-xl shadow-md  mt-5">
                        <h1 className="mb-5 text-center text-xl font-bold"> World Mental Math Live Ranking
                        </h1>
                         <p>Here we are ranking the fastest mental math players in the entire world.
                            that's about {/*players.length*/} players from 
                            {/*countUnique(countries)*/} countries.
                        </p>
                        <p>To compete here you have to add numbers as fast as you can, 
                            and provide the correct result after the numbers stops flashing.
                        </p>
            </div>
        )
}



export default PlayerBox;
