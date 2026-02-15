import"./modulepreload-polyfill-B5Qt9EMX.js";import{d as v}from"./firebase-config-SXTUs8DI.js";import{r as w,g as M,s as I,o as oe}from"./firebase-4YSElDcj.js";let D=0,f=[],V=[],_=[],h=null,p={},q={},E=0,B="",H=!1,ie=[],he=null;const re=30*60*1e3,te=5*60*1e3,N=50*60*1e3,pe=[15*60*1e3,5*60*1e3],ye=1*60*1e3;let X=null,R=re,L=null,O=null,K=[],Q=[],ae=new Set;const J={"STUDY-1":1,"STUDY-4":1,"STUDY-29":1,"STUDY-32":1,"STUDY-34":1,"STUDY-40":1,"STUDY-46":1,"STUDY-7":2,"STUDY-11":2,"STUDY-20":2,"STUDY-28":2,"STUDY-36":2,"STUDY-38":2,"STUDY-42":2,"STUDY-9":3,"STUDY-12":3,"STUDY-15":3,"STUDY-17":3,"STUDY-23":3,"STUDY-25":3,"STUDY-44":3,"STUDY-6":4,"STUDY-14":4,"STUDY-18":4,"STUDY-26":4,"STUDY-27":4,"STUDY-30":4,"STUDY-35":4,"STUDY-48":4,"STUDY-3":5,"STUDY-5":5,"STUDY-13":5,"STUDY-16":5,"STUDY-21":5,"STUDY-45":5,"STUDY-2":6,"STUDY-10":6,"STUDY-22":6,"STUDY-31":6,"STUDY-33":6,"STUDY-37":6,"STUDY-41":6,"STUDY-8":7,"STUDY-19":7,"STUDY-24":7,"STUDY-39":7,"STUDY-43":7,"STUDY-47":7},C=100;function ne(e){return e>=90?"🏆":e>=75?"🥇":e>=60?"🥈":"🥉"}function be(){const e=document.getElementById("logo-icon");if(!e)return;let n=!1;e.addEventListener("click",()=>{if(n)return;n=!0,e.classList.add("flipping");const t=document.createElement("div");t.className="slime-container",document.body.appendChild(t);const o=e.getBoundingClientRect(),s=o.left+o.width/2,i=o.top+o.height,r=7;for(let d=0;d<r;d++)setTimeout(()=>{const g=document.createElement("div");g.className="slime";const a=(d-r/2)*40,l=(Math.random()-.5)*30,c=60+Math.random()*40;g.style.left=`${s+a+l}px`,g.style.top=`${i}px`,g.style.width=`${c}px`,g.style.height=`${c}px`,t.appendChild(g)},d*100);setTimeout(()=>{e.classList.remove("flipping"),t.remove(),n=!1},4e3)})}document.addEventListener("DOMContentLoaded",async()=>{be();const n=new URLSearchParams(window.location.search).get("session");if(n){await Ge(n);return}const t=$e();if(h||(h=ve()),B=localStorage.getItem("userName"),B||(B=await we(),localStorage.setItem("userName",B)),Te(),await ue(),console.log("Content loaded. Papers:",f.length),Ie(),console.log("Paper pages generated"),Ye(),Me(),Ee(),t&&Object.keys(p).length>0&&Se(),De(),Ue(),E>0){const s=document.getElementById("total-score-header");if(s){const i=Object.keys(p).length,r=i>0?Math.round(E/i):0,d=ne(r);s.innerHTML=`<span class="medal-icon">${d}</span> ${r}%`,document.getElementById("score-banner").style.display="flex"}}const o=t&&D>0?D:0;console.log("Showing page:",o,"hasState:",t,"currentPage:",D),z(o)});window.nextPage=Le;window.previousPage=Ce;window.enableSubmit=Oe;window.submitRating=He;window.showHelp=Ne;window.closeHelp=se;window.showTab=Ae;window.finishEarly=Pe;function ve(){return"session_"+Date.now()+"_"+Math.random().toString(36).substr(2,9)}function ee(){const e=["Red","Blue","Green","Yellow","Purple","Orange","Pink","Teal","Brave","Wise","Swift","Tall","Happy","Clever","Bright","Quick","Mighty","Gentle","Bold","Cheerful","Curious","Friendly","Kind","Peaceful"],n=["Fox","Raccoon","Owl","Sparrow","Robin","Falcon","Eagle","Hawk","Rabbit","Squirrel","Deer","Bear","Wolf","Otter","Badger","Hedgehog","Dolphin","Seal","Penguin","Panda","Koala","Tiger","Lion","Leopard"],t=e[Math.floor(Math.random()*e.length)],o=n[Math.floor(Math.random()*n.length)],s=Math.floor(Math.random()*100).toString().padStart(2,"0");return`${t} ${o} ${s}`}async function we(){const e=w(v,"leaderboard");try{const n=await M(e),t=new Set;if(n.exists()){const i=n.val();Object.values(i).forEach(r=>{r.userName&&t.add(r.userName)})}let o=0,s;do if(s=ee(),o++,o>=500){const i=ee();let r=1;for(s=`${i}-${r}`;t.has(s);)r++,s=`${i}-${r}`;break}while(t.has(s));return s}catch(n){return console.error("Error checking username uniqueness:",n),ee()}}function A(){const e={currentPage:D,userRatings:p,userPredictions:q,totalScore:E,sessionId:h,hasUsedBackButton:H};localStorage.setItem("workshopState",JSON.stringify(e))}function $e(){try{const e=localStorage.getItem("workshopState");if(e){const n=JSON.parse(e);return D=n.currentPage||0,p=n.userRatings||{},q=n.userPredictions||{},E=n.totalScore||0,h=n.sessionId||null,H=n.hasUsedBackButton||!1,!0}}catch(e){console.error("Error loading state:",e)}return!1}function Se(){Object.keys(p).forEach(e=>{const n=f.findIndex(t=>t.id===e);if(n>=0){const t=document.getElementById(`rating-section-${n}`),o=document.getElementById(`results-${n}`);if(t&&(t.style.display="none"),o){o.style.display="block";const s=p[e],i=q[e];s&&i&&ge(n,e,s,i,!0)}}})}function Ee(){const e=document.getElementById("navbar-username");e&&(e.textContent=B);const n=document.getElementById("page-final");if(n&&!n.querySelector(".username-footer")){const t=document.createElement("div");t.className="username-footer",t.innerHTML=`Your username is <span style="color: #667eea; font-weight: 600;">${B}</span>`,n.querySelector(".container").appendChild(t)}}function Te(){X=Date.now(),R=re,F();const e=setInterval(()=>{Date.now()-X>=N&&clearInterval(e),F()},6e4);le(),ce(),L=setTimeout(()=>{clearInterval(e),de()},R)}function le(){K.forEach(e=>clearTimeout(e)),K=[],pe.forEach(e=>{const n=R-e;if(n>0&&!ae.has(e)){const t=setTimeout(()=>{ke(e),ae.add(e)},n);K.push(t)}})}function ce(){O&&clearTimeout(O);const e=R-ye;e>0&&R<N&&(O=setTimeout(()=>{Be()},e))}function ke(e){const n=Math.floor(e/6e4);alert(`⏰ ${n} minutes remaining in your session.`)}function Be(){if(!(R<N)){alert("⏰ Your session will end in 1 minute. This is the maximum session duration.");return}const n=Math.floor(R/6e4),t=Math.floor(N/6e4),o=Math.floor(te/6e4);confirm(`⏰ Your ${n}-minute session will end in 1 minute.

Would you like to extend for ${o} more minutes?
(Maximum total: ${t} minutes)`)&&Re()}function Re(){L&&clearTimeout(L);const e=R+te;R=Math.min(e,N),le(),ce(),L=setTimeout(()=>{de()},R),F();const n=Math.floor((R-(e-te))/6e4);n>0&&alert(`✅ Session extended! You have ${n} more minutes.`)}function F(){const e=Date.now()-X,n=R-e,t=Math.floor(n/6e4),o=Object.keys(p).length,s=f.length||48,i=Math.max(0,s-o),r=document.getElementById("session-timer");r&&n>0?(r.textContent=`${t} min | ${i} paper${i!==1?"s":""} left`,n<=5*6e4?r.style.color="#f56565":n<=15*6e4?r.style.color="#fbbf24":r.style.color=""):r&&(r.textContent="Session ending...",r.style.color="#f56565")}function de(){if(Q.forEach(t=>{typeof t=="function"&&t()}),Q=[],h){const t=w(v,`active/${h}`);I(t,null)}L&&clearTimeout(L),O&&clearTimeout(O),K.forEach(t=>clearTimeout(t));const e=document.createElement("div");e.style.cssText=`
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.9);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        color: white;
        text-align: center;
        padding: 20px;
    `;const n=Math.floor((Date.now()-X)/6e4);e.innerHTML=`
        <div>
            <h2 style="margin-bottom: 20px; color: white;">⏰ Session Expired</h2>
            <p style="margin-bottom: 20px; color: white;">
                Your ${n}-minute session has ended to conserve resources.<br>
                Thank you for participating!
            </p>
            <button onclick="location.reload()" style="
                background: #667eea;
                color: white;
                border: none;
                padding: 12px 24px;
                border-radius: 8px;
                font-size: 16px;
                cursor: pointer;
            ">Start New Session</button>
        </div>
    `,document.body.appendChild(e)}function De(){const e=w(v,`active/${h}`);I(e,{joinedAt:Date.now(),lastActive:Date.now()}),setInterval(()=>{I(e,{joinedAt:Date.now(),lastActive:Date.now()})},3e4),window.addEventListener("beforeunload",()=>{I(e,null)})}function Ue(){const e=document.getElementById("participant-counter");e&&(e.style.display="none");const n=w(v,"active"),t=oe(n,o=>{const s=o.val();if(e)if(s&&Object.keys(s).length>0){const i=Object.keys(s).filter(r=>{const d=s[r].timestamp;return d&&Date.now()-d<6e4}).length;i>0?(e.textContent=`${i} participant${i!==1?"s":""} active`,e.style.display="inline-block"):e.style.display="none"}else e.style.display="none"},o=>{console.error("Error updating participant count:",o),e&&(e.style.display="none")});Q.push(t)}function xe(){let e=0;for(let t=0;t<h.length;t++)e=(e<<5)-e+h.charCodeAt(t),e=e&e;function n(){return e=(e*9301+49297)%233280,e/233280}for(let t=f.length-1;t>0;t--){const o=Math.floor(n()*(t+1));[f[t],f[o]]=[f[o],f[t]]}console.log("Papers shuffled for session:",h)}async function ue(){try{ie=await(await fetch("feature-order-config.json")).json();const[n,t,o,s,i,r,d,g]=await Promise.all([fetch("glossary.json").then(a=>a.json()),fetch("rubric-v1.json").then(a=>a.json()),fetch("rubric-v2.json").then(a=>a.json()),fetch("rubric-v3.json").then(a=>a.json()),fetch("rubric-v4.json").then(a=>a.json()),fetch("rubric-v5.json").then(a=>a.json()),fetch("rubric-v6.json").then(a=>a.json()),fetch("papers.json").then(a=>a.json())]);V=n,window.allRubrics=[t,o,s,i,r,d],_=t,f=g,xe(),console.log("Loaded all 6 rubric versions for within-participant rotation"),document.getElementById("total-papers").textContent=f.length}catch(e){console.error("Error loading content:",e),alert("Error loading workshop content. Please refresh the page.")}}function Ye(){const e=document.getElementById("glossary-content"),n=document.getElementById("modal-glossary");if(!V||V.length===0){console.error("Glossary data not loaded");return}const t=V.map(o=>`
        <div class="glossary-item">
            <div class="glossary-term">${o.term}</div>
            <div class="glossary-definition">${o.definition}</div>
        </div>
    `).join("");e&&(e.innerHTML=t),n&&(n.innerHTML=t)}function Me(){const e=document.getElementById("rubric-content"),n=document.getElementById("modal-rubric");if(!_||_.length===0){console.error("Rubric data not loaded");return}const t=`
        <div style="overflow-x: auto; -webkit-overflow-scrolling: touch;">
            <table class="rubric-table">
                <thead>
                    <tr>
                        <th>Category</th>
                        <th>Low (1-2)</th>
                        <th>Medium (3-5)</th>
                        <th>High (6-7)</th>
                    </tr>
                </thead>
                <tbody>
                    ${_.map(o=>`
                        <tr>
                            <td><strong>${o.name}</strong></td>
                            <td>${o.low}</td>
                            <td>${o.medium}</td>
                            <td>${o.high}</td>
                        </tr>
                    `).join("")}
                </tbody>
            </table>
        </div>
    `;e&&(e.innerHTML=t),n&&(n.innerHTML=t)}function Ie(){const e=document.getElementById("paper-pages");f.forEach((n,t)=>{const o=t%6,s=ie[o],i=s.featureOrder,r=s.featureLabels,d=i.map((a,l)=>{const c=r[l],u=n[a];return`
                        <div class="paper-section">
                            <h3>${c}</h3>
                            <p>${u}</p>
                        </div>`}).join(""),g=`
            <div class="page" id="page-paper-${t}">
                <div class="container">
                    <button class="back-to-previous-btn" onclick="goBackToPreviousStudy()" style="${H||t===0?"display: none;":""}" title="Go back to previous study (one-time use)">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M19 12H5M12 19l-7-7 7-7"/>
                        </svg>
                        <span>Back to Previous Study</span>
                    </button>
                    <div class="paper-card">
                        <div class="paper-header">
                            <h1 class="paper-title">${n.title}</h1>
                        </div>
                        ${d}
                    </div>
                    
                    <div class="rating-section" id="rating-section-${t}">
                        <div style="background: #fff3e0; padding: 15px; border-radius: 8px; margin-bottom: 25px; border-left: 4px solid #ff9800;">
                            <h3 style="margin: 0 0 10px 0; color: #f57c00;">1️⃣ Predict the Crowd</h3>
                            <p style="font-size: 0.95rem; color: #444; margin: 0;">Guess: What will the AVERAGE rating be from all workshop participants? Will others catch the same flaws you did?</p>
                        </div>
                        <div class="rating-scale">
                            ${[1,2,3,4,5,6,7].map(a=>`
                                <div class="rating-option">
                                    <input type="radio" id="prediction-${t}-${a}" 
                                           name="prediction-${t}" value="${a}"
                                           onchange="enableSubmit(${t})">
                                    <label for="prediction-${t}-${a}">${a}</label>
                                </div>
                            `).join("")}
                        </div>
                        <div class="rating-labels">
                            <span>Low Average</span>
                            <span>High Average</span>
                        </div>
                        
                        <div style="background: #f0f4ff; padding: 15px; border-radius: 8px; margin: 30px 0 15px 0; border-left: 4px solid #667eea;">
                            <h3 style="margin: 0 0 10px 0; color: #667eea;">2️⃣ Your Scientific Assessment</h3>
                            <p style="font-size: 0.95rem; color: #444; margin: 0;">Review all six rubric criteria. Then assign your overall quality rating:</p>
                        </div>
                        <div class="rating-scale">
                            ${[1,2,3,4,5,6,7].map(a=>`
                                <div class="rating-option">
                                    <input type="radio" id="rating-${t}-${a}" 
                                           name="rating-${t}" value="${a}"
                                           onchange="enableSubmit(${t})">
                                    <label for="rating-${t}-${a}">${a}</label>
                                </div>
                            `).join("")}
                        </div>
                        <div class="rating-labels">
                            <span>Poor Quality</span>
                            <span>Excellent Quality</span>
                        </div>
                        
                        <button class="submit-rating" id="submit-${t}" 
                                onclick="submitRating(${t}, '${n.id}')" disabled>
                            Submit Both Ratings
                        </button>
                    </div>
                    
                    <div class="results-box" id="results-${t}" style="display: none;">
                        <h3>✅ Rating Submitted!</h3>
                        <div class="score-earned">
                            <div class="score-value" id="score-${t}"></div>
                            <div class="score-message" id="score-msg-${t}"></div>
                        </div>
                        <div class="rating-comparison">
                            <div class="rating-scale-grid">
                                <div class="scale-label">Your Rating</div>
                                <div class="scale-row" id="your-rating-scale-${t}">
                                    ${[1,2,3,4,5,6,7].map(a=>`<div class="scale-cell" data-value="${a}"></div>`).join("")}
                                </div>
                            </div>
                            <div class="rating-scale-grid">
                                <div class="scale-label">Average Rating</div>
                                <div class="scale-row" id="avg-rating-scale-${t}">
                                    ${[1,2,3,4,5,6,7].map(a=>`<div class="scale-cell" data-value="${a}"></div>`).join("")}
                                </div>
                            </div>
                        </div>
                        <div class="participant-count" id="count-${t}">
                            Calculating...
                        </div>
                        <div class="navigation-buttons" style="display: flex; flex-direction: column; gap: 0.75rem; margin-top: 1.5rem;">
                            <button class="btn-primary" onclick="nextPage()">
                                ${t<f.length-1?"Next Paper":"View Results"}
                            </button>
                            <button class="btn-finish" id="finish-btn-${t}" onclick="finishEarly()" style="display: none;">
                                Finish & View Results
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;e.innerHTML+=g})}function z(e){console.log("showPage called with pageIndex:",e,"papers.length:",f.length),document.querySelectorAll(".page").forEach(i=>i.classList.remove("active"));let t;const o=document.getElementById("navbar-paper-number"),s=document.getElementById("navbar-username");if(e===0)t=document.getElementById("page-welcome"),o&&(o.style.display="none"),s&&(s.style.display="none");else if(e===1)t=document.getElementById("page-guide"),o&&(o.style.display="none"),s&&(s.style.display="none");else if(e<=f.length+1){const i=e-2;console.log("Trying to show paper page:",i),t=document.getElementById(`page-paper-${i}`),console.log("Target page found:",!!t),document.getElementById("help-button").classList.add("visible"),o&&(o.textContent=`Paper ${i+1} of ${f.length}`,o.style.display="inline"),s&&(s.style.display="none");const r=Object.keys(p).length;(r>0?Math.round(E/r):0)>0&&(document.getElementById("score-banner").style.display="flex")}else t=document.getElementById("page-final"),document.getElementById("help-button").classList.remove("visible"),o&&(o.style.display="none"),s&&(s.style.display="inline"),me();t?(t.classList.add("active"),window.scrollTo(0,0)):console.error("Target page not found for pageIndex:",e),D=e,A()}function Le(){const e=f.length+3;D<e-1&&z(D+1)}function Ce(){D>0&&z(D-1)}function Pe(){if(Object.keys(p).length<12){alert("Please rate at least 12 studies before finishing.");return}const n=f.length+2;z(n)}function je(){H||D>2&&(H=!0,A(),document.querySelectorAll(".back-to-previous-btn").forEach(n=>{n.style.display="none"}),z(D-1))}window.goBackToPreviousStudy=je;function Oe(e){const n=document.querySelector(`input[name="rating-${e}"]:checked`),t=document.querySelector(`input[name="prediction-${e}"]:checked`),o=document.getElementById(`submit-${e}`);o.disabled=!(n&&t)}async function He(e,n){const t=document.querySelector(`input[name="rating-${e}"]:checked`),o=document.querySelector(`input[name="prediction-${e}"]:checked`);if(!t||!o){alert("Please provide both your rating and your prediction before submitting.");return}const s=parseInt(t.value),i=parseInt(o.value);try{const r=document.getElementById(`submit-${e}`);r.disabled=!0,r.textContent="Submitting...",console.log("Submitting rating:",{paperId:n,sessionId:h,rating:s,prediction:i});const d=w(v,`ratings/${n}`),a=(await M(d)).val();let l=4;if(a){const m=Object.values(a).map(k=>k.rating),T=J[n]||4,b=m.reduce((k,U)=>k+U,0)+T*C,$=m.length+C;l=b/$}else l=J[n]||4;p[n]=s,q[n]=i,A(),document.getElementById(`rating-section-${e}`).style.display="none",ge(e,n,s,i,!1,l);const c=e%6+1,u=w(v,`ratings/${n}/${h}`);await I(u,{rating:s,prediction:i,rubricVersion:c,timestamp:Date.now()}),console.log("Rating submitted successfully")}catch(r){console.error("Error submitting rating:",r),console.error("Error details:",r.code,r.message),alert(`Error submitting rating: ${r.message}

Please check the browser console for details.`);const d=document.getElementById(`submit-${e}`);d.disabled=!1,d.textContent="Submit Both Ratings"}}async function ge(e,n,t,o,s=!1,i=null){const r=document.getElementById(`results-${e}`);if(r.style.display="block",i!==null){const a=document.getElementById(`score-${e}`);if(!a.textContent){const l=Math.abs(o-i),c=Math.max(0,100-Math.round(l*12));E+=c,a.textContent=`${c}%`,a.style.fontSize="2rem",a.style.fontWeight="bold",a.style.color=c>=88?"#10b981":c>=76?"#3b82f6":c>=64?"#f59e0b":"#ef4444";const u=document.getElementById(`score-msg-${e}`);u.innerHTML=l===0?`<strong>🎯 Perfect prediction!</strong><br>You nailed it: ${o} = ${i.toFixed(1)}`:l<=.5?`<strong>⭐ Outstanding!</strong><br>Predicted ${o}, actual ${i.toFixed(1)} — spot on!`:l<=1?`<strong>🎪 Excellent work!</strong><br>Predicted ${o}, actual ${i.toFixed(1)} — very close!`:l<=1.5?`<strong>👍 Great prediction!</strong><br>Predicted ${o}, actual ${i.toFixed(1)} — well done!`:l<=2.5?`<strong>👌 Good attempt!</strong><br>Predicted ${o}, actual ${i.toFixed(1)} — getting there!`:`<strong>💪 Keep learning!</strong><br>Predicted ${o}, actual ${i.toFixed(1)} — science perception is tricky!`,u.style.fontSize="0.95rem",u.style.lineHeight="1.5";const m=document.getElementById("total-score-header"),T=document.getElementById("score-banner");if(m){const $=Object.keys(p).length,k=$>0?Math.round(E/$):0;if(k>0){const U=ne(k);m.innerHTML=`<span class="medal-icon">${U}</span> ${k}%`,m.style.animation="scoreUpdate 0.5s ease",setTimeout(()=>m.style.animation="",500),T&&(T.style.display="flex")}else T&&(T.style.display="none")}if(F(),A(),Object.keys(p).length>=12&&e<f.length-1){const $=document.getElementById(`finish-btn-${e}`);$&&($.style.display="block")}}}const d=w(v,`ratings/${n}`),g=oe(d,a=>{const l=a.val();if(l){const c=Object.values(l).map(y=>y.rating),u=J[n]||4,m=c.reduce((y,S)=>y+S,0)+u*C,T=c.length+C,b=m/T,$=c.length,k=Math.round(b),U=document.getElementById(`your-rating-scale-${e}`),P=document.getElementById(`avg-rating-scale-${e}`);if(U&&P){U.querySelectorAll(".scale-cell").forEach(x=>{x.textContent="",x.className="scale-cell"}),P.querySelectorAll(".scale-cell").forEach(x=>{x.textContent="",x.className="scale-cell"});const y=U.querySelector(`[data-value="${t}"]`);y&&(y.textContent=t,y.className=`scale-cell active rating-${t}`);const S=P.querySelector(`[data-value="${k}"]`);S&&(S.textContent=b.toFixed(1),S.className=`scale-cell active rating-${k}`)}document.getElementById(`count-${e}`).textContent=`Based on ${$} participant${$!==1?"s":""}`;const Y=document.getElementById(`score-${e}`);if(!Y.textContent&&!s){const y=Math.abs(o-b),S=Math.max(0,100-Math.round(y*12));E+=S,Y.textContent=`${S}%`,Y.style.fontSize="2rem",Y.style.fontWeight="bold",Y.style.color=S>=88?"#10b981":S>=76?"#3b82f6":S>=64?"#f59e0b":"#ef4444";const x=document.getElementById(`score-msg-${e}`);x.innerHTML=y===0?`<strong>🎯 Perfect prediction!</strong><br>You nailed it: ${o} = ${b.toFixed(1)}`:y<=.5?`<strong>⭐ Outstanding!</strong><br>Predicted ${o}, actual ${b.toFixed(1)} — spot on!`:y<=1?`<strong>🎪 Excellent work!</strong><br>Predicted ${o}, actual ${b.toFixed(1)} — very close!`:y<=1.5?`<strong>👍 Great prediction!</strong><br>Predicted ${o}, actual ${b.toFixed(1)} — well done!`:y<=2.5?`<strong>👌 Good attempt!</strong><br>Predicted ${o}, actual ${b.toFixed(1)} — getting there!`:`<strong>💪 Keep learning!</strong><br>Predicted ${o}, actual ${b.toFixed(1)} — science perception is tricky!`,x.style.fontSize="0.95rem",x.style.lineHeight="1.5";const W=document.getElementById("total-score-header"),G=document.getElementById("score-banner");if(W){const j=Object.keys(p).length,Z=j>0?Math.round(E/j):0;if(Z>0){const fe=ne(Z);W.innerHTML=`<span class="medal-icon">${fe}</span> ${Z}%`,W.style.animation="scoreUpdate 0.5s ease",setTimeout(()=>W.style.animation="",500),G&&(G.style.display="flex")}else G&&(G.style.display="none")}if(F(),A(),Object.keys(p).length>=12&&e<f.length-1){const j=document.getElementById(`finish-btn-${e}`);j&&(j.style.display="block")}}}});Q.push(g)}function Ne(){document.getElementById("help-modal").classList.add("active"),document.body.style.overflow="hidden"}function se(){document.getElementById("help-modal").classList.remove("active"),document.body.style.overflow="auto"}function Ae(e){document.querySelectorAll(".tab-btn").forEach(n=>{n.classList.remove("active")}),event.target.classList.add("active"),document.querySelectorAll(".tab-content").forEach(n=>{n.classList.remove("active")}),e==="glossary"?document.getElementById("modal-glossary").classList.add("active"):document.getElementById("modal-rubric").classList.add("active")}window.onclick=function(e){const n=document.getElementById("help-modal");e.target===n&&se()};window.addEventListener("keydown",function(e){if(e.key==="Escape"){const n=document.getElementById("help-modal");n&&n.classList.contains("active")&&se()}});function me(){const e=Object.keys(p).length,n=e>0?Math.round(E/e):0;document.getElementById("final-score").textContent=`${n}%`,console.log("Saving to leaderboard:",{sessionId:h,totalScore:E,userName:B});const t=w(v,`leaderboard/${h}`);I(t,{score:E,timestamp:Date.now(),papersRated:Object.keys(p).length,userName:B,listId:he}).then(()=>{console.log("Score saved successfully"),document.getElementById("save-results-link").style.display="inline-block",document.getElementById("email-results-link").style.display="inline-block",document.getElementById("username-display-inline").textContent=B}).catch(s=>{console.error("Error saving score:",s)}),Fe();const o=w(v,"leaderboard");oe(o,s=>{const i=s.val();if(console.log("Leaderboard data:",i),i){const r=Object.entries(i).map(([l,c])=>({id:l,score:c.score,timestamp:c.timestamp,userName:c.userName||"Anonymous"}));r.sort((l,c)=>c.score-l.score);const d=r.findIndex(l=>l.id===h)+1;document.getElementById("score-rank").textContent=`You ranked #${d} out of ${r.length} participant${r.length!==1?"s":""}!`;const a=r.slice(0,5).map((l,c)=>{const u=l.id===h;return`
                    <div class="leaderboard-entry ${u?"current-user":""}">
                        <span class="rank">${(c===0?"🥇":c===1?"🥈":c===2?"🥉":"")||`#${c+1}`}</span>
                        <span class="username">${l.userName}</span>
                        <span class="score">${l.score} pts</span>
                        ${u?'<span class="you-badge">You!</span>':""}
                    </div>
                `}).join("");document.getElementById("leaderboard-list").innerHTML=a||"<p>Be the first to complete!</p>"}})}async function Fe(){try{const e={},n=f.map(async u=>{const m=w(v,`ratings/${u.id}`),b=(await M(m)).val();if(b){const $=Object.values(b).map(y=>y.rating),k=J[u.id]||4,U=$.reduce((y,S)=>y+S,0)+k*C,P=$.length+C,Y=U/P;e[u.id]={average:Y,userRating:p[u.id]||null}}});await Promise.all(n);const t=[],o=[],s=[],i=[];if(f.forEach(u=>{if(e[u.id]&&e[u.id].userRating!==null){const m=e[u.id].userRating,T=e[u.id].average,b=m-T;t.push(b),o.push(m),s.push(T),i.push(u.id)}}),t.length===0)return;const r=t.reduce((u,m)=>u+m,0)/t.length,d=t.reduce((u,m)=>u+Math.pow(m-r,2),0)/t.length,g=Math.sqrt(d),a=t.map(u=>Math.abs(u)),l=a.reduce((u,m)=>u+m,0)/a.length;let c="";l<.5&&g<.8?c=`🎯 <strong>Spot-On Evaluator!</strong> Your ratings are remarkably well-aligned with the crowd. On average, you deviated by just ${l.toFixed(2)} points from other participants' ratings. Your assessments are well backed by both the baseline quality indicators and the collective wisdom of other evaluators. You're in sync with the scientific consensus!`:l<1&&g<1.5?c=`✓ <strong>Calibrated Scientist.</strong> Your ratings align well with the crowd, averaging ${l.toFixed(2)} points from the consensus. You're consistently backed by other participants' evaluations, showing you've developed a reliable eye for research quality that matches the collective assessment.`:l>2||g>2.5?c=`🌟 <strong>Breaking the Mould!</strong> Your ratings deviate substantially from the crowd (average difference: ${l.toFixed(2)} points). You're seeing research quality through a unique lens—perhaps you're more critical of methodological flaws, or more generous with preliminary findings. Your independent perspective challenges the consensus!`:c=`⚖️ <strong>Balanced Contrarian.</strong> Your ratings show notable differences from the average (typical deviation: ${l.toFixed(2)} points). You're neither slavishly following the crowd nor wildly divergent—you're bringing a thoughtful, independent perspective whilst still engaging with the scientific consensus.`,document.getElementById("analysis-summary").innerHTML=c,document.getElementById("rating-analysis").style.display="block",qe(i,o,s)}catch(e){console.error("Error calculating rating analysis:",e)}}function qe(e,n,t){const o=document.getElementById("comparison-chart");o&&new Chart(o,{type:"line",data:{labels:e,datasets:[{label:"Your Ratings",data:n,borderColor:"#667eea",backgroundColor:"rgba(102, 126, 234, 0.1)",borderWidth:3,pointRadius:5,pointBackgroundColor:"#667eea",tension:0},{label:"Crowd Average",data:t,borderColor:"#10b981",backgroundColor:"rgba(16, 185, 129, 0.1)",borderWidth:2,borderDash:[5,5],pointRadius:4,pointBackgroundColor:"#10b981",tension:0}]},options:{responsive:!0,maintainAspectRatio:!1,aspectRatio:2,plugins:{legend:{display:!0,position:"top",labels:{font:{size:12,weight:"bold"}}},tooltip:{callbacks:{label:function(s){return`${s.dataset.label}: ${s.parsed.y.toFixed(2)}`}}}},scales:{y:{beginAtZero:!1,min:1,max:7,title:{display:!0,text:"Rating (1-7 scale)",font:{size:14,weight:"bold"}},ticks:{stepSize:1}},x:{title:{display:!0,text:"Studies",font:{size:14,weight:"bold"}},ticks:{maxRotation:45,minRotation:45,font:{size:9}}}}}})}function ze(){const e=`${window.location.origin}${window.location.pathname}?session=${h}`;navigator.clipboard.writeText(e).then(()=>{document.getElementById("link-copied-msg").style.display="block",setTimeout(()=>{document.getElementById("link-copied-msg").style.display="none"},3e3)}).catch(n=>{console.error("Failed to copy link:",n),alert("Failed to copy link. Please copy manually: "+e)})}window.copyResultsLink=ze;function We(){const e=`${window.location.origin}${window.location.pathname}?session=${h}`,n=`${window.location.origin}/dashboard.html`,t=encodeURIComponent("Your Unlock the Lab Results"),o=encodeURIComponent(`Hello ${B},

Here are your Unlock the Lab workshop results:

Your Username: ${B}

Direct Link to Your Results:
${e}

You can also visit the Live Dashboard and enter your username to find your results:
${n}

The dashboard shows real-time statistics and comparisons for all participants.

Thank you for participating!

---
Unlock the Lab Workshop
Dr Pablo Bernabeu, University of Oxford`);window.location.href=`mailto:?subject=${t}&body=${o}`}window.emailResultsLink=We;async function Ge(e){try{await ue();const n=d=>d.toLowerCase().replace(/\s+/g,"");let t=w(v,`leaderboard/${e}`),o=await M(t),s=e;if(!o.exists()){const d=n(e),g=w(v,"leaderboard"),a=await M(g);if(a.exists()){const l=a.val(),c=Object.keys(l).find(u=>n(u)===d);c&&(s=c,t=w(v,`leaderboard/${c}`),o=await M(t))}}if(!o.exists()){alert("Username not found. Please check your username and try again."),window.location.href=window.location.pathname;return}const i=o.val();h=s,B=i.userName||"Anonymous",E=i.score||0;const r=f.map(async d=>{const g=w(v,`ratings/${d.id}/${s}`),a=await M(g);if(a.exists()){const l=a.val();p[d.id]=l.rating,q[d.id]=l.prediction}});await Promise.all(r),document.getElementById("page-welcome").classList.remove("active"),document.getElementById("page-final").classList.add("active"),me(),document.getElementById("total-papers").textContent=Object.keys(p).length}catch(n){console.error("Error loading session results:",n),alert("Error loading results. Please try again."),window.location.href=window.location.pathname}}
