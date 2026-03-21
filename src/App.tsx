/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { Plane, Send, ShieldCheck, TrendingUp, Users, Zap, Menu, X, ExternalLink, CheckCircle2, Clock } from "lucide-react";
import { useState, useEffect } from "react";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);
  const [isWarningModalOpen, setIsWarningModalOpen] = useState(true);
  const [bdTime, setBdTime] = useState("");
  const [countdown, setCountdown] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      
      // Live Clock
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Dhaka',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      const formatter = new Intl.DateTimeFormat('en-US', options);
      setBdTime(formatter.format(now));

      // Countdown
      const bdNow = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Dhaka' }));
      const target = new Date(bdNow);
      target.setHours(21, 50, 0, 0);
      if (bdNow > target) {
        target.setDate(target.getDate() + 1);
      }
      const diff = target.getTime() - bdNow.getTime();
      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      const pad = (n: number) => n.toString().padStart(2, '0');
      setCountdown(`${pad(hours)}:${pad(minutes)}:${pad(seconds)}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const terms = [
    "রেজিস্ট্রেশন: আমাদের দেওয়া অফিসিয়াল রেফারেল লিঙ্ক ব্যবহার করে নতুন একটি একাউন্ট তৈরি করতে হবে।",
    "ডিপোজিট: একাউন্টটি একটিভ করতে এবং কাজ শুরু করতে সর্বনিম্ন ৫০০ টাকা ডিপোজিট করতে হবে।",
    "ভেরিফিকেশন: একাউন্ট খোলার পর আপনার ইউজারনেম এবং ডিপোজিটের স্ক্রিনশট আমাদের টেলিগ্রামে পাঠাতে হবে।",
    "সিগন্যাল: আমাদের দেওয়া সিগন্যাল অনুযায়ী খেলার মানসিকতা থাকতে হবে, তাড়াহুড়ো করা যাবে না।",
    "মেম্বারশিপ: শুধুমাত্র আমাদের রেফারেল ইউজাররাই আমাদের প্রিমিয়াম ফ্রি সিগন্যাল গ্রুপে যুক্ত হতে পারবেন।",
    "রিস্ক ম্যানেজমেন্ট: গেমের রিস্ক ম্যানেজমেন্ট টিপসগুলো অবশ্যই ফলো করতে হবে।",
    "গোপনীয়তা: আমাদের দেওয়া হ্যাক বা সিগন্যাল অন্য কোথাও শেয়ার করা সম্পূর্ণ নিষেধ।",
    "অ্যাকাউন্ট লিমিট: একই ডিভাইসে একটির বেশি একাউন্ট করা যাবে না, অন্যথায় আইডি ব্যান হতে পারে।",
    "সাপোর্ট: যেকোনো সমস্যায় সরাসরি আমাদের টেলিগ্রাম সাপোর্টে যোগাযোগ করতে হবে।",
    "লাভ শেয়ার: প্রফিট হলে আমাদের কমিউনিটির নিয়ম অনুযায়ী আপডেট থাকতে হবে।"
  ];

  return (
    <div className="min-h-screen bg-white selection:bg-blue-100">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-black/5">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-2xl font-black tracking-tighter text-black">
              MUSSA
            </span>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-sm font-medium hover:text-blue-600 transition-colors">হোম</a>
            <a href="#terms" className="text-sm font-medium hover:text-blue-600 transition-colors">শর্তাবলি</a>
            <a href="https://t.me/Contact_mussa" target="_blank" rel="noopener noreferrer" className="text-sm font-medium hover:text-blue-600 transition-colors">টেলিগ্রাম সাপোর্ট</a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-black"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white border-b border-black/5 p-4 flex flex-col gap-4"
          >
            <a href="#" onClick={() => setIsMenuOpen(false)} className="text-base font-medium">হোম</a>
            <a href="#terms" onClick={() => setIsMenuOpen(false)} className="text-base font-medium">শর্তাবলি</a>
            <a href="https://t.me/Contact_mussa" target="_blank" rel="noopener noreferrer" className="text-base font-medium">টেলিগ্রাম সাপোর্ট</a>
          </motion.div>
        )}
      </header>

      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="z-10"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider mb-6">
                <Clock className="w-3 h-3" />
                বাংলাদেশী সময়: {bdTime || "লোড হচ্ছে..."}
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-black leading-tight mb-6 text-glow">
                বেকারত্বকে বিদায় জানান, মুসা ভাইয়ের হাত ধরে স্বাবলম্বী হোন! 🚀
              </h1>
              <p className="text-lg md:text-xl text-zinc-600 mb-10 leading-relaxed">
                টাকা দিয়ে সিগন্যাল কিনে বারবার ঠকেছেন? আমরা আপনাকে বিনামূল্যে জেতার গোপন কৌশল শিখিয়ে দেব। আমাদের স্পেশাল মেম্বারশিপে কোনো চার্জ নেই। মাত্র কয়েক ঘণ্টা সময় দিয়ে প্রতিদিন ঘরে বসেই আয় করুন ১,৫০০৳ - ৩,০০০৳। আপনার লস রিকভার করার দায়িত্ব আমাদের!
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mb-10 rounded-r-2xl">
                <p className="text-blue-900 font-bold flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  আমরা প্রতিদিন রাত ৯:৫০ মিনিটে সিগন্যাল প্রদান করি।
                </p>
                <p className="text-blue-700 text-sm mt-1 font-medium">
                  পরবর্তী সিগন্যাল: {countdown || "লোড হচ্ছে..."}
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="http://www.88fb.net/?r=kkg4142" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all transform hover:scale-105 btn-glow-blue flex items-center gap-2"
                >
                  এখনই একাউন্ট ক্রিয়েট করুন
                </a>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                <img 
                  src="https://res.cloudinary.com/dn0k6htsv/image/upload/v1774074739/qdo8lcfb0gjowulro8ii.jpg" 
                  alt="Aviator Plane" 
                  className="w-full h-auto object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-100 rounded-full blur-3xl opacity-50 -z-10" />
              <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-green-100 rounded-full blur-3xl opacity-50 -z-10" />
            </motion.div>
          </div>
        </section>

        {/* Convincing Section */}
        <section className="py-20 bg-zinc-50">
          <div className="max-w-4xl mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass p-8 md:p-12 rounded-[2.5rem] text-center relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <TrendingUp className="w-24 h-24" />
              </div>
              <p className="text-xl md:text-2xl text-black font-medium leading-relaxed relative z-10">
                আপনি কি বেকার? নাকি চাকরির পাশাপাশি বাড়তি আয়ের উৎস খুঁজছেন? সময় নষ্ট না করে আজই সঠিক গাইডলাইন নিয়ে কাজ শুরু করুন। আমরা আপনাকে শিখিয়ে দেব কীভাবে লস রিকভার করে প্রফিটে থাকতে হয়। সরাসরি মুসা ভাইয়ের সাথে কন্টাক্ট করুন এবং আপনার ইনকাম যাত্রা শুরু করুন।
              </p>
            </motion.div>
          </div>
        </section>

        {/* New CTA Section: Create Account & Send Screenshot */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white rounded-[3rem] p-8 md:p-16 text-black text-center shadow-2xl relative overflow-hidden border border-black/5"
            >
              <div className="absolute -top-20 -left-20 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-50" />
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-green-50 rounded-full blur-3xl opacity-50" />
              
              <div className="relative z-10">
                <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
                  এখনই আপনার ইনকাম যাত্রা শুরু করুন! 🚀
                </h2>
                <p className="text-lg md:text-xl text-zinc-600 mb-10 max-w-3xl mx-auto leading-relaxed">
                  নিচের বাটনে ক্লিক করে দ্রুত একটি নতুন একাউন্ট তৈরি করুন এবং একাউন্ট খোলার পর সেটির একটি স্ক্রিনশট নিয়ে আমাদের টেলিগ্রামে পাঠান। আমাদের টিম আপনাকে পরবর্তী গাইডলাইন দিয়ে সাহায্য করবে।
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a 
                    href="http://www.88fb.net/?r=kkg4142" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-10 py-5 bg-blue-600 text-white rounded-2xl font-black text-xl hover:bg-blue-700 transition-all transform hover:scale-105 shadow-xl flex items-center justify-center gap-2"
                  >
                    একাউন্ট তৈরি করুন
                  </a>
                  <a 
                    href="https://t.me/Contact_mussa" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-10 py-5 bg-green-500 text-white rounded-2xl font-black text-xl hover:bg-green-600 transition-all transform hover:scale-105 shadow-xl flex items-center justify-center gap-2"
                  >
                    টেলিগ্রামে স্ক্রিনশট পাঠান
                  </a>
                </div>
                <div className="mt-8 flex items-center justify-center gap-2 text-zinc-400 text-sm font-medium">
                  <CheckCircle2 className="w-4 h-4 text-blue-600" />
                  ১০০% ফ্রি মেম্বারশিপ এবং সিগন্যাল
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Terms Section */}
        <section id="terms" className="py-20 bg-zinc-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">শর্তাবলি ও নিয়ম</h2>
              <p className="text-zinc-600 max-w-2xl mx-auto">আমাদের সাথে ফ্রিতে কাজ করার জন্য নিচের শর্তগুলো মেনে নেওয়া বাধ্যতামূলক:</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {terms.map((term, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="glass p-6 rounded-2xl flex gap-4 items-start hover:bg-white/50 transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0 font-bold text-sm">
                    {index + 1}
                  </div>
                  <p className="text-black font-medium">{term}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact & Support Section */}
        <section className="py-20 bg-white border-t border-black/5">
          <div className="max-w-7xl mx-auto px-4">
            <div className="glass p-8 md:p-16 rounded-[3rem] flex flex-col md:flex-row items-center gap-12 relative overflow-hidden">
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-3xl md:text-5xl font-bold text-black mb-8 leading-tight">
                  একাউন্ট এবং ডিপোজিট করেছেন? লাভ করতে চান?
                </h2>
                <a 
                  href="https://t.me/Contact_mussa" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-10 py-5 bg-green-600 text-white rounded-2xl font-bold text-xl hover:bg-green-700 transition-all transform hover:scale-105 btn-glow-green"
                >
                  <Send className="w-6 h-6" />
                  টেলিগ্রামে স্ক্রিনশট পাঠান (মুসা ভাই)
                </a>
                <div className="mt-6 flex items-center justify-center md:justify-start gap-2 text-zinc-600">
                  <span className="font-bold text-black">টেলিগ্রাম ইউজারনেম:</span>
                  <a href="https://t.me/Contact_mussa" className="hover:text-blue-600 underline">@Contact_mussa</a>
                </div>
              </div>

              <motion.div 
                initial={{ rotate: -5, scale: 0.9 }}
                whileInView={{ rotate: 0, scale: 1 }}
                className="w-full md:w-1/3"
              >
                <div className="glass p-4 rounded-3xl shadow-2xl">
                  <img 
                    src="https://res.cloudinary.com/dn0k6htsv/image/upload/v1774074760/uh5krvf2j6lremguiaeq.webp" 
                    alt="White Aviator Plane" 
                    className="w-full h-auto rounded-2xl"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-20 border-t border-black/5 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div className="flex flex-col gap-4">
              <div className="flex items-center">
                <span className="text-2xl font-black tracking-tighter text-black">MUSSA</span>
              </div>
              <p className="text-zinc-500 text-sm leading-relaxed">
                মুসা প্রফিট হাব - এভিয়েটর গেমের সিগন্যাল এবং প্রফিট করার নির্ভরযোগ্য মাধ্যম। আমরা আপনাকে সঠিক গাইডলাইন দিয়ে সফল হতে সাহায্য করি।
              </p>
            </div>
            
            <div className="flex flex-col gap-4">
              <h3 className="font-bold text-black uppercase tracking-wider text-sm">গুরুত্বপূর্ণ লিঙ্ক</h3>
              <nav className="flex flex-col gap-3">
                <button 
                  onClick={() => setIsTermsModalOpen(true)}
                  className="text-zinc-600 hover:text-blue-600 text-sm text-left transition-colors flex items-center gap-2"
                >
                  <ShieldCheck className="w-4 h-4" />
                  শর্তাবলি ও নীতিমালা
                </button>
                <a href="https://t.me/Contact_mussa" target="_blank" rel="noopener noreferrer" className="text-zinc-600 hover:text-blue-600 text-sm transition-colors flex items-center gap-2">
                  <Send className="w-4 h-4" />
                  টেলিগ্রাম সাপোর্ট (মুসা ভাই)
                </a>
              </nav>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="font-bold text-black uppercase tracking-wider text-sm">সাপোর্ট আওয়ার</h3>
              <p className="text-zinc-600 text-sm">
                প্রতিদিন সকাল ১০:০০ টা থেকে রাত ১২:০০ টা পর্যন্ত আমাদের সাপোর্ট টিম আপনার সেবায় নিয়োজিত।
              </p>
            </div>
          </div>

          <div className="pt-8 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-sm text-zinc-500">
              © {new Date().getFullYear()} MUSSA Profit Hub. All rights reserved.
            </p>
            <div className="flex gap-6">
              <ShieldCheck className="w-5 h-5 text-zinc-400" />
              <Users className="w-5 h-5 text-zinc-400" />
            </div>
          </div>
        </div>
      </footer>

      {/* Terms & Conditions Modal */}
      <AnimatePresence>
        {isTermsModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsTermsModalOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl bg-white rounded-[2.5rem] shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
            >
              <div className="p-6 md:p-8 border-b border-black/5 flex items-center justify-between bg-zinc-50">
                <h2 className="text-2xl font-bold text-black flex items-center gap-2">
                  <ShieldCheck className="text-blue-600" />
                  শর্তাবলি ও নীতিমালা
                </h2>
                <button 
                  onClick={() => setIsTermsModalOpen(false)}
                  className="p-2 hover:bg-black/5 rounded-full transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="p-6 md:p-8 overflow-y-auto custom-scrollbar">
                <div className="prose prose-zinc max-w-none">
                  <h3 className="text-lg font-bold text-black mb-4">১. সাধারণ নিয়মাবলী</h3>
                  <p className="text-zinc-600 mb-6">
                    মুসা প্রফিট হাব-এ যুক্ত হওয়ার মাধ্যমে আপনি আমাদের সকল নিয়ম ও শর্তাবলি মেনে নিচ্ছেন বলে গণ্য হবে। আমাদের সিগন্যাল বা হ্যাক শুধুমাত্র বিনোদন এবং শিক্ষার উদ্দেশ্যে প্রদান করা হয়।
                  </p>

                  <h3 className="text-lg font-bold text-black mb-4">২. একাউন্ট ও রেজিস্ট্রেশন</h3>
                  <p className="text-zinc-600 mb-6">
                    আমাদের প্রিমিয়াম গ্রুপে যুক্ত হতে হলে অবশ্যই আমাদের দেওয়া অফিসিয়াল লিঙ্ক ব্যবহার করে একাউন্ট তৈরি করতে হবে। একই ডিভাইসে একাধিক একাউন্ট তৈরি করা কঠোরভাবে নিষিদ্ধ।
                  </p>

                  <h3 className="text-lg font-bold text-black mb-4">৩. ডিপোজিট ও ইনভেস্টমেন্ট</h3>
                  <p className="text-zinc-600 mb-6">
                    কাজ শুরু করার জন্য সর্বনিম্ন ৫০০ টাকা ডিপোজিট করা বাধ্যতামূলক। মনে রাখবেন, যেকোনো অনলাইন গেমে আর্থিক ঝুঁকি থাকে, তাই শুধুমাত্র আপনার বাড়তি টাকা দিয়ে কাজ শুরু করার পরামর্শ দেওয়া হচ্ছে।
                  </p>

                  <h3 className="text-lg font-bold text-black mb-4">৪. সিগন্যাল ও হ্যাক ব্যবহার</h3>
                  <p className="text-zinc-600 mb-6">
                    আমাদের দেওয়া সিগন্যালগুলো ১০০% নির্ভুল হওয়ার গ্যারান্টি দেওয়া হয় না, তবে আমরা সর্বোচ্চ চেষ্টা করি প্রফিট নিশ্চিত করতে। সিগন্যাল ব্যবহারের সময় ধৈর্য ধারণ করা অপরিহার্য।
                  </p>

                  <h3 className="text-lg font-bold text-black mb-4">৫. গোপনীয়তা ও নিরাপত্তা</h3>
                  <p className="text-zinc-600 mb-6">
                    আমাদের গ্রুপের কোনো তথ্য, সিগন্যাল বা হ্যাক অন্য কোথাও শেয়ার করলে আপনার মেম্বারশিপ বাতিল করা হবে। আপনার একাউন্টের নিরাপত্তার দায়িত্ব সম্পূর্ণ আপনার।
                  </p>

                  <h3 className="text-lg font-bold text-black mb-4">৬. সাপোর্ট ও যোগাযোগ</h3>
                  <p className="text-zinc-600 mb-6">
                    যেকোনো প্রয়োজনে আমাদের অফিসিয়াল টেলিগ্রাম আইডিতে (@Contact_mussa) যোগাযোগ করুন। আমাদের টিম আপনাকে সর্বোচ্চ সহযোগিতা করবে।
                  </p>
                </div>

                <div className="mt-8 p-6 bg-blue-50 rounded-2xl border border-blue-100">
                  <p className="text-blue-800 text-sm font-medium flex items-center gap-2">
                    <Zap className="w-4 h-4" />
                    নোট: আমরা কোনো প্রকার আর্থিক লেনদেন বা টাকা নেওয়ার জন্য কাউকে পার্সোনালি নক করি না। প্রতারক হতে সাবধান থাকুন।
                  </p>
                </div>
              </div>

              <div className="p-6 border-t border-black/5 bg-zinc-50 flex justify-end">
                <button 
                  onClick={() => setIsTermsModalOpen(false)}
                  className="px-8 py-3 bg-black text-white rounded-xl font-bold hover:bg-zinc-800 transition-colors"
                >
                  আমি সম্মত
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Warning Modal */}
      <AnimatePresence>
        {isWarningModalOpen && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-lg bg-white rounded-[2.5rem] shadow-2xl overflow-hidden p-8 md:p-10 text-center"
            >
              <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShieldCheck className="w-10 h-10 text-red-600" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 leading-tight">
                সতর্কবার্তা! ⚠️
              </h2>
              <p className="text-lg md:text-xl text-zinc-600 mb-10 leading-relaxed font-medium">
                আমরা কোনো প্রকার আর্থিক লেনদেন বা টাকা নেওয়ার জন্য কাউকে পার্সোনালি নক করি না। প্রতারক হতে সাবধান থাকুন।
              </p>
              <button 
                onClick={() => setIsWarningModalOpen(false)}
                className="w-full py-4 bg-black text-white rounded-2xl font-bold text-lg hover:bg-zinc-800 transition-all transform hover:scale-105 shadow-xl"
              >
                আমি বুঝতে পেরেছি
              </button>
              <button 
                onClick={() => setIsWarningModalOpen(false)}
                className="absolute top-6 right-6 p-2 hover:bg-black/5 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-zinc-400" />
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
