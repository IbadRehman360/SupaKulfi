import supabase from "../services/supabase";

async function useDeleteHook(id) {
  const { data, error } = await supabase.from("kulfi").delete().eq("id", id);
  return [data, error];
}

export default useDeleteHook;
