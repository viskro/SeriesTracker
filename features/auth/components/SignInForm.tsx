"use client";

import { Button } from "@/shared/components/shadcn/button";
import { Input } from "@/shared/components/shadcn/input";
import { Label } from "@/shared/components/shadcn/label";
import { Checkbox } from "@/shared/components/shadcn/checkbox";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { useSignIn } from "../hooks/useSignIn";
import { SignInFormData } from "../types";

export function SignInForm() {
    const [formData, setFormData] = useState<SignInFormData>({
        email: "",
        password: "",
        rememberMe: false
    });
    const { loading, error, handleSignIn } = useSignIn();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        handleSignIn(formData);
    };

    return (
        <div className="bg-gradient-to-br from-background-secondary to-background-primary p-8 rounded-3xl border border-border-primary shadow-lg">
            <div className="text-center mb-8">
                <h1 className="text-2xl font-title text-primary mb-2">Se connecter</h1>
                <p className="text-primary/60 text-sm">
                    Entrez votre email ci-dessous pour vous connecter
                </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                {error && (
                    <div className="bg-red-500/10 border border-red-500/20 p-3 rounded-md text-red-500 text-sm">
                        {error}
                    </div>
                )}

                <div className="space-y-2">
                    <Label htmlFor="email" className="text-primary">Email</Label>
                    <Input
                        id="email"
                        type="email"
                        placeholder="m@example.com"
                        required
                        onChange={(e) => {
                            setFormData(prev => ({ ...prev, email: e.target.value }));
                        }}
                        value={formData.email}
                        className="bg-background-secondary border-border-primary text-primary placeholder:text-primary/40 focus:border-accent-primary"
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="password" className="text-primary">Mot de passe</Label>
                    <Input
                        id="password"
                        type="password"
                        placeholder="password"
                        autoComplete="password"
                        value={formData.password}
                        onChange={(e) => {
                            setFormData(prev => ({ ...prev, password: e.target.value }));
                        }}
                        className="bg-background-secondary border-border-primary text-primary placeholder:text-primary/40 focus:border-accent-primary"
                    />
                </div>

                <div className="flex items-center gap-2">
                    <Checkbox
                        id="remember"
                        onClick={() => {
                            setFormData(prev => ({ ...prev, rememberMe: !prev.rememberMe }));
                        }}
                        className="border-border-primary data-[state=checked]:bg-accent-primary data-[state=checked]:border-accent-primary"
                    />
                    <Label htmlFor="remember" className="text-primary">Se souvenir de moi</Label>
                </div>

                <Button
                    type="submit"
                    className="w-full bg-accent-primary hover:bg-accent-primary/90 text-white transition-colors duration-200"
                    disabled={loading}
                >
                    {loading ? (
                        <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Connexion en cours...
                        </>
                    ) : (
                        "Se connecter"
                    )}
                </Button>
            </form>

            <div className="mt-8 text-center">
                <p className="text-sm text-primary/60">
                    Vous n&apos;avez pas de compte ?{" "}
                    <a
                        href="/auth/signup"
                        className="text-accent-primary hover:text-accent-primary/80 transition-colors duration-200"
                    >
                        S&apos;inscrire
                    </a>
                </p>
            </div>
        </div>
    );
} 