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

      <article className="min-h-screen bg-gradient-to-b from-stone-900 via-stone-800 to-stone-900 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Link
            to="/blog"
            className="inline-flex items-center text-amber-500 hover:text-amber-400 mb-8 transition-colors"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {currentLang === 'pl' ? 'Wróć do bloga' : 'Back to blog'}
          </Link>

          <header className="mb-12">
            <time className="text-stone-400 mb-4 block">
              {new Date(article.date).toLocaleDateString(currentLang === 'pl' ? 'pl-PL' : 'en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
            <h1 className="text-4xl md:text-5xl font-bold text-amber-500 mb-6">{title}</h1>
          </header>

          <div
            className="prose prose-invert prose-amber max-w-none
              prose-headings:text-amber-400
              prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
              prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
              prose-p:text-stone-300 prose-p:leading-relaxed prose-p:mb-6
              prose-ul:text-stone-300 prose-ul:mb-6
              prose-li:mb-2
              prose-strong:text-amber-400"
            dangerouslySetInnerHTML={{ __html: content }}
          />

          <footer className="mt-16 pt-8 border-t border-stone-700">
            <div className="bg-stone-800 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-semibold text-amber-400 mb-4">
                {currentLang === 'pl' ? 'Zamów węgiel drzewny' : 'Order charcoal'}
              </h3>
              <p className="text-stone-300 mb-6">
                {currentLang === 'pl'
                  ? 'Wysokiej jakości węgiel bukowy z dostawą w całej Polsce'
                  : 'High quality beech charcoal with delivery throughout Poland'}
              </p>
              <Link
                to="/order"
                className="inline-block bg-amber-500 hover:bg-amber-600 text-stone-900 font-semibold px-8 py-3 rounded-lg transition-colors"
              >
                {currentLang === 'pl' ? 'Zamów teraz' : 'Order now'}
              </Link>
            </div>
          </footer>
        </div>
      </article>
    </>
  );
}

export default BlogArticle;
