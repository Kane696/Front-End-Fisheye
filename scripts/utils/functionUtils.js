// Append element to the parent
function appendElement(parent, arr){
    arr.forEach(element => {
        parent.appendChild(element)
    });
    return parent;
}


// Set attributes to element
function setAttributes(element, attributes){
    Object.keys(attributes).forEach(attr => {
        element.setAttribute(attr, attributes[attr]);
    })
}