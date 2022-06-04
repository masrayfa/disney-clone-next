import Image from 'next/image'
import {
  MenuIcon,
  SearchIcon,
  GlobeAltIcon,
  ChevronDownIcon,
} from '@heroicons/react/solid'

const Header = () => {
  return (
    <header className="flex items-center justify-between bg-[#141A28]">
      <div className="  ml-10 flex items-center space-x-8 ">
        <MenuIcon
          height="20px"
          width="30px"
          className="mr-4 cursor-pointer text-[#b9bbc2]"
        />
        <Image
          src="/../public/disney-plus-logo-white.png"
          width="72px"
          height="72px"
          objectFit="contain"
          quality={100}
          className="cursor-pointer"
        />
        <ul className="text-md flex cursor-pointer space-x-7 ">
          <li className="headerLink">Serial</li>
          <li className="headerLink">Film</li>
          <li className="headerLink">Disney+</li>
          <li className="headerLink">Lokal</li>
          <li className="headerLink">Kids</li>
        </ul>
      </div>
      <div className="flex  items-center space-x-2">
        <form action="" className="flex">
          <input
            type="text"
            placeholder="Cari"
            className="border-b-[1px] bg-transparent outline-none focus:w-[400px] focus:border-[#1f80e0] focus:transition-all"
          />
          <span>
            <SearchIcon
              width="20px"
              height="40px"
              className="mr-4 cursor-pointer text-[#b9bbc2]"
            />
          </span>
        </form>
        <button className=" flex h-6 items-center  rounded-md px-3 py-0 text-xs text-[#b9bbc2] outline outline-1">
          <GlobeAltIcon height="15px" className="mr-1" />
          English
          <ChevronDownIcon height="15px" />
        </button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          color="#b9bbc2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
      <div></div>
    </header>
  )
}

export default Header
