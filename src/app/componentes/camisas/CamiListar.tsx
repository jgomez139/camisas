import { useState } from "react";
import { Camisa } from "../../modelos/Camisa";
import { ARREGLO_CAMISAS } from "../../mocks/Camisa-mocks";
import { ARREGLO_CAMISA_TALLA } from "../../utilidades/dominios/DomTalla";

export const CamiListar = () => {
  const [arrCamisas] = useState<Camisa[]>(ARREGLO_CAMISAS);
  const obtenerTallaCamisa = (valor: string) => {
    for (const objGen of ARREGLO_CAMISA_TALLA) {
      if (objGen.codTalla === valor) {
        return objGen.tallaCamisa;
      }
    }
  };
  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="col-md-11 mt-4">
          <table className="table table-striped table-hover">
            <thead>
              <tr className="table-danger">
                <th style={{ width: "20%" }}>Código</th>
                <th style={{ width: "30%" }}>Marca</th>
                <th style={{ width: "20%" }}>Talla</th>
                <th style={{ width: "30%" }}>Color</th>
              </tr>
            </thead>
            <tbody>
              {arrCamisas.map((miCami: Camisa) => (
                <tr className="align-middle" key={miCami.codCamisa}>
                  <td>{miCami.codCamisa}</td>
                  <td>{miCami.marcaCamisa}</td>
                  <td>{obtenerTallaCamisa(miCami.codTallaCamisa)}</td>
                  <td>{miCami.colorCamisa}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
