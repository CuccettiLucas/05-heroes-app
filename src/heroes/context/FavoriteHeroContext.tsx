import { createContext, useEffect, useState, type PropsWithChildren } from "react";
import type { Hero } from "../types/hero.interface";

interface FavoriteHeroContext {
    // State
    favorites: Hero[];
    favoriteCount: number;

    //Methods
    isFavorite: (hero:Hero) => boolean;
    toggleFavorite: (hero:Hero) => void;
    totalPercent: (totalHeroes :number) => number;
}

// eslint-disable-next-line react-refresh/only-export-components
export const FavoriteHeroContext = createContext({} as FavoriteHeroContext);

const getFavoritesFromLocalStorage = (): Hero[] =>{
 const favorites = localStorage.getItem("favorites");
 return favorites ? JSON.parse(favorites) :[];
}

export const FavoriteHeroProvider = ({children}:PropsWithChildren) => {
    const [favorites, setfavorites] = useState<Hero[]>(getFavoritesFromLocalStorage());

    const toogleFavorites = (hero:Hero) =>{
        const heroExist = favorites.find((h) => h.id === hero.id);

        if(heroExist){
            const newFavorites = favorites.filter((h) => h.id != hero.id);
            setfavorites(newFavorites);
            return;
        }

        setfavorites([...favorites, hero])
    }

    const isFavorite = (hero:Hero) =>{
        return favorites.some((h) => h.id === hero.id);
    }

    const totalPercent = (totalHeroes : number) =>{
        const totalFavorites = favorites.length;
        return (totalFavorites * 100) / totalHeroes;
    }

    useEffect(() =>{
        localStorage.setItem("favorites", JSON.stringify(favorites));
    },[favorites]);

    return(
        <FavoriteHeroContext
            value={{
                //state
                favoriteCount:favorites.length,
                favorites:favorites,

                //methods
                isFavorite:isFavorite,
                toggleFavorite:toogleFavorites,
                totalPercent: totalPercent,
            }}
        >
            {children}
        </FavoriteHeroContext>
    );
}