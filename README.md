# README

这个项目复现以下问题 https://github.com/ant-design/ant-design/issues/38845

如何运行

```shell
# 安装依赖
pnpm install
```

```shell
# 开启子应用
cd packages/react18App
pnpm start
```

```shell
# 开启主应用
cd packages/hostApp
pnpm start
```

然后进入子应用，查看重现

点击打开弹窗，可以看到 body 下增加了 `overflow: hidden` 的样式。

点击查看样式的来源，可以看到形如 `<style data-rc-order="append" rc-util-key="rc-util-locker-xxx">` 的样式标签。

再关闭弹框，可以看到该标签（有/没有）消失。

在内部平台，标签没有消失，导致 body scroll 被锁住了。
