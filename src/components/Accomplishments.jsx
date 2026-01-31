const Accomplishments = () => {
  const accomplishments = [
    'Recognized as "Catalyst of the Month" for rapid upskilling and impactful support contributions.',
    'Twice awarded "Star of the Month" for successfully managing critical PI Release and automation initiatives.'
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Accomplishments</h2>
        <div className="space-y-4">
          {accomplishments.map((acc, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm p-6 flex items-start">
              <span className="flex-shrink-0 w-10 h-10 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold mr-4">
                {index + 1}
              </span>
              <p className="text-gray-700 pt-1">{acc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Accomplishments
