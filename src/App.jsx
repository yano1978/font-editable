import { useState } from 'react';
import { EditText } from 'react-edit-text';
import 'react-edit-text/dist/index.css';
function App() {
  const [size, setSize] = useState();
  const [select, setSelect] = useState();
  const [height, setHeight] = useState();
  const [space, setSpacing] = useState();

  const fontsizeChange = (e) => {
    // console.log('setting font size', e.target.value);
    setSize(e.target.value);
  };
  const selectWeightChange = (e) => {
    // console.log('setting select', e.target.value);
    setSelect(e.target.value);
  };
  const selectHeightChange = (e) => {
    // console.log('setting font height', e.target.value);
    setHeight(e.target.value);
  };
  const selectSpacingChange = (e) => {
    // console.log('setting font spacing', e.target.value);
    setSpacing(e.target.value);
  };
  return (
    <>
      <div className="flex flex-row w-full mt-10 mx-2">
        <div className="grid flex-grow h-20 place-items-center">
          <span>Text size</span>
          <input
            onMouseUp={fontsizeChange}
            type="range"
            min="10"
            max="100"
            className="range"
          />
        </div>
        <div className="divider divider-vertical"></div>
        <div className="grid flex-grow h-20 place-items-center">
          <span>Leading</span>
          <input
            onChange={selectHeightChange}
            type="range"
            max="100"
            className="range"
          />
        </div>
      </div>
      <div className="flex flex-row w-full mt-10 mx-2 pb-6">
        <div className="grid flex-grow h-20 place-items-center">
          <span>Select weight</span>
          <select
            onChange={selectWeightChange}
            className="select select-bordered select-sm w-full px-4"
          >
            <option disabled="disabled">Select weight</option>
            <option>100</option>
            <option>200</option>
            <option>300</option>
            <option>400</option>
            <option>500</option>
            <option>600</option>
            <option>700</option>
            <option>800</option>
            <option>900</option>
          </select>
        </div>
        <div className="divider divider-vertical"></div>
        <div className="grid flex-grow h-20 place-items-center">
          <span>Tracking</span>
          <input
            onMouseUp={selectSpacingChange}
            type="range"
            max="100"
            className="range"
          />
        </div>
      </div>
      <div className="flex flex-row w-full mt-10 mx-2">
        <div className="grid flex-grow h-20 place-items-center">
          <EditText
            name="textbox"
            style={{
              fontSize: size,
              fontWeight: select,
              height: height,
              letterSpacing: space,
            }}
            className="text-edit outline-0 bg-base-100 text-center text-4xl"
            defaultValue="Some text here"
            placeholder="Some text here"
          />
        </div>
      </div>
    </>
  );
}

export default App;
