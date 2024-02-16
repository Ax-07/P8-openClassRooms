import { useParams, Navigate, useLocation } from "react-router-dom";
import { LogementsContext } from "../contexts/logementsContext.jsx";
import { useContext, useEffect } from "react";
import { Carrousel } from "../components/Carrousel.jsx";
import { Tags } from "../components/Tags.jsx";
import { Host } from "../components/Host.jsx";
import { Rating } from "../components/Rating.jsx";
import { DropDown } from "../components/DropDown.jsx";

export const Logement = () => {
  const logementId = useParams();
  // const navigate = useNavigate();
  const location = useLocation(); console.log(location);
  const url = window.location.protocol + "//" + window.location.host + location.pathname; console.log(url);
  const logements = useContext(LogementsContext);
  
  const logement = logements?.find((logement) => logement.id === logementId.id);

  // useEffect(() => {
  //   if (!logement) {
  //     navigate("/404");
  //   }
  // }, [logement, navigate]);

  return (
    <div className="logement">
      {logement ? (
        <>
          <Carrousel logement={logement} />
          <h1 className="logement__title">{logement.title}</h1>
          <p className="logement__location">{logement.location}</p>
          <Tags logement={logement} />
          <div className="logement__wrapper">
            <Rating logement={logement} />
            <Host logement={logement} />
          </div>

          <div className="logement__details">
            <DropDown title={"Description"}>
              <p className="dropDown__description">{logement.description}</p>
            </DropDown>
            <DropDown title={"Equipements"}>
              <ul className="dropDown__list">
                {logement.equipments.map((equipment, index) => {
                  return (
                    <li key={index} className="dropDown__item">
                      {equipment}
                    </li>
                  );
                })}
              </ul>
            </DropDown>
          </div>
        </>
      ) : (
        <Navigate to="/404" />
      )}
    </div>
  );
};
