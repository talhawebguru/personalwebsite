// pages/index.js
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Personal Webpage - Talha</title>
      </Head>

      <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-sans">
        {/* Navigation */}
        <header className="py-6">
          <nav className="container mx-auto flex justify-between items-center">
            <h1 className="text-3xl font-bold">Talha's Webpage</h1>
            <ul className="flex space-x-6">
              <li><a href="#about" className="hover:underline">About Me</a></li>
              <li><a href="#skills" className="hover:underline">Skills</a></li>
              <li><a href="#projects" className="hover:underline">Projects</a></li>
              <li><a href="#contact" className="hover:underline">Contact</a></li>
            </ul>
          </nav>
        </header>

        {/* About Me Section */}
        <section id="about" className="py-20 text-center bg-white text-black">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold mb-4">About Me</h2>
            <p className="text-lg">
              Hi! I'm Talha Rehman, a passionate Web Developer specializing in the MERN stack. I love building dynamic and interactive web applications. 
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 bg-indigo-600 text-center">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold mb-4">Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="p-6 bg-white text-black rounded-lg shadow-lg">HTML5</div>
              <div className="p-6 bg-white text-black rounded-lg shadow-lg">CSS3</div>
              <div className="p-6 bg-white text-black rounded-lg shadow-lg">JavaScript</div>
              <div className="p-6 bg-white text-black rounded-lg shadow-lg">React</div>
              <div className="p-6 bg-white text-black rounded-lg shadow-lg">Node.js</div>
              <div className="p-6 bg-white text-black rounded-lg shadow-lg">Tailwind CSS</div>
              <div className="p-6 bg-white text-black rounded-lg shadow-lg">Next.js</div>
              <div className="p-6 bg-white text-black rounded-lg shadow-lg">MongoDB</div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-purple-600 text-center">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold mb-4">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-white text-black rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-2">E-Learning App</h3>
                <p>Responsive and interactive e-learning platform.</p>
                <a href="https://talha-rehman-elearning-web-app.vercel.app/" className="text-indigo-600 hover:underline">View Project</a>
              </div>
              <div className="p-6 bg-white text-black rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-2">Quiz App</h3>
                <p>Fun and engaging quiz platform.</p>
                <a href="https://talharehman-quiz-web-app.vercel.app/" className="text-indigo-600 hover:underline">View Project</a>
              </div>
              <div className="p-6 bg-white text-black rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-2">Burger Valley</h3>
                <p>Fast-food ordering application.</p>
                <a href="https://burger-valley.web.app/" className="text-indigo-600 hover:underline">View Project</a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-pink-600 text-center">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold mb-4">Contact Me</h2>
            <p className="mb-8">Feel free to reach out to me for collaborations or job opportunities!</p>
            <div className="flex justify-center space-x-6">
              <a href="https://linkedin.com/in/talhawebguru" className="hover:underline">LinkedIn</a>
              <a href="https://github.com/talhawebguru" className="hover:underline">GitHub</a>
              <a href="https://twitter.com/talhawebguru" className="hover:underline">Twitter</a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-6 text-center">
          <p>© 2024 Talha Rehman. All Rights Reserved.</p>
        </footer>
      </div>
    </>
  );
}
