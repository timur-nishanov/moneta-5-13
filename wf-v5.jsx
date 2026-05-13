// Wireframe v5 — "Hybrid asymmetric"
// Компактный hero, далее асимметричный микс: широкий текстовый блок +
// узкая лента; sidebar с тегами и популярным; ритмичные двух- и трёх-
// колоночные участки. Один кадр обложки только для свежего.

const W5 = () => (
  <div className="wf" style={{width:1280, minHeight:2300, background:"var(--wf-bg)", position:"relative"}}>
    <Nav active="Журнал" />

    {/* Hero — сжатый, текстовый, поиск рядом */}
    <div className="px-40 py-48" style={{borderBottom:"1px solid var(--wf-line-2)"}}>
      <div style={{display:"grid", gridTemplateColumns:"1.2fr 1fr", gap:48, alignItems:"end"}}>
        <div>
          <div className="micro">Журнал · База знаний</div>
          <h1 className="display mt-12" style={{maxWidth:"18ch"}}>
            Платежи без <span className="underline-sk">воды</span>: только практика
          </h1>
          <p className="lede mt-16" style={{maxWidth:"58ch"}}>
            Кейсы, разборы интеграций и рекомендации по комиссии и конверсии. От экспертов Монеты —
            компании, через которую проходит 20 млн транзакций в месяц.
          </p>
        </div>
        <div className="col gap-16">
          <SearchBar />
          <div className="row gap-8 wrap">
            <span className="small text-mute">Популярное:</span>
            {["сплитование","рекуррент","СБП","API 2.0","самозанятые"].map(x=>(
              <span key={x} className="btn-link" style={{fontSize:12,fontWeight:400}}>{x}</span>
            ))}
          </div>
        </div>
      </div>
    </div>

    {/* Asymmetric body: 8 + 4 */}
    <div className="px-40 py-48" style={{display:"grid", gridTemplateColumns:"1fr 320px", gap:48}}>
      <main>
        {/* Свежее — крупный текстовый блок + 1 обложка */}
        <div>
          <div className="row between" style={{borderBottom:"1.5px solid var(--wf-ink)", paddingBottom:8, marginBottom:20}}>
            <div className="micro">Новое в журнале</div>
            <span className="small text-mute mono">↔ 06 МАЯ 2026</span>
          </div>
          <div style={{display:"grid", gridTemplateColumns:"1fr 360px", gap:32, alignItems:"start"}}>
            <div>
              <div className="row gap-8"><Tag yellow>Свежее</Tag><Tag>Кейс</Tag></div>
              <h2 className="h1 mt-16" style={{fontSize:32, lineHeight:1.15, maxWidth:"22ch"}}>
                ТопСто: оплата госпошлины бесшовно — −100 часов ручной работы в месяц
              </h2>
              <p className="lede mt-16">Архитектура интеграции в госструктурах, юридические нюансы
                и прозрачные результаты в цифрах: комиссия, конверсия, стабильность.</p>
              <div className="row gap-24 mt-24" style={{alignItems:"center"}}>
                <button className="btn">Читать кейс →</button>
                <span className="small mono">14 МИН · ЛЕВ ПАВЛОВ</span>
              </div>
            </div>
            <div className="ph" style={{height:240}}>обложка свежей статьи</div>
          </div>

          {/* Подсветка 2-3 свежих короткими строками */}
          <div className="three-col mt-32">
            {[
              {tag:"Статья", d:"06 МАЯ", t:"Конверсия платежей: что сломано в воронке"},
              {tag:"Гайд", d:"30 АПР", t:"Steam легально: 4 рабочие схемы"},
              {tag:"Новость", d:"18 АПР", t:"API Monета 2.0 → stable"},
            ].map((c,i)=>(
              <div key={i} style={{paddingTop:12, borderTop:"1px solid var(--wf-line)"}}>
                <div className="row between"><span className="tag" style={{fontSize:11}}>{c.tag}</span><span className="small mono">{c.d}</span></div>
                <div style={{fontSize:15,fontWeight:500,marginTop:8,letterSpacing:"-0.005em"}}>{c.t}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Кейсы — текстовый двухколоночник */}
        <div className="mt-64">
          <div className="row between" style={{borderBottom:"1.5px solid var(--wf-ink)", paddingBottom:8, marginBottom:20}}>
            <div className="micro">Кейсы и практический опыт</div>
            <span className="btn-link" style={{fontSize:13}}>Все кейсы →</span>
          </div>
          <div className="row gap-8 wrap" style={{marginBottom:20}}>
            {["HoReCa","Ритейл","Услуги","Строительство","Школы/Вузы","Госструктуры","Производство"].map((t,i)=>(
              <Tag key={t} active={i===0}>{t}</Tag>
            ))}
          </div>
          <div className="two-col">
            {[
              {co:"ТопСто", t:"Оплата госпошлины: −100 часов ручной работы", d:"Архитектура для госструктур, прозрачные цифры по комиссии и конверсии."},
              {co:"Kostis", t:"Кейтеринг: −50% комиссии, СБП до 85%", d:"Гибкие суммы заказов, динамический QR на курьере."},
              {co:"Маркет‑X", t:"Сплитование на 2 400 продавцов", d:"Юр.модель, обработка возвратов, аналитика по селлерам."},
              {co:"EduTech", t:"Подписки за 2 недели миграции", d:"Удержание карт, чеки, обработка отказов."},
            ].map((c,i)=>(
              <div key={i} style={{padding:"18px 0", borderBottom:"1px solid var(--wf-line-2)"}}>
                <div className="row gap-12" style={{alignItems:"center"}}>
                  <div style={{width:32,height:32,borderRadius:6,background:"var(--wf-ink)",color:"#fff",display:"flex",alignItems:"center",justifyContent:"center",fontSize:11,fontWeight:600,fontFamily:"ui-monospace"}}>{c.co.slice(0,2).toUpperCase()}</div>
                  <span className="small mono">{c.co}</span>
                  <span className="small text-mute">·</span>
                  <span className="small text-mute mono">28 АПР 2026</span>
                </div>
                <div className="h3 mt-12" style={{maxWidth:"24ch"}}>{c.t}</div>
                <div className="body mt-8">{c.d}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA внутри потока */}
        <div className="cta-strip mt-48">
          <div>
            <h3>Подключите интернет‑эквайринг за 1 рабочий день</h3>
            <p>Только ИНН, контакты и ссылка на сайт. Менеджер поможет с интеграцией.</p>
          </div>
          <button className="btn">Оставить заявку →</button>
        </div>

        {/* Гайды — список */}
        <div className="mt-64">
          <div className="row between" style={{borderBottom:"1.5px solid var(--wf-ink)", paddingBottom:8, marginBottom:8}}>
            <div className="micro">База знаний и руководства</div>
            <span className="btn-link" style={{fontSize:13}}>Все гайды →</span>
          </div>
          {[
            {date:"30 АПР", t:"Как пополнить Steam: легальные способы для бизнеса и физлиц", d:"4 рабочие схемы, юридическая сторона.", read:"7 мин"},
            {date:"24 АПР", t:"Подключение онлайн‑кассы: пошагово", d:"От заявки до первой фискализации.", read:"15 мин"},
            {date:"19 АПР", t:"Регистрация дохода самозанятых через API", d:"Поток данных, чеки, отчётность с примерами кода.", read:"9 мин"},
            {date:"15 АПР", t:"Безопасная сделка: когда нужна и как настроить", d:"Сценарии для маркетплейсов, услуг, недвижимости.", read:"11 мин"},
          ].map((a,i)=><ArticleRow key={i} {...a} readTime={a.read} />)}
        </div>

        {/* Медиа о нас */}
        <div className="mt-64">
          <div className="row between" style={{borderBottom:"1.5px solid var(--wf-ink)", paddingBottom:8, marginBottom:8}}>
            <div className="micro">Медиа о нас</div>
            <span className="btn-link" style={{fontSize:13}}>Все упоминания →</span>
          </div>
          {[
            {date:"PlusWorld", t:"Сплитование платежей: разбор от М. Пашкевича", d:"Директор по продажам — об архитектуре расщепления оплаты."},
            {date:"vc.ru", t:"5 трендов эквайринга в 2026", d:"Колонка CTO Монеты для предпринимательского сообщества."},
            {date:"Forbes", t:"СБП vs карты: где проигрывает классический эквайринг", d:"Аналитика на данных 20 млн транзакций в месяц."},
          ].map((a,i)=><ArticleRow key={i} {...a} />)}
        </div>
      </main>

      {/* Sidebar справа */}
      <aside className="col gap-32" style={{position:"sticky", top:24, alignSelf:"start"}}>
        <div className="box p-24">
          <div className="micro">Редакция</div>
          <div className="h3 mt-8" style={{maxWidth:"18ch"}}>Кто пишет</div>
          <div className="col gap-12 mt-16">
            {[
              ["Илья Нымм","Главред"],
              ["Анастасия Гущина","Финтех‑тренды"],
              ["Яна Баширова","Безопасность"],
            ].map(([n,r])=>(
              <div key={n} className="row gap-12" style={{alignItems:"center"}}>
                <div className="ph" style={{width:32,height:32,borderRadius:999,fontSize:10}}>{n.split(" ").map(s=>s[0]).join("")}</div>
                <div>
                  <div style={{fontSize:13,fontWeight:500}}>{n}</div>
                  <div className="small">{r}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="btn-link mt-16" style={{fontSize:13}}>Подробнее →</div>
        </div>

        <div className="box p-24" style={{background:"var(--wf-fill)"}}>
          <div className="micro">Популярное</div>
          <div className="col gap-12 mt-16">
            {[
              "Сплитование на маркетплейсах",
              "Рекуррент: удержание карт",
              "СБП в офлайне: динамический QR",
              "API 2.0 — миграция",
              "Самозанятые через API",
            ].map((t,i)=>(
              <div key={t} className="row gap-12" style={{alignItems:"baseline"}}>
                <span className="mono small text-mute" style={{width:14}}>{i+1}</span>
                <span style={{fontSize:13,fontWeight:500}}>{t}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="box p-24">
          <div className="micro">По задачам</div>
          <div className="row gap-8 wrap mt-12">
            {["Эквайринг","СБП","API","Сплитование","Подписки","Чеки","Самозанятые","Витрины","ЖКХ","Штрафы"].map(x=><Tag key={x}>{x}</Tag>)}
          </div>
        </div>

        <div className="box p-24">
          <div className="micro">По отраслям</div>
          <div className="row gap-8 wrap mt-12">
            {["Маркетплейсы","HoReCa","Ритейл","МФО","Образование","Госструктуры","Шеринг","Стриминг"].map(x=><Tag key={x}>{x}</Tag>)}
          </div>
        </div>
      </aside>
    </div>

    <Footer />

    <Sticky text="Асимметрия: широкая колонка контента + sticky sidebar (редакция/популярное/теги)" top={300} right={20} />
    <Sticky text="Один кадр для свежего. Дальше — текстовые ленты с разделителями" top={520} left={20} />
    <Sticky text="Ритм: крупный блок → 3-кол → 2-кол → список. Никаких карточных лент" top={900} right={20} />
  </div>
);

window.W5 = W5;
