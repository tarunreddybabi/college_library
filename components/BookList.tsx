import React from "react";

interface Props {
  title: string;
  books: Book[];
  containerClassName?: string;
}

const BookList = ({ title, books, containerClassName }: Props) => {
  if (books.length < 2) return;

  return (
    <section className="book-list">
      <h2 className="font-bebas-neue text-4xl text-light-100">{title}</h2>
    </section>
  );
};

export default BookList;
