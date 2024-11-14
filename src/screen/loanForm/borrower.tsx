import React from "react";
import CustomField from "../../components/customField";
import Field from "../../type/field";

const LoanFields = ({ fieldInfo }: any) => {
  return (
    <>
      <h6 className="fieldTitle">{fieldInfo?.pageName}</h6>
      <div className="formFieldSection">
        {fieldInfo?.fields
          ?.sort((a: Field, b: Field) => a.fieldId.localeCompare(b.fieldId))
          .map((field: Field) => (
            <CustomField key={field.fieldId} field={field} />
          ))}
      </div>
    </>
  );
};

export default LoanFields;
