import { currentUser } from "@clerk/nextjs/server";
import { db } from "./db";

export const checkUser = async () => {
  const user = await currentUser();

  // check if user is signed in
  if (!user) return null;

  // check if user exists in db
  const loggedInUser = await db.user.findUnique({
    where: {
      clerkUserId: user.id,
    },
  });

  // if their is user return user
  if (loggedInUser) {
    return loggedInUser;
  }

  // if no in db, create user
  const newUser = await db.user.create({
    data: {
      clerkUserId: user.id,
      email: user.emailAddresses[0]?.emailAddress,
      name: `${user.firstName} ${user.lastName}`,
      imageUrl: user.imageUrl,
    },
  });

  return newUser;
};
