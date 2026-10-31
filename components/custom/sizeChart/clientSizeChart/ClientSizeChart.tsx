import SizeChartTable from "./SizeChartTable"

const ClientSizeChart = () => {
  return (
    <div className="space-y-4 px-2 pt-4 pb-6 md:space-y-6 md:p-4 md:pb-8 lg:p-6 lg:pb-10">
      <h2 className="text-center text-2xl font-bold text-primary-background md:text-3xl lg:text-4xl">
        Size Chart
      </h2>
      <div className="space-y-3 lg:space-y-4">
        <h3 className="text-lg font-semibold text-primary-background md:text-xl lg:text-2xl">
          Clothing Size Chart
        </h3>
        <p className="text-xs text-primary-background/40 md:text-sm">
          All measurements are in inches. Sizes apply to T-Shirts, Shirts,
          Pants, and other clothing items.
        </p>
      </div>
      <SizeChartTable />
      <div className="mt-6 space-y-4 lg:mt-16">
        <h3 className="text-lg font-semibold text-primary-background md:text-xl lg:text-2xl">
          How to Measure
        </h3>
        <div className="space-y-2">
          <p>
            <span className="font-bold">Chest:</span> Measure around the fullest
            part of your chest, keeping the tape horizontal.
          </p>
          <p>
            <span className="font-bold">Length:</span> Measure from the highest
            point of the shoulder to the bottom hem.
          </p>
          <p>
            <span className="font-bold">Shoulder:</span> Measure from one
            shoulder point to the other across the back.
          </p>
          <p>
            <span className="font-bold">Waist:</span> Measure around your
            natural waistline.
          </p>
        </div>
        <p className="text-sm text-primary-background/40">
          Note: All measurements are in inches. For the best fit, please measure
          yourself and compare with our size chart.
        </p>
      </div>
    </div>
  )
}

export default ClientSizeChart
