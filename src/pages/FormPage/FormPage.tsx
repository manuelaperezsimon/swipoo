import Form from "../../components/Form/Form";
import FormPageStyled from "./FormPageStyled";

const FormPage = (): JSX.Element => {
  return (
    <>
      <FormPageStyled>
        <h2 className="form__heading">Check the car model</h2>;
        <Form />
      </FormPageStyled>
    </>
  );
};

export default FormPage;
