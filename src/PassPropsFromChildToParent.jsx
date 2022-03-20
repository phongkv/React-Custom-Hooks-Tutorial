import React, { useState } from "react";

export const useFilters = () => {
  const [search, setSearch] = useState("");
  const [greaterThan, setGreaterThan] = useState(0);
  const [lessThan, setLessThan] = useState(20);

  return {
    search,
    greaterThan,
    lessThan,
    render: (
      <div className="child">
        <p>Filters</p>
        <input
          type="search"
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value)}
        />
        <input
          type="number"
          defaultValue={greaterThan}
          placeholder="Greater than"
          onChange={(e) => setGreaterThan(e.target.value)}
        />
        <input
          type="number"
          defaultValue={lessThan}
          placeholder="Less than"
          onChange={(e) => setLessThan(e.target.value)}
        />
      </div>
    ),
  };
};

export const DisplayContext = ({ search, greaterThan, lessThan }) => {
  return (
    <div>
      <p>Display Context</p>
      <p>Search: {search}</p>
      <p>Greater than: {greaterThan}</p>
      <p>Less Than: {lessThan}</p>
    </div>
  );
};

export const Parent = () => {
  const { render, search, greaterThan, lessThan } = useFilters();
  return (
    <div>
      <p>Parent</p>
      <DisplayContext {...{ search, greaterThan, lessThan }} />
      {/* <Filters /> */}
      {render}
    </div>
  );
};
