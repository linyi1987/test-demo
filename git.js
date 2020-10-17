// 查看之前记录
git log
// 查看某个人的改动
git log --author='linyi1987'
// 查版本
git --version
// 配置用户名
git config --global user.name ''
// 配置用户邮箱
git config --global user.email ''
// 查看配置
git config --global --list
//上传文件
git push -u origin master 
// 查看代理
git config --global http.proxy
git config --global https.proxy
// 清除代理
git config --global --unset http.proxy
// 删除文件
git rm demo3.html
// 重命名
git mv demo2.html home.html
// 设置commit乱码
git config --global i18n.commitencoding utf-8
git config --global gui.encoding utf-8
// 移动文件夹
git mv home.html home
// 移动并命名
git mv demo.html home/demo2.html
// 查看更改
git log --pretty=oneline home/home.html
// 还原上次状态
git checkout -- home/home.html
// 撤销add追踪
git reset HEAD home/home.html
// 回到上一个版本 一个^代表一个版本
git reset --hard HEAD^
git reset --hard HEAD 1546545646
// 指定回退文件
git checkout 123156456 -- version.html
// 创建版本
git tag v1.0
git tag v0.5 5446545645641
// 删除标签
git tag -d v0.5