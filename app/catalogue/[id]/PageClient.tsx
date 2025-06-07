"use client"

import { Section } from '@/features/layout/components/Section';
import Image from 'next/image';
import AddComment from '@/features/showPage/components/AddComment';
import { Comment } from '@/features/showPage/components/Comment';
import { useAuthStore } from '@/shared/stores/authStore';
import ListButtons from '@/features/showPage/components/ListButtons';
import RatingInput from '@/features/showPage/components/RatingInput';
import { StarRating } from '@/shared/components/StarRating';
import { CastCarousel } from '@/features/showPage/components/CastCarousel';
import { SeasonsList } from '@/features/showPage/components/SeasonsList';
import { ShowPageProps } from '@/features/showPage/types';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function PageClient({
    show,
    isInList,
    isFavorite,
    currentRating,
    averageRating,
    totalRatings,
    cast,
    seasons,
    synopsis,
    genres,
    platforms
}: ShowPageProps) {
    const { user, isAuthenticated, isLoading } = useAuthStore();

    if (!show) {
        return <Section>Série introuvable</Section>;
    }

    return (
        <main className="w-full min-h-screen bg-background-primary">
            <Section className="mt-10 sm:mt-5 relative w-full">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-primary/5 to-transparent rounded-3xl -z-10" />
                <div className='flex flex-col flex-1 p-4 sm:p-8'>
                    <Link
                        href={`/catalogue`}
                        className="inline-flex items-center justify-start gap-2 text-primary/60 hover:text-accent-primary transition-colors duration-300 mb-6 group"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
                        <span>Retour au catalogue</span>
                    </Link>
                    <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 lg:gap-12">
                        <div className="relative w-full lg:w-[400px] aspect-[2/3] rounded-2xl overflow-hidden group shadow-xl">
                            <Image
                                src={show.image || "https://placehold.co/400x400"}
                                alt={"Poster de la série " + show.title}
                                fill
                                sizes='(max-width: 768px) 100vw, 400px'
                                className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                                priority
                            />
                        </div>
                        <div className="flex flex-col gap-6 flex-1">
                            <div className="space-y-6">
                                <h1 className="text-3xl sm:text-4xl font-title text-text-primary">{show.title}</h1>
                                <div className='flex flex-col gap-2'>
                                    <div className="flex items-center gap-2">

                                        <h2 className="text-xl font-title text-accent-primary">Genres</h2>
                                    </div>
                                    <p className='text-text-primary/80'>{genres.join(', ')}</p>
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <div className="flex items-center gap-2">

                                        <h2 className="text-xl font-title text-accent-primary">Note</h2>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <StarRating rating={averageRating} size="lg" />
                                        <span className="text-text-primary/80">({totalRatings} avis)</span>
                                    </div>
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <div className="flex items-center gap-2">

                                        <h2 className="text-xl font-title text-accent-primary">Nombre de saisons</h2>
                                    </div>
                                    <p className="text-text-primary/90">{show._count?.seasons}</p>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2">

                                        <h2 className="text-xl font-title text-accent-primary">Synopsis</h2>
                                    </div>
                                    <p className="text-text-primary/90 leading-relaxed">{synopsis}</p>
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <h2 className="text-xl font-title text-accent-primary">Plateformes</h2>
                                    <div className="flex flex-wrap gap-2">
                                        {platforms.map((platform, index) => (
                                            <span
                                                key={index}
                                                className="px-3 py-1 bg-background-secondary rounded-full text-sm text-text-primary/80 border border-border-primary"
                                            >
                                                {platform}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            {user && (
                                <div className='mt-auto flex flex-col gap-4'>
                                    <ListButtons
                                        showId={show.show_id}
                                        isInList={isInList}
                                        isFavorite={isFavorite}
                                    />
                                    <RatingInput
                                        showId={show.show_id}
                                        isInList={isInList}
                                        currentRating={currentRating}
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </Section>

            <Section className='mx-auto mt-10 sm:mt-20'>
                <SeasonsList seasons={seasons} />
            </Section>

            <Section className='mx-auto mt-10 sm:mt-20'>
                <CastCarousel cast={cast} />
            </Section>

            {user !== null && isAuthenticated && !isLoading && (
                <Section className="mt-10 sm:mt-20 relative w-full">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-primary/5 to-transparent rounded-3xl -z-10" />
                    <div className="w-full max-w-7xl mx-auto p-4 sm:p-8">
                        <AddComment idShow={show.show_id} />
                    </div>
                </Section>
            )}

            <Section className="mt-10 sm:mt-20 mb-10 sm:mb-20 relative w-full">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-primary/5 to-transparent rounded-3xl -z-10" />
                <div className="w-full max-w-7xl mx-auto p-4 sm:p-8">
                    <h2 className="font-title text-xl sm:text-2xl text-accent-primary mb-6 sm:mb-8">
                        Commentaires ({show._count?.comments})
                    </h2>
                    {show.comments?.length === 0 ? (
                        <p className="text-text-primary/80">Aucun commentaire pour le moment.</p>
                    ) : (
                        <div className="flex flex-col gap-4">
                            {show.comments?.map((comment, index) => (
                                <Comment
                                    key={index}
                                    user={comment.user}
                                    content={comment.content}
                                    postedAt={comment.postedAt}
                                    className={index % 2 === 0 ? 'bg-background-secondary' : 'bg-border-primary'}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </Section>
        </main>
    );
}