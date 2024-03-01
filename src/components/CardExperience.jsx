import CardHeader from "./CardHeader";
import ExperienceBox from "./ExperienceBox";
import Button from "./Button";
import { useState } from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

export default function CardExperience() {
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
      <CardHeader name={"Experience"} icon={faBriefcase} />
      {fieldList.map((_, index) => (
        <ExperienceBox key={index} onRemove={() => handleRemove(index)} />
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
