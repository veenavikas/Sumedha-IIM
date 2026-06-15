export default function NewsArticlePage({ params }: { params: { slug: string } }) {
  return (
    <div className="py-32 px-4 max-w-7xl mx-auto min-h-[60vh]">
      <h1 className="font-serif text-5xl font-bold text-navy mb-6">News: {params.slug}</h1>
      <p className="text-navy/70 text-lg">Page under construction.</p>
    </div>
  );
}
