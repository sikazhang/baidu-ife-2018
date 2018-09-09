# git 常用命令总结
工作流：本地仓库由git维护的三棵树组成，第一个是你的工作目录，它持有实际的文件，第二个是缓存区，它像个缓存区域，临时保存你的改动。最后是head，指向你最近一次提交后的结果。
## 1.基本操作：
**add：**添加到缓存区
**commit：**提交到head，但还没提交到远端仓库
**push origin master：**提交到远端仓库
如果你还没有克隆现有仓库，并欲将你的仓库连接到某个远程服务器，可以使用

```
git remote add origin <server>
```
status
diff
rm
mv
## 2.创建和融合分支
分支是用来将特性开发绝缘开来。在其他分支开发，完成后再将它们合并到主分支上。
创建一个叫做‘feature_x’的分支，并切换过去：

```
git checkout -b feature_X
```
切换回主分支：

```
git checkout master
```
再将新建的分支删掉：

```
git branch -d feature_x
```
除非你将分支推送到远端仓库，不然该分支就是不为他人所见

```
git push origin <branch>
```
mergetool
log
stash
worktree
## 3.更新与合并
要更新你的本地仓库至最新改动，执行：

```
git pull
```
以在你的工作目录中获取和合并远端的改动。（fetch+merge）
要合并其他分支到你的当前分支(git merge <branch>)
两种情况下，git都会尝试去主动自动合并改动。不幸的是，自动合并并非次次都能成功，并可能导致冲突，这时候就需要你修改这些文件来人肉合并这些冲突，改完后，执行如下命令：

```
git add <filename>
```
在合并改动之前，也可以使用如下命令查看：

```
git diff <source_branch> <target_branch>

```
submodule
##4.标签
在软件发布时创建标签，是被推荐的，可以执行如下命令创建一个叫做1.0.0的标签：
git tag 1.0.0 12djkdssw3,12djkdssw3是想要标记的提交id的前10位字符，可以使用git log获得。
##5替换本地改动
加入你做错事：使用如下命令替换掉本地改动：

```
git checkout --<filename>
```
此命令会使用head中最新内容替换掉你的工作目录中的文件，已添加到缓存区的改动，以及新文件，都不受影响。

假如你想丢弃所有的本地改动与提交，可以到服务器上获取最新的版本并将你的本地主分支指向到它：

```
git fetch origin
git reset --hard origin-master

```
## 6.参考网址
https://zhuanlan.zhihu.com/p/21193604



