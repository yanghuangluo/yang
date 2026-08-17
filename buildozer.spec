[app]

title = 杨作品1
package.name = yangwork1
package.domain = org.yangwork

source.dir = .
source.include_exts = py,png,jpg,kv

requirements = python3,kivy

orientation = portrait
fullscreen = 0

android.api = 33
android.ndk = 25b
android.build_tools_version = 33.0.0
# 自动接受SDK许可，解决非交互环境安装失败
android.accept_sdk_license = True

android.permissions =
