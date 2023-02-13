import React, { useState } from 'react';
import './Header.css';
import data from '../presets.json';

function Header({
  openMenu,
  setOpenMenu,
  changeTuningFromPreset,
  setMenuSettings,
  menuSettings,
}) {
  const [instrument, setInstrument] = useState('guitar');

  const instrumentPreset = (tuning, instrument) => {
    setInstrument(instrument);
    changeTuningFromPreset(tuning);
  };

  const test = tuning => {
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
        <i
          className={`fa ${openMenu ? 'fa-times' : 'fa-cog'}`}
          onClick={() => setOpenMenu(!openMenu)}
        ></i>
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
            <h2>Fretboard</h2>

            <div className="menu-item">
              <p>Accidental Type</p>
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
              <p>Hide Accidentals</p>
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
              <p>Hand</p>

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
              <p>Fret Numbers</p>

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

            <div className="menu-item instrument">
              <h3>Instrument</h3>

              <div className="radio-button radio-button-instrument">
                <input
                  type="radio"
                  name="instrument"
                  id="guitar"
                  defaultChecked
                  onClick={() =>
                    instrumentPreset(['E', 'A', 'D', 'G', 'B', 'E'], 'guitar')
                  }
                />

                <label htmlFor="guitar">Guitar</label>

                <input
                  type="radio"
                  name="instrument"
                  id="bass"
                  onClick={() => instrumentPreset(['E', 'A', 'D', 'G'], 'bass')}
                />

                <label htmlFor="bass">Bass</label>

                <input
                  type="radio"
                  name="instrument"
                  id="ukulele"
                  onClick={() =>
                    instrumentPreset(['G', 'C', 'E', 'A'], 'ukulele')
                  }
                />

                <label htmlFor="ukulele">Ukulele</label>

                <input
                  type="radio"
                  name="instrument"
                  id="mandolin"
                  onClick={() =>
                    instrumentPreset(['G', 'D', 'A', 'E'], 'mandolin')
                  }
                />

                <label htmlFor="mandolin">Mandolin</label>
              </div>
            </div>

            <div className="menu-item tunings">
              <h3>Tuning Presets</h3>

              <div className="tuning-presets">
                {data[instrument].map(preset => {
                  const presetName = preset[0];
                  const presetTuning = preset[1];

                  return (
                    <button type="button" onClick={() => test(presetTuning)}>
                      {presetName}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
