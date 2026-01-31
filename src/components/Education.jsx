const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Technology',
      institution: 'Government Engineering College Ajmer',
      field: 'Electronics And Communication Engineering',
      period: '2017 - 2021'
    }
  ]

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Education</h2>
        {education.map((edu, index) => (
          <div key={index} className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{edu.degree}</h3>
            <p className="text-lg text-gray-700 mb-2">{edu.institution}</p>
            <p className="text-gray-600 mb-1">{edu.field}</p>
            <p className="text-gray-500">{edu.period}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Education
