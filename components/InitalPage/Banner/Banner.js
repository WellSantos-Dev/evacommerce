// Data
import data from './dataBanner'

export const Banner = () => {
  return (
    <>
      <div className="bg-cover bg-top" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1505664194779-8beaceb93744?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80")'}}>
        <div className="w-full" style={{background: 'linear-gradient(90.99deg, #000000 1.53%, rgba(32, 32, 32, 0.52) 56.83%, rgba(196, 196, 196, 0) 98.06%)'}}>
          <div className="flex items-start flex-col justify-center max-w-container mx-auto my-0 h-374">
            <h1 className="font-400 text-white-custom text-4xl">{data[0].title}</h1>
            <p className="font-400 text-white-custom text-2xl">{data[0].paragraph}</p>
          </div>
        </div>
      </div>

    </>
  )
}

