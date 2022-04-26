import React, {useState} from 'react'
import Playground from './Playground';
import Name from './Name';
import ColorPicker from './ColorPicker'

function Paint () {

    const [colors, setColors] = useState([])
    const [activeColor, setActiveColor] = useState()

    return (
        <>
        <div>
            <Playground />
            <Name />
        </div>
        <div style={{ marginTop: 10 }}>
          <ColorPicker
            colors={colors}
            activeColor={activeColor}
            setActiveColor={setActiveColor}
          />
        </div>
        </>
    )
}

export default Paint