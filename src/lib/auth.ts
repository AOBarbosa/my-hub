import { FirestoreAdapter } from '@auth/firebase-adapter'
import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

import { firebaseCert } from './firebase'

export const { auth, handlers, signIn, signOut } = NextAuth({
  adapter: FirestoreAdapter({
    credential: firebaseCert,
  }),
  providers: [GoogleProvider],
  events: {},
  callbacks: {},
})
