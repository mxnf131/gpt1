import type { Model } from "./types"

export const defaultSetting = {
  continuousDialogue: true,
  archiveSession: false,
  openaiAPIKey: "",
  openaiAPITemperature: 60,
  password: "",
  systemRule: "",
  model: "gpt-3.5-turbo" as Model
}

export const defaultMessage = `Powered by OpenAI Vercel
- 网站经常被墙，请保存永久网址：[mxnf.tk ](https://mxnf.tk)
- 本网站仅作为项目演示，不提供长期服务，网站密码为 \`1314\`，长期使用请 [联系站长](http://mxnf.store/123/123.jpg)，获取独立账号+秘钥+高级网站!。
- 个位数[搭建同款](http://mxnf.store/123/Untitled-1.html) 和 [进交流群](https://jq.qq.com/?_wv=1027&k=NE2LYhyf) 
- [[Shift]] + [[Enter]] 换行。开头输入 [[空格]] 跳出更多 预设。[[↑]] 可编辑最近一次提问。点击顶部名称滚动到顶部，点击输入框滚动到底部。`

export type Setting = typeof defaultSetting

export const defaultResetContinuousDialogue = false

export const defaultMaxInputTokens: Record<Model, number> = {
  "gpt-3.5-turbo": 3072,
  "gpt-4": 6144,
  "gpt-4-32k": 24576
}

export const defaultModel: Model = "gpt-3.5-turbo"
