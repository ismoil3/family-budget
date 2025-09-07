import { ChartAreaInteractive } from "@/shared/chart-area-interactive";
import { DataTable } from "@/shared/data-table";
import { SectionCards } from "@/shared/section-cards";
import data from "./data.json";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/shared/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/ui/card";
import { Button } from "@/shared/ui/button";
import IncomesTable from "@/widgets/incomes/incomes-table";
import ExpensesTable from "@/widgets/expenses/expenses-table";
import TargetsTable from "@/widgets/targets/targets-table";

export default function DashboardPage() {
  return (
    <>
      <SectionCards />
      <div className="px-4 lg:px-6">
        <ChartAreaInteractive />
        <div className="flex   flex-col gap-6 mt-2">
          <Tabs defaultValue="incomes">
            <TabsList>
              <TabsTrigger value="incomes">Доходы</TabsTrigger>
              <TabsTrigger value="expenses">Расходы</TabsTrigger>
              <TabsTrigger value="targets">Цели</TabsTrigger>
            </TabsList>
            <TabsContent  value="incomes">
              <IncomesTable />
            </TabsContent>
            <TabsContent value="expenses">
              <ExpensesTable />
            </TabsContent>
            <TabsContent value="targets">
              <TargetsTable />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
}
