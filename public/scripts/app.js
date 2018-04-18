'use strict';

console.log('App.js is running');

// JSX - Javascript XML
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Indecision App'
    ),
    React.createElement(
        'p',
        null,
        'This is some info'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item one'
        ),
        React.createElement(
            'li',
            null,
            'Item two'
        )
    )
);

// Create a templateTwo var JSX expression
// div
//  h1 -> Rayyan Ahmed
//  p  -> Age: 29
//  p  -> Location: Manhattan
// Render templateTwo instead of template

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Rayyan Ahmed'
    ),
    React.createElement(
        'p',
        null,
        'Age: 29'
    ),
    React.createElement(
        'p',
        null,
        'Location: Manhattan'
    )
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
