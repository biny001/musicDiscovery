import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://gmaagiihgslcddsumjxi.supabase.co";

const supabaseKey = process.env.SUPABASE_KEY;
export const supabase = createClient(supabaseUrl, supabaseKey);
