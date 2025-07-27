# 项目结构说明

## 📁 目录结构

```
password-master1/
├── .github/workflows/     # GitHub Actions 工作流
│   └── deploy.yml         # 自动部署配置
├── public/                # 静态资源
│   ├── logo.svg          # 应用图标
│   └── vite.svg          # Vite 默认图标
├── src/                   # 源代码
│   ├── components/        # React 组件
│   │   ├── PasswordDisplay.tsx      # 密码显示组件
│   │   ├── PasswordGenerator.tsx    # 主密码生成器组件
│   │   ├── PasswordHistory.tsx      # 密码历史记录组件
│   │   ├── PasswordSettings.tsx     # 密码设置组件
│   │   └── ThemeToggle.tsx          # 主题切换组件
│   ├── hooks/             # 自定义 Hooks
│   │   └── useLocalStorage.ts       # 本地存储 Hook
│   ├── types/             # TypeScript 类型定义
│   │   └── index.ts       # 全局类型定义
│   ├── utils/             # 工具函数
│   │   ├── passwordGenerator.ts     # 密码生成算法
│   │   └── passwordStrength.ts      # 密码强度检测
│   ├── App.tsx            # 主应用组件
│   ├── main.tsx           # 应用入口文件
│   └── index.css          # 全局样式
├── .eslintrc.cjs          # ESLint 配置
├── .gitignore             # Git 忽略文件
├── index.html             # HTML 模板
├── netlify.toml           # Netlify 部署配置
├── package.json           # 项目配置和依赖
├── postcss.config.js      # PostCSS 配置
├── PRD.md                 # 产品需求文档
├── README.md              # 项目说明文档
├── tailwind.config.js     # Tailwind CSS 配置
├── tsconfig.json          # TypeScript 配置
├── tsconfig.node.json     # Node.js TypeScript 配置
└── vite.config.ts         # Vite 构建配置
```

## 🏗️ 技术架构

### 前端技术栈
- **React 18** - 用户界面框架
- **TypeScript** - 类型安全的 JavaScript
- **Vite** - 快速构建工具
- **Tailwind CSS** - 实用优先的 CSS 框架

### 核心功能模块

#### 1. 密码生成模块 (`src/utils/passwordGenerator.ts`)
- 随机密码生成
- PIN 码生成
- 密码短语生成
- 使用 Web Crypto API 确保安全性

#### 2. 密码强度检测 (`src/utils/passwordStrength.ts`)
- 实时强度评估
- 复杂度分析
- 改进建议

#### 3. 用户界面组件
- **PasswordGenerator** - 主控制器组件
- **PasswordDisplay** - 密码显示和复制
- **PasswordSettings** - 密码参数配置
- **PasswordHistory** - 历史记录管理
- **ThemeToggle** - 主题切换

#### 4. 数据管理
- **useLocalStorage** - 本地存储 Hook
- 密码历史记录
- 用户偏好设置

## 🔧 开发指南

### 环境要求
- Node.js 18+
- npm 或 yarn

### 开发命令
```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览生产版本
npm run preview

# 代码检查
npm run lint
```

### 部署选项
1. **GitHub Pages** - 通过 GitHub Actions 自动部署
2. **Netlify** - 使用 netlify.toml 配置
3. **Vercel** - 支持零配置部署

## 📋 功能特性

### 已实现功能 (MVP)
- ✅ 基础密码生成
- ✅ 密码强度检测
- ✅ 多种密码类型
- ✅ 自定义设置
- ✅ 主题切换
- ✅ 响应式设计
- ✅ 历史记录
- ✅ 一键复制

### 计划功能
- 🔄 多语言支持
- 🔄 高级设置选项
- 🔄 密码导出功能
- 🔄 密码分享功能

## 🛡️ 安全特性

- 客户端生成，不上传服务器
- 使用加密安全的随机数生成器
- 本地存储，保护隐私
- 无跟踪代码和广告

## 📱 浏览器支持

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

---

**注意**: 所有密码生成都在客户端完成，确保用户隐私安全。 