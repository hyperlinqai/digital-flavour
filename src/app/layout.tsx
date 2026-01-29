import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../index.css';  // Importing global styles (was index.css in Vite structure)
// import { Toaster } from "@/components/ui/toaster"; // Will add later if needed globally
// import { Toaster as Sonner } from "@/components/ui/sonner";

import VideoWidget from '@/components/VideoWidget';
import { WhatsAppButton } from '@/components/WhatsAppButton';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Digital Flavour',
    description: 'Digital Marketing Agency',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={inter.className} suppressHydrationWarning>
                {children}
                <VideoWidget videoUrl="/df video.mp4" />
                <WhatsAppButton />
            </body>
        </html>
    );
}
