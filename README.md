# React + TypeScript + Vite

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
