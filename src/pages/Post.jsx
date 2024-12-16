export default function Post() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <img 
        src="https://images.unsplash.com/photo-1677442136019-21780ecad995"
        alt="Blog post header"
        className="w-full h-96 object-cover rounded-lg shadow-lg mb-8"
      />
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        The Future of AI in 2024
      </h1>
      <div className="flex items-center text-gray-600 mb-8">
        <span>August 15, 2023</span>
        <span className="mx-2">•</span>
        <span>5 min read</span>
      </div>
      <div className="prose max-w-none">
        <p className="text-gray-600 text-lg leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
  )
}
