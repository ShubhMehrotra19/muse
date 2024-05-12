import { Prisma } from "@prisma/client";
import { prisma } from "@/lib/prisma";

export async function create(data: Prisma.PostsCreateInput) {
  try {
    const post = await prisma.posts.create({ data });

    if (!post) {
      return [
        false,
        new Error("There was some error creating an entry in the database."),
      ];
    }

    return [true, { data: post }];
  } catch (error) {
    return [false, new Error("Error 500 internal server error.")];
  }
}

export async function findOne(where: Prisma.PostsWhereInput) {
  try {
    const post = await prisma.posts.findFirst({
      where: where,
      select: {
        id: true,
        user: true,
        userId: true,
        image: true,
        text: true,
        comments: true,
        likes: true,
        upadtedAt: true,
        createdAt: true,
      },
    });

    if (!post) {
      return [
        false,
        new Error("There was some error finding the entry from the database"),
      ];
    }

    return [true, { data: post }];
  } catch (error) {
    return [false, new Error("Error 500 Internal Server Error")];
  }
}

export async function findMany(where?: Prisma.PostsWhereInput) {
  try {
    const post = await prisma.posts.findMany({
      where: where,
      select: {
        id: true,
        user: true,
        userId: true,
        image: true,
        text: true,
        comments: true,
        likes: true,
        upadtedAt: true,
        createdAt: true,
      },
    });

    if (!post) {
      return [
        false,
        new Error("There was some error finding the entries from the database"),
      ];
    }

    return [true, { data: post }];
  } catch (error) {
    return [false, new Error("Error 500 Internal Server Error")];
  }
}

export async function deleteOne(where: Prisma.PostsWhereUniqueInput) {
  try {
    const post = await prisma.posts.delete({
      where: where,
    });

    if (!post) {
      return [
        false,
        new Error("There was some error deleting the entry from the database"),
      ];
    }

    return [true, { data: "Deleted" }];
  } catch (error) {
    return [false, new Error("Error 500 Internal Server Error")];
  }
}

export async function deleteMany(where: Prisma.PostsWhereInput) {
  try {
    const post = await prisma.posts.deleteMany({
      where: where,
    });

    if (!post) {
      return [
        false,
        new Error(
          "There was some error deleting the entries from the database"
        ),
      ];
    }

    return [true, { data: "Deleted" }];
  } catch (error) {
    return [false, new Error("Error 500 Internal Server Error")];
  }
}

export async function update(
  where: Prisma.PostsWhereUniqueInput,
  data: Prisma.PostsUpdateInput
) {
  try {
    const post = await prisma.posts.update({
      where: where,
      data: data,
    });

    if (!post) {
      return [
        false,
        new Error("There was some error updating the entry in the database"),
      ];
    }

    return [true, { data: post }];
  } catch (error) {
    return [false, new Error("Error 500 Internal Server Error")];
  }
}
