const{fork:e}=require("child_process"),{getEnv:t}=require("../env"),{NPM_CLI:r}=require("../paths"),s=require("../logger"),i=require("../terminal");class n extends Error{constructor(e,t){super(e),this.metadata=t}}const p=require("path"),o=require("fs"),d=require("path-exists"),a={fork:(s,i)=>e(r,s,Object.assign(i,{env:t(),stdio:["pipe","pipe","pipe","ipc"],detached:!0})),run(s,p){let o="";"string"==typeof s&&(s=s.split(" ")),(s=s.sort(e=>e.startsWith("-")?1:0)).push("--scripts-prepend-node-path=auto");const d=p.cwd;i.send(d,"npm "+s.join(" "),d);const a=Object.assign(p,{env:t(),stdio:["pipe","pipe","pipe","ipc"],detached:!0});return new Promise((t,p)=>{const c=e(r,s,a);c.stdout.on("data",e=>{i.send(d,(""+e).trim()),o+=e}),c.stderr.on("data",e=>{i.send(d,(""+e).trim()),o+=e}),c.on("close",e=>{i.send(d,"exit",e),0===e?t(e,"",o):p(new n("runcmd",{cmd:r,args:s,message:o}))})})}};module.exports=a;