import React from "react";
import { useHistory } from "react-router-dom";
import { deletePlant } from "../actions/Actions";
import { connect } from "react-redux";

function Plant ( props, deletePlant ) {
    const { id, name, nickname, species, water } = props.plant

    const { push } = useHistory()

    return (
        <div>
            <div>
                <h2>{ name }</h2>
                <h3>{ nickname} </h3>
                <h3>{ species }</h3>
                <h4>{ water }</h4>
            </div>
            <div>
                <button onClick={ push("/home") }>Done</button>
                <button onClick={ push(`/editPlant/${id}`) }>Edit</button>
                <button onClick={ deletePlant(id) }>Delete</button>
            </div>
        </div>
    ) 
}

export default connect( null, { deletePlant } )( Plant )