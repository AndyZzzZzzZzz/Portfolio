import React from 'react';

// Define and export the Contact functional component
export default function Contact() {
     // State hooks to manage the input fields for name, email, and message
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [message, setMessage] = React.useState('');

    // JSX structure to render the contact form and embedded map
    return (
        <section
            id="contact"
            className="relative bg-white dark:bg-slate-900 text-gray-900 dark:text-gray-200 min-h-screen flex items-center justify-center p-10 pt-24"
        >
            <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
                {/* Google Maps iframe embedded in a styled container */}
                <div className="lg:w-2/3 md:w-1/2 bg-gray-900 dark:bg-slate-800 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative shadow-lg transform hover:scale-105 transition-transform duration-300">
                    <iframe
                        width="100%"
                        height="100%"
                        title="map"
                        className="absolute inset-0"
                        style={{ border: 0, filter: "opacity(0.8)" }} // Adjust map opacity
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83327.3714836787!2d-123.20630438468679!3d49.25781819029102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548673f143a94fb3%3A0xbb9196ea9b81f38b!2sVancouver%2C%20BC!5e0!3m2!1sen!2sca!4v1720933259029!5m2!1sen!2sca"
                    />
                    {/* Address and contact details */}
                    <div className="bg-gray-900 dark:bg-slate-800 relative flex flex-wrap py-6 rounded shadow-md lg:max-w-lg">
                        <div className="lg:w-1/2 px-6">
                            <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                                LOCATED IN
                            </h2>
                            <p className="mt-1 text-white">
                                Vancouver <br />
                                British Columbia, CA
                            </p>
                        </div>
                        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                            <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                                EMAIL
                            </h2>
                            <a href="mailto:zkpAndy@outlook.com" className="text-indigo-400 leading-relaxed">
                                zkpAndy@outlook.com
                            </a>
                            <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                                PHONE
                            </h2>
                            <p className="leading-relaxed text-white">778-682-4437</p>
                        </div>
                    </div>
                </div>

                {/* Contact form */}
                <form
                    name="contact" // Form name for Netlify
                    method="POST"
                    data-netlify="true" // Enable Netlify form handling
                    data-netlify-honeypot="bot-field" // Anti-spam hidden field
                    className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
                >
                     {/* Hidden input to identify the form */}
                    <input type="hidden" name="form-name" value="contact" />
                      {/* Hidden honeypot input */}
                    <input type="hidden" name="bot-field" />
                    <h2 className="text-gray-900 dark:text-gray-200 sm:text-4xl text-3xl mb-1 font-medium title-font">
                        Get in Touch
                    </h2>
                    <p className="leading-relaxed mb-5 dark:text-gray-400 text-lg">
                        Feel free to reach out if you're interested in collaborating on exciting projects, participating in hackathons, or simply having a coffee chat!
                    </p>
                    <div className="relative mb-4">
                        <label htmlFor="name" className="leading-7 text-sm text-gray-900 dark:text-gray-400">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full bg-gray-100 dark:bg-slate-700 rounded border border-gray-300 dark:border-gray-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-900 dark:text-gray-200 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out"
                            value={name}
                            onChange={(e) => setName(e.target.value)} // Update state on input change
                        />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="email" className="leading-7 text-sm text-gray-900 dark:text-gray-400">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full bg-gray-100 dark:bg-slate-700 rounded border border-gray-300 dark:border-gray-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-900 dark:text-gray-200 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} // Update state on input change
                        />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="message" className="leading-7 text-sm text-gray-900 dark:text-gray-400">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            className="w-full bg-gray-100 dark:bg-slate-700 rounded border border-gray-300 dark:border-gray-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-40 text-base outline-none text-gray-900 dark:text-gray-200 py-2 px-4 resize-none leading-6 transition-colors duration-200 ease-in-out"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)} // Update state on input change
                        />
                    </div>
                    <button
                        type="submit" // Submit the form
                        className="text-white bg-indigo-500 border-0 py-3 px-8 focus:outline-none hover:bg-indigo-600 rounded-lg text-lg transition-all duration-300"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </section>
    );
}
