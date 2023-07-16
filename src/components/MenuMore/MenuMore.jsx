import React from "react";
import "./MenuMore.scss";
function MenuMore({ openMore, setOpenMire, handleCheckboxChange, setOpenRedactor ,openRedactor }) {
  return (
    <div className={openMore? 'menu menu-active' : "menu"}>
      <button onClick={() =>setOpenRedactor(!openRedactor)} className='menu__button' disabled={!openMore}>Redactor</button>
      <div className='toggleWrapper'>
        <input
          type='checkbox'
          name='toggle'
          className='mobileToggle'
          id='toggle'
          onChange={handleCheckboxChange}
          disabled={!openMore}
        />
        <label htmlFor='toggle'>Millisecond</label>
      </div>
      <div>

      </div>
    </div>
  );
}

export default MenuMore;
