import React from 'react';
import PropTypes from 'prop-types';

export default class Droppable extends React.Component {
    drop = (e) => {
        e.preventDefault();
        var data = e.dataTransfer.getData('transfer');
        e.target.appendChild(document.getElementById(data));
    }

    allowDrop = (e) => {
        e.preventDefault();
    }

    render() {
        var {id, children, style } = this.props
        return (
            <div id={id} onDrop={this.drop} onDragOver={this.allowDrop} style={style}>
                {children}
            </div>
        )
    }
}

Droppable.propTypes = {
    id: PropTypes.string,
    style: PropTypes.object,
    children: PropTypes.node
}