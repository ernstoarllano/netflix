import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { SearchIcon, BellIcon, LogoutIcon } from "@heroicons/react/solid"
import useAuth from "../hooks/useAuth"

const Header = () => {
  const [isScrolled, setIsScrolled] = useState<boolean | false>(false)
  const { logout } = useAuth()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header className={`fixed top-0 z-50 w-full px-4 lg:px-10 py-4 ${isScrolled ? 'bg-gray-1000' : 'bg-transparent'} transition-all`}>
      <div className="flex items-center justify-between">
        <div className="flex flex-row items-center space-x-2 md:space-x-20">
          <Link href="/">
            <a>
              <Image src="/netflix.svg" alt="Netflix" width={150} height={50} className="cursor-pointer" />
            </a>
          </Link>
          <ul className="hidden lg:flex lg:flex-row lg:items-center lg:justify-between lg:space-x-10">
            <li>Home</li>
            <li>Movies</li>
            <li>TV Shows</li>
            <li>My List</li>
          </ul>
        </div>
        <div className="flex flex-row items-center justify-between ml-auto mr-0 space-x-4 md:space-x-10">
          <button>
            <SearchIcon className="inline w-6 h-6" />
          </button>
          <p className="hidden md:inline">Kids</p>
          <BellIcon className="hidden md:inline w-6 h-6" />
          <div className="hidden md:inline">
            <Link href="/account" passHref>
              <Image src="/profile.png" alt="My Profile" width={40} height={40} className="cursor-pointer" />
            </Link>
          </div>
          <button onClick={logout}>
            <LogoutIcon className="inline w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header