import { useTranslation } from 'react-i18next';
import { useParams, Link } from 'react-router-dom';
import Seo from '../seo/Seo';
import { BreadcrumbSchema } from '../components/SchemaOrg';

const blogArticles = {
  'jak-wybrac-wegiel-drzewny': {
    titlePL: 'Jak wybrać węgiel drzewny do grilla?',
    titleEN: 'How to choose charcoal for grilling?',
    date: '2026-04-10',
    contentPL: `
      <h2>Rodzaje węgla drzewnego</h2>
      <p>Na rynku dostępne są różne rodzaje węgla drzewnego, które różnią się właściwościami i zastosowaniem:</p>

      <h3>1. Węgiel bukowy</h3>
      <p>Węgiel z drewna bukowego to najwyższa jakość. Charakteryzuje się:</p>
      <ul>
        <li>Długim czasem palenia (3-4 godziny)</li>
        <li>Wysoką temperaturą spalania (do 800°C)</li>
        <li>Minimalną ilością dymu</li>
        <li>Neutralnym zapachem</li>
      </ul>

      <h3>2. Węgiel dębowy</h3>
      <p>Doskonały do długiego grillowania. Zalety:</p>
      <ul>
        <li>Bardzo długi czas palenia</li>
        <li>Stabilna temperatura</li>
        <li>Lekko aromatyczny dym</li>
      </ul>

      <h3>3. Węgiel brzozowy</h3>
      <p>Ekonomiczna opcja, idealna do szybkiego grillowania:</p>
      <ul>
        <li>Szybkie rozpalanie</li>
        <li>Krótszy czas palenia</li>
        <li>Niższa cena</li>
      </ul>

      <h2>Na co zwrócić uwagę przy zakupie?</h2>
      <ul>
        <li><strong>Wielkość kawałków:</strong> Większe kawałki = dłuższe palenie</li>
        <li><strong>Wilgotność:</strong> Suchy węgiel pali się lepiej</li>
        <li><strong>Certyfikaty:</strong> FSC, PEFC gwarantują jakość</li>
        <li><strong>Pochodzenie:</strong> Polski węgiel = krótsza droga transportu</li>
      </ul>

      <h2>Podsumowanie</h2>
      <p>Dla większości zastosowań najlepszym wyborem jest węgiel bukowy. Zapewnia optymalny balans między czasem palenia, temperaturą i ceną.</p>
    `,
    contentEN: `
      <h2>Types of charcoal</h2>
      <p>There are different types of charcoal available on the market, which differ in properties and application:</p>

      <h3>1. Beech charcoal</h3>
      <p>Beech wood charcoal is the highest quality. It is characterized by:</p>
      <ul>
        <li>Long burning time (3-4 hours)</li>
        <li>High combustion temperature (up to 800°C)</li>
        <li>Minimal smoke</li>
        <li>Neutral smell</li>
      </ul>

      <h3>2. Oak charcoal</h3>
      <p>Excellent for long grilling. Advantages:</p>
      <ul>
        <li>Very long burning time</li>
        <li>Stable temperature</li>
        <li>Slightly aromatic smoke</li>
      </ul>

      <h3>3. Birch charcoal</h3>
      <p>Economical option, ideal for quick grilling:</p>
      <ul>
        <li>Quick ignition</li>
        <li>Shorter burning time</li>
        <li>Lower price</li>
      </ul>

      <h2>What to look for when buying?</h2>
      <ul>
        <li><strong>Piece size:</strong> Larger pieces = longer burning</li>
        <li><strong>Moisture:</strong> Dry charcoal burns better</li>
        <li><strong>Certificates:</strong> FSC, PEFC guarantee quality</li>
        <li><strong>Origin:</strong> Polish charcoal = shorter transport route</li>
      </ul>

      <h2>Summary</h2>
      <p>For most applications, beech charcoal is the best choice. It provides an optimal balance between burning time, temperature and price.</p>
    `,
  },
  'wegiel-drzewny-vs-bryket': {
    titlePL: 'Węgiel drzewny vs brykiet - co wybrać?',
    titleEN: 'Charcoal vs briquettes - which to choose?',
    date: '2026-04-08',
    contentPL: `
      <h2>Węgiel drzewny - zalety i wady</h2>

      <h3>Zalety:</h3>
      <ul>
        <li>Szybkie rozpalanie (10-15 minut)</li>
        <li>Wysoka temperatura (idealna do steków)</li>
        <li>Naturalny produkt bez dodatków</li>
        <li>Charakterystyczny aromat grilla</li>
      </ul>

      <h3>Wady:</h3>
      <ul>
        <li>Krótszy czas palenia niż brykiet</li>
        <li>Wyższa cena</li>
        <li>Nierówne kawałki</li>
      </ul>

      <h2>Brykiet węglowy - zalety i wady</h2>

      <h3>Zalety:</h3>
      <ul>
        <li>Bardzo długi czas palenia (4-6 godzin)</li>
        <li>Stabilna temperatura</li>
        <li>Jednolite kształty</li>
        <li>Niższa cena</li>
      </ul>

      <h3>Wady:</h3>
      <ul>
        <li>Dłuższe rozpalanie (20-30 minut)</li>
        <li>Może zawierać dodatki (spoiwa)</li>
        <li>Niższa temperatura maksymalna</li>
      </ul>

      <h2>Kiedy wybrać węgiel drzewny?</h2>
      <ul>
        <li>Grillowanie steków i burgerów</li>
        <li>Krótkie sesje grillowe (1-2 godziny)</li>
        <li>Gdy zależy Ci na naturalnym produkcie</li>
        <li>Potrzebujesz wysokiej temperatury</li>
      </ul>

      <h2>Kiedy wybrać brykiet?</h2>
      <ul>
        <li>Długie grillowanie (pulled pork, żeberka)</li>
        <li>Wędzenie</li>
        <li>Gdy potrzebujesz stabilnej temperatury</li>
        <li>Ograniczony budżet</li>
      </ul>
    `,
    contentEN: `
      <h2>Charcoal - advantages and disadvantages</h2>

      <h3>Advantages:</h3>
      <ul>
        <li>Quick ignition (10-15 minutes)</li>
        <li>High temperature (ideal for steaks)</li>
        <li>Natural product without additives</li>
        <li>Characteristic grill aroma</li>
      </ul>

      <h3>Disadvantages:</h3>
      <ul>
        <li>Shorter burning time than briquettes</li>
        <li>Higher price</li>
        <li>Uneven pieces</li>
      </ul>

      <h2>Charcoal briquettes - advantages and disadvantages</h2>

      <h3>Advantages:</h3>
      <ul>
        <li>Very long burning time (4-6 hours)</li>
        <li>Stable temperature</li>
        <li>Uniform shapes</li>
        <li>Lower price</li>
      </ul>

      <h3>Disadvantages:</h3>
      <ul>
        <li>Longer ignition (20-30 minutes)</li>
        <li>May contain additives (binders)</li>
        <li>Lower maximum temperature</li>
      </ul>

      <h2>When to choose charcoal?</h2>
      <ul>
        <li>Grilling steaks and burgers</li>
        <li>Short grilling sessions (1-2 hours)</li>
        <li>When you care about a natural product</li>
        <li>You need high temperature</li>
      </ul>

      <h2>When to choose briquettes?</h2>
      <ul>
        <li>Long grilling (pulled pork, ribs)</li>
        <li>Smoking</li>
        <li>When you need stable temperature</li>
        <li>Limited budget</li>
      </ul>
    `,
  },
  'najlepszy-wegiel-do-bbq': {
    titlePL: 'Najlepszy węgiel do BBQ w Polsce',
    titleEN: 'Best BBQ charcoal in Poland',
    date: '2026-04-05',
    contentPL: `
      <h2>Kryteria oceny węgla do BBQ</h2>
      <p>Przy wyborze węgla do grillowania warto zwrócić uwagę na:</p>
      <ul>
        <li>Czas palenia</li>
        <li>Temperatura spalania</li>
        <li>Ilość popiołu</li>
        <li>Łatwość rozpalania</li>
        <li>Stosunek jakości do ceny</li>
      </ul>

      <h2>Top 3 węgle dostępne w Polsce</h2>

      <h3>1. Węgiel bukowy premium</h3>
      <p>Najwyższa jakość na polskim rynku:</p>
      <ul>
        <li>Czas palenia: 3-4 godziny</li>
        <li>Temperatura: do 800°C</li>
        <li>Minimalna ilość popiołu</li>
        <li>Certyfikat FSC</li>
      </ul>

      <h3>2. Węgiel dębowy</h3>
      <p>Doskonały do długiego grillowania:</p>
      <ul>
        <li>Czas palenia: 4-5 godzin</li>
        <li>Stabilna temperatura</li>
        <li>Aromatyczny dym</li>
      </ul>

      <h3>3. Mix bukowy-dębowy</h3>
      <p>Optymalny balans ceny i jakości:</p>
      <ul>
        <li>Czas palenia: 3-4 godziny</li>
        <li>Dobra temperatura</li>
        <li>Przystępna cena</li>
      </ul>

      <h2>Jak rozpoznać dobry węgiel?</h2>
      <ul>
        <li><strong>Kolor:</strong> Głęboka czerń (nie szarość)</li>
        <li><strong>Dźwięk:</strong> Metaliczny przy uderzeniu</li>
        <li><strong>Struktura:</strong> Widoczne słoje drewna</li>
        <li><strong>Waga:</strong> Ciężki = gęsty = dłuższe palenie</li>
      </ul>

      <h2>Gdzie kupić?</h2>
      <p>Najlepiej kupować bezpośrednio od producenta lub sprawdzonych dystrybutorów. Unikaj supermarketów - często oferują węgiel niższej jakości w zawyżonych cenach.</p>

      <h2>Podsumowanie</h2>
      <p>Dla większości grillowiczów najlepszym wyborem będzie węgiel bukowy premium. Zapewnia doskonałe rezultaty i jest wart swojej ceny.</p>
    `,
    contentEN: `
      <h2>BBQ charcoal evaluation criteria</h2>
      <p>When choosing charcoal for grilling, pay attention to:</p>
      <ul>
        <li>Burning time</li>
        <li>Combustion temperature</li>
        <li>Amount of ash</li>
        <li>Ease of ignition</li>
        <li>Quality to price ratio</li>
      </ul>

      <h2>Top 3 charcoals available in Poland</h2>

      <h3>1. Premium beech charcoal</h3>
      <p>Highest quality on the Polish market:</p>
      <ul>
        <li>Burning time: 3-4 hours</li>
        <li>Temperature: up to 800°C</li>
        <li>Minimal ash</li>
        <li>FSC certificate</li>
      </ul>

      <h3>2. Oak charcoal</h3>
      <p>Excellent for long grilling:</p>
      <ul>
        <li>Burning time: 4-5 hours</li>
        <li>Stable temperature</li>
        <li>Aromatic smoke</li>
      </ul>

      <h3>3. Beech-oak mix</h3>
      <p>Optimal balance of price and quality:</p>
      <ul>
        <li>Burning time: 3-4 hours</li>
        <li>Good temperature</li>
        <li>Affordable price</li>
      </ul>

      <h2>How to recognize good charcoal?</h2>
      <ul>
        <li><strong>Color:</strong> Deep black (not gray)</li>
        <li><strong>Sound:</strong> Metallic when struck</li>
        <li><strong>Structure:</strong> Visible wood grain</li>
        <li><strong>Weight:</strong> Heavy = dense = longer burning</li>
      </ul>

      <h2>Where to buy?</h2>
      <p>Best to buy directly from the manufacturer or trusted distributors. Avoid supermarkets - they often offer lower quality charcoal at inflated prices.</p>

      <h2>Summary</h2>
      <p>For most grillers, premium beech charcoal will be the best choice. It provides excellent results and is worth its price.</p>
    `,
  },
};

function BlogArticle() {
  const { slug } = useParams();
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  const article = blogArticles[slug];

  if (!article) {
    return (
      <div className="min-h-screen bg-stone-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-amber-500 mb-4">404</h1>
          <p className="text-stone-300 mb-6">
            {currentLang === 'pl' ? 'Artykuł nie został znaleziony' : 'Article not found'}
          </p>
          <Link to="/blog" className="text-amber-500 hover:text-amber-400">
            {currentLang === 'pl' ? 'Wróć do bloga' : 'Back to blog'}
          </Link>
        </div>
      </div>
    );
  }

  const title = currentLang === 'pl' ? article.titlePL : article.titleEN;
  const content = currentLang === 'pl' ? article.contentPL : article.contentEN;

  const breadcrumbItems = [
    { name: 'Home', url: 'https://vanshare.pl' },
    { name: 'Blog', url: 'https://vanshare.pl/blog' },
    { name: title, url: `https://vanshare.pl/blog/${slug}` },
  ];

  return (
    <>
      <Seo
        title={`${title} | VAN SHARE`}
        description={content.substring(0, 160).replace(/<[^>]*>/g, '')}
      />
      <BreadcrumbSchema items={breadcrumbItems} />

      <article className="min-h-screen py-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb Navigation */}
          <nav className="mb-8">
            <Link
              to="/blog"
              className="inline-flex items-center text-amber-500 hover:text-amber-400 transition-colors group"
            >
              <svg className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              {currentLang === 'pl' ? 'Wróć do bloga' : 'Back to blog'}
            </Link>
          </nav>

          {/* Article Header */}
          <header className="mb-12 text-center">
            <div className="flex items-center justify-center gap-4 text-sm text-stone-400 mb-6">
              <time className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {new Date(article.date).toLocaleDateString(currentLang === 'pl' ? 'pl-PL' : 'en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
              <span className="text-stone-600">•</span>
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {currentLang === 'pl' ? '5 min czytania' : '5 min read'}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-amber-500 mb-6 leading-tight">
              {title}
            </h1>

            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto"></div>
          </header>

          {/* Article Content */}
          <div className="bg-stone-800/30 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-stone-700/50 shadow-2xl">
            <div
              className="prose prose-invert prose-amber max-w-none
                prose-headings:text-amber-400 prose-headings:font-bold
                prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:pb-3 prose-h2:border-b prose-h2:border-stone-700
                prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
                prose-p:text-stone-300 prose-p:leading-relaxed prose-p:mb-6 prose-p:text-lg
                prose-ul:text-stone-300 prose-ul:mb-6 prose-ul:space-y-2
                prose-li:mb-2 prose-li:pl-2
                prose-strong:text-amber-400 prose-strong:font-semibold
                prose-a:text-amber-500 prose-a:no-underline hover:prose-a:text-amber-400 hover:prose-a:underline
                prose-code:text-amber-400 prose-code:bg-stone-900/50 prose-code:px-2 prose-code:py-1 prose-code:rounded"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </div>

          {/* Article Footer - CTA */}
          <footer className="mt-16">
            <div className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 text-center border border-amber-500/20 shadow-xl">
              <div className="max-w-2xl mx-auto">
                <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-stone-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>

                <h3 className="text-3xl font-bold text-amber-400 mb-4">
                  {currentLang === 'pl' ? 'Zamów węgiel drzewny premium' : 'Order premium charcoal'}
                </h3>

                <p className="text-stone-300 text-lg mb-8 leading-relaxed">
                  {currentLang === 'pl'
                    ? 'Wysokiej jakości węgiel bukowy z certyfikatem FSC. Dostawa w całej Polsce w 1-3 dni. Płatność przy odbiorze.'
                    : 'High quality FSC certified beech charcoal. Delivery throughout Poland in 1-3 days. Payment on delivery.'}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/order"
                    className="inline-flex items-center justify-center bg-amber-500 hover:bg-amber-600 text-stone-900 font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-amber-500/50"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                    {currentLang === 'pl' ? 'Zamów teraz' : 'Order now'}
                  </Link>

                  <Link
                    to="/calculator"
                    className="inline-flex items-center justify-center bg-stone-700 hover:bg-stone-600 text-stone-200 font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                    {currentLang === 'pl' ? 'Kalkulator ceny' : 'Price calculator'}
                  </Link>
                </div>
              </div>
            </div>

            {/* Related Articles */}
            <div className="mt-12 pt-8 border-t border-stone-700">
              <h3 className="text-2xl font-bold text-amber-400 mb-6 text-center">
                {currentLang === 'pl' ? 'Więcej artykułów' : 'More articles'}
              </h3>
              <div className="text-center">
                <Link
                  to="/blog"
                  className="inline-flex items-center text-amber-500 hover:text-amber-400 font-medium transition-colors group"
                >
                  {currentLang === 'pl' ? 'Zobacz wszystkie artykuły' : 'View all articles'}
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </footer>
        </div>
      </article>
    </>
  );
}

export default BlogArticle;
