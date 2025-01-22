import Logo from '../images/logo.png'
import Image from 'next/image'

const HomePage = () => {
  return (
    <div className='bg-wine-red p-5'>
      <h1 className='logo text-herbal-green text-4xl font-semibold tracking-wide mb-4'>Ephemeris</h1>
      <hr />
      <h3 className='mt-4 mb-4 heading text-light'>Home Page</h3>
      <Image 
        src={Logo} 
        alt='Logo' 
        width={100} 
        height={100}
        className='rounded-full' 
      />
    </div>
  )
}

export default HomePage

