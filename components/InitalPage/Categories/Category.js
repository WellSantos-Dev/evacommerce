export const Category = ({category, image}) => {
  
  return (
      <div className="mr-12 md:mr-16 lg:mr-[174px] rounded-md -z-50" style={{background: `url(${image})`, backgroundSize: 'cover', backgroundPositon: 'center'}}>
        <div className="w-48 sm:w-230 h-64 flex justify-center items-end pb-4 bg-cover bg-center rounded-md">
          <h1 className="font-bold text-white-custom text-2xl">{category.name}</h1>
        </div>
      </div>
  )
}

// style={{background: `url(${image})`, backgroundSize: 'cover'}}