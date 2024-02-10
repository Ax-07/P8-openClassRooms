import { useState, createContext, useEffect } from "react";
import { getAllData } from "../services/api/logementApi.js";
import PropTypes from "prop-types";

export const LogementsContext = createContext();

export const LogementsProvider = ({ children }) => {
    const [logements, setLogements] = useState([]);
    const url = "./db/annoncesLogements.json";

    useEffect(() => {
        getAllData(url)
            .then((data) => {
                setLogements(data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    return (
        <LogementsContext.Provider value={logements}>
            {children}
        </LogementsContext.Provider>
    );
}

LogementsProvider.propTypes = {
    children: PropTypes.node.isRequired,
};