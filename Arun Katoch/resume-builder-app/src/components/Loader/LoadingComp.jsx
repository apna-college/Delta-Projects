import React from "react";
import { SpinnerCircular } from "spinners-react";

const LoadingComp = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <SpinnerCircular
        size="10%"
        color="#0096FF"
        enabled="true"
      />
    </div>
  );
};

export default LoadingComp;
