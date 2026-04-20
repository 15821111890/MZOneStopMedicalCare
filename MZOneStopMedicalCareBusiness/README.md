# MZOneStopMedicalCareBusiness

CareBridgeChina B 端后台（Vite + Vue 3 + TypeScript）。

- 账号密码登录（前端 MD5 后上送）
- 登录后：留资列表 + 关键字 / 医疗项目检索 + 详情 + 状态更新
- 部署路径：`/medicine-h5/management/`

## 本地开发

```bash
npm install
npm run dev
# 打开 http://localhost:5174/medicine-h5/management/
```

开发代理：`/api/medicine/*` → `http://127.0.0.1:3003/*`（去除前缀）。

## 构建

```bash
npm run build   # 产物 dist/
```

## 账号

参考 `../MZOneStopMedicalCareDocument/script/root_admin_initialize.py`：

- account：`root`
- password：`Medicine_rooter_123456`（前端自动 MD5）
