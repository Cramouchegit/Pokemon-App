import { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import PokemonList from "../../components/PokemonList/PokemonList";
import axios from "axios";

// Component ini merupakan komponen utama dari aplikasi Pokemon.
// Komponen ini menggunakan hook useEffect untuk melakukan fetch data dari API PokeAPI saat komponen dirender.
// Hook useEffect terdiri dari 2 parameter, yaitu fungsi callback dan dependencies.
// Fungsi callback ini akan dijalankan setelah komponen dirender dan saat dependencies berubah.
// Dalam hal ini, fungsi callback adalah fungsi getPokemons yang melakukan fetch data dari API PokeAPI.
// Fungsi getPokemons mencoba melakukan fetch data dengan menggunakan axios.get().
// Jika fetch berhasil, maka response.data.results akan di assign ke state pokemons menggunakan setPokemons.
// Jika fetch gagal, maka fungsi getPokemons akan melemparkan error.
// Dependencies pada hook useEffect kosong [].
// Jadi, fungsi getPokemons hanya akan dijalankan satu kali setelah komponen dirender.
const App = () => {
  const [pokemons, setPokemons] = useState([]); // Menginisialisasi state pokemons dengan array kosong

  useEffect(() => {
    const getPokemons = async () => {
      try {
        const response = await axios.get(
          "https://pokeapi.co/api/v2/pokemon?limit=100"
        );
        if (response.status === 200) {
          setPokemons(response.data.results); // Menambahkan data pokemon ke state pokemons
        }
      } catch (error) {
        throw new Error(error.message); // Jika fetch gagal, melempar error
      }
    };
    getPokemons(); // Memanggil fungsi getPokemons saat komponen dirender
  }, []); // Dependencies kosong, jadi fungsi getPokemons hanya akan dijalankan satu kali setelah komponen dirender

  return (
    <>
      <Header />
      <main className="w-full min-h-[600px] bg-slate-100">
        <PokemonList pokemons={pokemons} />
      </main>
      <Footer />
    </>
  );
};

export default App;
