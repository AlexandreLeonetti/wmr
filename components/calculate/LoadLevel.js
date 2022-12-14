import {  signIn, signOut, useSession, getSession } from 'next-auth/react';
import React, {useEffect, useState} from 'react';
import Loader, {Triangle, TailSpin} from "react-loader-spinner";
import Levels from './Levels';

function LoadLevel(props) {

    const[level, setLevel]=useState('');
    const [loader, setLoader] = useState(true);  

    const getSingleLevel =  async (req, res) => {
            try {
                    const session = await getSession({ req });
                    const email = session.user.email;

                    const result = await fetch( `/api/getSingleLevel?user=${email}`, {
                        method: 'GET',
                        headers: {"Content-Type": "application/json"}
                     })

                    const jsonData = await result.json();
                    setLevel(jsonData.level);        

                    if(result.status !==200){
                        console.log("something went wrong");
                        setLevel(1);
                    }
                    return jsonData.level;
            }catch (error){
                         setLevel(1);
                console.log("there was an error reading from the db to get the level, " , error);
            }
        }


    useEffect(() => {
         getSingleLevel();
    },[])

    useEffect(() => {
        props.greetHandler(level);
    },[level]);


    return(
        <>
        {/** Type : inline */}
        {
            level===''?
        ( <div className=" mt-28 flex justify-center  items-center">                 
		        <TailSpin
          height="180"
          width="180"
          color="#34d399"
          ariaLabel="tail-spin-loading"
          radius="1"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />

        </div>)


            :

                (
                   <div	className=" inline-flex items-center justify-center">
				        <div className="py-20 inline-flex items-center justify-center">
  	  		                <button 
				    	        className="disk bg-emerald-400 text-4xl text-white w-40 font-black inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-2xl shadow-sm text-base" 
                                onClick={props.flashHandler}
					         > Level {level}</button>
					         <div className="circle bg-emerald-500"></div>
	  					     <div className="circle bg-emerald-500 delay1"></div>
						     <div className="circle bg-emerald-500 delay2"></div>
						     <div className="circle bg-emerald-500 delay3"></div>
				        </div>
                    </div>

                )
        }

        </>
    )

}


export default LoadLevel;

