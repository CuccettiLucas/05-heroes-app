import { Link, useLocation } from "react-router";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "../ui/breadcrumb";

interface Breadcrumb {
    label:string;
    to:string
}

interface Props {
    currentPage:string;
    breadcrumbs?:Breadcrumb[]
}

export const CustomBreadcrumbs = ({currentPage,breadcrumbs = []}:Props) => {
    const { pathname } = useLocation();

    return (
        <Breadcrumb className="my-5">
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                        <Link to="/">
                        Inicio
                        </Link>
                    </BreadcrumbLink>
                </BreadcrumbItem>
                
                {
                    breadcrumbs.map(crumb =>(
                        <BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbLink asChild>
                                <Link to={crumb.to}>
                                    {crumb.label}
                                </Link>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                    ))
                }

                <BreadcrumbSeparator />

                <BreadcrumbItem>
                    <BreadcrumbLink className="text-black">{currentPage}</BreadcrumbLink>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>
    );
}