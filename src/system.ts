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
- 网站经常被墙，请保存永久网址：[mxnf.tk ](http://gpt.mxnf.one)
- 本网站仅作为项目演示，不提供长期服务，长期使用请 [联系站长](http://img.iswl.tk/123/123.jpg)，获取独立账号+秘钥+高级网站!。
- 个位数 [搭建同款](http://img.iswl.tk/123/Untitled-1.html) 和 [进交流群](https://jq.qq.com/?_wv=1027&k=NE2LYhyf) 
- [Pro版已发布，功能更多，](http://gpt4.iswl.tk)[点我体验](http://gpt4.iswl.tk),开头输入 [[空格]] 跳出更多预设。`

export type Setting = typeof defaultSetting

export const defaultResetContinuousDialogue = false

export const defaultMaxInputTokens: Record<Model, number> = {
  "gpt-3.5-turbo": 3072,
  "gpt-4": 6144,
  "gpt-4-32k": 24576
}

export const defaultModel: Model = "gpt-3.5-turbo"
