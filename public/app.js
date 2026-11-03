const ru = {
eyebrow:'BHS × FIGHT NIGHT · 21 НОЯБРЯ',hero:'Вместе\nза Асу!',lead:'Бой Асу в UFC. Папы и дети BHS. Одна команда.',cta:'Зарегистрироваться',micro:'Меньше минуты — и вы в команде',poster:'БОЛЕЕМ\nЗА СВОИХ.',ticker:'ОДИН БОЙ. ОБЩИЕ ЭМОЦИИ. СВОЯ КОМАНДА. ✳ BHS FIGHT NIGHT',detailsLabel:'01 / МЕСТО И ВРЕМЯ',details:'Всё главное',dateLabel:'Дата',date:'21 ноября 2026',timeLabel:'Время сбора',time:'20:00 · предварительно',locationLabel:'Место встречи',location:'Тажибаевой, 155',building:'Здание «31 канала»',programLabel:'02 / ПРОГРАММА',programTitle:'План вечера',programIntro:'Просмотр боя, PS5 и новые активности.',welcome:'Сбор команды',welcomeText:'20:00 · предварительно',fight:'Болеем за Асу',fightText:'Начало боя — примерно в 23:00.',activities:'UFC на PS5',activitiesText:'Турнир. Другие активности — скоро.',soon:'PS5',audienceLabel:'03 / ДЛЯ КОГО',audienceTitle:'Кто с нами?',family:'Папа с детьми',familyText:'Папа и его дети — школьники BHS.',father:'Папа без детей',fatherText:'Папа школьника BHS приходит один.',student:'Школьник без родителей',studentText:'Мама привозит и забирает ребёнка, сама не участвует.',registerLabel:'04 / РЕГИСТРАЦИЯ',registerTitle:'Вступай в команду',registerText:'Контакт взрослого. Формат участия. Готово.',registerNote:'Сбор предварительно в 20:00. Начало боя — примерно в 23:00. Следите за обновлениями программы.',nameLabel:'Имя и фамилия взрослого',phoneLabel:'Телефон / WhatsApp взрослого',formatLabel:'Формат участия',childrenLabel:'Количество детей',pickup:'Контакт взрослого, который привезёт и заберёт ребёнка. Порядок передачи согласуйте с организаторами.',consent:'Согласен(на) на сохранение имени, телефона и данных участия для организации мероприятия.',submit:'Подтвердить участие',footer:'Вместе за Асу. Вместе с BHS.',placeholder:'Как к вам обращаться?',sending:'Сохраняем…',success:'Вы зарегистрированы! До встречи 21 ноября. Следите за обновлениями на этой странице.',error:'Не удалось отправить заявку. Проверьте телефон (10–15 цифр) и подключение, затем попробуйте ещё раз.'};
const kk = {
eyebrow:'BHS × FIGHT NIGHT · 21 ҚАРАША',hero:'Асуға бірге\nқолдау көрсетейік!',lead:'Асудың UFC жекпе-жегі. BHS әкелері мен балалары. Бір команда.',cta:'Тіркелу',micro:'Бір минутқа жетпей — біздің командадасыз',poster:'ӨЗІМІЗДІКІЛЕРГЕ\nҚОЛДАУ!',ticker:'БІР ЖЕКПЕ-ЖЕК. ОРТАҚ ӘСЕР. БІР КОМАНДА. ✳ BHS FIGHT NIGHT',detailsLabel:'01 / ОРНЫ МЕН УАҚЫТЫ',details:'Ең бастысы',dateLabel:'Күні',date:'2026 жылғы 21 қараша',timeLabel:'Жиналу уақыты',time:'20:00 · алдын ала',locationLabel:'Кездесу орны',location:'Тәжібаева көшесі, 155',building:'«31 арна» ғимараты',programLabel:'02 / БАҒДАРЛАМА',programTitle:'Кеш бағдарламасы',programIntro:'Жекпе-жек, PS5 және жаңа ойындар.',welcome:'Командамен кездесу',welcomeText:'20:00 · алдын ала',fight:'Асуға қолдау',fightText:'Жекпе-жек шамамен 23:00-де.',activities:'PS5-тегі UFC',activitiesText:'Турнир. Басқа ойындар — жақында.',soon:'PS5',audienceLabel:'03 / КІМДЕР ҮШІН',audienceTitle:'Кім бізбен бірге?',family:'Әке балаларымен',familyText:'Әке және оның BHS-те оқитын балалары.',father:'Әке балаларсыз',fatherText:'BHS оқушысының әкесі жалғыз келеді.',student:'Оқушы ата-анасыз',studentText:'Анасы баласын әкеліп, алып кетеді, өзі қатыспайды.',registerLabel:'04 / ТІРКЕЛУ',registerTitle:'Командаға қосыл',registerText:'Ересек адамның байланысы. Қатысу түрі. Дайын.',registerNote:'Жиналу алдын ала 20:00-де. Жекпе-жек шамамен 23:00-де басталады. Бағдарлама жаңартуларын қадағалаңыз.',nameLabel:'Ересек адамның аты-жөні',phoneLabel:'Ересек адамның телефоны / WhatsApp',formatLabel:'Қатысу түрі',childrenLabel:'Балалар саны',pickup:'Баланы әкеліп, алып кететін ересектің байланысы. Тапсыру тәртібін ұйымдастырушылармен келісіңіз.',consent:'Іс-шараны ұйымдастыру үшін аты-жөнімді, телефонымды және қатысу деректерін сақтауға келісемін.',submit:'Қатысуды растау',footer:'Асу үшін бірге. BHS-пен бірге.',placeholder:'Сізге қалай хабарласамыз?',sending:'Сақталуда…',success:'Сіз тіркелдіңіз! 21 қарашада кездескенше. Осы беттегі жаңартуларды қадағалаңыз.',error:'Өтінім жіберілмеді. Телефонды (10–15 сан) және интернет байланысын тексеріп, қайта жіберіңіз.'};
Object.assign(ru, {
 invalid: 'Проверьте имя, телефон и галочку согласия. Все эти поля обязательны.',
 error: 'Не удалось получить подтверждение от Google. Проверьте таблицу перед повторной отправкой. Если строки нет — пришлите нам это сообщение.',
 timeout: 'Google не ответил за 20 секунд. Проверьте таблицу перед повторной отправкой.',
 rejected: 'Google отклонил данные заявки. Проверьте имя, телефон и согласие.'
});
Object.assign(kk, {
 invalid: 'Аты-жөніңізді, телефонды және келісім белгісін тексеріңіз. Бұл өрістер міндетті.',
 error: 'Google растауын алу мүмкін болмады. Қайта жібермес бұрын кестені тексеріңіз. Жол жоқ болса, осы хабарламаны жіберіңіз.',
 timeout: 'Google 20 секунд ішінде жауап бермеді. Қайта жібермес бұрын кестені тексеріңіз.',
 rejected: 'Google өтінім деректерін қабылдамады. Аты-жөніңізді, телефонды және келісімді тексеріңіз.'
});
let language = 'ru';
try { language = localStorage.getItem('bhs-language') === 'kk' ? 'kk' : 'ru'; } catch {}
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
document.querySelectorAll('[data-lang]').forEach(el => el.addEventListener('click', () => { language = el.dataset.lang; try { localStorage.setItem('bhs-language',language); } catch {} translate(); }));
const form = document.querySelector('form');
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
 const phone = String(data.get('phone') || '').replace(/[^\d+]/g, '');
 if (!/^\+?\d{10,15}$/.test(phone)) {
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
