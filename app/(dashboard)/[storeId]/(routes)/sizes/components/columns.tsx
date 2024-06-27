"use client"

import { ColumnDef } from "@tanstack/react-table"
import { CellAction } from "./cell-action"

export type SizecColumn = {
  id: string
  name: string
  value: string
  createdAt: string
}

export const columns: ColumnDef<SizecColumn>[] = [
  {
    accessorKey: "name",
    header: "Navn",
  },

  {
    accessorKey: "value",
    header: "Verdi",
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
