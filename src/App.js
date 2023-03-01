import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './Components/SearchBar';
import BookList from './Components/BookList';
import './App.css';

import Pagination from './Components/Pagination';

const API_BASE_URL = 'http://openlibrary.org/search.json';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [books, setBooks] = useState([]);
  
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const handleSearch = async (qu) => {
    try {
      const response = await axios.get(API_BASE_URL, {
        params: { q: qu, page: currentPage,limit: 10, offset: (currentPage - 1) * 10  },
      });
      console.log(response.data.numFound);
      setBooks(response.data.docs);
      setTotalPages(Math.ceil(response.data.numFound / 100));
   
      setSearchTerm(qu)
    } catch (error) {
      console.error(error);
    }
  };
  

  const handlePageChange = async (pageNumber) => {
    setCurrentPage(pageNumber);
    try {
      console.log(searchTerm)
      const response = await axios.get(API_BASE_URL, {
        params: { q: searchTerm, page: pageNumber , limit: 10, offset: (pageNumber - 1) * 10},
      });
     
      setBooks(response.data.docs);
     
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h1> Search By Book ,Title or by Author</h1>

      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} onSearch={handleSearch} />
      <Pagination page={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />

      <div className="book-container">
       
          <BookList books={books}  />
        
      </div>
    </div>
  );
};

export default App;
