"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";
import { DATA } from "@/data/resume";
import Link from "next/link";

export default function FloatingContact() {
  const contactItems = [
    {
      icon: Mail,
      href: `mailto:${DATA.contact.email}`,
      label: "Email",
      color: "bg-red-500 hover:bg-red-600",
    },
    {
      icon: Github,
      href: DATA.contact.social.GitHub.url,
      label: "GitHub",
      color: "bg-gray-800 hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-800",
    },
    {
      icon: Linkedin,
      href: DATA.contact.social.LinkedIn.url,
      label: "LinkedIn",
      color: "bg-blue-600 hover:bg-blue-700",
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* Contact Items */}
      {contactItems.map((item, index) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 * (index + 1) }}
        >
          <Link
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-12 h-12 ${item.color} text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-110 group relative`}
          >
            <item.icon className="w-5 h-5" />
            
            {/* Tooltip */}
            <div className="absolute right-14 top-1/2 transform -translate-y-1/2 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 px-2 py-1 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
              {item.label}
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}