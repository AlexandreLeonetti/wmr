import React, {useState, useEffect} from 'react';
import { signIn, signOut, useSession } from 'next-auth/react';
import In from './In';
import {toast} from 'react-hot-toast';
function SaveLevel (props) {

        const {data : session}                   =   useSession()               ;
        const [input        , setInput      ]    =   useState('')               ;
        const [country      , setCountry    ]    =   useState('')       ;
    	const [level        , setLevel      ]    =   useState(null)         ;
        const [blockPlayer  , setBlockPlayer]    =   useState(false)   ;
        const [nameOfPlayer , setName       ]    =   useState('')       ;


        useEffect(() => {


            console.log("rendered saveLevel");

        },[]);



        const postPlayer                    =    async () => {
            console.log("postPlayer");
                                                    const playerInfo = {
                                                        username: session?.user.name || 'Unkown User',
                                                        country : country ,
                                                        level :  parseInt(level) ,
                                                        blockPlayer : blockPlayer,
                                                    } 
		                                            setCountry('fr');
        
                                                    const result   =    await fetch(`/api/updateLevel`, {
                                                        body: JSON.stringify(playerInfo),
                                                        method:'POST',
                                                    })
                
                                                    const jsonData = await result.json();
                                                    //const newPlayers = await fetchPlayers();
                                                    //setPlayers(newPlayers)

                                                    toast('Level Posted', {
                                                                        icon:''
                                                                });
                                                    return jsonData;
                                                }
 



    const displayUsrContent = () => {
           const playerData = [country, props.level, nameOfPlayer, session.user.name]
           console.log(playerData);
           return playerData; 
        
    }
    return (
       <>
        {/*if session true then have both log out and save level buttonsm
            call postPlayer with country level and so on with email as well
           the postPlayer function calls the api/addPlayer function. 
           should simply update if player already exist.

            */}
 
        	<ul className="text-sm">
				<li className="grid grid-cols-2 h-12 mx-6 border-b border-gray-200 dark:border-gray-700 py-3 ">
					<div className="col-span-1" >Score </div><div className="col-span-1 text-right"> {nameOfPlayer}</div> </li>
				<li className="h-12 grid grid-cols-2 mx-6 border-b border-gray-200 dark:border-gray-700 py-3">
					<div>Ratio </div><div className="text-right">{session.user.name} </div></li>
				<li className="grid grid-cols-2 h-12 mx-6 border-b border-gray-200 dark:border-gray-700 py-3">
					<div>Speed in numbers/min</div><div className="text-right"> {props.level} </div></li>
				<li className="grid grid-cols-2 h-12 mx-6 border-b border-gray-200 dark:border-gray-700 py-3">
					<div>Speed in numbers/min</div><div className="text-right"> {country} </div></li>

			</ul>

    	<In 
               onClick={session ? ()=> postPlayer() : signIn}
               title={session ? 'Log Out' : 'Log In'}    

		/> 
        </>
    )
}


export default SaveLevel ;
