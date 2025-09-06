import { ChartAreaInteractive } from "@/shared/chart-area-interactive";
import { DataTable } from "@/shared/data-table";
import { SectionCards } from "@/shared/section-cards";
import data from "./data.json";
export default function DashboardPage() {
  return (
    <>
      <SectionCards />
      <div className="px-4 lg:px-6">
        <ChartAreaInteractive />
      </div>
      <DataTable data={data} />
    </>
  );
}
