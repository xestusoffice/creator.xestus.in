/* XESTUS Creator Studio Engine */

// Tab Switching
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tool-card').forEach(c => c.classList.remove('active'));

    btn.classList.add('active');
    const targetId = btn.dataset.tab;
    const targetCard = document.getElementById(targetId);
    if (targetCard) targetCard.classList.add('active');
  });
});

// Tool 1: YouTube Thumbnail Grabber
function extractVideoId(url) {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|shorts\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
}

window.fetchThumbnails = function() {
  const input = document.getElementById('ytUrlInput').value.trim();
  const videoId = extractVideoId(input);
  const container = document.getElementById('thumbnailResults');

  if (!videoId) {
    alert('দয়া করে সঠিক YouTube ভিডিও বা Shorts লিঙ্ক প্রদান করুন!');
    return;
  }

  const qualities = [
    { name: "Ultra HD (1080p/4K)", file: "maxresdefault.jpg" },
    { name: "High Definition (HQ)", file: "hqdefault.jpg" },
    { name: "Standard (SD)", file: "sddefault.jpg" },
    { name: "Medium (MQ)", file: "mqdefault.jpg" }
  ];

  container.innerHTML = qualities.map(q => {
    const imgUrl = `https://img.youtube.com/vi/${videoId}/${q.file}`;
    return `
      <div class="thumbnail-item">
        <img src="${imgUrl}" alt="${q.name}" onerror="this.src='https://img.youtube.com/vi/${videoId}/hqdefault.jpg'">
        <div class="thumbnail-info">
          <span>${q.name}</span>
          <a href="${imgUrl}" target="_blank" download class="btn-download-sm"><i class="fa-solid fa-download"></i> ওপেন / সেভ</a>
        </div>
      </div>
    `;
  }).join('');
};

// Tool 2: Viral Hooks & Script Generator
const hooksDatabase = {
  tech: [
    "এই ৩টি AI টুল আপনার ঘন্টার কাজ ৫ মিনিটে শেষ করে দেবে!",
    "৯৯% মানুষ ফোনের এই গোপন সেটিংসটি জানে না!",
    "২০২৬ সালে সবচেয়ে বেশি বেতনের টপ ৫টি ফ্রিল্যান্সিং স্কিল।"
  ],
  facts: [
    "মহাকাশের এমন ৩টি ভয়ানক রহস্য যা বিজ্ঞানীদেরও চমকে দিয়েছে!",
    "ইতিহাসের এমন এক রাজা যার সম্পদের হিসাব আজও কেউ করতে পারেনি!",
    "এই সাধারণ ভুলের জন্য মানুষের ব্রেন ৯০% ধীরে কাজ করে।"
  ],
  money: [
    "প্রতি মাসে ₹১০,০০০ সঞ্চয় করে কীভাবে কোটিপতি হওয়া সম্ভব?",
    "স্টুডেন্ট অবস্থায় ইনকাম শুরু করার ৩টি জিরো-ইনভেস্টমেন্ট পদ্ধতি।",
    "ধনী ব্যক্তিরা টাকা খরচ করার আগে যে গোল্ডেন নিয়ম মেনে চলে!"
  ],
  motivation: [
    "যদি আপনি জীবনে পিছিয়ে পড়ছেন মনে হয়, তবে এই ৩০ সেকেন্ড আপনার জন্য!",
    "মানুষ তখন আপনার মূল্য বুঝবে যখন আপনি নিজেকে সময় দেবেন।",
    "সাফল্যের একমাত্র সিক্রেট যা আপনাকে কেউ বলবে না!"
  ]
};

window.generateHooks = function() {
  const niche = document.getElementById('nicheSelect').value;
  const list = hooksDatabase[niche] || hooksDatabase.tech;
  const resultDiv = document.getElementById('hooksResult');

  resultDiv.innerHTML = `
    <div style="background: #0b1120; border: 1px solid #1e293b; border-radius: 12px; padding: 1.25rem;">
      <h4 style="color: #c4b5fd; margin-bottom: 0.75rem;"><i class="fa-solid fa-fire"></i> ৩টি ভাইরাল হুক স্ক্রিপ্ট:</h4>
      <ol style="padding-left: 1.25rem; line-height: 1.8;">
        ${list.map(h => `<li style="margin-bottom: 8px;"><strong>"${h}"</strong></li>`).join('')}
      </ol>
      <div style="margin-top: 1rem; font-size: 0.85rem; color: #94a3b8;">
        💡 <em>টিপ: ভিডিওর প্রথম ৩ সেকেন্ডে এই হুকটি জোরে এবং আত্মবিশ্বাসের সাথে বলুন।</em>
      </div>
    </div>
  `;
};

// Tool 3: Hashtag & Tag Generator
const tagSets = {
  general: ["#viral", "#trending", "#reels", "#explore", "#shorts", "#foryou", "#youtubeshorts", "#viralreels"],
  bengali: ["#bangla", "#kolkata", "#westbengal", "#bengali", "#banglareels", "#kolkatadiaries", "#banglashorts"],
  tech: ["#technology", "#ai", "#techhacks", "#gadgets", "#software", "#coding", "#futuretech"],
  jobs: ["#sarkarinaukri", "#wbjobs", "#panchayatexam", "#govtjobs", "#career", "#education", "#examtips"]
};

window.generateTags = function() {
  const topic = document.getElementById('tagInput').value.trim().toLowerCase();
  let generated = [...tagSets.general];

  if (topic.includes('bangla') || topic.includes('bengali') || topic.includes('kolkata')) {
    generated = [...generated, ...tagSets.bengali];
  }
  if (topic.includes('tech') || topic.includes('ai') || topic.includes('phone') || topic.includes('app')) {
    generated = [...generated, ...tagSets.tech];
  }
  if (topic.includes('job') || topic.includes('exam') || topic.includes('panchayat') || topic.includes('study')) {
    generated = [...generated, ...tagSets.jobs];
  }

  // add specific word tags
  if (topic) {
    const cleanWord = topic.replace(/\s+/g, '');
    generated.unshift('#' + cleanWord);
  }

  const container = document.getElementById('tagsContainer');
  container.innerHTML = generated.map(t => `<span class="tag-badge">${t}</span>`).join('');
  document.getElementById('copyTagsBtn').style.display = 'inline-flex';
};

window.copyAllTags = function() {
  const badges = document.querySelectorAll('.tag-badge');
  const text = Array.from(badges).map(b => b.innerText).join(' ');
  navigator.clipboard.writeText(text).then(() => {
    alert('সমস্ত ট্যাগ ও হ্যাশট্যাগ ক্লিপবোর্ডে কপি হয়েছে!');
  });
};

// Tool 4: Script Reading Timer
const scriptText = document.getElementById('scriptText');
if (scriptText) {
  scriptText.addEventListener('input', (e) => {
    const text = e.target.value.trim();
    const wordCount = text ? text.split(/\s+/).length : 0;
    // Average speech pace: 130-150 words per minute (approx 2.3 words per second)
    const seconds = Math.round(wordCount / 2.3);

    document.getElementById('wordCountDisplay').innerText = wordCount;
    document.getElementById('durationDisplay').innerText = seconds + ' সেকেন্ড';

    const statusEl = document.getElementById('shortStatus');
    if (seconds <= 30) {
      statusEl.innerHTML = '<span style="color: #10b981;">✓ পারফেক্ট ৩০-সেকেন্ড শর্টস / রিলস</span>';
    } else if (seconds <= 60) {
      statusEl.innerHTML = '<span style="color: #f59e0b;">✓ ৬০-সেকেন্ড পূর্ণ শর্টস</span>';
    } else {
      statusEl.innerHTML = '<span style="color: #ef4444;">⚠ শর্টস হিসেবে বড় (লং ভিডিওর জন্য উপযুক্ত)</span>';
    }
  });
}
