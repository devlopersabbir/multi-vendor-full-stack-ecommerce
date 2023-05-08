import {
  Box,
  Button,
  Flex,
  HStack,
  Icon,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
  MenuList,
  Select,
  Stack,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useColorMode,
} from "@chakra-ui/react";
import { RankingInfo, rankItem } from "@tanstack/match-sorter-utils";
import {
  ColumnDef,
  FilterFn,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useState } from "react";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { BiArrowToLeft, BiArrowToRight } from "react-icons/bi";
import { IoSearchOutline } from "react-icons/io5";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

declare module "@tanstack/table-core" {
  interface FilterFns {
    fuzzy: FilterFn<unknown>;
  }
  interface FilterMeta {
    itemRank: RankingInfo;
  }
}

export type DataTableProps<Data extends object> = {
  data: Data[];
  columns: ColumnDef<Data, any>[];
};

function Datatable<Data extends object>({
  data,
  columns,
}: DataTableProps<Data>) {
  // console.log("from table page", data);
  // data.map((item: any) => console.log(item));
  const [globalFilter, setGlobalFilter] = useState<string>("");

  // my code here
  const [columnCustom, setColumnCustom] = useState<any>(columns);
  const [allData, setAllData] = useState<Array<any>>(data ?? data);
  const [tableData, setTableData] = useState<Array<any>>(data ?? data);
  const [startDate, setStartData] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(new Date());
  type TselectionRange = {
    startDate: Date;
    endDate: Date;
    key: string;
  };
  const handleChangeForDateRangeFilter = (ranges: any) => {
    let filterdWithRange = allData.filter((data: any) => {
      let dataInsertedData = new Date(data?.createdAt);
      return (
        dataInsertedData >= ranges.selection.startDate &&
        dataInsertedData <= ranges.selection.endDate
      );
    });

    setStartData(ranges?.selection?.startDate);
    setEndDate(ranges?.selection?.endDate);
    setTableData(filterdWithRange);
  };
  const selectionRange: TselectionRange = {
    startDate,
    endDate,
    key: "selection",
  };
  // end

  const fuzzyFilter: FilterFn<any> = (row, columnId, value, addMeta) => {
    // Rank the item
    const itemRank = rankItem(row.getValue(columnId), value);

    // Store the itemRank info
    addMeta({
      itemRank,
    });
    // Return if the item should be filtered in/out
    return itemRank.passed;
  };
  const table = useReactTable({
    columns: columnCustom,
    data: tableData,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    state: {
      globalFilter,
    },
    filterFns: {
      fuzzy: fuzzyFilter,
    },
    onGlobalFilterChange: setGlobalFilter,
    globalFilterFn: fuzzyFilter,
    getFilteredRowModel: getFilteredRowModel(),
  });

  const { colorMode } = useColorMode();
  return (
    <Stack
      w="full"
      bg={colorMode === "dark" ? "blackAlpha.300" : "unset"}
      color={colorMode === "dark" ? "white" : "unset"}
    >
      <Flex w="full" align="center" justify="space-between">
        <Flex align="center" gap={3}>
          <Text>Items per page: </Text>
          <Select
            value={table.getState().pagination.pageSize}
            onChange={(e) => {
              table.setPageSize(Number(e.target.value));
            }}
            width="69px"
          >
            {[5, 10, 20, 50, 100].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                {pageSize}
              </option>
            ))}
          </Select>
          <Menu>
            <MenuButton as={Button}>Date - Filter</MenuButton>
            <MenuList>
              <DateRangePicker
                ranges={[selectionRange]}
                onChange={handleChangeForDateRangeFilter}
              />
            </MenuList>
          </Menu>
        </Flex>

        <Box>
          <InputGroup>
            <InputLeftElement>
              <Icon as={IoSearchOutline} fontSize="22px" />
            </InputLeftElement>
            <Input
              placeholder="Search"
              value={globalFilter ?? ""}
              onChange={(e) => setGlobalFilter(e.target.value)}
            />
          </InputGroup>
        </Box>
      </Flex>
      <Table size="md">
        <Thead
          bg={colorMode === "dark" ? "blackAlpha.300" : "unset"}
          borderBottom="0.5px solid #D9D9D9"
        >
          {table.getHeaderGroups().map((headerGroup:any) => (
            <Tr key={headerGroup.id}>
              {headerGroup.headers.map((header:any) => {
                const meta: any = header.column.columnDef.meta;
                return (
                  <Th key={header.id}>
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </Th>
                );
              })}
            </Tr>
          ))}
        </Thead>
        <Tbody>
          {table.getRowModel().rows.map((row:any, i:number) => (
            <Tr
              key={row.id}
              borderBottom="0.3px solid #D9D9D9"
              bg={
                i % 2
                  ? colorMode === "dark"
                    ? "blackAlpha.500"
                    : "#FCFCFC"
                  : "unset"
              }
            >
              {row.getVisibleCells().map((cell:any) => {
                const meta: any = cell.column.columnDef.meta;
                return (
                  <Td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </Td>
                );
              })}
            </Tr>
          ))}
        </Tbody>
      </Table>
      <Flex w="full" align="center" justify="space-between" px={6}>
        <Text>
          {table.getState().pagination.pageIndex + 1} -{" "}
          {table.getState().pagination.pageSize} of {table.getPageCount()}
        </Text>
        <Text fontWeight="bold">Total: {tableData.length}</Text>
        <HStack spacing={0}>
          <IconButton
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
            variant="ghost"
            aria-label="home"
            icon={<Icon as={BiArrowToLeft} fontSize="2xl" />}
          />
          <IconButton
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            variant="ghost"
            aria-label="prev"
            icon={<Icon as={MdArrowBackIos} />}
          />
          <IconButton
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            variant="ghost"
            aria-label="next"
            icon={<Icon as={MdArrowForwardIos} />}
          />
          <IconButton
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            disabled={!table.getCanNextPage()}
            variant="ghost"
            aria-label="ensd"
            icon={<Icon as={BiArrowToRight} fontSize="2xl" />}
          />
        </HStack>
      </Flex>
    </Stack>
  );
}

export default Datatable;