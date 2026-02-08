## 开发流程

开发的时候feature分支，如feature_element
测试后合并到develop，在测试
上线版本是release分支
稳定后合并到main分支

## 配置环境
git clone https://github.com/fengfengxiong123/HCSC.git

git branch -a

git fetch

git branch -a

git checkout -b feature_wuya

git branch --set-upstream-to=remotes/origin/feature_wuya feature_wuya

git add .

git commit -m 'xx'

git push

# 从远程分支同步本地分支
1. 同步所有的远程分支数据到硬盘
git fetch 

2. 切换自己的分支
git checkout feature_wuya

3. 合并远程分支的数据到自己的分支
git merge origin/develop


## 配置git代理
找到代理使用的端口

git config --global https.proxy https://127.0.0.1:2334
git config --global http.proxy http://127.0.0.1:2334

## 取消代理
git config --global --unset http.proxy
git config --global --unset https.proxy