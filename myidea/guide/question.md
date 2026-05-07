---
outline: deep
---

# 常见问题

## MacOS 下提示“已损坏无法打开”

1. 在终端执行以下命令:

`sudo xattr -rd com.apple.quarantine /Applications/MyIdea.app`

2. 根据提示输入开机密码；
3. 再次打开 MyIdea 即可。