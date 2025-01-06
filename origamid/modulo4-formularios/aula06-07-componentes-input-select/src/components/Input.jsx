export const Input = ({ label, id, setValue, ...props }) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        // Uma opção para definir tipo: type={id === 'email' ? 'email' : 'text'}
        type="text"
        id={id}
        name={id}
        onChange={({ target }) => setValue(target.value)}
        {...props}
      />
    </>
  );
};
