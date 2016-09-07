var React = require('react');
var ReactDOM = require('react-dom');

var HelloReact = React.createClass({
    render: function() {
        return (<h1 style={{color: 'red'}}>Hello React!</h1>);
    }
});

var root = React.createElement(HelloReact);
ReactDOM.render(root, document.getElementById('example'));
