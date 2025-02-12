export default function Hero() {
  return (
    <div className="hero bg-[url(../img/fotoHero.jpg)] h-svh bg-cover bg-center">
      <div className="hero-text text-white font-bold text-2xl text-center flex justify-center items-center h-full w-[80%] sofy">
        <div className="p-8 rounded-lg" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
          <h1>Benvenuti da Ciccio's Burger - Il Paradiso del Gusto! 🍔🔥</h1>
          <div>
            Sei pronto a vivere un'esperienza gastronomica unica? Da Ciccio's
            Burger non prepariamo semplici panini: creiamo autentiche opere
            d'arte culinarie, realizzate con ingredienti freschi e selezionati,
            per regalarti un'esplosione di sapori ad ogni morso.
          </div>
        </div>
      </div>
    </div>
  );
}