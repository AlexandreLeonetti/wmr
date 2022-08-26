import React, {useEffect, useState} from 'react'
import {
        BellIcon,
        HashtagIcon,
        BookmarkIcon,
        CollectionIcon,
        DotsCircleHorizontalIcon,
        MailIcon,
        UserIcon,
        HomeIcon,
        } from '@heroicons/react/outline'
import Topelement from './Topelement'
import Topleft from './Topleft'
import {  signIn, signOut, useSession, getSession } from 'next-auth/react'


async function handler (req, res){
            const session = await getSession({ req });
            console.log(session);
            }
        

function Topbar (  Props) {
    const { data : session } = useSession();
    const[players, setPlayers]=useState(null);
    useEffect(() => {
        fetchPlayers();
    },[])

const fetchPlayers = async() => {
console.log("fetching players");
try {
  const response = await fetch ("/api/players", {
       method: "GET",
       headers: {"Content-Type": "application/json"}
  });
  setPlayers(await response.json());
  if (response.status !== 200){
    console.log("something went wrong"+response);
   } else {
   }
} catch (error) {
  console.log("there was an error reading from the db, " , error)
}
}



    console.log({data:session});
    handler()
    

      return(
      <div className=" border-b border-grey-100 bg-white ">
        <div className="lg:max-w-6xl md:flex md:justify-between py-1 mx-auto ">
        <div className=" hidden md:flex md:justify-start text-xs md:items-start">
          {Props.topStats == true && <> <Topleft text="Countries" value={"dummy"} />
            <Topleft text="Players" value={players?players.length:"none"} />
            <Topleft text="Top Country" value="Dummy" />
            <Topleft text="Fastest Player" value="Dummy" />
            </>
            }
        </div>
        <div className="w-auto"></div>
        <div className=" flex  justify-center md:justify-end  text-xs items-center space-x-2 ">
            <Topelement Icon={BookmarkIcon} title="Ranking" destination="/"/>
            <Topelement Icon={HashtagIcon}  title="Calculate" destination="/calculate/calculate" />
            <Topelement Icon={HashtagIcon}  title="Train" destination="/train/train"/>
            <Topelement  destination="" 
                    onClick={session ? signOut : signIn } 
                    Icon={UserIcon} title={session ? 'Log Out' : 'Log In'} />
        </div>
        </div>
     </div>


    )
}



export default Topbar;
