import {
  CodeforcesIcon,
  GithubIcon,
  LeetCodeIcon,
  LinkedinIcon,
} from "@/components/icons/SocialIcons";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ActivitySection from "@/components/ActivitySection";
import { ReactNode } from "react";

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10 sm:h-14 sm:w-14 lg:h-16 lg:w-16"
    >
      {children}
    </a>
  );
}

export default function Index() {
  return (
    <div className="mx-auto max-w-[1280px] px-6 pb-20 pt-10 sm:px-10 lg:relative lg:px-[73px] lg:pt-6">
      {/* Hero section: image on right, text on left */}
      <div className="flex flex-col-reverse gap-10 lg:grid lg:grid-cols-[472px_1fr] lg:items-stretch lg:gap-0">
        {/* Left column: heading + tagline */}
        <div className="flex flex-col gap-8 lg:h-full lg:max-w-[472px] lg:justify-between lg:gap-0">
          <h1 className="text-[56px] font-extrabold leading-[0.9] tracking-[-2.5px] text-white sm:text-[84px] sm:tracking-[-5px] lg:mt-6 lg:text-[120px] lg:leading-[108px] lg:tracking-[-8px]">
            Parinith
            <br />
            Reddy
          </h1>
          <p className="whitespace-nowrap text-sm font-medium capitalize leading-6 tracking-[1.6px] text-white sm:text-base">
            Creative developer, open source contributor, problem solver
          </p>
        </div>

        {/* Right column: image */}
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/98bbf3622ce609fe8b26c0144bd736eab94c3dfd?width=776"
          alt="Parinith Reddy"
          className="w-full max-w-[260px] sm:max-w-[320px] lg:ml-auto lg:w-[388px] lg:max-w-[388px]"
        />
      </div>

      {/* Bio text beside the social icons */}
      <div className="mt-14 flex flex-col gap-6 lg:mt-10 lg:flex-row lg:items-center lg:justify-between lg:gap-6">
        <p className="max-w-[614px] text-base font-medium capitalize leading-normal text-white">
          Part developer, part designer, professional "just one more small
          tweak" person.
          <br />
          Love doing competitive programming.
        </p>

        {/* Social icons aligned with image width */}
        <div className="flex items-center gap-2 sm:gap-3 lg:w-[388px] lg:shrink-0 lg:justify-between lg:gap-0">
          <SocialLink href="https://github.com/parinith-web" label="GitHub">
            <GithubIcon className="h-9 w-9 sm:h-11 sm:w-11 lg:h-12 lg:w-12" />
          </SocialLink>
          <SocialLink
            href="https://codeforces.com/profile/parinithreddymavurapu"
            label="Codeforces"
          >
            <CodeforcesIcon className="h-8 w-8 sm:h-10 sm:w-10 lg:h-11 lg:w-11" />
          </SocialLink>
          <SocialLink
            href="https://leetcode.com/u/parinith_reddy/"
            label="LeetCode"
          >
            <LeetCodeIcon className="h-8 w-8 sm:h-10 sm:w-10 lg:h-11 lg:w-11" />
          </SocialLink>
          <SocialLink
            href="https://www.linkedin.com/in/parinith-reddy/"
            label="LinkedIn"
          >
            <LinkedinIcon className="h-9 w-9 sm:h-11 sm:w-11 lg:h-12 lg:w-12" />
          </SocialLink>
        </div>
      </div>

      <SkillsSection />
      <ProjectsSection />
      <ActivitySection />
    </div>
  );
}
