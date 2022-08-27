import React, {useState} from 'react';
import { signIn, signOut, useSession } from 'next-auth/react';
import In from './In';
function SaveLevel (props) {

        const {data : session}                   =   useSession()               ;
        const [input        , setInput      ]    =   useState('')               ;
        const [country      , setCountry    ]    =   useState('')       ;
    	const [level        , setLevel      ]    =   useState(null)         ;
        const [blockPlayer  , setBlockPlayer]    =   useState(false)   ;
        const [nameOfPlayer , setName       ]    =   useState('')       ;
        /*const postPlayer                    =    async () => {
                                                    const playerInfo: PlayerBody = {
                                                        username: session?.user.name || 'Unkown User',
                                                        country : country ,
                                                        level :  parseInt(level) ,
                                                        blockPlayer : blockPlayer,
                                                    } 
		                                            setCountry('_');
        
                                                    const result   =    await fetch(`/api/addPlayer`, {
                                                        body: JSON.stringify(playerInfo),
                                                        method:'POST',
                                                    })
                
                                                    const jsonData = await result.json();
                                                    const newPlayers = await fetchPlayers();
                                                    setPlayers(newPlayers)

                                                    toast('Player Posted', {
                                                                        icon:''
                                                                })
                                                    return jsonData;
                                                }
 

*/

    const displayUsrContent = () => {
           const playerData = [country, props.level, nameOfPlayer, session.user.name]
           console.log(playerData);
           return playerData; 
        
    }
    return (
        <>
    	<In 
               onClick={session ? ()=> displayUsrContent() : signIn}
               title={session ? 'Log Out' : 'Log In'}    

		/> 
        </>
    )
}


export default SaveLevel ;
