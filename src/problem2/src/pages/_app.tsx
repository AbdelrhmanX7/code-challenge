import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "@/components/ui/toaster";
import "@/styles/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import { Space_Mono } from "next/font/google";

const montserrat = Space_Mono({
  subsets: ["latin"],
  variable: "--font-space-mono",
  display: "block",
  weight: "400",
});

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        disableTransitionOnChange
      >
        <main className={`${montserrat.className}`}>
          <Component {...pageProps} />
          <Toaster />
        </main>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
