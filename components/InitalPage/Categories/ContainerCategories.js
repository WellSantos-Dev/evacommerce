import { Category } from "./Category"
import { useCommerceValue } from "../../../context/commerceContext"
import { useState } from 'react'

export const ContainerCategories = () => {
  const {selectedCategories} = useCommerceValue()

  
  if(selectedCategories == null || selectedCategories == undefined) {
    return <div>Carregando...</div>
  }
  else {
    return (
      <div className="relative">
        <div className="max-w-container mx-auto my-0 flex items-center justify-between overflow-x-scroll scrollbar-hide">
          {
            Object.entries(selectedCategories.categories).map((category, index) => (
                <Category category={category[1]} image={selectedCategories.images.images[index]} key={index}/>
            ))
          }
        </div>
        <div className="-z-50 absolute top-0 right-0 bg-gradient-to-l from-white h-full w-1/12 xl:bg-none"/>
      </div>
    )
  }
}