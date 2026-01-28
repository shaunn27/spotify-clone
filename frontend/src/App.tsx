import { SignedIn, SignedOut, SignInButton, UserButton } from "node_modules/@clerk/clerk-react/dist"
import { Button } from "./components/ui/button"

function App() {

  return (
    <header>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
  )
}

export default App
