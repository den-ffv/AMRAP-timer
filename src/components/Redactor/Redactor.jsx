import React, { useState } from "react";

import "./Redactor.scss";
function Redactor({
  fontFamiluItem,
  fontFamili,
  setFontFamili,
  fontColorItem,
  setFontColor,
}) {
  const [menuRedactorOpen, setMenuRedactorOpen] = useState(false);

  const changeFont = (font) => {
    setFontFamili(font);
    window.localStorage.setItem("font", font);
  };
  const chengeColor = (color) => {
    setFontColor(color);
    window.localStorage.setItem("color", color);
  };

  return (
    <div className='redactor'>
      <button
        className='redactor__button'
        onClick={() => setMenuRedactorOpen(!menuRedactorOpen)}
      >
        {menuRedactorOpen ? "x" : "?"}
      </button>
      <div
        className={
          menuRedactorOpen
            ? "redactor-menu redactor-menu-active"
            : "redactor-menu"
        }
      >
        {fontFamiluItem.map((itemFont) => (
          <p
            style={{ fontFamily: itemFont.font }}
            onClick={() => changeFont(itemFont.font)}
            key={itemFont.id}
          >
            {itemFont.font}
          </p>
        ))}
        <h3>Colors:</h3>
        {fontColorItem.map((colorItem) => (
          <p key={colorItem.id} onClick={() => chengeColor(colorItem.color)}>
            <span style={{ backgroundColor: colorItem.color }} />
            {colorItem.color}
          </p>
        ))}
      </div>
    </div>
  );
}

export default Redactor;
