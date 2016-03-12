'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = createClass({
    handleSubmit: function handleSubmit(e) {
        e.preventDefault();
        console.log(this.refs.newItemForm);
    }
});

(0, _reactDom.render)(_react2.default.createElement(App, null), document.getElementById('root'));

//# sourceMappingURL=App-compiled.js.map