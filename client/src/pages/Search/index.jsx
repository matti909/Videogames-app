import React from "react";
import { useSelector } from "react-redux";
import Pagination from "../../common/Pagination";

export const Search = () => {
  const breed = useSelector((state) => state.byname);

  return (
    <div>
      <Pagination data={breed} />
    </div>
  );
};
