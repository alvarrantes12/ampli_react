import React from "react";

const List = (props) => {
    const {contents} = props;

    if (!contents || contents.length === 0) return <h1>No hay animales para mostrar</h1>

    return(
        <ul> 
            <h2 className="Component-Titlle">Estos son algunos animales disponibles</h2>
            {contents.map((content)=> {
                return (
                    <div style={{margin: "10px"}}>
                        <li key={content.id}>
                            <span className="Component-Title"><b className="Component-Attribute">Nombre animal : </b><b>{content.name}</b></span>
                            <br />
                            <span className="Component-Title"><b className="Component-Attribute">Especie : </b><b>{content.specie}</b></span>
                        </li>
                    </div>
                );
            })}
        </ul>
    );

};
export default List;