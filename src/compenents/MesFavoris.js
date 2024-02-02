import React from 'react';


import Nav1 from './Nav1';
import Article from './Article';  


function MesFavoris() {
    return (
      <div>
    <Nav1 user={{ name: 'derr', fullName: 'John Doe' , mail:'john@gmail.com'}}/>

        <div className="container mx-auto p-4">
          <Article article={{titre: 'samia',auteur: 'AAAAAAAAAAuttttteuuuuuur ', institution: 'IIIIIIIIIInstiiitution',resume: 'resumme', motcle: 'fffffff', reference: 'rrrrrreefeeerence',    pdf: 'pddddddddddf',textuel: 'texxxxxxxxxxt'}}/>
          <Article article={{titre: 'samia',auteur: 'AAAAAAAAAAuttttteuuuuuur ', institution: 'IIIIIIIIIInstiiitution',resume: 'resumme', motcle: 'fffffff', reference: 'rrrrrreefeeerence',    pdf: 'pddddddddddf',textuel: 'texxxxxxxxxxt'}}/>
        </div>



      </div>
    );
  }
  
  export default MesFavoris;

