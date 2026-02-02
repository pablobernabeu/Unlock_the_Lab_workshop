import{i as E,g as B,a as L,r as g,s as I,o as P}from"./firebase-C3n5cIac.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function e(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(n){if(n.ep)return;n.ep=!0;const i=e(n);fetch(n.href,i)}})();const S={apiKey:"AIzaSyCjLzq8QNQqhGOpTJy3tzwuQrovMm6Vdi4",authDomain:"unlock-the-lab-workshop.firebaseapp.com",databaseURL:"https://unlock-the-lab-workshop-default-rtdb.europe-west1.firebasedatabase.app",projectId:"unlock-the-lab-workshop",storageBucket:"unlock-the-lab-workshop.firebasestorage.app",messagingSenderId:"604889899913",appId:"1:604889899913:web:d46afe88111e8bcb7d3758",measurementId:"G-HSC51V3CLP"},m=E(S),p=B(m);L(m);let d=0,r=[],b=[],h=[],v=null,C={};document.addEventListener("DOMContentLoaded",async()=>{v=R(),await H(),M(),T(),j(),y(0)});window.nextPage=k;window.enableSubmit=O;window.submitRating=A;window.showHelp=q;window.closeHelp=f;window.showTab=N;function R(){return"session_"+Date.now()+"_"+Math.random().toString(36).substr(2,9)}async function H(){try{const[t,s,e]=await Promise.all([fetch("glossary.json").then(a=>a.json()),fetch("rubric.json").then(a=>a.json()),fetch("papers.json").then(a=>a.json())]);b=t,h=s,r=e,document.getElementById("total-papers").textContent=r.length}catch(t){console.error("Error loading content:",t),alert("Error loading workshop content. Please refresh the page.")}}function M(){const t=document.getElementById("glossary-content"),s=document.getElementById("modal-glossary"),e=b.map(a=>`
        <div class="glossary-item">
            <div class="glossary-term">${a.term}</div>
            <div class="glossary-definition">${a.definition}</div>
        </div>
    `).join("");t.innerHTML=e,s.innerHTML=e}function T(){const t=document.getElementById("rubric-content"),s=document.getElementById("modal-rubric"),e=`
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
                ${h.map(a=>`
                    <tr>
                        <td><strong>${a.name}</strong></td>
                        <td>${a.low}</td>
                        <td>${a.medium}</td>
                        <td>${a.high}</td>
                    </tr>
                `).join("")}
            </tbody>
        </table>
    `;t.innerHTML=e,s.innerHTML=e}function j(){const t=document.getElementById("paper-pages");r.forEach((s,e)=>{const a=`
            <div class="page" id="page-paper-${e}">
                <div class="container">
                    <div class="paper-card">
                        <div class="paper-header">
                            <div class="paper-id">${s.id}</div>
                            <h1 class="paper-title">${s.headline}</h1>
                        </div>
                        
                        <div class="paper-section">
                            <h3>📰 Access</h3>
                            <p>${s.access}</p>
                        </div>
                        
                        <div class="paper-section">
                            <h3>🔬 Study Overview</h3>
                            <p>${s.overview}</p>
                        </div>
                        
                        <div class="paper-section">
                            <h3>📊 Methods & Data</h3>
                            <p>${s.methods}</p>
                        </div>
                        
                        <div class="paper-section">
                            <h3>📝 Conclusion</h3>
                            <p>${s.conclusion}</p>
                        </div>
                        
                        <div class="paper-section">
                            <h3>🏛️ Source</h3>
                            <p>${s.source}</p>
                        </div>
                    </div>
                    
                    <div class="rating-section" id="rating-section-${e}">
                        <h3>Rate This Study (1-7)</h3>
                        <div class="rating-scale">
                            ${[1,2,3,4,5,6,7].map(n=>`
                                <div class="rating-option">
                                    <input type="radio" id="rating-${e}-${n}" 
                                           name="rating-${e}" value="${n}"
                                           onchange="enableSubmit(${e})">
                                    <label for="rating-${e}-${n}">${n}</label>
                                </div>
                            `).join("")}
                        </div>
                        <div class="rating-labels">
                            <span>Poor Quality</span>
                            <span>Excellent Quality</span>
                        </div>
                        <button class="submit-rating" id="submit-${e}" 
                                onclick="submitRating(${e}, '${s.id}')" disabled>
                            Submit Rating
                        </button>
                    </div>
                    
                    <div class="results-box" id="results-${e}" style="display: none;">
                        <h3>✅ Rating Submitted!</h3>
                        <div class="rating-comparison">
                            <div class="rating-display">
                                <div class="label">Your Rating</div>
                                <div class="value" id="your-rating-${e}">-</div>
                            </div>
                            <div class="rating-display">
                                <div class="label">Average Rating</div>
                                <div class="value" id="avg-rating-${e}">-</div>
                            </div>
                        </div>
                        <div class="participant-count" id="count-${e}">
                            Calculating...
                        </div>
                        <button class="btn-primary" onclick="nextPage()" style="margin-top: 1.5rem;">
                            ${e<r.length-1?"Next Paper":"View Results"}
                        </button>
                    </div>
                </div>
            </div>
        `;t.innerHTML+=a})}function y(t){document.querySelectorAll(".page").forEach(a=>a.classList.remove("active"));let e;t===0?e=document.getElementById("page-welcome"):t===1?e=document.getElementById("page-guide"):t<=r.length+1?(e=document.getElementById(`page-paper-${t-2}`),document.getElementById("help-button").classList.add("visible")):(e=document.getElementById("page-final"),document.getElementById("help-button").classList.remove("visible")),e&&(e.classList.add("active"),window.scrollTo(0,0)),d=t}function k(){const t=r.length+3;d<t-1&&y(d+1)}function O(t){document.getElementById(`submit-${t}`).disabled=!1}async function A(t,s){const e=document.querySelector(`input[name="rating-${t}"]:checked`);if(!e){alert("Please select a rating before submitting.");return}const a=parseInt(e.value);try{const n=document.getElementById(`submit-${t}`);n.disabled=!0,n.textContent="Submitting...";const i=g(p,`ratings/${s}/${v}`);await I(i,{rating:a,timestamp:Date.now()}),C[s]=a,document.getElementById(`rating-section-${t}`).style.display="none",D(t,s,a)}catch(n){console.error("Error submitting rating:",n),alert("Error submitting rating. Please try again.");const i=document.getElementById(`submit-${t}`);i.disabled=!1,i.textContent="Submit Rating"}}async function D(t,s,e){const a=document.getElementById(`results-${t}`);a.style.display="block",document.getElementById(`your-rating-${t}`).textContent=e;const n=g(p,`ratings/${s}`);P(n,i=>{const o=i.val();if(o){const l=Object.values(o).map(c=>c.rating),$=l.reduce((c,w)=>c+w,0)/l.length,u=l.length;document.getElementById(`avg-rating-${t}`).textContent=$.toFixed(1),document.getElementById(`count-${t}`).textContent=`Based on ${u} participant${u!==1?"s":""}`}})}function q(){document.getElementById("help-modal").classList.add("active"),document.body.style.overflow="hidden"}function f(){document.getElementById("help-modal").classList.remove("active"),document.body.style.overflow="auto"}function N(t){document.querySelectorAll(".tab-btn").forEach(s=>{s.classList.remove("active")}),event.target.classList.add("active"),document.querySelectorAll(".tab-content").forEach(s=>{s.classList.remove("active")}),t==="glossary"?document.getElementById("modal-glossary").classList.add("active"):document.getElementById("modal-rubric").classList.add("active")}window.onclick=function(t){const s=document.getElementById("help-modal");t.target===s&&f()};
