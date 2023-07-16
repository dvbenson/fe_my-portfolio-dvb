import { ScrollOffset } from "../ScrollOffset"
import Projects from "./Projects"
import Contact from "./Contact"
import Hero from "./Hero"
import About from "./About"

export default function Main({ styles }) {
	return (
		<>
			<main className='bg-[#222222] overflow-hidden'>
				<ScrollOffset id='home' />
				<section className=''>
					<Hero styles={styles} />
				</section>

				<ScrollOffset id='about' />
				<section className='mb-24 min-h-screen'>
					<About />
				</section>

				<ScrollOffset id='projects' />
				<section className=' h-full'>
					<Projects />
				</section>

				<ScrollOffset id='contact' />
				<section className='min-h-[480px]'>
					<Contact />
				</section>
			</main>
		</>
	)
}
