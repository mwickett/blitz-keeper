import { UserButton } from "@clerk/nextjs";

export default function Private() {
  return (
    <div className="h-screen">
      <h1>Private</h1>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
