import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Contact />

      <div className="mt-8 p-4 text-center">
        <h2 className="text-2xl mb-6">مواقعنا على خرائط جوجل</h2>

        {/* جدة */}
        <div className="mb-8">
          <h3 className="text-xl mb-2">جدة</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.1234567890!2d39.197970415!3d21.485810385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3c0abcd123456%3A0xabcdef1234567890!2sJeddah%2C+Saudi+Arabia!5e0!3m2!1sen!2ssa!4v1680000000000!5m2!1sen!2ssa"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* مكة */}
        <div className="mb-8">
          <h3 className="text-xl mb-2">مكة</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3625.1234567890!2d39.857910415!3d21.389090385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3c1abcd123456%3A0xabcdef1234567890!2sMecca%2C+Saudi+Arabia!5e0!3m2!1sen!2ssa!4v1680000000000!5m2!1sen!2ssa"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* الطائف */}
        <div className="mb-8">
          <h3 className="text-xl mb-2">الطائف</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3626.1234567890!2d40.420970415!3d21.270810385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3c2abcd123456%3A0xabcdef1234567890!2sTaif%2C+Saudi+Arabia!5e0!3m2!1sen!2ssa!4v1680000000000!5m2!1sen!2ssa"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <Footer />
    </main>
  );
}
