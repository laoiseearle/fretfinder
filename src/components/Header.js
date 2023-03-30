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

  const test = tuning => {
    changeTuningFromPreset(tuning);
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

        <div className={openMenu ? 'settings-menu menu-open' : 'settings-menu'}>
          <h2>Settings</h2>
          <div className="menu-item">
            <div className="dropdown">
              <button
                onClick={() =>
                  setDropdownMenuOpen({
                    ...dropdownMenuOpen,
                    landscape: !dropdownMenuOpen.landscape,
                  })
                }
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
                    setDropdownMenuOpen({
                      ...dropdownMenuOpen,
                      landscape: false,
                    });
                  }}
                >
                  <p>Landscape</p>
                </button>
                <button
                  onClick={() => {
                    setMenuSettings({ ...menuSettings, landscape: false });
                    setDropdownMenuOpen({
                      ...dropdownMenuOpen,
                      landscape: false,
                    });
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
                  setDropdownMenuOpen({
                    ...dropdownMenuOpen,
                    accidentals: !dropdownMenuOpen.accidentals,
                  });
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
                    setDropdownMenuOpen({
                      ...dropdownMenuOpen,
                      accidentals: false,
                    });
                  }}
                >
                  <p>Flats</p>
                </button>
                <button
                  onClick={() => {
                    setMenuSettings({ ...menuSettings, useFlats: false });
                    setDropdownMenuOpen({
                      ...dropdownMenuOpen,
                      accidentals: false,
                    });
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
                onClick={() =>
                  setDropdownMenuOpen({
                    ...dropdownMenuOpen,
                    hideAccidentals: !dropdownMenuOpen.hideAccidentals,
                  })
                }
              >
                <p>Accidental Display</p>
                <p>{`${
                  menuSettings.hideAccidentals ? 'Hidden' : 'Visible'
                }`}</p>
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
                    setDropdownMenuOpen({
                      ...dropdownMenuOpen,
                      hideAccidentals: false,
                    });
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
                    setDropdownMenuOpen({
                      ...dropdownMenuOpen,
                      hideAccidentals: false,
                    });
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
                onClick={() =>
                  setDropdownMenuOpen({
                    ...dropdownMenuOpen,
                    rightHanded: !dropdownMenuOpen.rightHanded,
                  })
                }
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
                    setDropdownMenuOpen({
                      ...dropdownMenuOpen,
                      rightHanded: false,
                    });
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
                    setDropdownMenuOpen({
                      ...dropdownMenuOpen,
                      rightHanded: false,
                    });
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
                onClick={() =>
                  setDropdownMenuOpen({
                    ...dropdownMenuOpen,
                    fretNums: !dropdownMenuOpen.fretNums,
                  })
                }
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
                    setDropdownMenuOpen({
                      ...dropdownMenuOpen,
                      fretNums: false,
                    });
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
                    setDropdownMenuOpen({
                      ...dropdownMenuOpen,
                      fretNums: false,
                    });
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
                    setDropdownMenuOpen({
                      ...dropdownMenuOpen,
                      fretNums: false,
                    });
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
                onClick={() =>
                  setDropdownMenuOpen({
                    ...dropdownMenuOpen,
                    instrument: !dropdownMenuOpen.instrument,
                  })
                }
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
                    setDropdownMenuOpen({
                      ...dropdownMenuOpen,
                      instrument: false,
                    });
                  }}
                >
                  <p>Guitar</p>
                </button>
                <button
                  onClick={() => {
                    instrumentPreset(['E', 'A', 'D', 'G'], 'bass');
                    setDropdownMenuOpen({
                      ...dropdownMenuOpen,
                      instrument: false,
                    });
                  }}
                >
                  <p>Bass</p>
                </button>

                <button
                  onClick={() => {
                    instrumentPreset(['G', 'C', 'E', 'A'], 'ukulele');
                    setDropdownMenuOpen({
                      ...dropdownMenuOpen,
                      instrument: false,
                    });
                  }}
                >
                  <p>Ukulele</p>
                </button>

                <button
                  onClick={() => {
                    instrumentPreset(['G', 'D', 'A', 'E'], 'mandolin');
                    setDropdownMenuOpen({
                      ...dropdownMenuOpen,
                      instrument: false,
                    });
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
                  <button type="button" onClick={() => test(presetTuning)}>
                    {presetName}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
