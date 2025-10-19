import { useEffect, useState } from "react";

const BackToTop: React.FC = () => {
  const [showBackToTop, setShowBackToTop] = useState<boolean>(false);

  const topFunction = (): void => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openWhatsApp = (): void => {
    const phoneNumber = "251911282956";
    const message = "Hello! I’d like to know more about your services.";
    const encodedMessage = encodeURIComponent(message);
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodedMessage}`,
      "_blank"
    );
  };

  useEffect(() => {
    const handleScroll = (): void => {
      setShowBackToTop(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed bottom-10 right-5 flex flex-col items-center gap-3 z-[1000]">
      {showBackToTop && (
        <button
          onClick={topFunction}
          className="flex justify-center items-center rounded-full bg-[#F97316] w-12 h-12 shadow-md hover:scale-105 transition-transform duration-200"
          aria-label="Back to top"
        >
          {/* Up Arrow SVG */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 15l7-7 7 7"
            />
          </svg>
        </button>
      )}

      <button
        onClick={openWhatsApp}
        className="flex justify-center items-center rounded-full bg-green-500 w-12 h-12 shadow-md hover:scale-105 transition-transform duration-200"
        aria-label="WhatsApp"
      >
        {/* WhatsApp SVG */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M16.72 14.81c-.27-.14-1.62-.8-1.87-.89-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.14-.42-2.17-1.33-.8-.71-1.33-1.59-1.49-1.86-.16-.27-.02-.42.12-.56.13-.13.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.46-.83-2-.22-.53-.44-.46-.61-.47-.16-.01-.34-.01-.52-.01-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.29 0 1.35.98 2.66 1.12 2.84.14.18 1.93 2.95 4.68 4.14.65.28 1.15.44 1.54.56.65.21 1.24.18 1.7.11.52-.08 1.62-.66 1.85-1.29.23-.63.23-1.17.16-1.29-.07-.12-.25-.18-.52-.32z" />
          <path d="M12 2C6.48 2 2 6.27 2 11.72c0 2.03.63 3.91 1.7 5.48L2 22l5-1.64c1.5.82 3.21 1.28 5 1.28 5.52 0 10-4.27 10-9.72S17.52 2 12 2zm0 17.64c-1.49 0-2.93-.39-4.19-1.13l-.3-.18-2.97.97.98-2.88-.19-.3a8.02 8.02 0 01-1.29-4.4C4.04 7.56 7.63 4 12 4s7.96 3.56 7.96 7.72S16.37 19.64 12 19.64z" />
        </svg>
      </button>
    </div>
  );
};

export default BackToTop;
