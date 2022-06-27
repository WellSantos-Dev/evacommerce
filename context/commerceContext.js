// Desafios:
// (v) A seção de destaques listará todos os produtos.
// (v) Categorias com menos de 4 produtos não devem ser exibidas na vitrine.

// Tarefa:
// Juntar as categorias Office e Smartphone para criar a subcategoria office do Home

// Data
import data from '../utils/requests'

// Hooks
import { useState, useEffect, useContext, createContext } from 'react'


const CommerceContext = createContext()

export const CommerceProvider = ({children, value}) => {
  const [ allProducts, setAllProducts ] = useState(value.allProducts)
  const [ allCategories, setAllCategories ] = useState(value.allCategories);
  const [ selectedCategories, setSelectedCategories ] = useState()
  const [ booksCategory, setBooksCategory ] = useState({})
  const [ clothintCategory, setClothigCategory ] = useState({})
  const [ officeCategory, setOfficeCategory ] = useState({})
  const [ images, setImages ] = useState(data)
  const [ baseUrl, setBaseUrl ] = useState()
  const [ searchInput, setSearchInput ] = useState()

  


  // Search Filter
  const buscaFiltrada = allProducts.filter((product) => searchInput ? product.name.toLowerCase().includes(searchInput.toLowerCase()) : null)


  // Provider all categories with 3+ products
  const getSelectedCategories = async () => {
    const newCategories = await allCategories.filter((category) => category.products.length > 3)
    setSelectedCategories({categories: {...newCategories}, images: {images}})
  }


  // Office Category Logical
  const getCategoryOffice = async () => {
    const office = allProducts.filter((office) => office.category_id == 2)
    const smartphone = allProducts.filter((smartphone) => smartphone.category_id == 6)
    const newCategorieOffice = [...office, ...smartphone]
    setOfficeCategory(newCategorieOffice)
  }


  // Provider Home Categories
  const getProductsHome = () => {
    
    // Category Books
    const destaqueLivros = allProducts.filter((book) => book.category_id == 1)
    setBooksCategory(destaqueLivros)  

    // Category Clothing
    const destaqueVestuario = allProducts.filter((vestuario) => vestuario.category_id == 3)
    setClothigCategory(destaqueVestuario)
  }
  

  useEffect(() => {
    getSelectedCategories()
    getProductsHome()
    getCategoryOffice()
  }, [])
  
  
  return <CommerceContext.Provider value={{selectedCategories, getProductsHome, allProducts, officeCategory, booksCategory, clothintCategory, buscaFiltrada, searchInput, setSearchInput}}>
    {children}
  </CommerceContext.Provider>
}

export const useCommerceValue = () => {
  return useContext(CommerceContext)
}