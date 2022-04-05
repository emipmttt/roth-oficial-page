import RothVideo from "./assets/video/background.mp4";
import Logo from "./assets/img/logo.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <main>
        <div className="image">
          <video
            autoPlay={true}
            src={RothVideo}
            muted={true}
            loop={true}
            alt="Integrantes de roth"
            
          />
        </div>
        <section className="content">
          <div className="content-wrapper">
            <img src={Logo} className="logo" alt="Roth logo" />
            <br />
            <p>
              Roth es una banda del estado de México. Actualmente se encuentran
              promocionando su primer álbum de estudio "Limerencia" el cual fue
              grabado en en la Ciudad de México en Roof Cat Studios y producido
              por Josué Aguillón.
            </p>
            <iframe
              style={{ borderRadius: "12px" }}
              src="https://open.spotify.com/embed/album/50qxU1pemrCPXS8r1RKTwy?utm_source=generator&theme=0"
              width="100%"
              height="380"
              frameBorder="0"
              allowFullScreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            ></iframe>
            <br />
            <br />
            <br />
            <a href="mailto:roth.mxoficial@gmail.com">CONTACTO</a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
