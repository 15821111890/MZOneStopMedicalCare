# 项目记忆 MEMORY

> 本文件记录 MZOneStopMedicalCare 项目在沟通与实现过程中的关键结论、参考资料、架构决定，方便后续 AI 或人工快速恢复上下文。

## 一、项目定位

- 面向海外病人的**跨国一站式医疗旅游**服务。
- 组合「旅游 + 医疗」形成全新医疗体验。
- Demo 站点风格参考：<https://aijwmik5zm53g.ok.kimi.link>（简单、大气、专业）。

## 二、仓库与目录

- 仓库：`git@github.com:15821111890/MZOneStopMedicalCare.git`
- 本地：`/Users/zhuanglei/Workspace/MZOneStopMedicalCare`
- 子项目：
  - `MZOneStopMedicalCareClient` — C 端官网（Vite + Vue + TS，PC）
  - `MZOneStopMedicalCareBusiness` — B 端后台（Vite + Vue + TS，PC）
  - `MZOneStopMedicalCareServer` — 服务端（Node Express + MongoDB + Redis）
  - `MZOneStopMedicalCareDocument` — 文档 + 脚本

## 三、参考项目

- `/Users/zhuanglei/Workspace/MZDocument` — 现有服务器部署规范、Nginx 模板、Python 脚本模板
- `/Users/zhuanglei/Workspace/MZAIService` — 登录/注册、memberToken 鉴权、MD5 密码的实现范本
- `/Users/zhuanglei/Workspace/MZGateway` — API 网关路由表，新增 `/api/medicine` 前缀转发到 Medical Server
- `/Users/zhuanglei/Workspace/MZServer` — Member 模型、auth 中间件、response 封装

## 四、部署拓扑（目标）

| 组件 | 路径 / 端口 | 备注 |
| --- | --- | --- |
| Nginx | `/medicine-h5/client/` | C 端静态资源 |
| Nginx | `/medicine-h5/management/` | B 端静态资源 |
| Nginx | `/api/medicine/` | 经 Gateway 路由到 Medical Server |
| MZGateway | `127.0.0.1:3000` | 新增 `/api/medicine` → `127.0.0.1:3003` |
| Medical Server | `127.0.0.1:3003`（建议，待确认） | PM2 fork 模式 |
| MongoDB | `127.0.0.1:27017` | 独立 DB，如 `mz_medical` |
| Redis | `127.0.0.1:6379` | 共用实例，token key 独立命名空间 |

> 端口 3003 为建议值，部署前需确认服务器未被占用。

## 五、鉴权与账号

- **独立账号体系**，与 MZAIService、MZServer 的 Member 表完全隔离（独立 MongoDB Collection、独立 token 前缀）。
- 密码 **MD5 传输**（前端先 MD5，后端按字符串入库与比较，不存明文）。
- memberToken 放在 Redis，header 名：`memberToken`（小写），参考 MZServer 的中间件模式。
- Redis key 命名建议：`medicalMemberToken:{token}`，与其他系统隔离。
- 初始化管理员：account=`root`、password=`Medicine_rooter_123456`、roleType=管理员。
- Server 除 `登录`/`登出` 外，所有接口均需 memberToken 鉴权。

## 六、留资业务（Lead）

- C 端首页 `#contact` 提交联系表单 → 写入 Medical Server 的留资 Collection。
- B 端可**查看 / 模糊搜索 / 快速检索**留资信息。
- 检索字段：后续确认，基础字段通常含 姓名 / 邮箱 / 电话 / 国家 / 感兴趣的治疗项目 / 提交时间。

## 七、响应与代码约定（参考 MZServer）

- 统一响应结构：`{ resCode, msg, obj }`。
- `resCode = '00100000'` 表示成功。
- memberToken 来自 header，Redis 存储，TTL 7 天。

## 八、Kimi Demo 站点可达性

- 2026-04-20 通过 WebFetch 访问 `aijwmik5zm53g.ok.kimi.link` 全部 5 个页面均返回 HTTP 403，无法自动爬取。
- Client 端需要用户补充内容来源（比如复制 HTML、提供截图、或者授权用文字描述「照搬」为自有文案）。

## 九、脚本

- `MZOneStopMedicalCareDocument/script/deploy_restart_medical_project.python` 需负责：
  1. 检查 / 配置 Nginx
  2. 检查 / 生成 .env
  3. 构建并拉起 Business、Client 两个 Vue H5 项目
  4. 启动 / 重启 Server（PM2）
  5. 同步 MZGateway 路由表并 reload

## 十、已落定的关键参数

| 项 | 值 |
| --- | --- |
| Server 端口 | `3003` |
| MongoDB DB | `mz_medical`（URI：`mongodb://127.0.0.1:27017/mz_medical`） |
| Admin Collection | `medicalAdminUsers` |
| Lead Collection | `medicalLeads` |
| Redis token 前缀 | `medicalAdminToken:` |
| memberToken TTL | 604800 秒（7 天） |
| 品牌名 | CareBridgeChina |
| C 端 base | `/medicine-h5/client/`（dev 端口 5173） |
| B 端 base | `/medicine-h5/management/`（dev 端口 5174） |
| API base | `/api/medicine`（Gateway 剥前缀后转发 3003） |
| root 账号 | `root` / `Medicine_rooter_123456`（MD5 = `c0c0edd8729eb4b5474dc4e3e6c134a3`） |

## 十一、已完成内容

- `MZOneStopMedicalCareServer`：登录 / 登出 / me / register，留资 POST/列表/详情/状态，`{resCode,msg,obj}` 响应协议
- `MZOneStopMedicalCareBusiness`：Vite+Vue3+TS，登录（MD5）+ 留资列表（关键字 + 医疗项目筛选 + 分页）+ 详情（状态变更）；中英文切换（vue-i18n，顶栏 / 登录页 / Sidebar 切换器）
- `MZOneStopMedicalCareClient`：Vite+Vue3+TS+Tailwind，5 页（Home/About/Why China/Explore China/Journey）+ 首页 `#contact` 留资表单；中英文切换（vue-i18n，顶栏 / 移动端均带 EN/中文 切换器）
- `MZOneStopMedicalCareDocument`：Nginx 模板 `nginx/medicine.conf`、Gateway 路由补丁 `script/gateway_route_patch.json`、一键部署脚本 `script/deploy_restart_medical_project.python`、root 管理员初始化 `script/root_admin_initialize.py`

### 11.1 国际化（i18n）落地约定

- 两个前端均集成 `vue-i18n@^9`，`legacy: false`，默认语言按 `localStorage`（Client: `medicine-client-lang`、Business: `medicine-business-lang`），其次按 `navigator.language` 判断 `zh-*` → `zh`，否则 `en`。
- Locale 文件位置：`<project>/src/i18n/locales/{en,zh}.ts`；切换器组件：`<project>/src/components/LangSwitch.vue`。
- **稳定值约定**：`medicalInterest` 字段在前后端仍以英文（`Health Screening` / `Dentistry` / …）存储和比较；前端仅在展示层根据 `interests.<英文值>` 翻译。切换语言不会影响数据。
- Status 也是纯数字枚举（0/1/2），展示端用 `status.new/contacted/closed` 翻译。

## 十二、后续事项

- Kimi Demo 页面的图片素材目前全部用 Unsplash CDN 占位，生产前替换为自有资源
- 首页 `#contact` 表单提交后的邮件 / 内部通知通道未实现
- B 端后续可能需要：筛选状态、导出 CSV、数据看板、权限细分
- 暂未加请求限流 / 图形验证码，C 端留资接口如对外暴露需加反刷防护

## 十三、服务器部署踩坑记录（2026-04-20 首次上线）

### 13.1 服务器实际落地路径

monorepo 克隆到 `/home/ubuntu/apps/MZOneStopMedicalCare/`，子项目在其**下一层**：

```
/home/ubuntu/apps/MZOneStopMedicalCare/
├── MZOneStopMedicalCareClient/dist/
├── MZOneStopMedicalCareBusiness/dist/
├── MZOneStopMedicalCareServer/
└── MZOneStopMedicalCareDocument/
```

Nginx `alias` 必须含中间那层 `MZOneStopMedicalCare/`，否则指向不存在目录。

### 13.2 权限坑（500 / redirection cycle）

Nginx worker 以 `www-data` 运行，需要能**穿透 + 读**目录链。默认 `/home/ubuntu` 是 `750 ubuntu:ubuntu`，`www-data` 无法穿透，$uri 查文件失败 → `try_files` 回落到 `index.html` → 同一个 location 再匹配 → "rewrite or internal redirection cycle"（10 次后 500）。

修复（一次性）：

```bash
sudo chmod o+x /home/ubuntu /home/ubuntu/apps
sudo chmod -R o+rX \
  /home/ubuntu/apps/MZOneStopMedicalCare/MZOneStopMedicalCareClient/dist \
  /home/ubuntu/apps/MZOneStopMedicalCare/MZOneStopMedicalCareBusiness/dist
# 验证 worker 能读
sudo -u www-data cat .../dist/index.html | head -3
```

诊断诀窍：**"rewrite or internal redirection cycle" 通常不是 Nginx 配置逻辑错，而是目标文件 worker 读不到**。先做 `sudo -u www-data stat` / `cat` 测，通不了就修权限。

### 13.3 Nginx 模板同步漏洞

`git pull` 只更新仓库里的 `medicine.conf`，不会自动同步到 `/etc/nginx/sites-available/`。部署脚本的 `--steps nginx` 会 `cp + nginx -t + reload`，**每次改完 nginx 模板必须跑这步**，或手动：

```bash
sudo cp MZOneStopMedicalCareDocument/nginx/medicine.conf /etc/nginx/sites-available/medicine.conf
sudo nginx -t && sudo systemctl reload nginx
```

验证当前 live 配置：`sudo grep alias /etc/nginx/sites-available/medicine.conf`。

### 13.4 落地后验证命令

```bash
curl -I http://127.0.0.1/medicine-h5/client/         # 200
curl -I http://127.0.0.1/medicine-h5/management/     # 200
curl http://127.0.0.1/api/medicine/health            # {"resCode":"00100000",...}
```

### 13.5 无关的旁观日志

`/var/log/nginx/medicine_error.log` 会混入老应用 `/h5/...` 的 404 与根目录 `/favicon.ico` 的 404，与本项目无关，定位时按 `medicine-h5` 关键字过滤。

### 13.6 部署脚本入口（合并后）

原来的三个脚本（`deploy_restart_medical_project.python` / `gateway_route_patch.json` / `root_admin_initialize.py`）已合并为单个
`MZOneStopMedicalCareDocument/script/deploy_mz_medicine_application.python`。

```bash
# 默认一把梭：check → pull → server → business → client → nginx(snippet) → gateway → perms → seed_root → verify
sudo python3 MZOneStopMedicalCareDocument/script/deploy_mz_medicine_application.python

# 只跑某几步（step key 跟上面顺序一致）
sudo python3 MZOneStopMedicalCareDocument/script/deploy_mz_medicine_application.python --steps pull client perms verify
```

前置条件：已先跑过 `MZDocument` 的 `deploy_mz_gateway.python`（提供 Nginx 基础配置 + ip_default.conf + MZGateway）。`nginx` 步骤同步的是
**location 片段** `medicine.conf` → `/etc/nginx/snippets/medicine-h5.conf`，由 `ip_default.conf` 通过 `include` 拉入（见 13.7）。

### 13.7 Nginx 布局变化（2026-04-20 重构）

原来 `medicine.conf` 是独立的 `server { listen 80; ... }` 块，挂在 `sites-enabled/`。这会和 `MZDocument/nginx/ip_default.conf`
的 `server_name _`（default_server）冲突 → `duplicate default_server`。

新布局：

- `MZOneStopMedicalCareDocument/nginx/medicine.conf` 只包含 `location /medicine-h5/client/`、`/medicine-h5/management/`、`/api/medicine/` 三个片段
- 目标路径：`/etc/nginx/snippets/medicine-h5.conf`
- 由 `MZDocument/nginx/ip_default.conf` 里的 `include /etc/nginx/snippets/medicine-h5.conf;` 引入
- 部署脚本 `nginx` 步骤会检测旧版 `sites-available/medicine.conf` 并提示清理

## 十四、前端国际化（i18n）

### 14.1 vue-i18n `rt()` 陷阱（2026-04-20 线上发现）

`tm()` + `rt()` 这组 API 在 `vue-i18n@9.13.x` 下不能通用。`rt()` 的内部实现只接受 `MessageFunction`（预编译过的消息函数）；
我们的 locale 是普通 TS 对象、字符串里没有 `{}` 插值，`tm()` 返回的就是原始字符串。给 `rt()` 喂字符串 → `isMessageFunction` 校验失败 →
抛 `INVALID_ARGUMENT`。渲染期 throw 会直接让整个 View 的 setup 失败，**首页只剩 Header/Footer、正文空白**（这正是第一次上线看到的症状）。

**正确做法**：结构化/多语言数据不要走 `tm/rt`，走 `useMessages()` 直接读原始 locale：

```ts
// MZOneStopMedicalCareClient/src/i18n/index.ts
export function useMessages() {
  const { locale } = useI18n();
  return computed(() => raw[locale.value as Locale]);  // raw = { en, zh }
}

// 视图里：
const m = useMessages();
const services = computed(() => m.value.home.services);
```

普通字符串文案继续用 `t('xxx.yyy')`。**只有**当取的是数组 / 嵌套对象时才换 `useMessages()`。

### 14.2 国际化里需要保持稳定的字段

需要后端比较 / 过滤 / 入库的字段保持英文枚举，只翻译展示层：

- `medicalInterest`：前后端都存英文（`Health Screening` / `Dentistry` / `Cosmetic Surgery` / `Traditional Chinese Medicine` /
  `CAR-T Cell Therapy` / `Advanced Treatments`）。Client 端 `<select>` 的 `value` 是英文、`label` 走 `services.*` 翻译；Business 端列表
  筛选同理。
- `status`：依然是数字 0/1/2；展示时 `leadStatusI18nKey(status)` 返回 `status.new/contacted/closed` 再 `t(...)`。

不这么做的话，切到中文后新提交的数据会和历史英文数据 mismatch，后端检索（`$regex` / 精确匹配）会出错。

### 14.3 语言切换器位置

- Client（`MZOneStopMedicalCareClient`）：`SiteHeader.vue` 桌面端右侧 + 移动端折叠菜单都挂了 `LangSwitch`
- Business（`MZOneStopMedicalCareBusiness`）：登录页右上角 + `AdminLayout` 侧边栏底部

语言偏好分别存 `localStorage['medicine-client-lang']` / `localStorage['medicine-business-lang']`，首次访问按 `navigator.language`
判断（`zh-*` → `zh`，否则 `en`）。

---

> 更新规则：每次完成阶段性工作或确认关键决定，应当回到此文件追加/修订相关条目，以便下一次开发会话能够快速接上。
