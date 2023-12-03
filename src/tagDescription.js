// tagDescriptions.js

// tagDescriptions.js
const tagDescriptions = {
    classes: {
        type: 'Class',
        description: 'The class attribute specifies one or more classnames for an element. The class attribute is mostly used to point to a class in a style sheet. However, it can also be used by a JavaScript (via the HTML DOM) to make changes to HTML elements with a specified class.',
        link: 'https://www.w3schools.com/tags/att_global_class.asp',
    },
    ids: {
        type: 'ID',
        description: 'The id attribute specifies a unique id for an HTML element (the value must be unique within the HTML document). The id attribute is most used to point to a style in a style sheet, and by JavaScript (via the HTML DOM) to manipulate the element with the specific id.',
        link: 'https://www.w3schools.com/tags/att_global_id.asp',
    },
    tags: {
        'div': {
            type: 'Tag',
            description: 'The div element is a container that is used to structure HTML documents.',
            link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div',
        },
        'p': {
            type: 'Tag',
            description: 'The p element represents a paragraph of text.',
            link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p',
        },
        'input': {
            type: 'Tag',
            description: 'The input element is used to create interactive controls for web forms.',
            link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input',
        },
        'a': {
            type: 'Tag',
            description: 'The a (anchor) element defines a hyperlink, the named target destination for a hyperlink, or both.',
            link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a',
        },
        'button': {
            type: 'Tag',
            description: 'The button element represents a clickable button, used to submit forms or trigger other interactive events.',
            link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button',
        },
        'span': {
            type: 'Tag',
            description: 'The span element is a generic container used to group other inline elements or apply styles.',
            link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/span',
        },
        'ul': {
            type: 'Tag',
            description: 'The ul element represents an unordered list of items, typically rendered as a bulleted list.',
            link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul',
        },
        'li': {
            type: 'Tag',
            description: 'The li element represents a list item in ordered and unordered lists.',
            link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li',
        },
        'ol': {
            type: 'Tag',
            description: 'The ol element represents an ordered list of items, typically rendered as a numbered list.',
            link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol',
        },
        'form': {
            type: 'Tag',
            description: 'The form element represents a document section containing interactive controls to submit information to a web server.',
            link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form',
        },
        'label': {
            type: 'Tag',
            description: 'The label element represents a label for an input element.',
            link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label',
        },
        'h1': {
            type: 'Tag',
            description: 'The h1 element represents a top-level heading in a section.',
            link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/h1',
        },
        'h2': {
            type: 'Tag',
            description: 'The h2 element represents a second-level heading in a section.',
            link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/h2',
        },
        'legend': {
            type: 'Tag',
            description: 'The legend element represents a caption for the content of its parent fieldset.',
            link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/legend',
        },
        'textarea': {
            type: 'Tag',
            description: 'The textarea element represents a multi-line plain-text editing control.',
            link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea',
        },
        'select': {
            type: 'Tag',
            description: 'The select element represents a control for selecting amongst a set of options.',
            link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select',
        },
        'option': {
            type: 'Tag',
            description: 'The option element is used to define an item contained in a select, an optgroup, or a datalist element.',
            link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/option',
        },
        'table': {
            type: 'Tag',
            description: 'The table element represents data in a two-dimensional table.',
            link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table',
        },
        'tr': {
            type: 'Tag',
            description: 'The tr element represents a row of cells in a table.',
            link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tr',
        },
        'td': {
            type: 'Tag',
            description: 'The td element represents a data cell in a table.',
            link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td',
        },
        'th': {
            type: 'Tag',
            description: 'The th element represents a header cell in a table.',
            link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/th',
        },
        'img': {
            type: 'Tag',
            description: 'The img element embeds an image into the document.',
            link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img',
        },
        'section': {
            type: 'Tag',
            description: 'The section element represents a generic section of a document or application.',
            link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/section',
        },
        'article': {
            type: 'Tag',
            description: 'The article element represents a self-contained composition in a document, page, application, or site.',
            link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/article',
        },
        'nav': {
            type: 'Tag',
            description: 'The nav element represents a section of a page whose purpose is to provide navigation links, either within the current document or to other documents.',
            link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nav',
        },
        'fieldset': {
            type: 'Tag',
            description: 'The fieldset element is used to group several controls as well as labels (<label>) within a web form.',
            link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/fieldset',
        },
        'figcaption': {
            type: 'Tag',
            description: 'The figcaption element represents a caption or a legend associated with a figure or an illustration described by the rest of the data of the <figure> element which is its immediate ancestor.',
            link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figcaption',
        },
        'figure': {
            type: 'Tag',
            description: 'The figure element represents any content that is referenced from the main content, and can be moved away from the main content without affecting the document’s meaning.',
            link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figure',
        }
    },
    pseudoClasses: {
        ':first-child': {
            type: 'Pseudo Class',
            description: 'The :first-child CSS pseudo-class represents the first element among a group of sibling elements.',
            link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/:first-child',
        },
        ':last-child': {
            type: 'Pseudo Class',
            description: 'The :last-child CSS pseudo-class represents the last element among a group of sibling elements.',
            link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/:last-child',
        },
        ':nth-child(even)': {
            type: 'Pseudo Class',
            description: 'The :nth-child() CSS pseudo-class matches elements based on their position in a group of siblings.',
            link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-child',
        },
        ':nth-child(odd)': {
            type: 'Pseudo Class',
            description: 'The :nth-child() CSS pseudo-class matches elements based on their position in a group of siblings.',
            link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-child',
        },
        ':active': {
            type: 'Pseudo Class',
            description: 'The :active CSS pseudo-class represents an element (such as a button) that is being activated by the user.',
            link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/:active',
        },
        ':checked': {
            type: 'Pseudo Class',
            description: 'The :checked CSS pseudo-class selector represents any radio (input type="radio"), checkbox (input type="checkbox"), or option (option in a select) element that is checked or toggled to an on state.',
            link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/:checked',
        },
        ':visited': {
            type: 'Pseudo Class',
            description: 'The :visited CSS pseudo-class lets you select only links that have been visited.',
            link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/:visited',
        },
        ':hover': {
            type: 'Pseudo Class',
            description: 'The :hover CSS pseudo-class matches when the user interacts with an element with a pointing device, but does not necessarily activate it.',
            link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/:hover',
        }
    },
    pseudoElements: {
        '::before': {
            type: 'Pseudo Element',
            description: 'The ::before CSS pseudo-element matches a virtual element that is inserted before another element.',
            link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/::before',
        },
        '::after': {
            type: 'Pseudo Element',
            description: 'The ::after CSS pseudo-element matches a virtual element that is inserted after another element.',
            link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/::after',
        },
        '::first-letter': {
            type: 'Pseudo Element',
            description: 'The ::first-letter CSS pseudo-element applies styles to the first letter of the first line of a block-level element, but only when not preceded by other content (such as images or inline tables).',
            link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/::first-letter',
        },
        '::first-line': {
            type: 'Pseudo Element',
            description: 'The ::first-line CSS pseudo-element applies styles to the first line of a block-level element, but only when not preceded by other content (such as images or inline tables).',
            link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/::first-line',
        }
    },
    combinators: {
        ' ': {
            type: 'Combinator',
            description: 'The descendant combinator — typically represented by a single space ( ) character — combines two selectors such that elements matched by the second selector are selected if they have an ancestor (parent, parent\'s parent, parent\'s parent\'s parent, etc) element matching the first selector. Selectors that utilize a descendant combinator are called descendant selectors.',
            link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/Descendant_combinator',
        },
        '>': {
            type: 'Combinator',
            description: 'The child combinator (>) is placed between two CSS selectors. It matches only those elements matched by the second selector that are the direct children of elements matched by the first.',
            link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/Child_combinator',
        },
        '+': {
            type: 'Combinator',
            description: 'The adjacent sibling combinator (+) separates two selectors and matches the second element only if it immediately follows the first element, and both are children of the same parent element.',
            link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/Adjacent_sibling_combinator',
        },
        '~': {
            type: 'Combinator',
            description: 'The general sibling combinator (~) separates two selectors and matches the second element only if it follows the first element (though not necessarily immediately), and both are children of the same parent element.',
            link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/General_sibling_combinator',
        }
    }
};


export default tagDescriptions;
