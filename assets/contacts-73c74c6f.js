import{S as r,c as a,a as o,b as s}from"./api-1b40d5da.js";const l=({id:e,name:t,number:n})=>`
      <li class="list-item" id="${e}">
      <p>Name: ${t}</p>
      <p>Number: ${n}</p>
      <button class="delete-btn">Delete</button>
      </li>
     `,i=localStorage.getItem(r);i===null&&location.replace("/");a.addEventListener("submit",m);function m(e){e.preventDefault();const{name:t,number:n}=e.currentTarget.elements;o({name:t.value,number:n.value}).then(c=>{s.insertAdjacentHTML("beforeend",l(c)),a.reset()})}
