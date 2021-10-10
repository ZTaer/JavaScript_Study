<pre>
# TODO: Codemirror实验记录
    0. 2021.10.10( 等待笔记 )
		a) 安装:
			0. yarn add @uiw/react-codemirror
			1. yarn add @codemirror/lang-json
</pre>

<pre>
# TODO: Monaco实验记录
</pre>

<pre>
# TODO: 针对ts-dev.react.create-react-app.base-dev脚手架改进( 等待笔记 )
    0. .eslintrc.js
        <p>
        {
            rules: {
                'react/react-in-jsx-scope': 'off', // 开头import React时不报错
                'react/jsx-filename-extension': [  // 开头import React时不报错
                    1,
                    { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
                ],
                'react/jsx-props-no-spreading': ['off'], // 允许{ ...xxx }的方式给组件传递props使用
                'import/prefer-default-export': ['off'], // 允许使用export const xxx
            }
        }
        </p>
    1. tsconfig.eslint.json
        <p>
        {
            "extends": "./tsconfig.json",
            "include": [
                "src",
                "tests",
                ".eslintrc.js",
                "config-overrides.js",
                "src/**/*.tsx",
                "src/**/*.ts",
                "test/**/*.tsx",
                "test/**/*.ts"
            ],
            "compilerOptions": {
                "react/react-in-jsx-scope": "off"
            }
        }
        </p>
    2. .eslintignore: 忽略特定目录, 以及文件
        <p>
            # /node_modules/* and /bower_components/* ignored by default
            build/*
            .eslintrc.js
        </p>
    3. 常用
        a) eslint单行注释: // eslint-disable-next-line @typescript-eslint/no-unused-vars
            
</pre>
