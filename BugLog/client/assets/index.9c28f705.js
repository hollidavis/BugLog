import{r as t,c as e,o as a,a as s,b as o,F as l,d as n,p as r,e as c,t as i,w as d,C as u,S as p,f as g,g as m,h as b,i as v,j as f,k as y,l as h,m as w,$ as B,n as _,v as x,u as C,q as I,s as k,x as E,y as N}from"./vendor.164a9317.js";const S=t({user:{},account:{},bugs:[],activeBug:{},notes:[]});const O={name:"App",setup:()=>({appState:e((()=>S))})},T={class:"row"},A={class:"row"},D=o("footer",{class:"row"},[o("div",{class:"col-12 bg-secondary text-white text-center p-2"}," Made with 💖 by Holli ")],-1);O.render=function(t,e,r,c,i,d){const u=n("Navbar"),p=n("router-view");return a(),s(l,null,[o("header",T,[o(u)]),o("main",A,[o(p)]),D],64)};const P={props:{bug:{type:Object,required:!0}},setup:t=>({updatedAt:e((()=>{const e=new Date(t.bug.updatedAt);return new Intl.DateTimeFormat("en-US").format(e)}))})},M=d("data-v-139b2408");r("data-v-139b2408");const j={class:"row my-2 text-light"},H={class:"col-12"},R={class:"d-flex p-3 flex-row row mx-1 justify-content-around bg-primary rounded lead"},U={class:"col-md-3 text-center"},q={class:"m-0 text-light"},L={class:"col-md-3 text-center"},z={class:"m-0"},V={class:"col-md-3 text-center"},F={class:"m-0"},$={class:"col-md-3 text-center"},K={key:0,class:"m-0"},Y={key:1,class:"m-0"};c();const W=M(((t,e,l,r,c,d)=>{const u=n("router-link");return a(),s("div",j,[o("div",H,[o("div",R,[o("div",U,[o(u,{to:{name:"BugDetailsPage",params:{bugId:l.bug.id}},title:"Navigate to "+l.bug.title+" Details Page"},{default:M((()=>[o("p",q,i(l.bug.title),1)])),_:1},8,["to","title"])]),o("div",L,[o("p",z,i(l.bug.creator.name),1)]),o("div",V,[o("p",F,i(r.updatedAt),1)]),o("div",$,[!1===l.bug.closed?(a(),s("p",K," 🟢 Open ")):(a(),s("p",Y," 🔴 Closed "))])])])])}));P.render=W,P.__scopeId="data-v-139b2408";var G=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:P});const Q=window.location.origin.includes("localhost"),Z=Q?"http://localhost:3000":"",J=u.create({baseURL:Z,timeout:8e3});const X=new class{async getAllBugs(){const t=await J.get("api/bugs");S.bugs=t.data}async getBugById(t){const e=await J.get("api/bugs/"+t);S.activeBug=e.data}async getNotesByBugId(t){const e=await J.get("api/bugs/"+t+"/notes");S.notes=e.data}async createBug(t){const e=await J.post("api/bugs",t);return S.activeBug=e.data,this.getAllBugs(),e.data.id}async editBug(t,e){const a=await J.put("api/bugs/"+t,e);S.activeBug=a.data}async closeBug(t){await J.delete("api/bugs/"+t),this.getAllBugs()}};class tt{static async confirm(t="Are you sure?",e="You won't be able to revert this!",a="warning",s="Yes, delete it!"){try{return!!(await p.fire({title:t,text:e,icon:a,showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:s})).isConfirmed}catch(o){return!1}}static toast(t="Warning!",e="warning",a="top-end",s=3e3,o=!0){p.fire({title:t,icon:e,position:a,timer:s,timerProgressBar:o,toast:!0,showConfirmButton:!1})}}let et;const at={},st=function(t,e){if(!e||0===e.length)return t();if(void 0===et){const t=document.createElement("link").relList;et=t&&t.supports&&t.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(e.map((t=>{if(t in at)return;at[t]=!0;const e=t.endsWith(".css"),a=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${t}"]${a}`))return;const s=document.createElement("link");return s.rel=e?"stylesheet":et,e||(s.as="script",s.crossOrigin=""),s.href=t,document.head.appendChild(s),e?new Promise(((t,e)=>{s.addEventListener("load",t),s.addEventListener("error",e)})):void 0}))).then((()=>t()))};function ot(t){return()=>function(t){switch(t){case"./pages/AccountPage.vue":return st((()=>import("./AccountPage.a9b9f1d7.js")),["/assets/AccountPage.a9b9f1d7.js","/assets/AccountPage.f3fa63f7.css","/assets/vendor.164a9317.js"]);case"./pages/BugDetailsPage.vue":return st((()=>import("./BugDetailsPage.490c7280.js")),["/assets/BugDetailsPage.490c7280.js","/assets/vendor.164a9317.js"]);case"./pages/HomePage.vue":return st((()=>import("./HomePage.c8fc6113.js")),["/assets/HomePage.c8fc6113.js","/assets/vendor.164a9317.js"]);default:return Promise.reject(new Error("Unknown variable dynamic import: "+t))}}(`./pages/${t}.vue`)}const lt=[{path:"/",name:"Home",component:ot("HomePage")},{path:"/:bugId",name:"BugDetailsPage",component:ot("BugDetailsPage")},{path:"/account",name:"Account",component:ot("AccountPage"),beforeEnter:b}],nt=g({linkActiveClass:"router-link-active",linkExactActiveClass:"router-link-exact-active",history:m(),routes:lt});const rt={props:{bug:{type:Object,required:!0}},setup(a){const s=e((()=>S.account)),o=t({updatedAt:""});return v((()=>{try{if(a.bug){const t=new Date(a.bug.updatedAt);o.updatedAt=new Intl.DateTimeFormat("en-US").format(t)}}catch(t){}})),{state:o,account:s,async closeBug(){try{await tt.confirm()&&(await X.closeBug(a.bug.id),nt.push({name:"Home"}),tt.toast("Bug Successfully Close","success"))}catch(t){tt.toast(t,"error")}}}}},ct=d("data-v-97132012");r("data-v-97132012");const it={class:"row mt-3"},dt={class:"col-12"},ut={class:"bg-light rounded p-3"},pt={class:"row"},gt={class:" ml-3 mb-2 mr-auto"},mt={class:"m-0"},bt={key:0},vt=o("span",{class:"fas fa-edit"},null,-1),ft=o("span",{class:"fa fa-times"},null,-1),yt={class:"row align-items-center"},ht={class:"d-flex align-items-center"},wt={class:"ml-3"},Bt=o("p",{class:"m-0"}," Reported By: ",-1),_t={class:"m-0"},xt={class:"mr-auto"},Ct={class:"ml-3 text-center"},It=o("p",{class:"m-0"}," Last Updated: ",-1),kt={class:"m-0"},Et={class:"mr-4 text-center"},Nt={key:0},St=o("p",{class:"m-0"},null,-1),Ot=o("p",{class:"m-0"}," Status: ",-1),Tt=o("b",null,[o("p",{class:"m-0"}," 🟢 Open ")],-1),At={key:1},Dt=o("p",{class:"m-0"}," Status: ",-1),Pt=o("b",null,[o("p",{class:"m-0"}," 🔴 Closed ")],-1),Mt={class:"row"},jt={class:"mx-3 mt-3 text-break"},Ht={class:"m-0"};c();const Rt=ct(((t,e,r,c,d,u)=>{var p,g,m;const b=n("EditBugModal");return a(),s(l,null,[o("div",it,[o("div",dt,[o("div",ut,[o("div",pt,[o("div",gt,[o("h3",mt,i(r.bug.title),1)]),c.account.id==r.bug.creatorId?(a(),s("div",bt,[!1===r.bug.closed?(a(),s("button",{key:0,type:"button",class:"btn btn-sm btn-success","data-toggle":"modal","data-target":"#editBugModal"+r.bug.id,title:"Edit Bug"+r.bug.title},[vt],8,["data-target","title"])):f("",!0),!1===r.bug.closed?(a(),s("button",{key:1,type:"button",class:"btn btn-sm btn-danger mx-2",onClick:e[1]||(e[1]=y(((...t)=>c.closeBug&&c.closeBug(...t)),["stop"])),title:"Close Bug"+r.bug.title},[ft],8,["title"])):f("",!0)])):f("",!0)]),o("div",yt,[o("div",ht,[o("img",{class:"profile-pic ml-3",src:null==(p=r.bug.creator)?void 0:p.picture,alt:(null==(g=r.bug.creator)?void 0:g.name)+"Profile Picture"},null,8,["src","alt"]),o("div",wt,[Bt,o("p",_t,[o("b",null,i(null==(m=r.bug.creator)?void 0:m.name),1)])])]),o("div",xt,[o("div",Ct,[It,o("p",kt,[o("b",null,i(c.state.updatedAt),1)])])]),o("div",Et,[!1===r.bug.closed?(a(),s("div",Nt,[St,Ot,Tt])):(a(),s("div",At,[Dt,Pt]))])]),o("div",Mt,[o("div",jt,[o("p",Ht,i(r.bug.description),1)])])])])]),o(b,{bug:r.bug},null,8,["bug"])],64)}));rt.render=Rt,rt.__scopeId="data-v-97132012";var Ut=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:rt});const qt={props:{bugs:{type:Array,required:!0}},setup(){const a=t({filterAll:!0,filterClosed:!1,filterOpen:!1});return{state:a,open:e((()=>S.bugs.filter((t=>!1===t.closed)))),closed:e((()=>S.bugs.filter((t=>!0===t.closed)))),async filterBugs(t){"all"===t?(a.filterAll=!0,a.filterClosed=!1,a.filterOpen=!1):"open"===t?(a.filterAll=!1,a.filterClosed=!1,a.filterOpen=!0):"closed"===t&&(a.filterAll=!1,a.filterClosed=!0,a.filterOpen=!1)}}}},Lt=d("data-v-ef70a2f4");r("data-v-ef70a2f4");const zt={class:"row"},Vt={class:"col-12 mb-2"},Ft={class:"row bg-light rounded p-3 mx-1 d-flex flex-row align-items-center"},$t=w('<div class="col-md-3 text-center" data-v-ef70a2f4><h5 class="" data-v-ef70a2f4> Title: </h5></div><div class="col-md-3 text-center" data-v-ef70a2f4><h5 class="" data-v-ef70a2f4> Reported By: </h5></div><div class="col-md-3 text-center" data-v-ef70a2f4><h5 class="" data-v-ef70a2f4> Last Modified: </h5></div>',3),Kt={class:"col-md-3 text-center"},Yt=o("h5",{class:""}," Status: ",-1),Wt={key:0,class:"w-100"},Gt={key:1,class:"w-100"},Qt={key:2,class:"w-100"};c();const Zt=Lt(((t,e,r,c,i,d)=>{const u=n("Bug");return a(),s("div",zt,[o("div",Vt,[o("div",Ft,[$t,o("div",Kt,[Yt,o("button",{type:"button",class:"btn btn-sm btn-info text-shadow",onClick:e[1]||(e[1]=y((t=>c.filterBugs("all")),["stop"])),title:"Filter All Bugs"}," All "),o("button",{type:"button",class:"btn btn-sm btn-success mx-1 text-shadow",onClick:e[2]||(e[2]=y((t=>c.filterBugs("open")),["stop"])),title:"Filter Open Bugs"}," Open "),o("button",{type:"button",class:"btn btn-sm btn-danger text-shadow",onClick:e[3]||(e[3]=y((t=>c.filterBugs("closed")),["stop"])),title:"Filter Closed Bugs"}," Closed ")])])]),!0===c.state.filterClosed?(a(),s("div",Wt,[(a(!0),s(l,null,h(c.closed,(t=>(a(),s("div",{class:"col-12",key:t.id},[o(u,{bug:t},null,8,["bug"])])))),128))])):!0===c.state.filterOpen?(a(),s("div",Gt,[(a(!0),s(l,null,h(c.open,(t=>(a(),s("div",{class:"col-12",key:t.id},[o(u,{bug:t},null,8,["bug"])])))),128))])):!0===c.state.filterAll?(a(),s("div",Qt,[(a(!0),s(l,null,h(r.bugs,(t=>(a(),s("div",{class:"col-12",key:t.id},[o(u,{bug:t},null,8,["bug"])])))),128))])):f("",!0)])}));qt.render=Zt,qt.__scopeId="data-v-ef70a2f4";var Jt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:qt});const Xt={setup(){const e=t({newBug:{}});return{state:e,async createBug(){try{const t=await X.createBug(e.newBug);e.newBug={},B("#createBugModal").modal("hide"),nt.push({name:"BugDetailsPage",params:{bugId:t}}),tt.toast("Successfully Created","success")}catch(t){tt.toast(t,"error")}}}}},te=d("data-v-16248588");r("data-v-16248588");const ee={class:"modal fade",id:"createBugModal",tabindex:"-1",role:"dialog","aria-labelledby":"modelTitleId","aria-hidden":"true"},ae={class:"modal-dialog",role:"document"},se={class:"modal-content"},oe=o("div",{class:"modal-header"},[o("h5",{class:"modal-title"}," Report New Bug "),o("button",{type:"button",class:"close text-danger","data-dismiss":"modal","aria-label":"Close",title:"Close Create Bug Modal"},[o("span",{"aria-hidden":"true"},"×")])],-1),le={class:"modal-body"},ne={class:"form-group"},re=o("small",{id:"titleHelpId",class:"text-muted"},"Input Bug Title",-1),ce={class:"form-group"},ie=o("small",{id:"descriptionHelpId",class:"text-muted"},"Input Bug Description",-1),de=o("button",{type:"submit",class:"btn btn-primary",title:"Submit Create Bug Form"}," Submit ",-1);c();const ue=te(((t,e,l,n,r,c)=>(a(),s("div",ee,[o("div",ae,[o("div",se,[oe,o("div",le,[o("form",{onSubmit:e[3]||(e[3]=y(((...t)=>n.createBug&&n.createBug(...t)),["prevent"]))},[o("div",ne,[_(o("input",{type:"text",name:"title","onUpdate:modelValue":e[1]||(e[1]=t=>n.state.newBug.title=t),class:"form-control",placeholder:"Title...","aria-describedby":"titleHelpId",required:""},null,512),[[x,n.state.newBug.title]]),re]),o("div",ce,[_(o("input",{type:"text",name:"description","onUpdate:modelValue":e[2]||(e[2]=t=>n.state.newBug.description=t),class:"form-control",placeholder:"Description...","aria-describedby":"descriptionHelpId",required:""},null,512),[[x,n.state.newBug.description]]),ie]),de],32)])])])]))));Xt.render=ue,Xt.__scopeId="data-v-16248588";var pe=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Xt});const ge=new class{async createNote(t){const e=await J.post("api/notes",t);X.getNotesByBugId(e.data.bugId)}async deleteNote(t,e){await J.delete("api/notes/"+t),X.getNotesByBugId(e)}};const me={setup(){const e=C(),a=t({newNote:{bugId:e.params.bugId}});return{state:a,async createNote(){try{await ge.createNote(a.newNote),a.newNote={bugId:e.params.bugId},B("#createNoteModal").modal("hide"),tt.toast("Successfully Created","success")}catch(t){tt.toast(t,"error")}}}}},be=d("data-v-55430c0e");r("data-v-55430c0e");const ve={class:"modal fade",id:"createNoteModal",tabindex:"-1",role:"dialog","aria-labelledby":"modelTitleId","aria-hidden":"true"},fe={class:"modal-dialog",role:"document"},ye={class:"modal-content"},he=o("div",{class:"modal-header"},[o("h5",{class:"modal-title"}," New Note "),o("button",{type:"button",class:"close text-danger","data-dismiss":"modal","aria-label":"Close",title:"Close Create Note Modal"},[o("span",{"aria-hidden":"true"},"×")])],-1),we={class:"modal-body"},Be={class:"form-group"},_e=o("small",{id:"titleHelpId",class:"text-muted"},"Input Note",-1),xe=o("button",{type:"submit",class:"btn btn-primary",title:"Submit Create Note Form"}," Submit ",-1);c();const Ce=be(((t,e,l,n,r,c)=>(a(),s("div",ve,[o("div",fe,[o("div",ye,[he,o("div",we,[o("form",{onSubmit:e[2]||(e[2]=y(((...t)=>n.createNote&&n.createNote(...t)),["prevent"]))},[o("div",Be,[_(o("input",{type:"text",name:"body","onUpdate:modelValue":e[1]||(e[1]=t=>n.state.newNote.body=t),class:"form-control",placeholder:"Note...","aria-describedby":"titleHelpId"},null,512),[[x,n.state.newNote.body]]),_e]),xe],32)])])])]))));me.render=Ce,me.__scopeId="data-v-55430c0e";var Ie=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:me});const ke={props:{bug:{type:Object,required:!0}},setup(e){const a=t({editBug:{bugId:e.bug.id}});return{state:a,async editBug(){try{await X.editBug(e.bug.id,a.editBug),a.editBug={bugId:e.bug.id},B("#editBugModal"+e.bug.id).modal("hide"),nt.push({name:"BugDetailsPage",params:{bugId:e.bug.id}}),tt.toast("Successfully Created","success")}catch(t){tt.toast(t,"error")}}}}},Ee=d("data-v-06fb1e3c");r("data-v-06fb1e3c");const Ne={class:"modal-dialog",role:"document"},Se={class:"modal-content"},Oe={class:"modal-header"},Te=o("h5",{class:"modal-title"}," Edit Bug ",-1),Ae=o("span",{"aria-hidden":"true"},"×",-1),De={class:"modal-body"},Pe={class:"form-group"},Me=o("small",{id:"titleEditHelpId",class:"text-muted"},"Edit Bug Title",-1),je={class:"form-group"},He=o("small",{id:"descriptionEditHelpId",class:"text-muted"},"Edit Bug Description",-1);c();const Re=Ee(((t,e,l,n,r,c)=>(a(),s("div",{class:"modal fade",id:"editBugModal"+l.bug.id,tabindex:"-1",role:"dialog","aria-labelledby":"modelTitleId","aria-hidden":"true"},[o("div",Ne,[o("div",Se,[o("div",Oe,[Te,o("button",{type:"button",class:"close text-danger","data-dismiss":"modal","aria-label":"Close",title:"Close Edit"+l.bug.title+"Modal"},[Ae],8,["title"])]),o("div",De,[o("form",{onSubmit:e[3]||(e[3]=y(((...t)=>n.editBug&&n.editBug(...t)),["prevent"]))},[o("div",Pe,[_(o("input",{type:"text",name:"title","onUpdate:modelValue":e[1]||(e[1]=t=>n.state.editBug.title=t),class:"form-control",placeholder:"Title...","aria-describedby":"titleEditHelpId"},null,512),[[x,n.state.editBug.title]]),Me]),o("div",je,[_(o("input",{type:"text",name:"description","onUpdate:modelValue":e[2]||(e[2]=t=>n.state.editBug.description=t),class:"form-control",placeholder:"Description...","aria-describedby":"descriptionEditHelpId"},null,512),[[x,n.state.editBug.description]]),He]),o("button",{type:"submit",class:"btn btn-primary",title:"Submit Edit "+l.bug.title+"Modal"}," Submit ",8,["title"])],32)])])])],8,["id"]))));ke.render=Re,ke.__scopeId="data-v-06fb1e3c";var Ue=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ke});function qe(t,e){if(Q)console[t](`[${t}] :: ${(new Date).toLocaleTimeString()} :: `,...e);else{switch(t){case"log":case"assert":return}console[t](`[${t}] :: ${(new Date).toLocaleTimeString()} :: `,...e)}}const Le={log(){qe("log",arguments)},error(){qe("error",arguments)},warn(){qe("warn",arguments)},assert(){qe("assert",arguments)},trace(){qe("trace",arguments)}};const ze=new class{async getAccount(){try{const t=await J.get("/account");S.account=t.data}catch(t){Le.error("HAVE YOU STARTED YOUR SERVER YET???",t)}}};let Ve=!1,Fe=[];const $e="connected",Ke="authenticate",Ye="authenticated",We="error";const Ge=new class extends class{constructor(t=Z){this.socket=I(t||Z),this.on($e,this.onConnected).on(Ye,this.onAuthenticated).on(We,this.onError)}on(t,e){return this.socket.on(t,e.bind(this)),this}onConnected(t){Le.log("[SOCKET_CONNECTION]",t),Ve=!0}onAuthenticated(t){Le.log("[SOCKET_AUTHENTICATED]",t);const e=[...Fe];Fe=[],e.forEach((t=>{this.emit(t.action,t.payload)}))}authenticate(t){this.socket.emit(Ke,t)}onError(t){Le.error("[SOCKET_ERROR]",t)}emit(t,e){if(!Ve)return Le.log("[ENQUEING_ACTION]",{action:t,payload:e}),Fe.push({action:t,payload:e});this.socket.emit(t,e)}}{constructor(){super(),this.on("error",this.onError)}onError(t){Le.error("[SOCKET_ERROR]",t),tt.toast(t.message,"error")}},Qe=k({domain:"holli-codeworks.us.auth0.com",clientId:"In7KcvZP1B7H4OIGuh9FvOsaFIki93Nl",audience:"http://buglog.com",useRefreshTokens:!0,onRedirectCallback:t=>{nt.push(t&&t.targetUrl?t.targetUrl:window.location.pathname)}});async function Ze(t){if(!Qe.isAuthenticated)return t;const e=1e3*Qe.identity.exp,a=e<Date.now(),s=e<Date.now()+432e5;return a?await Qe.loginWithPopup():s&&(await Qe.getTokenSilently(),J.defaults.headers.authorization=Qe.bearer,Ge.authenticate(Qe.bearer)),t}Qe.on(Qe.AUTH_EVENTS.AUTHENTICATED,(async function(){J.defaults.headers.authorization=Qe.bearer,J.interceptors.request.use(Ze),S.user=Qe.user,await ze.getAccount(),Ge.authenticate(Qe.bearer)}));const Je={setup:()=>({state:t({dropOpen:!1}),user:e((()=>S.user)),async login(){Qe.loginWithPopup()},async logout(){Qe.logout({returnTo:window.location.origin})}})},Xe=d("data-v-4efce76f");r("data-v-4efce76f");const ta={class:"col-12 navbar navbar-expand-lg navbar-dark bg-dark"},ea=o("a",{class:"navbar-brand",href:"#"},[o("h3",null,[E("BugL"),o("span",{class:"fas fa-xs fa-bug"}),E("g")])],-1),aa=o("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarColor02","aria-controls":"navbarColor02","aria-expanded":"false","aria-label":"Toggle navigation"},[o("span",{class:"navbar-toggler-icon"})],-1),sa={class:"collapse navbar-collapse",id:"navbarColor02"},oa={class:"navbar-nav mr-auto"},la={class:"nav-item"},na=E(" Home "),ra={class:"navbar-text"},ca={key:1,class:"dropdown"},ia={class:"mx-3"},da=o("div",{class:"list-group-item list-group-item-action hoverable"}," Account ",-1);c();const ua=Xe(((t,e,l,r,c,d)=>{const u=n("router-link");return a(),s("nav",ta,[ea,aa,o("div",sa,[o("ul",oa,[o("li",la,[o(u,{to:{name:"Home"},class:"nav-link"},{default:Xe((()=>[na])),_:1})])]),o("span",ra,[r.user.isAuthenticated?(a(),s("div",ca,[o("div",{class:"dropdown-toggle",onClick:e[2]||(e[2]=t=>r.state.dropOpen=!r.state.dropOpen)},[o("img",{src:r.user.picture,alt:"user photo",height:"40",class:"rounded"},null,8,["src"]),o("span",ia,i(r.user.name),1)]),o("div",{class:["dropdown-menu p-0 list-group w-100",{show:r.state.dropOpen}],onClick:e[4]||(e[4]=t=>r.state.dropOpen=!1)},[o(u,{to:{name:"Account"}},{default:Xe((()=>[da])),_:1}),o("div",{class:"list-group-item list-group-item-action hoverable",onClick:e[3]||(e[3]=(...t)=>r.logout&&r.logout(...t))}," logout ")],2)])):(a(),s("button",{key:0,class:"btn btn-outline-primary text-uppercase",onClick:e[1]||(e[1]=(...t)=>r.login&&r.login(...t))}," Login "))])])])}));Je.render=ua,Je.__scopeId="data-v-4efce76f";var pa=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Je});const ga={props:{note:{type:Object,required:!0},bug:{type:Object,required:!0}},setup(t){const a=e((()=>S.account)),s=C();return{account:a,async deleteNote(){if(await tt.confirm())try{await ge.deleteNote(t.note.id,s.params.bugId),tt.toast("Successfully Deleted!","success")}catch(e){tt.toast(e,"error")}}}}},ma=d("data-v-4c93ae80");r("data-v-4c93ae80");const ba={class:"row my-2"},va={class:"col-12"},fa={class:"bg-primary text-light rounded p-3"},ya={class:"d-flex align-items-center"},ha={class:"ml-3 mr-auto"},wa={class:"m-0"},Ba={key:0},_a=o("span",{class:"fa fa-times"},null,-1),xa={class:"mt-2"},Ca={class:"m-0 text-break"};c();const Ia=ma(((t,e,l,n,r,c)=>{var d,u,p;return a(),s("div",ba,[o("div",va,[o("div",fa,[o("div",ya,[o("img",{class:"profile-pic",src:null==(d=l.note.creator)?void 0:d.picture,alt:(null==(u=l.note.creator)?void 0:u.name)+"Profile Picture"},null,8,["src","alt"]),o("div",ha,[o("p",wa,[o("b",null,i(null==(p=l.note.creator)?void 0:p.name),1)])]),n.account.id===l.note.creatorId?(a(),s("div",Ba,[!1===l.bug.closed?(a(),s("button",{key:0,type:"button",class:"btn btn-sm btn-danger text-shadow ml-2",onClick:e[1]||(e[1]=y(((...t)=>n.deleteNote&&n.deleteNote(...t)),["stop"])),title:"Delete"+l.note.body},[_a],8,["title"])):f("",!0)])):f("",!0)]),o("div",xa,[o("p",Ca,i(l.note.body),1)])])])])}));ga.render=Ia,ga.__scopeId="data-v-4c93ae80";var ka=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ga});const Ea={props:{notes:{type:Array,required:!0},bug:{type:Object,required:!0}},setup:()=>({account:e((()=>S.account))})},Na=d("data-v-619f62b8");r("data-v-619f62b8");const Sa={class:"row mt-3"},Oa={class:"col-12 mb-2"},Ta={class:"bg-light rounded p-3 d-flex flex-row align-items-center"},Aa=o("h5",{class:"m-0 mr-auto"}," Notes: ",-1),Da={key:0},Pa={key:0,type:"button",class:"btn btn-success text-shadow","data-toggle":"modal","data-target":"#createNoteModal",title:"Create Note Button"};c();const Ma=Na(((t,e,r,c,i,d)=>{const u=n("Note"),p=n("CreateNoteModal");return a(),s(l,null,[o("div",Sa,[o("div",Oa,[o("div",Ta,[Aa,c.account.id==r.bug.creatorId?(a(),s("div",Da,[!1===r.bug.closed?(a(),s("button",Pa," New Note ")):f("",!0)])):f("",!0)])]),(a(!0),s(l,null,h(r.notes,(t=>(a(),s("div",{class:"col-12",key:t.id},[o(u,{note:t,bug:r.bug},null,8,["note","bug"])])))),128))]),o(p)],64)}));Ea.render=Ma,Ea.__scopeId="data-v-619f62b8";var ja=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ea});const Ha=N(O);!function(t){const e={"./components/Bug.vue":G,"./components/BugDetails.vue":Ut,"./components/BugThread.vue":Jt,"./components/CreateBugModal.vue":pe,"./components/CreateNoteModal.vue":Ie,"./components/EditBugModal.vue":Ue,"./components/Navbar.vue":pa,"./components/Note.vue":ka,"./components/NoteThread.vue":ja};Object.entries(e).forEach((([e,a])=>{const s=a.name||e.substr(e.lastIndexOf("/")+1).replace(/\.\w+$/,"");t.component(s,a.default)}))}(Ha),Ha.use(nt).mount("#app");export{S as A,tt as P,X as b};