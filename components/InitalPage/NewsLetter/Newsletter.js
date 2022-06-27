// Icons
import imgEmail from '../../../public/svg/newsletter.svg'

// Components
import Image from 'next/image'

export const Newsletter = () => {
  return (
    <div className="bg-black-800 h-[352px]" >
      <div className="max-w-container mx-auto my-0 flex items-center justify-center flex-col p-12">
        <Image src={imgEmail} width={50} height={40}/>
        <h1 className="text-white-custom pt-4 text-2xl pb-12">Receba nossas novidades, descontos e muito mais</h1>
        
      </div>
    </div>
  )
}