const DUMMY_POSTS = [
  {
    id: 1,
    title: "The Future of AI in 2024",
    excerpt: "Exploring upcoming AI trends and their impact on various industries...",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
    date: "2023-08-15"
  },
  {
    id: 2,
    title: "Machine Learning Fundamentals",
    excerpt: "Understanding the basic concepts behind machine learning algorithms...",
    image: "https://images.unsplash.com/photo-1555255707-c07966088b7b",
    date: "2023-08-14"
  }
];

export default function Blog() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Latest Posts</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {DUMMY_POSTS.map(post => (
          <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <p className="text-sm text-primary-600 mb-2">{post.date}</p>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">{post.title}</h2>
              <p className="text-gray-600">{post.excerpt}</p>
              <button className="mt-4 text-primary-600 hover:text-primary-700">
                Read more →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
