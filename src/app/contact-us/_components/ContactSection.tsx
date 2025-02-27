import { Mail, MapPin, MessageSquare, Phone } from "lucide-react";

const contactDetails = [
  {
    title: "Chat with Team",
    description: "Speak to our friendly team.",
    icon: <MessageSquare className="text-primary w-6 h-6" />,
    contact: "Team@mooreui.com",
  },
  {
    title: "Mail for Support",
    description: "We're here to help.",
    icon: <Mail className="text-primary w-6 h-6" />,
    contact: "Team@mooreui.com",
  },
  {
    title: "Visit Us",
    description: "Visit our office HQ.",
    icon: <MapPin className="text-primary w-6 h-6" />,
    contact: "Team@mooreui.com",
  },
  {
    title: "Call Us",
    description: "Mon-Fri from 8am to 5pm",
    icon: <Phone className="text-primary w-6 h-6" />,
    contact: "08023994499",
  },
];

function ContactCard({ title, description, icon, contact }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col gap-2 items-start">
      <div className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-md">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
      <a
        href={contact.includes("@") ? `mailto:${contact}` : `tel:${contact}`}
        className="text-primary text-sm font-medium"
      >
        {contact}
      </a>
    </div>
  );
}

export default function ContactSection() {
  return (
    <section className="w-full py-16">
      <div className="max-w-6xl mx-auto px-6 md:px-12 text-center">
        <h2 className="text-3xl font-semibold text-gray-900">
          Contact our friendly team
        </h2>
        <p className="text-gray-600 mt-2">Let us know how we can help.</p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactDetails.map((detail, index) => (
            <ContactCard key={index} {...detail} />
          ))}
        </div>
      </div>
    </section>
  );
}
