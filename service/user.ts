import { Prisma } from "@prisma/client";
import { prisma } from "@/lib/prisma";

export async function create(data: Prisma.UserCreateInput) {
  try {
    const user = await prisma.user.create({ data });

    if (!user) {
      return [
        false,
        new Error("There was some error creating an entry in the database."),
      ];
    }

    return [true, { data: user }];
  } catch (error) {
    return [false, new Error("Error 500 internal server error.")];
  }
}

export async function findOne(where: Prisma.UserWhereInput) {
  try {
    const user = await prisma.user.findFirst({
      where: where,
      select: {
        id: true,
        authId: true,
        name: true,
        bio: true,
        email: true,
        image: true,
        posts: true,
        comments: true,
        likes: true,
        upadtedAt: true,
        createdAt: true,
      },
    });

    if (!user) {
      return [
        false,
        new Error("There was some error finding the entry from the database"),
      ];
    }

    return [true, { data: user }];
  } catch (error) {
    return [false, new Error("Error 500 Internal Server Error")];
  }
}

export async function findMany(where?: Prisma.UserWhereInput) {
  try {
    const user = await prisma.user.findMany({
      where: where,
      select: {
        id: true,
        authId: true,
        name: true,
        bio: true,
        email: true,
        image: true,
        posts: true,
        comments: true,
        likes: true,
        upadtedAt: true,
        createdAt: true,
      },
    });

    if (!user) {
      return [
        false,
        new Error("There was some error finding the entries from the database"),
      ];
    }

    return [true, { data: user }];
  } catch (error) {
    return [false, new Error("Error 500 Internal Server Error")];
  }
}

export async function deleteOne(where: Prisma.UserWhereUniqueInput) {
  try {
    const user = await prisma.user.delete({
      where: where,
    });

    if (!user) {
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

export async function deleteMany(where: Prisma.UserWhereInput) {
  try {
    const user = await prisma.user.deleteMany({
      where: where,
    });

    if (!user) {
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
  where: Prisma.UserWhereUniqueInput,
  data: Prisma.UserUpdateInput
) {
  try {
    const user = await prisma.user.update({
      where: where,
      data: data,
    });

    if (!user) {
      return [
        false,
        new Error("There was some error updating the entry in the database"),
      ];
    }

    return [true, { data: user }];
  } catch (error) {
    return [false, new Error("Error 500 Internal Server Error")];
  }
}
