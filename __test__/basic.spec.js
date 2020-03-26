// Link.react.test.js
import React from "react";
import { init, makeChild, deleteItem, editItem } from "./../src/dataServices";
import data from "./data/data.json";
import deletedData from "./data/delete_test_.json";
import editedData from "./data/edit_test_.json";
import renderer from "react-test-renderer";

describe("Tree Delete item", () => {
  test("It should delete a node from the tree and retrun it", () => {
    let input = data;
    let output;

    const newData = d => {
      output = d;
    };

    init(data, newData, "salut", m => console.log(m));

    let item = {
      _id: "uMfYOav",
      children: [],
      item: { name: "Home & Decoration" }
    };

    deleteItem(item);

    expect(output).toEqual(deletedData);
  });
});

describe("Tree Edit item", () => {
  test("It should Edit a node from the tree and retrun it", () => {
    let input = data;
    let output;

    const newData = d => {
      output = d;
    };

    init(data, newData, "salut", m => console.log(m));

    let item = {
      _id: "uMfYOav",
      children: [],
      item: { name: "Decoration" }
    };

    editItem(item);

    expect(output).toEqual(editedData);
  });
});
