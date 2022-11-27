import React, {useEffect, useState} from 'react'
import { RefreshIcon, } from '@heroicons/react/outline'
import PlayerBox  from './PlayerBox'
import PlayerComponent from './PlayerComponent'
import {toast} from 'react-hot-toast'
import Link from 'next/link'
import Loader, {Triangle, TailSpin,  Dna} from "react-loader-spinner";


function Feed() {
//    const [players, setPlayers]=useState<Player[]>(playersProp);
    const[username, setUsername]=useState("");
    const[country, setCountry]=useState("");
    const[level, setLevel]=useState("");
    const[players, setPlayers]=useState(null);

    useEffect(() => {
        fetchPlayers();
    },[])

    const fetchPlayers = async() => {
    try {
      const response = await fetch ("/api/players", {
           method: "GET",
           headers: {"Content-Type": "application/json"}
      });
      setPlayers(await response.json());
/*        console.log("players");
        console.log(await response);
        console.log(await response.json());*/
       // console.log(players);
      if (response.status !== 200){
        console.log("something went wrong"+response);
       } else {
       }
    } catch (error) {
      console.log("there was an error reading from the db, " , error)
    }
    }


    const handleRefresh = async () => {
        const refreshToast = toast.loading('Refreshing...');
        const players = await fetchPlayers();
        console.log("players");
        setTimeout(()=>{console.log(players)},3000);
           // setPlayers(players);
        toast.success('Feed updated !',{

            id: refreshToast,
        })
    }

    
    return(
       <>
        <div className="lg:col-span-1"></div>
            <div className="col-span-9  lg:col-span-7  ">
                <div className="flex items-center justify-between">
                </div>
                <div className="px-5 md:px-1">
                <PlayerBox players={players} setPlayers={setPlayers} />
                </div>
                    {/* line above players columns names and refresh */ }
                <div className=" grid grid-cols-1 md:grid-cols-5 md:space-x-4 px-5 md:px-1"> 
                   <Link href="calculate/calculate" > 
                    <div className="col-span-3 rounded-xl flex  my-5 p-4 bg-blue-500 cursor-pointer hover:bg-blue-600 items-center text-white font-bold">
                     <span>Start Calculating Now !
                     </span>
                    </div>
                    </Link>
                    
                    <div onClick={handleRefresh} className=" cursor-pointer hover:bg-blue-600 flex justify-between col-span-2 items-center rounded-xl my-0 mb-5 md:my-5 p-4 bg-blue-500 text-white font-bold">
                                
                        <span>Refresh Ranking</span> 
                        <span>
                             <RefreshIcon 
                                className=" h-8 w-8 cursor-pointer font-bold
                                hover:rotate-180 active:scale-125  text-white
                                transition-all duration-500 ease-out " title="Refresh" /> 
                        </span>
                    </div>
            </div>
    {/* Feed */}

        <div>
                 <div className="flex flex-col space-x-3 boder-gray-100 py-1 px-5 md:px-1"> 
                   <div className=" grid grid-cols-4 md:grid-cols-4">
                         <div className="items-center space-x-3 text-gray-600 font-bold">
                                #
                            </div>
                       <div className="items-center space-x-3 text-gray-600 font-bold">
                            Country
                         </div>
                        <div className="items-center space-x-3 text-gray-600 font-bold">
                            Name
                        </div>
                        <div className=" flex justify-end items-center space-x-3 text-gray-600 font-bold">
			                  Level 
                        </div>
                        {/*<div className=" hidden md:flex justify-end items-center space-x-3 text-gray-600 font-bold">
                               Last Updated     
                        </div>*/} 
                    </div>
                    

               </div>
       {players?.map((player, index) => (
        <PlayerComponent index={index} key={player.id} player={player} />
        )):

       
   <div className=" flex justify-center  items-center">                 
		        <TailSpin
          height="180"
          width="180"
          color="#3b82f6"
          ariaLabel="tail-spin-loading"
          radius="1"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />

</div>

}
    </div>
    </div>
    <div></div>
    </>
    )
}



export default Feed;
