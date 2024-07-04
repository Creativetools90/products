
const Api = [
    {
      id: 1,
      type: "folder",
      Name: "Main_Application_dir",
      file_list: [],
      file_limit: 0,
    },
    {
      id: 2,
      type: "folder",
      Name: "Admin_folder",
      file_list: [
        { id: 1, fileName: "index.html", fileType: "html", content: "" },
        { id: 2, fileName: "style.css", fileType: "css", content: "" },
      ],
      file_limit: 2,
    },
    {
      id: 3,
      type: "file",
      Name: "App.js",
      fileType : "js",
      content: "",
    },
    {
      id: 4,
      type: "folder",
      Name: "Root_folder",
      file_list: [
        { id: 1, fileName: "Rootindex.html", fileType: "html", content: "" },
        { id: 2, fileName: "Rootstyle.css", fileType: "css", content: "" },
        
      ],
      folder_list: [
        {
          id: 1,
          type : "folder",
          folderName: "style",
          file_list: [
            { id: 1, fileName: "in.html", fileType: "html", content: "" },
            { id: 2, fileName: "s.css", fileType: "css", content: "" },
          ],
          file_limit: 2,
        },
        {
          id: 2,
          type : "folder",
          folderName: "javascript",
          file_list: [],
          file_limit: 0,
        },
      ],
      
    },
    {
      id: 5,
      type: "folder",
      Name: "BackendData",
      file_list: [
        { id: 1, fileName: "index.js", fileType: "js", content: "" },
        { id: 2, fileName: "api.js", fileType: "js", content: "" },
        
      ],
      folder_list: [
        {
          id: 1,
          type : "folder",
          folderName: "Model",
          file_list: [
            { id: 1, fileName: "UserModel.js", fileType: "js", content: "" },
          ],
          file_limit: 2,
        },
        {
          id: 2,
          type : "folder",
          folderName: "Routes",
          file_list: [
              { id: 1, fileName: "UserController.js", fileType: "js", content: "" },
          ],
          file_limit: 0,
        },
      ],
      
    },
    {
        id: 5,
        type: "file",
        Name: "Main.js",
        fileType : "js",
        content: "",
      },
    {
        id: 6,
        type: "file",
        Name: "Main.ts",
        fileType : "ts",
        content: "",
      },
    {
        id: 7,
        type: "file",
        Name: "Route.ts",
        fileType : "ts",
        content: "",
      },
  ];
  
  
  export default Api;