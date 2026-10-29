"use client"

import {
  demoCategoryData,
  demoColorData,
  demoPriceRanges,
  demoSizeData,
  demoTagData,
} from "@/data/demoData"
import { useState } from "react"

export function FilterSideBar() {
  const [showAllCategory, setShowAllCategory] = useState(false)
  const [showAllPriceRanges, setShowAllPriceRanges] = useState(false)
  const [showAllColors, setShowAllColors] = useState(false)
  const [showAllSizes, setShowAllSizes] = useState(false)
  const [showAllTags, setShowAllTags] = useState(false)
  const [selectedCategoryIds, showSelectedCategoryIds] = useState([])
  const demoPrices = showAllPriceRanges
    ? demoPriceRanges
    : demoPriceRanges.slice(0, 3)

  const demoCategories = showAllCategory
    ? demoCategoryData
    : demoCategoryData.slice(0, 3)

  const demoColors = showAllColors ? demoColorData : demoColorData.slice(0, 3)
  const demoSizes = showAllSizes ? demoSizeData : demoSizeData.slice(0, 3)
  const demoTags = showAllTags ? demoTagData : demoTagData.slice(0, 3)

  console.log(demoColors[0].hex)

  return (
    <div className="sticky left-0 min-h-full w-full rounded-md bg-white px-2 py-4 shadow-sm md:px-4 md:py-6">
      <h3 className="text-lg font-semibold">Filters</h3>
      <div className="mt-3">
        <h4 className="mb-3 text-sm font-medium">Category</h4>

        {/* Categories */}
        {demoCategories.length <= 0 ? (
          <div className="mt-2 flex min-h-64 flex-col gap-2">
            <li className="list-none text-sm text-primary-background/40">
              No Categories Available
            </li>
          </div>
        ) : (
          <div className="space-y-2">
            {demoCategories.map((cat) => (
              <div key={cat._id} className="flex items-center gap-2">
                <input
                  className="list-none border border-primary-background/30 text-sm text-primary-background accent-primary-background shadow-sm drop-shadow-2xl"
                  type="checkbox"
                  name={cat.name}
                ></input>
                <label
                  htmlFor={cat.name}
                  className="text-sm text-primary-background/80"
                >
                  {(cat.name as string).length > 15
                    ? `${cat.name?.slice(0, 15)}...`
                    : `${cat.name}`}
                </label>
              </div>
            ))}
            {showAllCategory ? (
              <button
                onClick={() => setShowAllCategory(false)}
                className="bg-transparent text-sm text-blue-500 transition-all duration-100 active:scale-95 active:opacity-90"
              >
                - Less
              </button>
            ) : (
              <button
                onClick={() => setShowAllCategory(true)}
                className="bg-transparent text-sm text-blue-500 transition-all duration-100 active:scale-95 active:opacity-90"
              >
                + More
              </button>
            )}
          </div>
        )}

        {/* Sub Category */}
        <div className="my-4 w-full border-b border-primary-background/10"></div>
        <div>
          <h4 className="text-sm text-primary-background">Sub Category</h4>
        </div>
        <div className="my-4 w-full border-b border-primary-background/10"></div>

        {/* Prices */}
        <div className="text-sm text-primary-background">Price</div>
        {demoPrices.length <= 0 ? (
          <div className="mt-2 flex min-h-64 flex-col gap-2">
            <li className="list-none text-sm text-primary-background/40">
              No Price Range Available
            </li>
          </div>
        ) : (
          <div className="space-y-2">
            {demoPrices.map((prices) => (
              <div key={prices.id} className="flex items-center gap-2">
                <input
                  className="list-none border border-primary-background/30 text-sm text-primary-background accent-primary-background shadow-sm drop-shadow-2xl"
                  type="checkbox"
                  name={prices.id}
                ></input>
                <label
                  htmlFor={prices.id}
                  className="text-sm text-primary-background/80"
                >
                  {(prices.label as string).length > 15
                    ? `${prices.label.slice(0, 15)}...`
                    : `${prices.label}`}
                </label>
              </div>
            ))}
            {showAllPriceRanges ? (
              <button
                onClick={() => setShowAllPriceRanges(false)}
                className="bg-transparent text-sm text-blue-500 transition-all duration-100 active:scale-95 active:opacity-90"
              >
                - Less
              </button>
            ) : (
              <button
                onClick={() => setShowAllPriceRanges(true)}
                className="bg-transparent text-sm text-blue-500 transition-all duration-100 active:scale-95 active:opacity-90"
              >
                + More
              </button>
            )}
          </div>
        )}
        <div className="my-4 w-full border-b border-primary-background/10"></div>

        {/* Sized */}
        {demoSizes.length <= 0 ? (
          <div className="mt-2 flex min-h-64 flex-col gap-2">
            <li className="list-none text-sm text-primary-background/40">
              No Sizes Available
            </li>
          </div>
        ) : (
          <div className="space-y-2">
            {demoSizes.map((size) => (
              <div key={size.id} className="flex items-center gap-2">
                <input
                  className="list-none border border-primary-background/30 text-sm text-primary-background accent-primary-background shadow-sm drop-shadow-2xl"
                  type="checkbox"
                  name={size.label}
                ></input>
                <label
                  htmlFor={size.label}
                  className="text-sm text-primary-background/80"
                >
                  {(size.label as string).length > 15
                    ? `${size.label?.slice(0, 15)}...`
                    : `${size.label}`}
                </label>
              </div>
            ))}
            {showAllSizes ? (
              <button
                onClick={() => setShowAllSizes(false)}
                className="bg-transparent text-sm text-blue-500 transition-all duration-100 active:scale-95 active:opacity-90"
              >
                - Less
              </button>
            ) : (
              <button
                onClick={() => setShowAllSizes(true)}
                className="bg-transparent text-sm text-blue-500 transition-all duration-100 active:scale-95 active:opacity-90"
              >
                + More
              </button>
            )}
          </div>
        )}

        <div className="my-4 w-full border-b border-primary-background/10"></div>

        {/* Colors */}
        {demoColors.length <= 0 ? (
          <div className="mt-2 flex min-h-64 flex-col gap-2">
            <li className="list-none text-sm text-primary-background/40">
              No Colors Available
            </li>
          </div>
        ) : (
          <div className="space-y-2">
            {demoColors.map((color) => (
              <div key={color.id} className="flex items-center gap-2">
                <input
                  className="list-none border border-primary-background/30 text-sm text-primary-background accent-primary-background shadow-sm drop-shadow-2xl"
                  type="checkbox"
                  name={color.name}
                ></input>
                <label
                  htmlFor={color.name}
                  className="text-sm text-primary-background/80"
                >
                  {(color.name as string).length > 15
                    ? `${color.name?.slice(0, 15)}...`
                    : `${color.name}`}
                </label>
                <p className={`h-6 w-6 bg-[${color.hex}]`}></p>
              </div>
            ))}
            {showAllColors ? (
              <button
                onClick={() => setShowAllColors(false)}
                className="bg-transparent text-sm text-blue-500 transition-all duration-100 active:scale-95 active:opacity-90"
              >
                - Less
              </button>
            ) : (
              <button
                onClick={() => setShowAllColors(true)}
                className="bg-transparent text-sm text-blue-500 transition-all duration-100 active:scale-95 active:opacity-90"
              >
                + More
              </button>
            )}
          </div>
        )}

        <div className="my-4 w-full border-b border-primary-background/10"></div>

        {/* Tags */}
        {demoTags.length <= 0 ? (
          <div className="mt-2 flex min-h-64 flex-col gap-2">
            <li className="list-none text-sm text-primary-background/40">
              No Tags Available
            </li>
          </div>
        ) : (
          <div className="space-y-2">
            {demoTags.map((tag) => (
              <div key={tag.id} className="flex items-center gap-2">
                <input
                  className="list-none border border-primary-background/30 text-sm text-primary-background accent-primary-background shadow-sm drop-shadow-2xl"
                  type="checkbox"
                  name={tag.label}
                ></input>
                <label
                  htmlFor={tag.label}
                  className="text-sm text-primary-background/80"
                >
                  {(tag.label as string).length > 15
                    ? `${tag.label?.slice(0, 15)}...`
                    : `${tag.label}`}
                </label>
              </div>
            ))}
            {showAllTags ? (
              <button
                onClick={() => setShowAllTags(false)}
                className="bg-transparent text-sm text-blue-500 transition-all duration-100 active:scale-95 active:opacity-90"
              >
                - Less
              </button>
            ) : (
              <button
                onClick={() => setShowAllTags(true)}
                className="bg-transparent text-sm text-blue-500 transition-all duration-100 active:scale-95 active:opacity-90"
              >
                + More
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
