# 开发指南

## 🚀 快速开始

### 环境准备

1. **安装 Node.js** (推荐版本 18+)
   ```bash
   # 检查 Node.js 版本
   node --version
   npm --version
   ```

2. **克隆项目**
   ```bash
   git clone <repository-url>
   cd password-master1
   ```

3. **安装依赖**
   ```bash
   npm install
   ```

4. **启动开发服务器**
   ```bash
   npm run dev
   ```

5. **访问应用**
   打开浏览器访问 `http://localhost:3000`

## 🛠️ 开发命令

```bash
# 开发模式
npm run dev

# 构建生产版本
npm run build

# 预览生产版本
npm run preview

# 代码检查
npm run lint

# 类型检查
npx tsc --noEmit
```

## 📁 项目结构详解

### 核心组件

#### 1. PasswordGenerator (`src/components/PasswordGenerator.tsx`)
- **功能**: 主控制器组件，管理整个密码生成流程
- **职责**: 
  - 状态管理
  - 密码生成逻辑
  - 历史记录管理
  - 用户交互处理

#### 2. PasswordDisplay (`src/components/PasswordDisplay.tsx`)
- **功能**: 密码显示和复制功能
- **特性**:
  - 密码可见性切换
  - 一键复制到剪贴板
  - 密码强度实时显示
  - 复制成功反馈

#### 3. PasswordSettings (`src/components/PasswordSettings.tsx`)
- **功能**: 密码参数配置界面
- **配置项**:
  - 密码长度滑块
  - 字符类型选择
  - 高级选项设置
  - 快速预设按钮

#### 4. PasswordHistory (`src/components/PasswordHistory.tsx`)
- **功能**: 密码历史记录管理
- **特性**:
  - 最近生成的密码列表
  - 一键复制历史密码
  - 清空历史记录
  - 时间戳显示

#### 5. ThemeToggle (`src/components/ThemeToggle.tsx`)
- **功能**: 深色/浅色主题切换
- **实现**: 使用 CSS 类和 localStorage

### 工具函数

#### 1. 密码生成 (`src/utils/passwordGenerator.ts`)
```typescript
// 主要函数
generatePassword(settings: PasswordSettings): string
generatePIN(length: number): string
generatePassphrase(wordCount: number): string
```

#### 2. 密码强度检测 (`src/utils/passwordStrength.ts`)
```typescript
// 主要函数
checkPasswordStrength(password: string): PasswordStrength
getStrengthColor(level: string): string
getStrengthText(level: string): string
```

#### 3. 本地存储 Hook (`src/hooks/useLocalStorage.ts`)
```typescript
// 主要函数
useLocalStorage<T>(key: string, initialValue: T)
useTheme(): [Theme, (theme: Theme) => void]
```

## 🎨 样式系统

### Tailwind CSS 配置

项目使用 Tailwind CSS 进行样式管理，配置文件位于 `tailwind.config.js`：

```javascript
// 自定义颜色
colors: {
  primary: {
    50: '#eff6ff',
    500: '#3b82f6',
    600: '#2563eb',
    700: '#1d4ed8',
  }
}

// 自定义动画
animation: {
  'fade-in': 'fadeIn 0.5s ease-in-out',
  'slide-up': 'slideUp 0.3s ease-out',
}
```

### 组件样式类

```css
/* 按钮样式 */
.btn-primary    /* 主要按钮 */
.btn-secondary  /* 次要按钮 */

/* 卡片样式 */
.card           /* 卡片容器 */

/* 输入框样式 */
.input-field    /* 输入框 */

/* 滑块样式 */
.slider         /* 范围滑块 */
```

## 🔧 开发规范

### 代码风格

1. **TypeScript 严格模式**
   - 启用所有严格检查选项
   - 使用类型注解
   - 避免 `any` 类型

2. **React 最佳实践**
   - 使用函数组件和 Hooks
   - 组件命名使用 PascalCase
   - 文件命名使用 PascalCase

3. **CSS 规范**
   - 优先使用 Tailwind CSS 类
   - 自定义样式使用 `@layer` 指令
   - 响应式设计优先

### Git 提交规范

```bash
# 功能开发
git commit -m "feat: 添加密码强度检测功能"

# 问题修复
git commit -m "fix: 修复密码复制功能"

# 文档更新
git commit -m "docs: 更新 README 文档"

# 样式调整
git commit -m "style: 优化移动端显示效果"

# 代码重构
git commit -m "refactor: 重构密码生成算法"
```

## 🧪 测试指南

### 手动测试清单

1. **密码生成功能**
   - [ ] 随机密码生成
   - [ ] PIN 码生成
   - [ ] 密码短语生成
   - [ ] 不同长度设置
   - [ ] 字符类型选择

2. **密码强度检测**
   - [ ] 弱密码检测
   - [ ] 中等强度检测
   - [ ] 强密码检测
   - [ ] 极强密码检测
   - [ ] 改进建议显示

3. **用户界面**
   - [ ] 响应式设计
   - [ ] 主题切换
   - [ ] 深色模式
   - [ ] 移动端适配

4. **功能操作**
   - [ ] 密码复制
   - [ ] 历史记录
   - [ ] 设置保存
   - [ ] 一键生成

### 浏览器兼容性测试

- [ ] Chrome (最新版本)
- [ ] Firefox (最新版本)
- [ ] Safari (最新版本)
- [ ] Edge (最新版本)
- [ ] 移动端浏览器

## 🚀 部署指南

### 1. GitHub Pages 部署

1. 推送代码到 GitHub
2. 在仓库设置中启用 GitHub Pages
3. 选择 `gh-pages` 分支作为源
4. 访问生成的 URL

### 2. Netlify 部署

1. 连接 GitHub 仓库
2. 构建命令: `npm run build`
3. 发布目录: `dist`
4. 自动部署

### 3. Vercel 部署

1. 导入 GitHub 仓库
2. 框架预设: Vite
3. 自动部署

## 🔍 调试技巧

### 1. 开发工具

```bash
# 启动开发服务器并打开浏览器
npm run dev -- --open

# 构建并分析包大小
npm run build
npx vite-bundle-analyzer dist
```

### 2. 常见问题

**问题**: TypeScript 类型错误
**解决**: 检查 `tsconfig.json` 配置，确保类型定义正确

**问题**: 样式不生效
**解决**: 检查 Tailwind CSS 配置，确保类名正确

**问题**: 密码生成失败
**解决**: 检查浏览器控制台，确认 Web Crypto API 支持

## 📚 学习资源

- [React 官方文档](https://react.dev/)
- [TypeScript 官方文档](https://www.typescriptlang.org/)
- [Tailwind CSS 文档](https://tailwindcss.com/docs)
- [Vite 官方文档](https://vitejs.dev/)

---

**提示**: 开发过程中遇到问题，请先查看控制台错误信息，然后参考相关文档。 