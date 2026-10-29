"use client"

import { Search } from "lucide-react"
import React from "react"

const ProductSearch = (params: { productCount: number }) => {
  //Handle searchbar action
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget

    // Extract form data
    const formData = new FormData(form)

    // Get the input value
    const query = formData.get("search") as string

    console.log("Search Query:", query)
  }

  return (
    <div className="flex flex-col items-center justify-between gap-5 md:flex-row">
      <p className="order-2 w-full text-right text-sm text-primary-background/80 md:order-0 md:text-left">
        Showing {params.productCount || 0} products
      </p>
      <form
        onSubmit={handleSearch}
        className="flex w-full items-center justify-end gap-2"
      >
        <input
          type="search"
          name="search"
          placeholder="Search Products...."
          className="w-full rounded-lg border border-primary-background/20 p-2 lg:w-2/3"
        ></input>
        <button
          type="submit"
          className="flex h-10 w-12 items-center justify-center rounded-md bg-primary-background text-primary-foreground transition-all duration-100 active:scale-95 active:opacity-90"
        >
          <Search />
        </button>
      </form>
    </div>
  )
}

export default ProductSearch
