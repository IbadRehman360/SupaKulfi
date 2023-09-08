import { useEffect, useState } from "react";
import supabase from "../services/supabase";

function useUpdateData(id, title, description, recipe, kulfiImage, navigate) {
  const [isData, setData] = useState("");
  const [isError, setError] = useState([]);

  useEffect(() => {
    async function fetchKulfi() {
      const { error, data } = await supabase
        .from("kulfi")
        .update({ title, description, recipe, kulfiImage })
        .eq("id", id)
        .select();
      if (error) {
        navigate("/", { replace: true });
        setError(error);
      }
      if (data) {
        setData(data);
      }
    }

    fetchKulfi();
  }, [id, navigate]);
  return [isData, isError];
}

export default useUpdateData;
