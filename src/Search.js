import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div className="Search">
      <form>
        <input type="text" name="Enter a city" className="city-search" />
        <input type="submit" value="Search" className="search-button" />
        <input
          type="submit"
          value="Use current location"
          className="location-button"
        />
      </form>
    </div>
  );
}
