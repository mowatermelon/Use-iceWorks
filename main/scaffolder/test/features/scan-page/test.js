const e=require("rimraf"),r=require("fs"),a=require("path"),i=require("mkdirp"),s=require("request"),t=require("../../.."),c=a.join(__dirname,"tmp");e.sync(c),i.sync(c),module.exports=(async()=>{await t.createProject({scaffolding:"@icedesign/scaffold-lite",version:"latest",projectName:"\u6d4b\u8bd5\u9879\u76ee",destDir:c,interpreter:({type:e,message:r,data:a},i)=>{switch(e){case"DESTDIR_EXISTS_OVERRIDE":case"FILE_CREATED":i(!0);break;default:i(!0)}}});await t.scanPage({destDir:c});e.sync(c)});