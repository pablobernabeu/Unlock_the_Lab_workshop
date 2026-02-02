import{i as X,g as J,a as Z,r as y,s as $,o as A}from"./firebase-CqdP5AWb.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();const ee={apiKey:"AIzaSyCjLzq8QNQqhGOpTJy3tzwuQrovMm6Vdi4",authDomain:"unlock-the-lab-workshop.firebaseapp.com",databaseURL:"https://unlock-the-lab-workshop-default-rtdb.europe-west1.firebasedatabase.app",projectId:"unlock-the-lab-workshop",storageBucket:"unlock-the-lab-workshop.firebasestorage.app",messagingSenderId:"604889899913",appId:"1:604889899913:web:d46afe88111e8bcb7d3758",measurementId:"G-HSC51V3CLP"},F=X(ee),b=J(F);Z(F);let p=0,f=[],M=[],P=[],u=null,O={},te={},w=0,T="";const G=30*60*1e3,Y=5*60*1e3,B=50*60*1e3,ne=[15*60*1e3,5*60*1e3],oe=1*60*1e3;let R=null,r=G,S=null,E=null,L=[],x=[],H=new Set;const se={"STUDY-101":1,"STUDY-102":5,"STUDY-103":6,"STUDY-104":1,"STUDY-105":5,"STUDY-106":4,"STUDY-107":2,"STUDY-108":7,"STUDY-109":4,"STUDY-110":6,"STUDY-111":2,"STUDY-112":1,"STUDY-113":6,"STUDY-114":5,"STUDY-115":3,"STUDY-116":5,"STUDY-117":1,"STUDY-118":4,"STUDY-119":7,"STUDY-120":2,"STUDY-121":5,"STUDY-122":6,"STUDY-123":1},q=100;document.addEventListener("DOMContentLoaded",async()=>{const e=loadState();if(u||(u=ie()),T=localStorage.getItem("userName"),T||(T=ae(),localStorage.setItem("userName",T)),re(),await ge(),console.log("Content loaded. Papers:",f.length),he(),console.log("Paper pages generated"),pe(),fe(),displayUsername(),e&&Object.keys(O).length>0&&restoreSubmittedRatings(),ue(),me(),w>0){const t=document.getElementById("total-score-header");t&&(t.textContent=`Score: ${w}`,document.getElementById("score-banner").style.display="flex")}const n=e&&p>0?p:0;console.log("Showing page:",n,"hasState:",e,"currentPage:",p),N(n)});window.nextPage=ye;window.previousPage=be;window.enableSubmit=ve;window.submitRating=$e;window.showHelp=we;window.closeHelp=Q;window.showTab=Te;function ie(){return"session_"+Date.now()+"_"+Math.random().toString(36).substr(2,9)}function ae(){const e=["Red","Blue","Green","Yellow","Purple","Orange","Pink","Teal","Brave","Wise","Swift","Tall","Happy","Clever","Bright","Quick","Mighty","Gentle","Bold","Cheerful","Curious","Friendly","Kind","Peaceful"],n=["Fox","Raccoon","Owl","Sparrow","Robin","Falcon","Eagle","Hawk","Rabbit","Squirrel","Deer","Bear","Wolf","Otter","Badger","Hedgehog","Dolphin","Seal","Penguin","Panda","Koala","Tiger","Lion","Leopard"],t=e[Math.floor(Math.random()*e.length)],o=n[Math.floor(Math.random()*n.length)];return`${t} ${o}`}function re(){R=Date.now(),r=G,U();const e=setInterval(()=>{Date.now()-R>=B&&clearInterval(e),U()},6e4);W(),z(),S=setTimeout(()=>{clearInterval(e),_()},r)}function W(){L.forEach(e=>clearTimeout(e)),L=[],ne.forEach(e=>{const n=r-e;if(n>0&&!H.has(e)){const t=setTimeout(()=>{le(e),H.add(e)},n);L.push(t)}})}function z(){E&&clearTimeout(E);const e=r-oe;e>0&&r<B&&(E=setTimeout(()=>{ce()},e))}function le(e){const n=Math.floor(e/6e4);alert(`⏰ ${n} minutes remaining in your session.`)}function ce(){if(!(r<B)){alert("⏰ Your session will end in 1 minute. This is the maximum session duration.");return}const n=Math.floor(r/6e4),t=Math.floor(B/6e4),o=Math.floor(Y/6e4);confirm(`⏰ Your ${n}-minute session will end in 1 minute.

Would you like to extend for ${o} more minutes?
(Maximum total: ${t} minutes)`)&&de()}function de(){S&&clearTimeout(S);const e=r+Y;r=Math.min(e,B),W(),z(),S=setTimeout(()=>{_()},r),U();const n=Math.floor((r-(e-Y))/6e4);n>0&&alert(`✅ Session extended! You have ${n} more minutes.`)}function U(){const e=Date.now()-R,n=r-e,t=Math.floor(n/6e4),o=document.getElementById("session-timer");o&&n>0?(o.textContent=`${t} min remaining`,n<=5*6e4?o.style.color="#f56565":n<=15*6e4?o.style.color="#fbbf24":o.style.color=""):o&&(o.textContent="Session ending...",o.style.color="#f56565")}function _(){if(x.forEach(t=>{typeof t=="function"&&t()}),x=[],u){const t=y(b,`active/${u}`);$(t,null)}S&&clearTimeout(S),E&&clearTimeout(E),L.forEach(t=>clearTimeout(t));const e=document.createElement("div");e.style.cssText=`
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
    `;const n=Math.floor((Date.now()-R)/6e4);e.innerHTML=`
        <div>
            <h2 style="margin-bottom: 20px;">⏰ Session Expired</h2>
            <p style="margin-bottom: 20px;">
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
    `,document.body.appendChild(e)}function ue(){const e=y(b,`active/${u}`);$(e,{joinedAt:Date.now(),lastActive:Date.now()}),setInterval(()=>{$(e,{joinedAt:Date.now(),lastActive:Date.now()})},3e4),window.addEventListener("beforeunload",()=>{$(e,null)})}function me(){const e=document.getElementById("participant-counter");e&&(e.style.display="none");const n=y(b,"active"),t=A(n,o=>{const s=o.val();if(e)if(s&&Object.keys(s).length>0){const i=Object.keys(s).length;e.textContent=`${i} participant${i!==1?"s":""} active`,e.style.display="inline-block"}else e.style.display="none"},o=>{console.error("Error updating participant count:",o),e&&(e.style.display="none")});x.push(t)}async function ge(){try{const[e,n,t]=await Promise.all([fetch("glossary.json").then(o=>o.json()),fetch("rubric.json").then(o=>o.json()),fetch("papers.json").then(o=>o.json())]);M=e,P=n,f=t,document.getElementById("total-papers").textContent=f.length}catch(e){console.error("Error loading content:",e),alert("Error loading workshop content. Please refresh the page.")}}function pe(){const e=document.getElementById("glossary-content"),n=document.getElementById("modal-glossary");if(!M||M.length===0){console.error("Glossary data not loaded");return}const t=M.map(o=>`
        <div class="glossary-item">
            <div class="glossary-term">${o.term}</div>
            <div class="glossary-definition">${o.definition}</div>
        </div>
    `).join("");e&&(e.innerHTML=t),n&&(n.innerHTML=t)}function fe(){const e=document.getElementById("rubric-content"),n=document.getElementById("modal-rubric");if(!P||P.length===0){console.error("Rubric data not loaded");return}const t=`
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
                ${P.map(o=>`
                    <tr>
                        <td><strong>${o.name}</strong></td>
                        <td>${o.low}</td>
                        <td>${o.medium}</td>
                        <td>${o.high}</td>
                    </tr>
                `).join("")}
            </tbody>
        </table>
    `;e&&(e.innerHTML=t),n&&(n.innerHTML=t)}function he(){const e=document.getElementById("paper-pages");f.forEach((n,t)=>{const o=`
            <div class="page" id="page-paper-${t}">
                <div class="container">
                    <div class="paper-card">
                        <div class="paper-header">
                            <div class="paper-id">${n.id}</div>
                            <h1 class="paper-title">${n.headline}</h1>
                        </div>
                        
                        <div class="paper-section">
                            <h3>📰 Access</h3>
                            <p>${n.access}</p>
                        </div>
                        
                        <div class="paper-section">
                            <h3>🔬 Study Overview</h3>
                            <p>${n.overview}</p>
                        </div>
                        
                        <div class="paper-section">
                            <h3>📊 Methods & Data</h3>
                            <p>${n.methods}</p>
                        </div>
                        
                        <div class="paper-section">
                            <h3>📝 Conclusion</h3>
                            <p>${n.conclusion}</p>
                        </div>
                        
                        <div class="paper-section">
                            <h3>🏛️ Source</h3>
                            <p>${n.source}</p>
                        </div>
                    </div>
                    
                    <div class="rating-section" id="rating-section-${t}">
                        <div style="background: #f0f4ff; padding: 15px; border-radius: 8px; margin-bottom: 25px; border-left: 4px solid #667eea;">
                            <h3 style="margin: 0 0 10px 0; color: #667eea;">1️⃣ Your Scientific Assessment</h3>
                            <p style="font-size: 0.95rem; color: #444; margin: 0;">Review all six rubric criteria (Access, Headline, Theory, Methods, Conclusion, Source). Then assign your overall quality rating:</p>
                        </div>
                        <div class="rating-scale">
                            ${[1,2,3,4,5,6,7].map(s=>`
                                <div class="rating-option">
                                    <input type="radio" id="rating-${t}-${s}" 
                                           name="rating-${t}" value="${s}"
                                           onchange="enableSubmit(${t})">
                                    <label for="rating-${t}-${s}">${s}</label>
                                </div>
                            `).join("")}
                        </div>
                        <div class="rating-labels">
                            <span>Poor Quality</span>
                            <span>Excellent Quality</span>
                        </div>
                        
                        <div style="background: #fff3e0; padding: 15px; border-radius: 8px; margin: 30px 0 15px 0; border-left: 4px solid #ff9800;">
                            <h3 style="margin: 0 0 10px 0; color: #f57c00;">2️⃣ Predict the Crowd</h3>
                            <p style="font-size: 0.95rem; color: #444; margin: 0;">Now guess: What will the AVERAGE rating be from all workshop participants? Will others catch the same flaws you did?</p>
                        </div>
                        <div class="rating-scale">
                            ${[1,2,3,4,5,6,7].map(s=>`
                                <div class="rating-option">
                                    <input type="radio" id="prediction-${t}-${s}" 
                                           name="prediction-${t}" value="${s}"
                                           onchange="enableSubmit(${t})">
                                    <label for="prediction-${t}-${s}">${s}</label>
                                </div>
                            `).join("")}
                        </div>
                        <div class="rating-labels">
                            <span>Low Average</span>
                            <span>High Average</span>
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
                            <div class="rating-display">
                                <div class="label">Your Rating</div>
                                <div class="value" id="your-rating-${t}">-</div>
                            </div>
                            <div class="rating-display">
                                <div class="label">Average Rating</div>
                                <div class="value" id="avg-rating-${t}">-</div>
                            </div>
                        </div>
                        <div class="participant-count" id="count-${t}">
                            Calculating...
                        </div>
                        <button class="btn-primary" onclick="nextPage()" style="margin-top: 1.5rem;">
                            ${t<f.length-1?"Next Paper":"View Results"}
                        </button>
                    </div>
                </div>
            </div>
        `;e.innerHTML+=o})}function N(e){console.log("showPage called with pageIndex:",e,"papers.length:",f.length),document.querySelectorAll(".page").forEach(o=>o.classList.remove("active"));let t;if(e===0)t=document.getElementById("page-welcome");else if(e===1)t=document.getElementById("page-guide");else if(e<=f.length+1){const o=e-2;console.log("Trying to show paper page:",o),t=document.getElementById(`page-paper-${o}`),console.log("Target page found:",!!t),document.getElementById("help-button").classList.add("visible"),document.getElementById("score-banner").style.display="flex"}else t=document.getElementById("page-final"),document.getElementById("help-button").classList.remove("visible"),Ee();t?(t.classList.add("active"),window.scrollTo(0,0)):console.error("Target page not found for pageIndex:",e),p=e,saveState()}function ye(){const e=f.length+3;p<e-1&&N(p+1)}function be(){p>0&&N(p-1)}function ve(e){const n=document.querySelector(`input[name="rating-${e}"]:checked`),t=document.querySelector(`input[name="prediction-${e}"]:checked`),o=document.getElementById(`submit-${e}`);o.disabled=!(n&&t)}async function $e(e,n){const t=document.querySelector(`input[name="rating-${e}"]:checked`),o=document.querySelector(`input[name="prediction-${e}"]:checked`);if(!t||!o){alert("Please provide both your rating and your prediction before submitting.");return}const s=parseInt(t.value),i=parseInt(o.value);try{const l=document.getElementById(`submit-${e}`);l.disabled=!0,l.textContent="Submitting...";const m=y(b,`ratings/${n}/${u}`);await $(m,{rating:s,prediction:i,timestamp:Date.now()}),O[n]=s,te[n]=i,saveState(),document.getElementById(`rating-section-${e}`).style.display="none",Se(e,n,s,i)}catch(l){console.error("Error submitting rating:",l),alert("Error submitting rating. Please try again.");const m=document.getElementById(`submit-${e}`);m.disabled=!1,m.textContent="Submit Both Ratings"}}async function Se(e,n,t,o,s=!1){const i=document.getElementById(`results-${e}`);i.style.display="block",document.getElementById(`your-rating-${e}`).textContent=t;const l=y(b,`ratings/${n}`),m=A(l,c=>{const a=c.val();if(a){const v=Object.values(a).map(d=>d.rating),j=se[n]||4,V=v.reduce((d,h)=>d+h,0)+j*q,K=v.length+q,g=V/K,C=v.length;if(document.getElementById(`avg-rating-${e}`).textContent=g.toFixed(1),document.getElementById(`count-${e}`).textContent=`Based on ${C} participant${C!==1?"s":""}`,C>=2&&!document.getElementById(`score-${e}`).textContent&&!s){const d=Math.abs(o-g),h=Math.max(0,100-Math.round(d*12));w+=h;const D=document.getElementById(`score-${e}`);D.textContent=`+${h} pts`,D.style.fontSize="2rem",D.style.fontWeight="bold",D.style.color=h>=88?"#10b981":h>=76?"#3b82f6":h>=64?"#f59e0b":"#ef4444";const k=document.getElementById(`score-msg-${e}`);k.innerHTML=d===0?`<strong>🎯 Perfect prediction!</strong><br>You nailed it: ${o} = ${g.toFixed(1)}`:d<=.5?`<strong>⭐ Outstanding!</strong><br>Predicted ${o}, actual ${g.toFixed(1)} — spot on!`:d<=1?`<strong>🎪 Excellent work!</strong><br>Predicted ${o}, actual ${g.toFixed(1)} — very close!`:d<=1.5?`<strong>👍 Great prediction!</strong><br>Predicted ${o}, actual ${g.toFixed(1)} — well done!`:d<=2.5?`<strong>👌 Good attempt!</strong><br>Predicted ${o}, actual ${g.toFixed(1)} — getting there!`:`<strong>💪 Keep learning!</strong><br>Predicted ${o}, actual ${g.toFixed(1)} — science perception is tricky!`,k.style.fontSize="0.95rem",k.style.lineHeight="1.5";const I=document.getElementById("total-score-header");I&&(I.textContent=`Score: ${w}`,I.style.animation="scoreUpdate 0.5s ease",setTimeout(()=>I.style.animation="",500)),saveState()}}});x.push(m)}function we(){document.getElementById("help-modal").classList.add("active"),document.body.style.overflow="hidden"}function Q(){document.getElementById("help-modal").classList.remove("active"),document.body.style.overflow="auto"}function Te(e){document.querySelectorAll(".tab-btn").forEach(n=>{n.classList.remove("active")}),event.target.classList.add("active"),document.querySelectorAll(".tab-content").forEach(n=>{n.classList.remove("active")}),e==="glossary"?document.getElementById("modal-glossary").classList.add("active"):document.getElementById("modal-rubric").classList.add("active")}window.onclick=function(e){const n=document.getElementById("help-modal");e.target===n&&Q()};function Ee(){document.getElementById("final-score").textContent=w;const e=y(b,`leaderboard/${u}`);$(e,{score:w,timestamp:Date.now(),papersRated:Object.keys(O).length,userName:T});const n=y(b,"leaderboard");A(n,t=>{const o=t.val();if(o){const s=Object.entries(o).map(([c,a])=>({id:c,score:a.score,timestamp:a.timestamp,userName:a.userName||"Anonymous"}));s.sort((c,a)=>a.score-c.score);const i=s.findIndex(c=>c.id===u)+1;document.getElementById("score-rank").textContent=`You ranked #${i} out of ${s.length} participant${s.length!==1?"s":""}!`;const m=s.slice(0,5).map((c,a)=>{const v=c.id===u;return`
                    <div class="leaderboard-entry ${v?"current-user":""}">
                        <span class="rank">${(a===0?"🥇":a===1?"🥈":a===2?"🥉":"")||`#${a+1}`}</span>
                        <span class="username">${c.userName}</span>
                        <span class="score">${c.score} pts</span>
                        ${v?'<span class="you-badge">You!</span>':""}
                    </div>
                `}).join("");document.getElementById("leaderboard-list").innerHTML=m||"<p>Be the first to complete!</p>"}})}
