import { injectGlobal } from 'vue3-styled-components'

injectGlobal`
:root {
  --pink-primary: #f63e7b;
  --pink-hover: #e02d6a;
  --pink-light: #fff1f5;
  --cream-bg: #fff8f5;
  --cream-section: #fdf4f0;
  --dark-text: #111430;
  --body-text: #555555;
  --light-text: #777777;
  --white: #ffffff;
  --gold-star: #f5a623;
  --footer-bg: #111430;
  --footer-text: #bbbbc4;
  --shadow-card: 0 10px 40px rgba(0, 0, 0, 0.06);
  --shadow-hover: 0 20px 60px rgba(246, 62, 123, 0.15);
  --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  --font-family: 'Poppins', sans-serif;
}

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  scroll-padding-top: 80px;
}

body {
  font-family: var(--font-family), sans-serif;
  color: var(--body-text);
  background-color: var(--cream-bg);
  line-height: 1.7;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

img {
  max-width: 100%;
  height: auto;
  display: block;
}

a {
  text-decoration: none;
  color: inherit;
  transition: var(--transition);
}

ul {
  list-style: none;
}

.fade-in {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}

.fade-in.visible {
  opacity: 1;
  transform: translateY(0);
}

.fade-in-left {
  opacity: 0;
  transform: translateX(-40px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}

.fade-in-left.visible {
  opacity: 1;
  transform: translateX(0);
}

.fade-in-right {
  opacity: 0;
  transform: translateX(40px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}

.fade-in-right.visible {
  opacity: 1;
  transform: translateX(0);
}
`


