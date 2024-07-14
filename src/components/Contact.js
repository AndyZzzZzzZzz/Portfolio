import React from 'react';

// Define and export the Contact functional component
export default function Contact() {

    // State initialization for name, email, and message input fields
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [message, setMessage] = React.useState("");

    // Encoding function to convert an object into a URL encoded string
    function encode(data) {
        return Object.keys(data)
        .map(
            (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
        )
        .join("&");
    }

    // Function to handle form submission
    function handleSubmit(e) {
        // Prevent the default form submission behavior
        e.preventDefault();

        // Use the fetch function to send a POST request to the server with the form data encoded
        fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", name, email, message }),
        })
        // If submission is successful, show a success message
        .then(() => alert("Message sent!"))
        // If there's an error, show an error message
        .catch((error) => alert(error));
    }

    // Return a JSX structure defining the layout and content of the contact form section
    return (

        // Main section with id 'contact', white background, gray text, full-screen height, flexbox for centering, and padding
        <section id="contact" className="relative bg-white text-gray-900 min-h-screen flex items-center justify-center p-10 pt-24">
        <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
             {/* Google Maps iframe to display a map of a specific location */}
            <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe
                width="100%"
                height="100%"
                title="map"
                className="absolute inset-0"
                style={{ border: 0, filter: "opacity(0.7)" }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83327.3714836787!2d-123.20630438468679!3d49.25781819029102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548673f143a94fb3%3A0xbb9196ea9b81f38b!2sVancouver%2C%20BC!5e0!3m2!1sen!2sca!4v1720933259029!5m2!1sen!2sca" 
            />
            {/* Container holding the address and contact information */}
            <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
                <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                    ADDRESS
                </h2>
                <p className="mt-1 text-white">
                    Vancouver <br />
                    British Columnbia, CA
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
            netlify
            name="contact"
            onSubmit={handleSubmit}
            className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <h2 className="text-gray-900 sm:text-4xl text-3xl mb-1 font-medium title-font">
                Get in Touch
            </h2>
            <p className="leading-relaxed mb-5">
            Feel free to reach out if you're interested in collaborating on exciting projects, participating in hackathons, or simply having a coffee chat!
            </p>
            <div className="relative mb-4">
                <label htmlFor="name" className="leading-7 text-sm text-gray-900">
                Name
                </label>
                <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className="relative mb-4">
                <label htmlFor="email" className="leading-7 text-sm text-gray-900">
                Email
                </label>
                <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="relative mb-4">
                <label
                htmlFor="message"
                className="leading-7 text-sm text-gray-900">
                Message
                </label>
                <textarea
                id="message"
                name="message"
                className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-900 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                onChange={(e) => setMessage(e.target.value)}
                />
            </div>
            <button
                type="submit"
                className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Submit
            </button>
            </form>
        </div>
        </section>
    );
    }
