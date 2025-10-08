import apiClient from "@/services/api-client";
import { CanceledError } from "axios";
import { useEffect, useState } from "react";
interface Game {
  id: number;
  name: string;
}

interface FectchGameResponse {
  counr: number;
  results: Game[];
}
const useGames = () => {
     const [games, setGames] = useState<Game[]>([]);
      const [error, setError] = useState("");
    
    useEffect(() => {
        const controller = new AbortController();  //handle cancellation


        apiClient
          .get<FectchGameResponse>("/games",{signal:controller.signal})
          .then((res) => setGames(res.data.results))
            .catch((err) => {
                if (err instanceof CanceledError) return;
                setError(err.message)
            });
        return () => controller.abort(); //cleanup function to abort the request
      }, []);
    
    return {games, error};
}

export default useGames;