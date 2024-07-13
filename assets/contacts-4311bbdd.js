import{S as a,c as o,b as i,a as s,d as c,l as u,g as m}from"./api-52441d14.js";const r=({id:e,name:t,number:n})=>`
      <li class="list-item" id="${e}">
      <p>Name: ${t}</p>
      <p>Number: ${n}</p>
      <button class="delete-btn">Delete</button>
      </li>
     `,d=localStorage.getItem(a);d===null&&location.replace("/");o.addEventListener("submit",b);i.addEventListener("click",p);function b(e){e.preventDefault();const{name:t,number:n}=e.currentTarget.elements;s({name:t.value,number:n.value}).then(l=>{c.insertAdjacentHTML("beforeend",r(l)),o.reset()})}function g(){m().then(e=>c.insertAdjacentHTML("beforeend",e.map(r).join("")))}g();function p(){u().then(()=>{localStorage.removeItem(a),location.replace("/")})}
