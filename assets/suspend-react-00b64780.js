function f(t,e,n=(i,r)=>i===r){if(t===e)return!0;if(!t||!e)return!1;const i=t.length;if(e.length!==i)return!1;for(let r=0;r<i;r++)if(!n(t[r],e[r]))return!1;return!0}const o=[];function l(t,e,n=!1,i={}){for(const s of o)if(f(e,s.keys,s.equal)){if(n)return;if(Object.prototype.hasOwnProperty.call(s,"error"))throw s.error;if(Object.prototype.hasOwnProperty.call(s,"response"))return s.response;if(!n)throw s.promise}const r={keys:e,equal:i.equal,promise:t(...e).then(s=>r.response=s).then(()=>{i.lifespan&&i.lifespan>0&&setTimeout(()=>{const s=o.indexOf(r);s!==-1&&o.splice(s,1)},i.lifespan)}).catch(s=>r.error=s)};if(o.push(r),!n)throw r.promise}const u=(t,e,n)=>l(t,e,!1,n),c=(t,e,n)=>void l(t,e,!0,n),p=t=>{if(t===void 0||t.length===0)o.splice(0,o.length);else{const e=o.find(n=>f(t,n.keys,n.equal));if(e){const n=o.indexOf(e);n!==-1&&o.splice(n,1)}}};export{p as c,c as p,u as s};
//# sourceMappingURL=suspend-react-00b64780.js.map