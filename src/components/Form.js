import React, {useState} from "react";
import {postFetch} from "./FetchMethods";
import './List.css'
import  PropTypes from 'prop-types';

const Form = () =>{

    const [name, setName] = useState("");
    const [specie, setSpecie] = useState("");
    const [message1, setMenssage1] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
        postFetch("animals", {name: name, specie: specie }).then(() => {
            setName("");
            setSpecie("");
            setMenssage1("Creado correctamente");
            window.location.replace('');
        });
        } catch (err) {
        console.log(err)
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                type="text"
                value={name}
                placeholder="Nombre del animal"
                onChange={(e) => setName(e.target.value)}
                style={{width: "400px"}}
                />
                <br />
                <input
                type="text"
                value={specie}
                placeholder="Especie"
                onChange={(e) => setSpecie(parseInt(e.target.value))}
                style={{width: "400px"}}
                />
                <div className="Component-Message">{message1 ? <p>{message1}</p> : null}</div>
                <button type="submit">Crear</button>
            </form>
        </div>
    )
}
export default Form;