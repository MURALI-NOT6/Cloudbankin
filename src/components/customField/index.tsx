import Field from "../../type/field";
import Dropdown from "../dropdown";
import FileUpload from "../fileUpload";
import Input from "../input";

interface CustomFieldProps {
  field: Field;
}

const CustomField: React.FC<CustomFieldProps> = ({ field }) => {
  console.log(field?.width);
  switch (field.type) {
    case "string":
      return (
        <div className="fieldSection" style={{ width: `${field?.width}%` }}>
          <Input field={field} />
        </div>
      );

    case "dropdown":
      return (
        <div className="fieldSection" style={{ width: `${field?.width}%` }}>
          <Dropdown field={field} />
        </div>
      );

    case "textarea":
      return (
        <div className="fieldSection" style={{ width: `${field?.width}%` }}>
          <label>{field.fieldName}</label>
          <textarea name={field.fieldName} />
        </div>
      );

    case "file":
      return (
        <div className="fieldSection" style={{ width: `${field?.width}%` }}>
          <label>{field.fieldName}</label>
          <FileUpload field={field} />
        </div>
      );

    default:
      return null;
  }
};

export default CustomField;
