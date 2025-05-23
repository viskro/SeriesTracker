"use client"

import { Button } from "@/components/shadcn/button";
import { Input } from "@/components/shadcn/input";
import { Label } from "@/components/shadcn/label";
import { Checkbox } from "@/components/shadcn/checkbox";
import { useState, useEffect } from "react";
import { Loader2 } from "lucide-react";
import { signIn, useSession } from "@/lib/auth-client";
import { Section } from "@/components/Layout/Section";
import { useAuthStore } from "@/lib/stores/authStore";
import { useRouter } from "next/navigation";
import { useUIStore } from "@/lib/stores/uiStore";
import { NOTIFICATION_DURATION, NOTIFICATION_TYPES, NOTIFICATION_MESSAGES } from "@/lib/constants/notifications";
import { v4 as uuidv4 } from 'uuid';

export default function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);
    const [error, setError] = useState("");
    const router = useRouter();
    const setUser = useAuthStore((state) => state.setUser);
    const { addNotification } = useUIStore();
    const { data: session } = useSession();

    useEffect(() => {
        if (session?.user) {
            setUser(session.user);
            addNotification({
                id: uuidv4(),
                type: NOTIFICATION_TYPES.SUCCESS,
                message: NOTIFICATION_MESSAGES.AUTH.LOGIN_SUCCESS,
                duration: NOTIFICATION_DURATION
            });
            router.push("/dashboard");
        }
    }, [session, setUser, router, addNotification]);

    const validateForm = () => {
        if (!email || !password) {
            setError("Tous les champs sont obligatoires");
            return false;
        }

        if (!email.includes('@') || !email.includes('.')) {
            setError("L'email n'est pas valide");
            return false;
        }

        return true;
    };

    const handleSignIn = async () => {
        if (!validateForm()) {
            return;
        }

        try {
            setLoading(true);
            await signIn.email(
                { email, password, rememberMe },
                {
                    onRequest: () => {
                        setError("");
                    },
                    onResponse: () => {
                        setLoading(false);
                    },
                    onError: (error) => {
                        setLoading(false);
                        setError(error.error.message || "Une erreur s'est produite lors de la connexion");
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
                        <h1 className="text-2xl font-title text-primary mb-2">Se connecter</h1>
                        <p className="text-primary/60 text-sm">
                            Entrez votre email ci-dessous pour vous connecter
                        </p>
                    </div>

                    <div className="space-y-6">
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
                                autoComplete="password"
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                    setError("");
                                }}
                                className="bg-background-secondary border-border-primary text-primary placeholder:text-primary/40 focus:border-accent-primary"
                            />
                        </div>

                        <div className="flex items-center gap-2">
                            <Checkbox
                                id="remember"
                                onClick={() => {
                                    setRememberMe(!rememberMe);
                                }}
                                className="border-border-primary data-[state=checked]:bg-accent-primary data-[state=checked]:border-accent-primary"
                            />
                            <Label htmlFor="remember" className="text-primary">Se souvenir de moi</Label>
                        </div>

                        <Button
                            type="submit"
                            className="w-full bg-accent-primary hover:bg-accent-primary/90 text-white transition-colors duration-200"
                            disabled={loading}
                            onClick={handleSignIn}
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
                    </div>

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
            </Section>
        </main>
    );
}