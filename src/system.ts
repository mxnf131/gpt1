import type { Model } from "./types"

export const defaultSetting = {
  continuousDialogue: true,
  archiveSession: false,
  openaiAPIKey: "",
  openaiAPITemperature: 60,
  password: "",
  systemRule: "",
  model: "gpt-3.5-turbo-16k" as Model
}

export const defaultMessage = `Powered by OpenAI Vercel
- [网站经常被墙，请及时下载APP：](https://wwat.lanzoul.com/tp/iYSxb10fe8mb)
- 本网站仅作为项目演示，不提供长期服务，长期使用请 [联系站长](http://img.iswl.tk/123/123.jpg)，获取独立账号+秘钥+高级网站!。
- 新功能 [免费AI绘画](https://pd.qq.com/s/b2jib2csn) 和 [进交流群](http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=DyoNwC1wHiqQHeOxJLb2rnvo2MF4BzkJ&authKey=GmBN4K4dG4VSEiCqRoDWTKUywENGT3ozPHgAIukoqlZHJLfxugQDy%2FY1gd475Ncr&noverify=0&group_code=854495421) 
- [Pro版已发布，功能更多，](http://gpt6.iswl.tk)[点我体验免费GPT4](http://gpt6.iswl.tk),开头输入 [[空格]] 跳出更多预设。`

export type Setting = typeof defaultSetting

export const defaultResetContinuousDialogue = false

export const defaultMaxInputTokens: Record<Model, number> = {
  "gpt-3.5-turbo": 16000,
  "gpt-4": 6144,
  "gpt-4-32k": 24576
}

export const defaultModel: Model = "gpt-3.5-turbo-16k"
