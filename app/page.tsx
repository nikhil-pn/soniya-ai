import Avatar from "@/components/Avatar";
import PlanceButton from "@/components/PlaneButton";
import Title from "@/components/Title";

import VideoPlayer from "@/components/VideoPlayer";
// bg-[#DAC6B3]
// purple  bg-[#03040B]
export default function Home() {
  return (
    <main className="bg-[#03040B] flex flex-col items-center justify-center min-h-screen gap-4">
      {/* <VideoPlayer></VideoPlayer> */}
      {/* <Title></Title> */}
      <Avatar></Avatar>
      <Title></Title>

    </main>
  )
}
