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
    image: '/coal_in_bag.webp',
  },
  {
    id: 'wegiel-vs-bryket',
    slug: 'wegiel-drzewny-vs-bryket',
    titlePL: 'Węgiel drzewny vs brykiet - co wybrać?',
    titleEN: 'Charcoal vs briquettes - which to choose?',
    excerptPL: 'Porównanie węgla drzewnego i brykietu. Zalety, wady i zastosowanie każdego z nich.',
    excerptEN: 'Comparison of charcoal and briquettes. Advantages, disadvantages and uses of each.',
    date: '2026-04-08',
    image: '/coal_in_bag.webp',
  },
  {
    id: 'najlepszy-wegiel-bbq',
    slug: 'najlepszy-wegiel-do-bbq',
    titlePL: 'Najlepszy węgiel do BBQ w Polsce',
    titleEN: 'Best BBQ charcoal in Poland',
    excerptPL: 'Ranking węgli drzewnych dostępnych w Polsce. Sprawdź, który węgiel zapewni najlepsze rezultaty.',
    excerptEN: 'Ranking of charcoals available in Poland. Check which charcoal will give the best results.',
    date: '2026-04-05',
    image: '/coal_in_bag.webp',
  },
];

function Blog() {
  const { t, i18n } = useTranslation();
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

      <div className="min-h-screen bg-gradient-to-b from-stone-900 via-stone-800 to-stone-900 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-amber-500 mb-4 text-center">
            {currentLang === 'pl' ? 'Blog o Węglu Drzewnym' : 'Charcoal Blog'}
          </h1>
          <p className="text-stone-300 text-center mb-12 max-w-2xl mx-auto">
            {currentLang === 'pl'
              ? 'Porady ekspertów, przewodniki zakupowe i wszystko co musisz wiedzieć o węglu drzewnym'
              : 'Expert advice, buying guides and everything you need to know about charcoal'}
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-stone-800 rounded-lg overflow-hidden shadow-lg hover:shadow-amber-500/20 transition-all duration-300 hover:-translate-y-1"
              >
                <img
                  src={post.image}
                  alt={currentLang === 'pl' ? post.titlePL : post.titleEN}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <time className="text-sm text-stone-400 mb-2 block">
                    {new Date(post.date).toLocaleDateString(currentLang === 'pl' ? 'pl-PL' : 'en-US')}
                  </time>
                  <h2 className="text-xl font-semibold text-amber-400 mb-3">
                    {currentLang === 'pl' ? post.titlePL : post.titleEN}
                  </h2>
                  <p className="text-stone-300 mb-4 line-clamp-3">
                    {currentLang === 'pl' ? post.excerptPL : post.excerptEN}
                  </p>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center text-amber-500 hover:text-amber-400 font-medium transition-colors"
                  >
                    {currentLang === 'pl' ? 'Czytaj więcej' : 'Read more'}
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-stone-400 mb-4">
              {currentLang === 'pl'
                ? 'Masz pytania o węgiel drzewny?'
                : 'Have questions about charcoal?'}
            </p>
            <Link
              to="/contact"
              className="inline-block bg-amber-500 hover:bg-amber-600 text-stone-900 font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              {currentLang === 'pl' ? 'Skontaktuj się z nami' : 'Contact us'}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blog;
