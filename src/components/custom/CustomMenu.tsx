import { Link, useLocation } from "react-router"
import { cn } from "@/lib/utils";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "../ui/navigation-menu"

export const CustomMenu = () => {
    const { pathname } = useLocation();

    const isActive = (path:string) =>{
        return pathname === path;
    }

    return (
        <NavigationMenu className="p-6">
            <NavigationMenuList>
                {/* HOME */}
                <NavigationMenuItem>
                    <NavigationMenuLink asChild
                        className={cn(isActive("/") &&  "bg-slate-200" , "rounded-md p-2")}
                    >
                        <Link to="/">Inicio</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>

                {/* Search */}
                <NavigationMenuItem>
                    <NavigationMenuLink asChild
                        className={cn(isActive("/") && "bg-slate-200" , "rounded-md p-2")}
                    >
                        <Link to="/search">Buscar Super Heroes</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>

    )
}