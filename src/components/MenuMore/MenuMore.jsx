import React from "react";
import "./MenuMore.scss";
function MenuMore({ openMore, setOpenMire, handleCheckboxChange }) {
  return (
    <div className={openMore? 'menu menu-active' : "menu"}>
      <button onClick={() => console.log(123)} className='menu__button' disabled={!openMore}>Redactor</button>
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
