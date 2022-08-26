import React from 'react';




function In ( {title, onClick}=props) {   
    return(
        <>
            <button className="mt-10 bg-white text-black font-black w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base"
 
                 onClick={() => onClick?.()}
             >
                {title}
            </button>
        </>
    )
}


export default In;
