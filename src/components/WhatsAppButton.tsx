import { MessageCircle } from "lucide-react";

export const WhatsAppButton = () => {
    return (
        <a
            href="https://wa.me/919111268785"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300 animate-in fade-in zoom-in"
            aria-label="Chat on WhatsApp"
        >
            <MessageCircle className="w-8 h-8" fill="currentColor" />
        </a>
    );
};
