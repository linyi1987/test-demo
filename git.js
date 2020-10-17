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
第三次修改