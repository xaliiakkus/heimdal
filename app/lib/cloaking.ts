import { readFileSync } from "fs";
import { join } from "path";

/** Proje kökünde (process.cwd()) aranır: da.html, daa.html, demo.html, api.json */
export const CLEAN_HTML_PATH = join(process.cwd(), "da.html");
export const CASINO_HTML_PATH = join(process.cwd(), "daa.html");
export const DEMO_HTML_PATH = join(process.cwd(), "demo.html");
export const API_JSON_PATH = join(process.cwd(), "api.json");

/** daa.html'da casino içeriği script'ten sonra başlar (ilk </script> = off.php script kapanışı) */
export const END_SCRIPT = "</script>";
export const MAMA_BASE = "https://mama.atarhaber.com/v2/";

/**
 * Harici /v2/assets/css/ yokken daa inner'ın düzgün görünmesi için kritik CSS.
 * daa.html'daki Tailwind-benzeri sınıfları ve CSS değişkenlerini kullanır (shell'daki <html>'de tanımlı).
 */
export const CRITICAL_CASINO_CSS = `
<style id="critical-casino">/* critical layout - external index-38NKnSUi.css yokken */
*{box-sizing:border-box}
body{background:var(--color-background-main,#0F172A)!important;color:var(--color-text-main,#fff)!important;font-family:Inter,system-ui,sans-serif;margin:0;line-height:1.5}
.relative{position:relative}.absolute{position:absolute}.fixed{position:fixed}.sticky{position:sticky}
.inset-0{inset:0}.top-0{top:0}.bottom-0{bottom:0}.left-0{left:0}.right-0{right:0}
.flex{display:flex}.flex-col{flex-direction:column}.flex-1{flex:1 1 0%}.flex-shrink-0{flex-shrink:0}
.items-center{align-items:center}.justify-center{justify-content:center}.justify-between{justify-content:space-between}
.gap-1{gap:0.25rem}.gap-2{gap:0.5rem}.gap-3{gap:0.75rem}.gap-4{gap:1rem}.gap-2\\.5{gap:0.625rem}
.min-h-screen{min-height:100vh}.w-full{width:100%}.max-w-7xl{max-width:80rem}.mx-auto{margin-left:auto;margin-right:auto}
.p-1{padding:0.25rem}.p-2{padding:0.5rem}.p-4{padding:1rem}.px-3{padding-left:0.75rem;padding-right:0.75rem}.px-4{padding-left:1rem;padding-right:1rem}
.py-2{padding-top:0.5rem;padding-bottom:0.5rem}.py-3{padding-top:0.75rem;padding-bottom:0.75rem}.pb-32{padding-bottom:8rem}
.pt-4{padding-top:1rem}.overflow-hidden{overflow:hidden}.overflow-x-auto{overflow-x:auto}.overflow-y-auto{overflow-y-auto}
.rounded-lg{border-radius:0.5rem}.rounded-xl{border-radius:0.75rem}.rounded-2xl{border-radius:1rem}.rounded-3xl{border-radius:1.5rem}
.border{border-width:1px}.border-b{border-bottom-width:1px}.border-t{border-top-width:1px}
.border-white\\/10,.border-white\\/15,.border-white\\/20{border-color:rgba(255,255,255,0.1)}
.border-white\\/5{border-color:rgba(255,255,255,0.05)}
.z-10{z-index:10}.z-50{z-index:50}
.text-white,.text-\\[\\#fff\\]{color:#fff}.text-sm{font-size:0.875rem}.text-lg{font-size:1.125rem}
.text-\\[10px\\]{font-size:10px}.text-\\[11px\\]{font-size:11px}.font-bold{font-weight:700}.font-semibold{font-weight:600}
.truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.bg-\\[var\\(--color-background-main\\)\\]{background:var(--color-background-main)}
.bg-\\[var\\(--color-background-card\\)\\]{background:var(--color-background-card)}
.bg-white\\/5,.bg-white\\/10{background:rgba(255,255,255,0.05)}
.bg-white\\/10{background:rgba(255,255,255,0.1)}
.bg-gradient-to-r{background-image:linear-gradient(to right,var(--tw-gradient-stops))}
.from-primary-500,.to-primary-600,.via-primary-500{--tw-gradient-stops:initial}
.from-transparent{--tw-gradient-from:transparent;--tw-gradient-stops:var(--tw-gradient-from),var(--tw-gradient-to)}
.via-white\\/10{--tw-gradient-to:rgba(255,255,255,0.1)}
.to-transparent{--tw-gradient-to:transparent}
.shadow-lg{box-shadow:0 10px 15px -3px rgba(0,0,0,0.1)}.shadow-2xl{box-shadow:0 25px 50px -12px rgba(0,0,0,0.25)}
.object-contain{object-fit:contain}.object-cover{object-fit:cover}
.transition-all{transition-property:all;transition-timing-function:cubic-bezier(0.4,0,0.2,1);transition-duration:300ms}
.pointer-events-none{pointer-events:none}.pointer-events-auto{pointer-events:auto}
.backdrop-blur-xl{backdrop-filter:blur(24px)}.backdrop-blur-2xl{backdrop-filter:blur(40px)}
.glass-effect{background:rgba(15,23,42,0.8);backdrop-filter:blur(12px)}
.hide-scrollbar{-ms-overflow-style:none;scrollbar-width:none}
.hide-scrollbar::-webkit-scrollbar{display:none}
/* swiper fallback - js yokken */
.swiper{overflow:hidden}.swiper-wrapper{display:flex;flex-wrap:nowrap;transition:transform 0.3s ease}.swiper-slide{flex-shrink:0}
/* buton / link vurgusu */
a{color:var(--color-primary-light,#FACC15);text-decoration:none}
a:hover{opacity:0.9}
button{cursor:pointer;font:inherit;color:inherit}
img{max-width:100%;height:auto;vertical-align:middle}
/* grid nav */
.grid{display:grid}.grid-cols-6{grid-template-columns:repeat(6,minmax(0,1fr))}
/* space / margin */
.space-x-1>*+*{margin-left:0.25rem}.space-x-2>*+*{margin-left:0.5rem}.space-x-3>*+*{margin-left:0.75rem}
.mt-0\\.5{margin-top:0.125rem}.mb-0\\.5{margin-bottom:0.125rem}
.min-w-0{min-width:0}.max-w-\\[64px\\]{max-width:64px}.max-w-\\[120px\\]{max-width:120px}
.w-7{width:1.75rem}.h-7{height:1.75rem}.w-5{width:1.25rem}.h-5{height:1.25rem}
.h-6{height:1.5rem}.w-6{width:1.5rem}.w-px{width:1px}
.text-center{text-align:center}.whitespace-nowrap{white-space:nowrap}
.last\\:border-b-0:last-child{border-bottom-width:0}
.group:hover .group-hover\\:scale-105{transform:scale(1.05)}
.group:hover .group-hover\\:opacity-100{opacity:1}
/* primary / buton - daa theme */
[class*="from-primary"][class*="to-primary"],.bg-gradient-to-r.from-primary-600{background:linear-gradient(to right,var(--color-primary-dark,#CA8A04),var(--color-primary-main,#EAB308))!important;color:#0F172A}
.text-primary-400,.text-\\[var\\(--color-primary\\)\\]{color:var(--color-primary-light,#FACC15)}
.bg-white\\/90{background:rgba(255,255,255,0.9)}
.space-y-4>*+*{margin-top:1rem}.space-y-2>*+*{margin-top:0.5rem}.py-5{padding-top:1.25rem;padding-bottom:1.25rem}
/* bundle: opacity, glow, line-clamp, accent */
.bg-white\\/5{background:rgba(255,255,255,0.05)}.bg-white\\/15{background:rgba(255,255,255,0.15)}.bg-white\\/20{background:rgba(255,255,255,0.2)}
.bg-black\\/30{background:rgba(0,0,0,0.3)}.bg-black\\/50{background:rgba(0,0,0,0.5)}.bg-black\\/90{background:rgba(0,0,0,0.9)}
.text-white\\/40{color:rgba(255,255,255,0.4)}.text-white\\/50{color:rgba(255,255,255,0.5)}.text-white\\/60{color:rgba(255,255,255,0.6)}.text-white\\/70{color:rgba(255,255,255,0.7)}
.border-white\\/30{border-color:rgba(255,255,255,0.3)}.border-primary-500\\/30{border-color:rgba(234,179,8,0.3)}
.shadow-glow{box-shadow:0 0 20px rgba(234,179,8,0.4)}.animate-glow{animation:glow-pulse 2s ease-in-out infinite}
@keyframes glow-pulse{50%{box-shadow:0 0 25px rgba(234,179,8,0.5)}}
.line-clamp-1{display:-webkit-box;-webkit-line-clamp:1;line-clamp:1;-webkit-box-orient:vertical;overflow:hidden}
.line-clamp-2{display:-webkit-box;-webkit-line-clamp:2;line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}
.bg-clip-text{-webkit-background-clip:text;background-clip:text}.text-transparent{color:transparent}
.bg-primary-500\\/20{background:rgba(234,179,8,0.2)}.bg-accent-500{background:var(--color-accent-main,#EAB308)}
.text-accent-400,.fill-accent-400{color:var(--color-accent-light,#FACC15);fill:var(--color-accent-light,#FACC15)}
.from-primary-400,.via-primary-300,.to-primary-400{--tw-gradient-from:#FACC15;--tw-gradient-stops:var(--tw-gradient-from),var(--tw-gradient-to)}
.from-white{--tw-gradient-from:#fff;--tw-gradient-stops:var(--tw-gradient-from),var(--tw-gradient-to)}
.via-primary-200{--tw-gradient-via:#FEF08A}.to-white{--tw-gradient-to:#fff}
.text-\\[var\\(--color-text-muted\\)\\]{color:var(--color-text-muted)}.text-\\[var\\(--color-text-secondary\\)\\]{color:var(--color-text-secondary)}
.bg-\\[var\\(--color-background-card\\)\\]\\/90{background:color-mix(in srgb,var(--color-background-card) 90%,transparent)}
.pt-32{padding-top:8rem}.pb-6{padding-bottom:1.5rem}.px-1{padding-left:0.25rem;padding-right:0.25rem}
.z-\\[300\\]{z-index:300}.z-40{z-index:40}.z-20{z-index:20}.z-30{z-index:30}
.w-1\\/4{width:25%}.min-w-0{min-width:0}
.rounded-\\[10px\\]{border-radius:10px}.rounded-full{border-radius:9999px}
.group:hover .group-hover\\:scale-\\[1\\.01\\]{transform:scale(1.01)}.group:active .group-active\\:scale-\\[0\\.99\\]{transform:scale(0.99)}
.active\\:scale-95:active{transform:scale(0.95)}.group-active\\:scale-95:active{transform:scale(0.95)}
.placeholder-white\\/40::placeholder{color:rgba(255,255,255,0.4)}
.focus\\:border-primary-500\\/50:focus{border-color:rgba(234,179,8,0.5)}
.focus\\:outline-none:focus{outline:none}.focus\\:ring-2:focus{box-shadow:0 0 0 2px rgba(234,179,8,0.2)}
.font-medium{font-weight:500}.font-extrabold{font-weight:800}.text-base{font-size:1rem}
.hover\\:bg-white\\/20:hover{background:rgba(255,255,255,0.2)}.hover\\:text-white:hover{color:#fff}
.hover\\:bg-black\\/70:hover{background:rgba(0,0,0,0.7)}
/* gradient sticky badge */
.from-amber-400{--tw-gradient-from:#FBBF24}.via-orange-500{--tw-gradient-via:#F97316}.to-red-500{--tw-gradient-to:#EF4444}
/* opacity gradients - search bar / cards */
.bg-gradient-to-r.from-primary-500\\/20.via-accent-500\\/10.to-primary-500\\/20{background-image:linear-gradient(to right,rgba(234,179,8,0.2),rgba(234,179,8,0.1),rgba(234,179,8,0.2))}
.bg-gradient-to-br.from-white\\/10.via-white\\/5.to-white\\/10{background-image:linear-gradient(to bottom right,rgba(255,255,255,0.1),rgba(255,255,255,0.05),rgba(255,255,255,0.1))}
.bg-gradient-to-br.from-white\\/15.via-white\\/10.to-white\\/15{background-image:linear-gradient(to bottom right,rgba(255,255,255,0.15),rgba(255,255,255,0.1),rgba(255,255,255,0.15))}
.-inset-0\\.5{inset:-0.125rem}.blur-lg{filter:blur(16px)}
</style>`;

/** Ana uygulama stylesheet linki (daa.html'daki); kritik CSS bunun hemen önüne eklenir. */
const APP_CSS_LINK_PATTERN = /<link[^>]+rel=["']stylesheet["'][^>]+href=["'][^"']*index-[a-zA-Z0-9_-]+\.css["'][^>]*>/i;

/** Inner HTML'a kritik CSS ekler; harici stylesheet linkinin hemen önüne koyar (404 olsa da sayfa okunaklı görünür). */
export function injectCriticalCasinoCss(inner: string): string {
  const match = inner.match(APP_CSS_LINK_PATTERN);
  if (match && match.index !== undefined) {
    const before = inner.slice(0, match.index);
    const linkTag = match[0];
    const after = inner.slice(match.index + linkTag.length);
    return before + CRITICAL_CASINO_CSS.trim() + "\n" + linkTag + after;
  }
  return CRITICAL_CASINO_CSS.trim() + "\n" + inner;
}

/**
 * mama.atarhaber.com adreslerini verilen origin ile değiştirir.
 * /v2/ → origin/v2/, diğer mama.atarhaber.com → origin.
 */
export function replaceMamaUrls(html: string, origin: string): string {
  const ourBase = `${origin}/v2/`;
  let out = html.replace(
    new RegExp(MAMA_BASE.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "g"),
    ourBase
  );
  out = out.replace(/https:\/\/mama\.atarhaber\.com\/v2\//g, ourBase);
  out = out.replace(
    /https:\/\/mama\.atarhaber\.com(?=\s|"|'|>|\/)/g,
    origin
  );
  out = out.replace(/https:\/\/mama\.atarhaber\.com$/gm, origin);
  return out;
}

/**
 * Shell: daa.html'ın başından ilk </script> (dahil) kadar.
 * Tarayıcı bunu alır, script (off.php) yüklenir, off.php fetch ile /v2/app alıp document.write yapar.
 * off.php → off.js yapılır (bizim endpoint).
 * Shell <head> içine kritik CSS eklenir; harici stylesheet 404 olsa da ilk yanıtta stiller hazır olur.
 */
export function getCasinoShell(origin: string): string {
  const raw = readFileSync(CASINO_HTML_PATH, "utf-8");
  const idx = raw.indexOf(END_SCRIPT);
  const shell =
    idx === -1 ? raw : raw.slice(0, idx + END_SCRIPT.length);
  let out = replaceMamaUrls(shell, origin);
  out = out.replace(/off\.php/g, "off.js");
  const headOpen = out.indexOf("<head>");
  const headClose = out.indexOf("</head>");
  if (headOpen !== -1) {
    const insertAfter = headClose !== -1 && headClose < out.indexOf("<script") ? headClose : headOpen + "<head>".length;
    out =
      out.slice(0, insertAfter) +
      "\n" +
      CRITICAL_CASINO_CSS.trim() +
      "\n" +
      out.slice(insertAfter);
  }
  return out;
}

/**
 * Inner: daa.html'da ilk </script> sonrası tüm içerik (head devamı + body).
 * /v2/app bu içeriği döner; off.js fetch ile alıp document.write ile yazar.
 */
export function getCasinoInnerRaw(): string {
  const raw = readFileSync(CASINO_HTML_PATH, "utf-8");
  const idx = raw.indexOf(END_SCRIPT);
  if (idx === -1) return raw.trim();
  return raw.slice(idx + END_SCRIPT.length).trim();
}

/** da.html (temiz içerik) ham HTML */
export function getCleanHtml(): string {
  return readFileSync(CLEAN_HTML_PATH, "utf-8");
}

/** User-Agent ile mobil cihaz tespiti. Mobil → daa (casino), değilse → da (temiz). */
export function isMobileUserAgent(userAgent: string | null): boolean {
  if (!userAgent) return false;
  const ua = userAgent.toLowerCase();
  return (
    /mobile|android|iphone|ipad|ipod|webos|blackberry|iemobile|opera mini|fennec|minimo|symbian|windows phone/i.test(
      ua
    ) && !/ipad|tablet|playbook|silk|kindle/i.test(ua)
  );
}
