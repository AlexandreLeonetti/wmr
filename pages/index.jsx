import Head                 from 'next/head'
import Topbar              from '../components/Topbar'
import Feed                 from '../components/Feed'
import { Toaster }          from 'react-hot-toast'



const Home = (  ) => {
  return (
<div>
    <div className=" bg-zinc-50 mx-auto h-screen ">
            <Topbar topStats={true} />
        <Head>
             <title>World Math Ranking</title>
        </Head>
        <Toaster />

        <div className="lg:max-w-7xl mx-auto">
         <main className="h-full grid  grid-cols-9 h-max">

            <Feed />


         </main>
        </div>

   </div>
</div>
  )
}

export default Home

export const getServerSideProps = async (context) => {
        return{
            props:{
            }
        }
}
