"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import {
  GraduationCap,
  Award,
  Code,
  Mail,
  Phone,
  MapPin,
  ChevronRight,
  Github,
  Linkedin,
  ExternalLink,
  Sun,
  Moon,
  Menu,
  X,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useTheme } from "next-themes"
import Image from "next/image"

export default function Home() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Refs for scroll sections
  const aboutRef = useRef<HTMLDivElement | any>(null)
  const experienceRef = useRef<HTMLDivElement | any>(null)
  const educationRef = useRef<HTMLDivElement | any>(null)
  const projectsRef = useRef<HTMLDivElement | any>(null)
  const contactRef = useRef<HTMLDivElement | any>(null)
  const skillsRef = useRef<HTMLDivElement | any>(null)

  // Scroll to section function
  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" })
      setMobileMenuOpen(false)
    }
  }

  // Parallax effect for hero section
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, -150])

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16  max-w-screen-xl mx-auto">
            <div className="text-xl font-bold">DV</div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection(aboutRef)}
                className="text-sm font-medium cursor-pointer hover:text-primary transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection(skillsRef)}
                className="text-sm font-medium cursor-pointer hover:text-primary transition-colors"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection(experienceRef)}
                className="text-sm font-medium cursor-pointer hover:text-primary transition-colors"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection(educationRef)}
                className="text-sm font-medium cursor-pointer hover:text-primary transition-colors"
              >
                Education
              </button>
              <button
                onClick={() => scrollToSection(projectsRef)}
                className="text-sm font-medium cursor-pointer hover:text-primary transition-colors"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection(contactRef)}
                className="text-sm font-medium cursor-pointer hover:text-primary transition-colors"
              >
                Contact
              </button>
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 cursor-pointer rounded-full hover:bg-muted transition-colors"
                aria-label="Toggle theme"
              >
                {mounted && theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 cursor-pointer rounded-full hover:bg-muted transition-colors mr-2"
                aria-label="Toggle theme"
              >
                {mounted && theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-md hover:bg-muted transition-colors"
                aria-label="Open menu"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-background border-b"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection(aboutRef)}
                className="text-sm font-medium cursor-pointer hover:text-primary transition-colors py-2"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection(skillsRef)}
                className="text-sm font-medium cursor-pointer hover:text-primary transition-colors py-2"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection(experienceRef)}
                className="text-sm font-medium cursor-pointer hover:text-primary transition-colors py-2"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection(educationRef)}
                className="text-sm font-medium cursor-pointer hover:text-primary transition-colors py-2"
              >
                Education
              </button>
              <button
                onClick={() => scrollToSection(projectsRef)}
                className="text-sm font-medium cursor-pointer hover:text-primary transition-colors py-2"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection(contactRef)}
                className="text-sm font-medium cursor-pointer hover:text-primary transition-colors py-2"
              >
                Contact
              </button>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-16">
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-background/0"></div>
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
        </motion.div>

        <div className="container mx-auto px-4 z-10 max-w-screen-xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex-1"
            >
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
                <span className="text-primary">DEEPANSHU</span> VASHIST
              </h1>
              <h2 className="text-2xl md:text-3xl text-muted-foreground mb-6">Data Analyst | Network Engineer</h2>
              <p className="text-lg mb-8 max-w-lg">
                A passionate professional with expertise in data analysis and network engineering, dedicated to solving
                complex problems and delivering innovative solutions.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button onClick={() => scrollToSection(contactRef)} size="lg">
                  Contact Me
                </Button>
                <Button onClick={() => scrollToSection(projectsRef)} variant="outline" size="lg">
                  View Projects
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20"
            >
                <img src="profile.jpg" alt="profile" className="w-full h-full cover" />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 md:mt-24 flex flex-col md:flex-row items-center justify-center gap-8 text-sm"
          >
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" />
              <span> Najafgarh New Delhi - 110043</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-primary" />
              <span>+919193030878</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-primary" />
              <span>deepanshuvashist92@gmail.com</span>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
            className="flex flex-col items-center"
          >
            <span className="text-sm text-muted-foreground mb-2">Scroll Down</span>
            <ChevronRight className="h-6 w-6 text-primary rotate-90" />
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 max-w-screen-xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="rounded-xl overflow-hidden h-[400px] flex align-center justify-center"
            >
              <img src="profile.jpg" alt="profile" className="h-[400px] rounded-xl" />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <p className="text-lg text-muted-foreground">
                Hi, I'm Deepanshu Vashist, a detail-oriented Data Analyst with a passion for turning complex data into actionable insights. With expertise in data visualization, statistical analysis, and business intelligence, I help organizations make informed decisions that drive efficiency and growth.
              </p>
              <p className="text-lg text-muted-foreground">
              My skills include Excel, and Power BI, allowing me to clean, analyze, and present data effectively. I specialize in identifying trends, optimizing processes, and providing data-driven solutions to business challenges.
              </p>
              <p className="text-lg text-muted-foreground">
                I thrive on solving problems, automating workflows, and uncovering hidden patterns in data. My goal is to bridge the gap between raw numbers and strategic decision-making, empowering businesses with the insights they need to succeed.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section ref={skillsRef} className="py-24">
        <div className="container mx-auto px-4 max-w-screen-xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Certifications</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
          </motion.div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5 text-primary" />
                Skills & Certifications
              </CardTitle>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-lg font-semibold mb-4">Skills</h3>
                <ul className="space-y-2">
                  <motion.li whileHover={{ x: 5 }} className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-primary" />
                    Team Player
                  </motion.li>
                  <motion.li whileHover={{ x: 5 }} className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-primary" />
                    Active Listener
                  </motion.li>
                  <motion.li whileHover={{ x: 5 }} className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-primary" />
                    Quick Learner
                  </motion.li>
                  <motion.li whileHover={{ x: 5 }} className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-primary" />
                    Excellent Communication Skill
                  </motion.li>
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-lg font-semibold mb-4">Certifications</h3>
                <ul className="space-y-2">
                  <motion.li whileHover={{ x: 5 }} className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-primary" />
                    CODE SANGAM [2024] - SGT UNIVERSITY
                  </motion.li>
                  <motion.li whileHover={{ x: 5 }} className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-primary" />
                    Pradhanship 2.0 SGT UNIVERSITY
                  </motion.li>
                  <motion.li whileHover={{ x: 5 }} className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-primary" />
                    AWS Certified Beginner
                  </motion.li>
                  <motion.li whileHover={{ x: 5 }} className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-primary" />
                    Course for Beginners, Udemy
                  </motion.li>
                  <motion.li whileHover={{ x: 5 }} className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-primary" />
                    Fundamentals of network security, Udemy
                  </motion.li>
                  <motion.li whileHover={{ x: 5 }} className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-primary" />
                    Master course in Cloud Security 3.0, Udemy
                  </motion.li>
                  <motion.li whileHover={{ x: 5 }} className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-primary" />
                    Deep Web - The complete introduction to Hidden Web
                  </motion.li>
                </ul>
              </motion.div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Experience Section */}
      <section ref={experienceRef} className="py-24">
        <div className="container mx-auto px-4 max-w-screen-xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <CardContent className="p-0">
                <div className="p-6 border-l-4 border-primary m-6 relative">
                  <div className="absolute w-4 h-4 bg-primary rounded-full -left-[10px] top-0"></div>
                  <h3 className="text-xl font-semibold">Computer Operator</h3>
                  <p className="text-primary font-medium mt-1">UNO MINDA LIMITED BINDER DIVISION</p>
                  <p className="text-muted-foreground">Bahadurgarh (Haryana)-124507</p>
                  <p className="text-sm text-muted-foreground mt-1">05.07.2023 TO 15.08.2023</p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                      <span>Coordinate with the IT department.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                      <span>Make appropriate changes to documentation as needed.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                      <span>Perform routine maintenance, backups, and install software updates.</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section ref={educationRef} className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 max-w-screen-xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Education</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0 }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">BCA (MIU)</h3>
                  <p className="text-primary mt-1">SGT University</p>
                  <p className="text-muted-foreground">Gurugram, India</p>
                  <p className="text-sm mt-4">In Progress [2022-2025]</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Senior Secondary</h3>
                  <p className="text-primary mt-1">CBSE</p>
                  <p className="text-muted-foreground">Class XII</p>
                  <p className="text-sm mt-4">Completed in 2022 with 63.6%</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Secondary Studies</h3>
                  <p className="text-primary mt-1">CBSE</p>
                  <p className="text-muted-foreground">Class X</p>
                  <p className="text-sm mt-4">Completed in 2020 with 51.8%</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section ref={projectsRef} className="py-24"> 
        <div className="container mx-auto px-4 max-w-screen-xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <Card className="overflow-hidden">
              <div className="h-60 bg-gradient-to-r from-primary/20 to-primary/10">
                {/* <Code className="h-16 w-16 text-primary/60" /> */}
                <img src="/aqi.jpg" alt="aqi" className="w-full h-full" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-4">AQI (AIR QUALITY INDEX)</h3>
                <p className="mb-4">
                  I had made a project with my colleagues on AQI. Air Quality Index using machine learning to predict
                  the aqi of a particular place by giving some of its features like wind, temperature, Smog, Pollution
                  etc.
                </p>
                <p className="text-sm text-muted-foreground mb-6">At CODE SANGAM &apos;24, SGT University.</p>
                <div className="flex gap-4">
                  <Button variant="default" className="gap-2">
                    <ExternalLink className="h-4 w-4" />
                    View Project
                  </Button>
                  <Button variant="outline" className="gap-2">
                    <Github className="h-4 w-4" />
                    Source Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 max-w-screen-xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto"
          >
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Address</p>
                      <p className="text-muted-foreground"> Najafgarh New Delhi - 110043</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-muted-foreground">+919193030878</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-muted-foreground">deepanshuvashist92@gmail.com</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="text-lg font-medium mb-4">Connect With Me</h4>
                  <div className="flex gap-4">
                    <motion.a
                      href="https://github.com/dvashist-code"
                      whileHover={{ scale: 1.1 }}
                      className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                    >
                      <Github className="h-5 w-5" />
                    </motion.a>
                    <motion.a
                      href="https://www.linkedin.com/in/deepanshu-vashist-7a1339309/"
                      whileHover={{ scale: 1.1 }}
                      className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                    >
                      <Linkedin className="h-5 w-5" />
                    </motion.a>
                    <motion.a
                      href="mailto:deepanshuvashist92@gmail.com"
                      whileHover={{ scale: 1.1 }}
                      className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                    >
                      <Mail className="h-5 w-5" />
                    </motion.a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t">
        <div className="container mx-auto px-4 max-w-screen-xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Deepanshu Vashist. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">Data Analyst | Network Engineer</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
