var React = require('react');
var ReactDOM = require('react-dom');

var HelloReact = React.createClass({
    render: function() {
        return React.DOM.h1({ style: { color: 'red' } }, 'Hello React!');
    }
});

var root = React.createElement(HelloReact);
ReactDOM.render(root, document.getElementById('example'));
