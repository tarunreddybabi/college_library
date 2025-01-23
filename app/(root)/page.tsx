import BookList from "@/components/BookList";
import BookOverview from "@/components/BookOverview";
import { Button } from "@/components/ui/button";
import { sampleBooks } from "@/constants";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <BookOverview {...sampleBooks[0]} userId="122" createdAt={null} />
      <BookList title ="Latest Books" books={sampleBooks} containerClassName="mt-28"/>
    </>
    
      
  );
}
