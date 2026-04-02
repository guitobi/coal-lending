import { Helmet } from "react-helmet-async";

function StructuredData({ schema }) {
  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}

export default StructuredData;
