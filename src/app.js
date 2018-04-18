console.log('App.js is running');

// JSX - Javascript XML
var template = (
<div>
    <h1>Indecision App</h1>
    <p>This is some info</p>
    <ol>
        <li>Item one</li>
        <li>Item two</li>
    </ol>
</div>
)
;

// Create a templateTwo var JSX expression
// div
//  h1 -> Rayyan Ahmed
//  p  -> Age: 29
//  p  -> Location: Manhattan
// Render templateTwo instead of template

var templateTwo = (
    <div>
        <h1>Rayyan Ahmed</h1>
        <p>Age: 29</p>
        <p>Location: Manhattan</p>
    </div>
);


var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);