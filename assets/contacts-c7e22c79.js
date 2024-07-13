import{S as o,c as r,b as i,a,d as s,e as d,l as u,g as m}from"./api-6a580a85.js";const c=({id:e,name:t,number:n})=>`
      <li class="list-item" id="${e}">
      <p>Name: ${t}</p>
      <p>Number: ${n}</p>
      <button class="delete-btn">Delete</button>
      </li>
     `,g=localStorage.getItem(o);g===null&&location.replace("/");r.addEventListener("submit",b);i.addEventListener("click",v);a.addEventListener("click",p);function p(e){console.log(e.target.nodeName),e.target.nodeName==="BUTTON"&&s(e.target.parentNode.id).then(()=>e.target.parentNode.remove())}function b(e){e.preventDefault();const{name:t,number:n}=e.currentTarget.elements;d({name:t.value,number:n.value}).then(l=>{a.insertAdjacentHTML("beforeend",c(l)),r.reset()})}function f(){m().then(e=>a.insertAdjacentHTML("beforeend",e.map(c).join("")))}f();function v(){u().then(()=>{localStorage.removeItem(o),location.replace("/")})}
