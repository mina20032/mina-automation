"use client";

export default function ContactForm() {
  return (
    <form
      action="https://formsubmit.co/mano.devloper@gmail.com
"
      method="POST"
      className="space-y-4 bg-white/5 p-6 rounded-2xl border border-white/10"
    >
      <input type="hidden" name="_captcha" value="false" />

      <input
        name="name"
        placeholder="Your Name"
        required
        className="w-full p-3 rounded-xl bg-white/10 border border-white/20 text-gray-200"
      />

      <input
        name="email"
        type="email"
        placeholder="Your Email"
        required
        className="w-full p-3 rounded-xl bg-white/10 border border-white/20 text-gray-200"
      />

      <textarea
        name="message"
        placeholder="Your Message"
        rows={4}
        required
        className="w-full p-3 rounded-xl bg-white/10 border border-white/20 text-gray-200"
      />

      <button
        type="submit"
        className="px-5 py-3 bg-blue-600 rounded-xl text-white w-full font-semibold hover:bg-blue-700 transition"
      >
        Send Message
      </button>
    </form>
  );
}
