import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import Button from "../ui/Button";
import { useForm } from "react-hook-form";

function ContactUs() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    console.log("Contact form data:", data);
    // TODO: Send contact message to backend
    alert("Thank you for your message! We'll get back to you soon.");
    reset();
  };

  return (
    <div className="min-h-screen py-12 sm:py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-orange-500 mb-4">
            Get In Touch
          </h1>
          <p className="text-stone-400 text-base sm:text-lg max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and
            we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {/* Contact Information */}
          <div className="space-y-6 order-2 md:order-1">
            <div className="bg-linear-to-br from-stone-900/90 to-stone-900/50 backdrop-blur-sm rounded-3xl shadow-2xl border border-stone-800/50 p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-orange-500 mb-6">
                Contact Information
              </h2>

              <div className="space-y-5 sm:space-y-6">
                {/* Email */}
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="bg-orange-500/10 p-2 sm:p-3 rounded-lg shrink-0">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-stone-200 font-semibold mb-1 text-sm sm:text-base">
                      Email
                    </h3>
                    <a
                      href="mailto:skullvisit@gmail.com"
                      className="text-stone-400 hover:text-orange-500 transition-colors text-sm sm:text-base break-all"
                    >
                      vanshare1@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="bg-orange-500/10 p-2 sm:p-3 rounded-lg shrink-0">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-stone-200 font-semibold mb-1 text-sm sm:text-base">
                      Phone
                    </h3>
                    <a
                      href="tel:+48123456789"
                      className="text-stone-400 hover:text-orange-500 transition-colors text-sm sm:text-base"
                    >
                      +48 123 456 789
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="bg-orange-500/10 p-2 sm:p-3 rounded-lg shrink-0">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-stone-200 font-semibold mb-1 text-sm sm:text-base">
                      Address
                    </h3>
                    <p className="text-stone-400 text-sm sm:text-base">
                      Polkowice, Poland
                      <br />
                      DAP Delivery Available
                    </p>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="bg-orange-500/10 p-2 sm:p-3 rounded-lg shrink-0">
                    <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-stone-200 font-semibold mb-1 text-sm sm:text-base">
                      Business Hours
                    </h3>
                    <p className="text-stone-400 text-sm sm:text-base">
                      Monday - Friday: 9:00 AM - 6:00 PM
                      <br />
                      Saturday: 10:00 AM - 4:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Info */}
            <div className="bg-linear-to-br from-orange-500/10 to-amber-600/5 border-2 border-orange-500/30 rounded-2xl p-5 sm:p-6">
              <h3 className="text-base sm:text-lg font-bold text-orange-500 mb-3">
                Why Choose Us?
              </h3>
              <ul className="space-y-2 text-stone-300 text-xs sm:text-sm">
                <li className="flex items-center gap-2">
                  <span className="text-orange-500 shrink-0">✓</span>
                  Premium quality charcoal
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-orange-500 shrink-0">✓</span>
                  Competitive wholesale prices
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-orange-500 shrink-0">✓</span>
                  Free delivery included
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-orange-500 shrink-0">✓</span>
                  Reliable customer support
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-linear-to-br from-stone-900/90 to-stone-900/50 backdrop-blur-sm rounded-3xl shadow-2xl border border-stone-800/50 p-6 sm:p-8 order-1 md:order-2">
            <h2 className="text-xl sm:text-2xl font-bold text-orange-500 mb-6">
              Send Us a Message
            </h2>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-4 sm:space-y-5"
            >
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-stone-300 mb-2"
                >
                  Your Name
                </label>
                <input
                  {...register("name", { required: "Name is required" })}
                  type="text"
                  id="name"
                  placeholder="Enter your name..."
                  className="w-full bg-stone-950/50 border-2 border-stone-800 rounded-xl px-4 py-3 text-white placeholder-stone-500 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all text-sm sm:text-base"
                />
                {errors.name && (
                  <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                    ⚠ {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-stone-300 mb-2"
                >
                  Email Address
                </label>
                <input
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  type="email"
                  id="email"
                  placeholder="Enter your email..."
                  className="w-full bg-stone-950/50 border-2 border-stone-800 rounded-xl px-4 py-3 text-white placeholder-stone-500 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all text-sm sm:text-base"
                />
                {errors.email && (
                  <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                    ⚠ {errors.email.message}
                  </p>
                )}
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-stone-300 mb-2"
                >
                  Subject
                </label>
                <input
                  {...register("subject", { required: "Subject is required" })}
                  type="text"
                  id="subject"
                  placeholder="How can we help you?"
                  className="w-full bg-stone-950/50 border-2 border-stone-800 rounded-xl px-4 py-3 text-white placeholder-stone-500 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all text-sm sm:text-base"
                />
                {errors.subject && (
                  <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                    ⚠ {errors.subject.message}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-stone-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  {...register("message", {
                    required: "Message is required",
                    minLength: {
                      value: 10,
                      message: "Message must be at least 10 characters",
                    },
                  })}
                  id="message"
                  rows="5"
                  placeholder="Tell us more about your inquiry..."
                  className="w-full bg-stone-950/50 border-2 border-stone-800 rounded-xl px-4 py-3 text-white placeholder-stone-500 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all resize-none text-sm sm:text-base"
                ></textarea>
                {errors.message && (
                  <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                    ⚠ {errors.message.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <Button
                  type="primary"
                  className="w-full flex items-center justify-center gap-2"
                >
                  <Send size={18} />
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
