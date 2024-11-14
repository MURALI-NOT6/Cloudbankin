const Input = ({ field }: any) => {
  return (
    <div>
      <label>{field.fieldName}</label>
      <input type="text" name={field.fieldName} placeholder={field.fieldName} />
    </div>
  );
};

export default Input;
