import { useNavigate } from "react-router-dom";
import supabase from "../services/supabase";
import { useEffect, useState } from "react";

async function usePrefilledData(id) {
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function updateKulfi() {
      try {
        const { data } = await supabase
          .from("kulfi")
          .select()
          .eq("id", id)
          .single();
        console.log(data);
        await setData(data); // Set the data state
      } catch (error) {
        navigate("/", { replace: true });
        console.error("Error getting single kulfi:", error);
        setError(error.message); // Set the error state with the error message
      }
    }

    updateKulfi();
  }, [id, navigate]);

  return [data, error];
}

export default usePrefilledData;
