const Input = ({ placeholder = "", style, onChange, value }) => {
  return (
    <div style={{ border: "0.2px solid gray", borderRadius: "6px" }}>
      <input
        {...{ placeholder, style, required: true, onChange }}
        value={value}
      />
    </div>
  );
};

export default Input;
