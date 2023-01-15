import React from 'react';
import './Header.css';

function Header({
  openMenu,
  setOpenMenu,
  changeTuningFromPreset,
  setMenuSettings,
  menuSettings,
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
            menuSettings.flattenPitch
              ? 'fa-arrow-circle-down'
              : 'fa-arrow-circle-up'
          }`}
          onClick={() =>
            setMenuSettings({
              ...menuSettings,
              flattenPitch: !menuSettings.flattenPitch,
            })
          }
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
                  onChange={() =>
                    setMenuSettings({ ...menuSettings, useFlats: true })
                  }
                  defaultChecked
                />
                <label htmlFor="flat">Flat</label>

                <input
                  type="radio"
                  name="accidental"
                  id="sharp"
                  onChange={() =>
                    setMenuSettings({ ...menuSettings, useFlats: false })
                  }
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
                  defaultChecked
                  onChange={() =>
                    setMenuSettings({ ...menuSettings, hideAccidentals: true })
                  }
                />
                <label htmlFor="hide-acc">Yes</label>

                <input
                  type="radio"
                  name="hide-accidental"
                  id="show-acc"
                  onChange={() =>
                    setMenuSettings({ ...menuSettings, hideAccidentals: false })
                  }
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
                  onChange={() =>
                    setMenuSettings({ ...menuSettings, rightHanded: false })
                  }
                />
                <label htmlFor="left">Left</label>

                <input
                  type="radio"
                  name="hand"
                  id="right"
                  defaultChecked
                  onChange={() =>
                    setMenuSettings({ ...menuSettings, rightHanded: true })
                  }
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
                  onChange={() =>
                    setMenuSettings({ ...menuSettings, fretNums: 'all' })
                  }
                />
                <label htmlFor="fret-nums-all">All</label>

                <input
                  type="radio"
                  name="fret-nums"
                  id="fret-nums-inlays"
                  defaultChecked
                  onChange={() =>
                    setMenuSettings({ ...menuSettings, fretNums: 'inlays' })
                  }
                />
                <label htmlFor="fret-nums-inlays">Inlays</label>

                <input
                  type="radio"
                  name="fret-nums"
                  id="fret-nums-off"
                  onChange={() =>
                    setMenuSettings({ ...menuSettings, fretNums: 'off' })
                  }
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
    </header>
  );
}

export default Header;
