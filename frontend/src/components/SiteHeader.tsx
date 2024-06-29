import { useState } from "react";
import { Link } from "react-router-dom";
import { Bars3BottomLeftIcon } from "@heroicons/react/24/outline";
import { XMarkIcon } from "@heroicons/react/24/outline";


export default function SiteHeader() {
    
  const [nav, setNav] = useState<boolean>(false);

    const handleNav = () => {
      setNav(!nav);
    }


  const navItems: {path: string, text: string}[] = [
    { path: '/', text:'Strona główna' },
    { path: '/posts', text:'Aktualności' },
    { path: '/', text:'Seniorzy' },
    { path: '/', text:'Szkółka Piłkarska' },
    { path: '/', text:'Multimedia' },
    { path: '/', text:'Kontakt' },
  ]

  return (
    <div className="flex justify-between items-center h-20 max-w-[1240px] p-2">
        <div className="h-full">
          <img
            src="/gdovia-logo.png"
            alt="Gdovia logo"
            className="h-full object-contain"
            />
        </div>
        <div className="hidden md:flex flex-row">
          {navItems.map((item, index) => (
            <Link key={index} to={item.path}> {item.text}</Link>
          ))}
        </div>
        <div onClick={handleNav} className="block md:hidden">
          {!nav  ? <Bars3BottomLeftIcon className="h-6 w-6 text-gray-500" /> : <XMarkIcon className="h-6 w-6 text-gray-500" />}
        </div>

        <div
          className={
            nav
              ? 'fixed md:hidden left-0 top-0 w-[60%] bg-white h-full ease-in-out duration-500'
              : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
          }
        >
          {navItems.map((item, index) => (
            <div key={index}
              className='p-4 rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer'>
              <Link to={item.path} onClick={handleNav}> {item.text}</Link>
            </div>
          ))}
        </div>
    </div>
  )
}
