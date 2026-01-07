import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

import OtherBusiness from "./pages/Other_business";
import BusinessLayout from "@/components/other_businesses/BusinessLayout";

const queryClient = new QueryClient();

class ErrorBoundary extends React.Component<{
  children: React.ReactNode;
}, { hasError: boolean; error?: Error | null; info?: React.ErrorInfo | null }> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false, error: null, info: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    // You can log the error to an external service here
    this.setState({ error, info });
    // eslint-disable-next-line no-console
    console.error("Uncaught error:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: 20 }}>
          <h1 style={{ color: "red" }}>An error occurred</h1>
          <pre style={{ whiteSpace: "pre-wrap" }}>{String(this.state.error?.stack || this.state.error)}</pre>
          {this.state.info && <pre style={{ whiteSpace: "pre-wrap" }}>{this.state.info.componentStack}</pre>}
        </div>
      );
    }

    return this.props.children as React.ReactElement;
  }
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <ErrorBoundary>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* <Route path="/other-business" element={<OtherBusiness />} /> */}

            {/* Other Business section */}
            <Route path="/other-business" element={<BusinessLayout />}>
              <Route index element={<OtherBusiness />} />
              {/* <Route path="brand" element={<BrandConsulting />} /> */}
              {/* <Route path="3d" element={<Experiences3D />} /> */}
            </Route>

            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ErrorBoundary>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
