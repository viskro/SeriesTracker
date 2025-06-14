"use client";

import { Button } from "@/shared/components/shadcn/button";
import { Input } from "@/shared/components/shadcn/input";
import { Label } from "@/shared/components/shadcn/label";
import { Checkbox } from "@/shared/components/shadcn/checkbox";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { useSignUp } from "../hooks/useSignUp";
import { SignUpFormData } from "../types";
import Link from "next/link";

export function SignUpForm() {
    const [formData, setFormData] = useState<SignUpFormData>({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        acceptTerms: false
    });
    const { loading, error, handleSignUp } = useSignUp();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        handleSignUp(formData);
    };

    return (
        <div className="bg-gradient-to-br from-background-secondary to-background-primary p-8 rounded-3xl border border-border-primary shadow-lg">
            <div className="text-center mb-8">
                <h1 className="text-2xl font-title text-primary mb-2">Créer un compte</h1>
                <p className="text-primary/60 text-sm">
                    Entrez vos informations ci-dessous pour créer votre compte
                </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                {error && (
                    <div className="bg-error/10 border border-error/20 p-3 rounded-md text-error text-sm">
                        {error}
                    </div>
                )}

                <div className="space-y-2">
                    <Label htmlFor="username" className="text-primary">Nom d&apos;utilisateur</Label>
                    <Input
                        id="username"
                        type="text"
                        placeholder="John Doe"
                        required
                        onChange={(e) => {
                            setFormData(prev => ({ ...prev, username: e.target.value }));
                        }}
                        value={formData.username}
                        className="bg-background-secondary border-border-primary text-primary placeholder:text-primary/40 focus:border-accent-primary"
                    />
                </div>

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
                        required
                        onChange={(e) => {
                            setFormData(prev => ({ ...prev, password: e.target.value }));
                        }}
                        value={formData.password}
                        className="bg-background-secondary border-border-primary text-primary placeholder:text-primary/40 focus:border-accent-primary"
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="confirmPassword" className="text-primary">Confirmer le mot de passe</Label>
                    <Input
                        id="confirmPassword"
                        type="password"
                        placeholder="password"
                        required
                        onChange={(e) => {
                            setFormData(prev => ({ ...prev, confirmPassword: e.target.value }));
                        }}
                        value={formData.confirmPassword}
                        className="bg-background-secondary border-border-primary text-primary placeholder:text-primary/40 focus:border-accent-primary"
                    />
                </div>

                <div className="flex items-center gap-2">
                    <Checkbox
                        id="terms"
                        onClick={() => {
                            setFormData(prev => ({ ...prev, acceptTerms: !prev.acceptTerms }));
                        }}
                        className="border-border-primary data-[state=checked]:bg-accent-primary data-[state=checked]:border-accent-primary"
                    />
                    <Label htmlFor="terms" className="text-primary">
                        J&apos;accepte les conditions d&apos;utilisation
                    </Label>
                </div>

                <Button
                    type="submit"
                    className="w-full bg-accent-primary hover:bg-accent-primary/90 text-white transition-colors duration-200"
                    disabled={loading || !formData.acceptTerms}
                >
                    {loading ? (
                        <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Création du compte...
                        </>
                    ) : (
                        "Créer un compte"
                    )}
                </Button>
                <span className="text-secondary text-sm">Vous avez déjà un compte ? <Link href={"/auth/signin"}><span className="hover:cursor-pointer text-accent-primary hover:text-accent-primary-hover transition-all duration-300 ease-in-out ">Connectez-vous</span></Link></span>
            </form>
        </div>
    );
} 