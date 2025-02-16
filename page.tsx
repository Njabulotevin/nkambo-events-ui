import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-[#0A0B2E] flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8 p-6 bg-white rounded-lg shadow-xl">
        <div className="space-y-2 text-center">
          <h1 className="text-2xl font-bold tracking-tight">Welcome back</h1>
          <p className="text-sm text-muted-foreground">Enter your credentials to sign in</p>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              className="border-[#E31B54] focus-visible:ring-[#E31B54]"
            />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Password</Label>
              <Link href="/forgot-password" className="text-sm text-[#E31B54] hover:text-[#E31B54]/90">
                Forgot password?
              </Link>
            </div>
            <Input id="password" type="password" className="border-[#E31B54] focus-visible:ring-[#E31B54]" />
          </div>
          <Button className="w-full bg-[#E31B54] hover:bg-[#E31B54]/90">Sign in</Button>
        </div>
        <div className="mt-4 text-center text-sm">
          <span className="text-muted-foreground">Don't have an account? </span>
          <Link href="/signup" className="text-[#E31B54] hover:text-[#E31B54]/90">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  )
}

