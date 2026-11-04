/** @format */

"use client";

import { personalInfo } from "@/data/portfolio-data";
import { useTranslation } from "@/hooks/useTranslation";
import { ArrowUp, Mail } from "lucide-react";
import { SiGithub, SiTelegram } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";

const SITE_VERSION = "3.0";

const footerLinks = [
	{ key: "nav.about", href: "#about" },
	{ key: "nav.projects", href: "#projects" },
	{ key: "nav.skills", href: "#skills" },
	{ key: "nav.experience", href: "#experience" },
	{ key: "nav.education", href: "#journey" },
	{ key: "nav.contact", href: "#contact" },
];

const socialClass =
	"text-[#6e6e73] hover:text-[#1d1d1f] dark:text-[#86868b] dark:hover:text-white transition-colors";

export function Footer() {
	const { t } = useTranslation();

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<footer className='section-gray text-xs text-[#6e6e73] dark:text-[#86868b]'>
			<div className='max-w-5xl mx-auto px-4 sm:px-6 py-10'>
				<p className='pb-4 border-b border-[#d2d2d7] dark:border-[#424245] leading-relaxed'>
					{t("footer.tagline")} · {t("hero.location")}. {t("footer.builtWith")}.
				</p>

				<div className='py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-5'>
					<nav
						className='flex flex-wrap gap-x-5 gap-y-2'
						aria-label='Footer Navigation'>
						{footerLinks.map((link) => (
							<a
								key={link.key}
								href={link.href}
								className='text-[#424245] hover:text-[#1d1d1f] hover:underline dark:text-[#d2d2d7] dark:hover:text-white'>
								{t(link.key)}
							</a>
						))}
					</nav>

					<div className='flex items-center gap-4'>
						<a
							href={personalInfo.githubUrl}
							target='_blank'
							rel='noopener noreferrer'
							className={socialClass}
							aria-label='GitHub'>
							<SiGithub className='w-4 h-4' />
						</a>
						<a
							href={personalInfo.linkedinUrl}
							target='_blank'
							rel='noopener noreferrer'
							className={socialClass}
							aria-label='LinkedIn'>
							<FaLinkedin className='w-4 h-4' />
						</a>
						<a
							href={personalInfo.telegramUrl}
							target='_blank'
							rel='noopener noreferrer'
							className={socialClass}
							aria-label='Telegram'>
							<SiTelegram className='w-4 h-4' />
						</a>
						<a
							href={`mailto:${personalInfo.email}`}
							className={socialClass}
							aria-label='Email'>
							<Mail className='w-4 h-4' />
						</a>
					</div>
				</div>

				<div className='pt-4 border-t border-[#d2d2d7] dark:border-[#424245] flex flex-col sm:flex-row sm:items-center justify-between gap-3'>
					<p>
						{t("footer.copyright")}
						<span className='mx-2 text-[#d2d2d7] dark:text-[#424245]'>|</span>
						{t("footer.version")} {SITE_VERSION}
					</p>
					<button
						onClick={scrollToTop}
						className='inline-flex items-center gap-1 text-[#424245] hover:text-[#1d1d1f] hover:underline dark:text-[#d2d2d7] dark:hover:text-white cursor-pointer self-start sm:self-auto'
						aria-label='Back to top'>
						{t("footer.backToTop")}
						<ArrowUp className='w-3 h-3' />
					</button>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
