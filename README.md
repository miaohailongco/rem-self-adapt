#### rem-self-adapt
> 一款使用rem适配不同屏幕宽度的轻量级js插件，用以动态设置HTML根节点的字体大小


```
npm install rem-self-adapt
```

``` 
import RemSelfAdapt from "rem-self-adapt"
let remSelfAdapt = new RemSelfAdapt()
remSelfAdapt.setRem()

window.addEventListener('resize', () => {
	remSelfAdapt.setRem()
});
```

### 具体使用方法请到我的github网站查看：[rem-self-adapt]()