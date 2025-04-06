import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Get recipient email from the contact details in the page
    const recipient = "info@bahtaexpress.com";

    // Prepare email content with URL encoding for special characters
    const subject = encodeURIComponent(formData.subject);
    const body = encodeURIComponent(
      `Name: ${formData.fullName}\nEmail: ${formData.email}\n\n${formData.message}`
    );

    // Open default email client with pre-filled information
    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;

    // Show success toast
    toast.success("Opening your default email client...");

    // Reset form data
    setFormData({
      fullName: "",
      email: "",
      subject: "",
      message: "",
    });
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
                  htmlFor="fullName"
                >
                  Full Name
                </label>
                <Input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
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
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
