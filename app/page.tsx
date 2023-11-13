import Profile from '../components/profile'
import Description from '../components/description'

export default function Home() {
  return (
    <div>
      <div className='z-0'> 
        <Profile />
      </div>
      <div className='z-10 relative'>
        <Description />
      </div>
    </div>
  )
  
  
}
