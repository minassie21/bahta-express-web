import React, { useEffect, useState } from "react";

import { getClients } from "@/apis/client";

interface Client {
  logo: string;
  name?: string;
}

const OurClients: React.FC = () => {
  const [clients, setClients] = useState<Client[]>([]);

  useEffect(() => {
    const fetchClients = async () => {
      const data = await getClients();
      setClients(data);
    };

    fetchClients();
  }, []);

  if (!clients.length) return null;

  return (
    <section className="py-16 bg-[#F9FAFB]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
            Our Clients
          </h2>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6">
          {clients.map((client, index) => (
            <div
              key={index}
              className="w-[130px] h-[85px] flex items-center justify-center  p-2 shadow-sm rounded transition-transform duration-300 hover:scale-105"
              data-aos="fade-in"
              data-aos-delay={index * 100}
              data-aos-duration="1200"
            >
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img
                  src={`${import.meta.env.VITE_API_URL}/public/uploads/images/ClientLogos/${client.logo}`}
                  alt={client.name || `Client ${index + 1}`}
                  className="max-w-full max-h-full object-contain"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurClients;
