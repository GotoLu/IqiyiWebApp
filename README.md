# IqiyiWebApp

本次上传作品，可以直接访问139.199.29.56:3000进行观看审查(网页挂了的话，应该是我电脑关了,email@me:821709741@qq.com ^_^)。

同时也可以在本地进行查看，作品使用nodeJS在后台进行简单搭建，入口地址是app.js。

## 操作步骤
1. git clone git@github.com:GotoLu/IqiyiWebApp.git
2. 在本地仓库，npm install安装依赖库
3. node app.js，根据提示信息“koa server is start!:: 3000”提示的3000端口访问localhost:3000


## 一、目录:
		mock: 模拟在线数据，以防接口挂掉时使用，时间仓促，只进行一部分工作。
    node_modules: 作品的依赖库。
    service: 连接前后端所用。
    static: 含有css、img、js静态文件。
    views: 里面存储模板文件。

## 二、作品实现的功能介绍：
1. 页面功能：
    主页：
        主页的顶栏、搜索框、轮播图、以及综合频道、电视剧、电影、资讯的推荐部分。
            顶栏中有首页图标按钮、首页标题及个人登录图标按钮。
            从推荐频道标题右侧可查看更多频道详情。
    搜索页：
        可对简单关键词进行相关视频搜索并展示。
    登录页：
        一个相当简陋的登录页，可实现数据在线存储。
    排行榜页：
        对电视剧、电影、综艺、资讯频道最热最火的视频进行展示，并且热度第一的视频带有图片与其简单的介绍，而其余视频只排序和展示视频名称。
2. 播放功能：
    直接调用爱奇艺提供的接口进行相应视频的播放。

## 三、相关技术
    1、nodeJS、Koa框架、ejs模板
    2、zepto框架
    3、VueJS
    4、H5与CSS3提供的一些API与功能
