import { CustomJumboton } from "@/components/custom/CustomJumboton";
import { HeroStats } from "@/heroes/components/HeroStats";
import { SearchControls } from "./ui/SearchControls";
import { CustomBreadcrumbs } from "@/components/custom/CustomBreadcrumbs";

export const SearchPage = () => {
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
    </>
  );
}

export default SearchPage;