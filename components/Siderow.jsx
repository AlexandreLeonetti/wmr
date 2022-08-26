import React, {SVGProps} from 'react'
import Link from 'next/link'


function SidebarRow ( Icon, title, destination, onClick=Props) {
    return(
        <div    onClick={() => onClick?.()}
                className="max-w-fit flex group cursor-pointer items-center space-x-2 px-4 py-3
                           rounded-full hover:bg-gray-100  transition-all duration-200">
                    <Link href={destination}>
                        <Icon className="h-6 w-6"/>
                    </Link>
             <p className="hidden md:inline-flex group-hover:text-emerald-400"> 
                    <Link href={destination}>
                        {title}
                    </Link>
             </p>
        </div>
)
}


export default SidebarRow;
