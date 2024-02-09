import DashboardCard from "@/components/dashboardCard";
import DataTable from "@/components/dataTable";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { FaArrowUp } from "react-icons/fa6";

export const metadata: Metadata = {
  title: "SH Shop - Dashboard",
  description: "SH Shop Template, coded by Yefee, design by Moin Haikal",
  viewport: "width=device-width, initial-scale=1",
};

export default function Dashboard() {
  const mostSoldItems = [
    {
      name: "Jeans",
      percent: "70%",
    },
    {
      name: "Shirts",
      percent: "40%",
    },
    {
      name: "Hoodies",
      percent: "60%",
    },
    {
      name: "Caps",
      percent: "80%",
    },
    {
      name: "Others",
      percent: "20%",
    },
  ];

  const lineChartStats = [
    {
      profit: 100,
      loss: 60,
    },
    {
      profit: 85,
      loss: 90,
    },
    {
      profit: 100,
      loss: 40,
    },
    {
      profit: 30,
      loss: 22,
    },
    {
      profit: 48,
      loss: 60,
    },
    {
      profit: 90,
      loss: 100,
    },
    {
      profit: 80,
      loss: 20,
    },
    {
      profit: 20,
      loss: 40,
    },
    {
      profit: 40,
      loss: 60,
    },
    {
      profit: 80,
      loss: 40,
    },
    {
      profit: 100,
      loss: 40,
    },
    {
      profit: 20,
      loss: 40,
    },
  ];

  const rows = [
    ["Jean", "#888", "$120"],
    ["Shirt", "#887", "$45"],
    ["Belt", "#886", "$20"],
    ["Caps", "#885", "$15"],
    ["Hoodie", "#884", "$355"],
    ["Titanfall 2", "#883", "$4,49"],
  ];

  const columns = ["Products", "Order ID", "Amount"];

  return (
    <div className="md:w-[calc(100%-267px)] flex flex-col pb-16 gap-4 md:items-start md:mx-0 mx-4">
      <h1 className="font-bold w-full text-[22px]">Dashboard</h1>

      <div className="md:w-full w-[calc(100%-36px)] flex flex-row flex-wrap gap-4 items-center justify-between">
        <DashboardCard>
          <div className="flex flex-col">
            <div className="font-bold text-sm">Todays Sales</div>
            <div className="font-bold text-2xl">$35.31K</div>
            <div className="text-[#D7D7D7] text-sm font-bold">
              We have sold 123 items
            </div>
          </div>

          <div className="w-[60px] aspect-square rounded-full border-primary  border-t-[#E4E8EF] border-[15px] "></div>
        </DashboardCard>

        <DashboardCard>
          <div className="flex flex-col">
            <div className="font-bold text-sm">Todays Revenue</div>
            <div className="font-bold text-2xl">$8.2K</div>
            <div className="text-[#D7D7D7] text-sm font-bold">
              Availabale to payout
            </div>
          </div>

          <div className="w-[60px] aspect-square rounded-full border-secondary  border-t-[#E4E8EF] border-[15px] "></div>
        </DashboardCard>

        <DashboardCard>
          <div className="flex flex-col">
            <div className="font-bold text-sm">In Escrow</div>
            <div className="font-bold text-2xl">$18.2K</div>
            <div className="text-[#D7D7D7] text-sm font-bold">
              Availabale to payout
            </div>
          </div>

          <div className="w-[60px] aspect-square rounded-full border-accent  border-t-[#E4E8EF] border-[15px] "></div>
        </DashboardCard>
      </div>

      <div className="md:w-full w-[calc(100%-36px)] sm:min-w-[340px] flex md:gap-16 gap-4 2xl:flex-nowrap flex-wrap justify-between items-center">
        <div className="md:w-[calc(67%-16px)] w-full h-[305px] bg-card p-4 rounded-[5px] flex flex-col gap-3">
          <div className="w-full justify-between flex items-center">
            <div className="text-base font-bold">Total Revenue</div>

            <div className="flex gap-5">
              <div className="gap-1.5 font-bold flex items-center text-[#d7d7d7]">
                <div className="w-[9px] aspect-square rounded-full bg-primary"></div>
                Profit
              </div>

              <div className="gap-1.5 font-bold flex items-center text-[#d7d7d7]">
                <div className="w-[9px] aspect-square rounded-full bg-[#E3E7FC]"></div>
                Loss
              </div>
            </div>
          </div>

          <div className="gap-4 flex items-center">
            <div className="text-2xl font-bold">$50.4K</div>

            <div className="text-xs flex gap-1 items-center font-bold text-secondary">
              <FaArrowUp className="text-xl" />
              8% than last year
            </div>
          </div>

          <div className="mt-6 h-[159px] flex gap-5">
            <div className="flex items-end flex-col gap-[13px] text-xs font-bold text-[#d7d7d7]">
              <div>100k</div>
              <div>80k</div>
              <div>60k</div>
              <div>40k</div>
              <div>20k</div>
              <div>0</div>
            </div>

            <div className="w-full max-w-[256px] 2xl:max-w-full h-[159px] flex overflow-x-auto gap-5 justify-between no-scrollbar">
              {lineChartStats.map((lineChartStat) => {
                return (
                  <div className="gap-1 flex items-end">
                    <div
                      className="bg-primary rounded-[3px] w-5"
                      style={{
                        height: `${(lineChartStat.profit / 100) * 159}px`,
                      }}
                    ></div>
                    <div
                      className="bg-[#d7d7d7] rounded-[3px] w-5"
                      style={{
                        height: `${(lineChartStat.loss / 100) * 159}px`,
                      }}
                    ></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="md:w-[calc(33%-16px)] w-full h-[305px] bg-card p-4 rounded-[5px] flex flex-col gap-4 items-start">
          <div className="text-lg font-bold ">Most Sold Items</div>

          {mostSoldItems.map((item) => {
            return (
              <div className="h-[34px] w-full flex items-center flex-col justify-start">
                <div className="w-full flex justify-between text-sm font-bold">
                  <div>{item.name}</div>
                  <div>{item.percent}</div>
                </div>

                <div className="w-full h-2 rounded-[9px] bg-white relative">
                  <div
                    className="absolute left-0 h-2 bg-primary rounded-[3.6px]"
                    style={{
                      width: item.percent,
                    }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="px-4 md:w-full w-[calc(100%-36px)] py-3 bg-card rounded-[5px] flex flex-col gap-4">
        <div className="font-bold text-white">Latest Orders</div>

        <div className="h-[321px]">
          <DataTable rows={rows} columns={columns} />
        </div>
      </div>
    </div>
  );
}
