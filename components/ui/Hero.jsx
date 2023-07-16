import Link from "next/link"
import Button from "../Button"

export default function Hero() {
	return (
		<div className='h-screen flex'>
			<div className='font-heading flex flex-col justify-center mx-auto'>
				<p className='text-center subpixel-antialiased text-3xl md:text-4xl lg:text-5xl text-white tracking-normal'>
					I'm Daniel VB
				</p>

				<p
					className='text-center subpixel-antialiased text-6xl md:text-7xl lg:text-8xl text-electric-lime tracking-normal'
					style={{
						background:
							"linear-gradient(to right, #CCFF00, #FFEA20 55%, #FF7A18)",
						WebkitBackgroundClip: "text",
						WebkitTextFillColor: "transparent",
					}}
				>
					A Full Stack
				</p>

				<p className='text-center subpixel-antialiased text-6xl md:text-7xl lg:text-8xl text-white tracking-normal'>
					Web Developer
					<span className='text-[#B2B2B2]'>.</span>
				</p>
				<div className='flex flex-row justify-center items-center mt-8'>
					<Link
						target='_blank'
						href='https://docs.google.com/document/d/196GwDfqe2s1_D2V1AIqsJjzzB9j7mWeEN6Tb94DtYOg/export?format=pdf'
						rel='noopener noreferrer'
					>
						<Button label={"CV"} variant={"tertiary"} />
					</Link>

					<Link href='#projects'>
						<Button label={"Work"} variant={"tertiary"} />
					</Link>
				</div>
				<div className='flex justify-center items-center mt-4'>
					<p className='font-serif font-semibold underline underline-offset-8 decoration-electric-lime hover:decoration-wavy text-2xl text-[#E9E3E6]'>
						<Link href='mailto:danielvb@danielvb.dev'>
							danielvb@danielvb.dev
						</Link>
					</p>
				</div>
			</div>
		</div>
	)
}
