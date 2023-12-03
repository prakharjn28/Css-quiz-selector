import React, { useState, useEffect } from 'react';
import './index.css';
import { generateSelector } from "./selectorGenerator";
import tagDescriptions from "./tagDescription"; // Assuming you have tagDescriptions file

const App = () => {
    const [selector, setSelector] = useState([]);
    const [specificityId, setSpecificityId] = useState('');
    const [specificityClass, setSpecificityClass] = useState('');
    const [specificityElement, setSpecificityElement] = useState('');
    const [idBorder, setIdBorder] = useState('');
    const [classBorder, setClassBorder] = useState('');
    const [elementBorder, setElementBorder] = useState('');
    const [clickedTag, setClickedTag] = useState(null);
    const [currentTag, setCurrentTag] = useState('');

    useEffect(() => {
        handleRandomizeClick();
    }, []); // Run on initial mount

    const handleClickTag = async (tag) => {
        const type = getSelectorType(tag);
        setCurrentTag(tag)
        console.log('type', type)
        setClickedTag(type);
        console.log('clickedTag', clickedTag)
    };

    const getSelectorType = (selector) => {
        const { classes, ids, tags, pseudoClasses, pseudoElements, combinators } = tagDescriptions;
        console.log(combinators)
        if (selector[0] === '#') {
            return ids;
        } else if (selector[0] === '.') {
            return classes;
        } else if (pseudoClasses[selector]) {
            return pseudoClasses[selector]
        } else if (pseudoElements[selector]) {
            return pseudoElements[selector];
        } else if (tags[selector]) {
            return tags[selector];
        } else if (selector) {
            console.log('selector', selector, typeof selector)
            console.log(combinators[selector]);
            return combinators['+'];
        }
        else {
            return 'Unknown';
        }
    };

    const calculateSpecificityId = (selectorParts) => {
        let idCount = 0;

        for (const selectorPart of selectorParts) {
            if (selectorPart.startsWith('#')) {
                idCount++;
            }
        }

        return idCount;
    };

    const calculateSpecificityClass = (selectorParts) => {
        let classCount = 0;

        for (const selectorPart of selectorParts) {
            if (selectorPart.startsWith('.') || (selectorPart.startsWith(':') && !selectorPart.startsWith('::'))) {
                classCount++;
            }
        }

        return classCount;
    };


    const calculateSpecificityElement = (selectorParts) => {
        let elementCount = 0;

        for (const selectorPart of selectorParts) {
            if (/[a-z]/.test(selectorPart[0]) || selectorPart.startsWith('::')) {
                elementCount++;
            }
        }

        return elementCount;
    };

    const handleRandomizeClick = () => {
        let newSelector = generateSelector();

        setSelector(newSelector);
        setSpecificityId('');
        setSpecificityClass('');
        setSpecificityElement('');
        setIdBorder('');
        setClassBorder('');
        setElementBorder('');
        setClickedTag(null);
        setCurrentTag('');
    };

    const validateInput = (value, expectedValue, setBorder) => {
        if (parseInt(value, 10) === expectedValue) {
            setBorder('green');
        } else {
            setBorder('red');
        }
    };

    return (
        <div className="mainContainer">
            <h2>CSS Selector Specificity Quiz</h2>
            <div className="container">
                <div className="tag-description-area">
                    <h2>Tag Description</h2>
                    <div className="tag-descriptions">
                        {clickedTag && (
                            <div className="tag-description">
                                <h3>You have selected {currentTag} {clickedTag.type}</h3>
                                <p>{clickedTag.description}</p>
                                <a href={clickedTag.link}>{clickedTag.link}</a>
                            </div>
                        )}
                    </div>
                </div>
                <div className="quiz-area">
                    <button className="randomize-button" onClick={handleRandomizeClick}>Randomize!</button>
                    {selector.map((part, index) => (
                        <span className="selector" key={index} onClick={() => handleClickTag(part)}>
                            {part}
                        </span>
                    ))}
                    <div className="input-group">
                        <label className="label" htmlFor="specificity-id">ID:</label>
                        <input
                            type="number"
                            id="specificity-id"
                            value={specificityId}
                            onChange={(event) => setSpecificityId(event.target.value)}
                            onBlur={() => validateInput(specificityId, calculateSpecificityId(selector), setIdBorder)}
                            style={{ borderColor: idBorder }}
                        />
                    </div>
                    <div className="input-group">
                        <label className="label" htmlFor="specificity-class">Class + Pseudo Class:</label>
                        <input
                            type="number"
                            id="specificity-class"
                            value={specificityClass}
                            onChange={(event) => setSpecificityClass(event.target.value)}
                            onBlur={() => validateInput(specificityClass, calculateSpecificityClass(selector), setClassBorder)}
                            style={{ borderColor: classBorder }}
                        />
                    </div>
                    <div className="input-group">
                        <label className="label" htmlFor="specificity-element">Element + Pseudo Element:</label>
                        <input
                            type="number"
                            id="specificity-element"
                            value={specificityElement}
                            onChange={(event) => setSpecificityElement(event.target.value)}
                            onBlur={() => validateInput(specificityElement, calculateSpecificityElement(selector), setElementBorder)}
                            style={{ borderColor: elementBorder }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
