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

  const [dropdownMenuOpen, setDropdownMenuOpen] = useState({
    accidentals: false,
    hideAccidentals: false,
    landscape: false,
    rightHanded: false,
    fretNums: false,
    instrument: false,
  });

  const instrumentPreset = (tuning, instrument) => {
    setInstrument(instrument);
    changeTuningFromPreset(tuning);
  };

  const toggleDropDownMenus = target => {
    if (dropdownMenuOpen[target]) {
      return setDropdownMenuOpen(!dropdownMenuOpen[target]);
    }

    const updatedState = Object.keys(dropdownMenuOpen).reduce(
      (acc, curr) => ({ ...acc, [curr]: false }),
      {}
    );
    updatedState[target] = !dropdownMenuOpen[target];
    return setDropdownMenuOpen(updatedState);
  };

  return (
    <header>
      <h1>FretFinder</h1>

      <div className="flex-right">
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

        <div className="menu">
          <i
            className={`fa ${openMenu ? 'fa-times' : 'fa-cog'}`}
            onClick={() => setOpenMenu(!openMenu)}
          ></i>
        </div>
      </div>

      <div className={openMenu ? 'settings-menu menu-open' : 'settings-menu'}>
        <h2>Settings</h2>
        <div className="menu-item">
          <div className="dropdown">
            <button
              onClick={() => {
                toggleDropDownMenus('landscape');
              }}
            >
              <p>Display Mode</p>
              <p>{`${menuSettings.landscape ? 'Landscape' : 'Portrait'}`}</p>
            </button>
            <div
              className={
                dropdownMenuOpen.landscape
                  ? 'dropdown-menu active'
                  : 'dropdown-menu'
              }
            >
              <button
                onClick={() => {
                  setMenuSettings({ ...menuSettings, landscape: true });
                  toggleDropDownMenus('landscape');
                }}
              >
                <p>Landscape</p>
              </button>
              <button
                onClick={() => {
                  setMenuSettings({ ...menuSettings, landscape: false });
                  toggleDropDownMenus('landscape');
                }}
              >
                <p>Portrait</p>
              </button>
            </div>
          </div>
        </div>

        <div className="menu-item">
          <div className="dropdown">
            <button
              onClick={() => {
                toggleDropDownMenus('accidentals');
              }}
            >
              <p>Accidental Type</p>
              <p>{`${menuSettings.useFlats ? 'Flats' : 'Sharps'}`}</p>
            </button>
            <div
              className={
                dropdownMenuOpen.accidentals
                  ? 'dropdown-menu active'
                  : 'dropdown-menu'
              }
            >
              <button
                onClick={() => {
                  setMenuSettings({ ...menuSettings, useFlats: true });
                  toggleDropDownMenus('accidentals');
                }}
              >
                <p>Flats</p>
              </button>
              <button
                onClick={() => {
                  setMenuSettings({ ...menuSettings, useFlats: false });
                  toggleDropDownMenus('accidentals');
                }}
              >
                <p>Sharps</p>
              </button>
            </div>
          </div>
        </div>

        <div className="menu-item">
          <div className="dropdown">
            <button
              onClick={() => {
                toggleDropDownMenus('hideAccidentals');
              }}
            >
              <p>Accidental Display</p>
              <p>{`${menuSettings.hideAccidentals ? 'Hidden' : 'Visible'}`}</p>
            </button>
            <div
              className={
                dropdownMenuOpen.hideAccidentals
                  ? 'dropdown-menu active'
                  : 'dropdown-menu'
              }
            >
              <button
                onClick={() => {
                  setMenuSettings({ ...menuSettings, hideAccidentals: true });
                  toggleDropDownMenus('hideAccidentals');
                }}
              >
                <p>Hidden</p>
              </button>
              <button
                onClick={() => {
                  setMenuSettings({
                    ...menuSettings,
                    hideAccidentals: false,
                  });
                  toggleDropDownMenus('hideAccidentals');
                }}
              >
                <p>Visible</p>
              </button>
            </div>
          </div>
        </div>

        <div className="menu-item">
          <div className="dropdown">
            <button
              onClick={() => {
                toggleDropDownMenus('rightHanded');
              }}
            >
              <p>Fretboard</p>
              <p>{`${
                menuSettings.rightHanded ? 'Right-Handed' : 'Left-Handed'
              }`}</p>
            </button>
            <div
              className={
                dropdownMenuOpen.rightHanded
                  ? 'dropdown-menu active'
                  : 'dropdown-menu'
              }
            >
              <button
                onClick={() => {
                  setMenuSettings({ ...menuSettings, rightHanded: true });
                  toggleDropDownMenus('rightHanded');
                }}
              >
                <p>Right-Handed</p>
              </button>
              <button
                onClick={() => {
                  setMenuSettings({
                    ...menuSettings,
                    rightHanded: false,
                  });
                  toggleDropDownMenus('rightHanded');
                }}
              >
                <p>Left-Handed</p>
              </button>
            </div>
          </div>
        </div>

        <div className="menu-item">
          <div className="dropdown">
            <button
              onClick={() => {
                toggleDropDownMenus('fretNums');
              }}
            >
              <p>Fret Numbers</p>
              <p>{`${menuSettings.fretNums}`}</p>
            </button>
            <div
              className={
                dropdownMenuOpen.fretNums
                  ? 'dropdown-menu active'
                  : 'dropdown-menu'
              }
            >
              <button
                onClick={() => {
                  setMenuSettings({ ...menuSettings, fretNums: 'all' });
                  toggleDropDownMenus('fretNums');
                }}
              >
                <p>All</p>
              </button>
              <button
                onClick={() => {
                  setMenuSettings({
                    ...menuSettings,
                    fretNums: 'inlays',
                  });
                  toggleDropDownMenus('fretNums');
                }}
              >
                <p>Inlays</p>
              </button>

              <button
                onClick={() => {
                  setMenuSettings({
                    ...menuSettings,
                    fretNums: 'off',
                  });
                  toggleDropDownMenus('fretNums');
                }}
              >
                <p>Off</p>
              </button>
            </div>
          </div>
        </div>

        <div className="menu-item instrument">
          <h3>Presets</h3>
          <div className="dropdown">
            <button
              onClick={() => {
                toggleDropDownMenus('instrument');
              }}
            >
              <p>Instrument</p>
              <p>{`${instrument}`}</p>
            </button>
            <div
              className={
                dropdownMenuOpen.instrument
                  ? 'dropdown-menu active'
                  : 'dropdown-menu'
              }
            >
              <button
                onClick={() => {
                  instrumentPreset(['E', 'A', 'D', 'G', 'B', 'E'], 'guitar');
                  toggleDropDownMenus('instrument');
                }}
              >
                <p>Guitar</p>
              </button>
              <button
                onClick={() => {
                  instrumentPreset(['E', 'A', 'D', 'G'], 'bass');
                  toggleDropDownMenus('instrument');
                }}
              >
                <p>Bass</p>
              </button>

              <button
                onClick={() => {
                  instrumentPreset(['G', 'C', 'E', 'A'], 'ukulele');
                  toggleDropDownMenus('instrument');
                }}
              >
                <p>Ukulele</p>
              </button>

              <button
                onClick={() => {
                  instrumentPreset(['G', 'D', 'A', 'E'], 'mandolin');
                  toggleDropDownMenus('instrument');
                }}
              >
                <p>Mandolin</p>
              </button>
            </div>
          </div>
        </div>

        <div className="menu-item">
          <div className="tuning-presets">
            {data[instrument].map(preset => {
              const presetName = preset[0];
              const presetTuning = preset[1];

              return (
                <button
                  type="button"
                  onClick={() => changeTuningFromPreset(presetTuning)}
                >
                  {presetName}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
