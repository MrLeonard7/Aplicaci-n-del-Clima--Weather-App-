import React from "react";
import { useState } from "react";



function SearchBar({onSearch}) {
    const [location, setLocation] = useState('');

    function handleChange(e) {
        setLocation(e.target.value);
    }
    function handleSearchSubmit(e) {
        e.preventDefault()
        onSearch(location)
    } 

    return (
        <>
            <nav class="navbar bg-body-tertiary">
                <div class="container-fluid">
                    <form class="d-flex" 
                    action={SearchBar}
                    onSubmit={handleSearchSubmit}>
                        <input class="form-control me-2" 
                        type="text" 
                        placeholder="Buscar" 
                        value={location} 
                        onChange={handleChange}/>
                        <button class="btn btn-outline-success" 
                        type="submit">
                            Buscar
                        </button>
                    </form>
                </div>
            </nav>
        </>
    )
} 

export default SearchBar