import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Seo from '../seo/Seo';

const blogPosts = [
  {
    id: 'jak-wybrac-wegiel-drzewny',
    slug: 'jak-wybrac-wegiel-drzewny',
    titlePL: 'Jak wybrać węgiel drzewny do grilla?',
    titleEN: 'How to choose charcoal for grilling?',
    excerptPL: 'Poznaj różnice między węglem bukowym, dębowym i brzozowym. Dowiedz się, który węgiel najlepiej sprawdzi się do grillowania.',
    excerptEN: 'Learn the differences between beech, oak and birch charcoal. Find out which charcoal works best for grilling.',
    date: '2026-04-10',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80',
    fallbackImage: '/coal_in_bag.webp',
    category: 'Poradnik',
    categoryEN: 'Guide',
    readTime: '5 min',
  },
  {
    id: 'wegiel-vs-bryket',
    slug: 'wegiel-drzewny-vs-bryket',
    titlePL: 'Węgiel drzewny vs brykiet - co wybrać?',
    titleEN: 'Charcoal vs briquettes - which to choose?',
    excerptPL: 'Porównanie węgla drzewnego i brykietu. Zalety, wady i zastosowanie każdego z nich.',
    excerptEN: 'Comparison of charcoal and briquettes. Advantages, disadvantages and uses of each.',
    date: '2026-04-08',
    image: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=800&q=80',
    fallbackImage: '/coal_in_bag.webp',
    category: 'Porównanie',
    categoryEN: 'Comparison',
    readTime: '4 min',
  },
  {
    id: 'najlepszy-wegiel-bbq',
    slug: 'najlepszy-wegiel-do-bbq',
    titlePL: 'Najlepszy węgiel do BBQ w Polsce',
    titleEN: 'Best BBQ charcoal in Poland',
    excerptPL: 'Ranking węgli drzewnych dostępnych w Polsce. Sprawdź, który węgiel zapewni najlepsze rezultaty.',
    excerptEN: 'Ranking of charcoals available in Poland. Check which charcoal will give the best results.',
    date: '2026-04-05',
    image: 'https://images.unsplash.com/photo-1558030006-450675393462?w=800&q=80',
    fallbackImage: '/coal_in_bag.webp',
    category: 'Ranking',
    categoryEN: 'Ranking',
    readTime: '6 min',
  },
];

function Blog() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  const seoData = {
    title: currentLang === 'pl' ? 'Blog - Węgiel Drzewny | VAN SHARE' : 'Blog - Charcoal | VAN SHARE',
    description: currentLang === 'pl'
      ? 'Porady, przewodniki i artykuły o węglu drzewnym. Dowiedz się jak wybrać najlepszy węgiel do grilla.'
      : 'Tips, guides and articles about charcoal. Learn how to choose the best charcoal for grilling.',
  };

  return (
    <>
      <Seo {...seoData} />

      <div className="min-h-screen py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="bg-amber-500/10 text-amber-500 text-sm font-semibold px-4 py-2 rounded-full border border-amber-500/20">
                {currentLang === 'pl' ? '📚 Blog' : '📚 Blog'}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-amber-500 mb-6">
              {currentLang === 'pl' ? 'Blog o Węglu Drzewnym' : 'Charcoal Blog'}
            </h1>

            <p className="text-stone-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              {currentLang === 'pl'
                ? 'Porady ekspertów, przewodniki zakupowe i wszystko co musisz wiedzieć o węglu drzewnym. Odkryj sekrety idealnego grillowania.'
                : 'Expert advice, buying guides and everything you need to know about charcoal. Discover the secrets of perfect grilling.'}
            </p>

            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mt-8"></div>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.slug}`}
                className="group bg-stone-800/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-amber-500/30 transition-all duration-300 hover:-translate-y-2 border border-stone-700/50 hover:border-amber-500/50"
              >
                <article className="h-full flex flex-col">
                  <div className="relative overflow-hidden h-56">
                    <img
                      src={post.image}
                      alt={currentLang === 'pl' ? post.titlePL : post.titleEN}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        e.target.src = post.fallbackImage;
                      }}
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-amber-500 text-stone-900 text-xs font-bold px-3 py-1 rounded-full">
                        {currentLang === 'pl' ? post.category : post.categoryEN}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-3 text-sm text-stone-400 mb-3">
                      <time className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {new Date(post.date).toLocaleDateString(currentLang === 'pl' ? 'pl-PL' : 'en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric'
                        })}
                      </time>
                      <span className="text-stone-600">•</span>
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {post.readTime}
                      </span>
                    </div>

                    <h2 className="text-xl font-bold text-amber-400 mb-3 group-hover:text-amber-300 transition-colors line-clamp-2">
                      {currentLang === 'pl' ? post.titlePL : post.titleEN}
                    </h2>

                    <p className="text-stone-300 mb-4 line-clamp-3 flex-1">
                      {currentLang === 'pl' ? post.excerptPL : post.excerptEN}
                    </p>

                    <div className="flex items-center text-amber-500 group-hover:text-amber-400 font-medium transition-colors mt-auto">
                      <span>{currentLang === 'pl' ? 'Czytaj więcej' : 'Read more'}</span>
                      <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-20 bg-gradient-to-br from-amber-500/10 to-orange-500/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 text-center border border-amber-500/20">
            <div className="max-w-2xl mx-auto">
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-stone-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>

              <h2 className="text-3xl font-bold text-amber-400 mb-4">
                {currentLang === 'pl'
                  ? 'Masz pytania o węgiel drzewny?'
                  : 'Have questions about charcoal?'}
              </h2>

              <p className="text-stone-300 text-lg mb-8">
                {currentLang === 'pl'
                  ? 'Nasz zespat ekspertów chętnie odpowie na wszystkie Twoje pytania i pomoże wybrać idealny węgiel.'
                  : 'Our team of experts will be happy to answer all your questions and help you choose the perfect charcoal.'}
              </p>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-amber-500 hover:bg-amber-600 text-stone-900 font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-amber-500/50"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {currentLang === 'pl' ? 'Skontaktuj się z nami' : 'Contact us'}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blog;
