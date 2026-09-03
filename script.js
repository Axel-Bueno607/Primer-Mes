
const pantallas=[...document.querySelectorAll('.pantalla')];
let finalConstruido=false;
function mostrar(id){
  pantallas.forEach(p=>p.classList.remove('activa'));
  const d=document.getElementById(id); if(!d)return;
  d.classList.add('activa'); window.scrollTo({top:0,behavior:'smooth'});
  if(id==='final'&&!finalConstruido){finalConstruido=true;setTimeout(construirRamo,450);lluvia(28);}
}
document.querySelectorAll('.avanzar').forEach(b=>b.addEventListener('click',()=>mostrar(b.dataset.next)));
document.getElementById('repetir').addEventListener('click',()=>{finalConstruido=false;document.querySelectorAll('#bouquet .build-item').forEach(e=>e.classList.remove('show'));document.getElementById('bouquet').classList.remove('sway');mostrar('inicio')});
function construirRamo(){
 const q=s=>document.querySelector('#bouquet '+s);
 const seq=[['.back',0],['.s1',220],['.s2',350],['.s3',480],['.s4',610],['.s5',740],['.l1',850],['.l2',970],['.l3',1090],['.l4',1210],['.f1',1450],['.f2',1680],['.f3',1910],['.f4',2140],['.f5',2370],['.front',2600],['.bow',2820]];
 seq.forEach(([s,t])=>setTimeout(()=>{const e=q(s);if(e){e.classList.add('show');e.animate([{opacity:0,transform:getComputedStyle(e).transform+' scale(.72)'},{opacity:1,transform:getComputedStyle(e).transform+' scale(1.05)',offset:.75},{opacity:1,transform:getComputedStyle(e).transform+' scale(1)'}],{duration:700,easing:'cubic-bezier(.2,.8,.2,1)'})}},t));
 setTimeout(()=>document.getElementById('bouquet').classList.add('sway'),3500);
}
function petalo(intenso=false){
 const p=document.createElement('i');p.className='petal';const s=8+Math.random()*11;p.style.width=s+'px';p.style.height=s*1.5+'px';p.style.left=Math.random()*100+'%';p.style.setProperty('--x',(-100+Math.random()*200)+'px');p.style.setProperty('--d',(intenso?4+Math.random()*3:7+Math.random()*6)+'s');document.getElementById('petalos').appendChild(p);p.addEventListener('animationend',()=>p.remove(),{once:true});
}
function lluvia(n){for(let i=0;i<n;i++)setTimeout(()=>petalo(true),i*100)}
setInterval(()=>petalo(false),1500);
