import Image from 'next/image'
import logomobile from "@/img/logo-mobile.png"
import logodesktop from "@/img/logo-desktop.png"

export default function Home() {
  return (
    <main className="bg-neutral-900 lg:bg-background lg:bg-cover flex flex-col max-h-screen h-screen max-w-screen w-screen lg:items-center">
     <div className="lg:bg-white lg:w-[500px] lg:h-96 lg:rounded-2xl lg:m-16 flex flex-1 flex-col justify-between">
      <Image src={logomobile} width={218} height={33} alt='Logo do site'className='lg:sr-only flex flex-col self-center mt-[154px]'/>
      <Image src={logodesktop} width={250} height={30} alt='Logo do site' className='sr-only lg:not-sr-only lg:self-center lg:mt-12'/>
        <form className="flex flex-col gap-2 p-10 mt-10 mb-10">
          <label htmlFor="code" className='text-white lg:text-black text-xl lg:text-sm'>Nome de Usuário</label>
          <input type="text" className="w-full p-5 lg:p-3 outline-none rounded-xl lg:rounded-lg bg-neutral-700 lg:bg-transparent border border-white lg:border-neutral-400"/>
          <label htmlFor="code" className='text-white lg:text-black text-xl lg:text-sm'>Senha</label>
          <input type="text" id="code" className="w-full p-5 lg:p-3 outline-none rounded-xl lg:rounded-lg bg-neutral-700 lg:bg-transparent border border-white lg:border-neutral-400"/>
          <button type="submit" className="bg-pink-600 text-white text-xl lg:text-lg font-semibold p-5 lg:p-4 rounded-xl lg:rounded-lg mt-3">Entrar</button>
          <button type="submit" className="bg-white lg:bg-neutral-300 text-pink-600 text-xl lg:text-sm font-bold lg:font-bold lg:mb-7 p-5 lg:p-3 lg:rounded-lg rounded-xl">Esqueci minha senha</button>
        </form>
     </div>
    </main>
  )
}
