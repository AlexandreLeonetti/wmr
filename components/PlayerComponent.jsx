import React, {useEffect, useState} from 'react'
import {
        ChatAlt2Icon,
        SwitchHorizontalIcon,
        HeartIcon,
        UploadIcon,
        } from '@heroicons/react/outline'
import ReactCountryFlag from "react-country-flag"

function PlayerComponent ( {player, index}= Props ) {
const [time, setTime ] = useState("");

useEffect(() => {
		setTime(player._createdAt)
		},[]);
        return (
                <div className=" space-x-3 border-t boder-gray-100 py-1 px-5 md:px-1"> 
                   <div className=" grid grid-cols-4 md:grid-cols-5">
                        <div className="">{index+1}</div>
                        <div className=" items-center text-gray-400">
                        
                             {player.country? ( <ReactCountryFlag countryCode={player.country} svg />                            )
			    :
			    ( <ReactCountryFlag countryCode="US" svg />
                            )
			    }                           
                        </div>
                        <div className="items-center space-x-3 text-gray-600">
                            {player.username}
                        </div>
                        <div className=" flex justify-end items-center space-x-3 text-gray-600">
                            {player.level}                        
                        </div>
                        <div className=" hidden md:flex justify-end items-center space-x-3 text-gray-600">
			
{/*                            <TimeAgo
                                   className="text-sm text-gray-600"
                                   date={time} 


                                />*/} 
                        </div> 
                    </div>
                    

               </div>
)
}


export default PlayerComponent;
