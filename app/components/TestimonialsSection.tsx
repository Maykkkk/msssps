import { FaQuoteLeft } from 'react-icons/fa'

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      quote: "Maa Sharda School provided me with the perfect environment to grow academically and personally. The teachers are incredibly supportive.",
      author: "Rahul Sharma",
      role: "Alumnus, Class of 2020"
    },
    {
      id: 2,
      quote: "As a parent, I appreciate the school's focus on holistic development. My child has flourished in both academics and extracurricular activities.",
      author: "Priya Patel",
      role: "Parent"
    },
    {
      id: 3,
      quote: "The values and knowledge I gained at Maa Sharda have been instrumental in my career success. The foundation was strong.",
      author: "Anjali Gupta",
      role: "Alumna, Class of 2015"
    }
  ]

  return (
    <section className="py-16 bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What People Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from our students, parents, and alumni about their experiences.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-8 rounded-xl shadow-md">
              <FaQuoteLeft className="text-blue-400 text-3xl mb-4" />
              <p className="text-gray-700 mb-6 italic">{testimonial.quote}</p>
              <div>
                <h4 className="font-semibold text-gray-900">{testimonial.author}</h4>
                <p className="text-gray-600 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection