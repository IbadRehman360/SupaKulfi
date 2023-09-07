import supabase from "../services/supabase";

async function useCreateKulfi(title, intro, recipe, kulfiImage) {
  try {
    const { data, error } = await supabase.from("kulfi").insert([
      {
        title,
        description: intro,
        recipe,
        kufi_image: kulfiImage,
      },
    ]);

    if (error) {
      throw error;
    }

    console.log("Kulfi data inserted successfully:", data);
    return { data };
  } catch (error) {
    console.error("Error inserting kulfi:", error.message);
    return { error };
  }
}

export default useCreateKulfi;
