export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="prose max-w-none">
          <h1 className="mb-8 text-3xl font-bold">关于我</h1>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">个人简介</h2>
            <p className="text-gray-600">
              我是一名全栈开发者，热衷于探索新技术和分享技术经验。主要关注 Web 开发、
              人工智能和云计算等领域。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">技术栈</h2>
            <div className="flex flex-col space-y-4">
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold mb-2">前端</h3>
                <ul className="list-disc list-inside text-gray-600">
                  <li>React</li>
                  <li>Vue</li>
                  <li>TypeScript</li>
                  <li>Next.js</li>
                </ul>
              </div>
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold mb-2">后端</h3>
                <ul className="list-disc list-inside text-gray-600">
                  <li>Node.js</li>
                  <li>SpringBoot</li>
                  <li>MySQL</li>
                  <li>MongoDB</li>
                </ul>
              </div>
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold mb-2">其他</h3>
                <ul className="list-disc list-inside text-gray-600">
                  <li>Docker</li>
                  <li>Git</li>
                  <li>Linux</li>
                  <li>AWS</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">联系方式</h2>
            <ul className="space-y-2 text-gray-600">
              <li>
                <strong>GitHub:</strong>{" "}
                <a href="https://github.com/yourusername" className="text-blue-600 hover:underline">
                  @yourusername
                </a>
              </li>
              <li>
                <strong>Email:</strong>{" "}
                <a href="mailto:your.email@example.com" className="text-blue-600 hover:underline">
                  your.email@example.com
                </a>
              </li>
              <li>
                <strong>Blog:</strong>{" "}
                <a href="https://yourblog.com" className="text-blue-600 hover:underline">
                  https://yourblog.com
                </a>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
} 