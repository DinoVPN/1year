// Упрощенный список серверов
    const servers = [
    { name: "Автоматически", code: "AUTO" },
    { name: "Афганистан", code: "AF" }, { name: "Албания", code: "AL" },
    { name: "Алжир", code: "DZ" }, { name: "Андорра", code: "AD" },
    { name: "Ангола", code: "AO" }, { name: "Антигуа и Барбуда", code: "AG" },
    { name: "Аргентина", code: "AR" }, { name: "Армения", code: "AM" },
    { name: "Австралия", code: "AU" }, { name: "Австрия", code: "AT" },
    { name: "Азербайджан", code: "AZ" }, { name: "Багамы", code: "BS" },
    { name: "Бахрейн", code: "BH" }, { name: "Бангладеш", code: "BD" },
    { name: "Барбадос", code: "BB" }, { name: "Беларусь", code: "BY" },
    { name: "Бельгия", code: "BE" }, { name: "Белиз", code: "BZ" },
    { name: "Бенин", code: "BJ" }, { name: "Бутан", code: "BT" },
    { name: "Боливия", code: "BO" }, { name: "Босния и Герцеговина", code: "BA" },
    { name: "Ботсвана", code: "BW" }, { name: "Бразилия", code: "BR" },
    { name: "Бруней", code: "BN" }, { name: "Болгария", code: "BG" },
    { name: "Буркина-Фасо", code: "BF" }, { name: "Бурунди", code: "BI" },
    { name: "Камбоджа", code: "KH" }, { name: "Камерун", code: "CM" },
    { name: "Канада", code: "CA" }, { name: "Кабо-Верде", code: "CV" },
    { name: "ЦАР", code: "CF" }, { name: "Чад", code: "TD" },
    { name: "Чили", code: "CL" }, { name: "Китай", code: "CN" },
    { name: "Колумбия", code: "CO" }, { name: "Коморы", code: "KM" },
    { name: "Конго", code: "CG" }, { name: "Коста-Рика", code: "CR" },
    { name: "Хорватия", code: "HR" }, { name: "Куба", code: "CU" },
    { name: "Кипр", code: "CY" }, { name: "Чехия", code: "CZ" },
    { name: "Дания", code: "DK" }, { name: "Джибути", code: "DJ" },
    { name: "Доминика", code: "DM" }, { name: "Доминикана", code: "DO" },
    { name: "Эквадор", code: "EC" }, { name: "Египет", code: "EG" },
    { name: "Сальвадор", code: "SV" }, { name: "Экваториальная Гвинея", code: "GQ" },
    { name: "Эритрея", code: "ER" }, { name: "Эстония", code: "EE" },
    { name: "Эсватини", code: "SZ" }, { name: "Эфиопия", code: "ET" },
    { name: "Фиджи", code: "FJ" }, { name: "Финляндия", code: "FI" },
    { name: "Франция", code: "FR" }, { name: "Габон", code: "GA" },
    { name: "Гамбия", code: "GM" }, { name: "Грузия", code: "GE" },
    { name: "Германия", code: "DE" }, { name: "Гана", code: "GH" },
    { name: "Греция", code: "GR" }, { name: "Гренада", code: "GD" },
    { name: "Гватемала", code: "GT" }, { name: "Гвинея", code: "GN" },
    { name: "Гвинея-Бисау", code: "GW" }, { name: "Гайана", code: "GY" },
    { name: "Гаити", code: "HT" }, { name: "Гондурас", code: "HN" },
    { name: "Венгрия", code: "HU" }, { name: "Исландия", code: "IS" },
    { name: "Индия", code: "IN" }, { name: "Индонезия", code: "ID" },
    { name: "Иран", code: "IR" }, { name: "Ирак", code: "IQ" },
    { name: "Ирландия", code: "IE" }, { name: "Израйль", code: "IL" },
    { name: "Италия", code: "IT" }, { name: "Кот-д'Ивуар", code: "CI" },
    { name: "Ямайка", code: "JM" }, { name: "Япония", code: "JP" },
    { name: "Иордания", code: "JO" }, { name: "Казахстан", code: "KZ" },
    { name: "Кения", code: "KE" }, { name: "Кирибати", code: "KI" },
    { name: "Корея Северная", code: "KP" }, { name: "Корея Южная", code: "KR" },
    { name: "Косово", code: "XK" }, { name: "Кувейт", code: "KW" },
    { name: "Кыргызстан", code: "KG" }, { name: "Лаос", code: "LA" },
    { name: "Латвия", code: "LV" }, { name: "Ливан", code: "LB" },
    { name: "Лесото", code: "LS" }, { name: "Либерия", code: "LR" },
    { name: "Ливия", code: "LY" }, { name: "Лихтенштейн", code: "LI" },
    { name: "Литва", code: "LT" }, { name: "Люксембург", code: "LU" },
    { name: "Мадагаскар", code: "MG" }, { name: "Малави", code: "MW" },
    { name: "Малайзия", code: "MY" }, { name: "Мальдивы", code: "MV" },
    { name: "Мали", code: "ML" }, { name: "Мальта", code: "MT" },
    { name: "Маршалловы Острова", code: "MH" }, { name: "Мавритания", code: "MR" },
    { name: "Маврикий", code: "MU" }, { name: "Мексика", code: "MX" },
    { name: "Микронезия", code: "FM" }, { name: "Молдова", code: "MD" },
    { name: "Монако", code: "MC" }, { name: "Монголия", code: "MN" },
    { name: "Черногория", code: "ME" }, { name: "Марокко", code: "MA" },
    { name: "Мозамбик", code: "MZ" }, { name: "Мьянма", code: "MM" },
    { name: "Намибия", code: "NA" }, { name: "Науру", code: "NR" },
    { name: "Непал", code: "NP" }, { name: "Нидерланды", code: "NL" },
    { name: "Новая Зеландия", code: "NZ" }, { name: "Никарагуа", code: "NI" },
    { name: "Нигер", code: "NE" }, { name: "Нигерия", code: "NG" },
    { name: "Северная Македония", code: "MK" }, { name: "Норвегия", code: "NO" },
    { name: "Оман", code: "OM" }, { name: "Пакистан", code: "PK" },
    { name: "Палау", code: "PW" }, { name: "Панама", code: "PA" },
    { name: "Папуа - Новая Гвинея", code: "PG" }, { name: "Парагвай", code: "PY" },
    { name: "Перу", code: "PE" }, { name: "Филиппины", code: "PH" },
    { name: "Польша", code: "PL" }, { name: "Португалия", code: "PT" },
    { name: "Катар", code: "QA" }, { name: "Румыния", code: "RO" },
    { name: "Россия", code: "RU" }, { name: "Руанда", code: "RW" },
    { name: "Сент-Китс и Невис", code: "KN" }, { name: "Сент-Люсия", code: "LC" },
    { name: "Сент-Винсент и Гренадины", code: "VC" }, { name: "Самоа", code: "WS" },
    { name: "Сан-Марино", code: "SM" }, { name: "Сан-Томе и Принсипи", code: "ST" },
    { name: "Саудовская Аравия", code: "SA" }, { name: "Сенегал", code: "SN" },
    { name: "Сербия", code: "RS" }, { name: "Сейшелы", code: "SC" },
    { name: "Сьерра-Леоне", code: "SL" }, { name: "Сингапур", code: "SG" },
    { name: "Словакия", code: "SK" }, { name: "Словения", code: "SI" },
    { name: "Соломоновы Острова", code: "SB" }, { name: "Сомали", code: "SO" },
    { name: "ЮАР", code: "ZA" }, { name: "Южный Судан", code: "SS" },
    { name: "Испания", code: "ES" }, { name: "Шри-Ланка", code: "LK" },
    { name: "Судан", code: "SD" }, { name: "Суринам", code: "SR" },
    { name: "Швеция", code: "SE" }, { name: "Швейцария", code: "CH" },
    { name: "Сирия", code: "SY" }, { name: "Тайвань", code: "TW" },
    { name: "Таджикистан", code: "TJ" }, { name: "Танзания", code: "TZ" },
    { name: "Таиланд", code: "TH" }, { name: "Того", code: "TG" },
    { name: "Тонга", code: "TO" }, { name: "Тринидад и Тобаго", code: "TT" },
    { name: "Тунис", code: "TN" }, { name: "Турция", code: "TR" },
    { name: "Туркменистан", code: "TM" }, { name: "Тувалу", code: "TV" },
    { name: "Уганда", code: "UG" }, { name: "Украина", code: "UA" },
    { name: "ОАЭ", code: "AE" }, { name: "Великобритания", code: "GB" },
    { name: "США", code: "US" }, { name: "Уругвай", code: "UY" },
    { name: "Узбекистан", code: "UZ" }, { name: "Вануату", code: "VU" },
    { name: "Ватикан", code: "VA" }, { name: "Венесуэла", code: "VE" },
    { name: "Вьетнам", code: "VN" }, { name: "Йемен", code: "YE" },
    { name: "Замбия", code: "ZM" }, { name: "Зимбабве", code: "ZW" }

];

// URL для перенаправления при окончании подписки
const SUBSCRIPTION_END_URL = "https://telegra.ph/Uvazhaemyj-polzovatel-08-04";

// Основные переменные
const screens = document.querySelectorAll('.screen');
const navItems = document.querySelectorAll('.nav-item');
const connectionButton = document.getElementById('connectionButton');
const mainStatusText = document.getElementById('mainStatusText');
const currentLocationText = document.getElementById('currentLocationText');
const serverList = document.getElementById('serverList');
const searchBar = document.getElementById('searchBar');
const receivedDataEl = document.getElementById('receivedData');
const sentDataEl = document.getElementById('sentData');
const subscriptionDaysEl = document.getElementById('subscriptionDays');
const subscriptionEndedText = document.getElementById('subscriptionEndedText');

let isConnected = false;
let selectedLocation = servers[0];
let trafficInterval;
let receivedBytes = 0;
let sentBytes = 0;

// Логика переключения экранов
function showScreen(screenId) {
    screens.forEach(screen => screen.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
    
    navItems.forEach(item => {
        item.classList.toggle('active', item.dataset.screen === screenId);
    });
}

navItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        showScreen(e.currentTarget.dataset.screen);
    });
});

// Логика главной кнопки и трафика
connectionButton.addEventListener('click', () => {
    const daysLeft = calculateDaysLeft();
    
    if (daysLeft <= 0) {
        window.open(SUBSCRIPTION_END_URL, '_blank');
        return;
    }
    
    isConnected = !isConnected;
    connectionButton.classList.toggle('connected', isConnected);
    connectionButton.classList.toggle('disconnected', !isConnected);
    updateMainScreen();

    if (isConnected) {
        trafficInterval = setInterval(updateTraffic, 1000);
    } else {
        clearInterval(trafficInterval);
        receivedBytes = 0;
        sentBytes = 0;
        receivedDataEl.textContent = '0 B';
        sentDataEl.textContent = '0 B';
    }
});

function updateMainScreen() {
    const daysLeft = calculateDaysLeft();
    
    if (daysLeft <= 0) {
        mainStatusText.textContent = 'Подписка закончилась';
        subscriptionDaysEl.textContent = '0';
        connectionButton.classList.add('disabled');
        subscriptionEndedText.style.display = 'block';
    } else {
        mainStatusText.textContent = isConnected ? 'Подключено' : 'Не подключено';
        subscriptionDaysEl.textContent = daysLeft;
        connectionButton.classList.remove('disabled');
        subscriptionEndedText.style.display = 'none';
    }
    
    const status = isConnected ? 'Подключено к' : 'Выбрано';
    currentLocationText.innerHTML = `${status}: <strong>${selectedLocation.name}</strong>`;
}

function formatBytes(bytes) {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

function updateTraffic() {
    receivedBytes += Math.random() * 1024 * 500;
    sentBytes += Math.random() * 1024 * 50;
    receivedDataEl.textContent = formatBytes(receivedBytes);
    sentDataEl.textContent = formatBytes(sentBytes);
}

// Функция для расчета оставшихся дней подписки (365 дней)
function calculateDaysLeft() {
    const firstLoginDate = localStorage.getItem('firstLoginDate');
    if (!firstLoginDate) {
        const now = new Date();
        localStorage.setItem('firstLoginDate', now.toISOString());
        return 365; // 1 год = 365 дней
    }
    
    const firstDate = new Date(firstLoginDate);
    const now = new Date();
    const diffTime = now - firstDate;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const daysLeft = 365 - diffDays;
    
    return daysLeft > 0 ? daysLeft : 0;
}

function getFlagEmoji(countryCode) {
    if (countryCode === "AUTO") return '✨';
    const codePoints = countryCode
        .toUpperCase()
        .split('')
        .map(char => 127397 + char.charCodeAt());
    return String.fromCodePoint(...codePoints);
}

function renderServerList(filter = '') {
    serverList.innerHTML = '';
    const filteredServers = servers.filter(server => 
        server.name.toLowerCase().includes(filter.toLowerCase())
    );

    filteredServers.forEach(server => {
        const item = document.createElement('li');
        item.className = 'server-item';
        item.dataset.locationCode = server.code;
        
        if (server.code === selectedLocation.code) {
            item.classList.add('selected');
        }

        item.innerHTML = `
            <div class="server-item-left">
                <span class="flag">${getFlagEmoji(server.code)}</span>
                <span class="location-name">${server.name}</span>
            </div>
            <div class="server-item-right">
                <i class="fas fa-check-circle check-icon"></i>
            </div>
        `;

        item.addEventListener('click', () => {
            selectedLocation = server;
            renderServerList(searchBar.value);
            updateMainScreen();
            setTimeout(() => showScreen('mainScreen'), 200);
        });

        serverList.appendChild(item);
    });
}

searchBar.addEventListener('input', (e) => {
    renderServerList(e.target.value);
});

// Инициализация приложения
document.addEventListener('DOMContentLoaded', () => {
    // Настройки темы
    const darkThemeToggle = document.getElementById('darkThemeToggle');
    if (localStorage.getItem('theme') === 'light') {
        document.body.classList.add('light-theme');
        darkThemeToggle.checked = true;
    }
    
    darkThemeToggle.addEventListener('change', function() {
        if (this.checked) {
            document.body.classList.add('light-theme');
            localStorage.setItem('theme', 'light');
        } else {
            document.body.classList.remove('light-theme');
            localStorage.setItem('theme', 'dark');
        }
    });

    // Обработчики кнопок
    document.getElementById('privacyPolicyBtn').addEventListener('click', () => {
        window.open('https://telegra.ph/POLZOVATELSKOE-SOGLASHENIE-DinoVPN-08-04', '_blank');
    });
    
    document.getElementById('helpSupportBtn').addEventListener('click', () => {
        window.open('https://t.me/dinovpnhelp', '_blank');
    });

    // Инициализация
    renderServerList();
    updateMainScreen();
});