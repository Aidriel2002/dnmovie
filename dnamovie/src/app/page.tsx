import Image from "next/image";

export default function Home() {
  return (
    <main>
      <>
        <nav className="bg-gray-800 flex justify-between p-1 items-center text-gray-200">
          <h3 className="col-span-1 text-4xl">
            <span className="text-red-700">D'</span>Movies
          </h3>
          <a href="#">Home</a>
          <a href="#2">Trending</a>
          <a href="#3">News</a>
          <a href="#4" className="mr-3">
            Account
          </a>
        </nav>

        <section id="sec1">
          <img src="/dorae.jpg" alt="dorae-image" />
          <h2>Doraemon X Naruto Colaboration</h2>
          <div className="genre">
            <p>Comic Adaptation</p> <p>Action</p> <p>Romance</p> <h6> | </h6>
            <p>Episode 1</p>
          </div>
          <p className="desc">
            Roronoa Zoro, also known as "Pirate Hunter" Zoro, is a fictional
            character created by Japanese manga artist Eiichiro Oda who appears
            in the manga series and media franchise One Piece. He first appeared
            in the third chapter of the One Piece manga, published in the manga
            magazine Weekly Shōnen Jump in 1997.
          </p>
          <div className="bttn">
            <button> Watch Now</button>
          </div>
        </section>

        <section id="sec2">
          <h1>Trending Now</h1>

          <div className="img-cards">
            <div className="imgs">
              <img src="/doraball.png" alt="doraball-image" />
              <h3>DoraBall Edition</h3>
              <p>Rating: 5.0⭐</p>
              <p>Action</p>
            </div>

            <div className="imgs">
              <img src="/dorafy.jpg" alt="doraball-image" />
              <h3>DoraFy Piece</h3>
              <p>Rating: 2.0⭐</p>
              <p>Romance</p>
            </div>

            <div className="imgs">
              <img src="/dorasa.jpg" alt="doraball-image" />
              <h3>DoraSa Tits</h3>
              <p>Rating: 15.0⭐</p>
              <p>Comedy</p>
            </div>
          </div>
        </section>

        <footer>
          <p>©2024 Aidrieeel | Lab Activity</p>
        </footer>
      </>
    </main>
  );
}
