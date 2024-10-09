import Sidebar from '../../components/sidebar/Sidebar'
import MessageContainer from '../../components/messages/MessageContainer'

const Home = () => {
  return (
    <div className='md:flex w-[100%] lg:w-[100%] xl:w-[80%] h-screen rounded-lg bg-gray-800 '>
      <Sidebar />
      <MessageContainer />
    </div>
  )
}

export default Home