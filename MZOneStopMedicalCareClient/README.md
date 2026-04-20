# MZOneStopMedicalCareClient

CareBridgeChina C 端官网（Vite + Vue 3 + TypeScript + Tailwind）。

- 5 个页面：`/` Home · `/about` About · `/why-china` · `/explore-china` · `/medical-journey`
- Home 底部 `#contact` 为留资表单，POST 到 `/api/medicine/lead`
- 部署路径：`/medicine-h5/client/`

## 本地开发

```bash
npm install
npm run dev
# 打开 http://localhost:5173/medicine-h5/client/
```

开发代理：`/api/medicine/*` → `http://127.0.0.1:3003/*`（去除前缀）。

## 构建

```bash
npm run build
```

## 设计

配色、字体、组件样式参考原 Kimi Demo（`MZOneStopMedicalCareDocument/MedicineDemo/`），Tailwind token 已对齐。
图片统一使用 Unsplash CDN，后续可替换为自有资源。
