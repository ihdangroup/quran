import React from "react";

const Skeleton = ({ height }: any) => {
  return (
    <div className={`animate-pulse w-full my-2 ${height}  bg-slate-600`}></div>
  );
};

export default Skeleton;
