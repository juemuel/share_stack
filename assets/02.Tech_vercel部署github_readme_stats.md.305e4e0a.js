import{_ as e,c as t,o as a,N as l}from"./chunks/framework.35977300.js";const p=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"02.Tech/vercel部署github_readme_stats.md","lastUpdated":1681154388000}'),i={name:"02.Tech/vercel部署github_readme_stats.md"},r=l('<h4 id="起因" tabindex="-1">起因 <a class="header-anchor" href="#起因" aria-label="Permalink to &quot;起因&quot;">​</a></h4><ul><li>晚，就在刚才上传一个github项目，去看了眼我的profile，嗯？怎么Stats出问题了？</li><li><img src="https://s2.loli.net/2023/04/11/S8eF6n9yI5oEWDH.png" alt="daily001"></li><li><code>Card throws &#39;maximum retries exceeded&#39; error</code> ，看着难受，查到源项目发现已经有 issue <a href="https://github.com/anuraghazra/github-readme-stats/issues/1471" target="_blank" rel="noreferrer">#1471</a>了，大意是访问超负荷，作者部署在vercel上的缓存在当时就超过73%。（作者#58开始,应该就不会宕机了哈哈哈，然并卵）</li><li>最后，他提供的解决方案是建议部署自己的vercel实例。</li><li>流程也简单，今晚直接动手解决～</li></ul><h4 id="解决" tabindex="-1">解决 <a class="header-anchor" href="#解决" aria-label="Permalink to &quot;解决&quot;">​</a></h4><ul><li>用github账号注册vercel</li><li>github上 fork 仓库github readme stats</li><li>注意：个人部署要在vercel.json上将maxDuration option 改到10</li><li>进入vercel的dashboard-》新建项目-&gt;导入该仓库</li><li>部署页：加入环境变量name为<code>PAT_1</code>，value为github 的 token（读权限即可），记得Add</li><li>点击Deploy，结果十分钟过去，build cache加载不下去。就去dashboard检查，发现已经部署完成，日志也显示23s就完成了。</li><li>那么最后自给自足访问不受限的stats服务就搭好啦</li><li><img src="https://s2.loli.net/2023/04/11/KFXnDaRUShAuotl.png" alt="vercelproj001"></li><li>用部署得到的域名替换替换原有域名即可</li><li><img src="https://s2.loli.net/2023/04/11/6xOoGKL752bfTHD.png" alt="githubprofile001"></li><li>正常访问了，睡觉睡觉～</li></ul>',4),s=[r];function o(c,d,n,h,_,u){return a(),t("div",null,s)}const g=e(i,[["render",o]]);export{p as __pageData,g as default};
