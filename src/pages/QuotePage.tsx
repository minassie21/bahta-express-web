import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { sendQuote } from "@/apis/quote";
import { getServices } from "@/apis/services";

export default function QuotePage() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    service_list: [] as { service_id: string; name: string }[],
    origin_address: "",
    destination_address: "",
    weight_kg: "",
    dimensions: "",
    number_of_pieces: "",
    commodity: "",
    additional_info: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [services, setServices] = useState<
    { service_id: string; service_name: string }[]
  >([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await getServices();
        setServices(res);
      } catch (err) {
        console.error("Failed to load services", err);
      }
    };

    fetchServices();
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

  const handleCheckboxChange = (service: {
    service_id: string;
    service_name: string;
  }) => {
    setFormData((prev) => {
      const exists = prev.service_list.some(
        (s) => s.service_id === service.service_id
      );
      return {
        ...prev,
        service_list: exists
          ? prev.service_list.filter((s) => s.service_id !== service.service_id)
          : [
              ...prev.service_list,
              { service_id: service.service_id, name: service.service_name },
            ],
      };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Prepare the payload for the backend
    const quoteData = {
      first_name: formData.first_name,
      last_name: formData.last_name,
      email: formData.email,
      phone_number: formData.phone_number,
      origin_address: formData.origin_address,
      destination_address: formData.destination_address,
      weight_kg: formData.weight_kg,
      dimensions: formData.dimensions,
      number_of_pieces: formData.number_of_pieces,
      commodity: formData.commodity,
      additional_info: formData.additional_info,
      service_list: formData.service_list,
    };
    if (formData.service_list.length === 0) {
      toast.error("Please select at least one service type.");
      return;
    }
    try {
      setIsSubmitting(true);
      await sendQuote(quoteData);

      toast.success("Quote request submitted!");
      setFormData({
        first_name: "",
        last_name: "",
        email: "",
        phone_number: "",
        service_list: [],
        origin_address: "",
        destination_address: "",
        weight_kg: "",
        dimensions: "",
        number_of_pieces: "",
        commodity: "",
        additional_info: "",
      });
    } catch (error) {
      toast.error("There was an issue submitting the quote.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="pt-16 md:py-32 font-sans mt-16">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="text-center mb-10"
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Get a Quote</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Complete the form below to request a custom quote for your
              logistics needs. Our team will review your requirements and
              provide you with a detailed estimate.
            </p>
          </motion.div>

          <div className="relative bg-white p-6 mb-8 md:p-8 rounded-lg border shadow-sm overflow-hidden">
            {/* decorative background */}
            <div className="absolute top-2 left-16 w-64 h-64 rounded-full bg-orange-500 opacity-30 z-0"></div>
            <div className="absolute top-20 left-6 w-64 h-64 rounded-full bg-blue-500 opacity-30 z-0"></div>
            <div className="absolute top-10 right-20 w-64 h-64 rounded-full bg-orange-500 opacity-30 z-0"></div>
            <div className="absolute top-60 right-40 w-64 h-64 rounded-full bg-red-500 opacity-30 z-0"></div>
            <div className="absolute bottom-60 left-40 w-64 h-64 rounded-full bg-red-500 opacity-30 z-0"></div>
            <div className="absolute bottom-24 right-40 w-96 h-64 rounded-full bg-pink-500 opacity-30 z-0"></div>

            {/* Semi-transparent background with blur */}
            <div className="absolute inset-0 backdrop-blur-2xl bg-white/80 z-10 rounded-lg"></div>

            <form
              className="relative flex flex-col gap-6 z-20"
              onSubmit={handleSubmit}
            >
              {/* Personal Information */}
              <div className="space-y-4">
                <h2 className="text-xl font-semibold pb-2 border-b">
                  Personal Information
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      name="first_name"
                      value={formData.first_name}
                      onChange={handleChange}
                      placeholder="Enter your first name"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      name="last_name"
                      value={formData.last_name}
                      onChange={handleChange}
                      placeholder="Enter your last name"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
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

                  <div className="space-y-2">
                    <Label htmlFor="phoneNumber">Phone Number</Label>
                    <Input
                      id="phoneNumber"
                      name="phone_number"
                      value={formData.phone_number}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Service Types */}
              <div className="space-y-4">
                <h2 className="text-xl font-semibold pb-2 border-b">
                  Service Types
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {services.map((service) => (
                    <div
                      key={service.service_id}
                      className="flex items-center space-x-2"
                    >
                      <input
                        type="checkbox"
                        id={service.service_id}
                        checked={formData.service_list.some(
                          (s) => s.service_id === service.service_id
                        )}
                        onChange={() => handleCheckboxChange(service)}
                        className="h-4 w-4 text-orange-500 border-gray-300 rounded focus:ring-orange-500"
                      />
                      <Label
                        htmlFor={service.service_id}
                        className="cursor-pointer"
                      >
                        {service.service_name}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Shipping Details */}
              <div className="space-y-4">
                <h2 className="text-xl font-semibold pb-2 border-b">
                  Shipping Details
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="originAddress">
                      Origin Address/Country
                    </Label>
                    <Input
                      id="originAddress"
                      name="origin_address"
                      value={formData.origin_address}
                      onChange={handleChange}
                      placeholder="Where is the shipment from?"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="destinationAddress">
                      Destination Address/Country
                    </Label>
                    <Input
                      id="destinationAddress"
                      name="destination_address"
                      value={formData.destination_address}
                      onChange={handleChange}
                      placeholder="Where is the shipment going to?"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Cargo Details */}
              <div className="space-y-4">
                <h2 className="text-xl font-semibold pb-2 border-b">
                  Cargo Details
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="weight">Weight (kg)</Label>
                    <Input
                      id="weight"
                      name="weight_kg"
                      value={formData.weight_kg}
                      onChange={handleChange}
                      placeholder="Estimated weight"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="dimensions">Dimensions (LxWxH)</Label>
                    <Input
                      id="dimensions"
                      name="dimensions"
                      value={formData.dimensions}
                      onChange={handleChange}
                      placeholder="e.g., 100x50x75 cm"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="numberOfPieces">Number of Pieces</Label>
                    <Input
                      id="numberOfPieces"
                      name="number_of_pieces"
                      value={formData.number_of_pieces}
                      onChange={handleChange}
                      placeholder="How many items?"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="commodity">Commodity</Label>
                  <Input
                    id="commodity"
                    name="commodity"
                    value={formData.commodity}
                    onChange={handleChange}
                    placeholder="What type of goods are you shipping?"
                    required
                  />
                </div>
              </div>

              {/* Additional Information */}
              <div className="space-y-2">
                <Label htmlFor="additionalInfo">Additional Information</Label>
                <Textarea
                  id="additionalInfo"
                  name="additional_info"
                  value={formData.additional_info}
                  onChange={handleChange}
                  placeholder="Please provide any additional details relevant to your shipment."
                  rows={4}
                />
              </div>

              <Button
                aria-label="Request Quote"
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-orange-600 hover:bg-orange-700 mt-4 text-lg py-6"
              >
                {isSubmitting ? "Submitting..." : "Request a Quote"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
