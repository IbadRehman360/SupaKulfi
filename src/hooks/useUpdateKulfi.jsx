import { useEffect, useState } from "react";
import supabase from "../services/supabase";

function useKulfi() {
  const [kulfiData, setKulfiData] = useState([]);
  const [error, setErrorData] = useState("");

  useEffect(() => {
    async function getKulfiData() {
      try {
        const { error, data } = await supabase
          .from("kulfi")
          .select()
          .eq("id", data.id);
        setKulfiData(data);
      } catch (error) {
        if (error) {
          setErrorData(error);
        }
      }
    }
    getKulfiData();
  }, []);

  return [kulfiData, error];
}

export default useKulfi;
