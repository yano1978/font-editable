import { useState, useRef, defaultState } from 'react';
import Editable from './components/Editable';

function App() {
  const inputRef = useRef();
  const [font, setFont] = useState('');
  const [slide, setSlide] = useState();
  const [select, setSelect] = useState();

  const handleChange = (e) => {
    console.log('setting level', e.target.value);
    setSlide(e.target.value);
  };
  const selectChange = (e) => {
    console.log('setting select', e.target.value);
    setSelect(e.target.value);
  };
  return (
    <>
      <div className="flex flex-row w-full mt-10 mx-2">
        <div className="grid flex-grow h-20 place-items-center">
          <span>Text size</span>
          {slide}
          <input
            onChange={(e) => console.log(e.target.value)}
            onMouseUp={handleChange}
            type="range"
            max="100"
            className="range"
          />
        </div>
        <div className="divider divider-vertical"></div>
        <div className="grid flex-grow h-20 place-items-center">
          <span>Leading</span>
          <input type="range" max="100" className="range" />
        </div>
      </div>
      <div className="flex flex-row w-full mt-10 mx-2 pb-6">
        <div className="grid flex-grow h-20 place-items-center">
          <span>Select weight</span>
          <select
            onChange={selectChange}
            className="select select-bordered select-sm w-full px-4"
          >
            <option disabled="disabled" selected="selected">
              Select weight
            </option>
            <option>100</option>
            <option>200</option>
            <option>300</option>
            <option>400</option>
            <option>500</option>
            <option>600</option>
          </select>
        </div>
        <div className="divider divider-vertical"></div>
        <div className="grid flex-grow h-20 place-items-center">
          <span>Tracking</span>
          <input type="range" max="100" className="range" />
        </div>
      </div>
      <div className="flex flex-row w-full mt-10 mx-2">
        <div className="grid flex-grow h-20 place-items-center">
          <span style={{ fontSize: slide, fontWeight: select }}>Test</span>
          <Editable
            text={font}
            placeholder="Some text here"
            childRef={inputRef}
            type="input"
            style={{ fontSize: slide, fontWeight: select }}
          >
            <input
              style={{ fontSize: slide, fontWeight: select }}
              ref={inputRef}
              type="text"
              name="font"
              className="outline-0 bg-base-100 text-4xl"
              placeholder="Some text here"
              value={font}
              onChange={(e) => setFont(e.target.value)}
            />
          </Editable>
        </div>
      </div>
    </>
  );
}

export default App;
