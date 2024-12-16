export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
          <span className="block">Welcome to</span>
          <span className="block text-primary-600">AI Tech Insights</span>
        </h1>
        <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Exploring the latest developments in artificial intelligence, machine learning, and technology.
        </p>
      </div>
      <div className="mt-16">
        <img 
          src="https://images.unsplash.com/photo-1677442136019-21780ecad995" 
          alt="AI Technology"
          className="rounded-lg shadow-xl w-full h-96 object-cover"
        />
      </div>
    </div>
  )
}
