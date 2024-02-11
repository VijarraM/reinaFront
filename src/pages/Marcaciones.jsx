import { useState, useEffect } from "react";
import NavBar from "../components/NavBar";

function Marcaciones() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const getTurno = () => {
    const hora = currentTime.getHours();
    return hora < 15 || (hora === 15 && currentTime.getMinutes() < 30) ? "Mañana" : "Tarde";
  };

  const handleIngresoClick = () => {
    // Acción cuando se hace clic en el botón Ingreso
    console.log("Ingreso");
  };

  const handleSalidaClick = () => {
    // Acción cuando se hace clic en el botón Salida
    console.log("Salida");
  };

  return (
    <>
      <NavBar />
      <div style={styles.container}>
        <div style={styles.clockContainer}>
          <h1 style={styles.clock}>{currentTime.toLocaleTimeString()}</h1>
          <p style={styles.turno}>Turno: {getTurno()}</p>
        </div>
        <div className="mt-6 flex items-center justify-center gap-x-6">
          <button
            type="button"
            onClick={handleIngresoClick}
            className="rounded-md bg-green-500 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
          >
            Ingreso
          </button>
          <button
            type="button"
            onClick={handleSalidaClick}
            className="rounded-md bg-red-500 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-900"
          >
            Salida
          </button>
        </div>
      </div>
    </>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    // justifyContent: "center",
    minHeight: "80vh", // Reducimos la altura del contenedor
    marginTop: "10vh", // Ajustamos el margen superior
  },
  // Estilos restantes...

  clockContainer: {
    textAlign: "center",
  },
  clock: {
    fontSize: "7rem",
    marginBottom: "1rem",
  },
  turno: {
    fontSize: "3rem",
  },
  buttonsContainer: {
    marginTop: "2rem",
  },
};

export default Marcaciones;
