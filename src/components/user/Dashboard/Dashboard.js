import React from "react";
import DragDrop from "./DragDrop";

import BoxesGroup from "./BoxesGroup";

const Dashboard = () => {

    // all games are fetched in <BoxesGroup> component 

    return (
        <div className="content-page-wrapper">

            <h1>Dashboard</h1>

            {/* <DragDrop /> */}

            <BoxesGroup />

            `Ovde ubaci react-dnd library, probaj i to da implementiras`

        </div>
    );
}

export default Dashboard;