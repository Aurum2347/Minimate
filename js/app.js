const translations = {
    ru: {
        projects_title: 'Мои проекты',
        all_works: 'Все работы',
        filter_all: 'Все',
        filter_renders: 'Рендеры',
        filter_animations: 'Анимации',
        filter_available: 'Доступные',
        filter_unavailable: 'Недоступные',
        sort_label: 'Сортировка:',
        sort_date_new: 'По дате (новые)',
        sort_date_old: 'По дате (старые)',
        sort_name_az: 'По названию (А-Я)',
        sort_name_za: 'По названию (Я-А)',
        tech_info: 'Техническая информация',
        tech_type: 'Тип',
        tech_size: 'Размер файла',
        tech_date: 'Дата создания',
        download_project: 'Скачать проект',
        unavailable: 'Недоступно',
        unavailable_tooltip: 'Данный проект утерян в виде файлов, увы это просто картинка',
        too_big: 'Слишком большой',
        too_big_tooltip: 'Исходники слишком много весят, чтобы выложить их здесь. Напиши мне в Telegram',
        disabled_tooltip: 'Скачивание исходников временно отключено. Скоро вернётся!',
        video_error: 'Не удалось воспроизвести видео',
        video_open: 'Открыть файл',
        spotlight_label: 'Случайная работа',
        spotlight_open: 'Смотреть',
        spotlight_shuffle: 'Другая',
        mi_title: 'Скачать Mine-imator CB',
        mi_text: 'Не грузит сайт? Тогда можешь попробовать скачать с нашего личного архива, не бойся, тут вирусов нет.',
        mi_official: 'Официальный сайт',
        mi_archive: 'Личный архив',
        download_image: 'Скачать картинку',
        copy_image: 'Копировать картинку',
        footer_text: 'Все работы созданы в Mine-imator.',
        search_placeholder: 'Поиск проектов...',
        no_results: 'Ничего не найдено',
        no_results_text: 'Попробуйте изменить запрос или фильтры',
        results_count: 'Найдено: {count}',
        toast_downloaded: 'Изображение скачано',
        toast_copied: 'Изображение скопировано в буфер',
        toast_copy_error: 'Не удалось скопировать',
        toast_loop_on: 'Повтор включён',
        toast_loop_off: 'Повтор выключен',
        toast_screenshot: 'Скриншот сохранён',
        type_render: 'Рендер',
        type_animation: 'Анимация',
        video: 'Видео',
        days_ago: '{n} дн. назад',
        months_ago: '{n} мес. назад',
        years_ago: '{n} г. назад',
        today: 'Сегодня',
        yesterday: 'Вчера',
        loading: 'Загрузка проектов...',
        version_title: 'Выберите версию',
        version_subtitle: 'Личный архив Mine-imator CB',
        version_name_110: 'Версия 1.1.0',
        version_name_100: 'Версия 1.0.0',
        version_latest: 'Последняя версия',
        version_stable: 'Стабильная версия',
        back: 'Назад',
        sound_on: 'Звук включён',
        sound_off: 'Звук выключен'
    },
    en: {
        projects_title: 'My Projects',
        all_works: 'All works',
        filter_all: 'All',
        filter_renders: 'Renders',
        filter_animations: 'Animations',
        filter_available: 'Available',
        filter_unavailable: 'Unavailable',
        sort_label: 'Sort:',
        sort_date_new: 'By date (newest)',
        sort_date_old: 'By date (oldest)',
        sort_name_az: 'By name (A-Z)',
        sort_name_za: 'By name (Z-A)',
        tech_info: 'Technical info',
        tech_type: 'Type',
        tech_size: 'File size',
        tech_date: 'Created',
        download_project: 'Download project',
        unavailable: 'Unavailable',
        unavailable_tooltip: 'This project is lost as files, unfortunately it\'s just a picture',
        too_big: 'Too large',
        too_big_tooltip: 'Source files are too heavy to host here. Message me on Telegram',
        disabled_tooltip: 'Source downloads are temporarily disabled. Back soon!',
        video_error: 'Could not play this video',
        video_open: 'Open file',
        spotlight_label: 'Random work',
        spotlight_open: 'View',
        spotlight_shuffle: 'Another',
        mi_title: 'Download Mine-imator CB',
        mi_text: 'Site not loading? Try downloading from our personal archive, don\'t worry, no viruses here.',
        mi_official: 'Official site',
        mi_archive: 'Personal archive',
        download_image: 'Download image',
        copy_image: 'Copy image',
        footer_text: 'All works created in Mine-imator.',
        search_placeholder: 'Search projects...',
        no_results: 'Nothing found',
        no_results_text: 'Try changing your query or filters',
        results_count: 'Found: {count}',
        toast_downloaded: 'Image downloaded',
        toast_copied: 'Image copied to clipboard',
        toast_copy_error: 'Failed to copy',
        toast_loop_on: 'Loop enabled',
        toast_loop_off: 'Loop disabled',
        toast_screenshot: 'Screenshot saved',
        type_render: 'Render',
        type_animation: 'Animation',
        video: 'Video',
        days_ago: '{n}d ago',
        months_ago: '{n}mo ago',
        years_ago: '{n}y ago',
        today: 'Today',
        yesterday: 'Yesterday',
        loading: 'Loading projects...',
        version_title: 'Select version',
        version_subtitle: 'Personal archive of Mine-imator CB',
        version_name_110: 'Version 1.1.0',
        version_name_100: 'Version 1.0.0',
        version_latest: 'Latest version',
        version_stable: 'Stable version',
        back: 'Back',
        sound_on: 'Sound enabled',
        sound_off: 'Sound disabled'
    }
};
let currentLang = 'ru';
let allProjects = [];
let currentFilter = 'all';
let currentSort = 'date-desc';
let searchQuery = '';
let currentPage = 1;
const ITEMS_PER_PAGE = 4;
const PLACEHOLDER_SVG = 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22225%22%3E%3Crect fill=%22%231f1f1f%22 width=%22400%22 height=%22225%22/%3E%3Ctext fill=%22%23666%22 font-family=%22sans-serif%22 font-size=%2218%22 x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22%3ENo Preview%3C/text%3E%3C/svg%3E';
function t(key, params = {}) {
    let text = translations[currentLang][key] || key;
    Object.keys(params).forEach(p => {
        text = text.replace(`{${p}}`, params[p]);
    });
    return text;
}
function canDownload(p) {
    return p.download && p.download.kind !== 'none';
}
function slideBg(item) {
    return item.type === 'image' ? item.thumb : (item.poster || '');
}
function updateTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        el.textContent = t(key);
    });
    document.getElementById('searchInput').placeholder = t('search_placeholder');
    document.getElementById('langBtnText').textContent = currentLang.toUpperCase();
    document.querySelectorAll('.sort-option').forEach(opt => {
        const key = opt.getAttribute('data-i18n');
        if (key) {
            const textNode = opt.childNodes[0];
            if (textNode.nodeType === 3) {
                textNode.textContent = t(key) + ' ';
            }
        }
    });
    const activeSort = document.querySelector('.sort-option.active');
    if (activeSort) {
        const key = activeSort.getAttribute('data-i18n');
        if (key) {
            document.getElementById('sortTriggerText').textContent = t(key);
        }
    }
}
function setLang(lang) {
    if (lang === currentLang) return;
    const content = document.querySelector('.main-content');
    content.classList.add('lang-transitioning');
    setTimeout(() => {
        currentLang = lang;
        updateTranslations();
        renderProjects();
        content.classList.remove('lang-transitioning');
    }, 150);
    document.querySelectorAll('.lang-option').forEach(opt => {
        opt.classList.toggle('active', opt.dataset.lang === lang);
    });
    document.getElementById('langDropdown').classList.remove('open');
    document.getElementById('langBtn').classList.remove('open');
    playToggle();
}
function formatDate(dateStr) {
    const now = new Date();
    const date = new Date(dateStr);
    const diffMs = now - date;
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    if (diffDays === 0) return t('today');
    if (diffDays === 1) return t('yesterday');
    if (diffDays < 30) return t('days_ago', { n: diffDays });
    const diffMonths = Math.floor(diffDays / 30);
    if (diffMonths < 12) return t('months_ago', { n: diffMonths });
    const months = ['января','февраля','марта','апреля','мая','июня','июля','августа','сентября','октября','ноября','декабря'];
    const monthsEn = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    const m = currentLang === 'ru' ? months : monthsEn;
    return `${date.getDate()} ${m[date.getMonth()]} ${date.getFullYear()}`;
}
let audioCtx = null;
let soundEnabled = true;
try {
    soundEnabled = localStorage.getItem('minimate-sound') !== 'off';
} catch (e) {
    soundEnabled = true;
}
function ensureAudio() {
    if (!audioCtx) {
        const AudioClass = window.AudioContext || window.webkitAudioContext;
        if (AudioClass) audioCtx = new AudioClass();
    }
    if (audioCtx && audioCtx.state === 'suspended') audioCtx.resume();
}
function playTone(opts) {
    if (!soundEnabled) return;
    ensureAudio();
    if (!audioCtx) return;
    const from = opts.from !== undefined ? opts.from : 440;
    const to = opts.to !== undefined ? opts.to : from;
    const duration = opts.duration !== undefined ? opts.duration : 0.1;
    const type = opts.type !== undefined ? opts.type : 'square';
    const volume = opts.volume !== undefined ? opts.volume : 0.05;
    const delay = opts.delay !== undefined ? opts.delay : 0;
    const t0 = audioCtx.currentTime + delay;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(from, t0);
    if (to !== from) osc.frequency.exponentialRampToValueAtTime(to, t0 + duration);
    gain.gain.setValueAtTime(volume, t0);
    gain.gain.exponentialRampToValueAtTime(0.001, t0 + duration);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start(t0);
    osc.stop(t0 + duration + 0.02);
}
function playNoise(opts) {
    if (!soundEnabled) return;
    ensureAudio();
    if (!audioCtx) return;
    const duration = opts.duration !== undefined ? opts.duration : 0.15;
    const volume = opts.volume !== undefined ? opts.volume : 0.03;
    const from = opts.from !== undefined ? opts.from : 800;
    const to = opts.to !== undefined ? opts.to : 1600;
    const delay = opts.delay !== undefined ? opts.delay : 0;
    const t0 = audioCtx.currentTime + delay;
    const frames = Math.floor(audioCtx.sampleRate * duration);
    const buffer = audioCtx.createBuffer(1, frames, audioCtx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < frames; i++) data[i] = Math.random() * 2 - 1;
    const src = audioCtx.createBufferSource();
    src.buffer = buffer;
    const filter = audioCtx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(from, t0);
    filter.frequency.exponentialRampToValueAtTime(to, t0 + duration);
    filter.Q.value = 1;
    const gain = audioCtx.createGain();
    gain.gain.setValueAtTime(volume, t0);
    gain.gain.exponentialRampToValueAtTime(0.001, t0 + duration);
    src.connect(filter);
    filter.connect(gain);
    gain.connect(audioCtx.destination);
    src.start(t0);
    src.stop(t0 + duration + 0.02);
}
function playClick() {
    playTone({ from: 220, to: 110, duration: 0.08, type: 'square', volume: 0.05 });
}
function playToggle() {
    playTone({ from: 330, to: 440, duration: 0.07, type: 'square', volume: 0.045 });
    playTone({ from: 660, to: 660, duration: 0.05, type: 'square', volume: 0.03, delay: 0.06 });
}
function playOpen() {
    playTone({ from: 300, to: 600, duration: 0.12, type: 'triangle', volume: 0.06 });
    playNoise({ duration: 0.12, volume: 0.02, from: 600, to: 1400 });
}
function playClose() {
    playTone({ from: 500, to: 240, duration: 0.12, type: 'triangle', volume: 0.06 });
    playNoise({ duration: 0.12, volume: 0.02, from: 1400, to: 500 });
}
function playPage() {
    playNoise({ duration: 0.18, volume: 0.035, from: 400, to: 1200 });
    playTone({ from: 180, to: 240, duration: 0.1, type: 'square', volume: 0.04, delay: 0.02 });
}
function playSlide() {
    playNoise({ duration: 0.14, volume: 0.03, from: 900, to: 1800 });
}
function playZoomIn() {
    playTone({ from: 420, to: 840, duration: 0.07, type: 'sine', volume: 0.05 });
}
function playZoomOut() {
    playTone({ from: 840, to: 420, duration: 0.07, type: 'sine', volume: 0.05 });
}
function playSuccess() {
    playTone({ from: 660, to: 660, duration: 0.09, type: 'sine', volume: 0.05 });
    playTone({ from: 880, to: 880, duration: 0.12, type: 'sine', volume: 0.05, delay: 0.09 });
}
function playError() {
    playTone({ from: 160, to: 110, duration: 0.18, type: 'sawtooth', volume: 0.05 });
}
function playSecret() {
    [523, 659, 784, 1046].forEach((f, i) => {
        playTone({ from: f, to: f, duration: 0.1, type: 'square', volume: 0.045, delay: i * 0.09 });
    });
}
function showToast(message, type = 'success') {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    const icon = type === 'success'
        ? '<svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>'
        : '<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>';
    toast.innerHTML = `${icon}<span>${message}</span>`;
    container.appendChild(toast);
    if (type === 'success') playSuccess();
    else playError();
    requestAnimationFrame(() => {
        toast.classList.add('visible');
    });
    setTimeout(() => {
        toast.classList.remove('visible');
        setTimeout(() => toast.remove(), 300);
    }, 2500);
}
function hidePreloader() {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        preloader.classList.add('fade-out');
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    }
}
function updateHeaderHeight() {
    const header = document.querySelector('.header');
    if (header) {
        document.documentElement.style.setProperty('--header-h', header.offsetHeight + 'px');
    }
}
async function loadProjects() {
    try {
        const res = await fetch(`projects/index.json?t=${Date.now()}`);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        allProjects = data.projects || [];
        if (allProjects.length === 0) {
            document.getElementById('projectsGrid').innerHTML = `
                <div class="empty-state">
                    <div class="empty-state-title">Нет проектов</div>
                    <div class="empty-state-text">Опубликуй проекты через Minimate Manager</div>
                </div>
            `;
            hidePreloader();
            return;
        }
        renderProjects();
        hidePreloader();
    } catch (e) {
        console.error(e);
        document.getElementById('projectsGrid').innerHTML = `
            <div class="empty-state">
                <div class="empty-state-title">Ошибка загрузки</div>
                <div class="empty-state-text">
                    Не удалось загрузить проекты.<br>
                    Проверьте консоль разработчика (F12) для деталей.
                </div>
            </div>
        `;
        hidePreloader();
    }
}
function getFilteredProjects() {
    let filtered = [...allProjects];
    if (searchQuery) {
        const q = searchQuery.toLowerCase();
        filtered = filtered.filter(p => {
            const name = typeof p.name === 'object' ? (p.name[currentLang] || p.name.ru || '') : p.name;
            return name.toLowerCase().includes(q);
        });
    }
    if (currentFilter === 'render') filtered = filtered.filter(p => p.type === 'render');
    else if (currentFilter === 'animation') filtered = filtered.filter(p => p.type === 'animation');
    else if (currentFilter === 'available') filtered = filtered.filter(p => canDownload(p));
    else if (currentFilter === 'unavailable') filtered = filtered.filter(p => !canDownload(p));
    if (currentSort === 'date-desc') filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
    else if (currentSort === 'date-asc') filtered.sort((a, b) => new Date(a.date) - new Date(b.date));
    else if (currentSort === 'name-asc') {
        filtered.sort((a, b) => {
            const nameA = typeof a.name === 'object' ? (a.name[currentLang] || a.name.ru || '') : a.name;
            const nameB = typeof b.name === 'object' ? (b.name[currentLang] || b.name.ru || '') : b.name;
            return nameA.localeCompare(nameB, currentLang === 'ru' ? 'ru' : 'en');
        });
    }
    else if (currentSort === 'name-desc') {
        filtered.sort((a, b) => {
            const nameA = typeof a.name === 'object' ? (a.name[currentLang] || a.name.ru || '') : a.name;
            const nameB = typeof b.name === 'object' ? (b.name[currentLang] || b.name.ru || '') : b.name;
            return nameB.localeCompare(nameA, currentLang === 'ru' ? 'ru' : 'en');
        });
    }
    return filtered;
}
function transitionGrid() {
    const grid = document.getElementById('projectsGrid');
    grid.classList.add('grid-fading');
    setTimeout(() => {
        renderProjects();
        requestAnimationFrame(() => {
            grid.classList.remove('grid-fading');
        });
    }, 180);
}
function createLoadingAnimation() {
    const svgNS = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(svgNS, "svg");
    svg.setAttribute("viewBox", "0 0 300 300");
    svg.style.width = "80px";
    svg.style.height = "80px";
    const trailsGroup = document.createElementNS(svgNS, "g");
    const squaresGroup = document.createElementNS(svgNS, "g");
    svg.appendChild(trailsGroup);
    svg.appendChild(squaresGroup);
    const numSquares = 5;
    const centerX = 150;
    const centerY = 150;
    const radius = 90;
    const sizes = [28, 23, 18, 13, 9];
    const opacities = [1, 0.85, 0.65, 0.4, 0.2];
    const squares = [];
    const trails = [];
    for (let i = 0; i < numSquares; i++) {
        const size = sizes[i];
        const square = document.createElementNS(svgNS, "rect");
        square.setAttribute("fill", "#f0f0f0");
        square.setAttribute("width", size);
        square.setAttribute("height", size);
        square.setAttribute("rx", 2);
        square.setAttribute("ry", 2);
        square.setAttribute("opacity", opacities[i]);
        squaresGroup.appendChild(square);
        squares.push(square);
        const trail = document.createElementNS(svgNS, "rect");
        trail.setAttribute("fill", "rgba(240, 240, 240, 0.15)");
        trail.setAttribute("width", size);
        trail.setAttribute("height", size);
        trail.setAttribute("rx", 2);
        trail.setAttribute("ry", 2);
        trailsGroup.appendChild(trail);
        trails.push(trail);
    }
    let baseAngle = -Math.PI / 2;
    let lastTime = 0;
    let prevAngles = new Array(numSquares).fill(baseAngle);
    const baseSpeed = 0.025;
    const speedVariation = 0.04;
    const spacingBase = 0.25;
    const spacingVariation = 0.15;
    function update(timestamp) {
        if (!lastTime) lastTime = timestamp;
        const deltaTime = Math.min((timestamp - lastTime) / 16.67, 2);
        lastTime = timestamp;
        const normalizedAngle = ((baseAngle + Math.PI / 2) % (2 * Math.PI) + 2 * Math.PI) % (2 * Math.PI);
        const speedFactor = Math.pow((1 - Math.cos(normalizedAngle)) / 2, 0.7);
        const omega = baseSpeed + speedVariation * speedFactor;
        baseAngle += omega * deltaTime;
        const currentSpacing = spacingBase + spacingVariation * speedFactor;
        for (let i = 0; i < numSquares; i++) {
            const angle = baseAngle - i * currentSpacing;
            const x = centerX + radius * Math.cos(angle);
            const y = centerY + radius * Math.sin(angle);
            const prevX = centerX + radius * Math.cos(prevAngles[i]);
            const prevY = centerY + radius * Math.sin(prevAngles[i]);
            const trail = trails[i];
            const size = sizes[i];
            trail.setAttribute('x', prevX - size / 2);
            trail.setAttribute('y', prevY - size / 2);
            const square = squares[i];
            square.setAttribute('x', x - size / 2);
            square.setAttribute('y', y - size / 2);
            prevAngles[i] = angle;
        }
        if (svg.isConnected) {
            requestAnimationFrame(update);
        }
    }
    requestAnimationFrame(update);
    return svg;
}
function renderProjects() {
    const grid = document.getElementById('projectsGrid');
    const filtered = getFilteredProjects();
    const totalPages = Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE));
    if (currentPage > totalPages) currentPage = totalPages;
    if (filtered.length === 0) {
        grid.innerHTML = `
            <div class="empty-state">
                <svg class="empty-state-icon" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
                <div class="empty-state-title">${t('no_results')}</div>
                <div class="empty-state-text">${t('no_results_text')}</div>
            </div>
        `;
        renderPagination(0);
        return;
    }
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const pageProjects = filtered.slice(startIndex, startIndex + ITEMS_PER_PAGE);
    const resultsInfo = document.getElementById('resultsInfo');
    if (searchQuery || currentFilter !== 'all') {
        resultsInfo.textContent = t('results_count', { count: filtered.length });
    } else {
        resultsInfo.textContent = '';
    }
    grid.innerHTML = '';
    pageProjects.forEach((project, index) => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.onclick = () => openModal(project);
        const name = typeof project.name === 'object' ? (project.name[currentLang] || project.name.ru || project.id) : project.name;
        const typeIcon = project.type === 'animation'
            ? '<svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>'
            : '<svg viewBox="0 0 24 24"><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/></svg>';
        const typeLabel = project.type === 'animation' ? t('type_animation') : t('type_render');
        let badges = '';
        if (project.hasVideo) {
            badges += `<div class="video-badge"><svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>${t('video')}</div>`;
        }
        let tagHtml = '';
        if (!canDownload(project)) {
            tagHtml = `<span class="project-card-tag"><svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>${t('filter_unavailable')}</span>`;
        }
        const previewUrl = project.preview || PLACEHOLDER_SVG;
        card.innerHTML = `
            ${badges}
            <div class="image-loading-overlay"></div>
            <img src="${previewUrl}" alt="${name}" class="project-card-image" loading="lazy" onerror="this.src='${PLACEHOLDER_SVG}'">
            <div class="project-card-content">
                <h3 class="project-card-title">${name}</h3>
                <div class="project-card-meta">
                    <span class="project-card-type">${typeIcon}${typeLabel}</span>
                    <span class="project-card-weight"><svg viewBox="0 0 24 24"><path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V8h16v10z"/></svg>${project.weight}</span>
                    ${tagHtml}
                </div>
            </div>
        `;
        const loadingOverlay = card.querySelector('.image-loading-overlay');
        const svgAnimation = createLoadingAnimation();
        loadingOverlay.appendChild(svgAnimation);
        const img = card.querySelector('.project-card-image');
        img.addEventListener('load', () => {
            loadingOverlay.classList.add('loaded');
        });
        card.addEventListener('mouseenter', () => {
            if (!project.gallery) return;
            project.gallery.slice(0, 2).forEach(item => {
                if (item.type !== 'image') return;
                const pre = new Image();
                pre.src = item.view;
            });
        }, { once: true });
        grid.appendChild(card);
        if (index === 1 && pageProjects.length > 2 && allProjects.length > pageProjects.length) {
            grid.appendChild(createSpotlight(pageProjects));
        }
    });
    renderPagination(totalPages);
}
function localized(value, fallback = '') {
    if (value && typeof value === 'object') return value[currentLang] || value.ru || value.en || fallback;
    return value || fallback;
}
function bigImage(project) {
    const first = (project.gallery || []).find(g => g.type === 'image');
    if (first) return first.view;
    const poster = (project.gallery || []).find(g => g.poster);
    return poster ? poster.poster : project.preview;
}
let spotlightId = null;
function createSpotlight(exclude) {
    const pool = allProjects.filter(p => !exclude.includes(p));
    let project = pool.find(p => p.id === spotlightId);
    if (!project) {
        project = pool[Math.floor(Math.random() * pool.length)];
        spotlightId = project.id;
    }
    const el = document.createElement('div');
    el.className = 'spotlight';
    el.innerHTML = `
        <div class="spotlight-bg" style="background-image: url('${bigImage(project)}')"></div>
        <div class="spotlight-shade"></div>
        <div class="spotlight-content">
            <span class="spotlight-label">★ ${t('spotlight_label')}</span>
            <h3 class="spotlight-title">${localized(project.name, project.id)}</h3>
            <p class="spotlight-desc">${localized(project.description)}</p>
            <div class="spotlight-actions">
                <button class="mc-btn mc-btn-small spotlight-open">${t('spotlight_open')}</button>
                ${pool.length > 1 ? `<button class="mc-btn mc-btn-gray mc-btn-small spotlight-shuffle">↻ ${t('spotlight_shuffle')}</button>` : ''}
            </div>
        </div>
    `;
    el.querySelector('.spotlight-open').onclick = (e) => { e.stopPropagation(); openModal(project); };
    const shuffle = el.querySelector('.spotlight-shuffle');
    if (shuffle) shuffle.onclick = (e) => {
        e.stopPropagation();
        const others = pool.filter(p => p.id !== spotlightId);
        spotlightId = others[Math.floor(Math.random() * others.length)].id;
        playSlide();
        el.classList.add('spotlight-swap');
        setTimeout(() => el.replaceWith(createSpotlight(exclude)), 220);
    };
    el.addEventListener('click', () => openModal(project));
    const bg = el.querySelector('.spotlight-bg');
    el.addEventListener('pointermove', (e) => {
        if (e.pointerType !== 'mouse') return;
        const r = el.getBoundingClientRect();
        el.style.setProperty('--mx', ((e.clientX - r.left) / r.width - 0.5).toFixed(3));
        el.style.setProperty('--my', ((e.clientY - r.top) / r.height - 0.5).toFixed(3));
    });
    el.addEventListener('pointerleave', () => {
        el.style.setProperty('--mx', 0);
        el.style.setProperty('--my', 0);
    });
    parallaxTargets.add(el);
    requestAnimationFrame(updateParallax);
    return el;
}
const parallaxTargets = new Set();
let parallaxQueued = false;
function updateParallax() {
    parallaxQueued = false;
    const vh = window.innerHeight;
    parallaxTargets.forEach(el => {
        if (!el.isConnected) { parallaxTargets.delete(el); return; }
        const r = el.getBoundingClientRect();
        const progress = (r.top + r.height / 2 - vh / 2) / vh;
        el.style.setProperty('--scroll', Math.max(-1, Math.min(1, progress)).toFixed(3));
    });
}
window.addEventListener('scroll', () => {
    if (parallaxQueued) return;
    parallaxQueued = true;
    requestAnimationFrame(updateParallax);
}, { passive: true });
function renderPagination(totalPages) {
    const pagination = document.getElementById('pagination');
    pagination.innerHTML = '';
    if (totalPages <= 1) return;
    const controls = document.createElement('div');
    controls.className = 'pagination-controls';
    const prevBtn = document.createElement('button');
    prevBtn.className = 'page-btn prev-btn';
    prevBtn.disabled = currentPage === 1;
    prevBtn.innerHTML = '<svg viewBox="0 0 24 24"><path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6z"/></svg>';
    prevBtn.onclick = () => goToPage(currentPage - 1);
    controls.appendChild(prevBtn);
    for (let i = 1; i <= totalPages; i++) {
        const pageBtn = document.createElement('button');
        pageBtn.className = 'page-btn' + (i === currentPage ? ' active' : '');
        pageBtn.textContent = i;
        pageBtn.onclick = () => goToPage(i);
        controls.appendChild(pageBtn);
    }
    const nextBtn = document.createElement('button');
    nextBtn.className = 'page-btn next-btn';
    nextBtn.disabled = currentPage === totalPages;
    nextBtn.innerHTML = '<svg viewBox="0 0 24 24"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z"/></svg>';
    nextBtn.onclick = () => goToPage(currentPage + 1);
    controls.appendChild(nextBtn);
    pagination.appendChild(controls);
    const progressContainer = document.createElement('div');
    progressContainer.className = 'pagination-progress';
    const progressFill = document.createElement('div');
    progressFill.className = 'pagination-progress-fill';
    progressFill.style.width = '0%';
    const progressText = document.createElement('div');
    progressText.className = 'pagination-progress-text';
    progressText.textContent = `${currentPage} / ${totalPages}`;
    progressContainer.appendChild(progressFill);
    progressContainer.appendChild(progressText);
    pagination.appendChild(progressContainer);
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            progressFill.style.width = ((currentPage / totalPages) * 100) + '%';
        });
    });
}
function goToPage(page) {
    const filtered = getFilteredProjects();
    const totalPages = Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE));
    if (page < 1 || page > totalPages || page === currentPage) return;
    currentPage = page;
    playPage();
    transitionGrid();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
const modalOverlay = document.getElementById('modalOverlay');
const modalClose = document.getElementById('modalClose');
const carouselTrack = document.getElementById('carouselTrack');
const carouselDots = document.getElementById('carouselDots');
const carouselThumbs = document.getElementById('carouselThumbs');
const carouselPrev = document.getElementById('carouselPrev');
const carouselNext = document.getElementById('carouselNext');
const carouselContainer = document.getElementById('carouselContainer');
const btnMineImator = document.getElementById('btnMineImator');
const downloadButtonContainer = document.getElementById('downloadButtonContainer');
const miModalOverlay = document.getElementById('miModalOverlay');
const miModalClose = document.getElementById('miModalClose');
const zoomIndicator = document.getElementById('zoomIndicator');
const galleryActions = document.getElementById('galleryActions');
const btnDownloadImage = document.getElementById('btnDownloadImage');
const btnCopyImage = document.getElementById('btnCopyImage');
const btnArchive = document.getElementById('btnArchive');
const versionModalOverlay = document.getElementById('versionModalOverlay');
const versionModalClose = document.getElementById('versionModalClose');
const versionBackBtn = document.getElementById('versionBackBtn');
const memeOverlay = document.getElementById('memeOverlay');
const memeClose = document.getElementById('memeClose');
const soundToggle = document.getElementById('soundToggle');
let currentSlide = 0;
let currentProject = null;
let currentVideoEl = null;
let currentZoom = 1;
let currentPanX = 0;
let currentPanY = 0;
let isDragging = false;
let dragStartX = 0;
let dragStartY = 0;
let panStartX = 0;
let panStartY = 0;
let currentImageEl = null;
const activePointers = new Map();
let panPointerId = null;
let pinchStartDist = 0;
let pinchStartZoom = 1;
let swipeMode = false;
let swipeStartX = 0;
let swipeStartY = 0;
function formatTime(seconds) {
    if (isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}
function syncCurrentMedia() {
    const slides = carouselTrack.querySelectorAll('.carousel-slide');
    const slide = slides[currentSlide];
    currentVideoEl = null;
    currentImageEl = null;
    if (slide) {
        const video = slide.querySelector('video');
        if (video) currentVideoEl = video;
        const img = slide.querySelector('img.gallery-image');
        if (img) currentImageEl = img;
    }
}
function getPanBounds() {
    if (!currentImageEl) return { maxX: 0, maxY: 0 };
    const w = currentImageEl.offsetWidth * currentZoom;
    const h = currentImageEl.offsetHeight * currentZoom;
    const cw = carouselContainer.clientWidth;
    const ch = carouselContainer.clientHeight;
    return {
        maxX: Math.max(0, (w - cw) / 2),
        maxY: Math.max(0, (h - ch) / 2)
    };
}
function applyRubber(value, max) {
    if (value > max) return max + (value - max) * 0.35;
    if (value < -max) return -max + (value + max) * 0.35;
    return value;
}
function clampPanHard() {
    const b = getPanBounds();
    currentPanX = Math.max(-b.maxX, Math.min(b.maxX, currentPanX));
    currentPanY = Math.max(-b.maxY, Math.min(b.maxY, currentPanY));
}
function snapBack() {
    const b = getPanBounds();
    const tx = Math.max(-b.maxX, Math.min(b.maxX, currentPanX));
    const ty = Math.max(-b.maxY, Math.min(b.maxY, currentPanY));
    if (tx !== currentPanX || ty !== currentPanY) {
        currentPanX = tx;
        currentPanY = ty;
        if (currentImageEl) {
            currentImageEl.style.transition = 'transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)';
            applyTransform();
            setTimeout(() => {
                if (currentImageEl) currentImageEl.style.transition = '';
            }, 350);
        }
    }
}
function applyTransform() {
    if (!currentImageEl) return;
    currentImageEl.style.transform = `translate(${currentPanX}px, ${currentPanY}px) scale(${currentZoom})`;
    if (currentZoom > 1) {
        currentImageEl.classList.add('zoomed');
        carouselContainer.classList.add('zoomed');
    } else {
        currentImageEl.classList.remove('zoomed');
        carouselContainer.classList.remove('zoomed');
    }
}
function showZoomIndicator() {
    zoomIndicator.textContent = Math.round(currentZoom * 100) + '%';
    zoomIndicator.classList.add('visible');
    clearTimeout(zoomIndicator._hideTimeout);
    zoomIndicator._hideTimeout = setTimeout(() => {
        zoomIndicator.classList.remove('visible');
    }, 1000);
}
function zoomBy(delta) {
    currentZoom = Math.max(1, Math.min(5, currentZoom + delta));
    if (currentZoom === 1) {
        currentPanX = 0;
        currentPanY = 0;
    } else {
        clampPanHard();
    }
    applyTransform();
    showZoomIndicator();
    if (delta > 0) playZoomIn();
    else playZoomOut();
}
function resetZoom() {
    currentZoom = 1;
    currentPanX = 0;
    currentPanY = 0;
    applyTransform();
    zoomIndicator.classList.remove('visible');
}
function toggleFullscreen() {
    try {
        const el = document.querySelector('.modal-carousel');
        if (!document.fullscreenElement) {
            if (el.requestFullscreen) el.requestFullscreen();
            else if (el.webkitRequestFullscreen) el.webkitRequestFullscreen();
        } else {
            if (document.exitFullscreen) document.exitFullscreen();
            else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
        }
    } catch (e) {}
}
function ensureSlidesLoaded(center) {
    if (!currentProject || !currentProject.gallery) return;
    const len = currentProject.gallery.length;
    for (let offset = -1; offset <= 1; offset++) {
        const idx = (center + offset + len) % len;
        const slide = carouselTrack.children[idx];
        if (!slide) continue;
        const img = slide.querySelector('img.gallery-image');
        if (img && img.dataset.src && !img.getAttribute('src')) {
            img.src = img.dataset.src;
        }
        slide.querySelectorAll('.carousel-slide-bg-top, .carousel-slide-bg-bottom').forEach(bg => {
            if (bg.dataset.bg && !bg.style.backgroundImage) {
                bg.style.backgroundImage = `url("${bg.dataset.bg}")`;
            }
        });
        const slideLoader = slide.querySelector('.carousel-slide-loader');
        if (img && slideLoader) {
            if (img.complete && img.naturalWidth > 0) {
                slideLoader.classList.add('loaded');
            } else {
                img.addEventListener('load', () => slideLoader.classList.add('loaded'), { once: true });
                img.addEventListener('error', () => slideLoader.classList.add('loaded'), { once: true });
            }
        }
    }
}
function openModal(project) {
    currentProject = project;
    currentSlide = 0;
    currentZoom = 1;
    currentPanX = 0;
    currentPanY = 0;
    isDragging = false;
    panPointerId = null;
    activePointers.clear();
    swipeMode = false;
    if (currentVideoEl) { currentVideoEl.pause(); currentVideoEl = null; }
    const name = typeof project.name === 'object' ? (project.name[currentLang] || project.name.ru || project.id) : project.name;
    const description = typeof project.description === 'object' ? (project.description[currentLang] || project.description.ru || '') : project.description;
    document.getElementById('modalTitle').textContent = name;
    document.getElementById('modalDescription').textContent = description;
    document.getElementById('modalType').textContent = project.type === 'animation' ? t('type_animation') : t('type_render');
    document.getElementById('modalWeight').textContent = project.weight;
    document.getElementById('modalDate').textContent = formatDate(project.date);
    downloadButtonContainer.innerHTML = '';
    const dl = project.download || { kind: 'none', reason: 'lost' };
    if (dl.kind === 'none') {
        const reason = { too_big: ['too_big', 'too_big_tooltip'], disabled: ['unavailable', 'disabled_tooltip'] }[dl.reason]
            || ['unavailable', 'unavailable_tooltip'];
        const tooltipWrapper = document.createElement('div');
        tooltipWrapper.className = 'tooltip-wrapper';
        tooltipWrapper.innerHTML = `
            <div class="tooltip">${t(reason[1])}</div>
            <button class="mc-btn mc-btn-disabled" disabled>
                <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>
                ${t(reason[0])}
            </button>
        `;
        downloadButtonContainer.appendChild(tooltipWrapper);
    } else {
        const downloadBtn = document.createElement('a');
        downloadBtn.href = dl.url;
        if (dl.kind === 'local') downloadBtn.download = `${project.id}.zip`;
        else { downloadBtn.target = '_blank'; downloadBtn.rel = 'noopener'; }
        downloadBtn.className = 'mc-btn';
        const icon = dl.kind === 'local'
            ? '<path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>'
            : '<path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/>';
        downloadBtn.innerHTML = `<svg viewBox="0 0 24 24">${icon}</svg>${t('download_project')}`;
        downloadButtonContainer.appendChild(downloadBtn);
    }
    carouselTrack.innerHTML = '';
    carouselDots.innerHTML = '';
    carouselThumbs.innerHTML = '';
    const hasMultiple = project.gallery && project.gallery.length > 1;
    const useThumbs = project.gallery && project.gallery.length > 3;
    carouselPrev.style.display = hasMultiple ? 'flex' : 'none';
    carouselNext.style.display = hasMultiple ? 'flex' : 'none';
    if (useThumbs) {
        carouselDots.style.display = 'none';
        carouselThumbs.style.display = 'flex';
        project.gallery.forEach((item, index) => {
            const thumb = document.createElement('button');
            thumb.className = 'carousel-thumb' + (index === 0 ? ' active' : '');
            const timg = document.createElement('img');
            timg.alt = '';
            timg.loading = 'lazy';
            timg.src = item.type === 'image' ? item.thumb : (item.poster || PLACEHOLDER_SVG);
            thumb.appendChild(timg);
            thumb.onclick = () => goToSlide(index);
            carouselThumbs.appendChild(thumb);
        });
    } else {
        carouselThumbs.style.display = 'none';
        carouselDots.style.display = hasMultiple ? 'flex' : 'none';
    }
    if (project.gallery) {
        project.gallery.forEach((item, index) => {
            const slide = document.createElement('div');
            slide.className = 'carousel-slide';
            const bgTop = document.createElement('div');
            bgTop.className = 'carousel-slide-bg-top';
            bgTop.dataset.bg = slideBg(item);
            slide.appendChild(bgTop);
            const bgBottom = document.createElement('div');
            bgBottom.className = 'carousel-slide-bg-bottom';
            bgBottom.dataset.bg = slideBg(item);
            slide.appendChild(bgBottom);
            if (item.type === 'youtube') {
                const yt = document.createElement('div');
                yt.className = 'video-container';
                const thumbnail = document.createElement('div');
                thumbnail.className = 'video-thumbnail';
                thumbnail.innerHTML = `<img src="${item.poster}" alt="${name} preview" loading="lazy"><div class="video-play-overlay"><svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></div>`;
                thumbnail.onclick = () => {
                    playClick();
                    const frame = document.createElement('iframe');
                    frame.className = 'yt-frame';
                    frame.src = `https://www.youtube-nocookie.com/embed/${item.id}?autoplay=1&rel=0`;
                    frame.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen';
                    frame.allowFullscreen = true;
                    thumbnail.style.display = 'none';
                    yt.appendChild(frame);
                };
                yt.appendChild(thumbnail);
                slide.appendChild(yt);
            } else if (item.type === 'video') {
                const videoContainer = document.createElement('div');
                videoContainer.className = 'video-container';
                const video = document.createElement('video');
                video.preload = 'none';
                if (item.poster) video.poster = item.poster;
                video.loop = true;
                video.playsInline = true;
                video.style.display = 'none';
                const thumbnail = document.createElement('div');
                thumbnail.className = 'video-thumbnail';
                thumbnail.innerHTML = `${item.poster ? `<img src="${item.poster}" alt="${name} preview">` : ''}<div class="video-play-overlay"><svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></div>`;
                const loader = document.createElement('div');
                loader.className = 'video-loader';
                const errorBox = document.createElement('div');
                errorBox.className = 'video-error';
                errorBox.innerHTML = `<span>${t('video_error')}</span><a href="${item.src}" target="_blank" rel="noopener" class="mc-btn mc-btn-small">${t('video_open')}</a>`;
                thumbnail.onclick = () => {
                    playClick();
                    thumbnail.style.opacity = '0';
                    setTimeout(() => thumbnail.style.display = 'none', 300);
                    if (!video.getAttribute('src')) {
                        video.preload = 'auto';
                        video.src = item.src;
                    }
                    video.style.display = 'block';
                    video.controls = false;
                    loader.classList.add('active');
                    if (!videoContainer._controlsReady) {
                        videoContainer._controlsReady = true;
                        setupVideoControls(video, videoContainer);
                    }
                    const attempt = video.play();
                    if (attempt) attempt.catch(err => {
                        if (err.name === 'NotAllowedError') {
                            video.muted = true;
                            video.play().catch(() => {});
                        }
                    });
                };
                video.addEventListener('error', () => {
                    loader.classList.remove('active');
                    errorBox.classList.add('visible');
                });
                const controls = document.createElement('div');
                controls.className = 'video-controls';
                controls.innerHTML = `
                    <button class="video-btn video-play-btn" title="Play/Pause">
                        <svg viewBox="0 0 24 24" class="play-icon"><path d="M8 5v14l11-7z"/></svg>
                        <svg viewBox="0 0 24 24" class="pause-icon" style="display:none"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>
                    </button>
                    <div class="video-progress-container">
                        <div class="video-progress-buffer"></div>
                        <div class="video-progress-fill"></div>
                    </div>
                    <span class="video-time">0:00 / 0:00</span>
                    <button class="video-btn video-loop-btn" title="Loop">
                        <svg viewBox="0 0 24 24"><path d="M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z"/></svg>
                    </button>
                    <button class="video-btn video-screenshot-btn" title="Screenshot">
                        <svg viewBox="0 0 24 24"><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/></svg>
                    </button>
                    <div class="volume-control">
                        <button class="video-btn video-mute-btn" title="Volume">
                            <svg viewBox="0 0 24 24" class="volume-high-icon"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/></svg>
                            <svg viewBox="0 0 24 24" class="volume-low-icon" style="display:none"><path d="M18.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM5 9v6h4l5 5V4L9 9H5z"/></svg>
                            <svg viewBox="0 0 24 24" class="volume-mute-icon" style="display:none"><path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/></svg>
                        </button>
                        <div class="volume-slider-container">
                            <input type="range" class="volume-slider" min="0" max="100" value="100" orient="vertical">
                        </div>
                    </div>`;
                video.addEventListener('loadeddata', () => loader.classList.remove('active'));
                video.addEventListener('waiting', () => loader.classList.add('active'));
                video.addEventListener('canplay', () => loader.classList.remove('active'));
                video.addEventListener('click', () => { if (video.paused) video.play(); else video.pause(); });
                videoContainer.appendChild(video);
                videoContainer.appendChild(thumbnail);
                videoContainer.appendChild(loader);
                videoContainer.appendChild(errorBox);
                videoContainer.appendChild(controls);
                slide.appendChild(videoContainer);
            } else {
                const img = document.createElement('img');
                const imgSrc = item.view || item.src;
                img.alt = `${name} - view ${index + 1}`;
                img.className = 'gallery-image';
                img.draggable = false;
                img.dataset.src = imgSrc;
                img.addEventListener('dblclick', handleImageDoubleClick);
                const slideLoader = document.createElement('div');
                slideLoader.className = 'carousel-slide-loader';
                slideLoader.appendChild(createLoadingAnimation());
                slide.appendChild(img);
                slide.appendChild(slideLoader);
            }
            carouselTrack.appendChild(slide);
            if (hasMultiple && !useThumbs) {
                const dot = document.createElement('button');
                dot.className = 'carousel-dot' + (index === 0 ? ' active' : '');
                dot.onclick = () => goToSlide(index);
                carouselDots.appendChild(dot);
            }
        });
    }
    updateCarousel();
    syncCurrentMedia();
    ensureSlidesLoaded(0);
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    playOpen();
}
function setupVideoControls(video, container) {
    const playBtn = container.querySelector('.video-play-btn');
    const pauseIcon = playBtn.querySelector('.pause-icon');
    const playIcon = playBtn.querySelector('.play-icon');
    const progressContainer = container.querySelector('.video-progress-container');
    const progressFill = container.querySelector('.video-progress-fill');
    const bufferFill = container.querySelector('.video-progress-buffer');
    const timeDisplay = container.querySelector('.video-time');
    const muteBtn = container.querySelector('.video-mute-btn');
    const volumeHighIcon = muteBtn.querySelector('.volume-high-icon');
    const volumeLowIcon = muteBtn.querySelector('.volume-low-icon');
    const volumeMuteIcon = muteBtn.querySelector('.volume-mute-icon');
    const volumeSlider = container.querySelector('.volume-slider');
    const controls = container.querySelector('.video-controls');
    const loopBtn = container.querySelector('.video-loop-btn');
    const screenshotBtn = container.querySelector('.video-screenshot-btn');
    let lastVolume = 1;
    let loopEnabled = true;
    video.loop = true;
    function updateVolumeIcon(vol) {
        volumeHighIcon.style.display = 'none';
        volumeLowIcon.style.display = 'none';
        volumeMuteIcon.style.display = 'none';
        if (vol === 0 || video.muted) volumeMuteIcon.style.display = 'block';
        else if (vol < 0.5) volumeLowIcon.style.display = 'block';
        else volumeHighIcon.style.display = 'block';
    }
    playBtn.onclick = (e) => { e.stopPropagation(); if (video.paused) video.play(); else video.pause(); };
    video.addEventListener('play', () => { playIcon.style.display = 'none'; pauseIcon.style.display = 'block'; });
    video.addEventListener('pause', () => { playIcon.style.display = 'block'; pauseIcon.style.display = 'none'; });
    video.addEventListener('timeupdate', () => {
        const percent = (video.currentTime / video.duration) * 100;
        progressFill.style.width = percent + '%';
        timeDisplay.textContent = `${formatTime(video.currentTime)} / ${formatTime(video.duration)}`;
    });
    video.addEventListener('progress', () => {
        if (video.buffered.length > 0) {
            const bufferedEnd = video.buffered.end(video.buffered.length - 1);
            if (video.duration > 0) bufferFill.style.width = (bufferedEnd / video.duration) * 100 + '%';
        }
    });
    let isSeeking = false;
    function seekTo(e) {
        if (!isFinite(video.duration)) return;
        const rect = progressContainer.getBoundingClientRect();
        const percent = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
        video.currentTime = percent * video.duration;
        progressFill.style.width = (percent * 100) + '%';
    }
    progressContainer.addEventListener('pointerdown', (e) => {
        e.stopPropagation();
        isSeeking = true;
        progressContainer.setPointerCapture(e.pointerId);
        seekTo(e);
    });
    progressContainer.addEventListener('pointermove', (e) => { if (isSeeking) seekTo(e); });
    progressContainer.addEventListener('pointerup', () => { isSeeking = false; });
    progressContainer.addEventListener('pointercancel', () => { isSeeking = false; });
    muteBtn.onclick = (e) => {
        e.stopPropagation();
        if (video.muted || video.volume === 0) {
            video.muted = false;
            video.volume = lastVolume || 0.5;
            volumeSlider.value = video.volume * 100;
        } else {
            lastVolume = video.volume;
            video.muted = true;
            video.volume = 0;
            volumeSlider.value = 0;
        }
        updateVolumeIcon(video.volume);
    };
    volumeSlider.addEventListener('input', (e) => {
        e.stopPropagation();
        const vol = e.target.value / 100;
        video.volume = vol;
        video.muted = vol === 0;
        if (vol > 0) lastVolume = vol;
        updateVolumeIcon(vol);
    });
    volumeSlider.addEventListener('mousedown', (e) => e.stopPropagation());
    volumeSlider.addEventListener('click', (e) => e.stopPropagation());
    video.addEventListener('ended', () => { playIcon.style.display = 'block'; pauseIcon.style.display = 'none'; });
    updateVolumeIcon(video.volume);
    loopBtn.onclick = (e) => {
        e.stopPropagation();
        loopEnabled = !loopEnabled;
        video.loop = loopEnabled;
        loopBtn.classList.toggle('active-loop', loopEnabled);
        showToast(loopEnabled ? t('toast_loop_on') : t('toast_loop_off'), 'success');
    };
    loopBtn.classList.add('active-loop');
    screenshotBtn.onclick = (e) => {
        e.stopPropagation();
        try {
            const canvas = document.createElement('canvas');
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(video, 0, 0);
            canvas.toBlob(blob => {
                if (blob) {
                    const url = URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.href = url;
                    a.download = `screenshot_${Date.now()}.png`;
                    a.click();
                    URL.revokeObjectURL(url);
                    showToast(t('toast_screenshot'), 'success');
                }
            }, 'image/png');
        } catch (err) {
            showToast(t('toast_copy_error'), 'error');
        }
    };
    controls.classList.add('active');
    clearTimeout(container._hideTimeout);
    container._hideTimeout = setTimeout(() => { if (!video.paused) controls.classList.remove('active'); }, 3000);
    container.addEventListener('mousemove', () => {
        controls.classList.add('active');
        clearTimeout(container._hideTimeout);
        container._hideTimeout = setTimeout(() => { if (!video.paused) controls.classList.remove('active'); }, 3000);
    });
}
function handleImageDoubleClick(e) {
    e.preventDefault();
    e.stopPropagation();
    currentImageEl = e.currentTarget;
    if (currentZoom > 1) {
        resetZoom();
        playZoomOut();
    } else {
        currentZoom = 2.5;
        currentPanX = 0;
        currentPanY = 0;
        applyTransform();
        showZoomIndicator();
        playZoomIn();
    }
}
function getPointerDist() {
    const pts = Array.from(activePointers.values());
    return Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y);
}
function startPan(pointerId, x, y) {
    const slide = carouselTrack.children[currentSlide];
    const img = slide ? slide.querySelector('img.gallery-image') : null;
    if (img) currentImageEl = img;
    if (!currentImageEl) return;
    panPointerId = pointerId;
    isDragging = true;
    dragStartX = x;
    dragStartY = y;
    panStartX = currentPanX;
    panStartY = currentPanY;
    currentImageEl.classList.add('dragging');
    carouselContainer.classList.add('dragging');
}
function endPan() {
    if (panPointerId === null) return;
    panPointerId = null;
    isDragging = false;
    if (currentImageEl) currentImageEl.classList.remove('dragging');
    carouselContainer.classList.remove('dragging');
    snapBack();
}
carouselContainer.addEventListener('pointerdown', (e) => {
    if (e.pointerType === 'mouse' && e.button !== 0) return;
    // захват указателя ломает click у кнопок и плееров — их не трогаем
    if (e.target.closest('.video-container, .gallery-actions, .carousel-btn, button, a, input')) return;
    activePointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
    try { carouselContainer.setPointerCapture(e.pointerId); } catch (err) {}
    if (activePointers.size === 2) {
        endPan();
        swipeMode = false;
        pinchStartDist = getPointerDist();
        pinchStartZoom = currentZoom;
    } else if (activePointers.size === 1) {
        if (currentZoom > 1) {
            startPan(e.pointerId, e.clientX, e.clientY);
        } else if (e.pointerType !== 'mouse') {
            swipeMode = true;
            swipeStartX = e.clientX;
            swipeStartY = e.clientY;
        }
    }
});
carouselContainer.addEventListener('pointermove', (e) => {
    if (!activePointers.has(e.pointerId)) return;
    activePointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (activePointers.size === 2 && pinchStartDist > 0) {
        const dist = getPointerDist();
        currentZoom = Math.max(1, Math.min(5, pinchStartZoom * (dist / pinchStartDist)));
        if (currentZoom === 1) {
            currentPanX = 0;
            currentPanY = 0;
        } else {
            clampPanHard();
        }
        applyTransform();
        showZoomIndicator();
    } else if (isDragging && e.pointerId === panPointerId) {
        const dx = e.clientX - dragStartX;
        const dy = e.clientY - dragStartY;
        const bounds = getPanBounds();
        currentPanX = applyRubber(panStartX + dx, bounds.maxX);
        currentPanY = applyRubber(panStartY + dy, bounds.maxY);
        applyTransform();
    }
});
function handlePointerEnd(e) {
    if (!activePointers.has(e.pointerId)) return;
    activePointers.delete(e.pointerId);
    if (activePointers.size < 2) pinchStartDist = 0;
    if (e.pointerId === panPointerId) {
        endPan();
    }
    if (swipeMode && activePointers.size === 0) {
        const dx = e.clientX - swipeStartX;
        const dy = e.clientY - swipeStartY;
        swipeMode = false;
        if (dy > 90 && Math.abs(dy) > Math.abs(dx) * 1.5) {
            closeModal();
            return;
        }
        if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.5) {
            if (dx < 0) nextSlide();
            else prevSlide();
            return;
        }
    }
    if (activePointers.size === 1 && currentZoom > 1) {
        const remainingId = Array.from(activePointers.keys())[0];
        const pt = activePointers.get(remainingId);
        startPan(remainingId, pt.x, pt.y);
    }
    if (activePointers.size === 0) {
        swipeMode = false;
        isDragging = false;
    }
}
carouselContainer.addEventListener('pointerup', handlePointerEnd);
carouselContainer.addEventListener('pointercancel', handlePointerEnd);
carouselContainer.addEventListener('wheel', (e) => {
    if (!currentImageEl || currentImageEl.tagName !== 'IMG') return;
    e.preventDefault();
    zoomBy(e.deltaY > 0 ? -0.1 : 0.1);
}, { passive: false });
btnDownloadImage.addEventListener('click', async () => {
    if (!currentProject || !currentProject.gallery) return;
    const item = currentProject.gallery[currentSlide];
    if (!item || item.type !== 'image') return;
    try {
        const response = await fetch(item.src);
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = item.src.split('/').pop();
        a.click();
        URL.revokeObjectURL(url);
        showToast(t('toast_downloaded'), 'success');
    } catch (err) {
        showToast(t('toast_copy_error'), 'error');
    }
});
btnCopyImage.addEventListener('click', async () => {
    if (!currentProject || !currentProject.gallery) return;
    const item = currentProject.gallery[currentSlide];
    if (!item || item.type !== 'image') return;
    try {
        const response = await fetch(item.src);
        const blob = await response.blob();
        await navigator.clipboard.write([
            new ClipboardItem({ [blob.type]: blob })
        ]);
        showToast(t('toast_copied'), 'success');
    } catch (err) {
        showToast(t('toast_copy_error'), 'error');
    }
});
function stopEmbeds() {
    carouselTrack.querySelectorAll('.yt-frame').forEach(frame => {
        const thumb = frame.parentElement.querySelector('.video-thumbnail');
        if (thumb) thumb.style.display = '';
        frame.remove();
    });
}
function closeModal() {
    if (currentVideoEl) { currentVideoEl.pause(); currentVideoEl = null; }
    stopEmbeds();
    endPan();
    activePointers.clear();
    swipeMode = false;
    resetZoom();
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
    playClose();
}
function openMIModal() {
    miModalOverlay.classList.add('active');
    playOpen();
}
function closeMIModal() {
    miModalOverlay.classList.remove('active');
    playClose();
}
function openVersionModal() {
    versionModalOverlay.classList.add('active');
    playOpen();
}
function closeVersionModal() {
    versionModalOverlay.classList.remove('active');
    playClose();
}
function openMemeModal() {
    memeOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    playSecret();
}
function closeMemeModal() {
    memeOverlay.classList.remove('active');
    if (!modalOverlay.classList.contains('active') && !miModalOverlay.classList.contains('active') && !versionModalOverlay.classList.contains('active')) {
        document.body.style.overflow = '';
    }
    playClose();
}
function goToSlide(index) {
    if (index === currentSlide) return;
    if (currentVideoEl) { currentVideoEl.pause(); currentVideoEl = null; }
    stopEmbeds();
    endPan();
    resetZoom();
    currentSlide = index;
    updateCarousel();
    syncCurrentMedia();
    ensureSlidesLoaded(index);
    playSlide();
}
function nextSlide() { goToSlide((currentSlide + 1) % (currentProject.gallery ? currentProject.gallery.length : 1)); }
function prevSlide() { goToSlide((currentSlide - 1 + (currentProject.gallery ? currentProject.gallery.length : 1)) % (currentProject.gallery ? currentProject.gallery.length : 1)); }
function updateCarousel() {
    carouselTrack.classList.add('no-transition');
    carouselTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            carouselTrack.classList.remove('no-transition');
        });
    });
    const item = currentProject && currentProject.gallery ? currentProject.gallery[currentSlide] : null;
    galleryActions.style.display = item && item.type === 'image' ? 'flex' : 'none';
    document.querySelector('.modal-carousel').classList.toggle('on-video', !!item && item.type !== 'image');
    const dots = carouselDots.querySelectorAll('.carousel-dot');
    dots.forEach((dot, index) => dot.classList.toggle('active', index === currentSlide));
    const thumbs = carouselThumbs.querySelectorAll('.carousel-thumb');
    thumbs.forEach((thumb, index) => {
        thumb.classList.toggle('active', index === currentSlide);
        if (index === currentSlide) {
            thumb.scrollIntoView({ behavior: 'smooth', inline: 'nearest', block: 'nearest' });
        }
    });
}
modalClose.onclick = closeModal;
carouselNext.onclick = nextSlide;
carouselPrev.onclick = prevSlide;
btnMineImator.onclick = openMIModal;
miModalClose.onclick = closeMIModal;
btnArchive.onclick = openVersionModal;
versionModalClose.onclick = closeVersionModal;
versionBackBtn.onclick = () => {
    closeVersionModal();
    openMIModal();
};
memeClose.onclick = closeMemeModal;
modalOverlay.onclick = (e) => { if (e.target === modalOverlay) closeModal(); };
miModalOverlay.onclick = (e) => { if (e.target === miModalOverlay) closeMIModal(); };
versionModalOverlay.onclick = (e) => { if (e.target === versionModalOverlay) closeVersionModal(); };
memeOverlay.onclick = (e) => { if (e.target === memeOverlay) closeMemeModal(); };
const SOUND_ON_SVG = '<svg viewBox="0 0 24 24"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/></svg>';
const SOUND_OFF_SVG = '<svg viewBox="0 0 24 24"><path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/></svg>';
function updateSoundIcon() {
    soundToggle.innerHTML = soundEnabled ? SOUND_ON_SVG : SOUND_OFF_SVG;
    soundToggle.classList.toggle('muted', !soundEnabled);
}
soundToggle.onclick = () => {
    soundEnabled = !soundEnabled;
    try {
        localStorage.setItem('minimate-sound', soundEnabled ? 'on' : 'off');
    } catch (e) {}
    updateSoundIcon();
    showToast(soundEnabled ? t('sound_on') : t('sound_off'), 'success');
};
updateSoundIcon();
document.addEventListener('click', (e) => {
    if (e.target.closest('.mc-btn, .lang-btn, .sort-trigger, .gallery-action-btn, .video-btn, .icon-btn, .search-clear, .version-btn')) {
        playClick();
    }
}, true);
const langBtn = document.getElementById('langBtn');
const langDropdown = document.getElementById('langDropdown');
langBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    langDropdown.classList.toggle('open');
    langBtn.classList.toggle('open');
});
document.querySelectorAll('.lang-option').forEach(opt => {
    opt.addEventListener('click', (e) => {
        e.stopPropagation();
        setLang(opt.dataset.lang);
    });
});
document.addEventListener('click', () => {
    langDropdown.classList.remove('open');
    langBtn.classList.remove('open');
    sortDropdownMenu.classList.remove('open');
    sortTrigger.classList.remove('open');
});
const sortDropdown = document.getElementById('sortDropdown');
const sortTrigger = document.getElementById('sortTrigger');
const sortDropdownMenu = document.getElementById('sortDropdownMenu');
const sortTriggerText = document.getElementById('sortTriggerText');
sortTrigger.addEventListener('click', (e) => {
    e.stopPropagation();
    sortDropdownMenu.classList.toggle('open');
    sortTrigger.classList.toggle('open');
});
document.querySelectorAll('.sort-option').forEach(opt => {
    opt.addEventListener('click', (e) => {
        e.stopPropagation();
        const newSort = opt.dataset.sort;
        if (newSort === currentSort) return;
        currentSort = newSort;
        document.querySelectorAll('.sort-option').forEach(o => o.classList.remove('active'));
        opt.classList.add('active');
        const key = opt.getAttribute('data-i18n');
        if (key) {
            sortTriggerText.textContent = t(key);
        }
        sortDropdownMenu.classList.remove('open');
        sortTrigger.classList.remove('open');
        currentPage = 1;
        playToggle();
        transitionGrid();
    });
});
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentFilter = btn.dataset.filter;
        currentPage = 1;
        playToggle();
        transitionGrid();
    });
});
const searchInput = document.getElementById('searchInput');
const searchClear = document.getElementById('searchClear');
let searchTimeout;
searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value.trim();
    searchClear.classList.toggle('visible', searchQuery.length > 0);
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
        currentPage = 1;
        transitionGrid();
    }, 250);
});
searchClear.addEventListener('click', () => {
    searchInput.value = '';
    searchQuery = '';
    searchClear.classList.remove('visible');
    currentPage = 1;
    transitionGrid();
    searchInput.focus();
});
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiIndex = 0;
document.addEventListener('keydown', (e) => {
    const activeTag = document.activeElement ? document.activeElement.tagName : '';
    const typing = activeTag === 'INPUT' || activeTag === 'TEXTAREA';
    if (!typing) {
        const konamiKey = e.key.length === 1 ? e.key.toLowerCase() : e.key;
        if (konamiKey === konamiSequence[konamiIndex]) {
            konamiIndex++;
            if (konamiIndex === konamiSequence.length) {
                konamiIndex = 0;
                openMemeModal();
            }
        } else {
            konamiIndex = konamiKey === konamiSequence[0] ? 1 : 0;
        }
    }
    if (memeOverlay.classList.contains('active')) {
        if (e.key === 'Escape') closeMemeModal();
        return;
    }
    if (versionModalOverlay.classList.contains('active')) {
        if (e.key === 'Escape') closeVersionModal();
        return;
    }
    if (miModalOverlay.classList.contains('active')) {
        if (e.key === 'Escape') closeMIModal();
        return;
    }
    if (modalOverlay.classList.contains('active')) {
        if (e.key === 'Escape') {
            closeModal();
        } else if (e.key === 'ArrowRight') {
            nextSlide();
        } else if (e.key === 'ArrowLeft') {
            prevSlide();
        } else if (e.key === '+' || e.key === '=') {
            zoomBy(0.25);
        } else if (e.key === '-' || e.key === '_') {
            zoomBy(-0.25);
        } else if (e.key === '0') {
            resetZoom();
            showZoomIndicator();
            playZoomOut();
        } else if (e.key === 'f' || e.key === 'F' || e.key === 'а' || e.key === 'А') {
            toggleFullscreen();
        } else if (e.key === ' ') {
            if (activeTag === 'BUTTON') return;
            if (currentVideoEl && currentVideoEl.style.display !== 'none') {
                e.preventDefault();
                playClick();
                if (currentVideoEl.paused) currentVideoEl.play();
                else currentVideoEl.pause();
            }
        }
        return;
    }
    if (typing) {
        if (e.key === 'Escape') document.activeElement.blur();
        return;
    }
    if (e.key === 'ArrowRight') {
        goToPage(currentPage + 1);
    } else if (e.key === 'ArrowLeft') {
        goToPage(currentPage - 1);
    }
});
window.addEventListener('resize', updateHeaderHeight);
window.addEventListener('load', updateHeaderHeight);
updateHeaderHeight();
setTimeout(updateHeaderHeight, 300);
updateTranslations();
loadProjects();
