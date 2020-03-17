import React from "react";
import data from "./treeData.json";
import Tree from "react-hook-tree";
import "./style.css";

const App = () => {
  console.log(data);
  return (
    <>
      <div style={{ marginTop: 40, display: "flex", flexDirection: "column" }}>
        <h2>
          Global container Style simply using the usual react : {"style={{}}"}{" "}
          props{" "}
        </h2>
        <div style={{ flex: 1 }}>
          <Tree treeData={data} style={{ background: "#e9f7f2" }} />
        </div>
        <h2>
          LInes Style simply using props : {"lineStyle={{}}"}
          props
        </h2>
        <div style={{ flex: 1 }}>
          <Tree treeData={data} lineStyle={{ color: "blue" }} />
        </div>
        <h2>
          Icon Style simply using props : {"iconStyle={{}}"}
          props
        </h2>
        <div style={{ flex: 1 }}>
          <Tree treeData={data} iconStyle={{ width: 64 }} />
        </div>
        <h2>
          iconType simply using props :{" "}
          {"iconType=['rounded','filled','thick']"}
          props, here example with 'thick' option:
        </h2>
        <div style={{ flex: 1 }}>
          <Tree
            treeData={data}
            iconType={["thick"]}
            style={{ background: "#e9f7f8" }}
          />
        </div>
      </div>
    </>
  );
};

export default App;
