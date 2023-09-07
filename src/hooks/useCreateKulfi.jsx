import supabase from "../services/supabase";

async function useCreateKulfi(title, intro, recipe, kulfiImage) {
  const { data, error } = await supabase.from("kulfi").insert([
    {
      title,
      description: intro,
      recipe,
      kufi_image: kulfiImage,
    },
  ]);

  if (error) {
    console.error("Error inserting kulfi:", error.message);
    return { error };
  } else {
    console.log("Kulfi data inserted successfully:", data);
    return { data };
  }
}

export default useCreateKulfi;
