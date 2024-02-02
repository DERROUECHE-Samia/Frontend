import React, { useState } from "react";
import Button from "./Button";
import Nav1 from "./Nav1";

const Parmetres = ({ user }) => {
  const [editedUser, setEditedUser] = useState({ ...user });

 

  const handleSaveClick = () => {
    // logique de Enregistrer
    console.log("Edited User:", editedUser);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  return (
    <>
     <div>
     <Nav1 user={{ name: editedUser.name , fullName: editedUser.fullName , mail:editedUser.mail}}/>
     </div>
    <div className="ml-28 mt-12 ">
      <p className="font-bold text-2xl pb-4"> Paramètres du compte </p>
      <div className="border border-solid border-black p-8 mr-96">
        <div className="flex mb-2 pb-4">
          <div className="border border-solid bg-indigo-100 border-indigo-700 rounded-full flex items-center justify-center text-2xl h-12 w-12 text-indigo-700 font-bold mr-2">
            {editedUser.name.charAt(0).toUpperCase()}
          </div>

          <div className="pl-6 pt-6">
            <div className="flex items-center">
              <p className="pr-2 font-bold">Nom: </p>
                <input
                  type="text"
                  name="fullName"
                  value={editedUser.fullName}
                  onChange={handleInputChange}
                  className="text-black border-b border-solid border-black"
                />         
            </div>

            <div className=" flex items-center pt-4">
              <p className="pr-2 font-bold">Prénom: </p>
                <input
                  type="text"
                  name="name"
                  value={editedUser.name}
                  onChange={handleInputChange}
                  className="text-black border-b border-solid border-black"
                />  
            </div>

            <div className=" flex items-center pt-4">
              <p className="pr-2 font-bold">Adresse Mail: </p>
                <input
                  type="text"
                  name="mail"
                  value={editedUser.mail}
                  onChange={handleInputChange}
                  className="text-black border-b border-solid border-black"
                /> 
            </div>

            <div className="flex items-center font-bold font-serif pl-96 pt-12">
                <Button onClick={handleSaveClick}>Enregistrer</Button> 
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Parmetres;
