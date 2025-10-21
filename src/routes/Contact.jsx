import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("پیام شما با موفقیت ارسال شد ✅");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className=" max-w-xl mx-auto py-16 px-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-600 font-Inter">
        Contact us
      </h1>

      <form
        onSubmit={handleSubmit}
        className=" bg-gray-50 shadow-md rounded-2xl p-6 space-y-5"
      >
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1 font-Inter">
            Name
          </label>
          <input
            type="text"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1 font-Inter">
            Email
          </label>

          <input
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className=" w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1 font-Inter">
            Message
          </label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Write your message..."
            className="w-full border  rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition resize-none"
            rows="5"
            required
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-600 text-white font-medium px-6 py-2 rounded-xl hover:bg-blue-700 transition font-Inter"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}
