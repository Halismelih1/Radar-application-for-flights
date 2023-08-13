import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ReactPaginate from 'react-paginate';

const ListView = ({ openDetail }) => {
  const state = useSelector((store) => store);

  const [itemOffset, setItemOffset] = useState(0);
  const [pageCount, setPageCount] = useState(0);

  const itemsPerPage = 10;

  const endOffset = itemOffset + itemsPerPage;

  const currentItems = state?.flights.slice(itemOffset, endOffset);

  const handlePageClick = (event) => {
    const newOffset = event.selected * itemsPerPage;
    setItemOffset(newOffset);
  };

  return (
    <div className='container mt-4'>
      <div className='table-responsive'>
        <table className='table table-dark table-striped table-hover'>
          <thead className='table-dark tr '>
            <tr className=''>
              <th>ID</th>
              <th>Kuyruk Kodu</th>
              <th>Enlem</th>
              <th>Boylam</th>
              <th>İşlemler</th>
            </tr>
          </thead>
          <tbody>
            {currentItems &&
              currentItems.map((fly) => (
                <tr key={fly.id}>
                  <td>{fly.id}</td>
                  <td>{fly.code}</td>
                  <td>{fly.lat}</td>
                  <td>{fly.lan}</td>
                  <td>
                    <a
                      className='btn btn-primary'
                      onClick={() => openDetail(fly.id)}
                    >
                      Detay
                    </a>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <div className='d-flex justify-content-center'>
        <ReactPaginate
          breakLabel='...'
          nextLabel='Next >'
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={Math.ceil(state?.flights.length / itemsPerPage)}
          previousLabel='< Previous'
          renderOnZeroPageCount={null}
          initialPage={0}
          className="pagination"
          activeClassName="active"
        />
      </div>
    </div>
  );
};

export default ListView;
