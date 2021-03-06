import React, { useContext } from "react";
import { ThemeContext } from "./Theme";


const Form = () => {

    const context = useContext(ThemeContext)

    const renderForm = (
        <form>
            <label>
                Nome:
            </label>
            <input />
            <label>
                Sobrenome:
            </label>
            <input />
        </form>
    );
    
    const renderNotLogged = (
        <h1>
            É necessário realizar o login.
        </h1>
    )
    
    return (
        <div>
            {!context.token ? renderNotLogged : renderForm}
        </div>
    );
}

export default Form;