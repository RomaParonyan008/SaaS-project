'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: '29',
    description: 'Perfect for individuals and small projects',
    features: [
      '5 team members',
      '10GB storage',
      'Basic analytics',
      'Email support',
      'API access',
    ],
  },
  {
    name: 'Pro',
    price: '79',
    description: 'Best for growing teams and startups',
    features: [
      '25 team members',
      '100GB storage',
      'Advanced analytics',
      'Priority support',
      'Custom integrations',
      'SSO authentication',
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: '199',
    description: 'For large organizations with custom needs',
    features: [
      'Unlimited members',
      'Unlimited storage',
      'Custom analytics',
      '24/7 dedicated support',
      'Custom development',
      'SLA guarantee',
      'On-premise option',
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function Pricing() {
  return (
    <section id="pricing" className="section-padding">
      <div className="container-width">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-purple-600 font-medium">Pricing</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Choose the plan that fits your needs. No hidden fees, cancel anytime.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 ${
                plan.popular
                  ? 'border-2 border-purple-600 ring-4 ring-purple-100'
                  : 'border border-gray-200'
              }`}
              whileHover={{ y: -5 }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-purple-600 text-white text-sm font-medium px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-gray-900">{plan.name}</h3>
                <p className="text-gray-600 text-sm mt-1">{plan.description}</p>
              </div>
              <div className="text-center mb-6">
                <span className="text-5xl font-bold text-gray-900">${plan.price}</span>
                <span className="text-gray-600">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-purple-600 flex-shrink-0" />
                    <span className="text-gray-600 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <motion.button
                className={`w-full py-3 rounded-lg font-medium transition-all duration-200 ${
                  plan.popular
                    ? 'bg-purple-600 hover:bg-purple-700 text-white shadow-lg shadow-purple-500/25'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Get Started
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}