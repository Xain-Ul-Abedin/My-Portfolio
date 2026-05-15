import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import config from '../data/config.json';

const IC = {
  phone:    `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2"/></svg>`,
  mail:     `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><polyline points="3 7 12 13 21 7"/></svg>`,
  linkedin: `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>`,
  github:   `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/></svg>`,
  discord:  `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="12" r="1"/><circle cx="15" cy="12" r="1"/><path d="M7.5 7.2C8.9 6.4 10.4 6 12 6s3.1.4 4.5 1.2M16.5 16.8C15.1 17.6 13.6 18 12 18s-3.1-.4-4.5-1.2"/><path d="M15.5 17c0 1 1.5 3 2 3 1.5 0 2.833-1.667 3.5-3 .667-1.667.5-5.833-1.5-11.5-1.457-1.015-3-1.487-4.5-1.5l-1 2.5M8.5 17c0 1-1.356 3-1.832 3-1.429 0-2.698-1.667-3.333-3-.635-1.667-.476-5.833 1.428-11.5 1.388-1.015 2.782-1.487 4.237-1.5l1 2.5"/></svg>`,
  location: `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
  user:     `<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
  briefcase:`<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/></svg>`,
  gradcap:  `<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>`,
  code:     `<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
  zap:      `<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
  award:    `<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg>`,
};

const BASE = window.location.origin;

export async function generateResume() {
  const { personal, resume, projects, skills, experience } = config;

  const html = `<!DOCTYPE html><html><head><meta charset="UTF-8"/>
  <link rel="preconnect" href="https://fonts.googleapis.com"/>
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
  <link href="https://fonts.googleapis.com/css2?family=Lexend:wght@300;400;500;600;700;800&display=swap" rel="stylesheet"/>
  <style>
    *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
    body{font-family:'Lexend',sans-serif;background:#fff;color:#1a1a1a;width:794px;height:1122px;font-size:8.5px;line-height:1.5;overflow:hidden;display:flex;flex-direction:column;}
    a{color:inherit;text-decoration:none;}
    a:hover{text-decoration:underline;}

    /* HEADER */
    .hd{background:#0d2b2b;padding:22px 40px 16px;text-align:center;border-bottom:2.5px solid #00b894;flex-shrink:0;}
    .hd-name{font-size:34px;font-weight:800;color:#fff;letter-spacing:5px;text-transform:uppercase;line-height:1;margin-bottom:5px;}
    .hd-name span{color:#00d4aa;}
    .hd-tag{font-size:8.5px;font-weight:300;color:#8ab8b2;letter-spacing:2.5px;text-transform:uppercase;margin-bottom:13px;}
    .hd-rule{width:40px;height:2px;background:#00b894;margin:0 auto 13px;border-radius:2px;}
    .cbar{display:flex;justify-content:center;flex-wrap:wrap;gap:4px 18px;}
    .ci{display:flex;align-items:center;gap:4px;color:#a8ccc7;font-size:7.5px;}
    .ci svg{color:#00b894;flex-shrink:0;}
    .ci a{color:#a8ccc7;}

    /* BODY */
    .bd{display:flex;flex:1;min-height:0;}

    /* SIDEBAR */
    .sb{width:230px;flex-shrink:0;background:#f6faf9;padding:14px 14px 14px 16px;border-right:1px solid #ddeae7;overflow:hidden;}
    .ss{margin-bottom:14px;}
    .st{display:flex;align-items:center;gap:5px;font-size:8px;font-weight:700;color:#0d2b2b;text-transform:uppercase;letter-spacing:1.5px;margin-bottom:8px;padding-bottom:5px;border-bottom:1.5px solid #00b894;}
    .st svg{color:#00b894;}
    .scat{margin-bottom:9px;}
    .scn{font-size:7px;font-weight:700;color:#0d5c4a;text-transform:uppercase;letter-spacing:1px;margin-bottom:4px;padding:1px 6px;background:#d4efea;border-radius:3px;display:inline-block;}
    .ski{display:flex;align-items:center;justify-content:space-between;margin-bottom:3px;}
    .skn{font-size:7.5px;font-weight:400;color:#2d4a47;flex:1;display:flex;align-items:center;gap:4px;}
    .skd{width:3px;height:3px;background:#00b894;border-radius:50%;flex-shrink:0;}
    .skl{font-size:6px;font-weight:600;color:#fff;padding:1px 4px;border-radius:7px;flex-shrink:0;text-transform:uppercase;letter-spacing:0.3px;}
    .lv-learning{background:#95a5a6;}.lv-junior{background:#00b894;}.lv-intermediate{background:#0984e3;}.lv-advanced{background:#6c5ce7;}
    .cert{display:flex;align-items:flex-start;gap:5px;margin-bottom:6px;font-size:7.5px;color:#2d4a47;line-height:1.4;}
    .cert a{color:#00b894;font-weight:500;}
    .cbar2{width:2.5px;min-height:12px;background:#00b894;border-radius:2px;flex-shrink:0;margin-top:2px;}

    /* MAIN */
    .mn{flex:1;padding:14px 18px 10px 18px;min-width:0;overflow:hidden;}
    .sec{margin-bottom:13px;}
    .sth{display:flex;align-items:center;gap:5px;font-size:9px;font-weight:700;color:#0d2b2b;text-transform:uppercase;letter-spacing:1.5px;margin-bottom:8px;padding-bottom:5px;border-bottom:1.5px solid #00b894;}
    .sth svg{color:#00b894;}
    .pt{font-size:8px;font-weight:300;color:#3a3a3a;line-height:1.7;text-align:justify;}
    .ei{margin-bottom:10px;padding-bottom:10px;border-bottom:1px solid #eaf2f0;}
    .ei:last-child{border-bottom:none;margin-bottom:0;padding-bottom:0;}
    .eh{display:flex;justify-content:space-between;align-items:flex-start;gap:6px;margin-bottom:2px;}
    .etl{font-size:9px;font-weight:700;color:#0d2b2b;flex:1;line-height:1.3;}
    .emk{font-size:7px;font-weight:600;color:#0d5c4a;background:#d4efea;padding:1px 7px;border-radius:9px;flex-shrink:0;white-space:nowrap;}
    .esb{display:flex;align-items:center;gap:6px;margin-bottom:4px;}
    .eco{font-size:7.5px;font-weight:600;color:#00b894;}
    .epr{font-size:7.5px;font-weight:300;color:#888;}
    .edc{font-size:8px;font-weight:300;color:#444;line-height:1.6;text-align:justify;}
    .pi{margin-bottom:8px;padding:8px 10px;border-left:2.5px solid #00b894;background:#f9fdfc;border-radius:0 4px 4px 0;}
    .ph{display:flex;justify-content:space-between;align-items:center;margin-bottom:3px;gap:6px;}
    .ptl{font-size:9px;font-weight:700;color:#0d2b2b;flex:1;}
    .pb{font-size:6.5px;font-weight:600;color:#fff;background:#00b894;padding:1.5px 6px;border-radius:7px;flex-shrink:0;}
    .ps{font-size:6.5px;font-weight:500;color:#888;background:#efefef;padding:1.5px 5px;border-radius:7px;flex-shrink:0;}
    .pd{font-size:8px;font-weight:300;color:#444;line-height:1.6;}

    /* FOOTER */
    .ft{background:#0d2b2b;border-top:2px solid #00b894;padding:8px 40px;display:flex;align-items:center;justify-content:space-between;flex-shrink:0;}
    .ft-left{display:flex;align-items:center;gap:16px;}
    .fci{display:flex;align-items:center;gap:4px;color:#8ab8b2;font-size:7px;}
    .fci svg{color:#00b894;}
    .fci a{color:#8ab8b2;}
    .ft-right{font-size:7px;color:#4a7a74;font-weight:300;letter-spacing:1px;}
  </style>
  </head><body>

  <!-- HEADER -->
  <div class="hd">
    <div class="hd-name">${personal.name.split('-')[0].toUpperCase()} <span>${personal.name.split('-').slice(1).join('-').toUpperCase()}</span></div>
    <div class="hd-tag">${personal.tagline}</div>
    <div class="hd-rule"></div>
    <div class="cbar">
      <div class="ci">${IC.mail}<a href="mailto:${personal.email}">${personal.email}</a></div>
      <div class="ci">${IC.linkedin}<a href="${personal.linkedin ? 'https://' + personal.linkedin : '#'}" target="${personal.linkedin ? '_blank' : '_self'}">${personal.linkedin ? personal.linkedin : 'LinkedIn'}</a></div>
      <div class="ci">${IC.github}<a href="${personal.github}" target="_blank">github.com/Xain-Ul-Abedin</a></div>
      <div class="ci">${IC.discord}<span>${personal.discord}</span></div>
    </div>
  </div>

  <!-- BODY -->
  <div class="bd">

    <!-- SIDEBAR -->
    <div class="sb">
    <div class="ss">
      <div class="st">${IC.zap} Technical Skills</div>
      ${skills.map(cat => `
        <div class="scat">
          <div class="scn">${cat.category}</div>
          ${cat.items.map(s => `
            <div class="ski">
              <div class="skn"><div class="skd"></div>${s.name}</div>
              <span class="skl lv-${s.level.toLowerCase().replace(/\s/g,'')}">${s.level}</span>
            </div>`).join('')}
        </div>`).join('')}
    </div>

    <div class="ss">
      <div class="st">${IC.award} Certifications</div>
      ${config.certifications.filter(c => c.url && c.url !== '#').map(c => `
        <div class="cert">
          <div class="cbar2"></div>
          <span><a href="${BASE}${c.url}" target="_blank">${c.name}</a></span>
        </div>`).join('')}
    </div>
  </div>

    <!-- MAIN -->
    <div class="mn">
      <div class="sec">
        <div class="sth">${IC.user} Professional Profile</div>
        <p class="pt">${resume.summary}</p>
      </div>

      <div class="sec">
        <div class="sth">${IC.briefcase} Work Experience</div>
        ${experience.slice(0,1).map(i => `
          <div class="ei">
            <div class="eh"><div class="etl">${i.title}</div></div>
            <div class="esb"><span class="eco">${i.company}</span><span style="color:#ccc">|</span><span class="epr">${i.period}</span></div>
            <div class="edc">${i.description}</div>
          </div>`).join('')}
      </div>

      <div class="sec">
        <div class="sth">${IC.gradcap} Academic Background</div>
        ${experience.slice(1,4).map(i => `
          <div class="ei">
            <div class="eh">
              <div class="etl">${i.title}</div>
              ${i.marks ? `<div class="emk">${i.marks}</div>` : ''}
            </div>
            <div class="esb"><span class="eco">${i.company}</span><span style="color:#ccc">|</span><span class="epr">${i.period}</span></div>
            <div class="edc">${i.description}</div>
          </div>`).join('')}
      </div>

      <div class="sec">
        <div class="sth">${IC.code} Key Projects</div>
        ${projects.map(p => `
          <div class="pi">
            <div class="ph">
              <div class="ptl">${p.title}</div>
              <span class="pb">${p.engine}</span>
              <span class="ps">${p.status}</span>
            </div>
            <div class="pd">${p.description}</div>
          </div>`).join('')}
      </div>
    </div>
  </div>

  <!-- FOOTER -->
  <div class="ft">
    <div class="ft-left">
      <div class="fci">${IC.phone}<a href="tel:${personal.phone}">${personal.phone}</a></div>
      <div class="fci">${IC.location}<span>${personal.address}</span></div>
    </div>
    <div class="ft-right">ZAIN UL-ABEDIN &nbsp;·&nbsp; ${new Date().getFullYear()}</div>
  </div>

  </body></html>`;

  // ── Render in hidden iframe ──────────────────────────────────────────────
  const iframe = document.createElement('iframe');
  // Must be visible & in-flow so getBoundingClientRect works correctly
  iframe.style.cssText = [
    'position:fixed',
    'top:0',
    'left:0',
    'width:794px',
    'height:1122px',
    'border:none',
    'opacity:0',
    'pointer-events:none',
    'z-index:-9999',
  ].join(';');
  document.body.appendChild(iframe);
  const iDoc = iframe.contentDocument || iframe.contentWindow.document;
  iDoc.open(); iDoc.write(html); iDoc.close();

  // Wait for Lexend to load
  await new Promise(r => setTimeout(r, 2400));

  try {
    // ── Collect all <a> link positions BEFORE canvas capture ───────────────
    // getBoundingClientRect() inside the iframe is relative to its own viewport
    const linkData = Array.from(iDoc.querySelectorAll('a[href]'))
      .map(a => {
        const r = a.getBoundingClientRect();
        return {
          href: a.href,  // absolute URL resolved by iframe context
          x: r.left,
          y: r.top,
          w: r.width,
          h: r.height,
        };
      })
      .filter(l => l.w > 0 && l.h > 0); // skip invisible elements

    // ── Render to canvas ───────────────────────────────────────────────────
    const canvas = await html2canvas(iDoc.body, {
      scale: 2,
      useCORS: true,
      allowTaint: true,
      backgroundColor: '#ffffff',
      width: 794,
      height: 1122,
      windowWidth: 794,
      windowHeight: 1122,
      logging: false,
    });

    const imgData = canvas.toDataURL('image/jpeg', 1.0);
    const pdf = new jsPDF('p', 'mm', 'a4');
    const pdfW = pdf.internal.pageSize.getWidth();   // 210 mm
    const pdfH = pdf.internal.pageSize.getHeight();  // 297 mm

    // Single page — scale canvas width → pdfW, cap height at pdfH
    const imgH = Math.min(pdfW * (canvas.height / canvas.width), pdfH);
    pdf.addImage(imgData, 'JPEG', 0, 0, pdfW, imgH);

    // ── Add real PDF link annotations ──────────────────────────────────────
    // Coordinate transform: iframe px → PDF mm
    // The iframe layout is 794 × 1122 px; pdf image occupies pdfW × imgH mm
    const scaleX = pdfW / 794;
    const scaleY = imgH / 1122;

    linkData.forEach(({ href, x, y, w, h }) => {
      const lx = x * scaleX;
      const ly = y * scaleY;
      const lw = w * scaleX;
      const lh = h * scaleY;

      // Expand the hit area by 1mm vertically for easier clicking
      pdf.link(lx, Math.max(0, ly - 0.5), lw, lh + 1, { url: href });
    });

    pdf.save('Resume_Zain_Ul_Abedin.pdf');
  } finally {
    document.body.removeChild(iframe);
  }
}