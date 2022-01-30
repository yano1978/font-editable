import React, { useState } from 'react';

const ButtonGroup = ({ buttons, setFontPositionAfterClick }) => {
  const [clickedId, setClickedId] = useState(-1);

  const handleClick = (event, id) => {
    setClickedId(id);
    setFontPositionAfterClick(event);
  };

  return (
    <>
      <div className="btn-group">
        {buttons.map((buttonLabel, i) => (
          <button
            key={i}
            name={buttonLabel}
            onClick={(event) => handleClick(event, i)}
            className={i === clickedId ? 'btn btn-sm btn-active' : 'btn btn-sm'}
          >
            <i id={buttonLabel} className={'fa fa-align-' + buttonLabel}></i>
          </button>
        ))}
      </div>
    </>
  );
};

export default ButtonGroup;
