import Logo from '/logo.png'
import Image from 'next/image'

const HomePage = () => {
  return (
    <div className='border-b-aegean-blue p-5'>
      <h1 className='logo text-light'>Ephemeris</h1>
      <hr />
      <h3 className='heading'>Home Page</h3>
      <Image src={Logo} alt='Logo' width={50} height={50} />
    </div>
  )
}

export default HomePage

