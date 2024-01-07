import { createGlobalStyle } from "styled-components";

/* 
----01: TYPOGRAPHY System
FONT SIZE SYSTEM (px)
10 / 12 / 14 / 16 / 18 / 20 / 24 / 30 / 36 / 44 / 52 / 62 / 74 / 86 / 98

- Font weights:
Default: 400
Medium: 500
Semi-bold: 600
Bold: 700

- Line heights:
Default: 1
1.05
1.6

---02: COLORS

- Primary: 

- Tints:

- Shades:

- Accents:

- Grays:
 
---05: SHADOWS

---06: BORDER-RADIUS

---07: WHITESPACE

SPACING SYSTEM (px)
2 / 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 80 / 96 / 128
*/

const GlobalStyles = createGlobalStyle`
:root{
  /* --color-gray-0:#fff;
  --color-gray-50:#fafaf9;
  --color-gray-100:#f5f5f4;
  --color-gray-200:#e7e5e4;
  --color-gray-300:#d6d3d1;
  --color-gray-400:#a8a29e;
  --color-gray-500:#78716c;
  --color-gray-600:#57534e;
  --color-gray-700:#44403c;
  --color-gray-800:#292524;
  --color-gray-900:#1c1917;
  --color-gray-950:#0c0a09; */

  /* --color-gray-0:#fff;
  --color-gray-50:#f8fafc;
  --color-gray-100:#f1f5f9;
  --color-gray-200:#e2e8f0;
  --color-gray-300:#cbd5e1;
  --color-gray-400:#94a3b8;
  --color-gray-500:#64748b;
  --color-gray-600:#475569;
  --color-gray-700:#334155;
  --color-gray-800:#1e293b;
  --color-gray-900:#0f172a;
  --color-gray-950:#020617;
   */


  --color-gray-0:#fff;
  --color-gray-50:#fafafa;
  --color-gray-100:#f4f4f5;
  --color-gray-200:#e4e4e7;
  --color-gray-300:#d4d4d8;
  --color-gray-400:#a1a1aa;
  --color-gray-500:#71717a;
  --color-gray-600:#52525b;
  --color-gray-700:#3f3f46;
  --color-gray-800:#27272a;
  --color-gray-900:#18181b;
  --color-gray-950:#09090b;


  --color-brand-50: #eff6ff;
  --color-brand-100: #dbeafe;
  --color-brand-200: #bfdbfe;
  --color-brand-300: #93c5fd;
  --color-brand-400: #60a5fa;
  --color-brand-500: #3b82f6;
  --color-brand-600: #2563eb;
  --color-brand-700: #1d4ed8;
  --color-brand-800: #1e40af;
  --color-brand-900: #1e3a8a;

  --color-blue-100: #e0f2fe;
  --color-blue-700: #0369a1;
  --color-green-100: #dcfce7;
  --color-green-700: #15803d;
  --color-yellow-100: #fef9c3;
  --color-yellow-700: #a16207;
  --color-silver-100: #e5e7eb;
  --color-silver-700: #374151;
  --color-indigo-100: #e0e7ff;
  --color-indigo-700: #4338ca;


  --color-error-600:#dc2626;
  
  --color-danger-600:#dc2626;
  --color-danger-700:#b91c1c;
  
  --color-discount:#b91c1c;

  --color-success-600:#16a34a;

  --backdrop-color: rgba(255, 255, 255, 0.1);

  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
  --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.12);
}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;

}

body{
  font-family: "Roboto Mono",sans-serif;
  transition: color 0.3s, background-color 0.3s;

  min-height: 100vh;
  line-height: 1.5;
  font-size: 1.6rem;
  overflow: hidden;
}

html{
  font-size: 62.5%;
}

button{
  cursor: pointer;
}

*:disabled{
  cursor: not-allowed;
}

ul{
  list-style: none;
}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

select:disabled,
input:disabled {
  background-color: var(--color-gray-200);
  color: var(--color-gray-500);
}

input:focus,
button:focus,
textarea:focus,
select:focus {
  outline: 2px solid var(--color-brand-600);
  outline-offset: -1px;
}

button:has(svg) {
  line-height: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;
}
`;

export default GlobalStyles;
