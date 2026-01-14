import DonationButton from '@/components/DonationButton'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16">
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6 text-gray-900">
          Un Mar de Colores
        </h1>
        <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
          Promoting equity in surfing by celebrating diversity and connection with the ocean
        </p>
        <DonationButton />
      </section>

      <section className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-primary-600">Youth Programs</h2>
          <p className="text-gray-700 mb-4">
            Empowering young people through surf therapy, environmental education, and mentorship.
          </p>
          <DonationButton size="small" />
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-primary-600">Community Initiatives</h2>
          <p className="text-gray-700 mb-4">
            Building connections and advocating for environmental justice in our communities.
          </p>
          <DonationButton size="small" />
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-primary-600">Get Involved</h2>
          <p className="text-gray-700 mb-4">
            Join us as a volunteer and make a difference in the lives of young people.
          </p>
          <a 
            href="/volunteer" 
            className="inline-block mt-4 px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition"
          >
            Volunteer
          </a>
        </div>
      </section>
    </div>
  )
}
