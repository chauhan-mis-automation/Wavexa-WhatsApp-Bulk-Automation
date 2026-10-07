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
  const IMG=`<svg class="poster" viewBox="0 0 240 140"><defs><linearGradient id="pg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#0E6B5C"/><stop offset="1" stop-color="#052E2A"/></linearGradient><linearGradient id="pg2" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FF7A45"/><stop offset="1" stop-color="#FFB27A"/></linearGradient></defs><rect width="240" height="140" fill="url(#pg)"/><circle cx="200" cy="30" r="52" fill="#25D366" opacity=".25"/><circle cx="30" cy="130" r="60" fill="#FF7A45" opacity=".22"/><rect x="132" y="22" width="76" height="104" rx="12" fill="#0b1512"/><rect x="137" y="30" width="66" height="88" rx="8" fill="#E4EDE6"/><rect x="143" y="40" width="42" height="14" rx="5" fill="#fff"/><rect x="156" y="60" width="41" height="14" rx="5" fill="#D9FDD3"/><rect x="143" y="80" width="46" height="14" rx="5" fill="#fff"/><circle cx="190" cy="104" r="8" fill="#25D366"/><text x="16" y="52" fill="#fff" font-family="Arial" font-weight="700" font-size="17">WhatsApp</text><text x="16" y="72" fill="#fff" font-family="Arial" font-weight="700" font-size="17">Automation</text><rect x="16" y="86" width="80" height="22" rx="11" fill="url(#pg2)"/><text x="30" y="101" fill="#fff" font-family="Arial" font-weight="700" font-size="11">Wavexa CRM</text></svg>`;
  do{
    while(!visible)await sleep(500);
    chat.innerHTML='';fill.style.transition='none';run(reduce?1:6000);
    await typing(800);
    add('m','Hi Priya 👋 Welcome to <b>Chauhan MIS Automation Service</b>.');await sleep(1000);
    add('m media',IMG+'<p>Automate your WhatsApp communication 🚀</p>');await sleep(1500);
    add('m media','<div class="file"><span class="pdf">PDF</span><div><b>Wavexa-CRM-Brochure.pdf</b><small>12 pages • 2.4 MB</small></div></div>');await sleep(1400);
    add('m media','<div class="vid"><span class="play"></span><em>0:45</em></div><p>Watch the product demo</p>');await sleep(1600);
    add('m','Want a free demo?<button>Book a free demo</button><button>Not now</button>');await sleep(1500);
    const o=add('m o','Book a free demo<span class="tk">✓✓</span>');await sleep(700);o.querySelector('.tk').classList.add('r');await sleep(600);
    await typing(900);add('m','Done! Our team will call you shortly. 📞');await sleep(1500);
    add('tag','Automated follow-up after 2 days');await sleep(800);
    await typing(900);add('m','Hi Priya, shall we schedule your demo for tomorrow?');
    await sleep(4000);
  }while(!reduce);
}
demo();
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.15});
document.querySelectorAll('.fcol,.plans article,.chips span,.why>*').forEach((el,i)=>{el.classList.add('rv');el.style.transitionDelay=(i%4)*90+'ms';io.observe(el)});
document.querySelectorAll('[data-plan]').forEach(a=>a.addEventListener('click',()=>{const m=$('textarea[name=message]');m.value='I am interested in: '+a.dataset.plan+'. '}));
const f=$('#leadForm'),st=$('#status'),b=$('#send');
f.addEventListener('submit',async e=>{e.preventDefault();
  if(f.website.value)return;
  st.className='';st.textContent='';b.disabled=true;b.textContent='Sending...';
  const v=n=>f[n].value.trim(),plan=v('plan');
  const payload={name:v('name'),phone:v('phone'),email:v('email'),service:'WhatsApp Bulk Automation (Wavexa CRM)',
    message:'[Service option: '+plan+'] '+v('message')};
  try{await fetch(SHEET,{method:'POST',mode:'no-cors',headers:{'Content-Type':'text/plain'},body:JSON.stringify(payload)});
    st.className='ok';st.textContent='✓ Thank you! Your message has been sent.';f.reset();location.href='thank-you.html';
  }catch(err){st.className='err';st.textContent='Unable to send your message. Please try again or contact us on WhatsApp.';}
  finally{b.disabled=false;b.textContent='Send message'}
});
