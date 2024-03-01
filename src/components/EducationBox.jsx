import Form from "./Form";
import InputComponent from "./InputComponent";
import TextAreaComponent from "./TextAreaComponent";
import Button from "./Button";
import { useState } from "react";

export default function EducationBox({ onRemove }) {
  const formObject = {
    "Program:": "",
    "School:": "",
    "Start Date:": "",
    "End Date:": "",
    "Description:": "",
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
    <Form>
      {Object.keys(formObject).map((key) =>
        key !== "Description:" ? (
          <InputComponent
            key={key}
            name={key}
            type={
              key === "Start Date:"
                ? "date"
                : key === "End Date:"
                ? "date"
                : "text"
            }
            value={formData[key]}
            onChange={(event) => handleChange(key, event.target.value)}
            output={isHidden ? formData[key] : ""}
            isHidden={isHidden}
          />
        ) : (
          <TextAreaComponent
            key={key}
            name={key}
            value={formData[key]}
            onChange={(event) => handleChange(key, event.target.value)}
            output={isHidden ? formData[key] : ""}
            isHidden={isHidden}
          />
        )
      )}
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
        <Button
          className={"btn btn-danger"}
          text={"Remove"}
          type={"button"}
          onClick={onRemove}
        />
      </div>
      <hr />
    </Form>
  );
}
