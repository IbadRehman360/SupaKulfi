import { useNavigate } from "react-router-dom";
import supabase from "../services/supabase";
import { useEffect, useState } from "react";

async function usePrefilledData(id) {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [getOneKulfiData, setgetOneKulfiData] = useState([]);

  useEffect(() => {
    async function fetchKulfi() {
      const { error, data } = await supabase
        .from("kulfi")
        .select()
        .eq("id", id)
        .single();
      if (error) {
        navigate("/", { replace: true });
        setError(error);
        console.log(error);
      }
      if (data) {
        console.log(setgetOneKulfiData(data));
        console.log(data);
      }
    }

    fetchKulfi();
  }, [id, navigate]);
  return [getOneKulfiData, error];
}

export default usePrefilledData;
