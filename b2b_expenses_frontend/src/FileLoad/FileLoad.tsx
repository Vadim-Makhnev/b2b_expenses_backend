import { useState } from 'react';
import './FileLoad.css';
import * as React from "react";

function LoadFile() {
  const [drag, setDrag] = useState(false);

  function dragStartHandler(e: React.DragEvent) {
    e.preventDefault();
    setDrag(true);
  }

  function dragLeaveHandler(e: React.DragEvent) {
    e.preventDefault();
    setDrag(false);
  }

  function onDropHandler(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    const files = [...e.dataTransfer.files];

    if (files.length <= 0) {
      return;
    }

    const isValid = files.filter((elem) => elem.name.endsWith('.csv'));

    if (isValid.length <= 0) {
      alert('Можно загружать только файлы с расширением .csv');
      return;
    }

    console.log(isValid);
    setDrag(false);
  }

  return (
    <div className="panel-main">
      <div className="top-element">
        <img src="/Files.svg" alt="house" width={16} height={16} />
        <span className="sidebar-text">Загрузка файлов</span>
      </div>
      <div className="load-file default-font">
        {drag ? (
          <div
            className="drop-area center"
            onDragStart={(e) => dragStartHandler(e)}
            onDragLeave={(e) => dragLeaveHandler(e)}
            onDragOver={(e) => dragStartHandler(e)}
            onDrop={(e) => onDropHandler(e)}
          >
            Отпустите файлы, чтобы загрузить их
          </div>
        ) : (
          <div
            className="static-area center"
            onDragStart={(e) => dragStartHandler(e)}
            onDragLeave={(e) => dragLeaveHandler(e)}
            onDragOver={(e) => dragStartHandler(e)}
          >
            Перетащите файлы, чтобы загрузить их
          </div>
        )}
      </div>
    </div>
  );
}

export default LoadFile;
