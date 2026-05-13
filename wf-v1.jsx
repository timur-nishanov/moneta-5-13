// Wireframe v1 — "Index / Mollie-style"
// Sticky left sidebar навигация по разделам/задачам/отраслям; правая колонка
// чистый текстовый список статей с датами и тегами. ОДНА обложка только
// для свежей статьи. Без визуального шума.

const W1 = () => {
  const articles = [
    {date:"06 МАЙ", title:"Как увеличить конверсию платежей на сайте", desc:"Почему пользователи не оплачивают заказы на последних этапах воронки и как это исправить.", tags:["Конверсия","E-com"], read:"8 мин"},
    {date:"02 МАЙ", title:"Сплитование платежей: как разделить оплату между селлерами", desc:"Архитектура мультивендорного маркетплейса и юридические нюансы.", tags:["Маркетплейсы","API"], read:"12 мин"},
    {date:"28 АПР", title:"СБП в офлайне: интеграция за рабочий день", desc:"Что происходит на стороне кассы и как настроить динамический QR.", tags:["СБП","Офлайн"], read:"6 мин"},
    {date:"22 АПР", title:"Подписочная модель: рекуррентные платежи без боли", desc:"Удержание карт, обработка отказов, налоги и чеки на каждый платёж.", tags:["Подписки"], read:"10 мин"},
    {date:"18 АПР", title:"API Monета 2.0: что изменилось для разработчиков", desc:"Новые методы, изменения в идемпотентности, миграция со старой версии.", tags:["API","Релиз"], read:"5 мин"},
    {date:"14 АПР", title:"Нерезиденты на российском рынке: как принимать платежи легально", desc:"Валютный контроль, документы, реальная схема расчётов.", tags:["Нерезиденты","Право"], read:"14 мин"},
  ];

  return (
    <div className="wf" style={{width:1280, minHeight:1900, background:"var(--wf-bg)", position:"relative"}}>
      <Nav active="Журнал" />

      {/* Hero — компактный, текстовый */}
      <div className="px-40 py-48">
        <div className="crumbs"><span>Главная</span><span>Журнал</span></div>
        <h1 className="display" style={{maxWidth:"18ch"}}>
          Финтех-журнал <span className="hl">Монета</span>
        </h1>
        <p className="lede mt-16" style={{maxWidth:"68ch"}}>
          Экспертиза в платёжных решениях для бизнеса. Кейсы, разборы интеграций, практические рекомендации
          по снижению комиссии, росту конверсии и управлению платёжными процессами.
        </p>
      </div>

      {/* Two-column body */}
      <div className="px-40" style={{display:"grid", gridTemplateColumns:"220px 1fr", gap:48}}>
        {/* Sidebar */}
        <aside className="sidebar">
          <div className="group">
            <div className="group-title">Тип контента</div>
            <span className="link is-active">Все материалы <span className="text-mute">· 142</span></span>
            <span className="link">Статьи <span className="text-mute">· 86</span></span>
            <span className="link">Кейсы <span className="text-mute">· 24</span></span>
            <span className="link">Гайды <span className="text-mute">· 18</span></span>
            <span className="link">Документация <span className="text-mute">· 9</span></span>
            <span className="link">Новости <span className="text-mute">· 12</span></span>
            <span className="link">Медиа о нас <span className="text-mute">· 7</span></span>
          </div>
          <div className="group">
            <div className="group-title">По отраслям</div>
            {["Маркетплейсы","HoReCa","Ритейл","Образование","Доставки","МФО","Медицина","Шеринг","Стриминг","Госструктуры"].map((x,i)=>(
              <span key={x} className={`link ${i===0?"is-active":""}`}>{x}</span>
            ))}
            <span className="link text-mute">Показать все →</span>
          </div>
          <div className="group">
            <div className="group-title">По задачам</div>
            {["Интернет-эквайринг","СБП","API","Сплитование","Подписки","Чеки","Безопасная сделка"].map(x=>(
              <span key={x} className="link">{x}</span>
            ))}
            <span className="link text-mute">Показать все →</span>
          </div>
        </aside>

        {/* Main column */}
        <main>
          {/* Featured — единственная карточка с превью */}
          <div className="hero-card">
            <div>
              <div className="micro" style={{color:"var(--wf-red)"}}>● Новое в журнале</div>
              <h2 className="h1 mt-12" style={{maxWidth:"20ch"}}>Кейс «ТопСто»: бесшовная оплата госпошлины и −100 часов ручной работы в месяц</h2>
              <p className="body mt-16">Разобрали архитектуру интеграции, юридические нюансы для госорганов
                и показали прозрачные цифры: как меняются комиссия, конверсия и стабильность платежей.</p>
              <div className="row gap-8 mt-24"><Tag>Кейс</Tag><Tag>Госструктуры</Tag><Tag>Эквайринг</Tag></div>
              <div className="row gap-16 mt-24" style={{alignItems:"center"}}>
                <button className="btn btn-yellow">Читать кейс →</button>
                <span className="small mono">06 МАЯ · 14 МИН</span>
              </div>
            </div>
            <div className="ph" style={{minHeight:240}}>обложка / только для свежего</div>
          </div>

          {/* Section: Новое в журнале — список */}
          <div className="mt-64">
            <SectionHead eyebrow="01 / Свежее" title="Новое в журнале" link="Все статьи" />
            <div>
              {articles.map((a,i)=><ArticleRow key={i} {...a} readTime={a.read} />)}
            </div>
          </div>

          {/* Section: Кейсы — двухколоночный текстовый блок */}
          <div className="mt-64">
            <SectionHead
              eyebrow="02 / Кейсы"
              title="Кейсы и практический опыт"
              sub="Реальные истории внедрения. Архитектура, сложные интеграции, прозрачные результаты в цифрах."
              link="Смотреть все кейсы"
            />
            <div className="row gap-8 wrap" style={{marginBottom:24}}>
              {["HoReCa","Ритейл","Услуги","Строительство","Школы/Вузы","Госструктуры","Производство"].map((t,i)=>(
                <Tag key={t} active={i===0}>{t}</Tag>
              ))}
            </div>
            {/* Акцентный кейс */}
            <div className="hero-card" style={{marginBottom:24, paddingBottom:24, borderBottom:"1px solid var(--wf-line-2)"}}>
              <div>
                <div className="row gap-8" style={{alignItems:"center"}}>
                  <div style={{width:36,height:36,borderRadius:6,background:"var(--wf-ink)",color:"#fff",display:"flex",alignItems:"center",justifyContent:"center",fontSize:11,fontWeight:600,fontFamily:"ui-monospace"}}>ТС</div>
                  <span className="small mono">ТопСто</span>
                  <span className="small text-mute">·</span>
                  <span className="small mono text-mute">06 МАЯ 2026</span>
                  <Tag>Госструктуры</Tag><Tag>Эквайринг</Tag>
                </div>
                <h2 className="h1 mt-16" style={{maxWidth:"24ch"}}>Оплата госпошлины: бесшовно для клиента, −100 часов ручной работы в месяц</h2>
                <p className="body mt-16">Ручная работа с платежами в госструктурах. Что мы автоматизировали и какие цифры получили по комиссии, конверсии и стабильности.</p>
                <div className="row gap-16 mt-24" style={{alignItems:"center"}}>
                  <button className="btn">Читать кейс →</button>
                  <span className="small mono">14 МИН · ЛЕВ ПАВЛОВ</span>
                </div>
              </div>
              <div className="ph" style={{minHeight:220}}>обложка кейса</div>
            </div>

            <div className="two-col">
              {[
                {co:"Kostis", ab:"KO", t:"Кейтеринг: −50% комиссии и доля СБП до 85%", d:"Гибкая работа с меняющимися суммами заказов и динамическим QR на стороне курьера.", date:"28 АПР 2026"},
                {co:"Маркет‑X", ab:"МX", t:"Сплитование на маркетплейсе из 2 400 продавцов", d:"Архитектура расщепления, юр. модель, обработка возвратов.", date:"20 АПР 2026"},
                {co:"EduTech", ab:"ED", t:"Подписочные тарифы для онлайн‑школы: миграция за 2 недели", d:"Удержание карт, рекуррент, чеки и удержание при отказе.", date:"12 АПР 2026"},
              ].map((c,i)=>(
                <div key={i} className="box p-24">
                  <div className="row gap-12" style={{alignItems:"center"}}>
                    <div style={{width:40,height:40,borderRadius:8,background:"var(--wf-fill)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:11,fontFamily:"ui-monospace"}}>{c.ab}</div>
                    <div className="small mono">{c.co} · {c.date}</div>
                  </div>
                  <div className="h3 mt-16">{c.t}</div>
                  <div className="body mt-8">{c.d}</div>
                  <div className="btn-link mt-16" style={{fontSize:13}}>Читать кейс →</div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="cta-strip mt-48">
            <div>
              <h3>Подключите интернет‑эквайринг за 1 рабочий день</h3>
              <p>Для регистрации нужны только ИНН, контакты и ссылка на сайт. Персональный менеджер поможет с интеграцией.</p>
            </div>
            <button className="btn">Оставить заявку →</button>
          </div>

          {/* Section: Гайды — список (никаких обложек) */}
          <div className="mt-64">
            <SectionHead eyebrow="03 / Гайды" title="База знаний и руководства" link="Все гайды" />
            <div>
              {[
                {date:"30 АПР", title:"Как пополнить Steam: легальные способы для бизнеса и физлиц", desc:"Что делать, если деньги есть и хочется их занести Габену. Разобрали 4 рабочие схемы.", tags:["Гайд","Стриминг"], read:"7 мин"},
                {date:"24 АПР", title:"Подключение онлайн‑кассы: пошаговая инструкция", desc:"От заявки до первой фискализации. Чек‑лист и типовые ошибки.", tags:["Гайд","Кассы"], read:"15 мин"},
                {date:"19 АПР", title:"Регистрация дохода самозанятых через API", desc:"Поток данных, чеки, отчётность. С примерами кода.", tags:["Гайд","API"], read:"9 мин"},
                {date:"15 АПР", title:"Безопасная сделка: когда нужна и как настроить", desc:"Сценарии для маркетплейсов, недвижимости и услуг.", tags:["Гайд"], read:"11 мин"},
              ].map((a,i)=><ArticleRow key={i} {...a} readTime={a.read} />)}
            </div>
          </div>

          {/* Медиа о нас — текстовый список с источником */}
          <div className="mt-64">
            <SectionHead eyebrow="04 / Внешние публикации" title="Медиа о нас" link="Все упоминания" />
            <div>
              {[
                {date:"PlusWorld", title:"Сплитование платежей: как разделить оплату между селлерами на маркетплейсе", desc:"Директор по продажам Максим Пашкевич — об архитектуре расщепления.", tags:["Интервью"]},
                {date:"vc.ru", title:"Что меняется в эквайринге в 2026 году: 5 трендов", desc:"Колонка СТО Монеты для предпринимательского сообщества.", tags:["Колонка"]},
                {date:"Forbes", title:"СБП vs карты: где проигрывает классический эквайринг", desc:"Аналитика на данных 20 млн транзакций в месяц.", tags:["Аналитика"]},
              ].map((a,i)=><ArticleRow key={i} {...a} />)}
            </div>
          </div>

          {/* Редакция */}
          <div className="mt-64">
            <SectionHead eyebrow="05 / Редакция" title="Кто пишет в журнал" sub="Материалы на основе практического опыта специалистов на стыке разработки, аналитики и права." link="Подробнее о редакции" />
            <div className="three-col">
              {[
                {n:"Илья Нымм", r:"Главный редактор", b:"Задаёт стандарты контента. Следит, чтобы сложные сценарии интеграций были понятны владельцу бизнеса."},
                {n:"Анастасия Гущина", r:"Редактор", b:"Изучает рынок и разбирает финтех‑тренды на детали — пишем только проверенные материалы."},
                {n:"Яна Баширова", r:"Редактор", b:"Помогает экспертам по безопасности и эквайрингу рассказывать о нюансах простым языком."},
              ].map(p => (
                <div key={p.n} className="col gap-8">
                  <div className="ph" style={{width:64,height:64,borderRadius:999}}>фото</div>
                  <div className="h3 mt-8">{p.n}</div>
                  <div className="small">{p.r}</div>
                  <div className="body mt-8">{p.b}</div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>

      <Footer />

      {/* Annotations */}
      <Sticky text="Sticky sidebar — навигация по типу/отрасли/задаче. Mollie-подход" top={300} left={20} />
      <Sticky text="ОДНА обложка — только для свежей. Все остальные — текстовые ряды" top={420} right={20} />
      <Sticky text="Список с датой + заголовок + 1‑2 строки + теги. Никаких карточек" top={760} right={20} />
    </div>
  );
};

window.W1 = W1;
