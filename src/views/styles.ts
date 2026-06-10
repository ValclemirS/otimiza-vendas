export const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,600;12..96,700;12..96,800&family=Hanken+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap');

:root{
  --bg:#0a0d0b; --bg-2:#0e1310; --card:#11160f; --card-2:#141a12;
  --ink:#eef3ea; --muted:#8c958b; --line:rgba(232,255,210,.10);
  --lime:#c6f23f; --lime-2:#a6d61f; --dark:#0a0d0b;
}
*{box-sizing:border-box}
.page{background:var(--bg); color:var(--ink); font-family:'Hanken Grotesk',sans-serif; -webkit-font-smoothing:antialiased; overflow-x:hidden; position:relative; line-height:1.55;}
.font-display{font-family:'Bricolage Grotesque',sans-serif;}
.mono{font-family:'JetBrains Mono',monospace;}
.lime{color:var(--lime);}
.wrap{width:100%; max-width:1140px; margin:0 auto; padding:0 24px;}
.row{display:flex;} .between{justify-content:space-between;} .center{align-items:center;}
.center-text{text-align:center; max-width:680px; margin:0 auto;}
a{color:inherit; text-decoration:none;}
h1,h2,h3{font-family:'Bricolage Grotesque',sans-serif; font-weight:800; letter-spacing:-.02em; line-height:1.04; margin:0;}
s,.total s{color:var(--muted);}

.btn-cta{display:inline-flex; align-items:center; gap:.6em; background:var(--lime); color:var(--dark); font-family:'Bricolage Grotesque',sans-serif; font-weight:800; font-size:1rem; padding:1rem 1.6rem; border-radius:999px; letter-spacing:-.01em; box-shadow:0 0 0 0 rgba(198,242,63,.5); transition:transform .25s cubic-bezier(.2,.8,.2,1), box-shadow .35s ease, background .2s; cursor:pointer; line-height:1;}
.btn-cta:hover{transform:translateY(-2px); background:#d4ff52; box-shadow:0 14px 40px -12px rgba(198,242,63,.7);}
.btn-cta:active{transform:translateY(0);}
.btn-arrow{transition:transform .25s;}
.btn-cta:hover .btn-arrow{transform:translateX(4px);}
.btn-block{display:flex; width:100%; justify-content:center; padding:1.15rem;}
.btn-sm{padding:.6rem 1.1rem; font-size:.85rem;}

.header{position:sticky; top:0; z-index:40; backdrop-filter:blur(14px); background:rgba(10,13,11,.72); border-bottom:1px solid var(--line);}
.header .wrap{height:64px;}
.nav{display:flex; gap:26px; font-size:.82rem; letter-spacing:.02em;}
.nav a{color:var(--muted); transition:color .2s;}
.nav a:hover{color:var(--lime);}

.hero{position:relative; padding:84px 0 64px; overflow:hidden;}
.glow{position:absolute; top:-260px; left:50%; transform:translateX(-50%); width:900px; height:560px; background:radial-gradient(closest-side, rgba(198,242,63,.22), transparent 72%); filter:blur(20px); pointer-events:none;}
.glow.soft{opacity:.5;}
.grid-bg{position:absolute; inset:0; background-image:linear-gradient(var(--line) 1px,transparent 1px),linear-gradient(90deg,var(--line) 1px,transparent 1px); background-size:60px 60px; mask-image:radial-gradient(circle at 50% 28%, #000 0%, transparent 70%); pointer-events:none; opacity:.6;}
.hero-grid{position:relative; display:grid; grid-template-columns:1.05fr .95fr; gap:56px; align-items:center;}
.kicker{display:inline-block; font-family:'JetBrains Mono',monospace; font-size:.72rem; letter-spacing:.18em; color:var(--lime); border:1px solid var(--line); padding:.4rem .7rem; border-radius:999px; background:rgba(198,242,63,.05); margin-bottom:20px;}
.hero h1{font-size:clamp(2.4rem,5vw,3.7rem); margin-bottom:18px;}
.lead{color:#c2cabd; font-size:1.12rem; max-width:520px; margin-bottom:30px;}
.lead strong{color:var(--ink);}
.hero-cta{display:flex; align-items:center; gap:18px; flex-wrap:wrap; margin-bottom:22px;}
.cta-sub{color:var(--muted); font-size:.78rem;}
.gift{display:inline-block; background:rgba(198,242,63,.08); border:1px dashed rgba(198,242,63,.35); color:#e7f3cf; padding:.7rem 1rem; border-radius:14px; font-size:.95rem; margin-bottom:26px;}
.gift strong{color:var(--lime);}
.trust{display:flex; gap:20px; flex-wrap:wrap; color:var(--muted); font-size:.85rem;}

.hero-art{position:relative; min-height:360px;}
.stack-2{position:absolute; right:-10px; bottom:-26px; width:62%; z-index:3;}
.hero-art > .float{width:88%; margin-left:auto; z-index:2; position:relative;}
.hero-badge{position:absolute; top:-10px; left:-6px; z-index:4; background:var(--lime); color:var(--dark); font-weight:700; font-size:.78rem; padding:.5rem .8rem; border-radius:10px; box-shadow:0 10px 30px -10px rgba(198,242,63,.6); transform:rotate(-4deg);}
.float{animation:float 6s ease-in-out infinite;}
.float-2{animation:float 6s ease-in-out infinite; animation-delay:-3s;}
@keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-12px)}}

.win{background:linear-gradient(180deg,#161d13,#10150e); border:1px solid var(--line); border-radius:16px; overflow:hidden; box-shadow:0 30px 60px -28px rgba(0,0,0,.8);}
.win-bar{display:flex; align-items:center; gap:7px; padding:11px 14px; border-bottom:1px solid var(--line); background:rgba(255,255,255,.02);}
.dot{width:10px; height:10px; border-radius:50%; background:#2a3326;}
.lime-dot{background:var(--lime);}
.win-title{margin-left:10px; font-size:.7rem; color:var(--muted); white-space:nowrap; overflow:hidden; text-overflow:ellipsis;}
.win-body{position:relative; width:100%;}
.win-img{position:absolute; inset:0; width:100%; height:100%; object-fit:cover;}
.win-img-wrap{position:absolute; inset:0; overflow:hidden;}
.win-img-wrap .win-img{position:absolute; inset:0;}
.win-img-clickable{cursor:zoom-in;}
.win-img-clickable:hover .win-img{opacity:.88;}
.win-img-clickable .win-img{transition:opacity .2s;}
.win-gallery-badge{position:absolute; bottom:10px; right:10px; background:rgba(0,0,0,.65); color:#fff; font-size:.65rem; letter-spacing:.06em; padding:.25rem .55rem; border-radius:999px; backdrop-filter:blur(6px); border:1px solid rgba(255,255,255,.15);}

.lightbox-overlay{position:fixed; inset:0; z-index:9999; background:rgba(0,0,0,.92); display:flex; flex-direction:column; align-items:center; justify-content:center; gap:18px; padding:24px; animation:lb-in .18s ease;}
@keyframes lb-in{from{opacity:0}to{opacity:1}}
.lightbox-inner{position:relative; display:flex; align-items:center; gap:12px;}
.lightbox-img{max-width:80vw; max-height:72vh; object-fit:contain; border-radius:12px; box-shadow:0 40px 100px -20px rgba(0,0,0,.9); display:block;}
.lightbox-close{position:fixed; top:20px; right:24px; background:rgba(255,255,255,.12); border:1px solid rgba(255,255,255,.2); color:#fff; width:40px; height:40px; border-radius:50%; font-size:1.1rem; cursor:pointer; display:flex; align-items:center; justify-content:center; transition:background .2s; z-index:1;}
.lightbox-close:hover{background:rgba(255,255,255,.22);}
.lightbox-nav{background:rgba(255,255,255,.1); border:1px solid rgba(255,255,255,.18); color:#fff; width:44px; height:44px; border-radius:50%; font-size:1.8rem; cursor:pointer; display:flex; align-items:center; justify-content:center; transition:background .2s; flex-shrink:0; line-height:1;}
.lightbox-nav:hover{background:rgba(255,255,255,.22);}
.lightbox-thumbs{display:flex; gap:8px; flex-wrap:wrap; justify-content:center; max-width:80vw;}
.lightbox-thumb{width:64px; height:48px; border-radius:8px; overflow:hidden; border:2px solid rgba(255,255,255,.15); cursor:pointer; padding:0; background:none; transition:border-color .2s; flex-shrink:0;}
.lightbox-thumb.active{border-color:var(--lime);}
.lightbox-thumb img{width:100%; height:100%; object-fit:cover; display:block;}
.lightbox-counter{font-family:'JetBrains Mono',monospace; font-size:.75rem; color:rgba(255,255,255,.45);}
.slot{position:absolute; inset:0; display:flex; align-items:center; justify-content:center; background:#0c1109;}
.sheet-grid{background-image:linear-gradient(rgba(255,255,255,.045) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.045) 1px,transparent 1px); background-size:30px 24px;}
.slot-inner{text-align:center; color:var(--muted);}
.slot-icon{font-size:2.2rem; color:rgba(198,242,63,.55); line-height:1;}
.slot-text{margin-top:10px; font-size:.82rem; line-height:1.35;}
.slot-hint{margin-top:8px; font-size:.66rem; color:rgba(198,242,63,.5); border:1px solid var(--line); display:inline-block; padding:.2rem .5rem; border-radius:6px;}

.bonus-strip{background:var(--lime); color:var(--dark); margin-top:8px;}
.bonus-strip-in{gap:18px; padding:16px 0; flex-wrap:wrap; justify-content:center; text-align:center;}
.bonus-strip p{font-weight:600; font-size:1.02rem; margin:0;}
.bonus-strip .lime{color:var(--dark); text-decoration:underline; text-underline-offset:3px;}
.bs-tag{background:var(--dark); color:var(--lime); font-size:.7rem; letter-spacing:.12em; padding:.35rem .65rem; border-radius:999px;}

section{padding:80px 0;}
h2{font-size:clamp(1.9rem,4vw,2.7rem);}
.section-lead{color:#b8c1ad; font-size:1.08rem; margin-top:14px;}
.kicker + h2{margin-top:4px;}

.pain h2{margin-top:6px;}
.pain-grid{display:grid; grid-template-columns:repeat(4,1fr); gap:18px; margin-top:40px;}
.pain-card{background:var(--card); border:1px solid var(--line); border-radius:18px; padding:24px; transition:transform .3s, border-color .3s;}
.pain-card:hover{transform:translateY(-4px); border-color:rgba(198,242,63,.3);}
.pain-ic{font-size:1.6rem;}
.pain-card h3{font-size:1.05rem; margin:14px 0 8px;}
.pain-card p{color:var(--muted); font-size:.92rem; margin:0;}

.cards{display:grid; grid-template-columns:repeat(3,1fr); gap:22px; margin-top:46px;}
.card{background:var(--card); border:1px solid var(--line); border-radius:20px; overflow:hidden; transition:transform .3s, border-color .3s, box-shadow .3s;}
.card:hover{transform:translateY(-6px); border-color:rgba(198,242,63,.32); box-shadow:0 30px 60px -34px rgba(198,242,63,.25);}
.card .win{border:none; border-radius:0; box-shadow:none; border-bottom:1px solid var(--line);}
.card-body{padding:22px;}
.card-top{display:flex; align-items:center; justify-content:space-between; margin-bottom:12px;}
.num{font-size:1.4rem; font-weight:700; color:rgba(198,242,63,.55);}
.tag{font-size:.66rem; letter-spacing:.08em; color:var(--lime); background:rgba(198,242,63,.08); border:1px solid var(--line); padding:.28rem .55rem; border-radius:999px; text-transform:uppercase;}
.card-body h3{font-size:1.18rem; margin-bottom:10px;}
.card-body p{color:var(--muted); font-size:.93rem; margin:0;}

.bonus{background:var(--bg-2); border-top:1px solid var(--line); border-bottom:1px solid var(--line);}
.ebooks{display:grid; grid-template-columns:1fr 1fr; gap:26px; margin-top:46px;}
.ebook{display:flex; gap:22px; background:var(--card); border:1px solid var(--line); border-radius:20px; padding:22px; align-items:center; transition:transform .3s, border-color .3s;}
.ebook:hover{transform:translateY(-4px); border-color:rgba(198,242,63,.32);}
.ebook-cover{position:relative; width:150px; flex:0 0 150px;}
.ebook-cover .win{box-shadow:0 20px 40px -22px rgba(0,0,0,.8);}
.free-flag{position:absolute; top:-10px; right:-10px; background:var(--lime); color:var(--dark); font-weight:700; font-size:.66rem; letter-spacing:.08em; padding:.3rem .55rem; border-radius:8px; transform:rotate(8deg); box-shadow:0 8px 18px -8px rgba(198,242,63,.7);}
.value-old{font-size:.74rem; color:var(--muted); text-decoration:line-through;}
.ebook-body h3{font-size:1.22rem; margin:6px 0 2px;}
.ebook-sub{color:var(--lime); font-size:.84rem; font-weight:600;}
.ebook-body p{color:var(--muted); font-size:.9rem; margin:10px 0 0;}

.offer{position:relative; overflow:hidden;}
.offer-grid{position:relative; display:grid; grid-template-columns:1fr 420px; gap:48px; align-items:center;}
.offer-list h2{margin:6px 0 22px;}
.stack{list-style:none; padding:0; margin:0; display:flex; flex-direction:column; gap:2px;}
.stack li{display:flex; align-items:center; gap:12px; padding:14px 0; border-bottom:1px dashed var(--line);}
.check{color:var(--lime); font-weight:700;}
.stk-label{flex:1; font-size:1rem; display:flex; align-items:center; gap:10px;}
.bonus-pill{font-style:normal; font-size:.6rem; letter-spacing:.1em; background:rgba(198,242,63,.12); color:var(--lime); padding:.2rem .45rem; border-radius:6px; border:1px solid var(--line);}
.stk-val{color:var(--muted); font-size:.92rem;}
.stk-val.free{color:var(--lime);}
.total{margin-top:18px; font-size:.95rem; color:var(--muted);}

.price-card{background:linear-gradient(180deg,#151c11,#0e120c); border:1px solid rgba(198,242,63,.28); border-radius:24px; padding:34px 30px; text-align:center; box-shadow:0 40px 90px -40px rgba(198,242,63,.3); position:relative;}
.pc-tag{position:absolute; top:-13px; left:50%; transform:translateX(-50%); background:var(--lime); color:var(--dark); font-size:.66rem; letter-spacing:.12em; font-weight:700; padding:.4rem .9rem; border-radius:999px; white-space:nowrap;}
.pc-from{color:var(--muted); font-size:.82rem; margin:8px 0 4px;}
.pc-now{display:flex; align-items:flex-start; justify-content:center; gap:6px; line-height:1;}
.pc-now .cur{font-family:'Bricolage Grotesque',sans-serif; font-weight:800; font-size:1.6rem; margin-top:10px;}
.pc-now .big{font-family:'Bricolage Grotesque',sans-serif; font-weight:800; font-size:5rem; color:var(--lime); letter-spacing:-.03em;}
.pc-inst{color:var(--ink); font-size:.9rem; margin:6px 0 2px;}
.pc-pix{color:var(--muted); font-size:.82rem; margin:0 0 22px;}
.pc-btn{margin-bottom:18px;}
.pc-perks{list-style:none; padding:0; margin:0 0 18px; text-align:left; display:grid; gap:9px; font-size:.86rem; color:#cdd6c4;}
.pc-pay{color:var(--muted); font-size:.72rem; border-top:1px solid var(--line); padding-top:16px;}

.guarantee{display:flex; gap:40px; align-items:center; background:var(--card); border:1px solid var(--line); border-radius:26px; padding:44px; flex-wrap:wrap;}
.seal{flex:0 0 130px; width:130px; height:130px; border-radius:50%; border:2px dashed var(--lime); display:flex; flex-direction:column; align-items:center; justify-content:center; background:rgba(198,242,63,.06);}
.seal-n{font-size:2.6rem; font-weight:700; color:var(--lime); line-height:1;}
.seal-d{font-size:.78rem; letter-spacing:.18em; color:var(--lime);}
.guarantee-copy{flex:1; min-width:280px;}
.guarantee-copy h2{margin:6px 0 12px; font-size:clamp(1.6rem,3vw,2.1rem);}
.guarantee-copy p{color:#c0c9ba; margin:0;}

.reviews-grid{display:grid; grid-template-columns:repeat(3,1fr); gap:22px; margin-top:46px;}
.review{background:var(--card); border:1px solid var(--line); border-radius:20px; padding:26px; margin:0; transition:transform .3s, border-color .3s;}
.review:hover{transform:translateY(-4px); border-color:rgba(198,242,63,.3);}
.stars{color:var(--lime); letter-spacing:2px; margin-bottom:14px;}
.review blockquote{margin:0 0 18px; font-size:1rem; color:#dfe6d6; line-height:1.5;}
.review figcaption{display:flex; flex-direction:column; gap:2px;}
.r-author{font-weight:700; font-family:'Bricolage Grotesque',sans-serif;}
.r-role{font-size:.74rem; color:var(--muted);}

.faq-list{margin-top:40px; max-width:760px; margin-left:auto; margin-right:auto;}
.faq{border:1px solid var(--line); border-radius:14px; margin-bottom:12px; overflow:hidden; background:var(--card); transition:border-color .3s;}
.faq.open{border-color:rgba(198,242,63,.32);}
.faq-q{width:100%; background:none; border:none; color:var(--ink); font-family:'Bricolage Grotesque',sans-serif; font-weight:600; font-size:1.02rem; text-align:left; padding:20px 22px; display:flex; justify-content:space-between; align-items:center; gap:16px; cursor:pointer;}
.faq-ico{color:var(--lime); font-size:1.4rem; flex:0 0 auto;}
.faq-a{max-height:0; overflow:hidden; transition:max-height .35s ease;}
.faq.open .faq-a{max-height:200px;}
.faq-a p{margin:0; padding:0 22px 22px; color:var(--muted); font-size:.95rem;}

.final{position:relative; text-align:center; overflow:hidden; border-top:1px solid var(--line);}
.final h2{font-size:clamp(2.1rem,4.5vw,3.2rem); margin:6px 0 16px;}
.final-lead{color:#c2cabd; font-size:1.12rem; margin:0 auto 30px; max-width:520px;}
.final .btn-cta{font-size:1.05rem;}
.final .cta-sub{display:block; margin-top:16px;}

.footer{border-top:1px solid var(--line); padding:48px 0 110px; text-align:center;}
.foot-note{color:var(--muted); font-size:.85rem; max-width:560px; margin:16px auto 0;}
.foot-copy{color:#5d655a; font-size:.74rem; margin-top:14px;}

.cta-bar{position:fixed; bottom:0; left:0; right:0; z-index:50; display:none; align-items:center; justify-content:space-between; gap:14px; padding:12px 18px; background:rgba(10,13,11,.92); backdrop-filter:blur(14px); border-top:1px solid var(--line);}
.bar-price{display:flex; flex-direction:column; line-height:1.1;}
.bp-old{font-size:.7rem; color:var(--muted); text-decoration:line-through;}
.bp-now{font-size:1.3rem; font-weight:700; color:var(--lime);}
.bar-btn{padding:.85rem 1.3rem; font-size:.92rem;}

.reveal{opacity:0; transform:translateY(20px); transition:opacity .7s ease, transform .7s cubic-bezier(.2,.7,.2,1);}
.reveal.in{opacity:1; transform:none;}
.fade{opacity:0; transform:translateY(16px); animation:fadeUp .7s cubic-bezier(.2,.7,.2,1) forwards;}
@keyframes fadeUp{to{opacity:1; transform:none;}}

@media (prefers-reduced-motion: reduce){
  .reveal,.fade{opacity:1!important; transform:none!important; animation:none!important; transition:none!important;}
  .float,.float-2{animation:none!important;}
}

@media (max-width:920px){
  .hero-grid{grid-template-columns:1fr; gap:48px;}
  .hero-art{min-height:320px; margin-top:10px;}
  .offer-grid{grid-template-columns:1fr; gap:36px;}
  .price-card{max-width:440px; margin:0 auto;}
  .pain-grid{grid-template-columns:repeat(2,1fr);}
  .cards{grid-template-columns:repeat(2,1fr);}
  .reviews-grid{grid-template-columns:1fr;}
  .ebooks{grid-template-columns:1fr;}
}
@media (max-width:620px){
  .nav{display:none;}
  section{padding:60px 0;}
  .hero{padding:56px 0 48px;}
  .cards{grid-template-columns:1fr;}
  .pain-grid{grid-template-columns:1fr;}
  .ebook{flex-direction:column; text-align:center;}
  .ebook-cover{width:130px; flex-basis:130px;}
  .guarantee{padding:30px; justify-content:center; text-align:center;}
  .trust{gap:14px; font-size:.8rem;}
  .cta-bar{display:flex;}
  .header .btn-sm{display:none;}
}
`;
