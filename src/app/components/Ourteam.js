'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'react-intersection-observer'

export default function OurTeam() {
  const team = [
    {
      name: 'Alice Johnson',
      role: 'Chief Executive Officer',
      image: '/p1.jpg',
      desc: 'Leading the company with over 15 years of industry expertise.'
    },
    {
      name: 'Mark Thompson',
      role: 'Chief Technology Officer',
      image: '/p2.jpg',
      desc: 'Driving innovation and overseeing all tech initiatives.'
    },
    {
      name: 'Sophia Lee',
      role: 'Chief Marketing Officer',
      image: '/p3.jpg',
      desc: 'Crafting marketing strategies that engage and inspire.'
    },
    {
      name: 'David Kim',
      role: 'Chief Operations Officer',
      image: '/p4.jpg',
      desc: 'Ensuring smooth operations across all business units.'
    }
  ]

  return (
    <div className="font-roboto py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-5xl font-roboto font-semibold mb-12 text-center">
          Meet Our Executive Team
        </h2>
        <p className="text-lg text-gray-700 text-center mb-18 max-w-2xl mx-auto">
          Our leadership team combines passion, experience, and vision to deliver outstanding results for our clients.
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => {
            const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

            return (
              <motion.div
                ref={ref}
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.05, boxShadow: '0px 10px 25px rgba(0,0,0,0.15)' }}
                className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6 text-center">
                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: index * 0.3 }}
                    className="text-xl font-semibold text-gray-900"
                  >
                    {member.name}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: index * 0.4 }}
                    className="text-indigo-600 font-medium"
                  >
                    {member.role}
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: index * 0.5 }}
                    className="text-gray-600 mt-3 text-sm"
                  >
                    {member.desc}
                  </motion.p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
