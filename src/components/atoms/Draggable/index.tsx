
import React from 'react';
import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';

const Draggable: React.FC<any> = (props): JSX.Element => {
    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: props.id,
    });
    const style = {
        // Outputs `translate3d(x, y, 0)`
        width: '100%',
        height: '100%',
        transform: CSS.Translate.toString(transform),
    };

    return (
        <button ref={setNodeRef} style={style} {...listeners} {...attributes}>
            {props.children}
        </button>
    );
}

export default Draggable;