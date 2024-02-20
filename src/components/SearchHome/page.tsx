"use client";

import { movieSearch } from "@/querys/SearchMovies";
import { Filmes } from "@/querys/SearchMovies/interface";
import { TextField, Button } from "@mui/material";
import { useState } from "react";

const SearchHome = () => {
  const [inputValue, setInputValue] = useState("");
  const [movies, setMovies] = useState([] as any[]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    !inputValue || inputValue === "" ? alert("Digite algo") : "";
    try {
      movieSearch(inputValue).then((response: Filmes) => {
        setMovies(response.results);
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Pesquise por filmes ..."
        placeholder="Escreva algo aqui ..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        margin="normal"
        fullWidth
      />
      <Button type="submit" variant="contained">
        Enviar
      </Button>
    </form>
  );
};

export default SearchHome;
