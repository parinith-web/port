import {
  CodeforcesIcon,
  GithubIcon,
  LeetCodeIcon,
  LinkedinIcon,
} from "@/components/icons/SocialIcons";
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
      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10 sm:h-14 sm:w-14"
    >
      {children}
    </a>
  );
}

export default function Index() {
  return (
    <div className="mx-auto max-w-[1280px] px-6 pb-20 pt-10 sm:px-10 lg:px-[73px] lg:pt-6">
      {/* Hero section: image on right, text on left */}
      <div className="flex flex-col-reverse gap-10 lg:flex-row lg:gap-16">
        {/* Left column: heading + tagline */}
        <div className="flex flex-col gap-8 lg:mt-10">
          <h1 className="text-[56px] font-extrabold leading-[0.9] tracking-[-2.5px] text-white sm:text-[84px] sm:tracking-[-5px] lg:text-[120px] lg:leading-[108px] lg:tracking-[-8px]">
            Parinith
            <br />
            Reddy
          </h1>
          <p className="whitespace-nowrap text-sm font-bold uppercase leading-6 tracking-[1.6px] text-white sm:text-base">
            Creative developer, open source contributor, problem solver
          </p>
        </div>

        {/* Right column: image */}
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/98bbf3622ce609fe8b26c0144bd736eab94c3dfd?width=776"
          alt="Parinith Reddy"
          className="w-full max-w-[260px] sm:max-w-[320px] lg:w-[388px] lg:max-w-[388px] lg:shrink-0"
        />
      </div>

      {/* Bio text */}
      <p className="mt-14 max-w-[614px] text-base capitalize leading-normal text-white lg:mt-8">
        Part developer, part designer, professional "just one more small
        tweak" person. Love doing competive programming.
      </p>

      {/* Social icons aligned with image width */}
      <div className="mt-10 flex items-center gap-2 sm:gap-3 lg:ml-auto lg:w-[388px] lg:justify-end">
        <SocialLink href="#" label="GitHub">
          <GithubIcon className="h-9 w-9" />
        </SocialLink>
        <SocialLink href="#" label="Codeforces">
          <CodeforcesIcon className="h-8 w-8" />
        </SocialLink>
        <SocialLink href="#" label="LeetCode">
          <LeetCodeIcon className="h-8 w-8" />
        </SocialLink>
        <SocialLink href="#" label="LinkedIn">
          <LinkedinIcon className="h-9 w-9" />
        </SocialLink>
      </div>

      <p className="mt-10 max-w-[336px] text-xs capitalize leading-[24px] text-white/60">
        Available for freelance and internship roles. Feel free to connect
        through
      </p>
    </div>
  );
}
