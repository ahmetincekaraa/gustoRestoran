import Image from 'next/image'
import React from 'react'
import Title from './ui/Title'
import Logo from './ui/Logo'

const About = () => {
  return (
    <div className="bg-[#01281f] py-14">
      <div className="container mx-auto flex items-center text-iwhite gap-20 justify-center flex-wrap-reverse">
        <div className="flex justify-center">
          <div className="relative sm:w-[445px] sm:h-[600px] flex justify-center w-[300px] h-[450px]">
            <Image src="/images/about-img.png" alt="" layout="fill" sizes='max-width:"450px"' />
          </div>
        </div>
        <div className="md:w-1/2 ">
          <Title addClass="text-[40px] !font-dancing"><Logo /> İtalyan Restoran</Title>
          <p className="my-5 flex flex-col items-center text-primary indent-4">
          İtalya’nın eşsiz mutfağını ve samimi atmosferini şehrin kalbine taşıyan bir restorandır. Her tabakta İtalyan geleneğini, tazeliği ve özeni sunmayı amaçlıyoruz. Özenle seçilen malzemelerle hazırlanan lezzetlerimizde, klasik tariflere modern bir dokunuş katıyoruz. <br />
</p>
           <p className="my-5 flex flex-col items-center text-primary indent-4">İster bir dilim odun fırını pizzası, ister ev yapımı makarnalarımızla kendinizi şımartın. Gusto, keyifli anların ve unutulmaz lezzetlerin adresi olmaya hazır. İtalyan yaşam tarzını sofralarınıza getiren bir deneyim için sizleri bekliyoruz!</p> 
          
          {/* <button className="btn-primary mt-6">Read More</button> */}
        </div>
      </div>
    </div>
  )
}

export default About