"use client"

import { Button } from "@/components/ui/button"
import { Heading } from "@/components/ui/heading"
import { Separator } from "@/components/ui/separator"
import { PlusIcon } from "lucide-react"
import { useParams, useRouter } from "next/navigation"
import { SizecColumn, columns } from "./columns"
import { DataTable } from "@/components/ui/data-table"
import { ApiList } from "@/components/ui/api-list"

interface SizesClientProps {
    data: SizecColumn[]
}


export const SizesClient: React.FC<SizesClientProps> = ({
    data
}) => {
    const router = useRouter()
    const params = useParams()


    return (
        <>
        <div className="flex items-center justify-between">
            <Heading 
            title={`Størrelser (${data.length})`}
            description="Administrer størrelser for din butikk"
            />
            <Button onClick={() => router.push(`/${params.storeId}/sizes/new`)}>
                <PlusIcon className="mr-2 h-4 w-4" />
                Legg til ny
            </Button>

        </div>
        <Separator />
        <DataTable searchKey="name" columns={columns} data={data}/>
        <Heading title="API" description="API-Kall for størrelser" />
        <Separator />
        <ApiList entityName="sizes" entityIdName="sizeId" />
        
        </>
    )
}