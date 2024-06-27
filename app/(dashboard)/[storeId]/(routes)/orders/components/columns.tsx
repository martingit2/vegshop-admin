"use client"

import { ColumnDef } from "@tanstack/react-table"


export type OrderColumn = {
  id: string
  phone: string
  address: string
  isPaid: boolean
  totalPrice: string
  products: string
  createdAt: string
}

export const columns: ColumnDef<OrderColumn>[] = [
  {
    accessorKey: "products",
    header: "Produkter",
  },

  {
    accessorKey: "phone",
    header: "Telefon",
  },

  {
    accessorKey: "address",
    header: "Addresse",
  },

  {
    accessorKey: "totalPrice",
    header: "Total pris",
  },

  {
    accessorKey: "isPaid",
    header: "Er betalt",
  },

  {
    accessorKey: "createdAt",
    header: "Dato",
  },
]
