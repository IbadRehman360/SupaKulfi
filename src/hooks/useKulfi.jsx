import { useEffect, useState } from "react";
import supabase from "../services/supabase";

function useKulfi(orderBy) {
  const [kulfiData, setKulfiData] = useState([]);
  const [error, setErrorData] = useState("");

  useEffect(() => {
    async function getKulfiData() {
      const { data, error } = await supabase
        .from("kulfi")
        .select("*")
        .order(orderBy, { ascending: false });

      if (error) {
        setErrorData(error);
      } else {
        setKulfiData(data);
      }
    }

    getKulfiData();
  }, [orderBy]);

  return [kulfiData, error, setKulfiData];
}

export default useKulfi;
