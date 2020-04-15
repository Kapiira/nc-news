import React from 'react';

function SortBy({ sortBy, setSortBy }) {
  const changeSortBy = (event) => {
    setSortBy(event.target.value);
  };

  return (
    <div className="sortBy">
      <label>
        Sort By:
        <select name="sortBy" onChange={changeSortBy} defaultValue={sortBy}>
          <option value="created_at">Date Created</option>
          <option value="comment_count">Comment Count</option>
          <option value="votes">Votes</option>
        </select>
      </label>
    </div>
  );
}

export default SortBy;
