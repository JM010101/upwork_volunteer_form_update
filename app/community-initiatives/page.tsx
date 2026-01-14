import DonationButton from '@/components/DonationButton'

export default function CommunityInitiativesPage() {
  const initiatives = [
    {
      title: 'Environmental Advocacy',
      description: 'We collaborated with Surfrider to designate the Tijuana River as one of America\'s Most Endangered Rivers in 2024, highlighting the need to address pollution and protect affected communities.',
    },
    {
      title: 'Art',
      description: 'The #RepresentationMatters campaign seeks to increase visibility of people of color in the surf community through artistic collaborations and BIPOC artist scholarships.',
    },
    {
      title: 'Sports',
      description: 'The Surfer Scholarship Program is aimed at BIPOC children, teens, and adults who want to expand their opportunities in the surf industry but lack resources.',
    },
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">Community Initiatives</h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Building connections and advocating for environmental justice in our communities
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {initiatives.map((initiative, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-primary-600">{initiative.title}</h2>
            <p className="text-gray-700 mb-4">{initiative.description}</p>
            <DonationButton size="small" />
          </div>
        ))}
      </div>

      <div className="text-center bg-primary-50 p-8 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">Support Our Community</h2>
        <p className="text-gray-700 mb-6">
          Help us continue our advocacy and community-building efforts
        </p>
        <DonationButton />
      </div>
    </div>
  )
}
