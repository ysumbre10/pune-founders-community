// ========================================
// FoundersX - App
// ========================================

const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyKNavvyrFCfajkKW03Lomh7Iv2s6D4o4CwbnIt4EfLKZgE3gZdsRtRnZte7IQo1iPe/exec';

// ---- DATA CONSTANTS ----

const INDUSTRIES = [
  'SaaS', 'Fintech', 'EdTech', 'HealthTech', 'AgriTech', 'D2C / E-commerce',
  'AI / ML', 'IoT', 'CleanTech', 'FoodTech', 'Logistics', 'Real Estate',
  'Media & Content', 'Gaming', 'Social Impact', 'Manufacturing',
  'Blockchain / Web3', 'Cybersecurity', 'HR Tech', 'Legal Tech',
  'Travel & Hospitality', 'Automotive', 'DeepTech', 'Other'
];

const STAGES = [
  'Idea Stage', 'Building MVP', 'Launched', 'Early Revenue',
  'Profitable', 'Funded', 'Scaling', 'Acquired / Exited'
];

const HELP_TAGS = [
  'Funding / VC Intros', 'Hiring Talent', 'Finding Co-founder',
  'Mentorship', 'Marketing & Growth', 'Sales & BD',
  'Tech Development', 'Legal & Compliance', 'Partnerships',
  'Office Space', 'Design & Branding', 'Content & PR',
  'Government Grants', 'International Expansion', 'Beta Users'
];

const OFFER_TAGS = [
  'Mentorship', 'Angel Investment', 'Technical Help',
  'Marketing Advice', 'Hiring Support', 'Legal Guidance',
  'Design Help', 'Office Space', 'Networking & Intros',
  'Domain Expertise', 'Beta Testing', 'Content & Writing',
  'Sales Strategy', 'Product Feedback', 'Fundraising Guidance'
];

const AVATAR_COLORS = [
  '#6366F1', '#8B5CF6', '#EC4899', '#F59E0B', '#10B981',
  '#3B82F6', '#EF4444', '#14B8A6', '#F97316', '#06B6D4',
  '#84CC16', '#A855F7', '#0EA5E9', '#D946EF', '#0D9488'
];

// ---- SVG ICONS ----

const IC = {
  wa: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.558 4.143 1.534 5.886L.05 23.308a.75.75 0 0 0 .917.917l5.422-1.484A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.94 0-3.77-.5-5.37-1.38l-.385-.228-3.218.881.881-3.218-.228-.385A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>',
  li: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>',
  tw: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>',
  fb: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>',
  ig: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>',
  web: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',
  email: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>',
  pin: '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
  cal: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>'
};

// ---- HELPERS ----

function getColor(name) {
  let h = 0;
  for (let i = 0; i < name.length; i++) h = name.charCodeAt(i) + ((h << 5) - h);
  return AVATAR_COLORS[Math.abs(h) % AVATAR_COLORS.length];
}

function getInitials(name) {
  return name.split(' ').filter(Boolean).map(w => w[0]).join('').toUpperCase().slice(0, 2);
}

function esc(str) {
  const d = document.createElement('div');
  d.textContent = str;
  return d.innerHTML;
}

function fmtWa(n) {
  const d = n.replace(/[^0-9+]/g, '');
  return d.startsWith('+') ? d : '+' + d;
}

function tags(str) {
  if (!str) return [];
  return str.split(',').map(s => s.trim()).filter(Boolean);
}

function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3500);
}

function animateNum(el, target) {
  const dur = 700, start = parseInt(el.textContent) || 0;
  if (start === target) return;
  const t0 = performance.now();
  function step(now) {
    const p = Math.min((now - t0) / dur, 1);
    el.textContent = Math.round(start + (target - start) * (1 - Math.pow(1 - p, 3)));
    if (p < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

let searchTimer;
function debounce(fn, ms) {
  return function(...args) {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => fn.apply(this, args), ms);
  };
}

// ---- SCROLL LOCK (iOS-safe) ----
// Using position:fixed instead of overflow:hidden to prevent iOS scroll issues

let savedScrollY = 0;
let lockCount = 0;

function lockScroll() {
  lockCount++;
  if (lockCount === 1) {
    savedScrollY = window.scrollY;
    document.body.style.position = 'fixed';
    document.body.style.top = `-${savedScrollY}px`;
    document.body.style.left = '0';
    document.body.style.right = '0';
  }
}

function unlockScroll() {
  lockCount = Math.max(0, lockCount - 1);
  if (lockCount === 0) {
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.left = '';
    document.body.style.right = '';
    window.scrollTo(0, savedScrollY);
  }
}

function forceUnlockScroll() {
  lockCount = 0;
  document.body.style.position = '';
  document.body.style.top = '';
  document.body.style.left = '';
  document.body.style.right = '';
  window.scrollTo(0, savedScrollY);
}

// ---- STATE ----

let allFounders = [];
let activeFilters = { industry: [], stage: [], help: [], offer: [] };
let isEditMode = false;

// ---- "OTHER" FIELD TOGGLES ----

function toggleOtherArea() {
  const sel = document.getElementById('f_puneArea');
  const otherInput = document.getElementById('f_puneAreaOther');
  if (sel.value === 'Other') {
    otherInput.style.display = 'block';
    otherInput.focus();
  } else {
    otherInput.style.display = 'none';
    otherInput.value = '';
  }
}

function getAreaValue() {
  const sel = document.getElementById('f_puneArea');
  if (sel.value === 'Other') {
    return document.getElementById('f_puneAreaOther').value.trim() || 'Other';
  }
  return sel.value;
}

function toggleOtherIndustry() {
  const otherInput = document.getElementById('f_industryOther');
  const selected = [...document.getElementById('industrySelector').querySelectorAll('.tag-option.selected')].map(x => x.dataset.value);
  if (selected.includes('Other')) {
    otherInput.style.display = 'block';
    otherInput.focus();
  } else {
    otherInput.style.display = 'none';
    otherInput.value = '';
  }
}

function getIndustryValue() {
  const selected = [...document.getElementById('industrySelector').querySelectorAll('.tag-option.selected')].map(x => x.dataset.value);
  if (selected.includes('Other')) {
    const custom = document.getElementById('f_industryOther').value.trim();
    if (custom) {
      return selected.map(s => s === 'Other' ? custom : s).join(', ');
    }
  }
  return selected.join(', ');
}

// ---- TAG SELECTORS (Form) ----

function buildTagSelector(id, opts, multi) {
  const c = document.getElementById(id);
  opts.forEach(o => {
    const s = document.createElement('span');
    s.className = 'tag-option';
    s.textContent = o;
    s.dataset.value = o;
    s.addEventListener('click', () => {
      if (multi) { s.classList.toggle('selected'); }
      else { c.querySelectorAll('.tag-option').forEach(x => x.classList.remove('selected')); s.classList.add('selected'); }
      syncHidden(id);
      // Toggle "Other" input for industry
      if (id === 'industrySelector') toggleOtherIndustry();
    });
    c.appendChild(s);
  });

  // Add "Other" text input after the industry tag selector
  if (id === 'industrySelector') {
    const otherInput = document.createElement('input');
    otherInput.type = 'text';
    otherInput.id = 'f_industryOther';
    otherInput.className = 'other-input';
    otherInput.placeholder = 'Type your industry...';
    otherInput.style.display = 'none';
    otherInput.style.marginTop = '8px';
    otherInput.style.width = '100%';
    c.parentElement.appendChild(otherInput);
  }
}

function syncHidden(id) {
  const map = { industrySelector: 'f_industry', stageSelector: 'f_stage', helpSelector: 'f_helpNeeded', offerSelector: 'f_canOffer' };
  const c = document.getElementById(id);
  document.getElementById(map[id]).value = [...c.querySelectorAll('.tag-option.selected')].map(x => x.dataset.value).join(', ');
}

// ---- FILTER CHIPS (Directory) ----

function buildFilterChips(id, opts, key) {
  const c = document.getElementById(id);
  opts.forEach(o => {
    const ch = document.createElement('span');
    ch.className = 'filter-chip';
    ch.textContent = o;
    ch.dataset.value = o;
    ch.addEventListener('click', () => {
      ch.classList.toggle('active');
      if (ch.classList.contains('active')) {
        if (!activeFilters[key].includes(o)) activeFilters[key].push(o);
      } else {
        activeFilters[key] = activeFilters[key].filter(v => v !== o);
      }
      applyFilters();
    });
    c.appendChild(ch);
  });
}

// Init selectors
buildTagSelector('industrySelector', INDUSTRIES, false);
buildTagSelector('stageSelector', STAGES, false);
buildTagSelector('helpSelector', HELP_TAGS, true);
buildTagSelector('offerSelector', OFFER_TAGS, true);

buildFilterChips('industryFilters', INDUSTRIES, 'industry');
buildFilterChips('stageFilters', STAGES, 'stage');
buildFilterChips('helpFilters', HELP_TAGS, 'help');
buildFilterChips('offerFilters', OFFER_TAGS, 'offer');

// ---- CARD ----

function createCard(f, i) {
  const color = getColor(f.name);
  const ini = getInitials(f.name);
  const inds = tags(f.industry);
  const needs = tags(f.helpNeeded);
  const offers = tags(f.canOffer);

  let tagHTML = '';
  inds.slice(0, 1).forEach(t => { tagHTML += `<span class="tag tag-industry">${esc(t)}</span>`; });
  needs.slice(0, 2).forEach(t => { tagHTML += `<span class="tag tag-need">${esc(t)}</span>`; });
  offers.slice(0, 1).forEach(t => { tagHTML += `<span class="tag tag-offer">${esc(t)}</span>`; });
  const total = inds.length + needs.length + offers.length;
  const shown = Math.min(inds.length, 1) + Math.min(needs.length, 2) + Math.min(offers.length, 1);
  if (total > shown) tagHTML += `<span class="tag tag-more">+${total - shown}</span>`;

  let socHTML = '';
  const wa = fmtWa(f.whatsapp).replace('+', '');
  socHTML += `<a href="https://wa.me/${wa}" target="_blank" rel="noopener" class="card-social wa" title="WhatsApp" onclick="event.stopPropagation()">${IC.wa}</a>`;
  if (f.linkedin) socHTML += `<a href="${esc(f.linkedin)}" target="_blank" rel="noopener" class="card-social li" title="LinkedIn" onclick="event.stopPropagation()">${IC.li}</a>`;
  if (f.twitter) socHTML += `<a href="${esc(f.twitter)}" target="_blank" rel="noopener" class="card-social tw" title="Twitter" onclick="event.stopPropagation()">${IC.tw}</a>`;
  if (f.facebook) socHTML += `<a href="${esc(f.facebook)}" target="_blank" rel="noopener" class="card-social fb" title="Facebook" onclick="event.stopPropagation()">${IC.fb}</a>`;
  if (f.instagram) socHTML += `<a href="${esc(f.instagram)}" target="_blank" rel="noopener" class="card-social ig" title="Instagram" onclick="event.stopPropagation()">${IC.ig}</a>`;
  if (f.website) {
    let u = f.website; if (!u.startsWith('http')) u = 'https://' + u;
    socHTML += `<a href="${esc(u)}" target="_blank" rel="noopener" class="card-social" title="Website" onclick="event.stopPropagation()">${IC.web}</a>`;
  }

  const card = document.createElement('div');
  card.className = 'founder-card';
  card.style.animationDelay = `${i * 0.04}s`;
  card.onclick = () => openDetail(f);
  card.innerHTML = `
    <div class="card-top">
      <div class="avatar" style="background:${color}">${ini}</div>
      <div class="card-info">
        <div class="card-name">${esc(f.name)}</div>
        <div class="card-role">${esc(f.role || '')}</div>
        <div class="card-company-line">
          <span class="card-company">${esc(f.company)}</span>
          ${f.stage ? `<span class="card-stage-badge">${esc(f.stage)}</span>` : ''}
        </div>
      </div>
    </div>
    <div class="card-oneliner">${esc(f.oneLiner || '')}</div>
    ${tagHTML ? `<div class="card-tags">${tagHTML}</div>` : ''}
    <div class="card-bottom">
      ${socHTML}
      ${f.puneArea ? `<span class="card-meta">${IC.pin} ${esc(f.puneArea)}</span>` : ''}
    </div>`;
  return card;
}

// ---- DETAIL MODAL ----

function openDetail(f) {
  const color = getColor(f.name);
  const ini = getInitials(f.name);
  const inds = tags(f.industry);
  const needs = tags(f.helpNeeded);
  const offers = tags(f.canOffer);

  let socHTML = '';
  const wa = fmtWa(f.whatsapp).replace('+', '');
  socHTML += `<a href="https://wa.me/${wa}" target="_blank" rel="noopener" class="detail-social-btn wa-btn">${IC.wa} WhatsApp</a>`;
  if (f.linkedin) socHTML += `<a href="${esc(f.linkedin)}" target="_blank" rel="noopener" class="detail-social-btn">${IC.li} LinkedIn</a>`;
  if (f.twitter) socHTML += `<a href="${esc(f.twitter)}" target="_blank" rel="noopener" class="detail-social-btn">${IC.tw} Twitter / X</a>`;
  if (f.facebook) socHTML += `<a href="${esc(f.facebook)}" target="_blank" rel="noopener" class="detail-social-btn">${IC.fb} Facebook</a>`;
  if (f.instagram) socHTML += `<a href="${esc(f.instagram)}" target="_blank" rel="noopener" class="detail-social-btn">${IC.ig} Instagram</a>`;
  if (f.email) socHTML += `<a href="mailto:${esc(f.email)}" class="detail-social-btn">${IC.email} Email</a>`;
  if (f.website) {
    let u = f.website; if (!u.startsWith('http')) u = 'https://' + u;
    socHTML += `<a href="${esc(u)}" target="_blank" rel="noopener" class="detail-social-btn">${IC.web} Website</a>`;
  }

  document.getElementById('detailContent').innerHTML = `
    <div class="detail-banner"><div class="detail-banner-inner"></div><div class="detail-banner-pattern"></div></div>
    <div class="detail-profile">
      <div class="detail-avatar" style="background:${color}">${ini}</div>
      <div class="detail-info">
        <div class="detail-name">${esc(f.name)}</div>
        <div class="detail-role">${esc(f.role || '')}</div>
        <div class="detail-company-line">
          <span class="detail-company">${esc(f.company)}</span>
          ${f.stage ? `<span class="detail-stage">${esc(f.stage)}</span>` : ''}
        </div>
      </div>
    </div>
    <div class="detail-body">
      ${f.oneLiner ? `<div class="detail-section"><div class="detail-section-label">What they build</div><div class="detail-text">${esc(f.oneLiner)}</div></div>` : ''}
      ${f.bio ? `<div class="detail-section"><div class="detail-section-label">About</div><div class="detail-text">${esc(f.bio)}</div></div>` : ''}

      ${(f.puneArea || f.foundedYear) ? `<div class="detail-meta">
        ${f.puneArea ? `<span class="detail-meta-item">${IC.pin} ${esc(f.puneArea)}</span>` : ''}
        ${f.foundedYear && f.foundedYear !== '0' ? `<span class="detail-meta-item">${IC.cal} Founded ${esc(String(f.foundedYear))}</span>` : ''}
      </div>` : ''}

      ${inds.length ? `<div class="detail-section"><div class="detail-section-label">Industry</div><div class="detail-tags">${inds.map(t => `<span class="detail-tag industry">${esc(t)}</span>`).join('')}</div></div>` : ''}
      ${needs.length ? `<div class="detail-section"><div class="detail-section-label">Looking for help with</div><div class="detail-tags">${needs.map(t => `<span class="detail-tag need">${esc(t)}</span>`).join('')}</div></div>` : ''}
      ${offers.length ? `<div class="detail-section"><div class="detail-section-label">Can help with</div><div class="detail-tags">${offers.map(t => `<span class="detail-tag offer">${esc(t)}</span>`).join('')}</div></div>` : ''}

      <div class="detail-section">
        <div class="detail-section-label">Connect</div>
        <div class="detail-socials">${socHTML}</div>
      </div>
    </div>`;

  document.getElementById('detailOverlay').classList.add('open');
  pushOverlayState('detail');
  lockScroll();
}

function closeDetail() {
  document.getElementById('detailOverlay').classList.remove('open');
  unlockScroll();
}

// ---- MODAL CONTROLS ----

function openModal() {
  isEditMode = false;
  document.getElementById('f_editId').value = '';
  document.getElementById('modalTitle').textContent = 'Get on the Map';
  document.getElementById('modalSubtitle').textContent = '30 seconds to be discoverable. Worth it.';
  document.getElementById('submitBtnText').textContent = 'Ship My Profile';
  document.getElementById('formMessage').textContent = '';
  document.getElementById('modalOverlay').classList.add('open');
  pushOverlayState('modal');
  lockScroll();
}

function openModalForEdit(founder) {
  isEditMode = true;
  document.getElementById('modalTitle').textContent = 'Edit Your Profile';
  document.getElementById('modalSubtitle').textContent = 'Glow-up your profile.';
  document.getElementById('submitBtnText').textContent = 'Save Changes';
  document.getElementById('formMessage').textContent = '';

  // Populate fields
  document.getElementById('f_editId').value = founder.id || '';
  document.getElementById('f_name').value = founder.name || '';
  document.getElementById('f_role').value = founder.role || '';
  document.getElementById('f_bio').value = founder.bio || '';
  // Handle area — check if it's a known option or custom "Other"
  const knownAreas = [...document.getElementById('f_puneArea').options].map(o => o.value);
  if (founder.puneArea && !knownAreas.includes(founder.puneArea)) {
    document.getElementById('f_puneArea').value = 'Other';
    document.getElementById('f_puneAreaOther').value = founder.puneArea;
    document.getElementById('f_puneAreaOther').style.display = 'block';
  } else {
    document.getElementById('f_puneArea').value = founder.puneArea || '';
    document.getElementById('f_puneAreaOther').value = '';
    document.getElementById('f_puneAreaOther').style.display = 'none';
  }

  document.getElementById('f_company').value = founder.company || '';
  document.getElementById('f_foundedYear').value = (founder.foundedYear && founder.foundedYear !== '0') ? founder.foundedYear : '';
  document.getElementById('f_oneLiner').value = founder.oneLiner || '';
  document.getElementById('f_whatsapp').value = founder.whatsapp || '';
  document.getElementById('f_email').value = founder.email || '';
  document.getElementById('f_linkedin').value = founder.linkedin || '';
  document.getElementById('f_twitter').value = founder.twitter || '';
  document.getElementById('f_facebook').value = founder.facebook || '';
  document.getElementById('f_instagram').value = founder.instagram || '';
  document.getElementById('f_website').value = founder.website || '';

  // Set tag selectors
  setTagSelector('industrySelector', 'f_industry', founder.industry || '', false);
  setTagSelector('stageSelector', 'f_stage', founder.stage || '', false);
  setTagSelector('helpSelector', 'f_helpNeeded', founder.helpNeeded || '', true);
  setTagSelector('offerSelector', 'f_canOffer', founder.canOffer || '', true);
  toggleOtherIndustry();

  document.getElementById('modalOverlay').classList.add('open');
  pushOverlayState('modal');
  lockScroll();
}

function setTagSelector(containerId, hiddenId, value, multi) {
  const container = document.getElementById(containerId);
  const vals = tags(value);
  container.querySelectorAll('.tag-option').forEach(c => {
    if (multi) {
      c.classList.toggle('selected', vals.includes(c.dataset.value));
    } else {
      c.classList.toggle('selected', vals.includes(c.dataset.value));
    }
  });
  document.getElementById(hiddenId).value = value;
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
  unlockScroll();
  // Reset form
  document.getElementById('founderForm').reset();
  document.querySelectorAll('#profileModal .tag-option.selected').forEach(c => c.classList.remove('selected'));
  ['f_industry', 'f_stage', 'f_helpNeeded', 'f_canOffer', 'f_editId'].forEach(id => document.getElementById(id).value = '');
  // Reset "Other" fields
  document.getElementById('f_puneAreaOther').style.display = 'none';
  document.getElementById('f_puneAreaOther').value = '';
  const indOther = document.getElementById('f_industryOther');
  if (indOther) { indOther.style.display = 'none'; indOther.value = ''; }
  isEditMode = false;
}

// Detail overlay
document.getElementById('modalOverlay').addEventListener('click', e => { if (e.target === e.currentTarget) closeModal(); });
document.getElementById('detailOverlay').addEventListener('click', e => { if (e.target === e.currentTarget) closeDetail(); });
document.getElementById('celebrationOverlay').addEventListener('click', e => { if (e.target === e.currentTarget) closeCelebration(); });
document.getElementById('editDialogOverlay').addEventListener('click', e => { if (e.target === e.currentTarget) closeEditDialog(); });

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    if (document.getElementById('celebrationOverlay').classList.contains('open')) closeCelebration();
    else if (document.getElementById('editDialogOverlay').classList.contains('open')) closeEditDialog();
    else if (document.getElementById('detailOverlay').classList.contains('open')) closeDetail();
    else if (document.getElementById('modalOverlay').classList.contains('open')) closeModal();
    else if (document.getElementById('mobileMenu').classList.contains('open')) closeMobileMenu();
  }
});

// ---- BROWSER BACK BUTTON SUPPORT (mobile) ----
// Push history state when opening overlays so the back button closes them

function pushOverlayState(name) {
  history.pushState({ overlay: name }, '');
}

window.addEventListener('popstate', e => {
  if (document.getElementById('celebrationOverlay').classList.contains('open')) { closeCelebration(); return; }
  if (document.getElementById('editDialogOverlay').classList.contains('open')) { closeEditDialog(); return; }
  if (document.getElementById('detailOverlay').classList.contains('open')) { closeDetail(); return; }
  if (document.getElementById('modalOverlay').classList.contains('open')) { closeModal(); return; }
  if (document.getElementById('mobileMenu').classList.contains('open')) { closeMobileMenu(); return; }
});

// Mobile menu — full-page overlay
document.getElementById('mobileMenuBtn').addEventListener('click', () => {
  const menu = document.getElementById('mobileMenu');
  const isOpen = menu.classList.contains('open');
  if (isOpen) {
    closeMobileMenu();
  } else {
    menu.classList.add('open');
    pushOverlayState('mobileMenu');
    lockScroll();
    document.getElementById('menuIconOpen').style.display = 'none';
    document.getElementById('menuIconClose').style.display = 'block';
  }
});

function closeMobileMenu() {
  const menu = document.getElementById('mobileMenu');
  menu.classList.remove('open');
  document.getElementById('menuIconOpen').style.display = 'block';
  document.getElementById('menuIconClose').style.display = 'none';
  unlockScroll();
}

// Navbar scroll
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  if (nav) nav.classList.toggle('scrolled', window.scrollY > 10);
});

// ---- EDIT DIALOG ----

function openEditDialog() {
  document.getElementById('editIdInput').value = '';
  document.getElementById('editIdError').textContent = '';
  document.getElementById('editDialogOverlay').classList.add('open');
  pushOverlayState('editDialog');
  lockScroll();
  setTimeout(() => document.getElementById('editIdInput').focus(), 200);
}

function closeEditDialog() {
  document.getElementById('editDialogOverlay').classList.remove('open');
  unlockScroll();
}

function loadProfileForEdit() {
  const id = document.getElementById('editIdInput').value.trim();
  const errEl = document.getElementById('editIdError');
  const btn = document.getElementById('editIdSubmit');

  if (!id) { errEl.textContent = 'Drop your Profile ID first.'; return; }

  const founder = allFounders.find(f => f.id === id);
  if (!founder) {
    errEl.textContent = 'No profile found with that ID. Double-check it.';
    return;
  }

  errEl.textContent = '';
  closeEditDialog();
  openModalForEdit(founder);
}

// ---- CELEBRATION ----

function showCelebration(id) {
  document.getElementById('celebrationId').textContent = id;
  document.getElementById('celebrationOverlay').classList.add('open');
  pushOverlayState('celebration');
  lockScroll();
  launchConfetti();
}

function closeCelebration() {
  document.getElementById('celebrationOverlay').classList.remove('open');
  unlockScroll();
  // Wait a tick for scroll position to restore, then scroll to directory
  setTimeout(() => {
    document.getElementById('directory').scrollIntoView({ behavior: 'smooth' });
  }, 50);
}

document.getElementById('copyIdBtn').addEventListener('click', () => {
  const id = document.getElementById('celebrationId').textContent;
  navigator.clipboard.writeText(id).then(() => {
    document.getElementById('copyIdBtn').innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6 9 17l-5-5"/></svg> Copied!';
    setTimeout(() => {
      document.getElementById('copyIdBtn').innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg> Copy ID';
    }, 2000);
  });
});

// ---- CONFETTI ----

function launchConfetti() {
  const container = document.getElementById('confettiContainer');
  container.innerHTML = '';
  const colors = ['#6366F1', '#8B5CF6', '#EC4899', '#F59E0B', '#10B981', '#3B82F6', '#EF4444', '#FBBF24', '#34D399'];

  for (let i = 0; i < 80; i++) {
    const piece = document.createElement('div');
    piece.className = 'confetti-piece';
    const size = Math.random() * 8 + 4;
    const isCircle = Math.random() > 0.5;
    piece.style.cssText = `
      width: ${size}px; height: ${isCircle ? size : size * 0.6}px;
      background: ${colors[Math.floor(Math.random() * colors.length)]};
      left: ${Math.random() * 100}%;
      border-radius: ${isCircle ? '50%' : '2px'};
      animation-duration: ${Math.random() * 1.5 + 2}s;
      animation-delay: ${Math.random() * 0.6}s;
    `;
    container.appendChild(piece);
  }
  setTimeout(() => { container.innerHTML = ''; }, 4000);
}

// ---- RENDERING ----

function updateStats() {
  animateNum(document.getElementById('founderCount'), allFounders.length);
  const cos = new Set(allFounders.map(f => f.company.toLowerCase()));
  animateNum(document.getElementById('companyCount'), cos.size);
}

function renderFounders(list) {
  const grid = document.getElementById('founderGrid');
  const empty = document.getElementById('emptyState');
  const noRes = document.getElementById('noResults');
  const loading = document.getElementById('loadingState');
  const countEl = document.getElementById('resultsCount');

  loading.style.display = 'none';
  grid.innerHTML = '';
  noRes.style.display = 'none';
  empty.style.display = 'none';

  if (allFounders.length === 0) {
    empty.style.display = 'block';
    countEl.textContent = '';
    return;
  }

  if (list.length === 0) {
    noRes.style.display = 'block';
    countEl.textContent = 'No builders match your search';
    return;
  }

  countEl.textContent = list.length === allFounders.length
    ? `${allFounders.length} founder${allFounders.length !== 1 ? 's' : ''}`
    : `${list.length} of ${allFounders.length} founders`;

  list.forEach((f, i) => grid.appendChild(createCard(f, i)));
}

// ---- SORTING ----

function sortFounders(list, method) {
  const sorted = [...list];
  switch (method) {
    case 'newest': return sorted.reverse();
    case 'oldest': return sorted;
    case 'name': return sorted.sort((a, b) => a.name.localeCompare(b.name));
    case 'company': return sorted.sort((a, b) => a.company.localeCompare(b.company));
    default: return sorted.reverse();
  }
}

// ---- FILTERING ----

function applyFilters() {
  const q = document.getElementById('searchInput').value.toLowerCase().trim();
  const sortMethod = document.getElementById('sortSelect').value;
  let filtered = [...allFounders];

  // Text search — split into terms for multi-word search
  if (q) {
    const terms = q.split(/\s+/).filter(Boolean);
    filtered = filtered.filter(f => {
      const searchable = [
        f.name, f.company, f.oneLiner, f.industry, f.helpNeeded, f.canOffer,
        f.role, f.puneArea, f.bio, f.stage
      ].filter(Boolean).join(' ').toLowerCase();
      return terms.every(term => searchable.includes(term));
    });
  }

  // Tag filters
  if (activeFilters.industry.length) {
    filtered = filtered.filter(f => {
      const t = tags(f.industry);
      return activeFilters.industry.some(x => t.includes(x));
    });
  }
  if (activeFilters.stage.length) {
    filtered = filtered.filter(f => activeFilters.stage.includes(f.stage));
  }
  if (activeFilters.help.length) {
    filtered = filtered.filter(f => {
      const t = tags(f.helpNeeded);
      return activeFilters.help.some(x => t.includes(x));
    });
  }
  if (activeFilters.offer.length) {
    filtered = filtered.filter(f => {
      const t = tags(f.canOffer);
      return activeFilters.offer.some(x => t.includes(x));
    });
  }

  filtered = sortFounders(filtered, sortMethod);
  renderFounders(filtered);
  updateActiveFiltersUI();
  updateFilterBadge();
}

function updateActiveFiltersUI() {
  const wrap = document.getElementById('activeFilters');
  const tagsEl = document.getElementById('activeFilterTags');
  const all = [
    ...activeFilters.industry.map(t => ({ l: t, k: 'industry' })),
    ...activeFilters.stage.map(t => ({ l: t, k: 'stage' })),
    ...activeFilters.help.map(t => ({ l: t, k: 'help' })),
    ...activeFilters.offer.map(t => ({ l: t, k: 'offer' })),
  ];
  if (!all.length) { wrap.style.display = 'none'; return; }
  wrap.style.display = 'flex';
  tagsEl.innerHTML = all.map(({ l, k }) =>
    `<span class="active-tag">${esc(l)}<button onclick="removeFilter('${k}','${l.replace(/'/g, "\\'")}')">\u00d7</button></span>`
  ).join('');
}

function removeFilter(key, val) {
  activeFilters[key] = activeFilters[key].filter(v => v !== val);
  const mapId = { industry: 'industryFilters', stage: 'stageFilters', help: 'helpFilters', offer: 'offerFilters' };
  document.getElementById(mapId[key]).querySelectorAll('.filter-chip').forEach(c => {
    if (c.dataset.value === val) c.classList.remove('active');
  });
  applyFilters();
}

function updateFilterBadge() {
  const total = activeFilters.industry.length + activeFilters.stage.length + activeFilters.help.length + activeFilters.offer.length;
  const badge = document.getElementById('filterCountBadge');
  badge.style.display = total > 0 ? 'inline' : 'none';
  badge.textContent = total;
}

// Clear all
document.getElementById('clearAllFilters').addEventListener('click', clearAll);
document.getElementById('clearAllLink').addEventListener('click', clearAll);

function clearAll() {
  activeFilters = { industry: [], stage: [], help: [], offer: [] };
  document.querySelectorAll('.filter-chip.active').forEach(c => c.classList.remove('active'));
  applyFilters();
}

// Filter toggle
document.getElementById('filterToggle').addEventListener('click', () => {
  const panel = document.getElementById('filterPanel');
  const btn = document.getElementById('filterToggle');
  const isOpen = panel.style.display !== 'none';
  panel.style.display = isOpen ? 'none' : 'block';
  btn.classList.toggle('active', !isOpen);
});

// Search
const doSearch = debounce(() => applyFilters(), 200);
document.getElementById('searchInput').addEventListener('input', (e) => {
  document.getElementById('searchClear').style.display = e.target.value ? 'flex' : 'none';
  document.getElementById('searchSuggestions').style.display = e.target.value ? 'none' : 'flex';
  doSearch();
});

document.getElementById('searchClear').addEventListener('click', () => {
  document.getElementById('searchInput').value = '';
  document.getElementById('searchClear').style.display = 'none';
  document.getElementById('searchSuggestions').style.display = 'flex';
  applyFilters();
});

// Search suggestions
document.querySelectorAll('.suggestion-chip').forEach(chip => {
  chip.addEventListener('click', () => {
    const q = chip.dataset.query;
    document.getElementById('searchInput').value = q;
    document.getElementById('searchClear').style.display = 'flex';
    document.getElementById('searchSuggestions').style.display = 'none';
    applyFilters();
  });
});

// Sort
document.getElementById('sortSelect').addEventListener('change', applyFilters);

// ---- DATA LOADING ----

async function loadFounders() {
  try {
    const res = await fetch(SCRIPT_URL, { redirect: 'follow' });
    const text = await res.text();
    let data;
    try { data = JSON.parse(text); } catch { throw new Error('Invalid response'); }
    if (data.error) throw new Error(data.error);
    allFounders = Array.isArray(data) ? data : [];
    applyFilters();
    updateStats();
  } catch (err) {
    console.error('Load failed:', err);
    document.getElementById('loadingState').innerHTML = '<p style="color:#EF4444;">Failed to load the builders. Refresh and try again.</p>';
  }
}

// ---- FORM SUBMISSION ----

document.getElementById('founderForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const btn = document.getElementById('submitBtn');
  const msg = document.getElementById('formMessage');
  const btnText = btn.querySelector('.btn-text');
  const btnLoad = btn.querySelector('.btn-loading');

  btn.disabled = true;
  btnText.style.display = 'none';
  btnLoad.style.display = 'inline-flex';
  msg.textContent = '';
  msg.className = 'form-message';

  const data = {
    name: document.getElementById('f_name').value.trim(),
    role: document.getElementById('f_role').value.trim(),
    bio: document.getElementById('f_bio').value.trim(),
    puneArea: getAreaValue(),
    company: document.getElementById('f_company').value.trim(),
    foundedYear: document.getElementById('f_foundedYear').value.trim(),
    oneLiner: document.getElementById('f_oneLiner').value.trim(),
    industry: getIndustryValue(),
    stage: document.getElementById('f_stage').value.trim(),
    helpNeeded: document.getElementById('f_helpNeeded').value.trim(),
    canOffer: document.getElementById('f_canOffer').value.trim(),
    whatsapp: document.getElementById('f_whatsapp').value.trim(),
    email: document.getElementById('f_email').value.trim(),
    linkedin: document.getElementById('f_linkedin').value.trim(),
    twitter: document.getElementById('f_twitter').value.trim(),
    facebook: document.getElementById('f_facebook').value.trim(),
    instagram: document.getElementById('f_instagram').value.trim(),
    website: document.getElementById('f_website').value.trim(),
  };

  // Validation
  if (!data.name || !data.company || !data.oneLiner || !data.whatsapp || !data.industry || !data.stage) {
    msg.textContent = 'Yo, fill in the required fields first.';
    msg.className = 'form-message error';
    btn.disabled = false; btnText.style.display = 'inline'; btnLoad.style.display = 'none';
    return;
  }

  const editId = document.getElementById('f_editId').value.trim();

  // Duplicate check (only for new entries)
  if (!editId) {
    const clean = data.whatsapp.replace(/\D/g, '');
    const dup = allFounders.find(f => f.whatsapp && f.whatsapp.replace(/\D/g, '') === clean);
    if (dup) {
      msg.textContent = "This number's already on the map. Use Edit Profile to update your info.";
      msg.className = 'form-message error';
      btn.disabled = false; btnText.style.display = 'inline'; btnLoad.style.display = 'none';
      return;
    }
  }

  // Add action for the Apps Script
  if (editId) {
    data.action = 'update';
    data.id = editId;
  } else {
    data.action = 'add';
  }

  try {
    await fetch(SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'text/plain' },
      body: JSON.stringify(data)
    });

    // Wait for sheet to update, then reload
    await new Promise(r => setTimeout(r, 2000));
    await loadFounders();

    if (editId) {
      // Edit mode — just show success toast
      msg.textContent = 'Looking good. Profile updated.';
      msg.className = 'form-message success';
      showToast('Profile updated. Looking sharp.');
      setTimeout(() => closeModal(), 1200);
    } else {
      // New entry — find the new ID and show celebration
      const clean = data.whatsapp.replace(/\D/g, '');
      const newFounder = allFounders.find(f => f.whatsapp && f.whatsapp.replace(/\D/g, '') === clean);
      const newId = newFounder ? newFounder.id : 'Unknown';

      closeModal();
      showCelebration(newId);
    }
  } catch (err) {
    msg.textContent = 'Something broke on our end. Refresh and try again?';
    msg.className = 'form-message error';
    console.error(err);
  } finally {
    btn.disabled = false;
    btnText.style.display = 'inline';
    btnLoad.style.display = 'none';
  }
});

// ---- INIT ----
loadFounders();
