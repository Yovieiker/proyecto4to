import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import Checkout from "./Checkout";
import EncuestaParte from "./EncuestaParte";
import EncuestaParte1 from "./EncuestaParte1";
import EncuestaParteWeb from "./EncuestaParteWeb";
import EncuestaParteWeb2 from "./EncuestaParteWeb2";
import EncuestaParteWebFinal from "./EncuestaParteWebFinal";
import EncuestaProduct from "./EncuestaProduct";
import EncuestaProductWeb from "./EncuestaProductWeb";
import CheckoutWeb from "./CheckoutWeb";

function Encuesta() {
  const [currentPart, setCurrentPart] = useState(1);
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    // Fetch data from the API
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://admin.sensebox.com.co/api/preguntas?per-page=0&origen=SU&habilitado=1",
          {
            headers: {
              Authorization: "Bearer xWGtkD7-5VqU9BbNMxf9l-XwrGTv-OedEz",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Error en la solicitud a la API");
        }

        const data = await response.json();
        setQuestions(data.items);
        console.log("Datos de la API:", data.items);
      } catch (error) {
        console.error("Error al obtener los datos de la API:", error);
      }
    };

    fetchData();
  }, []);

  const handleNextPart = () => {
    setCurrentPart(currentPart + 1);
  };

  const handleBackToPart1 = () => {
    setCurrentPart(currentPart - 1);
  };
  const handleBackToHome = () => {
    // Redireccionar al inicio
    window.location.href = "/";
  };
  const handleSkip = () => {
    // Redireccionar al checkout
    setCurrentPart(8);
  };
  const handleSkipWeb = () => {
    // Redireccionar al checkout
    setCurrentPart(13);
  };
  const pregunta = questions.find((pregunta) => pregunta.orden === 7);

  return (
    <>
      <Box sx={{ display: { md: "none" } }}>
        {currentPart === 1 ? (
          <EncuestaParte1
            onBackHome={handleBackToHome}
            onNext={handleNextPart}
            onSkip={handleSkip}
          />
        ) : currentPart === 2 ? (
          (window.scrollTo(0, 0),
            (
              <EncuestaParte
                questions={questions.slice(0, 4)}
                onBack={handleBackToPart1}
                onNext={handleNextPart}
                paso={1}
                barraProgress={20}
                mostrarTitulo={true}
              />
            ))
        ) : currentPart === 3 ? (
          window.scrollTo(0, 0),
          <EncuestaParte
            questions={questions.slice(4, 8)}
            onBack={handleBackToPart1}
            onNext={handleNextPart}
            paso={2}
            barraProgress={40}
            mostrarTitulo={false}
          />
        ) : currentPart === 4 ? (
          (window.scrollTo(0, 0),
            (
              <EncuestaParte
                questions={questions.slice(8, 11)}
                onBack={handleBackToPart1}
                onNext={handleNextPart}
                paso={3}
                barraProgress={60}
                mostrarTitulo={false}
              />
            ))
        ) : currentPart === 5 ? (
          (window.scrollTo(0, 0),
            (
              <EncuestaParte
                questions={questions.slice(11, 14)}
                onBack={handleBackToPart1}
                onNext={handleNextPart}
                paso={4}
                barraProgress={80}
                mostrarTitulo={false}
              />
            ))
        ) : currentPart === 6 ? (
          (window.scrollTo(0, 0),
            (
              <EncuestaParte
                questions={questions.slice(14, 17)}
                onBack={handleBackToPart1}
                onNext={handleNextPart}
                paso={5}
                barraProgress={95}
                mostrarTitulo={false}
              />
            ))
        ) : currentPart === 7 ? (
          (window.scrollTo(0, 0),
            (
              <EncuestaProduct onBack={handleBackToPart1} onNext={handleNextPart} />
            ))
        ) : currentPart === 8 ? (
          (window.scrollTo(0, 0),
            (<Checkout onBack={handleBackToPart1} onNext={handleNextPart} />))
        ) : null}
      </Box>
{/**DESKTOP */}
      <Box sx={{ display: { xs: "none", md: "block" } }}>
       
        {currentPart === 1 ? (
           <EncuestaParteWeb
            onBackHome={handleBackToHome}
            onNext={handleNextPart}
            onSkip={handleSkipWeb}
          />
        ) : currentPart === 2 ? (
          (window.scrollTo(0, 0),
            (
              <EncuestaParteWeb2
                questions={questions.slice(0, 2)}
                onBack={handleBackToPart1}
                onNext={handleNextPart}
                paso={1}
                barraProgress={20}
                mostrarTitulo={true}
              />
            ))
        ) : currentPart === 3 ? (
          (window.scrollTo(0, 0),
            (
              <EncuestaParteWeb2
                questions={questions.slice(2, 4)}
                onBack={handleBackToPart1}
                onNext={handleNextPart}
                paso={2}
                barraProgress={30}
              />
            ))
        ) : currentPart === 4 ? (
          (window.scrollTo(0, 0),
            (
              <EncuestaParteWeb2
                questions={questions.slice(4, 6)}
                onBack={handleBackToPart1}
                onNext={handleNextPart}
                paso={3}
                barraProgress={40}
              />
            ))
        ) : currentPart === 5 ? (
          (window.scrollTo(0, 0),
            (
              <EncuestaParteWeb2
                questions={[pregunta]}
                onBack={handleBackToPart1}
                onNext={handleNextPart}
                paso={4}
                barraProgress={50}
              />
            ))
        ) : currentPart === 6 ? (
          (window.scrollTo(0, 0),
            (
              <EncuestaParteWeb2
                questions={questions.slice(7, 9)}
                onBack={handleBackToPart1}
                onNext={handleNextPart}
                paso={5}
                barraProgress={60}
              />
            ))
        ) : currentPart === 7 ? (
          (window.scrollTo(0, 0),
            (
              <EncuestaParteWeb2
                questions={questions.slice(9, 11)}
                onBack={handleBackToPart1}
                onNext={handleNextPart}
                paso={6}
                barraProgress={70}
              />
            ))
        ) : currentPart === 8 ? (
          (window.scrollTo(0, 0),
            (
              <EncuestaParteWeb2
                questions={questions.slice(11, 13)}
                onBack={handleBackToPart1}
                onNext={handleNextPart}
                paso={7}
                barraProgress={80}
              />
            ))
        ) : currentPart === 9 ? (
          (window.scrollTo(0,0),
            (
              <EncuestaParteWeb2
                questions={questions.slice(13, 15)}
                onBack={handleBackToPart1}
                onNext={handleNextPart}
                paso={8}
                barraProgress={90}
              />
            ))
        ) : currentPart === 10 ? (
          (window.scrollTo(0, 0),
            (
              <EncuestaParteWeb2
                questions={questions.slice(15, 17)}
                onBack={handleBackToPart1}
                onNext={handleNextPart}
                paso={9}
                barraProgress={98}
              />
            ))
        ) : currentPart === 11 ? (
          (window.scrollTo(0, 0),
            (
              <EncuestaParteWebFinal
                onNext={handleNextPart}
                paso={10}
                barraProgress={100}
              />
            ))
        ) : currentPart === 12 ? (
          (window.scrollTo(0, 0),
            (
              <EncuestaProductWeb
                onNext={handleNextPart}
              />
            ))
        ) :currentPart === 13 ? (
          (window.scrollTo(0, 0),
            (
              <CheckoutWeb
              />
            ))
        ) :null }
      </Box>
    </>
  );
}

export default Encuesta;
