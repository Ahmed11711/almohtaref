import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Contact />

      {/* روابط جوجل ماب للمدن */}
      <div className="mt-8 p-4 text-center">
        <h2 className="text-2xl mb-4">مواقعنا على خرائط جوجل</h2>
        <ul className="space-y-2">
          <li>
            <a
              href="https://goo.gl/maps/your-jeddah-link"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 underline"
            >
              جدة
            </a>
          </li>
          <li>
            <a
              href="https://goo.gl/maps/your-makkah-link"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 underline"
            >
              مكة
            </a>
          </li>
          <li>
            <a
              href="https://goo.gl/maps/your-taif-link"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 underline"
            >
              الطائف
            </a>
          </li>
        </ul>
      </div>

      <Footer />
    </main>
  );
}
