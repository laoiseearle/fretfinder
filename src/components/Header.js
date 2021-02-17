import React from 'react';
import './Header.css';

function Header({
  openMenu,
  setOpenMenu,
  togglePitch,
  toggleAccidentals,
  toggleHideAccidentals,
  toggleHand,
  flattenPitch,
  changeTuningFromPreset,
  changeFretNums,
}) {
  const tuningPreset = tuning => {
    changeTuningFromPreset(tuning);
  };

  return (
    <header>
      <h1 className="header-title">FretFinder</h1>

      <div className="pitch-direction">
        <i
          className={`fa ${
            flattenPitch ? 'fa-arrow-circle-down' : 'fa-arrow-circle-up'
          }`}
          onClick={() => togglePitch()}
        ></i>
      </div>

      <div className="settings">
        <i className="fa fa-cog" onClick={() => setOpenMenu(!openMenu)}></i>
        <div
          className="settings-menu"
          onClick={() => setOpenMenu(false)}
          style={{ display: openMenu ? 'flex' : 'none' }}
        >
          <div
            className="menu-container"
            onClick={e => {
              e.stopPropagation();
            }}
          >
            <div className="menu-header">
              <h2>Settings</h2>
            </div>

            <div className="menu-item">
              <h3>Accidentals</h3>
              <div className="radio-button">
                <input
                  type="radio"
                  name="accidental"
                  id="flat"
                  onChange={() => toggleAccidentals()}
                  defaultChecked
                />
                <label htmlFor="flat">Flat</label>

                <input
                  type="radio"
                  name="accidental"
                  id="sharp"
                  onChange={() => toggleAccidentals()}
                />
                <label htmlFor="sharp">Sharp</label>
              </div>
            </div>

            <div className="menu-item">
              <h3>Hide Accidentals</h3>
              <div className="radio-button">
                <input
                  type="radio"
                  name="hide-accidental"
                  id="hide-acc"
                  onChange={() => toggleHideAccidentals()}
                />
                <label htmlFor="hide-acc">Yes</label>

                <input
                  type="radio"
                  name="hide-accidental"
                  id="show-acc"
                  defaultChecked
                  onChange={() => toggleHideAccidentals()}
                />
                <label htmlFor="show-acc">No</label>
              </div>
            </div>

            <div className="menu-item">
              <h3>Hand</h3>

              <div className="radio-button">
                <input
                  type="radio"
                  name="hand"
                  id="left"
                  onChange={() => toggleHand()}
                />
                <label htmlFor="left">Left</label>

                <input
                  type="radio"
                  name="hand"
                  id="right"
                  defaultChecked
                  onChange={() => toggleHand()}
                />
                <label htmlFor="right">Right</label>
              </div>
            </div>

            <div className="menu-item">
              <h3>Fret Numbers</h3>

              <div className="radio-button">
                <input
                  type="radio"
                  name="fret-nums"
                  id="fret-nums-all"
                  onChange={() => changeFretNums('all')}
                />
                <label htmlFor="fret-nums-all">All</label>

                <input
                  type="radio"
                  name="fret-nums"
                  id="fret-nums-inlays"
                  defaultChecked
                  onChange={() => changeFretNums('inlays')}
                />
                <label htmlFor="fret-nums-inlays">Inlays</label>

                <input
                  type="radio"
                  name="fret-nums"
                  id="fret-nums-off"
                  onChange={() => changeFretNums('off')}
                />
                <label htmlFor="fret-nums-off">Off</label>
              </div>
            </div>

            <div className="menu-item">
              <h3>Tuning Presets</h3>

              <div className="tuning-presets">
                <button
                  type="button"
                  onClick={() => tuningPreset(['E', 'A', 'D', 'G', 'B', 'E'])}
                >
                  Standard
                </button>
                <button
                  type="button"
                  onClick={() => tuningPreset(['D', 'A', 'D', 'G', 'B', 'E'])}
                >
                  Drop-D
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="help">
        <i className="fa fa-question-circle"></i>
      </div>
    </header>
  );
}

export default Header;
