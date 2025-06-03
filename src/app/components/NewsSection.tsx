import Image from 'next/image'

const NewsSection = () => {
  const newsItems = [
    {
      id: 1,
      title: "Annual Sports Day 2023",
      date: "November 15, 2023",
      excerpt: "Our school celebrated its annual sports day with great enthusiasm and participation from all students.",
      image: "/assets/images/sports-day.jpg"
    },
    {
      id: 2,
      title: "Science Fair Winners",
      date: "October 28, 2023",
      excerpt: "Our students won 3 awards at the regional science fair competition.",
      image: "/assets/images/science-fair.jpg"
    },
    {
      id: 3,
      title: "New Computer Lab Inaugurated",
      date: "September 10, 2023",
      excerpt: "The school has added a new computer lab with the latest technology.",
      image: "/assets/images/computer-lab.jpg"
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest News & Events</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest happenings at our school.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
              <div className="relative h-48">
                <Image 
                  src={item.image} 
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-blue-600 mb-2">{item.date}</div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.excerpt}</p>
                <button className="text-blue-600 font-medium hover:text-blue-800 transition duration-300">
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
            View All News
          </button>
        </div>
      </div>
    </section>
  )
}

export default NewsSection