import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`


:root{
  --color-gray-0:#fff;
  --color-gray-50:#f9fafb;
  --color-gray-100:#f3f4f6;
  --color-gray-200:#e5e7eb;
  --color-gray-300:#d1d5db;
  --color-gray-400:#9ca3af;
  --color-gray-500:#6b7280;
  --color-gray-600:#4b5563;
  --color-gray-700:#374151;
  --color-gray-900:#111827;
  --color-gray-950:#030712;


  --color-brand-50: #eef2ff;
  --color-brand-100: #e0e7ff;
  --color-brand-200: #c7d2fe;
  --color-brand-500: #6366f1;
  --color-brand-600: #4f46e5;
  --color-brand-700: #4338ca;
  --color-brand-800: #3730a3;
  --color-brand-900: #312e81;


  --color-error-600:#dc2626;

  --color-success-600:#16a34a;

  --backdrop-color: rgba(255, 255, 255, 0.1);
}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;

}

body{
  transition: color 0.3s, background-color 0.3s;

  min-height: 100vh;
  line-height: 1.5;
  font-size: 1.6rem;
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
