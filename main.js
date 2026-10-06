document.querySelectorAll('.fab').forEach(a=>a.insertAdjacentHTML('afterbegin','<svg><use href="#i-wa"/></svg>'));
const SHEET="https://script.google.com/macros/s/AKfycbycI_jfWFjo3vPZ0o32DUzrZHV6sLj49thJYHDND7nLixyV3ofbt-W2-9GIaGFMd4pC/exec";
const $=s=>document.querySelector(s),sleep=ms=>new Promise(r=>setTimeout(r,ms));
const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
const chat=$('#chat'),fill=$('#fill'),count=$('#count');let visible=true;
new IntersectionObserver(e=>visible=e[0].isIntersecting).observe($('.stage'));
function add(cls,html){const d=document.createElement('div');d.className=cls;d.innerHTML=html;chat.appendChild(d);return d}
async function typing(ms){if(reduce)return;const t=add('m typing','<i></i><i></i><i></i>');await sleep(ms);t.remove()}
function run(n){const s=performance.now();(function f(t){const p=Math.min((t-s)/n,1);fill.style.width=p*100+'%';count.textContent=Math.round(p*1248).toLocaleString('en-IN');if(p<1)requestAnimationFrame(f)})(s)}
async function demo(){
  do{
    while(!visible)await sleep(500);
    chat.innerHTML='';fill.style.transition='none';run(reduce?1:5000);
    await typing(900);
    add('m','Hi Priya 👋 Our new 2BHK launches this weekend. Want the brochure and site-visit slots?<button>Yes, send details</button><button>Not now</button>');await sleep(1500);
    const o=add('m o','Yes, send details<span class="tk">✓✓</span>');await sleep(700);o.querySelector('.tk').classList.add('r');await sleep(600);
    await typing(1000);add('m','Sent! 📄 Brochure attached. Pick a slot: Sat 11 AM or Sun 4 PM.');await sleep(1800);
    add('tag','Automated follow-up after 2 days');await sleep(900);
    await typing(1000);add('m','Hi Priya, Sunday slots are filling up. Shall I reserve one for you?');
    await sleep(4500);
  }while(!reduce);
}
demo();
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.15});
document.querySelectorAll('.fcol,.plans article,.chips span,.why>*').forEach((el,i)=>{el.classList.add('rv');el.style.transitionDelay=(i%4)*90+'ms';io.observe(el)});
document.querySelectorAll('[data-plan]').forEach(a=>a.addEventListener('click',()=>{$('select[name=plan]').value=a.dataset.plan}));
const f=$('#leadForm'),st=$('#status'),b=$('#send');
f.addEventListener('submit',async e=>{e.preventDefault();
  if(f.website.value)return;
  st.className='';st.textContent='';b.disabled=true;b.textContent='Sending...';
  const v=n=>f[n].value.trim(),plan=v('plan');
  const payload={name:v('name'),phone:v('phone'),email:v('email'),service:'WhatsApp Bulk Automation (Wavexa CRM)',
    message:(plan?'[Plan interest: '+plan+'] ':'')+v('message')};
  try{await fetch(SHEET,{method:'POST',mode:'no-cors',headers:{'Content-Type':'text/plain'},body:JSON.stringify(payload)});
    st.className='ok';st.textContent='✓ Thank you! Your message has been sent.';f.reset();location.href='thank-you.html';
  }catch(err){st.className='err';st.textContent='Unable to send your message. Please try again or contact us on WhatsApp.';}
  finally{b.disabled=false;b.textContent='Send message'}
});
