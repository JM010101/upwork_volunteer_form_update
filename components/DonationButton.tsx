'use client'

interface DonationButtonProps {
  size?: 'small' | 'medium' | 'large'
  className?: string
}

export default function DonationButton({ size = 'medium', className = '' }: DonationButtonProps) {
  const sizeClasses = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 py-3 text-base',
    large: 'px-8 py-4 text-lg'
  }

  const handleDonate = () => {
    // Replace with your actual donation link
    window.open('https://www.paypal.com/donate?hosted_button_id=YOUR_BUTTON_ID', '_blank')
    // Or use your preferred donation platform
    // window.open('https://your-donation-platform.com', '_blank')
  }

  return (
    <button
      onClick={handleDonate}
      className={`
        ${sizeClasses[size]}
        bg-gradient-to-r from-primary-600 to-primary-700
        text-white font-semibold rounded-lg
        hover:from-primary-700 hover:to-primary-800
        transition-all duration-200
        shadow-md hover:shadow-lg
        transform hover:scale-105
        ${className}
      `}
    >
      Donate Now
    </button>
  )
}
