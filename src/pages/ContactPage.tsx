import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";
import Modal from "@/components/ui/Modal";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.full_name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }
      );

      // toast.success("Message sent successfully!");
      setShowModal(true);

      setFormData({
        full_name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Email sending failed:", error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="pt-16 md:py-32 font-sans mt-16">
      <div className="container px-4 mx-auto">
        <div className="mx-auto flex max-w-screen-xl flex-col justify-between gap-10 lg:flex-row lg:gap-20">
          <div className="mx-auto flex flex-col justify-between gap-10 lg:max-w-md">
            <div>
              <h3 className="mb-6 text-2xl font-bold md:text-3xl lg:text-4xl text-left">
                Contact Details
              </h3>
              <ul className="space-y-4 text-lg text-left">
                <li>
                  <span className="font-bold">Email: </span>
                  <a
                    href="mailto:info@bahtaexpress.com"
                    className="underline hover:text-orange-600 transition-colors"
                  >
                    info@bahtaexpress.com
                  </a>
                </li>
                <li>
                  <span className="font-bold">Phone: </span>
                  +251911282956/+251911258790 (24/7 Hotline)
                </li>
                <li>
                  <span className="font-bold">HQ Address: </span>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://maps.app.goo.gl/"
                    className="hover:text-orange-600"
                  >
                    3rd Floor Bethel Bicha Fok Addis Ababa,Ethiopia
                  </a>
                </li>
              </ul>
            </div>

            <div className="text-left">
              <h1 className="mb-4 text-2xl font-bold md:text-3xl lg:text-4xl">
                Contact Us
              </h1>
              <p className="text-muted-foreground text-base lg:text-lg">
                We're here to assist with questions, feedback, or collaboration
                opportunities. Let us know how we can help!
              </p>
            </div>
          </div>

          <div className="w-full max-w-lg mx-auto lg:w-[28rem] p-6 rounded-lg border bg-white">
            <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
              <div className="grid w-full items-center gap-2">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="full_name"
                >
                  Full Name
                </label>
                <Input
                  type="text"
                  id="full_name"
                  name="full_name"
                  value={formData.full_name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="grid w-full items-center gap-2">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="email"
                >
                  Email
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  required
                />
              </div>

              <div className="grid w-full items-center gap-2">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="subject"
                >
                  Subject
                </label>
                <Input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What is this regarding?"
                  required
                />
              </div>

              <div className="grid w-full gap-2">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="message"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Type your message here."
                  rows={5}
                  required
                />
              </div>

              <Button
                aria-label="Send Message"
                type="submit"
                className="w-full bg-orange-600 hover:bg-orange-700"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
      <Modal
        title="Message Sent!"
        message="Thank you for contacting us. We'll respond shortly."
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </section>
  );
}
