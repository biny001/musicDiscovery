import { supabase, supabaseUrl } from "./client";
import { v4 as uuidv4 } from "uuid";

export const fetchData = async () => {
  try {
    const { data, error } = await supabase.from("music").select();

    if (error) {
      throw error;
    }
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const addData = async (item) => {
  try {
    const { data, error } = await supabase.from("music").insert(item).select();
    if (error) {
      throw error;
    }
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const updateData = async (id, item) => {
  try {
    const { data, error } = await supabase
      .from("music")
      .update(item)
      .eq("id", id)
      .select();

    if (error) {
      throw error;
    }
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteData = async (id) => {
  try {
    const { data, error } = await supabase.from("music").delete().eq("id", id);

    if (error) {
      throw error;
    }
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const uploadFile = async (file) => {
  const uniqueFileName = `${uuidv4()}-${file?.name.replaceAll("/", "")}`;
  const imagePath = `${supabaseUrl}/storage/v1/object/public/media${uniqueFileName}`;
  try {
    const { data, error } = await supabase.storage
      .from("media")
      .upload(uniqueFileName, file, {
        cacheControl: 3600,
        upsert: false,
      });

    const source = `${supabaseUrl}/storage/v1/object/public/media/${data.path}`;
    return { url: source };
  } catch (err) {
    console.log(err);
  }
};
