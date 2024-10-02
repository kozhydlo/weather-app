import InputBlock from "./components/InputBlock.jsx";
import OutputBlock from "./components/OutputBlock.jsx";
import LoadingStatus from "./components/LoadingStatus.jsx";
import React from "react";
import ChartBlock from "./components/ChartBlock.jsx";

function App() {
    return (
        <>
            <InputBlock />
            <ChartBlock />
            <LoadingStatus />
            <OutputBlock />
        </>
    )
}

export default App
// 4.55