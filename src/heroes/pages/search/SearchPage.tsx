import { CustomJumboton } from "@/components/custom/CustomJumboton";
import { HeroStats } from "@/heroes/components/HeroStats";
import { SearchControls } from "./ui/SearchControls";
import { CustomBreadcrumbs } from "@/components/custom/CustomBreadcrumbs";
import { useSearchParams } from "react-router";
import { useSearchHeros } from "@/heroes/hooks/useSearchHeros";
import { HeroGrid } from "@/heroes/components/HeroGrid";

export const SearchPage = () => {

  const [searchParams] = useSearchParams();
  const nameHero = searchParams.get("name") ?? "";
  
  const { data: result } = useSearchHeros({ name: nameHero });

  return(
    <>
      <CustomJumboton 
          title="Búsqueda de SuperHéroes"
          description="Descubre, explora y administra super héroes"
      />
      <CustomBreadcrumbs  
        currentPage="Búsqueda de héroes"
        // breadcrumbs={[
        //   {label:"Home1", to:"/"},
        //   {label:"Home2", to:"/"},
        //   {label:"Home3", to:"/"}
        // ]}
      />
      <HeroStats />
      {/* Controls */}
      <SearchControls />
      <HeroGrid heroes={result ?? []} />
    </>
  );
}

export default SearchPage;