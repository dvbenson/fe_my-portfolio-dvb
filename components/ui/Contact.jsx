import Link from "next/link"
import Header from "../Header"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
	faHandPointLeft,
	faHandPointRight,
} from "@fortawesome/free-solid-svg-icons"

export default function Contact() {
	const ContactCta = () => {
		return (
			<div className='mt-16 flex flex-col md:flex-row mx-auto px-4 justify-center items-center text-center'>
				<div className='flex flex-col place-content-center gap-10 justify-center'>
					<div className='flex flex-col gap-2'>
						<h2 className='text-purple font-heading text-3xl'>
							Let's build together
						</h2>
						<p className='text-[#E9E3E6] text-base md:text-lg font-serif xl:text-xl'>
							Always open for collaboration, conversation and community.
						</p>
					</div>

					<div className='flex flex-col gap-2'>
						<h2 className='text-purple font-heading text-3xl'>Email me:</h2>
						<p className='font-serif font-semibold underline underline-offset-8 hover:decoration-wavy decoration-electric-lime text-3xl text-[#E9E3E6]'>
							<Link href='mailto:danielvb@danielvb.dev'>
								danielvb@danielvb.dev
							</Link>
						</p>
					</div>

					<div className='flex flex-col gap-2 justify-center items-center'>
						<h3 className='text-purple font-heading text-3xl'>Also,</h3>
						<p className='text-[#E9E3E6] text-base md:text-lg font-serif xl:text-xl'>
							... check out my GitHub below or connect on LinkedIn
						</p>
						<div className='flex flex-row gap-1 place-content-center my-4'>
							<div className='transform hover:scale-125 text-4xl text-white flex flex-row gap-8 justify-center items-center rotate-[-90deg]'>
								<FontAwesomeIcon icon={faHandPointLeft} />
							</div>
							<div className='transform text-4xl hover:scale-150 text-white flex flex-row gap-8 justify-center items-center rotate-[90deg]'>
								<FontAwesomeIcon icon={faHandPointRight} />
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
	return (
		<>
			<Header tag={"Reach out"} title={"Contact"} />
			<ContactCta />
		</>
	)
}
