-- CreateTable
CREATE TABLE `professor` (
    `id_professor` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `senha` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `professor_email_key`(`email`),
    PRIMARY KEY (`id_professor`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `turma` (
    `id_turma` INTEGER NOT NULL AUTO_INCREMENT,
    `nome_turma` VARCHAR(191) NOT NULL,
    `id_professor` INTEGER NOT NULL,

    PRIMARY KEY (`id_turma`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `atividade` (
    `id_atividade` INTEGER NOT NULL AUTO_INCREMENT,
    `descricao` VARCHAR(191) NOT NULL,
    `id_turma` INTEGER NOT NULL,

    PRIMARY KEY (`id_atividade`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `turma` ADD CONSTRAINT `turma_id_professor_fkey` FOREIGN KEY (`id_professor`) REFERENCES `professor`(`id_professor`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `atividade` ADD CONSTRAINT `atividade_id_turma_fkey` FOREIGN KEY (`id_turma`) REFERENCES `turma`(`id_turma`) ON DELETE RESTRICT ON UPDATE CASCADE;
