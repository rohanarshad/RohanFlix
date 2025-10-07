import { Form } from "react-router-dom";

export const contactData = async ({ request }) => {
  try {
    const res = await request.formData();
    const data = Object.fromEntries(res);
    console.log(data);
    return null;
  } catch (error) {
    console.log(error);
  }
};

export const Contact = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center py-12 px-6">
      <div className="w-full max-w-4xl">
        {/* Heading */}
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Contact Us</h2>
        <p className="text-gray-600 mb-8">
          Get in touch with us. We are always here to help you.
        </p>

        {/* Form */}
        <Form method="POST" action="/contact" className="space-y-6">
          {/* Full Name */}
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Full Name
            </label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Enter Full Name"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-red-500 focus:outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Abc@Rohan.Com"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-red-500 focus:outline-none"
            />
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Message
            </label>
            <textarea
              rows="10"
              cols="30"
              name="message"
              id="message"
              placeholder="We Are Always Here To Help You."
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-red-500 focus:outline-none"
            ></textarea>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="bg-red-600 text-white font-medium px-6 py-2 rounded-md hover:bg-red-700 transition"
          >
            Send Message
          </button>
        </Form>
      </div>
    </div>
  );
};
