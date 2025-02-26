import Image from "next/image";
import { Check } from "lucide-react";

interface Feature {
  id: number;
  text: string;
  description: string;
}

interface FeaturesSectionProps {
  title: string;
  description: string;
  features: Feature[];
  imageSrc: string;
}

const FeaturesSection: React.FC<FeaturesSectionProps> = ({
  title,
  description,
  features,
  imageSrc,
}) => {
  return (
    <section className="w-full md:py-16 py-8 md:px-20 px-10 bg-white flex flex-col md:flex-row items-end justify-between gap-10">
      {/* Text Content */}
      <div className="md:w-" data-aos="fade-right">
        <h2 className="text-3xl md:text-4xl md:text-left text-center font-bold text-primary">
          {title}
        </h2>
        <p
          className="md:max-w-sm md:text-left text-center text-gray-600 mt-4"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          {description}
        </p>

        {/* Bullet Points */}
        <ul className="mt-6 space-y-4">
          {features.map((feature, index) => (
            <li
              key={feature.id}
              className="flex flex-col items-start gap-3"
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`} // Each item animates slightly later
            >
              <div className="flex items-start gap-2">
                <Check className="text-[#319AB5] w-6 h-6 bg-teal-50 rounded-full p-1" />
                <div>
                  <span className="font-semibold">{feature.text}</span>
                  <p className="text-gray-600 max-w-lg text-sm pr-4">
                    {feature.description}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Image Section */}
      <div className="md:w-" data-aos="fade-left">
        <div className="relative">
          <Image
            src={imageSrc}
            alt="Features Overview"
            width={400}
            height={400}
            className=""
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
