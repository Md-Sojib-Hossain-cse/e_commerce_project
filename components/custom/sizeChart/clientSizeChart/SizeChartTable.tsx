import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const SizeChartTable = () => {
  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="border-r border-primary-foreground bg-primary-background font-semibold text-primary-foreground">
              Category
            </TableHead>
            <TableHead className="border-r border-primary-foreground bg-primary-background font-semibold text-primary-foreground">
              Size
            </TableHead>
            <TableHead className="border-r border-primary-foreground bg-primary-background font-semibold text-primary-foreground">
              Chest/Bust
            </TableHead>
            <TableHead className="border-r border-primary-foreground bg-primary-background font-semibold text-primary-foreground">
              Length
            </TableHead>
            <TableHead className="border-r border-primary-foreground bg-primary-background font-semibold text-primary-foreground">
              Shoulder
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="border-b border-primary-background/10">
          {/* Men */}
          <TableRow className="border border-primary-background/10">
            <TableCell
              rowSpan={5}
              className="border-x border-primary-background/10 font-semibold"
            >
              Men
            </TableCell>
            <TableCell className="border-x border-primary-background/10">
              S
            </TableCell>
            <TableCell className="border-x border-primary-background/10">
              36-38&quot;
            </TableCell>
            <TableCell className="border-x border-primary-background/10">
              27-29&quot;
            </TableCell>
            <TableCell className="border-x border-primary-background/10">
              16-17&quot;
            </TableCell>
          </TableRow>
          <TableRow className="border border-primary-background/10">
            <TableCell className="border-x border-primary-background/10">
              M
            </TableCell>
            <TableCell className="border-x border-primary-background/10">
              38-40&quot;
            </TableCell>
            <TableCell className="border-x border-primary-background/10">
              28-30&quot;
            </TableCell>
            <TableCell className="border-x border-primary-background/10">
              17-18&quot;
            </TableCell>
          </TableRow>
          <TableRow className="border border-primary-background/10">
            <TableCell className="border-x border-primary-background/10">
              L
            </TableCell>
            <TableCell className="border-x border-primary-background/10">
              40-42&quot;
            </TableCell>
            <TableCell className="border-x border-primary-background/10">
              29-31&quot;
            </TableCell>
            <TableCell className="border-x border-primary-background/10">
              18-19&quot;
            </TableCell>
          </TableRow>
          <TableRow className="border border-primary-background/10">
            <TableCell className="border-x border-primary-background/10">
              XL
            </TableCell>
            <TableCell className="border-x border-primary-background/10">
              42-44&quot;
            </TableCell>
            <TableCell className="border-x border-primary-background/10">
              30-32&quot;
            </TableCell>
            <TableCell className="border-x border-primary-background/10">
              19-20&quot;
            </TableCell>
          </TableRow>
          <TableRow className="border border-primary-background/10">
            <TableCell className="border-primary-background/10c border-x">
              XXL
            </TableCell>
            <TableCell className="border-x border-primary-background/10">
              44-46&quot;
            </TableCell>
            <TableCell className="border-x border-primary-background/10">
              31-33&quot;
            </TableCell>
            <TableCell className="border-x border-primary-background/10">
              20-21&quot;
            </TableCell>
          </TableRow>

          {/* Women */}
          <TableRow className="border border-primary-background/10">
            <TableCell
              rowSpan={5}
              className="border-x border-primary-background/10 font-semibold"
            >
              Women
            </TableCell>
            <TableCell className="border-x border-primary-background/10">
              S
            </TableCell>
            <TableCell className="border-x border-primary-background/10">
              32-34&quot;
            </TableCell>
            <TableCell className="border-x border-primary-background/10">
              25-38&quot;
            </TableCell>
            <TableCell className="border-x border-primary-background/10">
              14&quot;
            </TableCell>
          </TableRow>
          <TableRow className="border border-primary-background/10">
            <TableCell className="border-x border-primary-background/10">
              M
            </TableCell>
            <TableCell className="border-x border-primary-background/10">
              34-36&quot;
            </TableCell>
            <TableCell className="border-x border-primary-background/10">
              26-40&quot;
            </TableCell>
            <TableCell className="border-x border-primary-background/10">
              15&quot;
            </TableCell>
          </TableRow>
          <TableRow className="border border-primary-background/10">
            <TableCell className="border-x border-primary-background/10">
              L
            </TableCell>
            <TableCell className="border-x border-primary-background/10">
              36-38&quot;
            </TableCell>
            <TableCell className="border-x border-primary-background/10">
              27-42&quot;
            </TableCell>
            <TableCell className="border-x border-primary-background/10">
              16&quot;
            </TableCell>
          </TableRow>
          <TableRow className="border border-primary-background/10">
            <TableCell className="border-x border-primary-background/10">
              XL
            </TableCell>
            <TableCell className="border-x border-primary-background/10">
              38-40&quot;
            </TableCell>
            <TableCell className="border-x border-primary-background/10">
              28-44&quot;
            </TableCell>
            <TableCell className="border-x border-primary-background/10">
              17&quot;
            </TableCell>
          </TableRow>
          <TableRow className="border border-primary-background/10">
            <TableCell className="border-primary-background/10c border-x">
              XXL
            </TableCell>
            <TableCell className="border-x border-primary-background/10">
              40-42&quot;
            </TableCell>
            <TableCell className="border-x border-primary-background/10">
              29-46&quot;
            </TableCell>
            <TableCell className="border-x border-primary-background/10">
              18&quot;
            </TableCell>
          </TableRow>
          {/* Kids */}
          <TableRow className="border border-primary-background/10">
            <TableCell
              rowSpan={5}
              className="border-x border-primary-background/10 font-semibold"
            >
              Kids
            </TableCell>
            <TableCell className="border-x border-primary-background/10">
              2-3Y
            </TableCell>
            <TableCell className="border-x border-primary-background/10">
              22-24&quot;
            </TableCell>
            <TableCell className="border-x border-primary-background/10">
              16&quot;
            </TableCell>
            <TableCell className="border-x border-primary-background/10">
              -
            </TableCell>
          </TableRow>
          <TableRow className="border border-primary-background/10">
            <TableCell className="border-x border-primary-background/10">
              4-5Y
            </TableCell>
            <TableCell className="border-x border-primary-background/10">
              24-26&quot;
            </TableCell>
            <TableCell className="border-x border-primary-background/10">
              18&quot;
            </TableCell>
            <TableCell className="border-x border-primary-background/10">
              -
            </TableCell>
          </TableRow>
          <TableRow className="border border-primary-background/10">
            <TableCell className="border-x border-primary-background/10">
              6-7Y
            </TableCell>
            <TableCell className="border-x border-primary-background/10">
              26-28&quot;
            </TableCell>
            <TableCell className="border-x border-primary-background/10">
              20&quot;
            </TableCell>
            <TableCell className="border-x border-primary-background/10">
              -
            </TableCell>
          </TableRow>
          <TableRow className="border border-primary-background/10">
            <TableCell className="border-x border-primary-background/10">
              8-9Y
            </TableCell>
            <TableCell className="border-x border-primary-background/10">
              28-30&quot;
            </TableCell>
            <TableCell className="border-x border-primary-background/10">
              22&quot;
            </TableCell>
            <TableCell className="border-x border-primary-background/10">
              -
            </TableCell>
          </TableRow>
          <TableRow className="border border-primary-background/10">
            <TableCell className="border-primary-background/10c border-x">
              10-12Y
            </TableCell>
            <TableCell className="border-x border-primary-background/10">
              30-32&quot;
            </TableCell>
            <TableCell className="border-x border-primary-background/10">
              24&quot;
            </TableCell>
            <TableCell className="border-x border-primary-background/10">
              -
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  )
}

export default SizeChartTable
