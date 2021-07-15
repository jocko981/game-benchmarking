import React from "react";
import DragDrop from "./DragDrop";

import BoxesGroup from "./BoxesGroup";

const Dashboard = () => {

    // fetch all games

    return (
        <div className="content-page-wrapper">

            <h1>Dashboard</h1>

            {/* <DragDrop /> */}

            <BoxesGroup />

        </div>
    );
}

export default Dashboard;