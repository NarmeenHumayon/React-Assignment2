import './FormInput.css';

function FormInput({ label, type, name, placeholder }) {
  return (
    <div className="mb-3">
      <label className="form-label">{label}</label>
      <input
        className="form-control form-control-lg"
        type={type}
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
}

export default FormInput;
