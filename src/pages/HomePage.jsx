import { useEffect } from "react";
import Hero from "../components/hero";
import { useAlertContext } from "../contexts/AlertContexts";

export default function HomePage() {
  const { setAlertData } = useAlertContext();

  useEffect(() => {
    setAlertData({
      type: "info",
      message:
        "Entro Questa settimana sconto del 20% su tutti i panini ordinati entro le 18:00!",
    });
  }, [setAlertData]);

  return (
    <>
      <Hero />
      <main bg>
        <div className="container-main-page">
          <div className="grid grid-cols-3 gap-4">
            <h3 className="text-2xl font-black col-span-3 text-center">
              Il nostro segreto? Qualità e Passione!
            </h3>
            <p className="col-span-3">
              Ogni hamburger che serviamo nasce dall'amore per il buon cibo e
              dalla ricerca della perfezione. Utilizziamo solo carne di alta
              qualità, pane soffice e artigianale, formaggi irresistibili e
              salse fatte in casa, per offrirti un'esperienza che va oltre il
              semplice fast food.
            </p>
            <p className="col-span-2 col-start-1 bg-[#1c1f2b] text-white p-6-p rounded-xl box-main-text">
              🔥 Burger gourmet per ogni palato - Che tu sia un amante della
              carne o un fan delle opzioni vegetariane, troverai il panino
              perfetto per te. Dai classici succulenti ai mix più audaci, come
              il nostro Double Triple con doppio burger e triplo cheddar, fino
              al raffinato Tale, arricchito con taleggio, pere caramellate e
              guanciale croccante.
            </p>
            <p className="col-span-2 col-start-2 bg-[#1c1f2b] text-white p-6-p rounded-xl box-main-text">
              🌿 Scelte per tutti - Non solo hamburger di manzo, ma anche
              deliziosi burger di pollo fritto super croccante e varianti
              vegetariane, per un menu inclusivo e irresistibile.
            </p>
            <p className="col-span-2 col-start-1 bg-[#1c1f2b] text-white p-6-p rounded-xl box-main-text">
              🛵 Consegna rapida & Takeaway - Preferisci gustarti il tuo
              Ciccio's Burger comodamente a casa? Ordina online e te lo
              porteremo caldo e fragrante direttamente alla tua porta!{" "}
            </p>
            <p className="col-span-2 col-start-2 bg-[#1c1f2b] text-white p-6-p rounded-xl box-main-text">
              💛 Un'atmosfera accogliente e familiare - Vieni a trovarci e
              lasciati conquistare dal nostro ambiente caloroso e dallo staff
              sempre pronto a servirti con il sorriso. Non accontentarti di un
              panino qualsiasi: scegli Ciccio's Burger e preparati a
              un'esperienza che farà felici le tue papille gustative. Ti
              aspettiamo!
            </p>
          </div>
          <div class="grid grid-cols-3 gap-4">
            <div className="col-span-3 p-6-p text-2xl font-bold tracking-tight">
              "La Tecnologia dietro il Gusto: Il Cuore Digitale del Nostro Sito"
              💻🔥 Dietro ogni pagina fluida e ogni ricetta che esplori c’è un
              mix perfetto di tecnologia e innovazione: 🔹 React.js per una
              navigazione ultra-rapida, così puoi scoprire ogni delizia senza
              attese! 🔹 Express.js per un back-end sicuro e performante,
              proprio come una cucina ben organizzata. 🔹 Tailwind CSS per un
              design moderno e pulito, dove il minimalismo incontra la
              tradizione culinaria. Un’esperienza digitale pensata per esaltare
              il gusto autentico… con un tocco di modernità! 🚀🍔
            </div>
            <div class="...">
              <a
                href="#"
                class="block max-w-sm p-6-p border rounded-lg shadow-sm bg-gray-800 border-gray-700 hover:bg-gray-700 h-full"
              >
                <div className="flex justify-center items-center">
                  <img src="../img/react-logo.png" alt="" className="w-34" />
                </div>
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">
                  REACT.jS
                </h5>
                <p class="font-normal  text-gray-400">
                  🟢 React.js - Il front-end è costruito con React, un framework
                  JavaScript che rende la navigazione fluida e veloce,
                  permettendovi di saltare da una ricetta all'altra senza attese
                  snervanti.
                </p>
              </a>
            </div>
            <div class="...">
              <a
                href="#"
                class="block max-w-sm p-6-p border rounded-lg shadow-sm bg-gray-800 border-gray-700 hover:bg-gray-700 h-full"
              >
                <div className="flex justify-center items-center">
                  <img
                    src="../img/icons8-express-js-128.png"
                    alt=""
                    className="w-34"
                  />
                </div>
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">
                  EXPRESS.jS
                </h5>
                <p class="font-normal  text-gray-400">
                  🟡 Express.js - Il back-end del sito gira su Express, un
                  framework leggero e potente per Node.js che assicura un
                  caricamento rapido e sicuro dei contenuti… perché l'unica
                  attesa che conta è quella della lievitazione del pane!
                </p>
              </a>
            </div>
            <div class="...">
              <a
                href="#"
                class="block max-w-sm p-6-p border rounded-lg shadow-sm bg-gray-800 border-gray-700 hover:bg-gray-700"
              >
                <div className="flex justify-center items-center">
                  <img src="../img/logo tailwind.png" alt="" className="w-34" />
                </div>
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">
                  TAILWIND CSS
                </h5>
                <p class="font-normal  text-gray-400">
                  🔵 Tailwind CSS - Lo stile minimal e accattivante del sito è
                  merito di Tailwind CSS, una libreria che ci permette di dare
                  un aspetto moderno e pulito alle pagine, senza perdere di
                  vista la semplicità. In poche parole, un mix perfetto tra
                  sapori tradizionali e tecnologia all'avanguardia! 😋🔥
                  Preparate il grembiule, scegliete la vostra ricetta preferita
                  e lasciatevi guidare in un viaggio nel mondo dei sapori
                  autentici… con un tocco di modernità! 🚀🍽️
                </p>
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
