"use client"

import { ColumnDef } from "@tanstack/react-table"
import { CellAction } from "./cell-action"

export type CategoryColumn = {
  id: string
  name: string
  billboardLabel: string
  createdAt: string
}

export const columns: ColumnDef<CategoryColumn>[] = [
  {
    accessorKey: "name",
    header: "Navn",
  },
  {
    accessorKey: "billboard",
    header: "Tavle",
    cell: ({ row }) => row.original.billboardLabel,
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
