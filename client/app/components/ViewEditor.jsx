"use client";

import React, { useEffect, useState } from "react";
import { Input } from "@nextui-org/input";
import { Select, SelectItem } from "@nextui-org/react";
import {Button} from "@nextui-org/button";

export default function ViewEditor({viewId}) {
  const [view, setView] = useState(null);
  const typeName = ["text", "select", "radio"];

  useEffect(() => {
    fetch(`/api/views/${viewId}`)
      .then((res) => res.json())
      .then(setView);
  }, [viewId]);

  const addControl = (type) => {
    setView((prev) => ({
      ...prev,
      controls: [...prev.controls, { type, label: "", name: "", options: [] }],
    }));
  };

  const updateControl = (index, field, value) => {
    setView((prev) => ({
      ...prev,
      controls: prev.controls.map((control, i) =>
        i === index ? { ...control, [field]: value } : control
      ),
    }));
  };

  const saveView = async () => {
    await fetch(`/api/views/${viewId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(view),
    });
    alert("View saved successfully!");
  };

  if (!view) return <div>Loading...</div>;

  return (
    <div>
      <h1>Edit view : {view.name}</h1>
      {view.controls.map((control, index) => (
        <div key={index}>
          <Input
            value={control.label}
            onChange={(e) => updateControl(index, "label", e.target.value)}
            placeholder="Label"
          />
          <Input
            value={control.name}
            onChange={(e) => updateControl(index, "name", e.target.value)}
            placeholder="Name"
          />
          <Select
            onChange={(e) => updateControl(index, "type", e.target.value)}
          >
            {typeName.map((type) => (
              <SelectItem key={type} value={type}>
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </SelectItem>
            ))}
          </Select>
          {control.type === "select" && (
            <Input
              value={control.options.join(",")}
              onChange={(e) =>
                updateControl(index, "options", e.target.value.split(","))
              }
              placeholder="Options (comma-separated)"
            />
          )}
        </div>
      ))}
      <Button onClick={() => addControl("text")}>Add Text Field</Button>
      <Button onClick={() => addControl("select")}>Add Select Field</Button>
      <Button onClick={() => addControl("radio")}>Add Radio Field</Button>
      <Button onClick={saveView}>Save View</Button>
    </div>
  );
}
