# React + TypeScript + Vite = githubPages

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
## Projects structure
- assets/: Lưu trữ các tệp tĩnh như hình ảnh, font chữ.
- components/: Chứa các component dùng chung trong toàn ứng dụng.
- features/: Mỗi tính năng của ứng dụng được tổ chức thành một module riêng, giúp dễ dàng quản lý và mở rộng. Ví dụ, tính năng "User" có thể có thư mục riêng với các component, hooks, services liên quan.
- hooks/: Chứa các custom hooks dùng chung trong ứng dụng.
- contexts/: Lưu trữ các context cho việc quản lý state toàn cục.
- services/: Chứa các hàm gọi API và xử lý dữ liệu từ server.
- utils/: Các hàm tiện ích chung như format date, xử lý chuỗi.

## Naming convention
- Component: Sử dụng PascalCase. Ví dụ: UserProfile.jsx.
- Hooks: Bắt đầu với use và sử dụng camelCase. Ví dụ: useAuth.js.
- Styles: Nếu sử dụng CSS module, đặt tên theo dạng Component.module.css.

## Using react-router-dom
Question: https://stackoverflow.com/questions/75967389/react-router-dom-wont-work-when-i-deploy-with-gh-pages

GitHub Pages is built for static sites. Every HTML, CSS, JS, image, etc. file is supposed to be an actual file. The problem is that React apps like yours are single-page applications, in the sense that there is only one HTML file and all routing is done with JavaScript. The development server (and some deployment servers, if you go with a paid service or a different free service) maps every unknown page back to the index.html file (with create-react-app, that's in the ./public directory). GitHub pages doesn't do that, if you request yourwebsite.github.io/apple/banana, it will look for an index.html file in a directory called ./apple/banana, which doesn't exist. In the dev server, it will return the main index.html file from the public directory and then your React app handles displaying that page.

The HashRouter gets around that by using the hash of the URL. You've probably already seen this with URLs such as https://en.wikipedia.org/wiki/React_(software)#Notable_features. Everything after the hash (#) is not sent in the request to the server, but rather handled by the browser. The default behavior is to scroll down to an element with that id (in this case, scroll down to the "Notable features" section which has the id of Notable_features). This means that if you sent a request to your GH Pages site like yourwebsite.github.io/#/apple/banana, the actual request for HTML is yourwebsite.github.io/, which will properly get your React app. Then, react-router-dom will use the information in the hash of the URL to display a "page" even though it's not a page in the traditional sense.

If you want to use React router on GitHub pages, then you either need to use a HashRouter or a MemoryRouter, but notice that the memory router will not have shareable links as it stores what page you're on in memory (using a JavaScript object). For more details you can look at React Router's page on Picking a Router.

TLDR: Use HashRouter