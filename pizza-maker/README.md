# 🍕 Pizza Maker Web App

一个使用纯HTML5、CSS3和JavaScript构建的交互式披萨定制应用。

## 项目结构

```
pizza-maker/
├── index.html          # 主页面文件
├── css/
│   ├── styles.css      # 主样式文件
│   └── responsive.css  # 响应式样式
├── js/
│   ├── app.js         # 主应用逻辑
│   └── data.js        # 数据配置
└── assets/
    └── images/        # 图片资源目录（预留）
```

## 功能特性

- ✅ 完全响应式设计，支持移动端和桌面端
- ✅ 交互式披萨构建器
- ✅ 实时价格计算
- ✅ 可视化披萨预览
- ✅ 多种配料选择（肉类、蔬菜、奶酪等）
- ✅ 预设特色披萨
- ✅ 购物车功能
- ✅ 平滑滚动导航
- ✅ 现代CSS变量系统
- ✅ 无障碍访问支持

## 如何运行

### 方法1：使用Python服务器（推荐）
```bash
cd pizza-maker
python3 -m http.server 8080
```
然后在浏览器中访问：`http://localhost:8080`

### 方法2：使用Node.js服务器
```bash
cd pizza-maker
npx serve .
```

### 方法3：直接打开文件
直接在浏览器中打开 `index.html` 文件（部分功能可能受限）

## 技术栈

- **HTML5**: 语义化标签，改善SEO和可访问性
- **CSS3**: 
  - CSS Grid 和 Flexbox 布局
  - CSS 变量系统
  - 响应式媒体查询
  - 过渡动画效果
- **JavaScript (ES6+)**:
  - 类和模块化结构
  - 事件驱动架构
  - 本地状态管理
  - 动态DOM操作

## 自定义颜色系统

项目使用了完整的CSS变量颜色系统：

- `--primary-color: #FF6B35` - 主色调（橙红色）
- `--secondary-color: #F7931E` - 辅助色（橙色）
- `--accent-color: #FFF3E0` - 强调色（浅橙色）
- `--text-dark: #333333` - 深色文本
- `--text-medium: #666666` - 中等色文本
- `--text-light: #888888` - 浅色文本
- `--bg-color: #FAFAFA` - 背景色
- `--card-bg: #FFFFFF` - 卡片背景

## 响应式断点

- **大屏幕**: 1200px+
- **中等屏幕**: 768px - 1199px
- **平板**: 768px - 991px
- **手机横屏**: 576px - 767px
- **手机竖屏**: ≤ 575px
- **超小屏**: ≤ 374px

## 浏览器支持

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 开发说明

项目采用模块化架构：

1. **数据层** (`data.js`): 包含所有披萨配料、价格、营养信息等
2. **应用层** (`app.js`): 主要业务逻辑和用户交互
3. **样式层** (`styles.css` + `responsive.css`): 视觉设计和响应式布局
4. **结构层** (`index.html`): 语义化HTML结构

## 许可证

此项目仅用于学习和演示目的。

---

享受制作您的完美披萨！ 🍕