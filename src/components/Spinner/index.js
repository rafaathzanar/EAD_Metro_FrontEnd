import React from "react";
import { HashLoader } from "react-spinners";

const Spinner = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <HashLoader
        color="#FFAD33"
        cssOverride={{}}
        loading
        speedMultiplier={2.5}
        size={50}
      />
    </div>
  );
};

export default Spinner;
