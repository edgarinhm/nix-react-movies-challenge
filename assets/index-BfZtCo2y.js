import{G as l,j as t,a as n,r as c}from"./index-BOXzzD6R.js";import{u as d}from"./movie-storage-Dp5ogrMw.js";function o(a){return l({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"},child:[]}]})(a)}const h=a=>(a??0)/10,x=({rating:a})=>{const i=h(a??0);return t.jsx("span",{className:"stars-rating-container",children:Array.from({length:5}).map((s,e)=>{const r=(e+1)/5<=i;return t.jsx(o,{className:"star-rating",fill:r?"gold":"#D6DBDF","data-testid":`star-${r?"fill":"empty"}`},`${a}-star-icon-${e}-${s}`)})})},p=()=>{const a=n(),{movies:i}=d(),s=c.useMemo(()=>i.find(r=>r.id===(a==null?void 0:a.id)),[a==null?void 0:a.id]),e=new Date(s==null?void 0:s.released_on);return t.jsxs("div",{className:"movie-datail-card",children:[t.jsx("div",{className:"movie-poster",children:t.jsx("img",{loading:"lazy",src:s==null?void 0:s.poster,alt:`poster ${s==null?void 0:s.title}`})}),t.jsxs("div",{className:"movie-details",children:[t.jsxs("div",{className:"movie-title-group",children:[t.jsxs("div",{className:"movie-title",children:[t.jsx("h2",{children:s==null?void 0:s.title})," ",s==null?void 0:s.classification]}),t.jsx(x,{rating:s==null?void 0:s.imdb_rating})]}),t.jsxs("div",{children:[t.jsxs("span",{children:["year ",e.getFullYear()]})," | ",t.jsxs("span",{children:["length "," ",s==null?void 0:s.length]})," | ",t.jsxs("span",{children:["director ",s==null?void 0:s.director]})]}),t.jsxs("div",{children:[t.jsxs("span",{children:["cast:"," "]}),s==null?void 0:s.cast.join(", ")]}),t.jsxs("div",{className:"movie-description",children:["Movie Description ",s==null?void 0:s.overview]})]})]})};export{p as default};
