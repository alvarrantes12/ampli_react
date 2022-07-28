import React from "react";

const List = (props) => {
    const {animals} = props;

    if (!animals || animals.length === 0) return <h1>No hay animales</h1>

    return (
        <ul>
            <h2>Lista de animales</h2>
            {animals.map((animal) => {
                return (
                    <div>
                        <li key={animal.id}>
                            <span ><b>Animal: </b> {animal.name} </span>
                            <span ><b>Especie: </b> {animal.specie}</span>
                        </li>
                    </div>
                );
            })}
        </ul>
    );
};
export default List;