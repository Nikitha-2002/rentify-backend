// PropertyList Component with Pagination
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PropertyList = () => {
  const [properties, setProperties] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchProperties();
  }, [currentPage]);

  const fetchProperties = async () => {
    try {
      const { data } = await axios.get(`/api/properties?page=${currentPage}`);
      setProperties(data.properties);
      setTotalPages(data.totalPages);
    } catch (error) {
      console.error('Error fetching properties', error);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <h1>Property Listings</h1>
      <ul>
        {properties.map(property => (
          <li key={property._id}>{property.description}</li>
        ))}
      </ul>
      <div>
        {Array.from({ length: totalPages }, (_, index) => (
          <button key={index} onClick={() => handlePageChange(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PropertyList;
