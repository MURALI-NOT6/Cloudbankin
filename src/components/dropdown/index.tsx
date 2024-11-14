import React, { useState } from "react";
import Select, { SingleValue } from "react-select";

const Dropdown = ({ field }: any) => {
  const options = field?.selectableValues?.map((list: any) => {
    return {
      value: list,
      label: list,
    };
  });

  const [selectedValues, setSelectedValues] =
    useState<SingleValue<{ value: string; label: string }>>(null);

  return (
    <div>
      <label>{field.fieldName}</label>
      <Select
        placeholder={field.fieldName}
        value={selectedValues}
        onChange={(newValue) => setSelectedValues(newValue)}
        options={options}
      />
    </div>
  );
};

export default Dropdown;
