// Edit daftar ini saja saat menambah foto.
const photos=[
"foto1.jpg",
"foto2.jpg",
"foto3.jpg",
"foto4.jpg",
"foto5.jpg",
"foto6.jpg",
"foto7.jpg",
"foto8.jpg",
"foto9.jpg",
"foto10.jpg",
"foto11.jpg",
"foto12.jpg",
"foto13.jpg",
"foto14.jpg",
"foto15.jpg",
"foto16.jpg",
"foto17.jpg",
"foto18.jpg",
"foto19.jpg",
"foto20.jpg",
"foto21.jpg",
"foto22.jpg",
"foto23.jpg",
"foto24.jpg",
"foto25.jpg",
"foto26.jpg",
"foto27.jpg",
"foto28.jpg",
"foto29.jpg",
"foto30.jpg",
"foto31.jpg",
"foto32.jpg",
"foto33.jpg",
"foto34.jpg",
"foto35.jpg",
"foto36.jpg",
"foto37.jpg",
"foto38.jpg"
];
const perPage=7;let page=0;
const g=document.getElementById('gallery');
function render(){
 g.innerHTML='';
 const max=Math.ceil(photos.length/perPage);
 document.getElementById('info').textContent=`${page+1}/${max}`;
 photos.slice(page*perPage,page*perPage+perPage).forEach(src=>{
  const i=document.createElement('img');i.src=src;i.className='photo';g.appendChild(i);
 });
}
document.getElementById('openBtn').onclick=()=>{cover.classList.add('hidden');viewer.classList.remove('hidden');render();};
prev.onclick=()=>{if(page>0){page--;render();}};
next.onclick=()=>{if((page+1)*perPage<photos.length){page++;render();}};
setInterval(()=>{let h=document.createElement('div');h.className='heart';h.textContent='❤️';h.style.left=Math.random()*100+'vw';h.style.top=Math.random()*100+'vh';document.body.appendChild(h);setTimeout(()=>h.remove(),6000)},250);
