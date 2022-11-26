import React, {useEffect, useState} from 'react'


function LoadLevel(props) {
        const[level, setLevel]=useState('');
        
const getSinglelevel =  async () => {
            console.log(props.sessionUnit.data.user.email);
            const email = props.sessionUnit.data.user.email;
            console.dir(props.sessionUnit);
            try {

            const result = await fetch( `/api/getSingleLevel?user=${email}`, {
                method: 'GET',
                headers: {"Content-Type": "application/json"}
            })

            const jsonData = await result.json();
                console.log(level);
                setLevel(jsonData.level);        
                console.log(level);
            
               if(result.status !==200){
                   console.log("something went wrong");
               }
                return jsonData;
            }catch (error){
                console.log("there was an error reading from the db to get the level, " , error);
            }
        }


    useEffect(() => {
        getSingleLevel();
    },[])




    return(
        <>

				    <div	className=" inline-flex items-center justify-center">
				        <div className="py-20 inline-flex items-center justify-center">
  	  		                <button 
				    	        className="disk bg-emerald-400 text-4xl text-white w-40 font-black inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-2xl shadow-sm text-base" 
					         > Level {level}</button>
					         <div className="circle bg-emerald-500"></div>
	  					     <div className="circle bg-emerald-500 delay1"></div>
						     <div className="circle bg-emerald-500 delay2"></div>
						     <div className="circle bg-emerald-500 delay3"></div>
				        </div>
                    </div>

        </>
    )

}


export default LoadLevel;

