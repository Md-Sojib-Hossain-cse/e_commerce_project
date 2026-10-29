// src/types/product.ts
export type BrandShape = {
  _id?: string
  name?: string
  images?: Array<{ layout: string; image: string }>
  icon?: { name: string; url: string }
  createdAt?: string
  updatedAt?: string
  __v?: number
}

export type CategoryShape = {
  _id?: string
  name?: string
  slug?: string
  details?: string
  icon?: { name: string; url: string }
  image?: string
  type?: string
  createdAt?: string
  updatedAt?: string
  __v?: number
}

export type TagShape = {
  _id?: string
  name?: string
  slug?: string
  details?: string
  icon?: { name: string; url: string }
  image?: string
  type?: string
  createdAt?: string
  updatedAt?: string
  __v?: number
}

export interface IProduct {
  _id: string
  name?: string
  image?: string
  price?: number
  shopId: string
  featuredImg: string
  gallery: string[]
  brandAndCategories: {
    brand: string | { name: string } // Both string and object supported
    categories: Array<{ name: string }>
    tags: Array<{ name: string }>
  }
  description: {
    name: string
    slug: string // Required
    unit: string
    description: string
    status: string
  }
  productType: string
  productInfo: {
    price: number
    salePrice: number
    quantity: number
    sku: string
    width: string
    height: string
    length: string
  }
  specifications?: Array<{ key: string; value: string; _id?: string }>
  rating?: number
  createdAt?: string
  updatedAt?: string
}

export interface RemoteProduct {
  _id: string
  description?: {
    name?: string
    slug?: string
    unit?: string
    description?: string
    status?: string
  }
  productType?: string
  productInfo?: {
    price?: number
    salePrice?: number
    quantity?: number
    sku?: string
    width?: string
    height?: string
    length?: string
  }
  shopId?: string
  featuredImg?: string
  gallery?: string[]
  brandAndCategories?: {
    brand?: string | { name: string }
    categories?: Array<{ name: string }>
    tags?: Array<{ name: string }>
  }
  specifications?: Array<{ key: string; value: string; _id?: string }>
}

export interface ProductData {
  _id: string
  id?: number
  name: string
  price: number
  subtitle?: string
  image: string
  slug?: string
  description?: string
  category?: string
  inStock?: boolean
  rating?: number
  discount?: number
}

export interface ProductsResponse {
  data: ProductData[]
  success: boolean
  message?: string
}

export interface IProductsState {
  products: IProduct[]
  loading: boolean
  error: string | null
  singleProduct: IProduct | null
}

export type UIProduct = {
  id: string
  title: string
  image: string
  price: number
  salePrice?: number | null
  status?: string
  tags?: string[]
  categories?: string[]
}

// helpers
const asString = (v: unknown, fallback = ""): string =>
  typeof v === "string" ? v : fallback

const asNumber = (v: unknown, fallback = 0): number => {
  if (typeof v === "number" && Number.isFinite(v)) return v
  const n = typeof v === "string" ? Number(v) : NaN
  return Number.isFinite(n) ? n : fallback
}

const normalizeNames = (list: unknown): string[] => {
  if (!Array.isArray(list)) return []
  return list.flatMap((item) => {
    if (typeof item === "string") return [item]
    if (item && typeof item === "object" && "name" in (item as object)) {
      const nm = (item as { name?: unknown }).name
      return typeof nm === "string" ? [nm] : []
    }
    return []
  })
}

// type guards
export const isIProduct = (v: unknown): v is IProduct => {
  if (!v || typeof v !== "object") return false
  const o = v as Partial<IProduct>
  return typeof o.featuredImg === "string" && !!o.productInfo && !!o.description
}

export const isProductData = (v: unknown): v is ProductData => {
  if (!v || typeof v !== "object") return false
  const o = v as Partial<ProductData>
  return typeof o.name === "string" && "price" in (o as object)
}

// normalizer
export function toUIProduct(src: IProduct | ProductData): UIProduct {
  if (isIProduct(src)) {
    // price logic: use salePrice if > 0, otherwise use regular price
    const salePrice = asNumber(src.productInfo?.salePrice, 0)
    const regularPrice = asNumber(src.productInfo?.price, 0)
    const displayPrice = salePrice > 0 ? salePrice : regularPrice
    const displaySalePrice = salePrice > 0 ? salePrice : null
    const originalPrice = salePrice > 0 ? regularPrice : null

    return {
      id: asString(src._id, ""),
      title: asString(src.description?.name, "Product"),
      image: asString(src.featuredImg, "/placeholder-product.jpg"),
      price: originalPrice || displayPrice,
      salePrice: displaySalePrice,
      status: (src.productInfo as { status?: string })?.status,
      tags: normalizeNames(src.brandAndCategories?.tags as TagShape[]),
      categories: normalizeNames(
        src.brandAndCategories?.categories as CategoryShape[]
      ),
    }
  }

  // ProductData -> UIProduct
  return {
    id: String(src.id),
    title: asString(src.name, "Product"),
    image: src.image ?? "/placeholder-product.jpg",
    price: asNumber(src.price, 0),
    salePrice: undefined,
    status: undefined,
    tags: [],
    categories: [],
  }
}

export function toUIList(
  list: readonly (IProduct | ProductData)[] | undefined
): UIProduct[] {
  if (!Array.isArray(list)) return []
  return list.map(toUIProduct)
}

export interface RemoteSubCategory {
  _id?: string
  id?: string
  slug?: string
  name?: string
  label?: string
}

export interface RemoteCategory {
  _id?: string
  id?: string
  slug?: string
  name?: string
  label?: string
  image?: string

  icon?: {
    url?: string
  }

  subCategories?: RemoteSubCategory[]
}
