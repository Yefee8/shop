import { cn } from "@/lib/utils";

export default function DataTable({
  columns,
  rows,
}: {
  columns: string[];
  rows: any;
}) {
  return (
    <div className="w-full flex flex-col rounded-[6px] border border-[#383854]">
      <div className="w-full flex justify-between text-base py-2.5 px-6 overflow-x-auto font-bold gap-4 no-scrollbar rounded-t-[6px] bg-[#383854]">
        {columns.map((column, index) => {
          return <div className={cn(index === 2 ? "text-right" : index === 1 ? "text-center" : "text-left")} style={{
            width:`calc(100%/${columns.length})` 
          }}>{column}</div>;
        })}
      </div>

      <div className="flex flex-col gap-[28px] py-5 overflow-y-auto h-[280px]">
        {rows.map((rowItems: string[]) => {
          return (
            <div className="flex justify-between text-base py-2.5 px-6 gap-4 no-scrollbar font-bold">
              {rowItems.map((row, index) => {
                return <div className={cn(index === 2 ? "text-right" : index === 1 ? "text-center" : "text-left")} style={{
                  width:`calc(100%/${rowItems.length})`
                }}>{row}</div>;
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
