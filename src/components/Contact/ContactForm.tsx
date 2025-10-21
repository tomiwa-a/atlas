 import React from 'react';

const ContactForm: React.FC = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Send a Message</h2>
      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-base font-medium mb-2">Name</label>
            <input
              type="text"
              className="w-full p-3 border border-neutral rounded bg-secondary text-primary"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-base font-medium mb-2">Email</label>
            <input
              type="email"
              className="w-full p-3 border border-neutral rounded bg-secondary text-primary"
              placeholder="your.email@example.com"
            />
          </div>
        </div>
        <div>
          <label className="block text-base font-medium mb-2">Subject</label>
          <input
            type="text"
            className="w-full p-3 border border-neutral rounded bg-secondary text-primary"
            placeholder="Message subject"
          />
        </div>
        <div>
          <label className="block text-base font-medium mb-2">Message</label>
          <textarea
            rows={6}
            className="w-full p-3 border border-neutral rounded bg-secondary text-primary"
            placeholder="Your message"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-primary text-secondary px-6 py-3 rounded-full font-semibold hover:opacity-90 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;