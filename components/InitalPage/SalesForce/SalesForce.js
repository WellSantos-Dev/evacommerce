// Components
import { SalesContext } from "./SalesContent"

export const SalesForce = () => {
  return (
    <div className="max-w-container mx-auto my-0 flex items-center justify-center">
      <div className="p-8 sm:p-12 lg:p-16">
        <SalesContext />
      </div>
    </div>
  )
}