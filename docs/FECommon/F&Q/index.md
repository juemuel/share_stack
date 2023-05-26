# Bug与问题记录

## 一、系统与服务端
### 1.1 Git问题
- Git push报错
	-  `Total 7072 (delta 2508), reused 6844 (delta 2376), pack-reused 0`
		1. git config --global sendpack.sideband false
		2. git config --local sendpack.sideband false
		3. git config --global http.postBuffer 524288000
		4. git config --global https.postbuffer 524288000
		5. git config --global -l 
		6. git config --local -l
		7. 执行完这些命令后，再上传git push -u origin master
	-  `error: failed to push some refs to`
	- error: RPC failed; result=22, HTTP code = 413
	- error: RPC failed; HTTP 403 curl 18 transfer closed with 22 bytes remaining to read
	- `LibreSSL SSL_read: error:02FFF03C:system library:func(4095):Operation timed out, errno 60`
		1. 在host中添加github的ip：`140.82.113.4 github.com`即可
	- `error: remote origin already exists.`
		- 先git **remote** rm **origin**删除远程库，再传
	- `Empty reply from server`：
		-  `git fetch origin --prune`，从远程GIt获取最新的分支和饮用，并删除本地中不存在于远程服务器的分支和引用
- diverged异常：`Your branch and 'origin/main' have diverged`
	- `git fetch origin`
	- `git reset --hard origin/main`
- git clone报错 ^5d6adc
	- 403错误

### 1.2 系统问题
#### Mac
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

## 二、前端
### 2.1 版本问题（npm）
- 安装末尾添加：`--legacy-peer-deps`

### 2.2 React问题
#### Rreact 18下，useEffect中ref属性undefined问题
- useEffect + promise + React.strictMode ✅
- useEffect + async await + react.strictMode ❌
- useCallback + useEffect +promise + React.strictMode  ✅
#### React18与Material 不兼容
- 本质是npm版本问题，`--legacy-peer-deps`可解决

### 2.3 HbuilderX 
#### 内置预览对canvas不友好
- canvas.context.fillRect预览错误，如图![image-20230502144845807](https://s2.loli.net/2023/05/02/Uv3gdECfDXhPm7p.png)

## 三、后端

