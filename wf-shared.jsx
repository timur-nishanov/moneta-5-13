// Shared wireframe primitives — used across all 5 variants.
// Exposes to window so other Babel files can use them.

const Logo = () =>
<span className="logo"><span className="dot"></span>монета</span>;


const Nav = ({ active = "Журнал" }) =>
<div className="nav">
    <Logo />
    <div className="nav-links">
      {["Решения", "Возможности", "Тарифы", "Разработчикам", "Ресурсы", "О компании"].map((l) =>
    <span key={l} style={l === active ? { color: "var(--wf-ink)", fontWeight: 500 } : {}}>{l}</span>
    )}
    </div>
    <div className="nav-cta">
      <button className="btn btn-ghost" style={{ padding: "7px 10px", fontSize: 18, lineHeight: 1, border: "1px solid var(--wf-line)" }} title="Поиск (⌘K)">⌕</button>
      <span className="small">Обсудить проект</span>
      <button className="btn btn-ghost" style={{ padding: "8px 14px", fontSize: 13 }}>Войти</button>
      <button className="btn btn-yellow" style={{ padding: "8px 14px", fontSize: 13 }}>Зарегистрироваться</button>
    </div>
  </div>;


const SearchBar = ({ placeholder = "Искать статьи, кейсы, гайды…", showKey = true }) =>
<div className="search">
    <span style={{ fontSize: 16 }}>⌕</span>
    <span style={{ flex: 1 }}>{placeholder}</span>
    {showKey && <span className="key">⌘ K</span>}
  </div>;


const Tag = ({ children, active, yellow, count }) =>
<span className={`tag ${active ? "is-active" : ""} ${yellow ? "is-yellow" : ""}`} style={{ backgroundColor: "rgba(255, 255, 255, 0)", color: "rgb(0, 0, 0)" }}>
    {children}
    {count != null && <span className="tag-count">{count}</span>}
  </span>;


const ArticleRow = ({ date, title, desc, tags = [], readTime, showDesc = true }) =>
<div className="row-article">
    <div className="date mono">{date}</div>
    <div>
      <div className="title">{title}</div>
      {showDesc && desc && <div className="desc">{desc}</div>}
      {tags.length > 0 &&
    <div className="meta">
          {tags.map((t) => <Tag key={t}>{t}</Tag>)}
        </div>
    }
    </div>
    {readTime && <div className="read mono">{readTime}</div>}
  </div>;


const SectionHead = ({ eyebrow, title, link, sub }) =>
<div className="section-head">
    <div>
      {eyebrow && <div className="eyebrow">{eyebrow}</div>}
      <h2 className="h1" style={{ maxWidth: "22ch" }}>{title}</h2>
      {sub && <div className="lede mt-12" style={{ maxWidth: "60ch" }}>{sub}</div>}
    </div>
    {link && <span className="btn-link">{link} <span className="arrow">→</span></span>}
  </div>;


const Footer = () =>
<div className="footer">
    <div className="grid">
      <div className="col">
        <Logo />
        <div className="small mt-16" style={{ color: "#888", maxWidth: "32ch", lineHeight: 1.5 }}>
          Финтех-журнал «Монета» — экспертиза в платёжных решениях для бизнеса
        </div>
        <div className="row gap-12 mt-24">
          {["TG", "VK", "YT", "DZN"].map((s) =>
        <span key={s} style={{ width: 32, height: 32, border: "1px solid #2a2a2a", borderRadius: 6, display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 11, color: "#888" }}>{s}</span>
        )}
        </div>
      </div>
      {[
    ["Журнал", ["Все статьи", "Кейсы", "Гайды", "Документация", "Новости", "Медиа о нас"]],
    ["По отраслям", ["Маркетплейсы", "HoReCa", "Ритейл", "Образование", "Доставки", "МФО"]],
    ["По задачам", ["Эквайринг", "СБП", "API", "Сплитование", "Подписки", "Все"]],
    ["О компании", ["Редакция", "Карьера", "Контакты", "Документы"]]].
    map(([h, items]) =>
    <div key={h} className="col">
          <h4>{h}</h4>
          <ul>{items.map((i) => <li key={i}>{i}</li>)}</ul>
        </div>
    )}
    </div>
    <div className="bottom">
      <span>© 2006–2026 НКО «Монета»</span>
      <span>Лицензия ЦБ РФ № 3508 · 13 лет работаем по лицензии</span>
    </div>
  </div>;


const Sticky = ({ text, top, left, right, bottom }) =>
<div className="note" style={{ top, left, right, bottom }}>※ {text}</div>;


Object.assign(window, { Logo, Nav, SearchBar, Tag, ArticleRow, SectionHead, Footer, Sticky });