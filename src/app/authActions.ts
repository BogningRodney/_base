"use client";

import { signOut } from "next-auth/react";

export default async function handlesSignOut() {
  await signOut();
}
