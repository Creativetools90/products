import React from 'react'

const Output = (props) => {
    return (
        <div className="webPewview">
            <iframe
                title="Output"
                style={{ width: '100%', height: '100%', border: 'none' }}
                srcDoc={props.langInput}
            />
        </div>
    )
}

export default Output