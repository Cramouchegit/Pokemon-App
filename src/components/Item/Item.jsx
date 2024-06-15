import PropTypes from "prop-types";

// Komponen Item merupakan komponen yang digunakan untuk menampilkan informasi pokemon.
// Komponen ini menerima props yang berupa thumbnail dan name.
// Thumbnail merupakan URL gambar pokemon sedangkan name adalah nama pokemon.
// Komponen ini menggunakan struktur HTML untuk menampilkan informasi pokemon.
// Komponen ini digunakan untuk menampilkan setiap pokemon dalam daftar pokemon.
// Komponen ini memiliki layout yang responsif dengan menggunakan CSS Flexbox.
// Komponen ini juga menggunakan animasi hover untuk menambahkan efek visual.
const Item = ({ thumbnail, name }) => {
  return (
    // Komponen artikel digunakan untuk membungkus semua komponen yang ada di dalamnya.
    // Komponen artikel memiliki class yang mengatur tampilan dan animasi.
    <article className="bg-white p-5 m-3 rounded-lg shadow-md w-[calc(20%-1rem)] min-w-[200px] max-w-full hover:shadow-lg hover:border border-blue-500 cursor-pointer transition transform hover:scale-105 duration-300 ease-in-out">
      {/* Komponen div digunakan untuk membungkus gambar pokemon. */}
      <div className="bg-slate-100 w-full h-[150px] mb-3 rounded-lg overflow-hidden">
        {/* Komponen img digunakan untuk menampilkan gambar pokemon. */}
        <img
          className="w-full h-full object-contain p-3"
          src={thumbnail}
          alt={name}
        />
      </div>
      {/* Komponen div digunakan untuk membungkus nama pokemon. */}
      <div className="text-center">
        {/* Komponen h5 digunakan untuk menampilkan nama pokemon. */}
        <h5 className="font-bold capitalize">{name}</h5>
      </div>
    </article>
  );
};

Item.propTypes = {
  thumbnail: PropTypes.string,
  name: PropTypes.string,
};

export default Item;
