import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPlants } from "../actions/Actions";
import Plant from "./Plant";

function Home (props) {
    useEffect(() => {
        fetchPlants()
    },[])
    return (
        <div>
            <div>
                <h1>DASHBOARD</h1>
                <div>
                    Account   Logout
                </div>
            </div>
            <div>
                <h2>Plants</h2>
                {props.plants.map(plant => (
                    <Plant plant={plant} key={plant.id} onClick={()=> props.history.push(`/plants/${plant.id}`)}/>
                ))}
            </div>
            <button onClick={() => props.history.push("/plantSearch")}>Add a plant</button>
        </div>
    )
}

const mapStateToProps = state => {
    return { 
        plants: state.plants
    }
}

export default connect(mapStateToProps, {}) (Home)