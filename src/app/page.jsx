import { Profile, InfoCircle } from 'iconsax-react'
import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen background-dark">
      <div className="container mx-auto w-full max-w-4xl flex flex-col justify-center items-center min-h-96">
        <h1 className='text mb-2'>CHIP Landing Page</h1>
        <p className="opacity-55">Explore our web app and web page</p>
      </div>
      <div className="w-max mx-auto container flex flex-row gap-x-[40px] items-center">
        <div className="max-w-[325px] min-h-[365px] card flex flex-col justify-between text-center">
          <div className='flex flex-col items-center gap-8'>
            <Profile size={90} variant='Bulk' color='#e6e8ef'/>
            <div>
              <h2 className='mb-2'>Absen</h2>
              <p className='opacity-55'>Aplikasi absen untuk para member ekskul CHIP</p>
            </div>
          </div>
          <Link href={'/login'} className="w-[100%] btn-primary item-self-end">
            Buka
          </Link>
        </div>
        <div className="max-w-[325px] min-h-[365px] card flex flex-col justify-between text-center">
          <div className='flex flex-col items-center gap-8'>
            <InfoCircle size="90" variant='Bulk' color='#e6e8ef'/>
            <div>
              <h2 className='mb-2'>Profile</h2>
              <p className='opacity-55'>Kenali satu-satunya ekskul IT di smala</p>
            </div>
          </div>
          <button disabled href={'/absen'} className="w-[100%] btn-primary item-self-end">
            Coming Soon...
          </button>
        </div>
      </div>
    </main>
  );
}
