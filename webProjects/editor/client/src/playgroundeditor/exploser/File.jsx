import React from 'react'

const File = (porps) => {
    return (
        <>
            <div className="filesContainer">
                <ul className="fileList">
                   {
                    porps.fileName
                   }
                </ul>
            </div>
        </>
    )
}

export default File

// fileName