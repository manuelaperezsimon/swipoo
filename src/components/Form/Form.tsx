const Form = (): JSX.Element => {
  return (
    <form
      className="form"
      noValidate
      onSubmit={() => {}}
      aria-label="form to check car model"
    >
      <div className="form__group">
        <label htmlFor="username" className="choose__group">
          Write your username:
          <input
            id="username"
            className="options__group"
            type="date"
            placeholder="your name :)"
            value=""
            onChange={() => {}}
          />
        </label>
      </div>
      <div className="form__group">
        <label className="choose__group" htmlFor="brand">
          Choose the car brand:
          <select
            className="options__group"
            id="brand"
            onChange={() => {}}
          ></select>
        </label>
      </div>

      <div className="form__group">
        <label htmlFor="enrollmentDate" className="choose__group">
          Here is the first registration date:
          <input
            id="enrollmentDate"
            className="options__group"
            type="date"
            placeholder="enrollmentDate"
            value=""
            onChange={() => {}}
          />
        </label>
      </div>
      <div className="form__group">
        <label htmlFor="fuel" className="choose__group">
          Fuel type:
          <select
            id="fuel"
            className="options__group"
            onChange={() => {}}
          ></select>
        </label>
      </div>
    </form>
  );
};

export default Form;
