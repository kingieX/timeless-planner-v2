/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import DashboardLayout from "../dashboard/layout";
import AddWorkspace from "./_components/AddWorkspace";

interface Workspace {
  id: number;
  name: string;
}

// Sample workspace data — filtering out any invalid or empty items
const workspaceData: (Workspace | any)[] = [
  { id: 1, name: "Personal workspace" },
  [], // This will be filtered out
];

const validWorkspaces: Workspace[] = workspaceData.filter(
  (item): item is Workspace =>
    item && typeof item === "object" && "id" in item && "name" in item
);

const WorkspacePage = () => {
  return (
    <DashboardLayout>
      <div className="py-6 space-y-8 bg-white">
        <div className="flex flex-col w-full p-4 bg-white mb-4 fixed z-10">
          <h2 className="md:text-2xl text-xl text-gray-900 font-semibold">
            Workspace
          </h2>
        </div>

        <div className="mt-4">
          {validWorkspaces.length === 0 ? (
            <div className="md:mt-20 mt-12 flex flex-col justify-center items-center">
              <AddWorkspace />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              {validWorkspaces.map((workspace) => (
                <div
                  key={workspace.id}
                  className="w-full md:w-3/4 flex justify-between items-center gap-2 bg-white p-4 border-l-4 border-l-[#42CEF2] shadow-md rounded-b-lg rounded-t-none"
                >
                  <h3 className="text-gray-900 font-semibold">
                    {workspace.name}
                  </h3>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default WorkspacePage;
