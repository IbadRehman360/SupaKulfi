import { useEffect, useState } from "react";
import supabase from "../services/supabase";

function useKulfi() {
  const [kulfiData, setKulfiData] = useState([]);
  const [error, setErrorData] = useState("");

  useEffect(() => {
    async function getKulfiData() {
      const { data, error } = await supabase.from("kulfi").select("*");

      if (error) {
        setErrorData(error);
      } else {
        setKulfiData(data);
      }
    }

    getKulfiData();
  }, []);

  return [kulfiData, error];
}

export default useKulfi;
