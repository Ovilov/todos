function FormInput({ label, name, type }) {
  return (
    <label className="form-control w-full bg-orange-400 pl-8 pb-8">
      <div className="label">
        <span className="label-text">{label}</span>
      </div>
      <textarea className=" w-80"
        name={name}
        type={type}
        rows={4}
        cols={40}
        placeholder="Enter method of meal "
      />
    </label>
  );
}

export default FormInput;
