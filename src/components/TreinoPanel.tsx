"use client"
import { Interval } from "@/data/models/interval"
import { Treino } from "@/data/models/treino"
import { useState } from "react"
import Button from "./ui/Button"

type Props = {
  treino: Treino
}

export default function TreinoPanel({treino}: Props) {
  const [interval, setInterval] = useState<Interval | null>(null);

  return (
    <div className={`grid grid-cols-4 border border-gray-50`}>
      <div className={`bg-orange-600 text-gray-50 flex items-center justify-center p-4`}>
        Go!
      </div>
      <div className="col-span-3 flex items-center justify-center p-4">
        Timer
      </div>

      <div className="col-span-4">
        {treino.label}
      </div>

      <div className="col-span-2">
        <Button>Start</Button>
      </div>

      <div className="col-span-2">
        <Button cancel={true}>Stop</Button>
      </div>
    </div>
  )
}