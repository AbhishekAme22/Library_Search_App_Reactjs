import React from 'react';

const Book = ({ book }) => {
  const { title, author_name, first_publish_year} = book;
  return (
    <div className="book" >
      
      <h3>TITLE:- {title}</h3>
      <p>AUTHOR NAME:-{author_name?.join(', ')}</p>
      <p>FIRST PUBLISHED YEAR:-{first_publish_year}</p>
      
 
    
     
       
   </div>
  );
};

export default Book;
