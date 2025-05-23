"use client";

import { Button } from "@/components/shadcn/button";
import { Input } from "@/components/shadcn/input";
import { Label } from "@/components/shadcn/label";
import { Checkbox } from "@/components/shadcn/checkbox";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { signUp } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { Section } from "@/components/Layout/Section";
import { useAuthStore } from "@/lib/stores/authStore";
import { useUIStore } from "@/lib/stores/uiStore";
import { NOTIFICATION_DURATION, NOTIFICATION_TYPES, NOTIFICATION_MESSAGES } from "@/lib/constants/notifications";
import { v4 as uuidv4 } from 'uuid';

export default function SignUp() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [acceptTerms, setAcceptTerms] = useState(false);
    const setUser = useAuthStore((state) => state.setUser);
    const { addNotification } = useUIStore();

    const validateForm = () => {
        if (!username || !email || !password || !confirmPassword) {
            setError("Tous les champs sont obligatoires");
            return false;
        }

        if (!email.includes('@') || !email.includes('.')) {
            setError("L'email n'est pas valide");
            return false;
        }

        if (password.length < 6) {
            setError("Le mot de passe doit contenir au moins 6 caractères");
            return false;
        }

        if (password !== confirmPassword) {
            setError("Les mots de passe ne correspondent pas");
            return false;
        }

        if (!acceptTerms) {
            setError("Vous devez accepter les conditions d'utilisation");
            return false;
        }

        return true;
    };

    const handleSignUp = async () => {
        if (!validateForm()) {
            return;
        }

        try {
            await signUp.email(
                {
                    email,
                    password,
                    name: username,
                    callbackURL: "/dashboard"
                },
                {
                    onRequest: () => {
                        setLoading(true);
                        setError("");
                    },
                    onResponse: () => {
                        setLoading(false);
                    },
                    onSuccess: (data: any) => {
                        setLoading(false);
                        setUser(data.user);
                        addNotification({
                            id: uuidv4(),
                            type: NOTIFICATION_TYPES.SUCCESS,
                            message: NOTIFICATION_MESSAGES.AUTH.LOGIN_SUCCESS,
                            duration: NOTIFICATION_DURATION
                        });
                        router.push("/dashboard");
                    },
                    onError: (error) => {
                        setLoading(false);
                        setError(error.error.message || "Une erreur s'est produite lors de l'inscription");
                        addNotification({
                            id: uuidv4(),
                            type: NOTIFICATION_TYPES.ERROR,
                            message: `${NOTIFICATION_MESSAGES.AUTH.ERROR} : ${error.error.message}`,
                            duration: NOTIFICATION_DURATION
                        });
                    }
                }
            );
        } catch {
            setLoading(false);
            setError("Une erreur inattendue s'est produite");
            addNotification({
                id: uuidv4(),
                type: NOTIFICATION_TYPES.ERROR,
                message: NOTIFICATION_MESSAGES.AUTH.ERROR,
                duration: NOTIFICATION_DURATION
            });
        }
    };

    return (
        <main className="w-full min-h-screen bg-background-primary flex items-center justify-center">
            <Section className="w-full max-w-md px-4">
                <div className="bg-gradient-to-br from-background-secondary to-background-primary p-8 rounded-3xl border border-border-primary shadow-lg">
                    <div className="text-center mb-8">
                        <h1 className="text-2xl font-title text-primary mb-2">Créer un compte</h1>
                        <p className="text-primary/60 text-sm">
                            Entrez vos informations ci-dessous pour créer votre compte
                        </p>
                    </div>

                    <div className="space-y-6">
                        {error && (
                            <div className="bg-red-500/10 border border-red-500/20 p-3 rounded-md text-red-500 text-sm">
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
                                    setUsername(e.target.value);
                                    setError("");
                                }}
                                value={username}
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
                                    setEmail(e.target.value);
                                    setError("");
                                }}
                                value={email}
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
                                    setPassword(e.target.value);
                                    setError("");
                                }}
                                value={password}
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
                                    setConfirmPassword(e.target.value);
                                    setError("");
                                }}
                                value={confirmPassword}
                                className="bg-background-secondary border-border-primary text-primary placeholder:text-primary/40 focus:border-accent-primary"
                            />
                        </div>

                        <div className="flex items-center gap-2">
                            <Checkbox
                                id="terms"
                                onClick={() => {
                                    setAcceptTerms(!acceptTerms);
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
                            disabled={loading}
                            onClick={handleSignUp}
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
                    </div>
                </div>
            </Section>
        </main>
    );
}