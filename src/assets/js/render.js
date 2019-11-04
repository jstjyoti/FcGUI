function render(skeleton) {
    const parent = skeleton['parent']
    const parentDOMRepresentation = createDOM(parent)
    const children = skeleton['children']
    if (children) {
        for(var child of children) {
            parentDOMRepresentation.appendChild(render(child))
        }
    }
    return parentDOMRepresentation
}
function createDOM(skeleton) {
    const dom = document.createElement(skeleton['name'])
    for(var attribute in skeleton['property']) {
        dom.setAttribute(attribute, skeleton['property'][attribute])
    }
    const event = skeleton['event']
    if (event) {
        event.bind(dom)()
    }
    const text = skeleton['text']
    if (text) {
        dom.appendChild(document.createTextNode(text))
    }
    return dom
}