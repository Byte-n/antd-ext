---
type: always_on
description: 项目背景和编码规范
---
# 项目背景

这是 Byte-n/antd-ext（antd-ext）的源代码仓库，是一个 React 组件库，发布为 npm 包 antd-ext。

- 使用 TypeScript 和 React 开发
- 兼容 React 16 ~ 19 版本
- 遵循 Ant Design 设计规范
- 支持国际化

# 编码规范

- 使用 TypeScript 和 React 书写
- 使用函数式组件和 hooks，避免类组件
- 使用提前返回（early returns）提高代码可读性
- 避免引入新依赖，严控打包体积
- 兼容 Chrome 80+ 浏览器
- 支持服务端渲染
- 保持向下兼容，避免 breaking change
- 组件名使用大驼峰（PascalCase）
- 属性名使用小驼峰（camelCase）
- 合理使用 React.memo、useMemo 和 useCallback 优化性能

## 命名规范

Ant Design 命名遵循**完整名称**而非缩写的原则。

### Props 命名规范

* 初始化 prop：`default` + `PropName`
* 强制渲染：`forceRender`
  * 强制渲染子组件：`force` + `SubComponentName` + `Render`
* 子组件渲染：`SubComponentName` + `Render`，例如 `panelRender`
* 子项渲染：`SubItemName` + `Render`，例如 `cellRender`
* 数据源：`dataSource`
* 面板打开：popup & dropdown 使用 `open`，额外 popup 使用 `popupName` + `Open`，如 `tooltipOpen`
  * 禁止使用 `visible` 以保证所有可见性 API 统一
* `children`：
  * 主要显示内容。避免额外的 prop 名。
  * 选项列表如 `Select.Option` 或 `Tree.TreeNode`。
  * 自定义包装组件可考虑使用 `component` prop。
* 显示相关命名：`show` + `PropName`
* 功能性：`PropName` + `able`
* 禁用：`disabled`
  * 子组件：`disabled` + `SubComponentName`
* 额外内容：`extra`
  * 子组件：`SubComponentName` + `extra`，例如 `titleExtra`
* 主要图标：`icon`
  * 先与函数合并：`functionName: { icon }`，例如 `expandable: { icon: <Smile /> }`
  * 多个图标：`FunctionName` + `Icon`
* 触发器：`trigger`
  * 子功能触发器：`SubFunction` + `Trigger`
  * 在时间点触发：`xxx` + `On` + `EventName`（例如 `destroyOnHidden`）
* 组件使用其他组件配置。命名为组件名（例如 `<Table pagination={{...}} />`）
* 类名：`className`
  * 额外类应合并到 `classes`（例如 `<Button classes={{ inner: 'custom-inner' }} />`）
* 格式：`preserveInvalidOnBlur`

### 事件命名规范

* 基本: `on[Event]` 、下级 `on[Sub][Event]` / `on[Prop][Event]`
* 削修: `before/after` + `EventName`
* 持续操作: `on[Event]Complete`

### 引用（Ref）规范

组件应该有 `ref` prop。其结构应该提供：

```tsx
ComponentRef {
  nativeElement: HTMLElement;
  // 其他函数
  focus: VoidFunction;
}
```

Ref 的类型应使用 `React.ForwardRefRenderFunction` 明确定义。
