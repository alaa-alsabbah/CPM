"use client";

import React, { useState } from "react";
import Select from "react-select";
import { Label } from "@/components/ui/label"

type Option = {
  value: string;
  label: string;
};

const options: Option[] = [
  { value: "User-Government-OT100", label: "User-Government-OT100" },
  { value: "User-Government-OT213", label: "User-Government-OT213" },
  { value: "User-Government-OT200", label: "User-Government-OT200" },
  { value: "User-Government-OT900", label: "User-Government-OT900" },
];

export default function MultiSelect() {
  const [selectedOptions, setSelectedOptions] = useState<Option[]>([]);

  const handleChange = (selected: Option[] | null) => {
    setSelectedOptions(selected || []);
  };

  return (
    <div className="w-full">
      <Label className="mb-2 block">  <i className="icon-ic_org_group group font-bold"></i> Groups      <span className="text-red-500"> * </span></Label>
        
      <Select
        isMulti
        options={options}
        value={selectedOptions}
        onChange={handleChange}
        placeholder="Search...."
        className="basic-multi-select"
        classNamePrefix="select"
      />
    </div>
  );
}
