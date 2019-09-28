import React from 'react';
import PropTypes from 'prop-types';

export default class Draggable extends React.Component {
    drag = (e) => {
        e.dataTransfer.setData('transfer', e.target.id)
    }

    noAllowDrop = (e) => {
        e.stopPropagation();
    }

    render() {
        var {id, children, style} = this.props
        return (
            <div id={id} draggable onDragStart={this.drag} onDragOver={this.noAllowDrop} style={style}>
                {children}
            </div>
        )
    }
}

Draggable.propTypes = {
    id: PropTypes.string,
    style: PropTypes.object,
    children: PropTypes.node
}