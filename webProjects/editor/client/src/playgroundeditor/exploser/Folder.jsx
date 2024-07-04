import React from 'react'
import File from './File'
const Folder = (props) => {
    return (
        <>
            <div className="folderContainer" key={props.key} >
                <div className="folderMarking">
                    <div className="toggleFileView"></div>
                    <div className="folderd">
                        <img src="./icons/folder.png" alt="" />
                        <p className="folderName">{props.folderName}</p>
                    </div>
                </div>
                <div className="insertFoldersystem">
                    <div className="indent"></div>
                    <div className="folderData">
                        {props.fileList}
                        {props.otherFolderAndFile}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Folder