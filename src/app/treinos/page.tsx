import TreinoCard from "@/components/TreinoCard";
import treinoService from "@/services/treino-service";

// Como este componente é de servidor, esta função será executada no lado do servidor
async function fetchTreinos() {
  return treinoService.getAll();
}

export default async function Page() {
  var treinos = await fetchTreinos();

  return (
    <div className="flex justify-center gap-6 flex-wrap">
      { treinos.map(treino => <TreinoCard key={treino.id} id={treino.id} label={treino.label} /> ) }
    </div>
  )
}