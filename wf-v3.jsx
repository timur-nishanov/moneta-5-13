// Wireframe v3 — "By Task / Pathway"
// Главный приоритет — отрасли и задачи как точки входа. Поиск + большая
// сетка тегов как первый экран. Дальше — компактные ленты по типам
// контента, без обложек.

const W3 = () => (
  <div className="wf" style={{width:1280, minHeight:2000, background:"var(--wf-bg)", position:"relative"}}>
    <Nav active="Журнал" />

    {/* Compact text masthead */}
    <div className="px-40 py-48" style={{textAlign:"center", borderBottom:"1px solid var(--wf-line-2)"}}>
      <div className="micro">База знаний</div>
      <h1 className="display mt-12" style={{maxWidth:"22ch", margin:"12px auto 0"}}>
        Что вам нужно <span className="hl">сделать</span> с платежами?
      </h1>
      <p className="lede mt-16" style={{maxWidth:"60ch", margin:"16px auto 0"}}>
        Подобрали материалы с навигацией по ключевым потребностям бизнеса —
        от готовых интеграций до сценариев оптимизации.
      </p>
      <div style={{maxWidth:640, margin:"32px auto 0"}}>
        <SearchBar placeholder="Введите задачу: «принимать платежи в приложении»…" />
      </div>
      <div className="row gap-8 mt-16 wrap" style={{justifyContent:"center"}}>
        <span className="small text-mute">Часто ищут:</span>
        {["сплитование","СБП офлайн","рекуррент","API","самозанятые"].map(x=>(
          <span key={x} className="btn-link" style={{fontSize:12, fontWeight:400}}>{x}</span>
        ))}
      </div>
    </div>

    {/* Two-column: отрасли | задачи — как dispatch board */}
    <div className="px-40 py-64">
      <div className="section-head">
        <div>
          <div className="eyebrow">01 / Точки входа</div>
          <h2 className="h1">По отраслям и сценариям</h2>
        </div>
        <span className="small text-mute">142 материала · обновлено сегодня</span>
      </div>

      <div className="two-col mt-32">
        {/* Отрасли */}
        <div className="box p-32">
          <div className="between" style={{marginBottom:24}}>
            <h3 className="h2">Отрасли</h3>
            <span className="small mono">18</span>
          </div>
          {[
            ["Маркетплейсы", "сплитование, мультивендор, возвраты", 24],
            ["HoReCa: рестораны, отели, доставки", "QR в зале, чаевые, динамические суммы", 22],
            ["Ритейл и интернет‑магазины", "корзина, скидки, лояльность", 18],
            ["Образование и онлайн‑школы", "подписки, рассрочка, оферта", 15],
            ["МФО и финансы", "идентификация, скоринг, отчётность", 12],
            ["Медицина и шеринг", "регулярные платежи, депозиты", 9],
            ["Госструктуры и муниципалитет", "пошлины, ЖКХ, штрафы", 7],
            ["Стриминг и онлайн‑игры", "донаты, подписки, нерезиденты", 6],
            ["Благотворительность", "регулярные пожертвования", 4],
          ].map(([n,sub,c])=>(
            <div key={n} style={{display:"grid", gridTemplateColumns:"1fr auto", gap:16, padding:"14px 0", borderTop:"1px solid var(--wf-line-2)", alignItems:"center"}}>
              <div>
                <div style={{fontSize:15,fontWeight:500,letterSpacing:"-0.005em"}}>{n}</div>
                <div className="small mt-4">{sub}</div>
              </div>
              <span className="small mono text-mute">{c} →</span>
            </div>
          ))}
          <div className="btn-link mt-16" style={{fontSize:13}}>Все 18 отраслей →</div>
        </div>

        {/* Задачи */}
        <div className="box p-32" style={{background:"var(--wf-fill)"}}>
          <div className="between" style={{marginBottom:24}}>
            <h3 className="h2">Сценарии и задачи</h3>
            <span className="small mono">24</span>
          </div>
          {[
            ["Принимать платежи на сайте", "интернет‑эквайринг, виджет, страница", 28],
            ["Принимать в приложении / по подписке", "in‑app, рекуррент, удержание карт", 22],
            ["Сплитовать платежи между селлерами", "mid‑level и enterprise архитектура", 14],
            ["Работать с СБП и QR", "динамические суммы, офлайн", 18],
            ["Интегрировать через API", "идемпотентность, вебхуки, миграция", 16],
            ["Подключить онлайн‑кассу и чеки", "ОФД, фискализация, самозанятые", 12],
            ["Принимать от юр.лиц", "счета, акты, мультибанк", 9],
            ["Платить пошлины, ЖКХ, штрафы", "госуслуги, реестры", 7],
            ["Конструктор витрин", "без кода, для микробизнеса", 4],
          ].map(([n,sub,c])=>(
            <div key={n} style={{display:"grid", gridTemplateColumns:"1fr auto", gap:16, padding:"14px 0", borderTop:"1px solid var(--wf-line)", alignItems:"center"}}>
              <div>
                <div style={{fontSize:15,fontWeight:500,letterSpacing:"-0.005em"}}>{n}</div>
                <div className="small mt-4">{sub}</div>
              </div>
              <span className="small mono text-mute">{c} →</span>
            </div>
          ))}
          <div className="btn-link mt-16" style={{fontSize:13}}>Все 24 задачи →</div>
        </div>
      </div>
    </div>

    {/* Свежий материал — единственная карточка с ОДНОЙ обложкой */}
    <div className="px-40">
      <div className="section-head">
        <div>
          <div className="eyebrow">02 / Свежее</div>
          <h2 className="h1">Новое в журнале</h2>
        </div>
        <span className="btn-link">Все материалы →</span>
      </div>
      <div className="box p-32" style={{display:"grid", gridTemplateColumns:"320px 1fr", gap:32, alignItems:"center"}}>
        <div className="ph" style={{height:200}}>обложка свежей статьи</div>
        <div>
          <div className="row gap-8"><Tag yellow>Новое</Tag><Tag>Конверсия</Tag><Tag>E‑com</Tag></div>
          <h3 className="h1 mt-16" style={{maxWidth:"22ch"}}>Как увеличить конверсию платежей на сайте</h3>
          <p className="body mt-12">Расскажем, почему пользователи не оплачивают заказы на последних этапах воронки и какие способы помогут повысить конверсию в платёж.</p>
          <div className="row gap-24 mt-24" style={{alignItems:"center"}}>
            <button className="btn">Читать статью →</button>
            <span className="small mono">06 МАЯ · 8 МИН</span>
          </div>
        </div>
      </div>
    </div>

    {/* Three lanes: Статьи / Кейсы / Гайды — текстовые списки */}
    <div className="px-40 py-64">
      <div className="section-head">
        <div>
          <div className="eyebrow">03 / По типам</div>
          <h2 className="h1">Статьи · Кейсы · Гайды</h2>
        </div>
        <div className="row gap-12">
          <span className="btn-link">Все статьи →</span>
          <span className="btn-link">Все кейсы →</span>
          <span className="btn-link">Все гайды →</span>
        </div>
      </div>

      <div className="three-col mt-16">
        {[
          {h:"Статьи", items:[
            {d:"02 МАЙ", t:"Сплитование на маркетплейсах", s:"Архитектура мультивендор."},
            {d:"22 АПР", t:"Подписки: рекуррент без боли", s:"Удержание, отказы, налоги."},
            {d:"14 АПР", t:"Нерезиденты: легальный приём", s:"Валютный контроль и схема."},
            {d:"10 АПР", t:"Безопасная сделка: сценарии", s:"Маркетплейсы и услуги."},
          ]},
          {h:"Кейсы", items:[
            {d:"06 МАЙ", t:"ТопСто · −100ч ручной работы", s:"Госпошлины бесшовно."},
            {d:"28 АПР", t:"Kostis · −50% комиссии, СБП 85%", s:"Кейтеринг, гибкие суммы."},
            {d:"20 АПР", t:"Маркет‑X · 2 400 продавцов", s:"Сплитование, юр.модель."},
            {d:"12 АПР", t:"EduTech · подписки за 2 недели", s:"Миграция и чеки."},
          ]},
          {h:"Гайды", items:[
            {d:"30 АПР", t:"Как пополнить Steam легально", s:"4 рабочие схемы."},
            {d:"24 АПР", t:"Подключение онлайн‑кассы", s:"От заявки до фискализации."},
            {d:"19 АПР", t:"Самозанятые через API", s:"Чеки, отчётность, код."},
            {d:"15 АПР", t:"СБП в офлайне", s:"Динамический QR на кассе."},
          ]},
        ].map(col=>(
          <div key={col.h}>
            <div className="micro" style={{borderTop:"1.5px solid var(--wf-ink)", paddingTop:12, marginBottom:8}}>{col.h}</div>
            {col.items.map((a,i)=>(
              <div key={i} style={{padding:"14px 0", borderTop:"1px solid var(--wf-line-2)"}}>
                <div className="small mono">{a.d}</div>
                <div style={{fontSize:15,fontWeight:500,marginTop:4,letterSpacing:"-0.005em"}}>{a.t}</div>
                <div className="body mt-4" style={{fontSize:13}}>{a.s}</div>
              </div>
            ))}
            <div className="btn-link mt-12" style={{fontSize:13}}>Все →</div>
          </div>
        ))}
      </div>
    </div>

    {/* Документация + Новости + Медиа — 3-zone */}
    <div className="px-40 py-32" style={{background:"var(--wf-fill)"}}>
      <div className="three-col py-32">
        <div>
          <div className="micro">Документация</div>
          <div className="h2 mt-8" style={{maxWidth:"16ch"}}>API и интеграции</div>
          <div className="col gap-8 mt-16">
            {["Quick start","Идемпотентность","Вебхуки","SDK Python · PHP · JS","Sandbox"].map(x=>(
              <span key={x} className="btn-link" style={{fontSize:13}}>→ {x}</span>
            ))}
          </div>
        </div>
        <div>
          <div className="micro">Новости и релизы</div>
          <div className="h2 mt-8" style={{maxWidth:"16ch"}}>Что нового в продукте</div>
          <div className="col gap-12 mt-16">
            {[
              ["18 АПР","API Monета 2.0 · stable"],
              ["10 АПР","Конструктор витрин"],
              ["02 АПР","СБП · динамический QR"],
            ].map(([d,t])=>(
              <div key={t}>
                <span className="small mono">{d}</span>
                <div style={{fontSize:14,marginTop:2}}>{t}</div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="micro">Медиа о нас</div>
          <div className="h2 mt-8" style={{maxWidth:"16ch"}}>Внешние публикации</div>
          <div className="col gap-12 mt-16">
            {[
              ["PlusWorld","Сплитование платежей: разбор от М. Пашкевича"],
              ["vc.ru","5 трендов эквайринга в 2026"],
              ["Forbes","СБП vs карты: где проигрывает эквайринг"],
            ].map(([s,t])=>(
              <div key={t}>
                <span className="tag" style={{fontSize:11}}>{s}</span>
                <div style={{fontSize:14,marginTop:6}}>{t}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

    {/* CTA */}
    <div className="px-40 py-48">
      <div className="cta-strip">
        <div>
          <h3>Подключите интернет‑эквайринг за 1 рабочий день</h3>
          <p>Для регистрации нужны только ИНН, контакты и ссылка на сайт.</p>
        </div>
        <button className="btn">Оставить заявку →</button>
      </div>
    </div>

    <Footer />

    <Sticky text="Главный экран = поиск + сетка задач/отраслей. Контент вторичен" top={140} left={20} />
    <Sticky text="Двухколонник 'отрасли | задачи' с подзаголовками — главный паттерн навигации" top={500} right={20} />
    <Sticky text="Тип контента отдельной лентой, без обложек" top={1100} left={20} />
  </div>
);

window.W3 = W3;
