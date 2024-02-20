import { BASE_URL } from "@/app/constants";
import axios from "axios";
import { headers } from "next/headers";
import { Filmes } from "./interface";

const cabecalho = {
  Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
  accept: "application/json",
};

export async function movieSearch(query: string): Promise<Filmes> {
  try {
    const response = await axios.get(
      `${BASE_URL}/search/movie?query=${query}`,
      {
        headers: cabecalho,
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}
