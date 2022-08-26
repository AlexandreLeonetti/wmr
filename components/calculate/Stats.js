import React from 'react';
//import './Stats.css';

function Stats (props){
		const ratio =props.ratio.length+"/"+(props.hypothesis.length ) ;
const percents = (100*props.ratio.length/(props.hypothesis.length)).toFixed(2);
	return(
		<div className="Stats ">
					<div  className="">
				    <div className="bcontainer">
  	  		                <button 
				    	        className="disk bg-emerald-400 text-4xl text-white w-40 font-black inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-2xl shadow-sm text-base" 
				                onClick={props.startFlashing}
					         ><ul>
                                <li className="text-base">TRY</li>
                                <li>{props.contentBtn}</li>
                              </ul>
                            </button>

							{/*<div className="cover bg-emerald-300"></div>*/}
		      <div className="circle bg-emerald-500"></div>
			    <div className="circle bg-emerald-500 delay1"></div>
					<div className="circle bg-emerald-500 delay2"></div>
					<div className="circle bg-emerald-500 delay3"></div>
		    </div>
		  </div>
		<div className=" innerStats mt-10">
			<ul className="text-sm">
				<li className="grid grid-cols-2 h-12 mx-6 border-b border-gray-200 dark:border-gray-700 py-3 ">
					<div className="col-span-1" >Score </div><div className="col-span-1 text-right"> {ratio}</div> </li>
				<li className="h-12 grid grid-cols-2 mx-6 border-b border-gray-200 dark:border-gray-700 py-3">
					<div>Ratio </div><div className="text-right">{percents} %</div></li>
				<li className="grid grid-cols-2 h-12 mx-6 border-b border-gray-200 dark:border-gray-700 py-3">
					<div>Speed in numbers/min</div><div className="text-right"> {60/(props.period/1000)} </div></li>
			</ul>
		</div>
		</div>
	)
}

export default Stats;
