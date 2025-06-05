"use client";

import { Section } from "@/features/layout/components/Section";
import { SignUpForm } from "@/features/auth/components/SignUpForm";

export default function SignUp() {
    return (
        <main className="w-full min-h-screen bg-background-primary flex items-center justify-center">
            <Section className="w-full max-w-md px-4">
                <SignUpForm />
            </Section>
        </main>
    );
}