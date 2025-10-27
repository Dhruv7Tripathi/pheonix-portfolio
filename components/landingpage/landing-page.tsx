"use client"

import { CardHoverEffectDemo } from "../ui/card"
import Image from "next/image"
import Footer from "./footer"
import Navbar from "./navbar"
import Link from "next/link"
import { motion } from "framer-motion"

const LandingPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, x: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 0.8,
      },
    },
  }

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  }

  const ctaVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <div className="bg-white dark:bg-black">
      <Navbar />
      <main
        className="min-h-screen bg-white dark:bg-black"
        style={{ marginLeft: "350px", marginRight: "350px" }}
      >
        {/* Hero Section */}
        <motion.section
          className="flex items-center justify-center text-black dark:text-white px-6 py-6"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <motion.div className="space-y-6 mt-12" variants={containerVariants}>
              <motion.h1
                className="text-4xl md:text-5xl sm:text-3xl lg:text-6xl font-bold leading-tight"
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
              >
                Phoenix
              </motion.h1>
              <motion.h2
                className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-300 leading-relaxed"
                variants={itemVariants}
              >
                Full Stack Developer passionate about building scalable web applications and delightful user
                experiences.
              </motion.h2>
              <motion.p
                className="text-lg text-neutral-700 dark:text-neutral-400 leading-relaxed max-w-lg"
                variants={itemVariants}
              >
                Hi, I&apos;m Phoenix! I love turning ideas into reality with code. Whether it&apos;s crafting robust backends or
                sleek frontends, I enjoy solving problems and learning new technologies. Let&apos;s build something amazing
                together!
              </motion.p>
            </motion.div>
            <motion.div
              className="flex justify-center md:justify-end"
              variants={imageVariants}
              whileHover={{
                scale: 1.05,
                rotate: 2,
                transition: { duration: 0.3 },
              }}
            >
              <Image
                src="/phoenix2.jpg"
                alt="Phoenix - Full Stack Developer Portrait"
                width={300}
                height={300}
                className="rounded-2xl shadow-2xl object-cover"
              />
            </motion.div>
          </div>
        </motion.section>

        {/* Work Section */}
        <motion.section
          className="px-6 py-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <motion.h2
                className="text-3xl md:text-4xl font-bold text-black dark:text-white leading-tight"
                variants={itemVariants}
              >
                Check Out My Latest Work
              </motion.h2>
              <motion.div className="w-full" variants={itemVariants} transition={{ delay: 0.2 }}>
                <CardHoverEffectDemo />
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Call to Action Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={ctaVariants}
        >
          <motion.div
            className="max-w-6xl mb-6 bg-neutral-300 dark:bg-neutral-900 text-black dark:text-white rounded-lg  shadow-lg py-16 text-center"
            whileHover={{
              scale: 1.02,
              boxShadow:
                "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              transition: { duration: 0.3 },
            }}
          >
            <motion.h2
              className="text-2xl md:text-3xl font-bold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Let&apos;s create meaningful work that stands out
            </motion.h2>
            <motion.p
              className="text-gray-400 mt-2 text-sm md:text-base"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Freelance, full-time, or just vibing with an idea – I&apos;m all ears.
            </motion.p>
            <motion.div
              className="mt-4 text-sm md:text-base text-gray-300 flex justify-center items-center gap-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.span
                animate={{
                  x: [0, 5, 0],
                  transition: {
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  },
                }}
              >
                👉
              </motion.span>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="mailto:youremail@example.com"
                  className="hover:underline underline-offset-4 text-white font-medium"
                  aria-label="Send me an email"
                >
                  Email me
                </Link>
              </motion.div>
              <span>or</span>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="https://twitter.com/dhruvtripathi77"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline underline-offset-4 text-white font-medium"
                  aria-label="Connect with me on Twitter"
                >
                  Connect on Twitter
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.section>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Footer />
        </motion.div>
      </main>
    </div>
  )
}

export default LandingPage
