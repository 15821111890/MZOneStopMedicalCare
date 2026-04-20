# 00. Demo 项目初始化

> 本文记录 MZOneStopMedicalCare（跨国一站式医疗旅游）项目的最初需求与目标，用户原始描述照录。

## 项目背景

跨国医疗项目，面向海外病人，以「一站式旅游 + 医疗服务」的方式，为海外病人提供一种全新的医疗体验。Kimi 已为该项目搭建了一个面向 Client 端的 Demo 站点作为参考：

- <https://aijwmik5zm53g.ok.kimi.link/index.html>
- <https://aijwmik5zm53g.ok.kimi.link/homepage.html>
- <https://aijwmik5zm53g.ok.kimi.link/why-china.html>
- <https://aijwmik5zm53g.ok.kimi.link/explore-china.html>
- <https://aijwmik5zm53g.ok.kimi.link/medical-journey.html>
- <https://aijwmik5zm53g.ok.kimi.link/index.html#contact>
- 站点根：<https://aijwmik5zm53g.ok.kimi.link>

所有页面参考此 Demo 的风格：简单、大气、专业。

---

## 一、项目代码仓库及架构

- GitHub 仓库：`git@github.com:15821111890/MZOneStopMedicalCare.git`
- 本地根目录：`/Users/zhuanglei/Workspace/MZOneStopMedicalCare`

四个子项目：

| 子项目 | 定位 | 技术栈 |
| --- | --- | --- |
| `MZOneStopMedicalCareBusiness` | B 端后台（PC 端） | Vite + Vue + TypeScript |
| `MZOneStopMedicalCareClient` | C 端官网（PC 端） | Vite + Vue + TypeScript |
| `MZOneStopMedicalCareDocument` | 项目文档和脚本 | Markdown + Python/Shell |
| `MZOneStopMedicalCareServer` | 服务端 | Node Express + MongoDB + Redis |

---

## 二、项目部署

先阅读 `/Users/zhuanglei/Workspace/MZDocument` 目录下的文件，了解现有服务器部署（Ubuntu 22.04，IP `110.40.228.197`，已装 MongoDB、Redis、Nginx、PM2）。

### 部署规划

1. **两个 Vue 项目通过 Nginx 托管**：
   - C 端：`http://110.40.228.197/medicine-h5/client`
   - B 端：`http://110.40.228.197/medicine-h5/management`

2. **Server 通过 PM2 启动**，连接服务器上现有的 MongoDB 与 Redis。通过 Nginx 指向 MZGateway，最终路由到：
   - `http://110.40.228.197/api/medicine/` → Gateway 下发到 MZOneStopMedicalCareServer 的具体接口
   - Gateway 项目：`/Users/zhuanglei/Workspace/MZGateway`

3. **文档**：`MZOneStopMedicalCareDocument/document/` 下需要一份 md 文件，记录框架、功能、需求等关键内容，让 AI 能快速了解并继续开发。

4. **脚本**：`MZOneStopMedicalCareDocument/script/` 下需要一个 `deploy_restart_medical_project.python`，用于检查、配置、启动以下内容：
   - 服务器 Nginx 配置
   - ENV 配置
   - `MZOneStopMedicalCareBusiness` H5 项目
   - `MZOneStopMedicalCareClient` H5 项目
   - `MZOneStopMedicalCareServer` 项目

---

## 三、具体内容

### 3.1 MZOneStopMedicalCareClient

- 所有页面、样式，可以照搬 Kimi Demo 站点。

### 3.2 MZOneStopMedicalCareBusiness

- 首先是**登录页面**，账号密码登录。
- 参考 `/Users/zhuanglei/Workspace/MZAIService` 来做登录注册功能，需 memberToken 鉴权。
- 为 MZOneStopMedicalCareBusiness 做一套**单独的账号和鉴权体系**，不要和 MZAIService 搞在一起。它有自己的 MongoDB 表。
- 密码同样用 MD5 传输到后端，后端入库和比较，不使用明文。
- 将账号 `root`、密码 `Medicine_rooter_123456` 的 MD5 作为初始化账号录入，同样是**管理员角色**。
- 登录后的页面由实现者先设计一版，需可以查看 C 端提交的**留资信息**。

### 3.3 MZOneStopMedicalCareServer

- 提供 B 端账号的**登录、登出**功能。
- 除登录/登出外，其他接口均需 memberToken 鉴权。
- **留资查询**支持几个字段的**模糊和快速检索**。

---

## 四、视觉要求

所有页面参考 <https://aijwmik5zm53g.ok.kimi.link> 做的**简单、大气、专业**。

---

## 五、文档与记录

- 用户原始描述存档于：`MZOneStopMedicalCareDocument/document/00_Demo项目初始化.md`（本文）
- 聊天过程中的重点结论：`MZOneStopMedicalCareDocument/document/MEMORY.md`
