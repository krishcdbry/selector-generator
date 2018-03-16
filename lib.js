((window) => {

    let Node = null;    // Node 

    if (!window.Node){  // Checking Node in window
        Node = 
            {
              ELEMENT_NODE                :  1,
              ATTRIBUTE_NODE              :  2,
              TEXT_NODE                   :  3,
              CDATA_SECTION_NODE          :  4,
              ENTITY_REFERENCE_NODE       :  5,
              ENTITY_NODE                 :  6,
              PROCESSING_INSTRUCTION_NODE :  7,
              COMMENT_NODE                :  8,
              DOCUMENT_NODE               :  9,
              DOCUMENT_TYPE_NODE          : 10,
              DOCUMENT_FRAGMENT_NODE      : 11,
              NOTATION_NODE               : 12
            };
      }
      else {
        Node = window.Node;
      }
    
    let _init = (elem) => {
    
        if (!(elem instanceof Element)) {
            console.log("Not a valid dom node");
            return;
        }
    
        let selectorPath = [];
    
        while (elem.nodeType == Node.ELEMENT_NODE) {
            let selector = elem.nodeName.toLowerCase();
    
            // Ignoring body and html 
            if (selector == 'body' || selector == 'html') {
                break;
            }
    
            // Finding ID and addting # to selector
            if (elem.id) {
                selector = selector + "#" + elem.id;
            }
            else {
                let sibling = elem;
                let _nth = 0;
                console.log(sibling);
                console.log(sibling.parentNode.children, "Previous Siblings"); 
                while(sibling != null && sibling.nodeType === Node.ELEMENT_NODE) {
                    sibling = sibling.previousElementSibling;
                    _nth++;
                }
                selector = selector + ":nth-child("+_nth+")"
            }

            if (elem.className) {
                selector = selector + "." + elem.className.split(" ").join('.')
            }
    
            selectorPath.unshift(selector);
            elem = elem.parentNode;
        }
        return selectorPath.join(" > ");  // Chaining css selector with valid syntax
    }
    
    window._generateSelector = _init;

})(window)