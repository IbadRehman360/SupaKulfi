import { useNavigate } from "react-router-dom";
import supabase from "../services/supabase";
import { useEffect, useState } from "react";
function usePrefilledData(id) {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [getOneKulfiData, setgetOneKulfiData] = useState([]);
  useEffect(() => {
    function fetchKulfi() {
      const { error, data } = supabase
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
        setgetOneKulfiData(data);
      }
    }

    fetchKulfi();
  }, [id, navigate]);
  return [getOneKulfiData, error];
}

export default usePrefilledData;
