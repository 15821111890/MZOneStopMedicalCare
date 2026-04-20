# MZOneStopMedicalCare

跨国一站式医疗旅游（CareBridgeChina）monorepo。

## 子项目

| 目录 | 说明 | 技术栈 | 访问路径 |
| --- | --- | --- | --- |
| [`MZOneStopMedicalCareClient`](./MZOneStopMedicalCareClient/) | C 端官网 | Vite + Vue 3 + TS + Tailwind | `/medicine-h5/client/` |
| [`MZOneStopMedicalCareBusiness`](./MZOneStopMedicalCareBusiness/) | B 端后台 | Vite + Vue 3 + TS | `/medicine-h5/management/` |
| [`MZOneStopMedicalCareServer`](./MZOneStopMedicalCareServer/) | 服务端 | Node 16+ / Express / MongoDB / Redis | `/api/medicine/*`（经 MZGateway） |
| [`MZOneStopMedicalCareDocument`](./MZOneStopMedicalCareDocument/) | 文档 + 部署脚本 + 原始 Demo | - | - |

## 快速开始（本地）

```bash
# Server
cd MZOneStopMedicalCareServer
cp .env.example .env
npm install
npm run dev        # 3003

# B 端
cd ../MZOneStopMedicalCareBusiness
npm install
npm run dev        # 5174, base=/medicine-h5/management/

# C 端
cd ../MZOneStopMedicalCareClient
npm install
npm run dev        # 5173, base=/medicine-h5/client/
```

访问：
- C 端：<http://localhost:5173/medicine-h5/client/>
- B 端：<http://localhost:5174/medicine-h5/management/>
- Server 健康：<http://localhost:3003/health>

## 部署

服务器部署参考 `MZOneStopMedicalCareDocument/script/deploy_restart_medical_project.python` 与 `MZOneStopMedicalCareDocument/nginx/medicine.conf`。初始 root 管理员使用 `MZOneStopMedicalCareDocument/script/root_admin_initialize.py`。

## 文档

- 需求与设计：`MZOneStopMedicalCareDocument/document/00_Demo项目初始化.md`
- 会话结论：`MZOneStopMedicalCareDocument/document/MEMORY.md`
- Demo 页面原件：`MZOneStopMedicalCareDocument/MedicineDemo/`
