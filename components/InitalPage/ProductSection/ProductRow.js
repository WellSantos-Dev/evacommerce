import { Product } from './Product'

export const ProductRow = ({data, text}) => {
  

  if(data == undefined) {
    <h1>Loading...</h1>
  } else {
    return (
      <div className="pt-16">
        <h1 className="text-black-custom font-bold text-2xl pb-[42px] before:content-[''] before:absolute before:bg-pink-600 before:w-16 before:h-1 before:-z-50">{text}</h1>
        <div className="flex overflow-x-scroll scroll-smooth">
          {
            Object.entries(data).map((item, index) => (
              <div key={index}>
                <Product product={item[1]}/>
              </div>
            ))
          }
        </div>
      </div>
    )

  }

}

// name, stars, price, promotional_price