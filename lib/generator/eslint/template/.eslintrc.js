module.exports = {
	"env": {
		"browser": true,
		"es2021": true,
		"node": true
	},
	"extends": [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:react/jsx-runtime"
	],
	"parserOptions": {
		"ecmaFeatures": {
			"jsx": true
		},
		"ecmaVersion": "latest",
		"sourceType": "module"
	},
	"settings": {
		"react": {
			"version": "detect"
		}
	},
	"plugins": [
		"react"
	],
	"globals": {
		process: true,
		module: true,
		require: true,
		__dirname: true
	},
	"rules": {
		// 格式上
		semi: [2, 'always'], //语句强制分号结尾
		'no-multiple-empty-lines': [1, { max: 1 }], //空行最大数1
		'no-trailing-spaces': ['error'], //一行结束后面不要有空格
		'no-regex-spaces': 2, //禁止在正则表达式字面量中使用多个空格 /foo bar/
		'no-spaced-func': 2, //函数调用时 函数名与()之间不能有空格
		'brace-style': [1, '1tbs'], //大括号风格
		camelcase: 0, //强制驼峰法命名
		'comma-dangle': [2, 'never'], //对象字面量项尾必须有逗号
		'comma-style': [2, 'last'], //逗号风格，换行时在行首还是行尾
		curly: [2, 'all'], //必须使用 if(){} 中的{}
		indent: ['error', 2, { SwitchCase: 1 }], //缩进风格
		'new-parens': 2, //new时必须加小括号
		'newline-after-var': 0, //变量声明后是否需要空一行
		quotes: [2, 'single'], //引号类型 `backtick` "double" 'single'
		'no-extra-parens': 0, //禁止非必要的括号
		'no-extra-semi': 2, //禁止多余的冒号
		'quote-props': ['error', 'as-needed'], // 只使用引号标注无效标识符的属性
		'object-curly-newline': ['error', { minProperties: 2 }], // 对象属性超过2行换行
		'object-curly-spacing': ['error', 'always'], // 对象空格
		'comma-spacing': ['error', { before: false, after: true }], // 逗号后面添加空格
		'array-bracket-spacing': ['error', 'never'], // 数组空格
		'computed-property-spacing': ['error', 'never'], // 不允许计算属性之间的空格
		'func-call-spacing': ['error', 'never'], // 不允许函数调用有空格
		'key-spacing': ['error', { beforeColon: false }], // 属性冒号之后必须空格
		// 语法上
		'object-shorthand': 2, // 对象缩写{ token } 对象方法缩写 getName() {}
		'no-array-constructor': 2, //不能使用 new Array() 原因呢 https://coderwall.com/p/h4xm0w/why-never-use-new-array-in-javascript 大致就是数组长度问题
		'no-caller': 1, //禁止使用arguments.caller或arguments.callee
		'no-catch-shadow': 2, //禁止catch子句参数与外部作用域变量同名
		'no-class-assign': 2, //禁止给类赋值
		'no-cond-assign': 2, //禁止在条件表达式中使用赋值语句 虽然有些时候方便 但是不提倡
		'no-const-assign': 2, //禁止修改const声明的变量
		'no-constant-condition': 2, //禁止在条件中使用常量表达式 if(true) if(1)
		'no-continue': 0, //禁止使用continue
		'no-control-regex': 2, //禁止在正则表达式中使用控制字符
		'no-debugger': 1, //禁止使用debugger 虽然调试方便点 但是可能存在隐患 记得删除
		'no-delete-var': 2, //不能对var声明的变量使用delete操作符
		'no-div-regex': 1, //不能使用看起来像除法的正则表达式/=foo/
		'no-dupe-keys': 2, //在创建对象字面量时不允许键重复 {a:1,a:1}
		'no-dupe-args': 2, //函数参数不能重复
		'no-duplicate-case': 2, //switch中的case标签不能重复
		'no-else-return': 2, //如果if语句里面有return,后面不能跟else语句
		'no-empty': 2, //块语句中的内容不能为空
		'no-empty-character-class': 2, //正则表达式中的[]内容不能为空
		'no-empty-label': 0, //禁止使用空label
		'no-eq-null': 2, //禁止对null使用==或!=运算符
		'no-eval': 1, //禁止使用eval eval的代码最好不要用
		'no-ex-assign': 2, //禁止给catch语句中的异常参数赋值
		'no-extend-native': 2, //禁止扩展native对象
		'no-extra-bind': 2, //禁止不必要的函数绑定
		'no-extra-boolean-cast': 2, //禁止不必要的bool转换
		'no-fallthrough': 1, //禁止switch穿透
		'no-floating-decimal': 2, //禁止省略浮点数中的0 .5 3.
		'no-func-assign': 2, //禁止重复的函数声明
		'no-implicit-coercion': 1, //禁止隐式转换
		'no-implied-eval': 2, //禁止使用隐式eval
		'no-inner-declarations': [2, 'functions'], //禁止在块语句中使用声明（变量或函数）这条规则要求函数声明和可选的变量声明位于程序的根节点或函数的主体中。
		'no-new': 1, //禁止在使用new构造一个实例后不赋值
		'no-new-func': 1, //禁止使用new Function
		'no-new-object': 2, //禁止使用new Object()
		'no-new-require': 2, //禁止使用new require
		'no-new-wrappers': 2, //禁止使用new创建包装实例，new String new Boolean new Number
		'no-param-reassign': 2, //禁止给参数重新赋值
		'no-sparse-arrays': 2, //禁止稀疏数组， [1,,2]
		'no-this-before-super': 1, //在调用super()之前不能使用this或super
		'no-throw-literal': 2, //禁止抛出字面量错误 throw "error";
		'no-undef': 1, //不能有未定义的变量
		'no-undef-init': 2, //变量初始化时不能直接给它赋值为undefined
		'no-undefined': 2, //不能使用undefined
		'no-unexpected-multiline': 2, //避免多行表达式
		'no-underscore-dangle': 1, //标识符不能以_开头或结尾
		'no-unneeded-ternary': 2, //禁止不必要的嵌套 var isYes = answer === 1 ? true : false;
		'no-unreachable': 2, //不能有无法执行的代码
		'no-unused-expressions': 2, //禁止无用的表达式
		'no-unused-vars': [2, { vars: 'all', args: 'after-used' }], //不能有声明后未被使用的变量或参数
		'no-use-before-define': 2, //未定义前不能使用
		'no-useless-call': 2, //禁止不必要的call和apply
		'no-void': 2, //禁用void操作符
		'no-var': 1, //禁用var，用let和const代替
		'no-with': 2, //禁用with 语句可能存在问题，因为它将对象的成员添加到当前作用域，从而无法确定块内实际引用的变量。
		'array-bracket-spacing': [2, 'never'], //是否允许非空数组里面有多余的空格
		'callback-return': 1, //避免多次调用回调什么的
		'default-case': 2, //switch语句最后必须有default
		eqeqeq: 2, //必须使用全等
		'new-cap': 2, //函数名首行大写必须使用new方式调用，首行小写必须用不带new方式调用
		'one-var': 0, //连续声明
		'operator-linebreak': [2, 'after'], //换行时运算符在行尾还是行首
		'use-isnan': 2, //禁止比较时使用NaN，只能用isNaN()
		'prefer-template': 1, // 要求使用模板字面量而非字符串连接
		'react/jsx-uses-react': 2,
		'react/prop-types': 0
	}
}

