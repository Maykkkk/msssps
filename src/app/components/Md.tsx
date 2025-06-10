import Image from 'next/image'

const Md = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="lg:order-last">
            <div className="relative h-96 rounded-xl overflow-hidden shadow-xl">
              <Image 
                src="/classroom.jpg"
                alt="Managing Director"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Message from the Managing Director</h2>
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">Dr. Rajesh Sharma</h3>
              <p className="text-gray-500">Managing Director, Maa Sharda School</p>
            </div>
            <div className="space-y-4 text-gray-700">
              <p className="text-lg">
                &ldquo;At Maa Sharda School, we believe in nurturing young minds to become confident, compassionate, and competent individuals who can lead our society towards a brighter future.&rdquo;
              </p>
              <p className="text-lg">
                Our philosophy centers around holistic development - where academic excellence goes hand in hand with character building, creativity, and social responsibility.
              </p>
              <p className="text-lg">
                With over 25 years of experience in education, I can confidently say that our unique approach to learning prepares students not just for exams, but for life.
              </p>
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Vision</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>To create global citizens rooted in Indian values</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>To foster innovation and critical thinking</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>To provide an inclusive environment that celebrates diversity</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Md