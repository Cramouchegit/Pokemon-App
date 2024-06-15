import PropTypes from "prop-types";
import Item from "../Item/Item";

// Komponen ini berfungsi sebagai komponen utama dalam menampilkan daftar pokemon.
// Komponen ini menerima props yaitu pokemons yang merupakan daftar pokemon yang akan ditampilkan.
// Komponen ini menggunakan map untuk melakukan pemrosesan pada setiap pokemon dalam daftar pokemons.
// Pada setiap pemrosesan, fungsi map akan mengembalikan komponen Item dengan props name dan thumbnail.
// Props name akan diambil dari properti name pada setiap pokemon dalam daftar pokemons.
// Props thumbnail akan diambil dari string konstan yang mengikuti format tertentu.
// String konstan ini mengacu pada URL gambar pokemon yang akan ditampilkan.
// URL gambar pokemon diambil dari repo github yang terkait dengan pokemon.
// Setiap URL gambar pokemon diberi nomor yang diambil dari indeks pokemon + 1.
// Nomor tersebut akan dipad dengan 0 sehingga jika nomor pokemon hanya 1 digit, maka akan dipad dengan 0.
// Setelah semua pokemon telah diproses, hasilnya akan dikembalikan sebagai komponen JSX.
// Komponen JSX tersebut akan diwrapping dengan section dengan class container-sm w-full flex flex-wrap justify-center align-middle p-5 gap-3.
// Komponen ini akan menjadi output yang ditampilkan dalam komponen utama yang menggunakan komponen ini.
const PokemonList = ({ pokemons }) => {
  return (
    <section className="container-sm w-full flex flex-wrap justify-center align-middle p-5 gap-3">
      {pokemons?.map((pokemon, index) => {
        const paddedIndex = String(index + 1).padStart(3, "0");
        const thumbnail = `https://raw.githubusercontent.com/hybridShivam/Pokemon/master/assets/images/${paddedIndex}.png`;

        return <Item key={index} name={pokemon.name} thumbnail={thumbnail} />;
      })}
    </section>
  );
};

PokemonList.propTypes = {
  pokemons: PropTypes.array,
};

export default PokemonList;
