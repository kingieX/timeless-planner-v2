import React from "react";
import DashboardLayout from "../dashboard/layout";

const WorkspacePage = () => {
  return (
    <DashboardLayout>
      <div className="py-6 space-y-8 bg-white">
        <div className="flex flex-col w-full p-4 bg-white mb-4 fixed z-10">
          <h2 className="md:text-2xl text-xl text-gray-900 font-semibold">
            Workspace
          </h2>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default WorkspacePage;
