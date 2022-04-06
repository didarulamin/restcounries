import { useState } from "react";

//use data hook
const useData = () => {
  const [data, setData] = useState([]);

  return {
    data,
    setData,
  };
};

export default useData;
