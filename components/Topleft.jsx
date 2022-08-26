import React, {SVGProps} from 'react'
import Link from 'next/link'


function Topelement ( {text, value, onClick}=Props) {
    return(
        <div    className=" text-gray-500 flex group items-center space-x-2 px-1 py-4
                           transition-all duration-200">
               
             <p className="hidden md:inline-flex "> 
              {text } :  <span className="px-2 text-blue-700">{value}     </span> 
             </p>
        </div>
)
}


export default Topelement;
