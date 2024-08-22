import React, {useState} from "react";
import {DICTIONARY_URL, API_KEY} from '../../api';
import './Dictionary.css';

const Dictionary = ({handleSearchLimitReached, handleResults}) => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [searchCount, setSearchCount] = useState(0); //Track the number of searches
    const maxSearches = 3;

    const handleSubmit = async (e) => {
        e.preventDefault();
         // Prevents the form from submitting the traditional way
         // Handle form submission with JavaScript here

         if (searchCount >= maxSearches) {
            alert('You have reached the maximum number of searches');
            return;
        }

        if (query.trim() === '') return;

        try {
            const response = await fetch(`${DICTIONARY_URL}?key=${API_KEY}&q=${query}&type=search`);
            
            if (!response.ok) {
                throw new Error (`HTTP error! status: ${response.status}`);
            }
            const xmlText = await response.text(); //convert to a text string
            const parser = new DOMParser(); //The DOMParser is a built-in JavaScript class used to parse XML or HTML strings into a DOM (Document Object Model) tree. 
            const xmlDoc = parser.parseFromString(xmlText, "application/xml"); //method converts an XML string (xmlText) into a DOM (Document Object Model) document that you can work with in JavaScript. 

           // Extract data from XML
           const items = xmlDoc.getElementsByTagName('item');
           
           const newResults = Array.from(items).slice(0,1).map(item => ({
               word: item.getElementsByTagName('word')[0]?.textContent || 'No word',
               definition: item.getElementsByTagName('definition')[0]?.textContent || 'No definition'
           }));
           
           handleResults(newResults);
           // Update results array with new results
           setResults(prevResults => {
            const updatedResults = [...prevResults, ...newResults];
            return updatedResults;
           })
         
           
           //Increment the search count
           setSearchCount(prevCount => prevCount + 1);

           //Notify App if search limits is reached
           if(searchCount + 1 >= maxSearches) {
            handleSearchLimitReached();
           }

        } catch (error) {
            console.log ('ERROR fetching dictionary data', error);
        }
        
    }
    const remainingSearches = maxSearches - searchCount;
    return (
        <div className="dictionary-container">
        <div className="remaining-searches">
            <p>Search Countdown: {remainingSearches}</p>
            {remainingSearches === 0 && <span>You have used up all your searches.</span>}
            {remainingSearches === 1 && <span>You can search only one more vocabulary</span>}
            {remainingSearches === 2 && <span>You can search only two more vocabularies</span>}
            {remainingSearches === 3 && <span>You can search three times</span>}
        </div>
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Enter a word to search"
                />
                <button type="submit">Search</button>
            </form>
        </div>
        <div className="results-container">
        <p>Review and memorize the following vocabulary words and their definitions:</p>


            <div>
                {results.map((result, index) => (
                    <div key={index} className="result-item">
                        <p>{result.word} : {result.definition}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
    )
}

export default Dictionary;