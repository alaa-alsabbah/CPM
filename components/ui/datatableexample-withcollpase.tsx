"use client";

import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  getExpandedRowModel,
} from "@tanstack/react-table";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const data: Payment[] = [
  {
    id: "m5gr84i9",
    name: "Organization-Government-OT100",
    siblings: 316,
    status: "Stopped",
    created: " Jan 02 , 11:23:22 AM",
    tags: "Temp",
    children: [
      { id: "1", name: "Tenant -Government-OT100", siblings: 50, status: "Stopped", created: "Jan 03", tags: "Info" },
      { id: "2", name: "Tenant -Government-OT100", siblings: 30, status: "Stopped", created: "Jan 04", tags: "Critical" },
    ],
  },

  {
    id: "m5gr84i9",
    name: "Organization-Government-OT100",
    siblings: 316,
    status: "Stopped",
    created: " Jan 02 , 11:23:22 AM",
    tags: "Temp",
    children: [
      { id: "1", name: "Tenant -Government-OT100", siblings: 50, status: "Active", created: "Jan 03", tags: "Info" },
      { id: "2", name: "Tenant -Government-OT100", siblings: 30, status: "Stopped", created: "Jan 04", tags: "Critical" },
    ],
  },
];

export type Payment = {
  id: string;
  name: string;
  siblings: number;
  status: "Active" | "Stopped";
  created: string;
  tags: string;
  children?: Payment[];
};

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => {
      const isExpanded = row.getIsExpanded();
      const hasChildren = row.original.children?.length > 0;

      const paddingLeft = `${row.depth * 40}px`;

      return (
        <div className="flex items-center" style={{ paddingLeft }}>
          {hasChildren && (
            <button 
              className="mr-2 text-primary text-lg"
              onClick={row.getToggleExpandedHandler()}
            >
              {isExpanded ? (
                <i className="icon-keyboard_arrow_down"></i>
              ) : (
                <i className="icon-keyboard_arrow_right"></i>
              )}
            </button>
          )}

          <span>

            {hasChildren ? (
              <i className="icon-ic_org_org org mr-2"></i>
            ) : (
              <i className="icon-ic_org_group group mr-2"></i>
            )}
          </span>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger> <div className="text-right font-medium">   <a href="#">{row.getValue("name")} </a> </div></TooltipTrigger>
              <TooltipContent content={row.getValue("name")}>
                <span>{row.getValue("name")} </span> 
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          {/* Row Name */}

        </div>
      );
    },
  },


  {
    accessorKey: "siblings",
    header: () => <div className="text-left">Siblings</div>,
    cell: ({ row }) => (
      <div className="text-right font-medium">
        <TooltipProvider>
          <div className="flex items-center">
            {/* Tooltip for Machines */}
            <Tooltip>
              <TooltipTrigger>
                <div className="mr-2 flex items-center">
                  <span className="icon-ic_machine_colored">
                    <span className="path1"></span>
                    <span className="path2"></span>
                    <span className="path3"></span>
                    <span className="path4"></span>
                    <span className="path5"></span>
                    <span className="path6"></span>
                    <span className="path7"></span>
                  </span>{" "}
                  4
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <span>4 Machines</span>
              </TooltipContent>
            </Tooltip>
  
            {/* Tooltip for Balancers */}
            <Tooltip>
              <TooltipTrigger>
                <div className="mr-2 flex items-center">
                  <span className="icon-ic_balancers_colored">
                    <span className="path1"></span>
                    <span className="path2"></span>
                    <span className="path3"></span>
                    <span className="path4"></span>
                    <span className="path5"></span>
                    <span className="path6"></span>
                  </span>{" "}
                  1
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <span>1 Balancer</span>
              </TooltipContent>
            </Tooltip>
  
            {/* Tooltip for Firewalls */}
            <Tooltip>
              <TooltipTrigger>
                <div className="mr-2 flex items-center">
                  <span className="icon-ic_firewalls_colored">
                    <span className="path1"></span>
                    <span className="path2"></span>
                    <span className="path3"></span>
                    <span className="path4"></span>
                    <span className="path5"></span>
                  </span>{" "}
                  2
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <span>2 Firewalls</span>
              </TooltipContent>
            </Tooltip>
          </div>
        </TooltipProvider>
      </div>
    ),
  }
  ,
  {
    accessorKey: "Resource",
    header: () => <div className="text-left">Resource</div>,
    cell: ({ row }) => (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <div className="text-right font-medium">
              <div className="flex items-center">
                <div className="mr-2">
                  <i className="icon-ic_org_user user"></i> {row.getValue("userCount")} 18
                </div>
                <div>
                  <i className="icon-ic_org_group group"></i> {row.getValue("groupCount")} 4
                </div>
              </div>
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <span>
              Users: {row.getValue("userCount")} 18 
               Groups: {row.getValue("groupCount")} 4
            </span>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <div className="capitalize flex items-end gap-x-1.5">
        <div className="flex-none rounded-full bg-red-500/20 p-1">
          <div className="size-1.5 rounded-full bg-red-500"></div>
        </div>
        {row.getValue("status")}
      </div>
    ),
  },
  {
    accessorKey: "tags",
    header: "Tags",
    cell: ({ row }) => <div className="cpm-tags">{row.getValue("tags")}</div>,
  },
  {
    accessorKey: "created",
    header: ({ column }) => (
      <Button
        className="bg-transparent items-end flex"
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        <span className="icon-sort mr-2"></span>
        Created
      </Button>
    ),
    cell: ({ row }) => <div className="lowercase">{row.getValue("created")}</div>,
  },
];

export function Datatableexamplewithcollapse() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState<Record<string, boolean>>({});
  const [expanded, setExpanded] = React.useState<Record<string, boolean>>({});

  const table = useReactTable({
    data,
    columns,
    state: { sorting, columnFilters, columnVisibility, rowSelection, expanded },
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    onExpandedChange: setExpanded,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
    getSubRows: (row) => row.children || [],
  });

  return (
    <div className="w-full">
      {/* Filter and Column Options */}
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter emails..."
          value={table.getColumn("email")?.getFilterValue() || ""}
          onChange={(event) => table.getColumn("email")?.setFilterValue(event.target.value)}
          className="max-w-sm"
        />
      </div>
      {/* Table */}
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(header.column.columnDef.header, header.getContext())}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  No results found. Try adjusting filters or search criteria.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default Datatableexamplewithcollapse;
