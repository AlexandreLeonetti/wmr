import React from 'react'
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
import SidebarRow from './Siderow'
import {  signIn, signOut, useSession } from 'next-auth/react'

function Sidebar () {
    const { data : session } = useSession();
    return(
      <div className=" hidden lg:inline flex flex-col col-span-2 items-center px-4 md:items-start">
	<HomeIcon className="h-10 w-10 m-3" />
       <SidebarRow Icon={BookmarkIcon} title="Ranking" destination=""/>
       <SidebarRow Icon={HashtagIcon}  title="Calculate" destination="calculate/calculate" />
       <SidebarRow Icon={HashtagIcon}  title="Train" destination=""/>
       <SidebarRow  destination="" 
                    onClick={session ? signOut : signIn } 
                    Icon={UserIcon} title={session ? 'Sign Out' : 'Sign In'} />
      </div>


    )
}



export default Sidebar;
