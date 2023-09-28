import Image from 'next/image';
import { bebas } from './fonts';

export default function Home() {
  return (
    <section id="hero">
      <div className="flex flex-col md:flex-row-reverse justify-center items-center p-2">
        <Image
          src={'/hero.png'}
          alt={'Atleta'}
          width={316}
          height={528}
          className="h-auto w-[150px] md:w-[316px]"
        />
        <div className="md:mr-6 flex flex-col gap-2 items-center">
          <h2
            className={`${bebas.className} text-6xl md:text-8xl leading-none tracking-wide`}
          >
            Potencialize <br />o seu{' '}
            <span className="font-semibold">treino</span> <br />
            <span className=" text-teal-300">intervalado</span>
          </h2>

          <p className="font-extralight text-sm max-w-[360px] text-center">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis
            repellat temporibus dolores pariatur eum error similique. Adipisci
            ratione deleniti, mollitia consequatur laudantium ullam libero
            dolor, tempora cupiditate explicabo sint. Autem?
          </p>

          <button className={`mt-2 border border-teal-300 py-2 px-8 rounded-md bg-transparent hover:bg-teal-300 ${bebas.className} text-teal-300 hover:text-zinc-950 transition-colors duration-300 text-center text-2xl`}>
            Iniciar agora!
          </button>
        </div>
      </div>
    </section>
  );
}
