# 文档编写

## 组件库项目文档地址：<https://gitee.com/r632420050/chsdocs/>

## 团队人员信息编写

在 `./docs/.vitepress/sidebars/member.js` 下有写好的文件，大家只要在里面按如下规则编写即可：

```js
{
  avatar: '', // 头像地址，比如 github 的头像地址
  name: '张三 ✌️', // 名字，自己想叫啥叫啥
  title: '组员', // 职务，一般就是「队长」和「队员」，也可以是其他的，自己发挥
  org: '反馈组件', // 负责的部分，比如负责通用组件就填写「通用组件」
  orgLink: 'examples/modal/', // 文档内的链接，和上面「文档地址配置」中填写的 link 字段保持一致就行
  desc: '', // 自我介绍，可以写可以不写
  links: [ // 相关链接，可以写可以不写
    { icon: 'github', link: 'https://github.com/ox4f5da2' },
  ]
},
```
