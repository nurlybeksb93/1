import { nationalDigits, formatNationalPhone } from './phone.mjs';
const ru = {
 "announcement": "Участие бесплатно, места ограничены",
 "eyebrow": "BHS × FIGHT NIGHT · 21 НОЯБРЯ",
 "hero": "Вместе\nза Асу!",
 "lead": "UFC. Асу Алмабаев. Команда BHS.",
 "cta": "Зарегистрироваться",
 "ticker": "ОДИН БОЙ. ОБЩИЕ ЭМОЦИИ. СВОЯ КОМАНДА. ✳ BHS FIGHT NIGHT",
 "detailsLabel": "01 / МЕСТО И ВРЕМЯ",
 "details": "Всё главное",
 "dateLabel": "Дата",
 "date": "21 ноября 2026",
 "timeLabel": "Время сбора",
 "time": "20:00 · предварительно",
 "locationLabel": "Место встречи",
 "location": "Тажибаевой, 155",
 "building": "Здание «31 канала»",
 "programLabel": "02 / ПРОГРАММА",
 "programTitle": "План вечера",
 "welcome": "Сбор команды",
 "welcomeText": "20:00 · предварительно",
 "fight": "Болеем за Асу",
 "fightText": "Примерно в 23:00",
 "activities": "UFC на PS5",
 "activitiesText": "Турнир по UFC",
 "audienceLabel": "03 / ДЛЯ КОГО",
 "audienceTitle": "Кто с нами?",
 "audienceText": "Для пап школьников BHS, которые хотят поболеть за Асу Алмабаева и насладиться просмотром UFC в особой атмосфере. Приходите один или с сыном/с дочкой",
 "registerLabel": "04 / РЕГИСТРАЦИЯ",
 "registerTitle": "Вступай в команду",
 "registerText": "Заполните форму — болеем вместе.",
 "nameLabel": "Имя и фамилия",
 "phoneLabel": "Телефон / WhatsApp",
 "phoneHint": "+7 закреплён · введите 10 цифр",
 "formatLabel": "Формат участия",
 "family": "Папа с детьми",
 "father": "Папа без детей",
 "student": "Школьник без родителей",
 "childrenLabel": "Количество детей",
 "pickup": "Укажите телефон взрослого, который привезёт и заберёт ребёнка.",
 "consent": "Согласен(на) на обработку данных для участия.",
 "submit": "Подтвердить участие",
 "footer": "Вместе за Асу. Вместе с BHS.",
 "placeholder": "Как к вам обращаться?",
 "sending": "Сохраняем…",
 "success": "Вы в команде! До встречи 21 ноября.",
 "invalid": "Проверьте имя, 10 цифр телефона и согласие.",
 "error": "Нет подтверждения. Уточните статус у организаторов перед повторной отправкой.",
 "timeout": "Время ожидания истекло. Уточните статус у организаторов.",
 "rejected": "Заявка отклонена. Проверьте данные."
};
const kk = {
 "announcement": "Қатысу тегін, орын саны шектеулі",
 "eyebrow": "BHS × FIGHT NIGHT · 21 ҚАРАША",
 "hero": "Асуға бірге\nқолдау көрсетейік!",
 "lead": "UFC. Асу Алмабаев. BHS командасы.",
 "cta": "Тіркелу",
 "ticker": "БІР ЖЕКПЕ-ЖЕК. ОРТАҚ ӘСЕР. БІР КОМАНДА. ✳ BHS FIGHT NIGHT",
 "detailsLabel": "01 / ОРНЫ МЕН УАҚЫТЫ",
 "details": "Ең бастысы",
 "dateLabel": "Күні",
 "date": "2026 жылғы 21 қараша",
 "timeLabel": "Жиналу уақыты",
 "time": "20:00 · алдын ала",
 "locationLabel": "Кездесу орны",
 "location": "Тәжібаева көшесі, 155",
 "building": "«31 арна» ғимараты",
 "programLabel": "02 / БАҒДАРЛАМА",
 "programTitle": "Кеш бағдарламасы",
 "welcome": "Командамен кездесу",
 "welcomeText": "20:00 · алдын ала",
 "fight": "Асуға қолдау",
 "fightText": "Шамамен 23:00-де",
 "activities": "PS5-тегі UFC",
 "activitiesText": "UFC турнирі",
 "audienceLabel": "03 / КІМДЕР ҮШІН",
 "audienceTitle": "Кім бізбен бірге?",
 "audienceText": "Асу Алмабаевқа қолдау көрсетіп, UFC жекпе-жектерін ерекше атмосферада тамашалағысы келетін BHS оқушыларының әкелеріне арналған. Жалғыз немесе ұлыңызбен/қызыңызбен келіңіз.",
 "registerLabel": "04 / ТІРКЕЛУ",
 "registerTitle": "Командаға қосыл",
 "registerText": "Форманы толтырыңыз — бірге қолдайық.",
 "nameLabel": "Аты-жөніңіз",
 "phoneLabel": "Телефон / WhatsApp",
 "phoneHint": "+7 коды бекітілген · 10 сан енгізіңіз",
 "formatLabel": "Қатысу түрі",
 "family": "Әке балаларымен",
 "father": "Әке балаларсыз",
 "student": "Оқушы ата-анасыз",
 "childrenLabel": "Балалар саны",
 "pickup": "Баланы әкеліп, алып кететін ересектің телефонын көрсетіңіз.",
 "consent": "Қатысу үшін деректерімді өңдеуге келісемін.",
 "submit": "Қатысуды растау",
 "footer": "Асу үшін бірге. BHS-пен бірге.",
 "placeholder": "Сізге қалай хабарласамыз?",
 "sending": "Сақталуда…",
 "success": "Сіз командадасыз! 21 қарашада кездескенше.",
 "invalid": "Аты-жөніңізді, телефонның 10 санын және келісімді тексеріңіз.",
 "error": "Растау жоқ. Қайта жібермес бұрын ұйымдастырушылардан мәртебесін сұраңыз.",
 "timeout": "Күту уақыты аяқталды. Ұйымдастырушылардан мәртебесін сұраңыз.",
 "rejected": "Өтінім қабылданбады. Деректерді тексеріңіз."
};
let language = 'kk';
let statusKey = '';
function translate() {
 const t = language === 'kk' ? kk : ru;
 document.documentElement.lang = language;
 document.querySelectorAll('[data-i]').forEach(el => { el.textContent = t[el.dataset.i]; });
 document.querySelectorAll('[data-lang]').forEach(el => el.setAttribute('aria-pressed', String(el.dataset.lang === language)));
 document.querySelector('#name').placeholder = t.placeholder;
 document.querySelector('#form-status').textContent = statusKey ? t[statusKey] : '';
 const submitLabel = document.querySelector('.submit [data-i=submit]');
 if (submitLabel && statusKey === 'sending') submitLabel.textContent = t.sending;
}
document.querySelectorAll('[data-lang]').forEach(el => el.addEventListener('click', () => { language = el.dataset.lang; translate(); }));
const form = document.querySelector('form');
const phoneInput = document.querySelector('#phone');
function updatePhone(value, digitPosition) {
 phoneInput.value = formatNationalPhone(value);
 if (digitPosition !== undefined) {
  let position = 0, count = 0;
  while (position < phoneInput.value.length && count < digitPosition) {
   if (/\d/.test(phoneInput.value[position])) count++;
   position++;
  }
  phoneInput.setSelectionRange(position, position);
 }
}
phoneInput.addEventListener('input', () => {
 const before = phoneInput.value.slice(0, phoneInput.selectionStart).replace(/\D/g, '').length;
 updatePhone(phoneInput.value, before);
});
phoneInput.addEventListener('paste', event => {
 event.preventDefault();
 const pasted = nationalDigits(event.clipboardData.getData('text'));
 const start = phoneInput.selectionStart, end = phoneInput.selectionEnd;
 const left = phoneInput.value.slice(0, start).replace(/\D/g, '');
 const right = phoneInput.value.slice(end).replace(/\D/g, '');
 updatePhone(left + pasted + right, Math.min(10, left.length + pasted.length));
});
phoneInput.addEventListener('keydown', event => {
 const start = phoneInput.selectionStart, end = phoneInput.selectionEnd;
 if (start !== end || !['Backspace', 'Delete'].includes(event.key)) return;
 const digits = phoneInput.value.replace(/\D/g, '');
 const before = phoneInput.value.slice(0, start).replace(/\D/g, '').length;
 const index = event.key === 'Backspace' ? before - 1 : before;
 event.preventDefault();
 if (index >= 0 && index < digits.length) updatePhone(digits.slice(0, index) + digits.slice(index + 1), index);
});

form.addEventListener('invalid', () => { statusKey = 'invalid'; translate(); }, true);

form.addEventListener('change', () => {
 const segment = new FormData(form).get('segment');
 document.querySelector('#children-field').hidden = segment === 'father';
 document.querySelector('#pickup-note').hidden = segment !== 'student';
});
form.addEventListener('submit', async event => {
 event.preventDefault();
 const button = form.querySelector('button[type=submit]');
 if (button.disabled) return;
 const data = new FormData(form);
 const digits = nationalDigits(data.get('phone'));
 const phone = '+7' + digits;
 const children = data.get('segment') === 'father' ? 0 : Number(data.get('children'));
 if (digits.length !== 10 || !Number.isInteger(children) || children < 0 || children > 3) {
  statusKey = 'invalid'; translate(); document.querySelector('#phone').focus(); return;
 }
 button.disabled = true; statusKey = 'sending'; translate();
 const controller = new AbortController();
 const timeout = setTimeout(() => controller.abort(), 20000);
 try {
  const payload = new URLSearchParams({
   name: data.get('name'),
   phone,
   segment: data.get('segment'),
   children: data.get('segment') === 'father' ? '0' : data.get('children'),
   language,
   consent: String(data.get('consent') === 'on')
  });
  const response = await fetch('https://script.google.com/macros/s/AKfycbyLBEWI4maycellxP8GC8jFp700wPA4phzmHGvS0ARHFHph5yXOUqhJ69H7gi4MG0kN/exec', {
   method: 'POST', body: payload, credentials: 'omit', redirect: 'follow', signal: controller.signal
  });
  if (!response.ok) throw Error('Registration failed');
  const result = await response.json();
  if (result.ok !== true) { statusKey = 'rejected'; return; }
  statusKey = 'success'; form.reset(); document.querySelector('#children-field').hidden = false; document.querySelector('#pickup-note').hidden = true;
 } catch (error) { statusKey = error.name === 'AbortError' ? 'timeout' : 'error'; }
 finally { clearTimeout(timeout); button.disabled = false; translate(); if (statusKey === 'success') window.alert((language === 'kk' ? kk : ru).success); }
});
translate();
const scriptWarning = document.querySelector('#script-warning');
if (scriptWarning) scriptWarning.hidden = true;
