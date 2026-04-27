import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <nav className="flex justify-between items-center p-6 bg-white shadow-sm">
        <div className="text-2xl font-bold text-primary">منصتي الرياضية</div>
        <div className="space-x-4 space-x-reverse">
          <Link href="/login" className="px-4 py-2 text-gray-600 hover:text-primary transition">دخول</Link>
          <Link href="/register" className="px-6 py-2 bg-primary text-white rounded-full hover:bg-blue-700 transition">سجل الآن</Link>
        </div>
      </nav>

      <section className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
          مستقبلك الرياضي يبدأ بملف <span className="text-primary">احترافي</span>
        </h1>
        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
          سجل الآن، ارفع بياناتك التقنية، فيديوهاتك، وإحصائياتك لتكون مرئياً للأندية والمدربين حول العالم.
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/register" className="px-8 py-4 bg-primary text-white text-lg rounded-lg shadow-lg hover:bg-blue-700 transition">
            ابدأ إنشاء ملفك
          </Link>
          <button className="px-8 py-4 border border-gray-300 text-gray-700 text-lg rounded-lg hover:bg-gray-50 transition">
            اكتشف المواهب
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">لماذا منصتنا؟</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-blue-100 text-primary rounded-lg flex items-center justify-center mb-4">📊</div>
              <h3 className="text-xl font-bold mb-2">إحصائيات دقيقة</h3>
              <p className="text-gray-600">نظام متطور لتسجيل وتحليل بياناتك التقنية والبدنية بشكل احترافي.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-purple-100 text-secondary rounded-lg flex items-center justify-center mb-4">🎥</div>
              <h3 className="text-xl font-bold mb-2">معرض الوسائط</h3>
              <p className="text-gray-600">ارفع فيديوهات أدائك وصورك الاحترافية لتبرز مهاراتك بشكل أفضل.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center mb-4">🌍</div>
              <h3 className="text-xl font-bold mb-2">وصول عالمي</h3>
              <p className="text-gray-600">ملفك متاح للأندية والوكلاء في أي وقت ومن أي مكان في العالم.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
