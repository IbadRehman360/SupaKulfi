import { useEffect, useState } from "react";
import supabase from "../services/supabase";

function useKulfi() {
  const [kulfiData, setKulfiData] = useState([]);
  const [error, setErrorData] = useState("");

  useEffect(() => {
    async function getKulfiData() {
      try {
        const { data } = await supabase.from("kulfi").select("*");
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
