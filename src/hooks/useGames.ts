import apiClient from "@/services/api-client";
import { CanceledError } from "axios";
import { useEffect, useState } from "react";

export interface Platform { 
  id: number;
  name: string;
  slug: string;
}


export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

interface FectchGameResponse {
  count: number;
  results: Game[];
}
const useGames = () => {
     const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);
    
    useEffect(() => {
        const controller = new AbortController();  //handle cancellation

        setLoading(true);
      apiClient
        .get<FectchGameResponse>("/games", { signal: controller.signal })
        .then((res) => {setGames(res.data.results);
        setLoading(false);
        })
            .catch((err) => {
                if (err instanceof CanceledError) return;
              setError(err.message);
              setLoading(false);
            });
        return () => controller.abort(); //cleanup function to abort the request
      }, []);

    return {games, error, isLoading};
}

export default useGames;