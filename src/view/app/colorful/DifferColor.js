import React from 'react';
import {javaKeywords} from "../JavaKeywords";

const DifferColor = ({line}) => {
    let getSpace = (line) => {
        if (!line.replace(/\s/g, '').length) {
            return <p style={{height: 10}}>{""}</p>
        }
        return <p
            style={{
                fontWeight: "bold",
                whiteSpace: "pre-wrap",
                height: 10
            }} dangerouslySetInnerHTML={{__html: modifyLineElements(line)}}>
        </p>;
    }

    const modifyLineElements = (line) => {
        let modifiedLine = '<p>';
        const lineElements = line.split(" ");
        let isSingleLineComment = false;
        let isDocComment = false;
        for (let i = 0; i < lineElements.length; i++) {
            const element = lineElements[i];
            if (element === "//") {
                isSingleLineComment = true;
            }
            if (element === "/**" || element === "*" || element === "*/") {
                isDocComment = true;
            }
            console.log("EL: ", element)
            if (isDocComment) {
                modifiedLine += `<span style="color: #0ca804">${element} </span>`;
            } else if (isSingleLineComment) {
                modifiedLine += `<span style="color: #aa9e91">${element} </span>`;
            } else if (element.indexOf("(") > -1 && element.indexOf(")") > -1 && line.indexOf("{") > -1) {
                modifiedLine += `<span style="color: #dcd117">${element} </span>`;
            } else if (element.startsWith('"')) {
                const commaSpace = element.indexOf(";");
                if (commaSpace > -1 && commaSpace === element.length - 1) {
                    modifiedLine += `<span style="color: #087802">${element.substr(0, element.length - 1)}</span>`;
                    modifiedLine += `<span style="color: #ef8110">; </span>`;
                } else {
                    modifiedLine += `<span style="color: #087802">${element} </span>`;
                }
            } else if (javaKeywords.includes(element)) {
                modifiedLine += `<span style="color: #ef8110">${element} </span>`;
            } else {
                const commaSpace = element.indexOf(";");
                if (commaSpace > -1 && commaSpace === element.length - 1) {
                    modifiedLine += `<span>${element.substr(0, element.length - 1)}</span>`;
                    modifiedLine += `<span style="color: #ef8110">; </span>`;
                } else {
                    modifiedLine += `<span>${element} </span>`;
                }
            }
        }
        modifiedLine += '</p>'
        return modifiedLine;
    }

    return (
        <>
            {getSpace(line)}
        </>
    );
};

export default DifferColor;