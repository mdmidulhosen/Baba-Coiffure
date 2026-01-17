import Link from "next/link";
import { Header } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="container py-24 space-y-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Book Your Perfect Look
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Connect with top hair stylists and beauty professionals.
            Book appointments instantly and manage your beauty routine with ease.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/register">
              <Button size="lg">Get Started</Button>
            </Link>
            <Link href="/login">
              <Button variant="outline" size="lg">Sign In</Button>
            </Link>
          </div>
        </section>

        {/* Roles Section */}
        <section className="container py-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            Choose Your Role
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="border-client/20 hover:border-client/50 transition-colors">
              <CardHeader>
                <CardTitle className="text-client">Client</CardTitle>
                <CardDescription>
                  Book appointments and discover new services
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>Browse local providers</li>
                  <li>Book appointments instantly</li>
                  <li>Manage your bookings</li>
                  <li>Save favorite stylists</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-provider/20 hover:border-provider/50 transition-colors">
              <CardHeader>
                <CardTitle className="text-provider">Provider</CardTitle>
                <CardDescription>
                  Offer your services and grow your clientele
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>Manage your schedule</li>
                  <li>Accept bookings online</li>
                  <li>Set your availability</li>
                  <li>Build your reputation</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-business/20 hover:border-business/50 transition-colors">
              <CardHeader>
                <CardTitle className="text-business">Business Owner</CardTitle>
                <CardDescription>
                  Manage your salon and team efficiently
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>Manage staff members</li>
                  <li>Track analytics</li>
                  <li>Configure services</li>
                  <li>Monitor revenue</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container text-center text-sm text-muted-foreground">
          <p>Baba Coiffure - Book your next appointment with ease</p>
        </div>
      </footer>
    </div>
  );
}
