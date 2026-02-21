import"./modulepreload-polyfill-B5Qt9EMX.js";import{initializeApp as _}from"https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";import{getDatabase as J,onValue as k,ref as h,set as Z,get as I,remove as A}from"https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";import{getAuth as X,onAuthStateChanged as ee,signInWithEmailAndPassword as te,signOut as ne}from"https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";const oe={apiKey:"AIzaSyCjLzq8QNQqhGOpTJy3tzwuQrovMm6Vdi4",authDomain:"unlock-the-lab-workshop.firebaseapp.com",databaseURL:"https://unlock-the-lab-workshop-default-rtdb.europe-west1.firebasedatabase.app",projectId:"unlock-the-lab-workshop",storageBucket:"unlock-the-lab-workshop.firebasestorage.app",messagingSenderId:"604889899913",appId:"1:604889899913:web:d46afe88111e8bcb7d3758",measurementId:"G-VEVYY65K1M"},q=_(oe),f=J(q),M=X(q);let F={};fetch("papers.json").then(e=>e.json()).then(e=>{e.forEach(t=>{F[t.id]=t})}).catch(e=>console.error("Error loading papers:",e));const p=["STUDY-1","STUDY-2","STUDY-3","STUDY-4","STUDY-5","STUDY-6","STUDY-7","STUDY-8","STUDY-9","STUDY-10","STUDY-11","STUDY-12","STUDY-13","STUDY-14","STUDY-15","STUDY-16","STUDY-17","STUDY-18","STUDY-19","STUDY-20","STUDY-21","STUDY-22","STUDY-23","STUDY-24","STUDY-25","STUDY-26","STUDY-27","STUDY-28","STUDY-29","STUDY-30","STUDY-31","STUDY-32","STUDY-33","STUDY-34","STUDY-35","STUDY-36","STUDY-37","STUDY-38","STUDY-39","STUDY-40","STUDY-41","STUDY-42","STUDY-43","STUDY-44","STUDY-45","STUDY-46","STUDY-47","STUDY-48"],w={"STUDY-1":"low","STUDY-2":"high","STUDY-3":"medium","STUDY-4":"low","STUDY-5":"medium","STUDY-6":"medium","STUDY-7":"low","STUDY-8":"high","STUDY-9":"medium","STUDY-10":"high","STUDY-11":"low","STUDY-12":"medium","STUDY-13":"medium","STUDY-14":"medium","STUDY-15":"medium","STUDY-16":"medium","STUDY-17":"medium","STUDY-18":"medium","STUDY-19":"high","STUDY-20":"low","STUDY-21":"medium","STUDY-22":"high","STUDY-23":"medium","STUDY-24":"high","STUDY-25":"medium","STUDY-26":"medium","STUDY-27":"medium","STUDY-28":"low","STUDY-29":"low","STUDY-30":"medium","STUDY-31":"high","STUDY-32":"low","STUDY-33":"high","STUDY-34":"low","STUDY-35":"medium","STUDY-36":"low","STUDY-37":"high","STUDY-38":"low","STUDY-39":"high","STUDY-40":"low","STUDY-41":"high","STUDY-42":"low","STUDY-43":"high","STUDY-44":"medium","STUDY-45":"medium","STUDY-46":"low","STUDY-47":"high","STUDY-48":"medium"},se={"STUDY-1":1,"STUDY-4":1,"STUDY-29":1,"STUDY-32":1,"STUDY-34":1,"STUDY-40":1,"STUDY-46":1,"STUDY-7":2,"STUDY-11":2,"STUDY-20":2,"STUDY-28":2,"STUDY-36":2,"STUDY-38":2,"STUDY-42":2,"STUDY-9":3,"STUDY-12":3,"STUDY-15":3,"STUDY-17":3,"STUDY-23":3,"STUDY-25":3,"STUDY-44":3,"STUDY-6":4,"STUDY-14":4,"STUDY-18":4,"STUDY-26":4,"STUDY-27":4,"STUDY-30":4,"STUDY-35":4,"STUDY-48":4,"STUDY-3":5,"STUDY-5":5,"STUDY-13":5,"STUDY-16":5,"STUDY-21":5,"STUDY-45":5,"STUDY-2":6,"STUDY-10":6,"STUDY-22":6,"STUDY-31":6,"STUDY-33":6,"STUDY-37":6,"STUDY-41":6,"STUDY-8":7,"STUDY-19":7,"STUDY-24":7,"STUDY-39":7,"STUDY-43":7,"STUDY-47":7},ae=100,re=localStorage.getItem("sessionId");re&&(document.getElementById("results-link-display").style.display="block",document.getElementById("results-manual-entry").style.display="none");window.goToMyResults=function(){const e=localStorage.getItem("sessionId");e&&(window.location.href=`../?session=${e}`)};window.loadFromLink=function(){const e=document.getElementById("sessionLinkInput").value.trim(),t=document.getElementById("link-error");if(!e){t.textContent="⚠️ Please enter a username.",t.style.display="block";return}let n=null;if(e.startsWith("session_")||e.includes("?session="))try{n=new URL(e).searchParams.get("session")}catch{if(e.includes("session=")){const s=e.match(/session=([^&\s]+)/);s&&(n=s[1])}else e.startsWith("session_")&&(n=e)}if(!n&&T){const o=e.toLowerCase(),s=Object.entries(T);for(const[r,a]of s)if(a.userName&&a.userName.toLowerCase()===o){n=r;break}if(!n){for(const[r,a]of s)if(a.userName&&a.userName.toLowerCase().includes(o)){n=r;break}}}n?(t.style.display="none",window.location.href=`../?session=${encodeURIComponent(n)}`):(t.textContent=`⚠️ Username "${e}" not found. Make sure you've completed the workshop and entered your username correctly.`,t.style.display="block")};var j;(j=document.getElementById("sessionLinkInput"))==null||j.addEventListener("keypress",function(e){e.key==="Enter"&&window.loadFromLink()});let b;const ie=document.getElementById("ratingsChart").getContext("2d");b=new Chart(ie,{type:"bar",data:{labels:p,datasets:[{label:"Average Rating",data:[],backgroundColor:function(e){const t=e.dataIndex,n=w[p[t]];return n==="high"?"rgba(16, 185, 129, 0.7)":n==="medium"?"rgba(245, 158, 11, 0.7)":"rgba(239, 68, 68, 0.7)"},borderColor:function(e){const t=e.dataIndex,n=w[p[t]];return n==="high"?"rgba(16, 185, 129, 1)":n==="medium"?"rgba(245, 158, 11, 1)":"rgba(239, 68, 68, 1)"},borderWidth:2,borderRadius:6,errorBars:{}}]},options:{responsive:!0,maintainAspectRatio:!1,onClick:(e,t,n)=>{if(t.length>0){const a=t[0].index,c=p[a];showStudyDetails(c);return}const o=Chart.helpers.getRelativePosition(e,n),s=n.scales.x,r=n.scales.y;if(o.y>r.bottom&&o.y<n.height){const a=s.getValueForPixel(o.x);a>=0&&a<p.length&&showStudyDetails(p[Math.round(a)])}},scales:{y:{beginAtZero:!0,max:7,title:{display:!0,text:"Rating (1-7 scale)",font:{size:14,weight:"bold"},color:"#374151"}},x:{ticks:{callback:function(e,t){return p[t]},font:{size:10,weight:"bold"},color:"#667eea"}}},plugins:{tooltip:{callbacks:{label:function(e){return`Rating: ${e.parsed.y.toFixed(2)} (click for details)`}}},legend:{display:!1}}},plugins:[{id:"errorBars",afterDatasetsDraw(e){const t=e.ctx,n=e.getDatasetMeta(0),o=e.data.datasets[0].errorBars;n.data.forEach((s,r)=>{if(!o[r])return;const{lower:a,upper:c}=o[r],l=s.x,m=e.scales.y.getPixelForValue(a),g=e.scales.y.getPixelForValue(c);t.save(),t.strokeStyle="rgba(0, 0, 0, 0.8)",t.lineWidth=2,t.beginPath(),t.moveTo(l,m),t.lineTo(l,g),t.stroke(),t.beginPath(),t.moveTo(l-5,m),t.lineTo(l+5,m),t.stroke(),t.beginPath(),t.moveTo(l-5,g),t.lineTo(l+5,g),t.stroke(),t.restore()})}}]});function le(e){if(!e||e.length===0)return{mean:0,stdDev:0,min:0,max:0,agreement:0,ci95Lower:0,ci95Upper:0};const t=e.length,n=e.reduce((d,i)=>d+i,0)/t,o=e.reduce((d,i)=>d+Math.pow(i-n,2),0)/t,s=Math.sqrt(o),r=Math.min(...e),a=Math.max(...e),c=s/Math.sqrt(t),l=1.96,m=Math.max(1,n-l*c),g=Math.min(7,n+l*c),u=n===0?0:Math.min(100,100*(1-s/n));return{mean:n.toFixed(2),stdDev:s.toFixed(2),min:r.toFixed(1),max:a.toFixed(1),agreement:u.toFixed(0),ci95Lower:m.toFixed(2),ci95Upper:g.toFixed(2)}}function U(e,t,n,o=!0,s=!1){const r=(e-t)/(n-t),a=Math.max(0,Math.min(1,r));if(o)if(s){const c=Math.round(254-34*a),l=Math.round(226+26*a),m=Math.round(226+5*a);return`rgb(${c}, ${l}, ${m})`}else{const c=Math.round(239-223*a),l=Math.round(68+117*a),m=Math.round(68+61*a);return`rgb(${c}, ${l}, ${m})`}else if(s){const c=Math.round(220+34*a),l=Math.round(252-26*a),m=Math.round(231-5*a);return`rgb(${c}, ${l}, ${m})`}else{const c=Math.round(16+223*a),l=Math.round(185-117*a),m=Math.round(129-61*a);return`rgb(${c}, ${l}, ${m})`}}function L(e,t,n){const o={};let s=0,r=[];const a=new Set;p.forEach(g=>{const u=e[g]||{},d=Object.values(u).filter(i=>i!=null).map(i=>i.rating||i);Object.keys(u).forEach(i=>{u[i]!==null&&u[i]!==void 0&&a.add(i)}),s+=d.length});const c=a.size>0;p.forEach(g=>{const u=e[g]||{},d=Object.values(u).filter(y=>y!=null).map(y=>y.rating||y);let i;if(c){const y=se[g]||4;i=[...d,...Array(ae).fill(y)]}else i=[];o[g]={...le(i),count:d.length,totalCount:i.length}}),ye(o),document.getElementById("uniqueParticipants").textContent=a.size,document.getElementById("totalRatings").textContent=s;const l=t?Object.keys(t).filter(g=>{const u=t[g].lastActive;return Date.now()-u<6e4}).length:0;document.getElementById("activeParticipants").textContent=l;const m=n?Object.keys(n).length:0;if(n){r=Object.values(n).map(d=>d.score||0);const g=r.length>0?r.reduce((d,i)=>d+i,0)/r.length:0,u=Math.round(g/2300*100);document.getElementById("avgScore").textContent=`${u}%`}if(me(l,m,e),ge(n),c){const g={};p.forEach((d,i)=>{g[i]={lower:parseFloat(o[d].ci95Lower),upper:parseFloat(o[d].ci95Upper)}}),b.data.datasets[0].data=p.map(d=>o[d].mean),b.data.datasets[0].errorBars=g,b.update();const u=document.getElementById("statsTableBody");u.innerHTML=p.map(d=>{const i=o[d],y=w[d],B=y==="high"?"quality-high":y==="medium"?"quality-medium":"quality-low",E=U(i.mean,1,7,!0,!0),V=U(i.stdDev,0,3,!1,!0),P=parseFloat(i.agreement),Q=U(P,0,100,!0,!0),G=U(i.count,0,Math.max(...p.map(K=>o[K].count)),!0,!0);return`
                        <tr data-study="${d}" data-quality="${y}" data-responses="${i.count}" 
                            data-mean="${i.mean}" data-stddev="${i.stdDev}" data-min="${i.min}" 
                            data-max="${i.max}" data-agreement="${P}">
                            <td><strong><a href="#" onclick="showStudyDetails('${d}'); return false;" style="color: #667eea; text-decoration: none; cursor: pointer;">${d}</a></strong></td>
                            <td>
                                <span class="quality-indicator ${B}"></span>
                                ${y.charAt(0).toUpperCase()+y.slice(1)}
                            </td>
                            <td class="color-scale" style="background: ${G}; color: #1f2937; font-weight: 600;">${i.count}</td>
                            <td class="color-scale" style="background: ${E}; color: #1f2937; font-weight: 600;">${i.mean}</td>
                            <td class="color-scale" style="background: ${V}; color: #1f2937; font-weight: 600;">${i.stdDev}</td>
                            <td>${i.min}</td>
                            <td>${i.max}</td>
                            <td class="color-scale" style="background: ${Q}; color: #1f2937; font-weight: 600;">${i.agreement}%</td>
                        </tr>
                    `}).join("")}else{b.data.datasets[0].data=[],b.data.datasets[0].errorBars={},b.update();const g=document.getElementById("statsTableBody");g.innerHTML='<tr><td colspan="8" style="text-align: center; color: #999; padding: 3rem;">📊 No participant data yet. Complete the workshop to see ratings appear here.</td></tr>'}}let Y={},D={},v={},R={};k(h(f,"ratings"),e=>{Y=e.val()||{},L(Y,D,v)});k(h(f,"active"),e=>{D=e.val()||{},L(Y,D,v)});k(h(f,"leaderboard"),e=>{v=e.val()||{},L(Y,D,v)});k(h(f,"rankings"),e=>{R=e.val()||{},de(R)});const O=[{key:"title",label:"📰 Title"},{key:"access",label:"📚 Access"},{key:"source",label:"🏛️ Source"},{key:"theory",label:"🔬 Theory"},{key:"methods",label:"📊 Methods & Data"},{key:"conclusion",label:"📝 Conclusion"}];function de(e){const t=document.getElementById("criterion-importance-container");if(!t)return;const n=Object.values(e||{});if(n.length===0){t.innerHTML='<p style="text-align: center; color: #999; padding: 2rem 0;">No data yet.</p>';return}const o={title:0,access:0,source:0,theory:0,methods:0,conclusion:0};n.forEach(a=>{O.forEach(c=>{o[c.key]+=a[c.key]||0})});const s=Object.values(o).reduce((a,c)=>a+c,0),r=n.length;t.innerHTML=`
                <p style="font-size: 0.85rem; color: #6b7280; margin-bottom: 1rem;">Based on ${r} participant${r!==1?"s":""}</p>
                ${O.map(a=>{const c=s>0?Math.round(o[a.key]/s*100):0,l=(o[a.key]/r).toFixed(1);return`
                        <div style="margin-bottom: 0.9rem;">
                            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.25rem;">
                                <span style="font-weight: 600; font-size: 0.9rem;">${a.label}</span>
                                <span style="font-weight: 700; color: #d97706; font-size: 0.9rem;">${c}% <span style="font-weight: 400; color: #9ca3af; font-size: 0.8rem;">(avg ${l}/20)</span></span>
                            </div>
                            <div style="background: #e5e7eb; border-radius: 4px; height: 14px; overflow: hidden;">
                                <div style="width: ${c}%; height: 100%; background: linear-gradient(90deg, #f59e0b, #d97706); border-radius: 4px;"></div>
                            </div>
                        </div>`}).join("")}
            `}let x,S=10,$=null;ee(M,e=>{$=e,e&&(document.getElementById("adminEmail").textContent=`✅ Signed in as ${e.email}`)});window.openAdminPanel=function(){document.getElementById("adminOverlay").classList.add("active"),$?(document.getElementById("passwordSection").style.display="none",document.getElementById("adminActions").style.display="block"):(document.getElementById("passwordSection").style.display="block",document.getElementById("adminActions").style.display="none",document.getElementById("adminEmail").value="",document.getElementById("adminPassword").value="",document.getElementById("adminEmail").focus(),ce())};window.closeAdminPanel=function(e){(!e||e.target.id==="adminOverlay"||e.target.classList.contains("btn-cancel"))&&(document.getElementById("adminOverlay").classList.remove("active"),clearInterval(x),S=10)};function ce(){S=10,z(),x=setInterval(()=>{S--,z(),S<=0&&(clearInterval(x),closeAdminPanel({target:{id:"adminOverlay"}}))},1e3)}function z(){const e=document.getElementById("adminTimer");e.textContent=`Time remaining: ${S}s`,S<=3?e.classList.add("warning"):e.classList.remove("warning")}window.handlePasswordKeyPress=function(e){e.key==="Enter"&&verifyPassword()};window.verifyPassword=function(){const e=document.getElementById("adminEmail").value.trim(),t=document.getElementById("adminPassword").value;if(!e||!t){alert("❌ Please enter both email and password");return}const n=document.getElementById("loginBtn");n.disabled=!0,n.textContent="Signing in...",te(M,e,t).then(o=>{clearInterval(x),$=o.user,document.getElementById("passwordSection").style.display="none",document.getElementById("adminActions").style.display="block",document.getElementById("adminTitle").textContent="✅ Admin Panel",n.disabled=!1,n.textContent="Sign In"}).catch(o=>{let s="Authentication failed";o.code==="auth/invalid-credential"||o.code==="auth/wrong-password"||o.code==="auth/user-not-found"?s="Invalid email or password":o.code==="auth/too-many-requests"&&(s="Too many failed attempts. Try again later"),alert("❌ "+s),document.getElementById("adminPassword").value="",n.disabled=!1,n.textContent="Sign In"})};window.adminSignOut=function(){ne(M).then(()=>{$=null,closeAdminPanel({target:{id:"adminOverlay"}})}).catch(e=>{alert("❌ Error signing out: "+e.message)})};window.endAllSessions=function(){const e=Object.keys(D).length;if(e===0){alert("ℹ️ No active sessions to end");return}if(confirm(`⚠️ This will end ${e} active session(s).

Are you sure you want to continue?`)){const t=document.getElementById("endSessionsBtn");t.disabled=!0,t.textContent="Ending sessions...",Z(h(f,"active"),null).then(()=>{alert(`✅ Successfully ended ${e} session(s)`),t.disabled=!1,t.textContent="⏹️ End all active sessions",closeAdminPanel({target:{id:"adminOverlay"}})}).catch(n=>{alert("❌ Error ending sessions: "+n.message),t.disabled=!1,t.textContent="⏹️ End all active sessions"})}};window.deleteAllRatingsData=async function(){const e=h(f,"ratings"),t=h(f,"leaderboard"),n=h(f,"rankings");try{const[o,s,r]=await Promise.all([I(e),I(t),I(n)]),a=o.exists(),c=s.exists(),l=r.exists();if(!a&&!c&&!l){alert("ℹ️ No data to delete.");return}let m=0,g=0,u=0;if(a){const B=o.val();Object.values(B).forEach(E=>{m+=Object.keys(E).length})}c&&(g=Object.keys(s.val()).length),l&&(u=Object.keys(r.val()).length);const d=`⚠️ WARNING: You are about to permanently delete:
• ${m} rating(s)
• ${g} participant(s) from leaderboard
• ${u} criterion ranking(s)

This action CANNOT be undone!

Type "DELETE" to confirm:`;if(prompt(d)!=="DELETE"){alert("❌ Deletion cancelled.");return}const y=document.getElementById("deleteDataBtn");y.disabled=!0,y.textContent="Deleting data...",await Promise.all([a?A(e):Promise.resolve(),c?A(t):Promise.resolve(),l?A(n):Promise.resolve()]),alert("✅ All data has been permanently deleted."),window.location.reload()}catch(o){alert("❌ Error deleting data: "+o.message);const s=document.getElementById("deleteDataBtn");s&&(s.disabled=!1,s.textContent="🗑️ Delete all ratings data")}};let C={column:-1,ascending:!0};window.sortTable=function(e,t){const n=document.getElementById("statsTable"),o=n.querySelector("tbody"),s=Array.from(o.querySelectorAll("tr")),r=C.column===e?!C.ascending:!0;C={column:e,ascending:r},n.querySelectorAll("th").forEach((m,g)=>{m.classList.remove("sort-asc","sort-desc"),g===e&&m.classList.add(r?"sort-asc":"sort-desc")});const c=["study","quality","responses","mean","stddev","min","max","agreement"][e],l={low:1,medium:2,high:3};s.sort((m,g)=>{let u=m.dataset[c],d=g.dataset[c];return e===1?(u=l[u]||0,d=l[d]||0):t==="number"?(u=parseFloat(u),d=parseFloat(d)):(u=u.toLowerCase(),d=d.toLowerCase()),u<d?r?-1:1:u>d?r?1:-1:0}),s.forEach(m=>o.appendChild(m))};function me(e,t,n){const o=Math.min(100,e/100*100);document.getElementById("connectionUsage").textContent=`${e}/100`,document.getElementById("connectionBar").style.width=`${o}%`;const s=document.getElementById("connectionBar"),r=document.getElementById("connectionUsage");o>=90?(s.style.background="#ef4444",r.style.color="#ef4444"):o>=70?(s.style.background="#f59e0b",r.style.color="#f59e0b"):(s.style.background="#10b981",r.style.color="#10b981");const l=(((n?Object.keys(n).reduce((u,d)=>u+Object.keys(n[d]||{}).length,0):0)*200+e*100+t*150)/(1024*1024)).toFixed(2),m=Math.min(100,l/1024*100);document.getElementById("storageUsage").textContent=`~${l} MB`,document.getElementById("storageBar").style.width=`${m}%`;const g=document.getElementById("storageBar");m>=90?g.style.background="#ef4444":m>=70?g.style.background="#f59e0b":g.style.background="#10b981",document.getElementById("sessionCount").textContent=t}let N="allTime",T={};function ge(e){T=e||{},W()}function ue(e){N=e;const t=document.getElementById("tab24h"),n=document.getElementById("tabAllTime");e==="24h"?(t.style.color="#059669",t.style.fontWeight="bold",t.style.borderBottom="3px solid #059669",n.style.color="#6b7280",n.style.fontWeight="normal",n.style.borderBottom="3px solid transparent"):(n.style.color="#059669",n.style.fontWeight="bold",n.style.borderBottom="3px solid #059669",t.style.color="#6b7280",t.style.fontWeight="normal",t.style.borderBottom="3px solid transparent"),W()}window.switchLeaderboardTab=ue;function W(){const e=document.getElementById("leaderboardGrid");if(!T||Object.keys(T).length===0){e.innerHTML='<div style="text-align: center; color: #999; grid-column: 1 / -1;">No completed sessions yet</div>';return}let t=Object.entries(T).map(([n,o])=>({sessionId:n,userName:o.userName||"Anonymous",score:o.score||0,papersRated:o.papersRated||0,timestamp:o.timestamp||0}));if(N==="24h"){const n=Date.now()-864e5;t=t.filter(o=>o.timestamp>=n)}if(t=t.sort((n,o)=>o.score-n.score).slice(0,200),t.length===0){e.innerHTML='<div style="text-align: center; color: #999; grid-column: 1 / -1;">No completed sessions in the past 24 hours</div>';return}e.innerHTML=t.map((n,o)=>{const s=o+1,r=Math.round(n.score/2300*100),a=s===1?" 🥇":s===2?" 🥈":s===3?" 🥉":"",c=`#${s}`;let l="#f9fafb",m="#e5e7eb";s===1?(l="#fef3c7",m="#fbbf24"):s===2?(l="#e0e7ff",m="#818cf8"):s===3&&(l="#fce7f3",m="#f472b6");const g=s<=3?"bold":"500",u=r>=80?"#10b981":r>=60?"#3b82f6":r>=40?"#f59e0b":"#ef4444";return`
                    <div style="
                        background: ${l};
                        border: 1px solid ${m};
                        border-radius: 6px;
                        padding: 10px;
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        gap: 8px;
                        transition: transform 0.2s, box-shadow 0.2s;
                    " onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 4px 12px rgba(0,0,0,0.1)';" onmouseout="this.style.transform=''; this.style.boxShadow='';">
                        <div style="font-size: 0.8rem; font-weight: bold; color: #6b7280; flex-shrink: 0;">${c}</div>
                        <div style="font-size: 0.85rem; color: #1f2937; font-weight: ${g}; flex-grow: 1; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${n.userName}${a}</div>
                        <div style="font-size: 0.9rem; font-weight: bold; color: ${u}; flex-shrink: 0;">${r}%</div>
                    </div>
                `}).join("")}let H={};window.showStudyDetails=function(e){const t=document.getElementById("studyModal"),n=w[e],o=H[e],s=F[e];if(!o){alert("No data available for this study yet.");return}document.getElementById("studyTitle").textContent=e,document.getElementById("studyQuality").innerHTML=`
                <span style="display: inline-block; width: 12px; height: 12px; border-radius: 50%; background: ${n==="high"?"#10b981":n==="medium"?"#f59e0b":"#ef4444"}; margin-right: 8px;"></span>
                <strong>Quality Level:</strong> ${n.charAt(0).toUpperCase()+n.slice(1)}
            `;let r="";s?r=`
                    <div style="background: #f9fafb; padding: 1.5rem; border-radius: 8px; margin-top: 1rem;">
                        <h3 style="margin-top: 0; color: #20B2AA;">Rating Statistics</h3>
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr style="border-bottom: 1px solid #e5e7eb;">
                                <td style="padding: 0.75rem; font-weight: 600;">Participants:</td>
                                <td style="padding: 0.75rem;">${o.count}</td>
                            </tr>
                            <tr style="border-bottom: 1px solid #e5e7eb;">
                                <td style="padding: 0.75rem; font-weight: 600;">Mean Rating:</td>
                                <td style="padding: 0.75rem;">${o.mean} / 7</td>
                            </tr>
                            <tr style="border-bottom: 1px solid #e5e7eb;">
                                <td style="padding: 0.75rem; font-weight: 600;">95% CI:</td>
                                <td style="padding: 0.75rem;">[${o.ci95Lower}, ${o.ci95Upper}]</td>
                            </tr>
                            <tr style="border-bottom: 1px solid #e5e7eb;">
                                <td style="padding: 0.75rem; font-weight: 600;">Std Deviation:</td>
                                <td style="padding: 0.75rem;">${o.stdDev}</td>
                            </tr>
                            <tr style="border-bottom: 1px solid #e5e7eb;">
                                <td style="padding: 0.75rem; font-weight: 600;">Range:</td>
                                <td style="padding: 0.75rem;">${o.min} - ${o.max}</td>
                            </tr>
                            <tr>
                                <td style="padding: 0.75rem; font-weight: 600;">Agreement:</td>
                                <td style="padding: 0.75rem;">${o.agreement}%</td>
                            </tr>
                        </table>
                        <p style="font-size: 0.85rem; color: #6b7280; margin-top: 1rem; margin-bottom: 0;">
                            <strong>What this means:</strong> ${parseInt(o.agreement)>70?"High agreement among participants - ratings are consistent.":parseInt(o.agreement)>40?"Moderate agreement - some variation in ratings.":"Low agreement - participants have quite different opinions about this study."}
                        </p>
                    </div>
                    
                    <hr style="margin: 2rem 0; border: none; border-top: 2px solid #e5e7eb;">
                    
                    <div style="margin-top: 1.5rem;">
                        <h3 style="margin-top: 0; color: #20B2AA;">Study Details</h3>
                        <div style="background: #ffffff; padding: 1rem; border-left: 4px solid #20B2AA; margin-bottom: 1rem;">
                            <h4 style="margin: 0 0 0.5rem 0; color: #374151; font-size: 1rem;">${s.title}</h4>
                        </div>
                        
                        <div style="margin-bottom: 1.25rem;">
                            <h4 style="color: #20B2AA; font-size: 0.9rem; margin-bottom: 0.5rem;">📚 Access</h4>
                            <p style="margin: 0; font-size: 0.85rem; line-height: 1.6;">${s.access}</p>
                        </div>
                        
                        <div style="margin-bottom: 1.25rem;">
                            <h4 style="color: #20B2AA; font-size: 0.9rem; margin-bottom: 0.5rem;">🔍 Overview</h4>
                            <p style="margin: 0; font-size: 0.85rem; line-height: 1.6;">${s.overview}</p>
                        </div>
                        
                        <div style="margin-bottom: 1.25rem;">
                            <h4 style="color: #20B2AA; font-size: 0.9rem; margin-bottom: 0.5rem;">🧪 Methods</h4>
                            <p style="margin: 0; font-size: 0.85rem; line-height: 1.6;">${s.methods}</p>
                        </div>
                        
                        <div style="margin-bottom: 1.25rem;">
                            <h4 style="color: #20B2AA; font-size: 0.9rem; margin-bottom: 0.5rem;">💡 Conclusion</h4>
                            <p style="margin: 0; font-size: 0.85rem; line-height: 1.6;">${s.conclusion}</p>
                        </div>
                        
                        <div style="margin-bottom: 0;">
                            <h4 style="color: #20B2AA; font-size: 0.9rem; margin-bottom: 0.5rem;">📰 Source</h4>
                            <p style="margin: 0; font-size: 0.85rem; line-height: 1.6;">${s.source}</p>
                        </div>
                    </div>
                `:r=`
                    <div style="background: #f9fafb; padding: 1.5rem; border-radius: 8px; margin-top: 1rem;">
                        <h3 style="margin-top: 0; color: #20B2AA;">Rating Statistics</h3>
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr style="border-bottom: 1px solid #e5e7eb;">
                                <td style="padding: 0.75rem; font-weight: 600;">Participants:</td>
                                <td style="padding: 0.75rem;">${o.count}</td>
                            </tr>
                            <tr style="border-bottom: 1px solid #e5e7eb;">
                                <td style="padding: 0.75rem; font-weight: 600;">Mean Rating:</td>
                                <td style="padding: 0.75rem;">${o.mean} / 7</td>
                            </tr>
                            <tr style="border-bottom: 1px solid #e5e7eb;">
                                <td style="padding: 0.75rem; font-weight: 600;">95% CI:</td>
                                <td style="padding: 0.75rem;">[${o.ci95Lower}, ${o.ci95Upper}]</td>
                            </tr>
                            <tr style="border-bottom: 1px solid #e5e7eb;">
                                <td style="padding: 0.75rem; font-weight: 600;">Std Deviation:</td>
                                <td style="padding: 0.75rem;">${o.stdDev}</td>
                            </tr>
                            <tr style="border-bottom: 1px solid #e5e7eb;">
                                <td style="padding: 0.75rem; font-weight: 600;">Range:</td>
                                <td style="padding: 0.75rem;">${o.min} - ${o.max}</td>
                            </tr>
                            <tr>
                                <td style="padding: 0.75rem; font-weight: 600;">Agreement:</td>
                                <td style="padding: 0.75rem;">${o.agreement}%</td>
                            </tr>
                        </table>
                        <p style="font-size: 0.85rem; color: #6b7280; margin-top: 1rem; margin-bottom: 0;">
                            <strong>What this means:</strong> ${parseInt(o.agreement)>70?"High agreement among participants - ratings are consistent.":parseInt(o.agreement)>40?"Moderate agreement - some variation in ratings.":"Low agreement - participants have quite different opinions about this study."}
                        </p>
                    </div>
                `,document.getElementById("studyStats").innerHTML=r,t.classList.add("active")};window.closeStudyModal=function(){document.getElementById("studyModal").classList.remove("active")};document.addEventListener("keydown",function(e){(e.key==="Escape"||e.key==="Esc")&&document.getElementById("studyModal").classList.contains("active")&&closeStudyModal()});function ye(e){H=e}
