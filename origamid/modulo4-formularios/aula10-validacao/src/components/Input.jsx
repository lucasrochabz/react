export const Input = ({ label, id, onChange, ...props }) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input type="text" id={id} name={id} onChange={onChange} {...props} />
    </>
  );
};
