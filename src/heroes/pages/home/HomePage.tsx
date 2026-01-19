import { useMemo } from "react"
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router";
import {
  Heart
} from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CustomJumboton } from "@/components/custom/CustomJumboton"
import { HeroStats } from "@/heroes/components/HeroStats"
import { HeroGrid } from "@/heroes/components/HeroGrid"
import { CustomPagination } from "@/components/custom/CustomPagination"
import { CustomBreadcrumbs } from "@/components/custom/CustomBreadcrumbs";
import { getHeroesByPageAction } from "@/heroes/actions/get-heroes-by-page.actions";

export const HomePage = () => {

  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get("tab") ?? "all";
  const page = searchParams.get("page") ?? "1";
  const limit = searchParams.get("limit") ?? "6";

  const selectedTab = useMemo(() =>{
    const validTabs = ["all","favorites","heroes","villains"];
    return validTabs.includes(activeTab) ? activeTab : "all";
  },[activeTab]);

  const { data: heroesResponse } = useQuery({
    queryKey: [`heroes`],
    queryFn: () => getHeroesByPageAction(+page, +limit),
    staleTime: 1000 * 60 * 5,
  });

  return (
    <>
      {/* Header */}
      <CustomJumboton
        title="Universo de SuperHéroes"
        description="Descubre, explora y administra super héroes"
      />

      {/*BreadCurn*/}
      <CustomBreadcrumbs currentPage="Super Héroes" />

      {/* Stats Dashboard */}
      <HeroStats />

      {/* Tabs */}
      <Tabs value={selectedTab} className="mb-8">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger
            value="all"
            onClick={() => setSearchParams((prev) => {
              prev.set('tab', 'all');
              return prev;
            })}
          >
            All Characters (16)
          </TabsTrigger>
          <TabsTrigger
            value="Favorites"
            className="flex items-center gap-2"
            onClick={() => setSearchParams((prev) => {
              prev.set('tab', 'favorites');
              return prev;
            })}
          >
            <Heart className="h-4 w-4" />
            Favorites (3)
          </TabsTrigger>
          <TabsTrigger
            value="Heroes"
            onClick={() => setSearchParams((prev) => {
              prev.set('tab', 'heroes');
              return prev;
            })}
          >Heroes (12)
          </TabsTrigger>
          <TabsTrigger
            value="Villains"
            onClick={() => setSearchParams((prev) => {
              prev.set('tab', 'villains');
              return prev;
            })}
          >
            Villains (2)
          </TabsTrigger>
        </TabsList>
        <TabsContent value="all">
          <HeroGrid heroes={heroesResponse?.heroes ?? []} />
        </TabsContent>
        <TabsContent value="Favorites">
          <h1>Favorites</h1>
        </TabsContent>
        <TabsContent value="Heroes">
          <h1>Heroes</h1>
        </TabsContent>
        <TabsContent value="Villains">
          <h1>Villains</h1>
        </TabsContent>
      </Tabs>

      {/* Pagination */}
      <CustomPagination
        totalPages={heroesResponse?.pages ?? 1}
      />
    </>
  )
}