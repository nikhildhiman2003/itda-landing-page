import React from 'react'
import Marquee from 'react-fast-marquee'
import Image from 'next/image'
import Link from 'next/link'

type GovernmentPortalsType = {
  imageSrc: string
  imageAlt: string
  url: string
}

const GOVERNMENT_PORTALS: GovernmentPortalsType[] = [
  {
    imageSrc: '/assets/make-in-india.png',
    imageAlt: 'Make in India',
    url: 'https://www.makeinindia.com/',
  },
  {
    imageSrc: '/assets/skill-india.png',
    imageAlt: 'Skill India',
    url: 'https://www.skillindia.gov.in/',
  },
  {
    imageSrc: '/assets/my-gov.png',
    imageAlt: 'My Gov',
    url: 'https://www.mygov.in/',
  },
  {
    imageSrc: '/assets/e-taal.png',
    imageAlt: 'eTaal',
    url: 'https://etaal.gov.in/etaal2/auth/default.aspx',
  },
  {
    imageSrc: '/assets/nsdc.png',
    imageAlt: 'NSDC',
    url: 'https://nsdcindia.org/',
  },
  {
    imageSrc: '/assets/ndc.png',
    imageAlt: 'India Code',
    url: 'https://www.indiacode.nic.in/',
  },
  {
    imageSrc: '/assets/digi-locker.png',
    imageAlt: 'Digi Locker',
    url: 'https://www.digilocker.gov.in/',
  },
]
export default function Partners() {
  return (
    <div className="pb-8">
      <Marquee speed={70} pauseOnHover>
        <div className="flex items-center gap-8 px-2 ">
          {GOVERNMENT_PORTALS.map((portal) => (
            <Link key={portal.imageSrc} href={portal.url} target="_blank" className="p-4">
              <Image
                src={portal.imageSrc}
                alt={portal.imageAlt}
                className="h-28 w-56 object-contain"
                width={500}
                height={500}
              />
            </Link>
          ))}
        </div>
      </Marquee>
    </div>
  )
}
