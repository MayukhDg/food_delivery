import Navbar from "@/components/Navbar";
import Feed from "@/components/Feed";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <main className='w-full overflow-y-scroll' >  
     <Navbar/>
     <Feed/>
     <Footer/>
    </main>
  )
}

export default Home;