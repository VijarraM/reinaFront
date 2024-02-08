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
        <div style={styles.buttonsContainer}>
          <button style={styles.button} onClick={handleIngresoClick}>
            Ingreso
          </button>
          <button style={styles.button} onClick={handleSalidaClick}>
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
  button: {
    backgroundColor: "#4CAF50",
    border: "none",
    color: "white",
    padding: "15px 32px",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    fontSize: "16px",
    margin: "4px 2px",
    cursor: "pointer",
    borderRadius: "8px",
    transition: "background-color 0.3s ease",
  },
};

export default Marcaciones;
