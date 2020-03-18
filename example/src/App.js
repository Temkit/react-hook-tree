import React, { useState } from "react";
import json from "./treeData.json";
import Tree from "react-hook-tree";
import "./style.css";
import { useEffect } from "react";

const App = () => {
  const [data, setData] = useState(json);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div style={{ marginTop: 40, display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", flex: 1 }}>
        <div
          style={{
            display: "flex",
            flex: 1,
            flexDirection: "column",
            padding: 40
          }}
        >
          <h4>
            Global container Style simply using the usual react : {"style={{}}"}{" "}
            props{" "}
          </h4>
          <Tree
            treeData={data}
            iconType={["folder"]}
            getData={setData}
            showActions={true}
            itemAttributes={[
              {
                name: "title",
                type: "text-input",
                placeholder: "Title",
                class: "col-6"
              },
              {
                name: "active",
                type: "checkbox",
                value: 0,
                datatype: "int",
                label: "activé le type",
                class: "col-6"
              }
            ]}
            compact={true}
          />
        </div>
        <div
          style={{
            display: "flex",
            flex: 1,
            flexDirection: "column",
            padding: 40
          }}
        >
          <h4>
            LInes Style simply using props : {"lineStyle={{}}"}
            props
          </h4>
          <Tree
            treeData={data}
            getData={setData}
            lineStyle={{ color: "blue" }}
            showActions={false}
          />
        </div>
      </div>
      <div style={{ display: "flex", flex: 1 }}>
        <div
          style={{
            display: "flex",
            flex: 1,
            flexDirection: "column",
            padding: 40
          }}
        >
          <h4>
            Icon Style simply using props : {"iconStyle={{}}"}
            props
          </h4>
          <Tree treeData={data} getData={setData} iconStyle={{ width: 64 }} />
        </div>

        <div
          style={{
            display: "flex",
            flex: 1,
            flexDirection: "column",
            padding: 40
          }}
        >
          <h4>
            iconType simply using props :{" "}
            {"iconType=['rounded','filled','thick']"}
            props, here example with 'thick' option:
          </h4>
          <Tree
            treeData={data}
            getData={setData}
            iconType={["thick"]}
            style={{ background: "#e9f7f8" }}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
