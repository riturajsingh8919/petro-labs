"use client";

import { LazyMotion, m } from "framer-motion";
import { HiMapPin } from "react-icons/hi2";

const loadFeatures = () =>
  import("framer-motion").then((res) => res.domAnimation);

export default function LocationMap() {
  return (
    <LazyMotion features={loadFeatures} strict>
      <section id="map" className="container mx-auto px-8 md:px-12 py-16">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl xl:text-5xl font-black leading-tight mb-6 text-gray-900">
            Visit Our <span className="text-primary">Laboratory</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Located in Kukatpally, Hyderabad - Our NABL-accredited facility is
            easily accessible
          </p>
        </m.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Map */}
          <div className="lg:col-span-2">
            <m.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-gray-100 h-[500px]"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.4784323763515!2d78.42287627504916!3d17.48466048341913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb918be0a4c73f%3A0xcdbcbcc8effc8516!2sPetrolabs%20India%20Private%20Ltd!5e0!3m2!1sen!2sin!4v1764661983589!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Petrolabs India Location"
              ></iframe>
            </m.div>
          </div>

          {/* Address Card */}
          <div className="flex flex-col gap-6">
            <m.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-xl border-2 border-gray-100 flex-1"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <HiMapPin className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-4">
                Our Address
              </h3>
              <div className="space-y-2 text-gray-700 leading-relaxed">
                <p className="font-bold text-gray-900">
                  Petrolabs India Pvt. Ltd.
                </p>
                <p>Building No. 5-36/1/11-A</p>
                <p>Plot No. 11-A, 3rd Floor</p>
                <p>TSIIC, IALA, Prashanth Nagar</p>
                <p>Kukatpally, Hyderabad</p>
                <p>Telangana 500072</p>
              </div>
            </m.div>

            <m.a
              href="https://maps.app.goo.gl/uiVhqUZyW6Rck5B37"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-primary text-white px-6 py-4 rounded-xl font-bold text-center shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-3"
            >
              <HiMapPin className="w-5 h-5" />
              Get Directions
            </m.a>
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}
