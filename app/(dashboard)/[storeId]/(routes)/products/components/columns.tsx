"use client"

import { ColumnDef } from "@tanstack/react-table"
import { CellAction } from "./cell-action"

export type ProductColumn = {
  id: string
  name: string
  price: string
  size: string
  category: string
  color: string
  isFeatured: boolean
  isArchived: boolean
  createdAt: string
}

export const columns: ColumnDef<ProductColumn>[] = [
  {
    accessorKey: "name",
    header: "Navn",
  },

  { 
    accessorKey: "isArchived",
    header: "Arkivert",
  },

  { 
    accessorKey: "isFeatured",
    header: "Utvalgt",
  },

  { 
    accessorKey: "price",
    header: "Pris",
  },

  { 
    accessorKey: "category",
    header: "Kategori",

  },

  { 
    accessorKey: "color",
    header: "Color",
    cell: ({ row }) => (
      <div className="flex items-center gap-x-2">
        {row.original.color}
        <div className="h-6 w-6 rounded-full border" style={{backgroundColor: row.original.color}} />

      </div>
    )
  },


  { 
    accessorKey: "size",
    header: "Størrelse",
  },

  {
    accessorKey: "createdAt",
    header: "Dato",
  },
  
  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} />

  }
 
]
