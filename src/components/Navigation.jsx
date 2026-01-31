const Navigation = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-xl font-semibold text-gray-900">SA</div>
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('about')} className="text-gray-600 hover:text-gray-900 transition">About</button>
            <button onClick={() => scrollToSection('experience')} className="text-gray-600 hover:text-gray-900 transition">Experience</button>
            <button onClick={() => scrollToSection('skills')} className="text-gray-600 hover:text-gray-900 transition">Skills</button>
            <button onClick={() => scrollToSection('projects')} className="text-gray-600 hover:text-gray-900 transition">Projects</button>
            <button onClick={() => scrollToSection('education')} className="text-gray-600 hover:text-gray-900 transition">Education</button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-600 hover:text-gray-900 transition">Contact</button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
