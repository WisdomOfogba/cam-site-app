import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"

type MenuProps = {
  onClose: () => void
}

const Menu = ({onClose}: MenuProps) => {
  return (
      <section className='top-0 right-0 h-full w-[50%] flex flex-col gap-6 py-5 lg:hidden bg-white border fixed'>
        <div className="w-[90%] flex flex-col items-end">
          <button >
            <Image 
              onClick={onClose}
              src="./close.svg"
              alt="close-menu"
              height={32}
              width={32}
              className="inline-block cursor-pointer lg:hidden"
            />
          </button>
        </div>
        <ul className="flex flex-col" >
        {NAV_LINKS.map((link) => (
          <Link href={link.href} key={link.key} className="regular-16 text-gray-50 flexCenter cursor-pointer p-2 transition-all hover:font-bold hover:bg-green-50 hover:text-white">
            {link.label}
          </Link>
        ))}
        </ul>
      </section>
      
  )
}

export default Menu