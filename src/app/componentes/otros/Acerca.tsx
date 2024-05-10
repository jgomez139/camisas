import developer1 from "../../../assets/img/tanjiro.png";
import developer2 from "../../../assets/img/Mitsuri.png";
import developer3 from "../../../assets/img/Nezuko.png";
import developer4 from "../../../assets/img/renguko.png"

export const Acerca = () => {
  return (
    <>
      <div className="pt-3 d-flex justify-content-center">
        <div className="col-md-8">
          <div className="row row-cols-1 row-cols-md-2 g-4">
            <div className="col">
              <div className="card">
                <img
                  src={developer1}
                  className="card-img-top"
                  alt="Tanjiro Desarrollador J"
                />
                <div className="card-body">
                  <h3 className="card-title fw-bold">Desarrollador Junior</h3>
                  <p className="card-text" style={{ textAlign: "justify" }}>
                    Tanjiro Kamado es el protagonista principal de Kimetsu no
                    Yaiba. Es un cazador de Demonios cuyo principal objetivo es
                    encontrar al responsable de haber matado a su familia y
                    convertido a su hermana Nezuko en una Demonio[4] y luego
                    juró derrotar a Muzan Kibutsuji, el Rey de los Demonios,
                    para evitar que otros sufran el mismo destino que él.
                  </p>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card">
                <img
                  src={developer2}
                  className="card-img-top"
                  alt="Tanjiro Desarrollador J"
                />
                <div className="card-body">
                  <h3 className="card-title fw-bold">Desarrollador Senior</h3>
                  <p className="card-text" style={{ textAlign: "justify" }}>
                    Kanroji Mitsuri?) es un personaje de la franquicia Kimetsu
                    no Yaiba. Fue cazadora de demonios perteneciente al Cuerpo
                    de Exterminio de Demonios y Pilar del Amor (恋こい柱ばしら,
                    Koi Bashira?)[5].
                  </p>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card">
                <img
                  src={developer3}
                  className="card-img-top"
                  alt="Tanjiro Desarrollador J"
                />
                <div className="card-body">
                  <h3 className="card-title fw-bold">Arquitecta de Software</h3>
                  <p className="card-text" style={{ textAlign: "justify" }}>
                    Nezuko Kamado (竈門かまど禰ね豆ず子こ, Kamado Nezuko?) es la
                    hermana menor de Tanjiro. Ella fue transformada en Demonio
                    por Muzan Kibutsuji acompañando a Tanjiro en su viaje para
                    volver a ser humana. Es una de las protagonistas principales
                    de Kimetsu no Yaiba.
                  </p>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card">
                <img
                  src={developer4}
                  className="card-img-top"
                  alt="Tanjiro Desarrollador J"
                />
                <div className="card-body">
                  <h3 className="card-title fw-bold">Líder de proyecto</h3>
                  <p className="card-text" style={{ textAlign: "justify" }}>
                    Kyojuro Rengoku (煉れん獄ごく 杏きょう寿じゅ郎ろう, Rengoku
                    Kyōjurō?) fue un cazador de Demonios y el Pilar de la Llama
                    (炎えん柱ばしら, En Bashira?). del Cuerpo de Exterminio de
                    Demonios.[3]
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
