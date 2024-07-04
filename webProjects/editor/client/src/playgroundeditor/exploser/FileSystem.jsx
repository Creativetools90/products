import React, { useState, useEffect } from "react";
import File from "./File";
import Folder from "./Folder";
import Api from "./Api";

const FileSystem = () => {
  const [api, setApi] = useState([]);

  useEffect(() => {
    setApi(Api);
  }, []);

  const fileTypeIcons = (fileType)=>{
    switch (fileType) {
        case "html":
          return "./icons/html.png";
        case "css":
          return "./icons/css.png";
        case "js":
          return "./icons/js.png";
        case "ts":
          return "./icons/ts.png";
        default:
          return "./icons/txt.png";
      }

  }
  return (
    <div className="explorer">
      <div className="ex_heading">
        <h4>EDITOR</h4>
      </div>
      <div className="explorerManagement">
        <div className="treeView">
          {api.map((val) => {
            return val.type == "folder" ? (
              <Folder
                key={val.id}
                folderName={val.Name}
                fileList={
                  <File
                    fileName={val.file_list.map((v) => {
                      return (
                        <li key={v.key} className="fileName">
                        <img src={fileTypeIcons(v.fileType)} />
                          {v.fileName}
                        </li>
                      );
                    })}
                  />
                }
                otherFolderAndFile={
                  val.folder_list
                    ? val.folder_list.map((v) => {
                        return (
                          <Folder
                            key={v.id}
                            folderName={v.folderName}
                            fileList={
                              <File
                                fileName={v.file_list.map((v) => {
                                  return (
                                    <li key={v.key} className="fileName">
                                      <img src={fileTypeIcons(v.fileType)} />
                                      {v.fileName}
                                    </li>
                                  );
                                })}
                              />
                            }
                          />
                        );
                      })
                    : ""
                }
              />
            ) : (
              <File
                fileName={
                  <li className="fileName" key={val.id}>
                    
                    {val.Name}
                  </li>
                }
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FileSystem;
