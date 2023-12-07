// Create a custom hook
import { useState, useEffect } from "react";

function useChefsData() {
  const [chefs, setChefs] = useState([]);

  useEffect(() => {
    fetch(
      "https://chef-hunter-chefaos-hcvs6lpld-randomhabibur.vercel.app/chef/v1"
    )
      .then((res) => res.json())
      .then((data) => {
        setChefs(data);
      });
  }, []);

  return chefs;
}

export default useChefsData;
