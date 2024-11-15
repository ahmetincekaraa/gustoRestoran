import Link from 'next/link'
import React from 'react'


const Logo = () => {
  return (
    <Link href="/" className='group text-[3rem] font-dancing font-bold cursor-pointer text-[#CE2B37] hover:text-[#009473]'>
  <span className="group-hover:text-[#009473]">G</span>
  <span className="text-[#009473] group-hover:text-[#CE2B37]">u</span>
  <span className="text-[#009473] group-hover:text-[#CE2B37]">s</span>
  <span className="text-[#009473] group-hover:text-[#CE2B37]">t</span>
  <span className="text-[#CE2B37] group-hover:text-[#009473]">o</span>
</Link>

    // italyan bayrağının kodları. beyaz rengin kodu: #F4F5F0
  )
}

export default Logo