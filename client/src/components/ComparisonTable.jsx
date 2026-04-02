import { useTranslation } from "react-i18next";

function ComparisonTable({
  title = "Porównanie produktów",
  subtitle = "Porównaj nasze produkty i wybierz najlepszą opcję dla siebie",
  headers = [],
  rows = [],
  className = "",
}) {
  const { t } = useTranslation();

  return (
    <section className={`py-12 sm:py-16 ${className}`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-orange-500 mb-4">
            {t("comparison.title", title)}
          </h2>
          <p className="text-stone-400 text-base sm:text-lg max-w-2xl mx-auto">
            {t("comparison.subtitle", subtitle)}
          </p>
        </div>

        <div className="overflow-x-auto rounded-xl border border-stone-700 bg-stone-900/50 backdrop-blur-sm">
          <table className="min-w-full divide-y divide-stone-700">
            <thead className="bg-stone-800/50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-4 text-left text-sm font-medium text-stone-300 uppercase tracking-wider"
                >
                  {t("comparison.product", "Produkt")}
                </th>
                {headers.map((header, index) => (
                  <th
                    key={index}
                    scope="col"
                    className="px-6 py-4 text-center text-sm font-medium text-stone-300 uppercase tracking-wider min-w-37.5"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-700">
              {rows.map((row, rowIndex) => (
                <tr
                  key={rowIndex}
                  className={
                    rowIndex % 2 === 0 ? "bg-stone-900/30" : "bg-stone-900/10"
                  }
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-stone-200">
                    {row.name}
                  </td>
                  {row.values.map((value, valueIndex) => (
                    <td
                      key={valueIndex}
                      className="px-6 py-4 whitespace-nowrap text-sm text-stone-400 text-center"
                    >
                      {typeof value === "boolean" ? (
                        value ? (
                          <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-500/20 text-green-400">
                            ✓
                          </span>
                        ) : (
                          <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-stone-700 text-stone-500">
                            ✗
                          </span>
                        )
                      ) : (
                        <span className="text-stone-300">{value}</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default ComparisonTable;
