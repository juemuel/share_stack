# Bug与问题记录

## 一、索引

## 二、Git问题
### 2.1 Git push  问题
#### 1. Total 7072宕机
-  问题描述：push 时宕机于 Total7072，`Total 7072 (delta 2508), reused 6844 (delta 2376), pack-reused 0`，
- 解决方案
	```bash
	git config --global sendpack.sideband false
	git config --local sendpack.sideband false
	git config --global http.postBuffer 524288000
	git config --global https.postbuffer 524288000
	git config --global -l 
	git config --local -l
	```
	- 执行完这些命令后，再上传git push -u origin master
#### 2. error：Failed to push some refs
- 问题描述： `error: failed to push some refs to`
#### 3. error：RPC failed; result=22, HTTP code = 413
#### 4. error：RPC failed; HTTP 403
- 问题描述：error: RPC failed; HTTP 403 curl 18 transfer closed with 22 bytes remaining to read
#### 5. LibreSSL SSL_read:error:02FFF03C 
- 问题描述：`LibreSSL SSL_read: error:02FFF03C:system library:func(4095):Operation timed out, errno 60`
- 解决方案：在host中添加github的ip：`140.82.113.4 github.com`即可
#### 6. error: remote origin already exists.
- 问题描述：`error: remote origin already exists.`
- 解决方案：先git **remote** rm **origin**删除远程库，再传
#### 7.Empty reply from server
- 问题描述：`Empty reply from server`
- 解决方案： `git fetch origin --prune`，从远程GIt获取最新的分支和饮用，并删除本地中不存在于远程服务器的分支和引用
#### 8. Your branch and 'origin/main' have diverged
- 问题描述：`Your branch and 'origin/main' have diverged`
- 解决方案：依次执行`git fetch origin`、`git reset --hard origin/main`
### 2.2 Git clone 问题
- 403错误
### 2.3 Git actions 问题
- workflow permissions别忘了打开！！

## 三、系统问题（mcv）
### 3.1 Mac 问题
#### 1. Mac「文件已损坏」或打开无反应
- 安装后打开，显示「文件已损坏」或者安装完打开没有反应（由于软件没有签名导致）
	- 信任开发者：`sudo spctl --master-disable`
	- 放行软件（以picgo为例）：`xattr -cr /Applications/PicGo.app`
	- 即可成功
	- 如果提示以下内容
		```
		option -r not recognized
		usage: xattr [-slz] file [file ...]
			   xattr -p [-slz] attr_name file [file ...]
			   xattr -w [-sz] attr_name attr_value file [file ...]
			   xattr -d [-s] attr_name file [file ...]
			   xattr -c [-s] file [file ...]
		
		The first form lists the names of all xattrs on the given file(s).
		The second form (-p) prints the value of the xattr attr_name.
		The third form (-w) sets the value of the xattr attr_name to attr_value.
		The fourth form (-d) deletes the xattr attr_name.
		The fifth form (-c) deletes (clears) all xattrs.
		
		options:
		  -h: print this help
		  -s: act on symbolic links themselves rather than their targets
		  -l: print long format (attr_name: attr_value)
		  -z: compress or decompress (if compressed) attribute value in zip format
		```
	- 执行命令
		```
		xattr -c /Applications/PicGo.app/*
		```
	- 如果上面描述的命令仍然没有效果，可以试试下面的命令：
		```
		sudo xattr -d com.apple.quarantine /Applications/PicGo.app/
		```


## 三、服务问题
### 3.1 一般端口被占用 [port]
- `sudo lsof -i :端口号`
- `kill -9 端口号`
### 3.2 Docker端口被占用 [doccker port] 
- `docker ps -l`
- `docker rm XXX`
### 3.3 URL、端口的访问检测 [port] 
- C端：ping 服务IP
- S端：curl 127.0.0.1:端口
- 重启：systemctl restart docker
- 防火墙
- ...
### 3.4 connect to host 地址 port 端口: Connection refused [ssh] 
- 问题描述： `ssh: connect to host 地址 port 端口: Connection refused`
- 解决方案：依次执行`sudo apt-get install openssh-server`、`sudo service ssh restart`

### 3.5 client_loop: send disconnect: Broken pipe [ssh] 
- 问题描述：`client_loop: send disconnect: Broken pipe`
- 问题原因：由于客户端长期没有对ssh做操作而断开连接
- 解决方案：发送ssh心跳包（修改客户端配置文件）
```bash
 ## 在 /etc/ssh/ssh_config的Host *中添加
 ServerAliveInterval 60
 IPQoS**=throughput
```
### 3.6 MYSQL ERROR 2002 [mysql] 
- 问题描述：`ERROR 2002(HY000): Can‘t connect to local MySQL server through socket ‘/tmp/mysql.sock‘ `
- 问题原因：由于mysql没有正常开启造成的；
- 解决方案：到mysql根目录下开启一次解决。


## 三、前端
### 3.1 版本问题（npm）
- 安装末尾添加：`--legacy-peer-deps`
### 3.2 React问题
#### 1. Rreact 18下，useEffect中ref属性undefined问题
- useEffect + promise + React.strictMode ✅
- useEffect + async await + react.strictMode ❌
- useCallback + useEffect +promise + React.strictMode  ✅
#### 2. React18与Material 不兼容
- 本质是npm版本问题，`--legacy-peer-deps`可解决

### 3.3 小程序问题 
#### 1.HbuilderX内置预览对canvas不友好
- canvas.context.fillRect预览错误，如图![image-20230502144845807](https://s2.loli.net/2023/06/10/WOC6sXeGhE2UApw.png)
