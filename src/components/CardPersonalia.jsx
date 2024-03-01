import CardHeader from "./CardHeader";
import Form from "./Form";
import InputComponent from "./InputComponent";
import Button from "./Button";
import { useState } from "react";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export default function CardPersonalia() {
  const formObject = {
    name: "",
    title: "",
    phone: "",
    city: "",
    country: "",
    email: "",
  };

  const [formData, setFormData] = useState(formObject);
  const [isHidden, setIsHidden] = useState(false);

  const handleChange = (key, inputValue) => {
    setFormData((prevData) => ({
      ...prevData,
      [key]: inputValue,
    }));
  };

  const handleEdit = (event) => {
    setIsHidden(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsHidden(true);
  };

  return (
    <div className="card">
      <CardHeader name={"Personalia"} icon={faUser} />
      <Form>
        {Object.keys(formObject).map((key) => (
          <InputComponent
            key={key}
            name={key.charAt(0).toUpperCase() + key.slice(1) + ":"}
            type={key === "phone" ? "tel" : key === "email" ? "email" : "text"}
            value={formData[key]}
            onChange={(event) => handleChange(key, event.target.value)}
            output={isHidden ? formData[key] : ""}
            isHidden={isHidden}
          />
        ))}
        <div className="btn-container-form">
          <Button
            className={"btn"}
            text={"Edit"}
            type={"button"}
            onClick={handleEdit}
          />
          <Button
            className={"btn"}
            text={"Submit"}
            type={"submit"}
            onClick={handleSubmit}
          />
        </div>
      </Form>
    </div>
  );
}
