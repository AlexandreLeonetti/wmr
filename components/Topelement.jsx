import React, {SVGProps} from 'react'
import Link from 'next/link'


function Topelement ( {Icon, title, destination, onClick}=Props) {
    return(
        <>
          <Link className=""  href={destination}>
            <div    onClick={() => onClick?.()}
                className={`  font-bold cursor-pointer items-center space-x-2 px-4 py-2
                           rounded-lg hover:bg-gray-100  transition-all duration-200 border ` 
                            + (title=='Log In'? " text-white bg-blue-500 hover:bg-blue-700":" text-blue-500 border-blue-500")}>
                        {title}
            </div>
          </Link>
        </>
)
}


export default Topelement;
