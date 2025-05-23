-- CreateTable
CREATE TABLE `user` (
    `id` VARCHAR(191) NOT NULL,
    `name` TEXT NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `emailVerified` BOOLEAN NOT NULL,
    `image` TEXT NULL,
    `createdAt` DATETIME(3) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `user_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `session` (
    `id` VARCHAR(191) NOT NULL,
    `expiresAt` DATETIME(3) NOT NULL,
    `token` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,
    `ipAddress` TEXT NULL,
    `userAgent` TEXT NULL,
    `userId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `session_token_key`(`token`),
    INDEX `session_userId_fkey`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `account` (
    `id` VARCHAR(191) NOT NULL,
    `accountId` TEXT NOT NULL,
    `providerId` TEXT NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `accessToken` TEXT NULL,
    `refreshToken` TEXT NULL,
    `idToken` TEXT NULL,
    `accessTokenExpiresAt` DATETIME(3) NULL,
    `refreshTokenExpiresAt` DATETIME(3) NULL,
    `scope` TEXT NULL,
    `password` TEXT NULL,
    `createdAt` DATETIME(3) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `account_userId_fkey`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `verification` (
    `id` VARCHAR(191) NOT NULL,
    `identifier` TEXT NOT NULL,
    `value` TEXT NOT NULL,
    `expiresAt` DATETIME(3) NOT NULL,
    `createdAt` DATETIME(3) NULL,
    `updatedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `genres` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `series_genres` (
    `id_show` INTEGER NOT NULL,
    `id_genre` INTEGER NOT NULL,

    INDEX `SeriesGenres_id_genre_fkey`(`id_genre`),
    PRIMARY KEY (`id_show`, `id_genre`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `show_comments` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `content` TEXT NOT NULL,
    `postedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `id_user` VARCHAR(191) NOT NULL,
    `id_show` INTEGER NOT NULL,

    INDEX `Comments_id_show_fkey`(`id_show`),
    INDEX `Comments_id_user_fkey`(`id_user`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `episode_comments` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `content` TEXT NOT NULL,
    `postedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `id_user` VARCHAR(191) NOT NULL,
    `id_episode` INTEGER NOT NULL,

    INDEX `Comments_id_episode_fkey`(`id_episode`),
    INDEX `Episode_comments_id_user_fkey`(`id_user`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `episodes` (
    `episode_id` INTEGER NOT NULL,
    `season_id` INTEGER NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `season_number` INTEGER NOT NULL,
    `episode_number` INTEGER NULL,
    `airdate` VARCHAR(512) NULL,
    `summary` TEXT NULL,
    `url` VARCHAR(255) NULL,
    `image` VARCHAR(255) NULL,

    INDEX `season_id`(`season_id`),
    PRIMARY KEY (`episode_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `cast` (
    `person_id` INTEGER NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `image` VARCHAR(255) NULL,

    PRIMARY KEY (`person_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `seasons` (
    `season_id` INTEGER NOT NULL,
    `show_id` INTEGER NOT NULL,
    `summary` TEXT NULL,
    `image` VARCHAR(255) NULL,

    INDEX `show_id`(`show_id`),
    PRIMARY KEY (`season_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `show_cast` (
    `show_id` INTEGER NOT NULL,
    `person_id` INTEGER NOT NULL,
    `character_name` VARCHAR(255) NOT NULL,

    INDEX `person_id`(`person_id`),
    PRIMARY KEY (`show_id`, `person_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `shows` (
    `show_id` INTEGER NOT NULL,
    `title` VARCHAR(255) NOT NULL,
    `summary` TEXT NULL,
    `image` VARCHAR(255) NULL,

    PRIMARY KEY (`show_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user_shows` (
    `id_user` VARCHAR(191) NOT NULL,
    `id_show` INTEGER NOT NULL,
    `is_favorite` BOOLEAN NULL DEFAULT false,
    `is_archived` BOOLEAN NULL DEFAULT false,
    `status` ENUM('to_watch', 'ongoing', 'finished') NULL DEFAULT 'to_watch',
    `added_at` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `rating` TINYINT NULL,

    INDEX `show_user_fk`(`id_show`),
    PRIMARY KEY (`id_user`, `id_show`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user_episodes` (
    `id_user` VARCHAR(191) NOT NULL,
    `id_episode` INTEGER NOT NULL,
    `watched_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `user_episodes_id_episode_idx`(`id_episode`),
    PRIMARY KEY (`id_user`, `id_episode`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `session` ADD CONSTRAINT `session_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `account` ADD CONSTRAINT `account_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `series_genres` ADD CONSTRAINT `series_genres_id_genre_fkey` FOREIGN KEY (`id_genre`) REFERENCES `genres`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `series_genres` ADD CONSTRAINT `series_genres_id_show_fkey` FOREIGN KEY (`id_show`) REFERENCES `shows`(`show_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `show_comments` ADD CONSTRAINT `show_comments_id_user_fkey` FOREIGN KEY (`id_user`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `show_comments` ADD CONSTRAINT `show_comments_id_show_fkey` FOREIGN KEY (`id_show`) REFERENCES `shows`(`show_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `episode_comments` ADD CONSTRAINT `episode_comments_id_user_fkey` FOREIGN KEY (`id_user`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `episode_comments` ADD CONSTRAINT `episode_comments_id_episode_fkey` FOREIGN KEY (`id_episode`) REFERENCES `episodes`(`episode_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `episodes` ADD CONSTRAINT `episodes_ibfk_1` FOREIGN KEY (`season_id`) REFERENCES `seasons`(`season_id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `seasons` ADD CONSTRAINT `seasons_ibfk_1` FOREIGN KEY (`show_id`) REFERENCES `shows`(`show_id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `show_cast` ADD CONSTRAINT `show_cast_ibfk_1` FOREIGN KEY (`show_id`) REFERENCES `shows`(`show_id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `show_cast` ADD CONSTRAINT `show_cast_ibfk_2` FOREIGN KEY (`person_id`) REFERENCES `cast`(`person_id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `user_shows` ADD CONSTRAINT `show_user_fk` FOREIGN KEY (`id_show`) REFERENCES `shows`(`show_id`) ON DELETE CASCADE ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `user_shows` ADD CONSTRAINT `user_show_fk` FOREIGN KEY (`id_user`) REFERENCES `user`(`id`) ON DELETE CASCADE ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `user_episodes` ADD CONSTRAINT `user_episodes_id_user_fkey` FOREIGN KEY (`id_user`) REFERENCES `user`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user_episodes` ADD CONSTRAINT `user_episodes_id_episode_fkey` FOREIGN KEY (`id_episode`) REFERENCES `episodes`(`episode_id`) ON DELETE CASCADE ON UPDATE CASCADE;
