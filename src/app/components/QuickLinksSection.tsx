import { FaChalkboardTeacher, FaCalendarAlt, FaUserGraduate, FaQuestionCircle } from 'react-icons/fa'

const QuickLinksSection = () => {
  const links = [
    {
      icon: <FaChalkboardTeacher className="h-8 w-8 text-blue-600" />,
      title: "Faculty Directory",
      description: "Meet our dedicated teaching staff",
      url: "/academics/faculty"
    },
    {
      icon: <FaCalendarAlt className="h-8 w-8 text-blue-600" />,
      title: "School Calendar",
      description: "Important dates and events",
      url: "/resources/calendar"
    },
    {
      icon: <FaUserGraduate className="h-8 w-8 text-blue-600" />,
      title: "Student Portal",
      description: "Access grades and resources",
      url: "/resources/portal"
    },
    {
      icon: <FaQuestionCircle className="h-8 w-8 text-blue-600" />,
      title: "FAQs",
      description: "Common questions answered",
      url: "/resources/faq"
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {links.map((link, index) => (
            <a 
              key={index} 
              href={link.url}
              className="group border-2 border-blue-100 rounded-lg p-6 hover:border-blue-300 hover:shadow-md transition duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  {link.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition duration-300">
                  {link.title}
                </h3>
              </div>
              <p className="text-gray-600">{link.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default QuickLinksSection