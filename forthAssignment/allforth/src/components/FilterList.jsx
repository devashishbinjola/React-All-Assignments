import React, { useState,useMemo } from 'react'

const FilterList = () => {
    const [search, setSearch] = useState("");
    
   
    const numbers = [12, 34, 56, 78, 91, 23, 45, 67, 89, 10, 30, 50];

    
    const filteredNumbers = useMemo(() => {
        console.log("Filtering numbers..."); 
        return numbers.filter(num => 
            num.toString().includes(search)
        );
    }, [search, numbers]); 

    return (
        <div>
            <h2>useMemo</h2>
            <input 
                type="text" 
    
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                
            />
            <ul >
                {filteredNumbers.map((num, index) => (
                    <li key={index} style={{ listStyle:'none' }}>
                        {num}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default FilterList;
