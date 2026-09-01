import BookCover from "./components/BookCover";
import BookPage from "./components/BookPage";

const HomePage = () => {
  return (
    <main className="container">
      <div className="book">
        <BookCover />
        <BookPage />
      </div>
    </main>
  );
};

export default HomePage;
