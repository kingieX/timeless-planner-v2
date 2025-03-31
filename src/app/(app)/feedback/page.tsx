import React from "react";
import DashboardLayout from "../dashboard/layout";
import CreateForm from "./_components/CreateForm";

const FeedBackPage = () => {
  return (
    <DashboardLayout>
      <div className="h-screen py-6 flex justify-center items-center bg-white">
        {/* {} */}
        <div className="flex justify-center items-center">
          <CreateForm />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default FeedBackPage;
