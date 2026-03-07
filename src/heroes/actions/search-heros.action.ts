import { heroApi } from "../api/hero.api";
import type { Hero } from "../types/hero.interface";

const BASE_URL = import.meta.env.VITE_API_URL;

interface Options {
    name?:string;
    team?:string;
    category?:string;
    universe ?:string;
    status?:string;
    strength ?:string;
}

export const searchHero = async ({ name }: Options):Promise<Hero[]> =>{
    const { data } = await heroApi.get<Hero[]>(`/search`, {
            params: {
                name:name,
            }
        });

        console.log("DATA",data)
    const heroes = data.map(hero => ({
        ...hero,
        image: `${BASE_URL}/images/${hero.image}`
    }));

    return heroes;
}