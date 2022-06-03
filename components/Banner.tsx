import { TV } from '../typings'
import Image from 'next/image'

interface Props {
  DisneyTV: TV[]
}

const Banner = ({ DisneyTV }: Props) => {
  return (
    <div>
      <div className="rounded-md bg-red-700">
        <Image></Image>
      </div>
    </div>
  )
}

export default Banner
