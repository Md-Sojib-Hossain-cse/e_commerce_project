const ShopProductCardSkeleton = () => {
  return (
    <div className="group relative flex animate-pulse flex-col overflow-hidden rounded-lg border bg-white p-3">
      {/* Product Image */}
      <div className="relative mx-auto grid h-28 w-full max-w-45 place-items-center sm:h-32 md:h-36">
        <div className="h-20 w-24 rounded-lg bg-gray-200 sm:h-24 sm:w-28" />
      </div>

      {/* Product Information */}
      <div className="mt-2 space-y-3">
        <div className="h-4 w-3/4 rounded bg-gray-200" />
        <div className="h-3 w-1/2 rounded bg-gray-100" />
      </div>

      {/* Price and Cart Icon */}
      <div className="mt-4 flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <div className="h-5 w-16 rounded bg-gray-200" />
          <div className="h-4 w-12 rounded bg-gray-100" />
        </div>

        <div className="h-8 w-8 rounded-md bg-gray-200" />
      </div>
    </div>
  )
}

export default ShopProductCardSkeleton
