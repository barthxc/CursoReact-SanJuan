
import { TagCloud } from "@frank-mayer/react-tag-cloud";
import dataCloud from "./dataCloud";
import { useState } from "react";


const Tag = () => {
    const [skills, setSkills] = useState(dataCloud);

    const handleDeleteSkill = (indexToDelete) => {
      const updatedSkills = skills.filter((_, index) => index !== indexToDelete);
      setSkills(updatedSkills);
    };

    const [newSkill, setNewSkill] = useState("");

    const handleAddSkill = () => {
        if (newSkill.trim() !== "") {
          setSkills([...skills, newSkill]);
          setNewSkill(""); // Limpiar el input después de agregar la habilidad
        }
      };

    return (
    <>
    <input type="text" className="m-1 text-black" value={newSkill} onChange={(e) => setNewSkill(e.target.value)}/> 
    <button className="bg-slate-800" onClick={handleAddSkill}>Add Skills</button>
    <TagCloud className="text-3xl font-bold text-cyan-500 flex place-content-evenly "
        options={(w) => ({
            radius: Math.min(500, w.innerWidth, w.innerHeight) / 2,
            maxSpeed: "fast",
        })}

    >
        {skills}
    </TagCloud>
        <ul>
            {skills.map((skill, index) =>{
                return(
                    <li className="mb-2"  key={index}>{skill}
                     <button className="bg-slate-900 ml-2" onClick={()=> handleDeleteSkill(index)}>X</button>
                    </li>
                )
            })}
        </ul>
    </>
)};

export default Tag;