import { nationalDigits, formatNationalPhone } from './phone.mjs';
const ru = {
 "announcement": "Участие бесплатно, места ограничены",
 "eyebrow": "BHS × FIGHT NIGHT · 21 НОЯБРЯ",
 "hero": "Вместе\nза Асу!",
 "lead": "UFC. Асу Алмабаев. Команда BHS.",
 "cta": "Зарегистрироваться",
 "ticker": "ОДИН БОЙ. ОБЩИЕ ЭМОЦИИ. СВОЯ КОМАНДА. ✳ BHS FIGHT NIGHT",
 "details": "Всё главное",
 "dateLabel": "Дата",
 "date": "21 ноября 2026",
 "timeLabel": "Начало мероприятия",
 "time": "21:00",
 "locationLabel": "Место встречи",
 "location": "Тажибаевой, 155",
 "building": "Здание «31 канала»",
 "programTitle": "Что вас ждет",
 "audienceTitle": "Кто с нами:",
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
 "rejected": "Заявка отклонена. Проверьте данные.",
 "staff": "Сотрудники",
 "parentPhoneLabel": "Телефон родителя",
 "parentPhoneHint": "Отдельный контакт для связи с родителем",
 "consentRequired": "Поставьте галочку согласия на обработку данных, чтобы отправить заявку.",
 "program1": "Просмотр боя в легендарном месте",
 "programText1": "Зал, где тренируются Асу Алмабаев и Шавкат Рахмонов",
 "program2": "Турнир по UFC на PS5",
 "programText2": "Виртуальные бои на консоли и заруба за титул вечера",
 "program3": "Встреча с про-бойцами",
 "programText3": "Общение со спортсменами, фото и разбор тактик",
 "program4": "Комьюнити BHS",
 "programText4": "Драйвовая атмосфера в кругу пап, учеников, учителей и команды",
 "audience1": "Папы учеников",
 "audienceText1": "Поболеть за Асу Алмабаева, отдохнуть и провести время с детьми",
 "audience2": "Ученики BHS",
 "audienceText2": "Погрузиться в атмосферу и сыграть в турнире по UFC на PS5",
 "audience3": "Команда BHS",
 "audienceText3": "Провести день вместе вне уроков",
 "audience4": "Профессиональные бойцы",
 "audienceText4": "Специальные гости события"
};
const kk = {
 "announcement": "Қатысу тегін, орын саны шектеулі",
 "eyebrow": "BHS × FIGHT NIGHT · 21 ҚАРАША",
 "hero": "Асуға бірге\nқолдау көрсетейік!",
 "lead": "UFC. Асу Алмабаев. BHS командасы.",
 "cta": "Тіркелу",
 "ticker": "БІР ЖЕКПЕ-ЖЕК. ОРТАҚ ӘСЕР. БІР КОМАНДА. ✳ BHS FIGHT NIGHT",
 "details": "Ең бастысы",
 "dateLabel": "Күні",
 "date": "2026 жылғы 21 қараша",
 "timeLabel": "Іс-шараның басталуы",
 "time": "21:00",
 "locationLabel": "Кездесу орны",
 "location": "Тәжібаева көшесі, 155",
 "building": "«31 арна» ғимараты",
 "programTitle": "Сіздерді не күтеді",
 "audienceTitle": "Кім бізбен бірге:",
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
 "rejected": "Өтінім қабылданбады. Деректерді тексеріңіз.",
 "staff": "Қызметкерлер",
 "parentPhoneLabel": "Ата-ананың телефоны",
 "parentPhoneHint": "Ата-анамен байланысуға арналған бөлек нөмір",
 "consentRequired": "Өтінімді жіберу үшін деректерді өңдеуге келісім белгісін қойыңыз.",
 "program1": "Аңызға айналған залда жекпе-жек тамашалау",
 "programText1": "Асу Алмабаев пен Шавкат Рахмонов жаттығатын зал",
 "program2": "PS5-тегі UFC турнирі",
 "programText2": "Консольдегі виртуалды жекпе-жектер және кеш чемпионы атағына талас",
 "program3": "Кәсіпқой спортшылармен кездесу",
 "programText3": "Спортшылармен әңгімелесу, суретке түсу және тактиканы талдау",
 "program4": "BHS қауымдастығы",
 "programText4": "Әкелер, оқушылар, мұғалімдер және команда ортасындағы ерекше атмосфера",
 "audience1": "Оқушылардың әкелері",
 "audienceText1": "Асу Алмабаевқа қолдау көрсетіп, демалу және балалармен уақыт өткізу",
 "audience2": "BHS оқушылары",
 "audienceText2": "Ерекше атмосфераны сезініп, PS5-тегі UFC турниріне қатысу",
 "audience3": "BHS командасы",
 "audienceText3": "Сабақтан тыс бірге уақыт өткізу",
 "audience4": "Кәсіпқой спортшылар",
 "audienceText4": "Іс-шараның арнайы қонақтары"
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
function attachPhoneMask(phoneInput) {
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

}
document.querySelectorAll('input[type=tel]').forEach(attachPhoneMask);


const consentInput = form.elements.consent;
function syncParticipation() {
 const segment = form.elements.segment.value;
 const student = segment === 'student';
 const alone = ['father', 'staff'].includes(segment);
 const childrenSelect = form.elements.children;
 childrenSelect.querySelectorAll('option').forEach(option => {
  option.hidden = student && option.value !== '1';
  option.disabled = student && option.value !== '1';
 });
 if (student) childrenSelect.value = '1';
 childrenSelect.disabled = alone;
 document.querySelector('#children-field').hidden = alone;
 document.querySelector('#parent-phone-field').hidden = !student;
 form.elements.parentPhone.disabled = !student;
 form.elements.parentPhone.required = student;
 document.querySelector('#pickup-note').hidden = !student;
}
form.addEventListener('change', syncParticipation);
consentInput.addEventListener('change', () => {
 if (consentInput.checked) {
  consentInput.removeAttribute('aria-invalid');
  document.querySelector('.consent').classList.remove('has-error');
  if (statusKey === 'consentRequired') { statusKey = ''; translate(); }
 }
});
function showConsentError() {
 statusKey = 'consentRequired'; translate();
 consentInput.setAttribute('aria-invalid', 'true');
 document.querySelector('.consent').classList.add('has-error');
 consentInput.focus();
 document.querySelector('#form-status').scrollIntoView({block:'nearest',behavior:'smooth'});
}
form.addEventListener('submit', async event => {
 event.preventDefault();
 const button = form.querySelector('button[type=submit]');
 if (button.disabled) return;
 if (!consentInput.checked) { showConsentError(); return; }
 if (!form.checkValidity()) { statusKey = 'invalid'; translate(); form.reportValidity(); return; }
 const data = new FormData(form);
 const digits = nationalDigits(data.get('phone'));
 const phone = '+7' + digits;
 const segment = data.get('segment');
 const children = ['father', 'staff'].includes(segment) ? 0 : segment === 'student' ? 1 : Number(data.get('children'));
 const parentPhone = segment === 'student' ? '+7' + nationalDigits(data.get('parentPhone')) : '';
 if (segment === 'student' && !/^\+7[0-9]{10}$/.test(parentPhone)) { statusKey = 'invalid'; translate(); form.elements.parentPhone.focus(); return; }
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
   children: String(children),
   parentPhone,
   language,
   consent: String(data.get('consent') === 'on')
  });
  const response = await fetch('https://script.google.com/macros/s/AKfycbyLBEWI4maycellxP8GC8jFp700wPA4phzmHGvS0ARHFHph5yXOUqhJ69H7gi4MG0kN/exec', {
   method: 'POST', body: payload, credentials: 'omit', redirect: 'follow', signal: controller.signal
  });
  if (!response.ok) throw Error('Registration failed');
  const result = await response.json();
  if (result.ok !== true) { statusKey = 'rejected'; return; }
  statusKey = 'success'; form.reset(); syncParticipation();
 } catch (error) { statusKey = error.name === 'AbortError' ? 'timeout' : 'error'; }
 finally { clearTimeout(timeout); button.disabled = false; translate(); if (statusKey === 'success') window.alert((language === 'kk' ? kk : ru).success); }
});
syncParticipation();
translate();
const scriptWarning = document.querySelector('#script-warning');
if (scriptWarning) scriptWarning.hidden = true;
