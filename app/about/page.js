"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { BluetoothOffIcon, Link } from "lucide-react";

export default function Page() {
    return (
        <section className="pb-16 bg-gray-100 dark:bg-gray-900 transition duration-300 ease-in-out">
            {/* Hero Section */}
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="relative flex flex-col items-center justify-center h-screen text-center bg-gradient-to-r from-blue-500 to-purple-600 text-white dark:from-blue-600 dark:to-purple-700"
            >
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="text-3xl font-bold md:text-5xl lg:text-6xl"
                >
                    About Me
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="mt-4 max-w-lg mx-auto text-lg md:text-xl lg:text-2xl dark:text-gray-200"
                >
                    Hi, I'm Sumit Singh Sengar, an IT student pursuing B.Tech in Computer Science and Engineering, currently in my final year. I'm passionate about programming, web development, and exploring new technologies. Here's a bit about my journey, skills, and the technologies I work with.
                </motion.p>

                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="mt-8 px-6 py-3 flex items-center justify-center gap-4 bg-white text-blue-600 dark:text-white font-semibold rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 transition duration-300 ease-in-out cursor-pointer"
                >
                    <a href="/contact" > Connect with Me</a>
                </motion.button>

            </motion.div>

            {/* Portfolio Section */}
            <div className="container px-6 py-10 mx-auto mt-16 text-gray-800 dark:text-gray-200 transition duration-300 ease-in-out">
                <h2 className="text-3xl font-bold text-center mb-10 md:text-4xl">
                    My Skills and Experience
                </h2>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {/* Studies */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col items-center p-6 space-y-4 bg-white rounded-lg shadow-md dark:bg-gray-800 dark:text-gray-300 hover:shadow-lg transition-shadow duration-300 ease-in-out transform hover:scale-105"
                    >
                        <h3 className="text-xl font-semibold">Education</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            Currently pursuing B.Tech in Computer Science and Engineering in my final year, actively building a strong foundation in software development, web technologies, and real-world application of computer science concepts.
                        </p>
                    </motion.div>

                    {/* Programming Languages */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="flex flex-col items-center p-6 space-y-4 bg-white rounded-lg shadow-md dark:bg-gray-800 dark:text-gray-300 hover:shadow-lg transition-shadow duration-300 ease-in-out transform hover:scale-105"
                    >
                        <h3 className="text-xl font-semibold">Programming Languages</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            Skilled in JavaScript, Python, and C++. Actively expanding my
                            knowledge in web development and exploring frameworks like React
                            and Next.js.
                        </p>
                    </motion.div>

                    {/* Frameworks and Tools */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="flex flex-col items-center p-6 space-y-4 bg-white rounded-lg shadow-md dark:bg-gray-800 dark:text-gray-300 hover:shadow-lg transition-shadow duration-300 ease-in-out transform hover:scale-105"
                    >
                        <h3 className="text-xl font-semibold">Frameworks & Tools</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            Experienced with Next.js, Tailwind CSS, and Git for version
                            control. Always looking to enhance my skills and learn new tools.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
