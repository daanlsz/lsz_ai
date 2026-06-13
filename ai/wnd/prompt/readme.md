API  ：application Programming Interface  
程序——数据——>API 另一程序
    ————request————>请求
    <————response———响应





# 吴恩达AI应用中的Prompt

## Prompt Principles
- 使用清晰且详细的Prompt
- LLM 响应约束返回结构json
- 五个构建块

## get_response 函数
- 参数默认值是函数的代码优化的重要语法特性(参数的默认值是函数代码的重要语法特性)
    写函数时给个默认模型（比如 model="deepseek-chat"）
    不用每次都传，调用更方便
- 好复用、灵活、简便
## LLM API
• completions 完成接口 prompt()
    (给一句话，续写)
• chat.completions （现在全都用这个）
聊天完成接口 messages: [ { "role": "system", "content": "你是一个专业的助手" }, { "role": "user", "content": "你好" }, { "role": "assistant", "content": "你好，有什么我可以帮助你的吗？" } ]

role: system → 设定 AI 是谁
role: user → 你说的话
role: assistant → AI 回答
messages 结构(必须懂)
## 吴恩达 prompt 规则
LLM 智能高级，如何让大模型靠谱的为我们工作？ 
-通过一系列规则，减少智能的随机性。
• 清晰且具体的表达 
    - 清晰 让大模型理解我们的目的，不偏离主题或少犯错误 
    - 具体 提供上下文
• 总结的案例里面，使用清晰的格式区间，告诉大模型LLM我们在处理的文本在哪里?
    {text} {}   是字符串模版的占位符 
    使用特殊的符号```来清晰的指出要处理的文本 
    总结，summarize nlp 机器学习的常见任务
• 对响应的结果格式做约束，一般为JSON，
    继续丰富JSON的key，还加点注释(自然语义的加持)
• 分布式提示
-  Few-shot是提示工程技巧，在给大模型的提示中提供少量示例（通常2-5个）， 引导模型理解任务格式和期望输出，无需微调即可提升特定任务的表现。
• llm 有幻觉


细节理解
### f = 格式化字符串（f-string）
作用：在字符串里直接嵌入变量 / 内容
### """ ... """ = 多行字符串
作用：可以写一整段、换行、随便写，不用加 \n。