import React from 'react';
import { useState } from 'react';
import useFetch from './Hooks/useFetch.js';
import { Outlet } from 'react-router-dom';

export default function Users() {
  const [pageCount, setPageCount] = useState(1);

  const { loading, error, data } = useFetch(
    `https://randomuser.me/api/?results=400&seed=abc`
  );
  // console.log('data', data?.results?.map((each) => each));

  const USERS_PER_PAGE = 20;

  const total = data?.results?.length;

  const NO_OF_PAGES = 10;

  const skip = pageCount * USERS_PER_PAGE - USERS_PER_PAGE;

  if (loading) {
    return <>Loading...</>;
  }

  if (!loading && error) {
    return <>Error</>; hi
  }

  const style = {
    color: 'steelblue',
  };

  return (
    <div>
      <h2 style={style}> List of users</h2>

      {data?.results.slice(skip, skip + USERS_PER_PAGE).map((each, index) => {
        const name = `${each.name.title} ${each.name.first} ${each.name.last}`;
        return (
          <li key={name.toLowerCase().replaceAll(' ', '')}>{`${
            index + 1
          }.${name}`}</li>
        );
      })}
      {
        <button 
          style={{ color: 'white', backgroundColor: '#150050' }}
          disabled={pageCount <= 1}
          onClick={() => setPageCount((prev) => prev - 1)}
        >
          prev
        </button>
      }
      <p className="pagination">
        Pages: {pageCount} of {USERS_PER_PAGE}
      </p>
      {
        <button
          style={{ color: 'white', backgroundColor: '#150050' }}
          disabled={pageCount >= USERS_PER_PAGE}
          aria-disabled={pageCount >= USERS_PER_PAGE}
          onClick={() => setPageCount((prev) => prev + 1)}
        >
          next
        </button>
      }

      {Array.from({ length: USERS_PER_PAGE }, (value, index) => index + 1).map(
        (each) => (
          <button
            style={{ color: 'white', backgroundColor: '#4649FF' }}
            onClick={() => setPageCount(each)}
          >
            {each}
          </button>
        )
      )}
      <Outlet />
    </div>
  );
}
