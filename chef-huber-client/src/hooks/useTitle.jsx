import { useEffect } from "react";

export const useTitle = (title) => {
  useEffect(() => {
    // document.title = `${title} - ChefHub`;
    document.title = `${title} - Chefaos`;
  }, [title]);
};
