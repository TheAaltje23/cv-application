import CardHeader from "./CardHeader";
import EducationBox from "./EducationBox";
import Button from "./Button";
import { useState } from "react";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

export default function CardEducation() {
  const [fieldList, setFieldList] = useState([]);

  const handleAdd = () => {
    setFieldList([...fieldList, {}]);
  };

  const handleRemove = (index) => {
    confirm("Are you sure you want to remove this field?")
      ? setFieldList(fieldList.filter((_, i) => i !== index))
      : null;
  };

  return (
    <div className="card">
      <CardHeader name={"Education"} icon={faGraduationCap} />
      {fieldList.map((_, index) => (
        <EducationBox key={index} onRemove={() => handleRemove(index)} />
      ))}
      <Button
        className={"btn btn-new"}
        text={"Add Field"}
        type={"button"}
        onClick={handleAdd}
      />
    </div>
  );
}
