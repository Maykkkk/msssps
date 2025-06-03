import { FaGraduationCap, FaFlask, FaUsers, FaBook } from 'react-icons/fa'

const FeaturesSection = () => {
  const features = [
    {
      icon: <FaGraduationCap className="h-10 w-10 text-blue-600" />,
      title: "Qualified Teachers",
      description: "Our experienced faculty is dedicated to student success."
    },
    {
      icon: <FaFlask className="h-10 w-10 text-blue-600" />,
      title: "Modern Labs",
      description: "State-of-the-art science and computer laboratories."
    },
    {
      icon: <FaUsers className="h-10 w-10 text-blue-600" />,
      title: "Inclusive Environment",
      description: "We celebrate diversity and promote inclusivity."
    },
    {
      icon: <FaBook className="h-10 w-10 text-blue-600" />,
      title: "Comprehensive Curriculum",
      description: "Balanced academic and co-curricular programs."
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Maa Sharda?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide an environment that nurtures intellectual curiosity, creativity, and character development.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition duration-300">
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">{feature.title}</h3>
              <p className="text-gray-600 text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection