import { SignInButton, SignOutButton, useAuth } from '@clerk/clerk-react'

export default function Home() {
  const { sessionId } = useAuth()

  if (!sessionId) {
    return <SignInButton />
  }

  return <SignOutButton signOutOptions={{ sessionId }} />
}