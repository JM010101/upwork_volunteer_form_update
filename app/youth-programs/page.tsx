import DonationButton from '@/components/DonationButton'

export default function YouthProgramsPage() {
  const programs = [
    {
      title: 'Generación SEA',
      description: 'Binational Youth Climate Resilience Academy that empowers youth to address challenges like coastal erosion and pollution.',
    },
    {
      title: 'Exploradores de Cuencas',
      description: 'Summer program that explores local watersheds from Cuyamaca to the coast, fostering a deep connection with the environment.',
    },
    {
      title: 'After-School Program in Oceanside',
      description: 'Uses the ocean as a learning tool to teach environmental conservation and life skills.',
    },
    {
      title: 'One Ocean',
      description: 'One-year scholarship program for students ages 6-12, combining surf therapy, environmental education, and mentorship.',
    },
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">Youth Programs</h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Empowering young people through surf therapy, environmental education, and mentorship
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {programs.map((program, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-primary-600">{program.title}</h2>
            <p className="text-gray-700 mb-4">{program.description}</p>
            <DonationButton size="small" />
          </div>
        ))}
      </div>

      <div className="text-center bg-primary-50 p-8 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">Support Our Programs</h2>
        <p className="text-gray-700 mb-6">
          Your donation helps us provide transformative experiences for underserved youth
        </p>
        <DonationButton />
      </div>
    </div>
  )
}
