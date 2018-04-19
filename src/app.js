console.log('App.js is running');

var app = {
    title: 'Indecision App',
    subtitle: 'This is some info'
};

// JSX - Javascript XML
var template = (
<div>
    <h1>app.title</h1>
    <p>app.subtitle</p>
    <ol>
        <li>Item one</li>
        <li>Item two</li>
    </ol>
</div>
);

function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>;
    } 
};

var user = {
    name: 'Rayyan',
    age: 29,
    location: 'New York'
}

var templateTwo = (
    <div>
        <h1>{user.name}</h1>
        <p>Age: {user.age}</p>
        {getLocation(user.location)}
    </div>
);


var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);