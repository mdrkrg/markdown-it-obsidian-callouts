const l = {
  abstract: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clipboard-list"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M12 11h4"/><path d="M12 16h4"/><path d="M8 11h.01"/><path d="M8 16h.01"/></svg>',
  bug: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bug"><path d="m8 2 1.88 1.88"/><path d="M14.12 3.88 16 2"/><path d="M9 7.13v-1a3.003 3.003 0 1 1 6 0v1"/><path d="M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6"/><path d="M12 20v-9"/><path d="M6.53 9C4.6 8.8 3 7.1 3 5"/><path d="M6 13H2"/><path d="M3 21c0-2.1 1.7-3.9 3.8-4"/><path d="M20.97 5c0 2.1-1.6 3.8-3.5 4"/><path d="M22 13h-4"/><path d="M17.2 17c2.1.1 3.8 1.9 3.8 4"/></svg>',
  danger: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-zap"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>',
  example: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-list"><line x1="8" x2="21" y1="6" y2="6"/><line x1="8" x2="21" y1="12" y2="12"/><line x1="8" x2="21" y1="18" y2="18"/><line x1="3" x2="3.01" y1="6" y2="6"/><line x1="3" x2="3.01" y1="12" y2="12"/><line x1="3" x2="3.01" y1="18" y2="18"/></svg>',
  failure: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>',
  info: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-info"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>',
  note: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pencil"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/></svg>',
  question: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-help-circle"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>',
  quote: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-quote"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/></svg>',
  success: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check"><path d="M20 6 9 17l-5-5"/></svg>',
  tip: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-flame"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>',
  todo: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-circle-2"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>',
  warning: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-alert-triangle"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>'
};
l.attention = l.warning;
l.caution = l.warning;
l.check = l.success;
l.cite = l.quote;
l.done = l.success;
l.error = l.danger;
l.fail = l.failure;
l.faq = l.question;
l.help = l.question;
l.hint = l.tip;
l.important = l.tip;
l.missing = l.failure;
l.summary = l.abstract;
l.tldr = l.abstract;
const u = /^\[!([^\]]+)\](\+|-|) *(.*)? */, v = /^ad-([^\s]+) */, h = /^(title|collapse|icon|color):(.*)/, f = {
  title: "data-callout-title",
  icon: "data-callout-icon",
  color: "data-callout-color"
};
function k(t, n, i, e) {
  const o = t[n];
  if (!o.info)
    return "";
  const c = o.info.replace(e.langPrefix || "", "").match(v);
  if (c) {
    o.type = "admonition_block", o.attrPush(["class", "callout"]), o.attrPush(["data-callout", c[1].toLowerCase()]);
    let a = o.content.split(`
`);
    for (; a.length > 0 && h.test(a[0]); ) {
      const r = a[0].match(h);
      if (r) {
        const s = f[r[1].trim().toLowerCase()];
        s && o.attrPush([s, r[2].trim()]), a = a.slice(1);
      } else
        break;
    }
    o.content = i.render(a.join(`
`), {});
  }
}
function x(t, n) {
  let i = "", e = 0, o = n, c = n;
  for (let r = n; r < t.length; r++) {
    const s = t[r];
    if (s.type === "blockquote_open" ? e++ : s.type === "blockquote_close" && (o = r, e--), e == 0)
      break;
    if (e > 1)
      continue;
    s.type === "inline" ? (c == n && s.content.match(u) && (c = r), i = i + s.content) : s.type === "paragraph_close" && (i += `
`);
  }
  const a = i.match(u);
  if (a && n != o) {
    const r = a[1].toLowerCase(), s = a[2], d = a[3];
    t[n].type = "callout_open", t[n].attrPush(["class", "callout"]), t[n].attrPush(["data-callout", r]), t[n].attrPush(["data-callout-fold", s]), d && t[n].attrPush(["data-callout-title", d]), t[o].type = "callout_close", t[o].attrPush(["data-callout", r]), t[o].attrPush(["data-callout-fold", s]), c != n && t[c] && t[c].children && (t[c].content = t[c].content.replace(u, "").trim());
  }
}
function w(t, n, i = {}) {
  const e = t.attrGet("data-callout"), o = t.attrGet("data-callout-fold");
  return e && o ? `
<details class="callout" data-callout="${e}" data-callout-fold="${o}"${o === "+" ? " open" : ""}>
<summary class="callout-title">
<div class="callout-title-icon">
${p(t, i)}
</div>
<div class="callout-title-inner">${g(t, n)}</div>
<div class="callout-fold"></div>
</summary>
<div class="callout-content">` : e ? `
<div class="callout" data-callout="${e}">
<div class="callout-title">
<div class="callout-title-icon">
${p(t, i)}
</div>
<div class="callout-title-inner">${g(t, n)}</div>
</div>
<div class="callout-content">` : "";
}
function m(t, n = {}) {
  const i = t.attrGet("data-callout"), e = t.attrGet("data-callout-fold");
  return i && e ? "</div></details>" : i ? "</div></div>" : "";
}
function p(t, n = {}) {
  var o;
  const i = t.attrGet("data-callout-icon");
  if (i)
    return i.trim();
  const e = t.attrGet("data-callout");
  return e ? ((o = n.icons) == null ? void 0 : o[e]) || l[e] || l.note : "";
}
function g(t, n) {
  const i = t.attrGet("data-callout-title");
  if (i)
    return n.renderInline(i.trim());
  const e = t.attrGet("data-callout");
  return e ? y(e) : "";
}
function y(t) {
  return t.split(" ").map((n) => n.charAt(0).toUpperCase() + n.slice(1).toLowerCase()).join(" ");
}
function C(t, n = {}) {
  t.core.ruler.after("block", "obsidian-callouts", (i) => {
    const e = i.tokens;
    for (let o = 0; o < e.length; o++) {
      const c = e[o];
      c.type === "blockquote_open" && x(e, o), c.type === "fence" && k(e, o, t, n);
    }
  }), t.renderer.rules.callout_open = function(i, e) {
    const o = i[e];
    return w(o, t, n);
  }, t.renderer.rules.admonition_block = function(i, e) {
    const o = i[e];
    return w(o, t, n) + `${o.content}
</div>
</div>`;
  }, t.renderer.rules.callout_close = function(i, e) {
    const o = i[e];
    return m(o, n);
  };
}
export {
  C as default
};
