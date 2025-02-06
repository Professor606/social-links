import React from 'react';
import Link from 'next/link';

const Cardo = () => {
  return (
    <div className="bg-bag flex justify-center items-center h-[98vh] w-[98vw]">
      <div className="bg-card rounded-md p-[2rem] flex flex-col justify-center items-center">
        <img src="favicon.ico" alt="profile image" className="h-24 rounded-full w-24 mb-[1.5rem]"/>
        <h1 className="text-[2.25rem] font-medium mb-[0.25rem]">Ahmad Essam</h1>
        <h2 className="text-[1.3rem] text-greena font-medium mb-[1.5rem]">Amman, Jordan</h2>
        <div className="text-[1.3rem] font-medium mb-[1.5rem]">'Front-end developer and cyber security expert.'</div>
        
        <div className="bg-incard py-[0.75rem] px-[5.625rem] w-[16rem] justify-center flex items-center rounded-md mt-[0.5rem]">
          <Link href="#" className="font-medium text-[1.3rem] hover:scale-110 hover:text-greena">GitHub</Link>
        </div>
        
        <div className="bg-incard py-[0.75rem] px-[5.625rem] w-[16rem] justify-center flex items-center rounded-md mt-[0.5rem]">
          <Link href="#" className="font-medium text-[1.3rem] hover:scale-110 hover:text-greena">Front-end Mintor</Link>
        </div>
        
        <div className="bg-incard py-[0.75rem] px-[5.625rem] w-[16rem] justify-center flex items-center rounded-md mt-[0.5rem]">
          <Link href="#" className="font-medium text-[1.3rem] hover:scale-110 hover:text-greena">GitHub</Link>
        </div>
        
        <div className="bg-incard py-[0.75rem] px-[5.625rem] w-[16rem] justify-center flex items-center rounded-md mt-[0.5rem]">
          <Link href="#" className="font-medium text-[1.3rem] hover:scale-110 hover:text-greena">GitHub</Link>
        </div>
        
        <div className="bg-incard py-[0.75rem] px-[5.625rem] w-[16rem] justify-center flex items-center rounded-md mt-[0.5rem]">
          <Link href="#" className="font-medium text-[1.3rem] hover:scale-110 hover:text-greena">GitHub</Link>
        </div>
      </div>
    </div>
  )
}

export default Cardo