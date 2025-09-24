import { Mail } from "lucide-react"
import Link from "next/link"
import { Skills } from "./skills"
import { SiGithub, SiX, SiLinkedin } from "react-icons/si"
const Footer = () => {

  return (
    <footer className="bg-white dark:bg-black border-t border-neutral-200 dark:border-neutral-800">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-black dark:text-white mb-4">Phoenix</h3>
            <p className="text-neutral-800 dark:text-neutral-200 mb-6 max-w-md">
              Full Stack Developer passionate about creating exceptional digital experiences. Let&apos;s collaborate and
              bring your ideas to life.
            </p>
            <div className="flex ">
              <Link
                href="https://github.com"
                className="p-2 rounded-lg  hover:bg-neutral-300 dark:hover:bg-neutral-700 transition-colors"
                aria-label="GitHub"
              >
                <SiGithub className="w-5 h-5 text-neutral-700 dark:text-neutral-300" />
              </Link>
              <Link
                href="https://linkedin.com"
                className="p-2 rounded-lg  hover:bg-neutral-300 dark:hover:bg-neutral-700 transition-colors"
                aria-label="LinkedIn"
              >
                <SiLinkedin className="w-5 h-5 text-neutral-700 dark:text-neutral-300" />
              </Link>
              <Link
                href="https://twitter.com"
                className="p-2 rounded-lg  hover:bg-neutral-300 dark:hover:bg-neutral-700 transition-colors"
                aria-label="Twitter"
              >
                <SiX className="w-5 h-5 text-neutral-700 dark:text-neutral-300" />
              </Link>
              <Link
                href="mailto:phoenix@example.com"
                className="p-2 rounded-lg  hover:bg-neutral-300 dark:hover:bg-neutral-700 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-neutral-700 dark:text-neutral-300" />
              </Link>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-black dark:text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#about"
                  className="text-neutral-900 dark:text-neutral-100 hover:text-black dark:hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#projects"
                  className="text-neutral-900 dark:text-neutral-100 hover:text-black dark:hover:text-white transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="#skills"
                  className="text-neutral-900 dark:text-neutral-100 hover:text-black dark:hover:text-white transition-colors"
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-neutral-900 dark:text-neutral-100 hover:text-black dark:hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-black dark:text-white mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <span className="text-neutral-900 dark:text-neutral-100">Web Development</span>
              </li>
              <li>
                <span className="text-neutral-900 dark:text-neutral-100">UI/UX Design</span>
              </li>
              <li>
                <span className="text-neutral-900 dark:text-neutral-100">API Development</span>
              </li>
              <li>
                <span className="text-neutral-900 dark:text-neutral-100">Consulting</span>
              </li>
            </ul>
          </div>
        </div>
        <Skills />
      </div>
    </footer>
  )
}

export default Footer
