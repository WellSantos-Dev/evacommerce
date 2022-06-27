// Icons
import cartIcon from '../../../public/svg/cartao.svg'
import padlockIcon from '../../../public/svg/cadeado.svg'
import truckIcon from '../../../public/svg/caminhao.svg'

// Components
import { SalesItem } from "./SalesItem"


export const SalesContext = () => {

  return (
    <div className="">
      <div className="flex flex-wrap items-center divide-white-800  justify-center gap-1 sm:w-full sm:flex-row sm:divide-x">
        <SalesItem text="Site Seguro" icon={padlockIcon}/>
        <SalesItem text="Até 12x sem juros" icon={cartIcon}/>
        <SalesItem text="Entrega para todo Brasil" icon={truckIcon}/>
      </div>
    </div>
  )
}