export function renderPortfolio({ portraitSrc }) {
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="Jiwoo Lee — business, research, marketing, and AI-enabled project portfolio.">
  <title>Jiwoo Lee | Portfolio</title>
  <style>
    :root{
      --midnight:#15233f;--navy:#1c335d;--cobalt:#225eaa;--gold:#e4b34e;
      --ivory:#f5f2ea;--paper:#fffefa;--mist:#e8edf3;--sage:#aab8b2;
      --muted:#647086;--line:rgba(21,35,63,.16);--shadow:0 28px 80px rgba(21,35,63,.13);
      --serif:"Iowan Old Style","Palatino Linotype","Book Antiqua",Georgia,serif;
      --sans:Aptos,Inter,"Pretendard","Noto Sans KR",Arial,sans-serif;
      --mono:"SFMono-Regular",Consolas,"Liberation Mono",monospace;
    }
    *{box-sizing:border-box}
    html{scroll-behavior:smooth;scroll-padding-top:92px}
    body{margin:0;background:var(--ivory);color:var(--midnight);font-family:var(--sans);line-height:1.65}
    a{color:inherit;text-decoration:none}button{font:inherit}
    :focus-visible{outline:3px solid var(--gold);outline-offset:4px}
    .shell{width:min(1180px,calc(100% - 48px));margin:auto}
    .site-header{position:sticky;top:0;z-index:20;display:grid;grid-template-columns:auto 1fr auto;align-items:center;gap:34px;min-height:76px;padding:0 max(24px,calc((100vw - 1180px)/2));border-bottom:1px solid var(--line);background:rgba(245,242,234,.92);backdrop-filter:blur(16px)}
    .brand{display:grid;place-items:center;width:42px;height:42px;border-radius:50%;background:var(--midnight);color:#fff;font:700 14px var(--mono);letter-spacing:.08em}
    nav{display:flex;justify-content:center;gap:30px;font-size:13px;font-weight:700;color:#4f5d74}
    nav a{position:relative;padding:26px 0}
    nav a::after{content:"";position:absolute;right:0;bottom:19px;left:0;height:2px;background:var(--cobalt);transform:scaleX(0);transform-origin:left;transition:transform .22s ease}
    nav a:hover::after{transform:scaleX(1)}
    .lang-switch{border:1px solid var(--midnight);border-radius:99px;padding:8px 13px;background:transparent;color:var(--midnight);font-size:12px;font-weight:800;cursor:pointer}
    .hero{min-height:710px;display:grid;grid-template-columns:minmax(0,1.08fr) minmax(360px,.72fr);align-items:center;gap:72px;padding:86px 0 76px}
    .eyebrow{margin:0 0 20px;color:var(--cobalt);font:800 12px var(--mono);letter-spacing:.16em;text-transform:uppercase}
    h1{max-width:720px;margin:0;font:600 clamp(58px,7.4vw,106px)/.9 var(--serif);letter-spacing:-.065em}
    h1 em{color:var(--cobalt);font-style:italic;font-weight:500}
    .hero-copy{max-width:650px;margin:30px 0 0;color:#556278;font-size:18px;line-height:1.75}
    .cta-row{display:flex;flex-wrap:wrap;gap:12px;margin-top:34px}
    .cta{display:inline-flex;align-items:center;justify-content:center;min-height:48px;border:1px solid var(--midnight);border-radius:99px;padding:0 20px;font-size:13px;font-weight:800;transition:transform .18s ease,box-shadow .18s ease,background .18s ease}
    .cta-primary{background:var(--midnight);color:#fff}.cta-secondary{background:var(--paper)}
    .cta:hover{transform:translateY(-2px);box-shadow:0 10px 24px rgba(21,35,63,.14)}
    .hero-meta{display:flex;flex-wrap:wrap;gap:22px;margin-top:34px;padding-top:24px;border-top:1px solid var(--line);color:var(--muted);font-size:13px}
    .hero-meta strong{color:var(--midnight)}
    .portrait-stage{position:relative;min-height:540px}
    .portrait-frame{position:absolute;right:0;bottom:0;width:min(86%,390px);height:500px;overflow:hidden;border-radius:180px 180px 22px 22px;background:var(--mist);box-shadow:var(--shadow)}
    .portrait-frame::after{content:"";position:absolute;inset:0;border:1px solid rgba(255,255,255,.48);border-radius:inherit;pointer-events:none}
    .portrait{width:100%;height:100%;display:block;object-fit:cover;object-position:center 22%}
    .work-spine{position:absolute;left:0;top:38px;width:132px;border-radius:18px;background:var(--cobalt);color:#fff;box-shadow:0 18px 44px rgba(34,94,170,.26)}
    .work-spine span{display:block;padding:18px 16px;border-bottom:1px solid rgba(255,255,255,.2);font:800 11px var(--mono);letter-spacing:.12em}
    .work-spine span:last-child{border:0;color:var(--gold)}
    .portrait-caption{position:absolute;right:18px;bottom:18px;padding:10px 13px;border-radius:12px;background:rgba(255,254,250,.92);font:700 11px var(--mono);letter-spacing:.08em}
    .skill-rail{border-block:1px solid var(--line);background:rgba(255,254,250,.45)}
    .skill-rail .shell{display:flex;justify-content:space-between;gap:20px;overflow:auto;padding-block:17px;color:#546176;font:800 11px var(--mono);letter-spacing:.12em;white-space:nowrap}
    .skill-rail b{color:var(--gold)}
    .section{padding:112px 0;border-bottom:1px solid var(--line)}
    .section-head{display:grid;grid-template-columns:190px 1fr;gap:40px;margin-bottom:50px}
    .section-kicker{margin:7px 0 0;color:var(--cobalt);font:800 11px var(--mono);letter-spacing:.15em;text-transform:uppercase}
    h2{max-width:760px;margin:0;font:600 clamp(42px,5vw,66px)/1 var(--serif);letter-spacing:-.045em}
    .timeline{display:grid;gap:0;margin-left:230px;border-left:1px solid var(--line)}
    .timeline-item{position:relative;display:grid;grid-template-columns:150px 1fr;gap:34px;padding:0 0 50px 38px}
    .timeline-item:last-child{padding-bottom:0}
    .timeline-item::before{content:"";position:absolute;left:-6px;top:8px;width:11px;height:11px;border-radius:50%;background:var(--gold);box-shadow:0 0 0 6px var(--ivory)}
    .date{color:var(--cobalt);font:800 11px/1.5 var(--mono);letter-spacing:.06em;text-transform:uppercase}
    .timeline h3,.activity h3{margin:0;font:700 20px/1.3 var(--sans)}
    .org{margin:4px 0 9px;color:#45536b;font-size:14px;font-weight:700}
    .timeline p,.activity p{margin:0;color:var(--muted);font-size:15px}
    .projects-section{background:var(--midnight);color:#fff}
    .projects-section .section-kicker{color:var(--gold)}
    .project-grid{display:grid;grid-template-columns:1.32fr .68fr;grid-template-rows:1fr 1fr;gap:16px}
    .project-card{position:relative;min-height:245px;display:flex;flex-direction:column;overflow:hidden;border:1px solid rgba(255,255,255,.15);border-radius:24px;padding:30px;background:#1d2c4b}
    .project-card:first-child{grid-row:1/3;min-height:506px;background:linear-gradient(145deg,#285d9d 0%,#1b3157 68%,#15233f 100%)}
    .project-card::after{content:"";position:absolute;right:-50px;bottom:-80px;width:220px;height:220px;border:1px solid rgba(255,255,255,.15);border-radius:50%}
    .project-card:first-child::before{content:"A+";position:absolute;right:22px;top:-20px;color:rgba(255,255,255,.08);font:700 170px/1 var(--serif)}
    .project-label{position:relative;z-index:1;color:var(--gold);font:800 10px var(--mono);letter-spacing:.13em;text-transform:uppercase}
    .project-card h3{position:relative;z-index:1;max-width:520px;margin:auto 0 12px;font:600 30px/1.06 var(--serif);letter-spacing:-.025em}
    .project-card:first-child h3{font-size:clamp(42px,5vw,64px)}
    .project-card p{position:relative;z-index:1;max-width:560px;margin:0;color:#c8d2e2;font-size:14px}
    .project-link{position:relative;z-index:1;display:inline-flex;align-items:center;gap:8px;margin-top:22px;color:#fff;font-size:13px;font-weight:800}
    .project-link::after{content:"↗";color:var(--gold)}
    .activity-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
    .activity{min-height:230px;display:flex;flex-direction:column;border:1px solid var(--line);border-radius:22px;padding:24px;background:var(--paper)}
    .activity .date{margin-bottom:40px}.activity p{margin-top:auto}
    .credential-strip{display:grid;grid-template-columns:1.2fr repeat(3,1fr);margin-top:54px;border:1px solid var(--line);border-radius:22px;background:var(--paper);overflow:hidden}
    .credential-intro,.credential{padding:24px}
    .credential-intro{background:var(--cobalt);color:#fff}
    .credential-intro p{margin:0;color:#dce7f4;font-size:14px}
    .credential{border-left:1px solid var(--line)}
    .credential strong{display:block;font:600 25px var(--serif)}
    .credential span{color:var(--muted);font-size:12px}
    footer{display:flex;justify-content:space-between;gap:24px;padding:34px 0 48px;color:var(--muted);font-size:12px}
    .ko{display:none}
    body.korean .en{display:none}body.korean .ko{display:inline}
    body.korean .block.ko{display:block}
    @media(max-width:900px){.hero{grid-template-columns:1fr;gap:34px}.portrait-stage{min-height:500px;max-width:540px;width:100%;margin:auto}.section-head{grid-template-columns:1fr;gap:12px}.timeline{margin-left:0}.project-grid{grid-template-columns:1fr}.project-card:first-child{grid-row:auto;min-height:430px}.activity-grid{grid-template-columns:1fr 1fr}.credential-strip{grid-template-columns:1fr 1fr}.credential:nth-child(2){border-left:0}.credential{border-top:1px solid var(--line)}}
    @media(max-width:780px){html{scroll-padding-top:120px}.shell{width:min(100% - 28px,620px)}.site-header{grid-template-columns:auto auto;gap:14px;padding:10px 14px}.site-header nav{grid-column:1/-1;grid-row:2;justify-content:flex-start;gap:22px;overflow:auto}.site-header nav a{padding:4px 0 10px}.site-header nav a::after{bottom:5px}.lang-switch{justify-self:end}.hero{min-height:auto;padding:58px 0}.hero-copy{font-size:16px}.portrait-stage{min-height:420px}.portrait-frame{height:400px}.work-spine{top:22px;width:112px}.work-spine span{padding:14px 12px}.section{padding:78px 0}.timeline-item{grid-template-columns:1fr;gap:8px;padding-left:28px}.project-card{min-height:270px}.project-card:first-child{min-height:410px}.activity-grid{grid-template-columns:1fr}.credential-strip{grid-template-columns:1fr}.credential{border-left:0;border-top:1px solid var(--line)}footer{flex-direction:column}}
    @media(max-width:480px){h1{font-size:54px}.cta{width:100%}.portrait-frame{width:88%;height:365px}.portrait-stage{min-height:390px}.work-spine{width:104px}.project-card:first-child h3{font-size:40px}}
    @media(prefers-reduced-motion:reduce){html{scroll-behavior:auto}*,*::before,*::after{transition-duration:.001ms!important;animation-duration:.001ms!important}}
    @media print{.site-header,.cta-row{display:none}.hero,.section{padding:34px 0}.projects-section{background:#fff;color:var(--midnight)}.project-card,.project-card:first-child{min-height:0;background:#fff;color:var(--midnight);break-inside:avoid}.project-card p{color:var(--muted)}body{background:#fff}.portrait-frame{box-shadow:none}}
  </style>
</head>
<body>
  <header class="site-header">
    <a class="brand" href="#about" aria-label="Jiwoo Lee home">JL</a>
    <nav aria-label="Primary navigation">
      <a href="#about"><span class="en">About</span><span class="ko">소개</span></a>
      <a href="#experience"><span class="en">Experience</span><span class="ko">경력</span></a>
      <a href="#projects"><span class="en">Projects</span><span class="ko">프로젝트</span></a>
      <a href="#activities"><span class="en">Activities</span><span class="ko">활동</span></a>
    </nav>
    <button class="lang-switch" type="button" onclick="toggleLanguage()" aria-label="Switch language">한국어</button>
  </header>

  <main>
    <section class="hero shell" id="about">
      <div>
        <p class="eyebrow">Business × Research × AI</p>
        <h1><span class="en">Ideas into<br><em>working projects.</em></span><span class="ko">아이디어를<br><em>실제 프로젝트로.</em></span></h1>
        <p class="hero-copy en">I am a business administration student who turns consumer insight into clear strategy, useful content, and tangible digital products.</p>
        <p class="hero-copy ko">소비자 인사이트를 명확한 전략과 유용한 콘텐츠, 실제 디지털 결과물로 연결하는 경영학 전공생입니다.</p>
        <div class="cta-row">
          <a class="cta cta-primary" href="#projects"><span class="en">Explore Projects</span><span class="ko">프로젝트 보기</span></a>
          <a class="cta cta-secondary" href="https://jiwoo1129-art.github.io/K-Beauty/" target="_blank" rel="noopener noreferrer"><span class="en">View Featured Project</span><span class="ko">대표 프로젝트 열기</span></a>
        </div>
        <div class="hero-meta"><span><strong>Based in</strong> Seoul, Korea</span><span><strong>Education</strong> Gachon University · B.B.A. 2028</span></div>
      </div>
      <div class="portrait-stage" aria-label="Jiwoo Lee portrait and working method">
        <div class="work-spine" aria-hidden="true"><span>RESEARCH</span><span>FRAME</span><span>BUILD</span></div>
        <div class="portrait-frame"><img class="portrait" src="${portraitSrc}" alt="Portrait of Jiwoo Lee"><span class="portrait-caption">JIWOO LEE · SEOUL</span></div>
      </div>
    </section>

    <div class="skill-rail"><div class="shell"><span>MARKETING</span><b>✦</b><span>RESEARCH</span><b>✦</b><span>CONTENT</span><b>✦</b><span>VIBE CODING</span><b>✦</b><span>DATA ANALYSIS</span></div></div>

    <section class="section shell" id="experience">
      <div class="section-head"><p class="section-kicker">Experience</p><h2><span class="en">Learning the business by doing the work.</span><span class="ko">실제 업무로 비즈니스를 배웁니다.</span></h2></div>
      <div class="timeline">
        <article class="timeline-item"><span class="date">Dec 2022 — Oct 2026</span><div><h3><span class="en">English Conversation Instructor</span><span class="ko">영어 회화 강사</span></h3><p class="org">READ 101</p><p class="en">Delivered practical English conversation lessons and adapted communication to learners with different goals and proficiency levels.</p><p class="ko">다양한 목표와 수준을 가진 학습자에게 실용 영어 회화 수업을 제공하고 맞춤형 커뮤니케이션 역량을 길렀습니다.</p></div></article>
        <article class="timeline-item"><span class="date">Apr 2026 — Oct 2026</span><div><h3><span class="en">Undergraduate Research Assistant</span><span class="ko">학부 연구생</span></h3><p class="org">NAD, Gachon University</p><p class="en">Participated in industry research, global meetings, presentation development, and AI-enabled business projects.</p><p class="ko">산업 리서치, 글로벌 미팅, 발표 자료 제작, AI 기반 비즈니스 프로젝트에 참여했습니다.</p></div></article>
      </div>
    </section>

    <section class="section projects-section" id="projects"><div class="shell">
      <div class="section-head"><p class="section-kicker">Selected Projects</p><h2><span class="en">Projects built at the intersection of insight and action.</span><span class="ko">인사이트와 실행이 만나는 프로젝트.</span></h2></div>
      <div class="project-grid">
        <article class="project-card featured"><span class="project-label">Featured · AI product</span><h3>Amazon A+ Content Compliance Writer</h3><p class="en">Designed and built a website that identifies non-compliant copy and supports policy-aware A+ Content creation through vibe coding.</p><p class="ko">아마존 A+ 콘텐츠의 위반 문구를 검증하고 규정에 맞는 카피 작성을 돕는 웹 서비스를 바이브 코딩으로 설계·제작했습니다.</p><a class="project-link" href="https://jiwoo1129-art.github.io/K-Beauty/" target="_blank" rel="noopener noreferrer"><span class="en">Open live project</span><span class="ko">프로젝트 열기</span></a></article>
        <article class="project-card"><span class="project-label">Service concept · AI architecture</span><h3>AI-Powered Luxury Concierge Platform</h3><p class="en">Developed a trusted decision-support service concept around real customer needs.</p><p class="ko">실제 고객 니즈와 신뢰를 중심으로 럭셔리 의사결정 지원 서비스 콘셉트와 AI 구조를 설계했습니다.</p></article>
        <article class="project-card"><span class="project-label">Research · Executive presentation</span><h3>Apollo Sport Capital Research</h3><p class="en">Built research materials, reviewed English content, and presented at IFC Seoul.</p><p class="ko">리서치 자료 제작과 영문 교정을 수행하고 IFC 서울에서 임원진 대상 발표를 진행했습니다.</p></article>
      </div>
    </div></section>

    <section class="section shell" id="activities">
      <div class="section-head"><p class="section-kicker">Activities</p><h2><span class="en">Field work, content, and commerce.</span><span class="ko">현장, 콘텐츠, 커머스를 잇습니다.</span></h2></div>
      <div class="activity-grid">
        <article class="activity"><span class="date">Sep — Oct 2026</span><h3>KNOT Supporters</h3><p class="org">Korea Tourism Organization</p><p><span class="en">Tourism route planning · Field testing · Reels production</span><span class="ko">관광 코스 기획 · 외국인 동행 테스트 · 릴스 제작</span></p></article>
        <article class="activity"><span class="date">Sep — Dec 2026</span><h3>P-Practical Project</h3><p class="org">Lotte Home Shopping</p><p><span class="en">Product sourcing · Promotion · Live broadcast · Data analysis</span><span class="ko">상품 소싱 · 홍보 · 라이브 방송 · 데이터 분석</span></p></article>
        <article class="activity"><span class="date">Jun 2025 — Present</span><h3>Naver Clip Creator</h3><p class="org">Short-form content</p><p><span class="en">Produced short-form posts and videos · 300+ followers</span><span class="ko">숏폼 게시물 및 영상 제작 · 팔로워 300명 이상</span></p></article>
      </div>
      <div class="credential-strip">
        <div class="credential-intro"><p class="eyebrow" style="color:var(--gold);margin-bottom:8px">Language</p><p><span class="en">Professional English communication for research, teaching, and presentations.</span><span class="ko">리서치, 강의, 발표에 활용 가능한 영어 커뮤니케이션 역량.</span></p></div>
        <div class="credential"><strong>TOEIC 865</strong><span>LC 460 · RC 405 · Oct 2025</span></div>
        <div class="credential"><strong>OPIc IH</strong><span>Dec 2024</span></div>
        <div class="credential"><strong>English</strong><span><span class="en">Professional proficiency</span><span class="ko">업무 활용 가능</span></span></div>
      </div>
    </section>
  </main>

  <footer class="shell"><span>Jiwoo Lee · Portfolio</span><span><span class="en">Business ideas, made tangible.</span><span class="ko">비즈니스 아이디어를 실제 결과물로.</span></span></footer>
  <script>
    function toggleLanguage(){
      const korean=document.body.classList.toggle('korean');
      document.documentElement.lang=korean?'ko':'en';
      document.querySelector('.lang-switch').textContent=korean?'English':'한국어';
    }
  </script>
</body>
</html>`;
}
