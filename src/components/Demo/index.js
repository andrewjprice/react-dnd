import React from 'react';
import Draggable from '../Draggable';
import Droppable from '../Droppable';

const droppableStyle = {
    backgroundColor: '#555',
    width: '250px',
    height: '400px',
    margin: '32px'
}

export default class Demo extends React.Component {
    render() {
        return(
            <div className="wrapper">
                <Droppable id="dr1" style={droppableStyle}>
                    <Draggable id="react" style={{ margin: '8px' }}><div className="item">React</div></Draggable>
                    <Draggable id="angular" style={{ margin: '8px' }}><div className="item">Angular</div></Draggable>
                </Droppable>
    
                <Droppable id="dr2" style={droppableStyle}>
                    <Draggable id="vue" style={{ margin: '8px' }}><div className="item">Vue</div></Draggable>
                </Droppable>
          </div>
        )
    }
}