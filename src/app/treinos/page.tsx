import TreinoCard from "@/components/TreinoCard";
import { treinos } from "@/data/treinos";

export default function Page() {
  return (
    <div className="flex justify-center gap-6 flex-wrap">
      { treinos.map(treino => <TreinoCard key={treino.id} id={treino.id} label={treino.label} /> ) }
    </div>
  )
}