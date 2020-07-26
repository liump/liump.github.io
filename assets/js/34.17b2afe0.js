(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{266:function(t,a,s){"use strict";s.r(a);var n=s(5),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("blockquote",[s("p",[t._v("Python 从入门到实践项目三: Django入门")])]),t._v(" "),s("p",[s("a",{attrs:{href:"https://docs.djangoproject.com/zh-hans",target:"_blank",rel:"noopener noreferrer"}},[t._v("Django中文文档"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"_1-建立项目"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-建立项目"}},[t._v("#")]),t._v(" 1. 建立项目")]),t._v(" "),s("h3",{attrs:{id:"_1-1-制定规范"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-制定规范"}},[t._v("#")]),t._v(" 1.1 制定规范")]),t._v(" "),s("p",[t._v('编写一个名为"学习笔记"的Web应用程序,让用户能够记录感兴趣的主题,并在学习每个主题的过程中添加日志条目."学习笔记"的主页对这个网站进行描述,并邀请用户注册或登录.用户登录后,就可创建新主题、添加新条目以及阅读既有的条目。')]),t._v(" "),s("h3",{attrs:{id:"_1-2-建立虚拟环境"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-建立虚拟环境"}},[t._v("#")]),t._v(" 1.2 建立虚拟环境")]),t._v(" "),s("p",[s("code",[t._v("python -m venv ll_env")]),t._v("\n运行模块 venv,并使用它来创建一个名为ll_env的虚拟环境."),s("br"),t._v("\n如果该命令有效请跳到 "),s("strong",[t._v("1.4")])]),t._v(" "),s("h3",{attrs:{id:"_1-3-virtualenv"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-virtualenv"}},[t._v("#")]),t._v(" 1.3 virtualenv")]),t._v(" "),s("p",[t._v("较早的Python版本或者没有正确地设置，不能使用模块venv,可安装virtualenv包.")]),t._v(" "),s("h3",{attrs:{id:"_1-4-激活虚拟环境"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-激活虚拟环境"}},[t._v("#")]),t._v(" 1.4 激活虚拟环境")]),t._v(" "),s("p",[s("code",[t._v("source ll_env/bin/activate")]),s("br"),t._v("\n如果是window环境:"),s("br"),t._v(" "),s("code",[t._v("ll_env\\Scripts\\activate")]),s("br"),t._v("\n在虚拟环境中安装Django:"),s("br"),t._v(" "),s("code",[t._v("pip install Django")]),s("br"),t._v("\n:::Tip\nDjango 仅在虚拟环境处于活动状态时才可用\n:::")]),t._v(" "),s("h3",{attrs:{id:"_1-5-pip国内镜像"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-pip国内镜像"}},[t._v("#")]),t._v(" 1.5 pip国内镜像")]),t._v(" "),s("p",[t._v("pip默认是美国镜像,使用国内镜像提高下载速度.\t"),s("a",{attrs:{href:"./python_pip"}},[t._v("详情")])]),t._v(" "),s("h3",{attrs:{id:"_1-6-在django中创建项目"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-6-在django中创建项目"}},[t._v("#")]),t._v(" 1.6 在Django中创建项目")]),t._v(" "),s("p",[s("code",[t._v("django-admin startproject 项目名 .")]),s("br"),t._v("\n::: tip\n千万别忘了这个句点,否则部署应用程序时将遭遇一些配置问题.如果忘记了这个句点,就将创建的文件和文件夹删除(ll_env除外),再重新运行这个命令\n:::\n该项目使用: "),s("code",[t._v("django-admin startproject learning_log .")])]),t._v(" "),s("h3",{attrs:{id:"_1-7创建数据库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-7创建数据库"}},[t._v("#")]),t._v(" 1.7创建数据库")]),t._v(" "),s("p",[t._v("在虚拟环境下执行下面的命令:"),s("br"),t._v(" "),s("code",[t._v("python manage.py migrate")]),s("br"),t._v("\n我们将修改数据库称为"),s("strong",[t._v("迁移")]),t._v("数据库.首次执行命令migrate时,将让Django确保数据库与项目的当前状态匹配."),s("br"),t._v("\n执行命令后Django创建了一个文件-- db.sqlite3.SQLite是一种使用单个文件的数据库,是编写简单应用程序的理想选择,因为它让你不用太关注数据库管理的问题.")]),t._v(" "),s("h3",{attrs:{id:"_1-8查看项目"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-8查看项目"}},[t._v("#")]),t._v(" 1.8查看项目")]),t._v(" "),s("p",[t._v("核实Django是否正确地创建了项目.为此,可执行命令runserver,如下所示:"),s("br"),t._v(" "),s("code",[t._v("python manage.py runserver")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("Django version 3.0, using settings 'learning_log.settings'\nStarting development server at http://127.0.0.1:8000/\n")])])]),s("p",[t._v(":::tip")]),t._v(" "),s("ol",[s("li",[t._v("如果看到以上提示,说明服务已启用,监听8000端口,可以访问"),s("code",[t._v("127.0.0.1:8000")]),t._v("查看.")]),t._v(" "),s("li",[t._v("如果出现错误消息'That port is already in use',请执行命令"),s("code",[t._v("python manage.py runserver 8081")]),t._v(",让Django使用另一个端口."),s("br"),t._v("\n:::")])]),t._v(" "),s("h2",{attrs:{id:"_2-创建应用程序"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-创建应用程序"}},[t._v("#")]),t._v(" 2. 创建应用程序")]),t._v(" "),s("p",[s("strong",[t._v("Django项目")]),t._v("由一系列应用程序组成,它们协同工作,让项目称为一个整体.我们暂时只创建一个应用程序,它将完成项目的大部分工作.在后期,我们将在添加一个管理用户账户的应用程序."),s("br"),t._v("\n当前,在前面打开的终端窗口中应该还运行着runserver.请再打开一个终端窗口,并切换到manage.py所在的目录.执行命令:"),s("br"),t._v(" "),s("code",[t._v("python manage.py startapp learning_logs")]),s("br"),t._v("\n命令startapp appName 让Django建立创建应用程序所需的基础设施.如果现在查看项目目录,将看到其中新增了一个文件夹learning_logs.打开这个文件夹,我们将使用models.py来定义我们要在应用程序中管理的数据.")]),t._v(" "),s("h3",{attrs:{id:"_2-1-定义模型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-定义模型"}},[t._v("#")]),t._v(" 2.1 定义模型")]),t._v(" "),s("p",[t._v("models.py")]),t._v(" "),s("div",{staticClass:"language-py extra-class"},[s("pre",{pre:!0,attrs:{class:"language-py"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" django"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("db "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" models\n\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Topic")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("models"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Model"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[t._v('"""用户学习的主题"""')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# CharField 由字符或文本组成的数据,定义时必须告诉Django预留多少空间.max_length就是最大200字符")]),t._v("\n    text "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" models"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("CharField"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("max_length"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# DateTimeField 记录日期和时间的数据.我们传递了实参auto_now_add=True,每当用户创建新主题时")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 这都让Django将这个属性自动设置成当前日期和时间.")]),t._v("\n    date_added "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" models"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DateTimeField"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("auto_now_add"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("__str__")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[t._v('"""返回模型的字符串表示"""')]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("text\n")])])]),s("p",[t._v("::: tip\n要获悉可在模型中使用的各种字段,请参阅Django Model Field Reference "),s("a",{attrs:{href:"https://docs.djangoproject.com/zh-hans/3.0/ref/models/fields/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Django中文文档"),s("OutboundLink")],1),t._v("\n:::\n我们需要告诉Django,默认应使用哪个属性来显示有关主题的信息.Django调用方法__str__()来显示模型的简单表示.在这里,我们编写了方法"),s("code",[t._v("__str__()")]),t._v(",它返回存储在属性text中的字符串.")]),t._v(" "),s("h3",{attrs:{id:"_2-2-激活模型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-激活模型"}},[t._v("#")]),t._v(" 2.2 激活模型")]),t._v(" "),s("p",[t._v("要使用模型,必须让Django将应用程序包含到项目中.为此,打开settings.py")]),t._v(" "),s("div",{staticClass:"language-py extra-class"},[s("pre",{pre:!0,attrs:{class:"language-py"}},[s("code",[t._v("INSTALLED_APPS "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'django.contrib.admin'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'django.contrib.auth'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'django.contrib.contenttypes'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'django.contrib.sessions'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'django.contrib.messages'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'django.contrib.staticfiles'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 我的应用程序")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'learning_logs'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("p",[t._v("通过将应用程序编组,在项目不断增大,包含更多的应用程序时,有助于对应用程序进行跟踪.这里新建了一个名为My apps的片段,当前它只包含应用程序learning_logs."),s("br"),t._v("\n接下来.需要让Django修改数据,使其能够存储于模型Topic相关的信息.请执行下面的命令:"),s("br"),t._v(" "),s("code",[t._v("python manage.py makemigrations learning_logs")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("Migrations for 'learning_logs':\n  learning_logs\\migrations\\0001_initial.py\n    - Create model Topic\n\n")])])]),s("p",[t._v("命令makemigrations让Django确定该如何修改数据库,使其能够存储于我们定义的新模型相关联的数据."),s("br"),t._v("\n下面来应用这种这种迁移,让Django替我们修改数据库:"),s("br"),t._v(" "),s("code",[t._v("python manage.py migrate")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("Operations to perform:\n  Apply all migrations: admin, auth, contenttypes, learning_logs, sessions\nRunning migrations:\n  Applying learning_logs.0001_initial... OK\n")])])]),s("p",[s("strong",[t._v("确认learning_logs应用迁移时一切正常")]),s("br"),t._v('\n::: tip\n每当需要修改 "学习笔记" 管理的数据时,都采取如下三个步骤:')]),t._v(" "),s("ol",[s("li",[t._v("修改models.py")]),t._v(" "),s("li",[t._v("对learning_logsmakemigrations")]),t._v(" "),s("li",[t._v("让Django迁移项目\n:::")])]),t._v(" "),s("h3",{attrs:{id:"_2-3-django管理网站"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-django管理网站"}},[t._v("#")]),t._v(" 2.3 Django管理网站")]),t._v(" "),s("ol",[s("li",[t._v("创建超级用户\n"),s("code",[t._v("python manage.py createsuperuser")])])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("(ll_env) learning_log$python manage.py createsuperuser\nUsername (leave blank to use 'admin'): \nEmail address: \nPassword:\nPassword (again):\nSuperuser created successfully.\n")])])]),s("ol",{attrs:{start:"2"}},[s("li",[t._v("向管理网站注册模型\nDjango自动在管理网站中添加了一些模型,如果User和Group,但对于我们创建的模型,必须手工进行注册."),s("br"),t._v("\nadmin.py")])]),t._v(" "),s("div",{staticClass:"language-py extra-class"},[s("pre",{pre:!0,attrs:{class:"language-py"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" django"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("contrib "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" admin\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Register your models here.")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" learning_logs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("models "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Topic\nadmin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("site"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("register"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Topic"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("现在访问127.0.0.1:8000/admin,通过输入之前注册的超级管理员账号登录,登录后可以添加和修改用户的用户组,还可以管理与刚才定义的模型Topic相关的数据.")]),t._v(" "),s("ol",{attrs:{start:"3"}},[s("li",[t._v("添加主题\n通过单击Add添加主题.")])]),t._v(" "),s("h3",{attrs:{id:"_2-4-定义模型entry"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-定义模型entry"}},[t._v("#")]),t._v(" 2.4 定义模型Entry")]),t._v(" "),s("p",[t._v("models.py")]),t._v(" "),s("div",{staticClass:"language-py extra-class"},[s("pre",{pre:!0,attrs:{class:"language-py"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" django"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("db "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" models\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Create model for here")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Topic")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("models"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Model"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[t._v('"""用户学习的主题"""')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# CharField 由字符或文本组成的数据,定义时必须告诉Django预留多少空间.max_length就是最大200字符")]),t._v("\n    text "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" models"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("CharField"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("max_length"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# DateTimeField 记录日期和时间的数据.我们传递了实参auto_now_add=True,每当用户创建新主题时")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 这都让Django将这个属性自动设置成当前日期和时间.")]),t._v("\n    date_added "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" models"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DateTimeField"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("auto_now_add"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("__str__")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[t._v('"""返回模型的字符串表示"""')]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("text\n\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Entry")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("models"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Model"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[t._v('"""学到的有关某个主题的具体知识"""')]),t._v("\n    topic "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" models"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ForeignKey"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Topic"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" on_delete"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("models"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("CASCADE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    text "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" models"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("TextField"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    date_added "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" models"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DateTimeField"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("auto_now_add"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Meta")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        verbose_name_plural "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'entries'")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("__str__")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[t._v('"""返回模型的字符串表示"""')]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("text"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"..."')]),t._v("\n\n")])])]),s("h3",{attrs:{id:"_2-5-迁移模型entry"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-迁移模型entry"}},[t._v("#")]),t._v(" 2.5 迁移模型Entry")]),t._v(" "),s("p",[t._v("执行命令迁移Entry:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("python manage.py makemigrations\npython manage.py migrate\n")])])]),s("h3",{attrs:{id:"_2-6-向管理网站注册entry"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-6-向管理网站注册entry"}},[t._v("#")]),t._v(" 2.6 向管理网站注册Entry")]),t._v(" "),s("p",[t._v("admin.py")]),t._v(" "),s("div",{staticClass:"language-py extra-class"},[s("pre",{pre:!0,attrs:{class:"language-py"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" django"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("contrib "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" admin\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Register your models here.")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" learning_logs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("models "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Topic"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Entry\nadmin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("site"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("register"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Topic"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nadmin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("site"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("register"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Entry"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h3",{attrs:{id:"_2-7-django-shell"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-7-django-shell"}},[t._v("#")]),t._v(" 2.7 Django shell")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("(ll_env) learning_logs$python manage.py shell\n>>> from learning_logs.models import Topic\n>>> Topic.objects.all()\n<QuerySet [<Topic: Chess>, <Topic: Rock Climbing>]>\n\n")])])]),s("h2",{attrs:{id:"_3-创建网页-学习笔记主页"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-创建网页-学习笔记主页"}},[t._v("#")]),t._v(" 3. 创建网页:学习笔记主页")]),t._v(" "),s("p",[t._v("使用Django创建网页的过程通常分三个阶段: 定义URL、编写视图和编写模板。首先必须定义URL模式.URL模式描述了URL是如何设计的、让Django知道如何将浏览器请求与网站URL匹配,已确定返回哪个网页.")]),t._v(" "),s("h3",{attrs:{id:"_3-1-映射url"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-映射url"}},[t._v("#")]),t._v(" 3.1 映射URL")]),t._v(" "),s("h2",{attrs:{id:"配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[t._v("#")]),t._v(" 配置")]),t._v(" "),s("p",[t._v("在settings.py中修改翻译及时间设置")]),t._v(" "),s("div",{staticClass:"language-py extra-class"},[s("pre",{pre:!0,attrs:{class:"language-py"}},[s("code",[t._v("LANGUAGE_CODE "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'zh-hans'")]),t._v("\n\nTIME_ZONE "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Asia/Shanghai'")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);