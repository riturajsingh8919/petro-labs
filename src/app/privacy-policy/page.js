import PageHeader from "@/components/PageHeader";

export const metadata = {
  title: "Privacy Policy | PetroLabs India",
  description: "Privacy Policy for PetroLabs India Pvt. Ltd. Learn how we handle and protect your data.",
};

export default function PrivacyPolicy() {
  return (
    <div className="bg-white">
      <PageHeader tagline="How we protect and manage your data" />
      <div className="container mx-auto px-8 md:px-12 py-16">
        <div className="max-w-4xl mx-auto prose prose-lg prose-blue">
          <h1 className="text-3xl font-black text-gray-900 mb-6">Privacy Policy</h1>
          <p className="text-gray-600 mb-6">Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Information We Collect</h2>
          <p className="text-gray-600 mb-6">
            We collect information that you provide directly to us when using our services, such as when you fill out a contact form, request a quote, apply for a job, or enroll in a training course. This may include your name, email address, phone number, and company details.
          </p>
          
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. How We Use Your Information</h2>
          <p className="text-gray-600 mb-6">
            We use the information we collect to provide, maintain, and improve our services, to process your requests and transactions, and to communicate with you about products, services, offers, and training updates.
          </p>
          
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Data Security</h2>
          <p className="text-gray-600 mb-6">
            We implement appropriate technical and organizational measures to protect your personal information against unauthorized or unlawful processing, accidental loss, destruction, or damage.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Contact Us</h2>
          <p className="text-gray-600 mb-6">
            If you have any questions about this Privacy Policy, please contact us at <a href="mailto:sales@petrolabsindia.com" className="text-primary hover:underline">sales@petrolabsindia.com</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
