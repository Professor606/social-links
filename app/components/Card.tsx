import React from 'react';
import Link from 'next/link';
const Card = () => {
  return (
    <div className="flex flex-col items-center max-h-screen p-0">
      <div id="card" className="flex justify-evenly flex-col items-center content-center bg-card rounded-lg mx-0 mt-14 w-[75%] p-4 max-w-[400px] backdrop-blur-md shadow-[0px_3px_25px_rgba(0,136,169,0.6)]">
        <img className="w-[30%] max-w-24 rounded-full hover:scale-110" src="favicon.ico" alt="Image" />
        <div className="text-3xl my-3">Ahmad Essam</div>
        <div className="text-greena text-xl mb-3">Amman, Jordan</div>
        <div className="text-xl my-4 text-center">'Front-end Devolper & Cyber Security Expert.'</div>
        <div className="bg-incard rounded-md py-[0.75rem] w-[17rem] sm:w-[19rem] hover:w-[15rem] justify-center flex items-center rounded-lg mt-[0.5rem]">
          <Link href="https://github.com/Professor606" target="_blank" className="font-medium text-xl hover:scale-110 hover:cursor-pointer hover:text-greena">GitHub</Link>
        </div>
        <div className="bg-incard rounded-md py-[0.75rem] w-[17rem] sm:w-[19rem] justify-center flex items-center hover:w-[15rem] rounded-lg mt-[0.5rem]">
          <Link href="https://linkedin.com/in/ahmad-essam-61a50832b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" className="font-medium text-xl hover:text-[#0A5CB0] hover:cursor-pointer hover:scale-110">LinkedIn</Link>
        </div>
        <div className="bg-incard rounded-md py-[0.75rem] w-[17rem] sm:w-[19rem] justify-center flex items-center hover:w-[15rem] rounded-lg mt-[0.5rem]">
          <Link href="https://t.me/professor606" target="_blank" className="font-medium text-xl hover:text-[#2890C3] hover:cursor-pointer hover:scale-110">Telegram</Link>
        </div>
        <div className="bg-incard rounded-md py-[0.75rem] w-[17rem] sm:w-[19rem] justify-center hover:w-[15rem] flex items-center rounded-lg mt-[0.5rem]">
          <Link href="https://instagram.com/xahmad606?igsh=ODJua2c2MDNycGZi" target="_blank" className="font-medium text-xl hover:text-[#E1306C] hover:cursor-pointer hover:scale-110">Instagram</Link>
        </div>
      </div>
      
      <footer className="mt-[5rem] mb-[1rem] hover:scale-125">
        <img src="next.svg" className="invert w-[5rem]" />
      </footer>
    </div>
  );
}

export default Card