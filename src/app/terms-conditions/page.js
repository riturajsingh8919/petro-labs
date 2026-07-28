import PageHeader from "@/components/PageHeader";

export const metadata = {
  title: "Terms & Conditions | PetroLabs India",
  description: "Terms and Conditions of service for PetroLabs India Pvt. Ltd.",
};

export default function TermsConditions() {
  return (
    <div className="bg-white">
      <PageHeader tagline="Guidelines and rules for using our services" />
      <div className="container mx-auto px-8 md:px-12 py-16">
        <div className="max-w-4xl mx-auto prose prose-lg prose-blue">
          <h1 className="text-3xl font-black text-gray-900 mb-6">Terms & Conditions</h1>
          <p className="text-gray-600 mb-6">Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Acceptance of Terms</h2>
          <p className="text-gray-600 mb-6">
            By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
          </p>
          
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Services and Testing</h2>
          <p className="text-gray-600 mb-6">
            PetroLabs India provides laboratory testing and training services. All testing procedures are conducted according to standard industry practices (ASTM, ISO). Turnaround times are estimates and may vary.
          </p>
          
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Intellectual Property</h2>
          <p className="text-gray-600 mb-6">
            All content on this website, including text, graphics, logos, and images, is the property of PetroLabs India or its content suppliers and protected by copyright laws.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Limitation of Liability</h2>
          <p className="text-gray-600 mb-6">
            PetroLabs India shall not be liable for any indirect, incidental, special, consequential or punitive damages resulting from your use of or inability to use our services or website.
          </p>
        </div>
      </div>
    </div>
  );
}
