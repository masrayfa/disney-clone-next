import { TV } from '../typings'
import Image from 'next/image'

interface Props {
  DisneyTV: TV[]
}

const Banner = ({ DisneyTV }: Props) => {
  return (
    <div className="relative w-[100%] bg-fuchsia-600 px-20">
      <div className=" relative mx-auto flex  w-[65%] justify-center space-x-20 rounded-md py-7">
        <div className="space-y-7">
          <p className="z-10 text-left text-2xl">Obi Wan Kenobi</p>
          <div className="flex space-x-3 font-medium">
            <p>Star Wars</p>
            <p>Action</p>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita
            culpa consequatur eius reprehenderit corrupti rerum error soluta,
          </p>
        </div>
        <img
          src="obi.webp"
          className=" z-40 h-[63vh] w-[55vw] rounded-lg object-cover"
        />
      </div>
    </div>
  )
}

export default Banner
