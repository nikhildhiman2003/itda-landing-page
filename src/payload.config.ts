import path from 'path'
import { fileURLToPath } from 'url'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { buildConfig } from 'payload'

import { Users } from './payload/collections/Users'
import { Media } from './payload/collections/Media'
import { Documents } from './payload/collections/document'


import { Homepage } from './payload/globals/homepage'
import { Objectives } from './payload/globals/objective'
import { GoverningBody } from './payload/globals/governing-body'
import { WhoIsWho } from './payload/globals/who-is-who'
import { Tenders } from './payload/globals/tenders'
import { ActsAndRules } from './payload/globals/acts-and-rules'
import { DocumentsPage } from './payload/globals/documents'
import { PhotoGallery } from './payload/globals/photo-gallery'
import { ApuniSarkar } from './payload/globals/apuni-sarkar'
import { Darc } from './payload/globals/darc'
import { DataCenter } from './payload/globals/data-center'
import { CMHelpline } from './payload/globals/helpline' 
import { EOffice } from './payload/globals/e-office'
import { UKSwan } from './payload/globals/uk-swan'
import { EGatePass } from './payload/globals/e-gate-pass'
import { Aadhar } from './payload/globals/aadhar'
import {  ItdaCalc } from './payload/globals/itda-calc'
import { GatiShakti } from './payload/globals/gati-shakti'
import { Services } from './payload/globals/services' 

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [
    Users, 
    Media,
    Documents 
  ],
  globals: [
    Homepage,
    Objectives,
    GoverningBody,
    WhoIsWho,
    Tenders,
    ActsAndRules,
    DocumentsPage,
    PhotoGallery,
    ApuniSarkar,
    Darc,
    DataCenter,
    CMHelpline,
    EOffice,
    UKSwan,
    EGatePass,
    Aadhar,
    ItdaCalc,
    GatiShakti,
    Services,
  ],
  editor: lexicalEditor({
    features: ({ defaultFeatures }) => [...defaultFeatures],
  }),
  plugins: [],
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(dirname, 'types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URL || "",
  }),
  localization: {
    locales: [
      { code: 'en', label: 'English' },
      { code: 'hi', label: 'Hindi' },
    ],
    defaultLocale: 'en',
    fallback: true,
  },
})