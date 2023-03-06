import Image from 'next/image'
import Link from 'next/link'
import logo from '../public/favicon/yeahmotor.webp'

export default function Intro() {
  return (
    <section className="pt-4 pb-4 bg-[#262b2f] w-full h-full flex items-center">
      <Link href="/">
        <span className="ml-32 mr-10"><Image
          src={logo}
          width={170}
          height={34}
        /></span>
      </Link>
      <Link href="/category/cars">
        <a className="text-xl font-bold tracking-tighter leading-none pr-4 pl-4 text-gray-400">CARS</a>
      </Link>
      <Link href="/category/trucks">
        <a className="text-xl font-bold tracking-tighter leading-none pr-4 pl-4 text-gray-400">TRUCKS</a>
      </Link>
      <Link href="/category/suvs">
        <a className="text-xl font-bold tracking-tighter leading-none pr-4 pl-4 text-gray-400">SUVS</a>
      </Link>
      <Link href="/category/moto">
        <a className="text-xl font-bold tracking-tighter leading-none pr-4 pl-4 text-gray-400">MOTO</a>
      </Link>
      <Link href="/category/aero">
        <a className="text-xl font-bold tracking-tighter leading-none pr-4 pl-4 text-gray-400">AERO</a>
      </Link>
      <Link href="/category/gear">
        <a className="text-xl font-bold tracking-tighter leading-none pr-4 pl-4 text-gray-400">GEAR</a>
      </Link>
      <Link href="/about">
        <a className="text-xl font-bold tracking-tighter leading-none pr-4 pl-4 text-gray-400">ABOUT</a>
      </Link>
    </section>
  )
}
