// Wireframe v4 — "List-first / Docs-style"
// Один длинный фильтруемый список всех материалов сверху страницы.
// Никаких обложек кроме одной для самой свежей. Всё максимально
// текстоцентрично, как docs или changelog.

const W4 = () => {
  const all = [
    {date:"2026-05-06", type:"Кейс", t:"ТопСто: оплата госпошлины, −100ч ручной работы", d:"Госструктуры, бесшовная интеграция, прозрачные цифры по комиссии.", tags:["Госструктуры","Эквайринг"], read:"14 мин"},
    {date:"2026-05-06", type:"Статья", t:"Как увеличить конверсию платежей на сайте", d:"Почему пользователи не оплачивают на последних этапах воронки.", tags:["Конверсия","E‑com"], read:"8 мин"},
    {date:"2026-05-02", type:"Статья", t:"Сплитование платежей: разделение оплаты между селлерами", d:"Архитектура мультивендора, юр.модель, обработка возвратов.", tags:["Маркетплейсы","API"], read:"12 мин"},
    {date:"2026-04-30", type:"Гайд", t:"Как пополнить Steam: легальные способы", d:"4 рабочие схемы для бизнеса и физлиц.", tags:["Стриминг"], read:"7 мин"},
    {date:"2026-04-28", type:"Кейс", t:"Kostis: −50% комиссии, СБП до 85%", d:"Кейтеринг, гибкие суммы заказов, динамический QR.", tags:["HoReCa","СБП"], read:"10 мин"},
    {date:"2026-04-24", type:"Гайд", t:"Подключение онлайн‑кассы: пошагово", d:"От заявки до первой фискализации, типовые ошибки.", tags:["Кассы"], read:"15 мин"},
    {date:"2026-04-22", type:"Статья", t:"Подписочная модель: рекуррент без боли", d:"Удержание карт, обработка отказов, налоги, чеки.", tags:["Подписки"], read:"10 мин"},
    {date:"2026-04-19", type:"Гайд", t:"Регистрация дохода самозанятых через API", d:"Поток данных, чеки, отчётность с примерами кода.", tags:["API","Самозанятые"], read:"9 мин"},
    {date:"2026-04-18", type:"Новость", t:"API Monета 2.0 — что изменилось для разработчиков", d:"Идемпотентность, новые методы, миграция со старой версии.", tags:["API","Релиз"], read:"5 мин"},
    {date:"2026-04-16", type:"Новость", t:"Релиз: конструктор витрин для микробизнеса", d:"Платёжная страница за 5 минут без кода.", tags:["Релиз","Микробизнес"], read:"3 мин"},
    {date:"2026-04-14", type:"Статья", t:"Нерезиденты: легальный приём платежей", d:"Валютный контроль, документы, реальная схема.", tags:["Нерезиденты","Право"], read:"14 мин"},
    {date:"2026-04-11", type:"Гайд", t:"Безопасная сделка: когда нужна и как настроить", d:"Сценарии для маркетплейсов, недвижимости, услуг.", tags:["Эскроу"], read:"11 мин"},
    {date:"2026-04-08", type:"Кейс", t:"EduTech: подписки за 2 недели миграция", d:"Удержание карт, рекуррент, чеки и удержание при отказе.", tags:["Образование","Подписки"], read:"9 мин"},
    {date:"2026-04-05", type:"Медиа", t:"vc.ru: 5 трендов эквайринга в 2026 году", d:"Колонка CTO Монеты для предпринимательского сообщества.", tags:["Колонка"], read:"6 мин"},
    {date:"2026-04-02", type:"Новость", t:"СБП: динамический QR на стороне кассы", d:"Релиз новой возможности для офлайн‑точек.", tags:["СБП","Релиз"], read:"4 мин"},
    {date:"2026-03-28", type:"Кейс", t:"Маркет‑X: сплитование на 2 400 продавцов", d:"Архитектура расщепления, юр.модель, возвраты.", tags:["Маркетплейсы","Сплитование"], read:"13 мин"},
    {date:"2026-03-25", type:"Статья", t:"Мультиэквайринг: зачем держать 2+ банка", d:"Снижение рисков, балансировка, аналитика.", tags:["Мультиэквайринг"], read:"8 мин"},
    {date:"2026-03-20", type:"Медиа", t:"PlusWorld: интервью с М. Пашкевичем", d:"О расщеплении платежей в e‑commerce.", tags:["Интервью"], read:"7 мин"},
  ];

  const typeColor = {Статья:"#fff", Кейс:"var(--wf-yellow)", Гайд:"#fff", Новость:"#fff", Медиа:"#fff"};

  return (
    <div className="wf" style={{width:1280, minHeight:2200, background:"var(--wf-bg)", position:"relative"}}>
      <Nav active="Журнал" />

      {/* Tight masthead + search */}
      <div className="px-40" style={{paddingTop:48, paddingBottom:32, borderBottom:"1px solid var(--wf-line)"}}>
        <div className="between" style={{alignItems:"flex-end"}}>
          <div>
            <div className="micro">База знаний · обновлено 06 мая 2026</div>
            <h1 className="display mt-12" style={{maxWidth:"18ch"}}>Всё, что мы знаем о платежах</h1>
            <p className="lede mt-16" style={{maxWidth:"60ch"}}>142 материала: статьи, кейсы, гайды, документация и публикации в внешних медиа. Один список — все фильтры.</p>
          </div>
        </div>
      </div>

      {/* ОДНА обложка для свежего */}
      <div className="px-40 py-32">
        <div className="box p-24" style={{display:"grid", gridTemplateColumns:"260px 1fr auto", gap:24, alignItems:"center", borderColor:"var(--wf-ink)", borderWidth:"1.5px"}}>
          <div className="ph" style={{height:140}}>обложка свежего</div>
          <div>
            <div className="row gap-8"><Tag yellow>Свежее</Tag><Tag>Кейс</Tag><Tag>Госструктуры</Tag></div>
            <div className="h2 mt-12" style={{maxWidth:"30ch"}}>ТопСто: оплата госпошлины бесшовно и −100 часов ручной работы в месяц</div>
            <div className="body mt-8">06 мая 2026 · 14 мин чтения · Лев Павлов</div>
          </div>
          <button className="btn">Читать →</button>
        </div>
      </div>

      {/* Filters bar (sticky-feel) */}
      <div className="px-40" style={{position:"relative", paddingTop:24, paddingBottom:16, borderTop:"1px solid var(--wf-line-2)", borderBottom:"1px solid var(--wf-line-2)", background:"var(--wf-bg)"}}>
        <div style={{display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:24}}>
          <div>
            <div className="micro" style={{marginBottom:8}}>Тип</div>
            <div className="row gap-8 wrap">
              {[
                ["Все",142],["Статьи",86],["Кейсы",24],["Гайды",18],["Новости",12],["Медиа",7],["Документация",9]
              ].map(([t,c],i)=><Tag key={t} active={i===0} count={c}>{t}</Tag>)}
            </div>
          </div>
          <div>
            <div className="micro" style={{marginBottom:8}}>Отрасль</div>
            <div className="row gap-8 wrap">
              {["Все","Маркетплейсы","HoReCa","Ритейл","Образование","МФО","Госструктуры","Шеринг","+11"].map((t,i)=><Tag key={t} active={i===0}>{t}</Tag>)}
            </div>
          </div>
          <div>
            <div className="micro" style={{marginBottom:8}}>Задача</div>
            <div className="row gap-8 wrap">
              {["Все","Эквайринг","СБП","API","Сплитование","Подписки","Чеки","+18"].map((t,i)=><Tag key={t} active={i===0}>{t}</Tag>)}
            </div>
          </div>
        </div>
        <div className="between mt-16">
          <div className="row gap-12">
            <span className="small text-mute">Сортировка:</span>
            <span className="btn-link" style={{fontSize:13}}>Сначала свежие ↓</span>
          </div>
          <span className="small text-mute mono">показано 18 из 142</span>
        </div>
      </div>

      {/* Master list — все типы вперемешку, как changelog */}
      <div className="px-40 py-32">
        {all.map((a,i)=>(
          <div key={i} style={{display:"grid", gridTemplateColumns:"110px 70px 1fr 90px", gap:24, padding:"18px 0", borderTop:i===0?"1.5px solid var(--wf-ink)":"1px solid var(--wf-line-2)", alignItems:"baseline"}}>
            <div className="small mono" style={{color:"var(--wf-ink-2)"}}>{a.date}</div>
            <span className="tag" style={{fontSize:11, padding:"2px 10px", background:typeColor[a.type], borderColor:a.type==="Кейс"?"var(--wf-yellow)":"var(--wf-line)"}}>{a.type}</span>
            <div>
              <div style={{fontSize:16, fontWeight:500, letterSpacing:"-0.01em"}}>{a.t}</div>
              <div className="body mt-4" style={{fontSize:13}}>{a.d}</div>
              <div className="row gap-8 mt-8 wrap">
                {a.tags.map(t=><span key={t} className="small" style={{color:"var(--wf-mute)"}}>#{t}</span>)}
              </div>
            </div>
            <div className="small mono text-mute" style={{textAlign:"right"}}>{a.read}</div>
          </div>
        ))}
        <div className="center mt-32 col gap-12">
          <button className="btn btn-ghost">Загрузить ещё 30 материалов</button>
          <span className="small text-mute">или <span className="btn-link" style={{fontSize:13}}>смотреть все 142 →</span></span>
        </div>
      </div>

      {/* Редакция + CTA как в самом низу — компактно */}
      <div className="px-40 py-48" style={{background:"var(--wf-fill)"}}>
        <div className="two-col">
          <div>
            <div className="micro">Редакция</div>
            <h2 className="h1 mt-12" style={{maxWidth:"20ch"}}>Кто пишет в журнал</h2>
            <p className="lede mt-12" style={{maxWidth:"50ch"}}>Материалы на основе практики специалистов на стыке разработки, аналитики и права.</p>
            <div className="row gap-24 mt-24">
              {[["ИН","Илья Нымм"],["АГ","Анастасия Гущина"],["ЯБ","Яна Баширова"]].map(([i,n])=>(
                <div key={n} className="row gap-8" style={{alignItems:"center"}}>
                  <div className="ph" style={{width:36,height:36,borderRadius:999,fontSize:10}}>{i}</div>
                  <span className="small">{n}</span>
                </div>
              ))}
            </div>
            <div className="btn-link mt-24" style={{fontSize:13}}>Подробнее о редакции →</div>
          </div>
          <div className="cta-strip" style={{background:"var(--wf-ink)", color:"#fff"}}>
            <div>
              <h3 style={{color:"#fff"}}>Подключите эквайринг за 1 день</h3>
              <p style={{color:"#bbb"}}>Только ИНН, контакты и ссылка на сайт. Менеджер поможет с интеграцией.</p>
            </div>
            <button className="btn btn-yellow">Заявка →</button>
          </div>
        </div>
      </div>

      <Footer />

      <Sticky text="Один длинный список — основной паттерн. Тип, дата, заголовок, теги" top={420} right={20} />
      <Sticky text="Фильтры компактные горизонтальные: тип/отрасль/задача в одном ряду" top={580} left={20} />
      <Sticky text="Только ОДНА обложка — для свежего. Дальше чистый текст" top={280} left={20} />
    </div>
  );
};

window.W4 = W4;
