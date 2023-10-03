import React from 'react'
import { treinos } from '@/data/treinos'
import { bebas } from '@/app/fonts';
import TreinoPanel from '@/components/TreinoPanel';

type Props = {
  params: { id: string }
}

function getTreino(id: string) {
  return treinos.find(t => t.id === id);
}

export default function Page({params}: Props) {
  const treino = getTreino(params.id);

  return (
    <div className='flex flex-col gap-4 items-center'>
      <h2 className={`${bebas.className} text-3xl`}>{treino?.label}</h2>

      <div>
        {treino && <TreinoPanel treino={treino} />}
      </div>
    </div>
  )
}