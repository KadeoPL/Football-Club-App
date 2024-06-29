export default function HeroSection() {
    const heroItems: {text: string, img: string}[] = [
        {text: 'Przykładowy tytuł i tekst do hero', img: '/gdovia-logo.png'}
    ]
  return (
    <div>
        {heroItems.map((item, index) => 
            <div key={index}>
                <div className="bg-[url('/gdovia-logo.png')] flex justify-center items-center text-center font-heading text-4xl font-bold">{item.text}</div>
            </div>
        ) }
    </div>
  )
}
