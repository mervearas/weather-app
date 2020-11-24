import React, { useState } from "react";

const SearchCity = (props) => {
    const [city, setCity] = useState("");
    const { handleClick } = props;

    function handleChange(value) {
        setCity(value)
    }

    function handleOnClick () {
        handleClick(city)
        setCity("");
    }

    return (
        <div className="search_form">
            <span className="icon">
                <i className="fa fa-search" aria-hidden="true"></i>
            </span>
            <input type="text" placeholder="Search City" value={city} onChange={(event) => handleChange(event.target.value)} />
            <button disabled={city.length === 0} onClick={() => handleOnClick()}>Search</button>
        </div>
    )
}

export default SearchCity;