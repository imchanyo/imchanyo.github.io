'use client';
import {
  HeroContainer,
  HeroBg,
  HeroLeftContainer,
  Img,
  HeroRightContainer,
  HeroInnerContainer,
  TextLoop,
  Title,
  Span,
  SubTitle,
} from '~/libs/about-style';
import { Bio } from '~/constant/bio';
import Typewriter from 'typewriter-effect';
import BgAnimation from '~/components/icons/bg-animation';
import Skills from '~/components/skill';
import Experience from '~/components/experience';
import Link from 'next/link';
import { GithubIcon, NotionIcon } from '~/components/icons/logo-icon';

export default function About() {
  return (
    <div id="about">
      <HeroContainer data-animate data-animate-stage={1}>
        <HeroBg>
          <BgAnimation />
        </HeroBg>
        <HeroInnerContainer>
          <HeroLeftContainer id="Left">
            <Title>
              Hi, I am <br /> {Bio.name}
            </Title>
            <TextLoop>
              I am a
              <Span>
                <Typewriter
                  options={{
                    strings: Bio.roles,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </Span>
            </TextLoop>
            <SubTitle>{Bio.description}</SubTitle>
            <div className="mt-2 flex gap-2">
              <Link
                className="text-gray-12 hover:text-gray-11 text-2xl"
                href="https://github.com/imchanyo"
                target="_blank"
                rel="noreferrer"
              >
                <GithubIcon />
              </Link>

              <Link
                className="flex items-end text-gray-12 hover:text-gray-11 text-2xl"
                href=""
                target="_blank"
              >
                <NotionIcon />
              </Link>
            </div>
          </HeroLeftContainer>

          <HeroRightContainer id="Right">
            <Img
              style={{ objectFit: 'cover' }}
              src="/img/me.jpeg"
              alt="hero-image"
            />
          </HeroRightContainer>
        </HeroInnerContainer>
      </HeroContainer>
      <Skills />
      <Experience />
    </div>
  );
}
