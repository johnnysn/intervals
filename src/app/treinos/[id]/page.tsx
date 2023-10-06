import React from 'react'
import { bebas } from '@/app/fonts';
import TreinoPanel from '@/components/TreinoPanel';
import treinoService from '@/services/treino-service';

type Props = {
  params: { id: string }
}

async function fetchTreino(id: string) {
  return treinoService.get(id);
}

export default async function Page({params}: Props) {
  const treino = await fetchTreino(params.id);

  return (
    <div className='flex flex-col gap-4 items-center'>
      <h2 className={`${bebas.className} text-3xl`}>{treino?.label}</h2>

      <div>
        {treino && <TreinoPanel treino={treino} />}
      </div>
    </div>
  )
}