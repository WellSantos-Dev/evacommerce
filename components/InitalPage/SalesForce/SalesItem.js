// Components
import Image from "next/image"

export const SalesItem = ({icon, text}) => {
  return (
    <div className="flex items-center justify-start flex-col p-4 gap-4 w-8/12 sm:h-20 shadow-md group sm:gap-0 sm:w-44 sm:shadow-none md:w-52 lg:w-64 lg:justify-center">
      <div className="w-8">
        <Image src={icon} alt="Logo" className="-z-50"/>
      </div>
      <h1 className="text-primary text-base text-center group-hover:flex sm:flex">{text}</h1>
    </div>
  )
}