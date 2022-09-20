import { useState } from 'react';
import { EditTextarea } from 'react-edit-text';
import ButtonGroup from './components/ButtonGroup';
import SketchExample from './components/SketchExample';
import { ChromePicker } from 'react-color';
import 'react-edit-text/dist/index.css';

export const App = () => {
  const [size, setSize] = useState();
  const [select, setSelect] = useState();
  const [height, setHeight] = useState();
  const [space, setSpacing] = useState();
  const [position, setPosition] = useState();
  const [color, setColor] = useState();

  const fontsizeChange = (e) => {
    // console.log('setting font size', e.target.value);
    setSize(parseInt(e.target.value));
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

  const colorChange = (e) => {
    console.log('setting font color', e.hex);
    setColor(e.hex);
  };

  const fontPositioning = (e) => {
    console.log('setting font position', e.target.id);
    setPosition(e.target.name);
  };

  return (
    <>
      <div className="flex flex-row w-full mt-10 mx-2">
        <div className="grid flex-grow h-20 place-items-center">
          <span>Text size</span>
          <input
            onChange={fontsizeChange}
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
            min="1"
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
      <div className="flex flex-row w-full mt-10 mx-10">
        <div className="grid flex-grow h-20 place-items-left color-wrapper">
          <span>Color picker</span>

          <ChromePicker color={color} onChangeComplete={colorChange} />
          {/* <SketchExample /> */}
        </div>
        <div className="divider divider-vertical"></div>
        <div className="grid flex-grow h-20 place-items-left">
          <span>Text position</span>
          <ButtonGroup
            buttons={['justify', 'left', 'right', 'center']}
            setFontPositionAfterClick={fontPositioning}
          />
        </div>
      </div>
      <hr />
      <div className="flex flex-row w-full mt-10 mx-2">
        <div className="grid flex-grow h-20 place-items-center">
          <EditTextarea
            className="text-edit outline-0 bg-base-100 text-center text-4xl"
            name="description"
            defaultValue="Some text here"
            placeholder="Some text here"
            style={{
              fontSize: size,
              fontWeight: select,
              lineHeight: height,
              letterSpacing: space,
              textAlign: position,
              color: color,
            }}
          />
        </div>
      </div>
    </>
  );
};

export default App;
