import DashboardLayout from "@/app/(app)/dashboard/layout";
import { tasks } from "@/data/data";
import React from "react";
import TaskOverviewPage from "../_components/TaskOverviewPage";

export default async function TaskOverview({
  params,
}: {
  // params: { id: string };
  params: Promise<{ taskId: string }>;
}) {
  const resolvedParams = await params;
  // console.log("Param", resolvedParams.taskId);

  const task = tasks.find((task) => task.id === resolvedParams.taskId);

  // console.log("Tasks: ", task);

  if (!task) {
    return <p>Task not found</p>;
  }

  return (
    <DashboardLayout>
      <TaskOverviewPage task={task} />
    </DashboardLayout>
  );
}
