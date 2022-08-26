import {NextPage }         from 'next'
import Head                     from 'next/head'
import {Toaster}                from 'react-hot-toast'
import Topbar                   from '../../components/Topbar'


 import {useState, useEffect} from 'react'
import {Switch} from '@headlessui/react'
//import './App.css';
//import '../../components/Stats.css'
import ContainsFlashClass from '../../components/calculate/ContainsFlashClass';










export default function Example() {

  return(
	<div>
	  <div className=" bg-zinc-50 mx-auto h-screen ">
         <Topbar topStats={false}/>
        <Head>
             <title>World Math Ranking</title>
        </Head>

      	  <ContainsFlashClass/>
     </div>
	</div>

  )
}          


