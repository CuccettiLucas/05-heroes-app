import { useQuery } from "@tanstack/react-query";
import { searchHero } from "../actions/search-heros.action";

interface Options {
    name?:string;
    team?:string;
    category?:string;
    universe ?:string;
    status?:string;
    strength ?:string;
}

export const useSearchHeros = (options: Options) => {

    return useQuery({
    queryKey: ['search-heros', options.name],
    queryFn: () => searchHero(options),
    enabled: options.name != "",
    staleTime: 1000 * 60 * 50, // 5 minutos
    });

}