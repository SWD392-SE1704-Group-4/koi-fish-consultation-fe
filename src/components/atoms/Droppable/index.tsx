import React from 'react';
import { useDroppable } from '@dnd-kit/core';

const Droppable: React.FC<any> = (props): JSX.Element => {
  const { isOver, setNodeRef } = useDroppable({
    id: props.id,
  });
  const style = {
    width: '100%',
    // height: '100%',
    backgroundColor: 'green',
    opacity: isOver ? 1 : 0.5,
  };

  return (
    <div ref={setNodeRef} style={style}>
      {props.children}
    </div>
  );
}

export default Droppable;