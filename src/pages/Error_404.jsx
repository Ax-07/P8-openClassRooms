import { NavLink } from "react-router-dom";

export const Error_404 = () => {
    return (
        <div className="error-404">
            <h1 className="error-404__title">404</h1>
            <p className="error-404__text">Oups! La page que vous demandez n'sexiste pas.</p>
            <NavLink to={"/"} className="error-404__link">Retourner sur la page d’accueil</NavLink>
        </div>
    );
};