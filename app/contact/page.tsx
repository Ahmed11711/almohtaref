import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Contact />

      {/* خريطة جدة */}
      <div className="mt-8 p-4 text-center">
        <h2 className="text-2xl mb-4">موقعنا في جدة على خرائط جوجل</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3623.769139381309!2d39.197968015!3d21.485804015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3c0cddf0e1a3f%3A0xabcdef1234567890!2sJeddah%2C+Saudi+Arabia!5e0!3m2!1sen!2ssa!4v1680000000000!5m2!1sen!2ssa"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <Footer />
    </main>
  );
}
