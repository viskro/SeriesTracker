"use client"

import { Section } from '@/features/layout/components/Section';
import Image from 'next/image';
import AddComment from '@/features/showPage/components/AddComment';
import { Comment } from '@/features/showPage/components/Comment';
import { useAuthStore } from '@/lib/stores/authStore';
import ListButtons from '@/features/showPage/components/ListButtons';
import RatingInput from '@/features/showPage/components/RatingInput';
import { StarRating } from '@/components/Cards/StarRating';
import { CastCarousel } from '@/features/showPage/components/CastCarousel';
import { SeasonsList } from '@/features/showPage/components/SeasonsList';
import { ShowPageProps } from '@/features/showPage/types';

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
            <Section className="mt-20 relative w-full">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-primary/5 to-transparent rounded-3xl -z-10" />
                <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row gap-12 p-8">
                    <div className="relative w-full md:w-[400px] aspect-[2/3] rounded-2xl overflow-hidden group">
                        <Image
                            src={show.image || "https://placehold.co/400x400"}
                            alt={"Poster de la série " + show.title}
                            fill
                            sizes='100%'
                            className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                    <div className="flex flex-col gap-6 flex-1">
                        <div className="space-y-4">
                            <h1 className="text-4xl font-title text-text-primary">{show.title}</h1>
                            <div className='flex flex-col gap-2'>
                                <h2 className="text-xl font-title text-accent-primary">Genres</h2>
                                <p className='text-text-primary/80'>{genres.join(', ')}</p>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <h2 className="text-xl font-title text-accent-primary">Note</h2>
                                <div className="flex items-center gap-4">
                                    <StarRating rating={averageRating} size="lg" />
                                    <span className="text-text-primary/80">({totalRatings} avis)</span>
                                </div>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <h2 className="text-xl font-title text-accent-primary">Nombre de saisons</h2>
                                <p className="text-text-primary/90">{show._count?.seasons}</p>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <h2 className="text-xl font-title text-accent-primary">Synopsis</h2>
                            <p className="text-text-primary/90 leading-relaxed">{synopsis}</p>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <h2 className="text-xl font-title text-accent-primary">Plateformes</h2>
                            <p className='text-text-primary/80'>{platforms.join(', ')}</p>
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
            </Section>

            <Section className='mx-auto mt-20'>
                <SeasonsList seasons={seasons} />
            </Section>

            <Section className='mx-auto mt-20'>
                <CastCarousel cast={cast} />
            </Section>

            {user !== null && isAuthenticated && !isLoading && (
                <Section className="mt-20 relative w-full">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-primary/5 to-transparent rounded-3xl -z-10" />
                    <div className="w-full max-w-7xl mx-auto p-8">
                        <AddComment idShow={show.show_id} />
                    </div>
                </Section>
            )}

            <Section className="mt-10 mb-20 relative w-full">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-primary/5 to-transparent rounded-3xl -z-10" />
                <div className="w-full max-w-7xl mx-auto p-8">
                    <h2 className="font-title text-2xl text-accent-primary mb-8">Commentaires ({show._count?.comments})</h2>
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