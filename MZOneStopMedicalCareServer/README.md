# MZOneStopMedicalCareServer

面向「一站式医疗旅游」项目的后端服务。

- Node.js + Express + MongoDB + Redis
- 独立账号体系（`medicalAdminUsers`），独立 token 前缀（`medicalAdminToken:`）
- 响应协议：`{ resCode, msg, obj }`
- 网关挂载：`/api/medicine/*` → `http://127.0.0.1:3003/*`

## 启动

```bash
cp .env.example .env
npm install
npm run dev           # 本地
pm2 start ecosystem.config.js   # 生产
```

## 接口

| 路径 | 方法 | 鉴权 | 说明 |
| --- | --- | --- | --- |
| `/health` | GET | 否 | 健康检查 |
| `/admin/login` | POST | 否 | B 端登录（MD5 密码） |
| `/admin/logout` | POST | memberToken | 登出 |
| `/admin/me` | GET | memberToken | 当前管理员信息 |
| `/admin/register` | POST | memberToken（管理员） | 新建管理员 |
| `/lead` | POST | 否 | C 端提交留资 |
| `/lead` | GET | memberToken | 留资列表 + 关键字 / 医疗项目筛选 |
| `/lead/:leadId` | GET | memberToken | 留资详情 |
| `/lead/:leadId` | PATCH | memberToken | 更新留资状态 |

## 鉴权

- header：`memberToken`
- Redis key：`medicalAdminToken:{token}`，TTL 默认 7 天
- 密码前端 MD5 后上送，后端字符串比较

## 留资搜索字段

模糊字段：`fullName / firstName / lastName / email / phone / country / message`。
精确字段：`medicalInterest`。
