import DonationButton from '@/components/DonationButton'

export default function AboutUsPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8 text-gray-900">About Us</h1>
      
      <div className="prose prose-lg max-w-none mb-12">
        <p className="text-xl text-gray-700 mb-6">
          Un Mar de Colores is a nonprofit organization that promotes equity in surfing by celebrating diversity and connection with the ocean.
        </p>
        <p className="text-gray-700 mb-6">
          Our mission is to increase coastal access for underserved youth by providing surf therapy, environmental education, and long-term mentorship, inspiring the next generation of ocean guardians.
        </p>
        <p className="text-gray-700 mb-6">
          Through culturally responsive programs, innovative educational models, and community advocacy, we empower participants to see themselves as environmental stewards and members of a broader community.
        </p>
      </div>

      <div className="bg-primary-50 p-8 rounded-lg mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">Our Impact</h2>
        <p className="text-gray-700 mb-4">
          In 2024, Un Mar de Colores broke down barriers to access, introduced youth and families to transformative outdoor experiences, and fostered a deeper connection with nature.
        </p>
        <DonationButton />
      </div>
    </div>
  )
}
