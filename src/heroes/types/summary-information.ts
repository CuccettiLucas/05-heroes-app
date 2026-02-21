import type { Hero } from "./hero.interface";

export interface SumarryInformationResponse {
    totalHeroes:   number;
    strongestHero: Hero;
    smartestHero:  Hero;
    heroCount:     number;
    villainCount:  number;
}

