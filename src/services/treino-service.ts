import path from "path";
import fsPromises from 'fs/promises';
import { Treino } from "@/models/treino";

class TreinoService {

  private async fetchFromJSONFile(): Promise<Treino[]> {
    const filePath = path.join(process.cwd(), 'data/treinos.json');
    const jsonData = await fsPromises.readFile(filePath);
    return JSON.parse(jsonData.toString()) ?? [];
  }

  async getAll() {
    return this.fetchFromJSONFile();
  }

  async get(id: string) {
    const treinos = await this.fetchFromJSONFile();
    return treinos.find(t => t.id === id);
  }

}

const treinoService = new TreinoService();

export default treinoService;