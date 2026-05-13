// Wireframe v2 — "Editorial / Журнал"
// Ритмичная асимметричная вёрстка как в финансовом журнале:
// крупный hero-материал, дальше двухколоночник, лента с разнотипным
// контентом (статья / кейс / гайд / новость) на одной странице.

const W2 = () => (
  <div className="wf" style={{width:1280, minHeight:2200, background:"var(--wf-bg)", position:"relative"}}>
    <Nav active="Журнал" />

    {/* Editorial masthead */}
    <div className="px-40" style={{paddingTop:48, paddingBottom:32, borderBottom:"1.5px solid var(--wf-ink)"}}>
      <div className="between" style={{alignItems:"flex-end"}}>
        <div>
          <div className="micro">Том 02 · Выпуск 18 · Май 2026</div>
          <h1 className="display mt-12" style={{fontSize:64, lineHeight:0.95, maxWidth:"14ch"}}>
            Финтех‑журнал<br/><span style={{fontStyle:"italic", fontWeight:400}}>Монета</span>
          </h1>
        </div>
        <div className="col" style={{maxWidth:380, gap:16}}>
          <p className="lede">Экспертиза в платёжных решениях для бизнеса.
            Кейсы компаний, разборы интеграций, рекомендации по комиссии и конверсии.</p>
          <SearchBar />
        </div>
      </div>
    </div>

    {/* Hero spread — одна крупная статья, как обложка журнала */}
    <div className="px-40 py-48" style={{display:"grid", gridTemplateColumns:"1.3fr 1fr", gap:48, borderBottom:"1px solid var(--wf-line)"}}>
      <div>
        <div className="micro" style={{color:"var(--wf-red)"}}>● ГЛАВНОЕ В ВЫПУСКЕ</div>
        <h2 className="display mt-16" style={{fontSize:48, lineHeight:1.05, maxWidth:"16ch"}}>
          Кейс «ТопСто»: оплата госпошлины <span className="underline-sk">бесшовно</span> и −100 часов ручной работы в месяц
        </h2>
        <p className="lede mt-24" style={{maxWidth:"58ch"}}>
          Госструктуры — самый сложный сегмент для платежей. Разобрали архитектуру интеграции,
          юридические нюансы и показали прозрачные результаты в цифрах.
        </p>
        <div className="row gap-8 mt-24"><Tag>Кейс</Tag><Tag>Госструктуры</Tag><Tag>Эквайринг</Tag></div>
        <div className="row gap-24 mt-32" style={{alignItems:"center"}}>
          <button className="btn">Читать материал →</button>
          <div className="small mono">06 МАЯ 2026 · 14 МИН ЧТЕНИЯ · ЛЕВ ПАВЛОВ</div>
        </div>
      </div>
      <div className="ph" style={{minHeight:380}}>обложка только для главной статьи выпуска</div>
    </div>

    {/* Mixed feed — текстовый rhythm, разные типы контента */}
    <div className="px-40 py-48">
      <div className="section-head">
        <div>
          <div className="eyebrow">В этом выпуске</div>
          <h2 className="h1">Свежие материалы<br/><span className="text-mute" style={{fontWeight:400}}>статьи · кейсы · гайды · новости</span></h2>
        </div>
        <div className="row gap-8">
          {["Все","Статьи","Кейсы","Гайды","Новости","Медиа"].map((t,i)=><Tag key={t} active={i===0}>{t}</Tag>)}
        </div>
      </div>

      {/* Rhythmic 12-col grid */}
      <div style={{display:"grid", gridTemplateColumns:"repeat(12, 1fr)", gap:24, marginTop:32}}>
        {/* Большой текстовый блок */}
        <div className="box p-32" style={{gridColumn:"span 7"}}>
          <div className="row between">
            <span className="tag is-yellow">Статья</span>
            <span className="small mono">02 МАЯ · 12 МИН</span>
          </div>
          <h3 className="h1 mt-16" style={{maxWidth:"22ch"}}>Сплитование платежей: как разделить оплату между селлерами на маркетплейсе</h3>
          <p className="body mt-16" style={{maxWidth:"68ch"}}>Архитектура мультивендорного маркетплейса, юр. модель,
            обработка возвратов и реальные цифры по обороту 2.4 млрд ₽ в месяц. Полный разбор.</p>
          <div className="row gap-8 mt-24"><Tag>Маркетплейсы</Tag><Tag>API</Tag><Tag>Сплитование</Tag></div>
        </div>

        {/* Список 3 коротких справа */}
        <div className="col gap-16" style={{gridColumn:"span 5"}}>
          {[
            {tag:"Новость", t:"API Monета 2.0 — что изменилось", d:"Идемпотентность, новые методы, миграция."},
            {tag:"Гайд", t:"СБП в офлайне: интеграция за день", d:"Динамический QR на стороне кассы."},
            {tag:"Медиа", t:"PlusWorld: интервью с Максимом Пашкевичем", d:"О расщеплении платежей в e‑com."},
          ].map((c,i)=>(
            <div key={i} className="box p-24" style={{flex:1}}>
              <div className="row between">
                <span className="tag">{c.tag}</span>
                <span className="small mono">{["28 АПР","24 АПР","19 АПР"][i]}</span>
              </div>
              <div className="h3 mt-12">{c.t}</div>
              <div className="body mt-8">{c.d}</div>
            </div>
          ))}
        </div>

        {/* Двухколоночный текстовый список — без обложек */}
        <div style={{gridColumn:"span 12", marginTop:24}}>
          <div className="row between" style={{borderBottom:"1px solid var(--wf-line)", paddingBottom:12, marginBottom:8}}>
            <div className="micro">Дальше в выпуске</div>
            <div className="small text-mute mono">22 материала</div>
          </div>
          <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", columnGap:48}}>
            {[
              {date:"22 АПР", tag:"Статья", t:"Подписочная модель: рекуррент без боли", d:"Удержание карт, обработка отказов, налоги."},
              {date:"19 АПР", tag:"Гайд", t:"Регистрация дохода самозанятых через API", d:"Поток данных, чеки, отчётность."},
              {date:"18 АПР", tag:"Кейс", t:"Kostis · −50% комиссии и СБП до 85%", d:"Кейтеринг с гибкими суммами заказов."},
              {date:"16 АПР", tag:"Новость", t:"Релиз: конструктор витрин для микробизнеса", d:"Платёжная страница за 5 минут без кода."},
              {date:"14 АПР", tag:"Статья", t:"Нерезиденты: как принимать платежи легально", d:"Валютный контроль, документы, схема."},
              {date:"11 АПР", tag:"Гайд", t:"Безопасная сделка: когда нужна и как настроить", d:"Сценарии для маркетплейсов и услуг."},
              {date:"08 АПР", tag:"Кейс", t:"EduTech · подписки за 2 недели", d:"Миграция, чеки, удержание при отказе."},
              {date:"05 АПР", tag:"Медиа", t:"vc.ru: 5 трендов эквайринга в 2026", d:"Колонка CTO Монеты."},
            ].map((a,i)=>(
              <div key={i} style={{padding:"18px 0", borderBottom:"1px solid var(--wf-line-2)", display:"grid", gridTemplateColumns:"68px 60px 1fr", gap:16, alignItems:"baseline"}}>
                <span className="small mono">{a.date}</span>
                <span className="tag" style={{fontSize:11,padding:"2px 8px"}}>{a.tag}</span>
                <div>
                  <div style={{fontSize:16,fontWeight:500,letterSpacing:"-0.01em"}}>{a.t}</div>
                  <div className="body mt-4" style={{fontSize:13}}>{a.d}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="center mt-24">
            <button className="btn btn-ghost">Показать ещё 14 материалов</button>
          </div>
        </div>
      </div>
    </div>

    {/* Industry/Task tags belt */}
    <div className="px-40 py-48" style={{background:"var(--wf-fill)"}}>
      <div className="section-head">
        <div>
          <div className="eyebrow">Навигация</div>
          <h2 className="h1">Материалы по отраслям и задачам</h2>
          <p className="lede mt-12" style={{maxWidth:"56ch"}}>От готовых интеграций для ресторанов и отелей до сценариев оптимизации платежей под конкретные бизнес‑модели.</p>
        </div>
      </div>
      <div className="two-col mt-32">
        <div>
          <div className="micro">Отрасли</div>
          <div className="row gap-8 wrap mt-12">
            {["Маркетплейсы","HoReCa","Ритейл","Образование","Доставки","МФО","Медицина","Шеринг","Стриминг","Онлайн‑игры","Госструктуры","Благотворительность","Отели","Рестораны","Билеты","Решения для авто","Интернет‑магазины","Нерезиденты"].map(x=>(
              <Tag key={x} count={[24,18,15,12,9,8,7,6,6,5,4,3,3,3,2,2,2,1][["Маркетплейсы","HoReCa","Ритейл","Образование","Доставки","МФО","Медицина","Шеринг","Стриминг","Онлайн‑игры","Госструктуры","Благотворительность","Отели","Рестораны","Билеты","Решения для авто","Интернет‑магазины","Нерезиденты"].indexOf(x)]}>{x}</Tag>
            ))}
          </div>
        </div>
        <div>
          <div className="micro">Сценарии и задачи</div>
          <div className="row gap-8 wrap mt-12">
            {["Интернет‑эквайринг","Мультиэквайринг","СБП","API","Сплитование","Подписки","Чеки","Безопасная сделка","Подключение кассы","Оплата ЖКХ","Оплата штрафов","Прием платежей по ссылке","Соцсети","Конструктор витрин","Прием от юр.лиц","Самозанятые","Прием в приложении","Расчётное обслуживание"].map(x=>(
              <Tag key={x}>{x}</Tag>
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
          <p>Для регистрации нужны только ИНН, контакты и ссылка на сайт. Персональный менеджер поможет с интеграцией.</p>
        </div>
        <button className="btn">Оставить заявку →</button>
      </div>
    </div>

    {/* Редакция — журнальная подача */}
    <div className="px-40 py-48" style={{borderTop:"1.5px solid var(--wf-ink)"}}>
      <div className="section-head">
        <div>
          <div className="eyebrow">Редакция</div>
          <h2 className="h1" style={{maxWidth:"22ch"}}>Кто пишет в журнал</h2>
        </div>
        <span className="btn-link">Подробнее о редакции →</span>
      </div>
      <p className="lede" style={{maxWidth:"68ch"}}>Материалы на основе практического опыта специалистов, которые работают с платежами на стыке разработки, аналитики и права.</p>
      <div className="three-col mt-32">
        {[
          {n:"Илья Нымм", r:"Главный редактор"},
          {n:"Анастасия Гущина", r:"Редактор · финтех‑тренды"},
          {n:"Яна Баширова", r:"Редактор · безопасность"},
        ].map(p=>(
          <div key={p.n} className="row gap-16" style={{alignItems:"flex-start"}}>
            <div className="ph" style={{width:80,height:80,borderRadius:8,flexShrink:0}}>фото</div>
            <div>
              <div className="h3">{p.n}</div>
              <div className="small">{p.r}</div>
              <div className="body mt-8">12 материалов · в журнале с 2023</div>
              <div className="btn-link mt-12" style={{fontSize:13}}>Профиль →</div>
            </div>
          </div>
        ))}
      </div>
    </div>

    <Footer />

    <Sticky text="Журнальная подача: масштаб 64px на масthead, том/выпуск/дата" top={120} left={20} />
    <Sticky text="Hero — текст + 1 крупная обложка. Дальше обложек НЕТ" top={420} right={20} />
    <Sticky text="Асимметричный 12-col grid: 7+5, потом 2-колоночный текстовый список" top={780} left={20} />
  </div>
);

window.W2 = W2;
