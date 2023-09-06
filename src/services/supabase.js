import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.REACT_ENV_URL;
const supabaseKey = import.meta.env.REACT_ENV_KEY;

const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;