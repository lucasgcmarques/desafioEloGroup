import React, { useRef, useContext } from 'react';

import BoardContext from '../Board/context';
import { Container } from './styles';

import { useDrag, useDrop } from 'react-dnd';


export default function Card({ data, index, listIndex }) {
  const ref = useRef();
  const { move } = useContext(BoardContext);

  const [{ isDragging }, dragRef] = useDrag({
    type: 'CARD', 
    index,
    listIndex,
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  });


  const [, dropRef] = useDrop({
    accept: 'CARD',
    hover(item, monitor) {

      const draggedListIndex = item.listIndex;
      // const targetListIndex = listIndex;

      const draggedindex = item.index;
      const targetIndex = index;

      if (draggedindex === targetIndex){
        return;
      }

      const targetSize = ref.current.getBoundingClientRect();
      const targetCenter = (targetSize.bottom - targetSize.top) / 2;

      const draggedOffset = monitor.getClientOffset();
      const draggedTop = draggedOffset.y - targetSize.top;

      if (draggedindex < targetIndex && draggedTop < targetCenter) {
        return;
      }

      if (draggedindex > targetIndex && draggedTop > targetCenter) {
        return;
      }

      move(draggedListIndex, draggedindex, targetIndex); 

      // item.index = targetIndex;
      // item.listIndex = targetListIndex;
      console.log(listIndex);
    }
  });

  dragRef(dropRef(ref));

  return (
    <Container ref={ref} isDragging={isDragging}>
      <header>
      </header>
      <p>{data.content}</p>
      <small>
        Lead
      </small>
    </Container>
  )
}
