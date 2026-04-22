'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 section-padding">
      <div className="container-width text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-6">
            Introducing Nexus 2.0
          </span>
        </motion.div>

        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Transform your workflow with{' '}
          <span className="text-gradient">intelligent automation</span>
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Nexus helps modern teams ship products faster with AI-powered
          workflows, seamless integrations, and real-time collaboration.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.button
            className="btn-primary flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Free Trial
            <ArrowRight size={18} />
          </motion.button>
          <motion.button
            className="btn-secondary flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Play size={18} />
            Watch Demo
          </motion.button>
        </motion.div>

        <motion.div
          className="mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="relative mx-auto max-w-4xl">
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10 pointer-events-none" />
            <motion.div
              className="bg-gradient-to-br from-purple-100 to-purple-50 rounded-2xl p-2 shadow-2xl shadow-purple-200/50"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="bg-white rounded-xl p-4 sm:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="space-y-4 text-left">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600 font-bold">
                      N
                    </div>
                    <div className="flex-1">
                      <div className="h-3 w-3/4 bg-purple-200 rounded mb-2" />
                      <div className="h-2 w-1/2 bg-purple-100 rounded" />
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600 font-bold">
                      N
                    </div>
                    <div className="flex-1">
                      <div className="h-3 w-2/3 bg-purple-200 rounded mb-2" />
                      <div className="h-2 w-1/3 bg-purple-100 rounded" />
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600 font-bold">
                      N
                    </div>
                    <div className="flex-1">
                      <div className="h-3 w-4/5 bg-purple-200 rounded mb-2" />
                      <div className="h-2 w-2/5 bg-purple-100 rounded" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}