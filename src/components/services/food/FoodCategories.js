"use client";

import { LazyMotion, m } from "framer-motion";
import {
  FaPepperHot,
  FaCheese,
  FaDrumstickBite,
  FaWineBottle,
  FaOilCan,
  FaBreadSlice,
} from "react-icons/fa";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";

const loadFeatures = () =>
  import("framer-motion").then((res) => res.domAnimation);

export default function FoodCategories() {
  const categories = [
    {
      title: "Spices & Herbs",
      icon: FaPepperHot,
      description: "Adulteration, pesticides, mycotoxins & quality testing",
      items: [
        "Turmeric",
        "Chili",
        "Black Pepper",
        "Cardamom",
        "Cumin",
        "Coriander",
      ],
      link: "/services/spice-testing",
      color: "primary",
    },
    {
      title: "Milk & Dairy",
      icon: FaCheese,
      description: "Ghee, butter, cheese, yogurt & ice cream analysis",
      items: ["Milk", "Desi Ghee", "Paneer", "Butter", "Cheese", "Ice Cream"],
      link: "/services/dairy-testing",
      color: "secondary",
    },
    {
      title: "Meat & Poultry",
      icon: FaDrumstickBite,
      description: "Freshness, pathogen & antibiotic residue testing",
      items: [
        "Chicken",
        "Mutton",
        "Fish",
        "Seafood",
        "Processed Meat",
        "Sausages",
      ],
      link: "/services/meat-testing",
      color: "accent1",
    },
    {
      title: "Beverages",
      icon: FaWineBottle,
      description: "Soft drinks, juices, alcoholic beverages testing",
      items: [
        "Soft Drinks",
        "Fruit Juices",
        "Beer",
        "Wine",
        "Spirits",
        "Energy Drinks",
      ],
      link: "/services/beverage-testing",
      color: "accent2",
    },
    {
      title: "Edible Oils & Fats",
      icon: FaOilCan,
      description: "Purity, adulteration & fatty acid profile analysis",
      items: [
        "Cooking Oil",
        "Ghee",
        "Vanaspati",
        "Butter",
        "Margarine",
        "Shortening",
      ],
      link: "/services/oil-testing",
      color: "primary",
    },
    {
      title: "Bakery & Confectionery",
      icon: FaBreadSlice,
      description: "Bread, biscuits, cakes, chocolates & sweets testing",
      items: [
        "Bread",
        "Biscuits",
        "Cakes",
        "Chocolates",
        "Candies",
        "Pastries",
      ],
      link: "/services/bakery-testing",
      color: "secondary",
    },
  ];

  const colorClasses = {
    primary: {
      bg: "bg-primary/10",
      icon: "text-primary",
      border: "border-primary/20",
      hover: "hover:border-primary",
    },
    secondary: {
      bg: "bg-secondary/10",
      icon: "text-secondary",
      border: "border-secondary/20",
      hover: "hover:border-secondary",
    },
    accent1: {
      bg: "bg-accent1/10",
      icon: "text-accent1",
      border: "border-accent1/20",
      hover: "hover:border-accent1",
    },
    accent2: {
      bg: "bg-accent2/10",
      icon: "text-accent2",
      border: "border-accent2/20",
      hover: "hover:border-accent2",
    },
  };

  return (
    <LazyMotion features={loadFeatures} strict>
      <section className="mb-14">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
            Food Categories We Test
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Comprehensive testing services across all major food product
            categories
          </p>
        </m.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            const colors = colorClasses[category.color];

            return (
              <m.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`bg-white rounded-2xl p-6 shadow-lg border-2 ${colors.border} ${colors.hover} hover:shadow-xl transition-all group`}
              >
                <div
                  className={`w-16 h-16 ${colors.bg} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <Icon className={`w-8 h-8 ${colors.icon}`} />
                </div>

                <h3 className="text-xl font-black text-gray-900 mb-2">
                  {category.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {category.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {category.items.slice(0, 4).map((item, idx) => (
                    <span
                      key={idx}
                      className={`px-3 py-1 ${colors.bg} ${colors.icon} text-xs font-bold rounded-lg`}
                    >
                      {item}
                    </span>
                  ))}
                  {category.items.length > 4 && (
                    <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-bold rounded-lg">
                      +{category.items.length - 4} more
                    </span>
                  )}
                </div>

                <Link
                  href={category.link}
                  className={`inline-flex items-center gap-2 ${colors.icon} font-bold text-sm group-hover:gap-3 transition-all`}
                >
                  Learn More
                  <HiArrowRight className="w-4 h-4" />
                </Link>
              </m.div>
            );
          })}
        </div>

        {/* Additional Categories */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-gray-50 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-black text-gray-900 mb-6 text-center">
            Additional Food Categories
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              "Cereals & Pulses",
              "Nuts & Dry Fruits",
              "Fruits & Vegetables",
              "Baby Foods",
              "Coconut Products",
              "Coffee & Tea",
              "Starch Products",
              "Food Additives",
              "Preservatives",
              "Vegan Foods",
              "Canned Foods",
              "Tobacco Products",
            ].map((item, idx) => (
              <m.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.03 }}
                className="flex items-center gap-2 bg-white rounded-lg p-3 shadow-sm hover:shadow-md transition-all"
              >
                <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
                <span className="text-gray-700 text-sm font-medium">
                  {item}
                </span>
              </m.div>
            ))}
          </div>
        </m.div>
      </section>
    </LazyMotion>
  );
}
