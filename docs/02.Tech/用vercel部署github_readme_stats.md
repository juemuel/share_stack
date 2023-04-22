# Bug：用Vercel解决Github-readme-Stats的访问超限

- 条件：配置Git profile，

## 起因

晚，就在刚才上传一个github项目，顺手看了眼profile，发现Stats出问题了

- ![daily001](https://s2.loli.net/2023/04/11/S8eF6n9yI5oEWDH.png)
- `Card throws 'maximum retries exceeded' error` ，看着难受，查到源项目发现已经有 issue [#1471](https://github.com/anuraghazra/github-readme-stats/issues/1471)了，大意是访问超负荷，作者部署在vercel上的缓存在当时就超过73%。（作者表示，"#58开始,应该就不会宕机了"，哈哈哈然并卵）最后，他提供的解决方案是建议部署自己的vercel实例。流程也简单，决定今晚直接动手解决～

## 解决方案

- 用github账号注册vercel
- github上 fork 仓库github readme stats 
- 注意：个人部署要在vercel.json上将maxDuration option 改到10
- 进入vercel的dashboard-》新建项目->导入该仓库
- 部署页：加入环境变量name为`PAT_1`，value为github 的 token（读权限即可），记得Add
- 点击Deploy，结果十分钟过去，build cache加载不下去。就去dashboard检查，发现已经部署完成，日志也显示23s就完成了。
- 那么最后自给自足访问不受限的stats服务就搭好啦

- ![vercelproj001](https://s2.loli.net/2023/04/11/KFXnDaRUShAuotl.png)
- 用部署得到的域名替换profile的原有域名即可
- ![githubprofile001](https://s2.loli.net/2023/04/11/6xOoGKL752bfTHD.png)
- 正常访问了，睡觉睡觉～



