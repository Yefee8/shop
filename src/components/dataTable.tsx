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
        {columns.map((column) => {
          return <span>{column}</span>;
        })}
      </div>

      <div className="flex flex-col gap-[28px] py-5">
        {rows.map((rowItems: string[]) => {
          return (
            <div className="flex justify-between text-base py-2.5 px-6 overflow-x-auto gap-4 no-scrollbar font-bold">
              {rowItems.map((row) => {
                return <span>{row}</span>;
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
