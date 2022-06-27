// Data
import data from './dataHeader'

// Components
import { HeaderItems } from './HeaderContent/HeaderItems'
import { InputHeader } from './HeaderContent/InputHeader'
import { Categories } from './HeaderContent/Categories'


export const SidebarDesktop = () => {
  return (
    <div className="p-4 hidden px-4 md:flex md:gap-4 md:whitespace-nowrap lg:gap-8 sm:p-0">
      <Categories/>
      <InputHeader/>
      {
        data[1].map((item, index) => (
          <HeaderItems text={item.title} icon={item.image} key={index}/>
        ))
      }
     </div>
  )
}