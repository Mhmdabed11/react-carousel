import React from "react";
import "./carousel.scss";

const NUM: number = 5;
const TIME: number = 600;

type Movie = {
  color: string | number;
  key: number;
  movie: string;
  title: number;
};

export default function Carousel({ slides }: { slides: any }) {
  const sliderRef = React.useRef(null);
  const [isSliding, setSliding] = React.useState<boolean>(false);
  const [direction, setDirection] = React.useState<number>(0);
  const [hasMovedOnce, setHasMovedOnce] = React.useState<boolean>(false);
  const [activeSlides, setActiveSlides] = React.useState<number>(0);
  const [width, setWidth] = React.useState<number>(
    window ? window.innerWidth : 0
  );
  const [leftEdgeIndex, setLeftEdgeIndex] = React.useState<number>(0);
  const [slidesToMove, setSlidesToMove] = React.useState<number>(activeSlides);
  const [movies, setMovies] = React.useState<Movie[]>(slides);

  let length = slides.length;

  React.useEffect(() => {
    console.log("MOVIES ", movies);
  }, [movies]);

  React.useEffect(() => {
    if (slides.length <= 2 * activeSlides && length > activeSlides) {
      let newMovies = [...movies];
      //@ts-ignore
      newMovies = newMovies.map(movie => ({
        ...movie,
        key: movie.key + 1000
      }));
      let newMoviesCopy = [...newMovies];
      newMoviesCopy = newMoviesCopy.map(movie => ({
        ...movie,
        key: movie.key + 2000
      }));
      setMovies([...movies, ...newMovies, ...newMoviesCopy]);
    }
  }, [slides, activeSlides]);

  // add event listener to window
  React.useEffect(() => {
    if (window) {
      const updateWidth = () => {
        setWidth(window.innerWidth);
      };
      window.addEventListener("resize", updateWidth);

      return () => window.removeEventListener("resize", updateWidth);
    }
  });

  // set active slidees num
  React.useLayoutEffect(() => {
    if (width > 1200) {
      if (activeSlides !== NUM) setActiveSlides(NUM);
    }
  }, [width, activeSlides]);

  const x = 100 + 100 / activeSlides;

  const styles =
    hasMovedOnce && !isSliding
      ? { transform: `translateX(-${x}%)` }
      : hasMovedOnce && isSliding && direction === 1
      ? {
          transform: `translateX(-${x + slidesToMove * (100 / activeSlides)}%)`,
          transition: `all ${TIME}ms ease`
        }
      : !hasMovedOnce &&
        isSliding &&
        direction === 1 &&
        length <= 2 * activeSlides &&
        slidesToMove < activeSlides
      ? {
          transform: `translateX(-${(slidesToMove * 100) / activeSlides}%)`,
          transition: `all ${TIME}ms ease`
        }
      : !hasMovedOnce &&
        isSliding &&
        direction === 1 &&
        length > 2 * activeSlides
      ? {
          transform: `translateX(-${100}%)`,
          transition: `all ${TIME}ms ease`
        }
      : //BACKWARDS
      isSliding && direction === -1 && slidesToMove !== 0
      ? {
          transform: `translateX(-${x - slidesToMove * (100 / activeSlides)}%)`,
          transition: `all ${TIME}ms ease`
        }
      : isSliding && direction === -1 && slidesToMove === 0
      ? {
          transform: `translateX(-${100 / activeSlides}%)`,
          transition: `all ${TIME}ms ease`
        }
      : { transform: "translateX(0%)" };

  // handle next click
  const handleNext = () => {
    setSliding(true);
    setDirection(1);

    // handle left edge index
    let slidesToShift: number = 0;
    if (leftEdgeIndex + activeSlides !== length) {
      let remainingSlides: number = length - (leftEdgeIndex + activeSlides);
      if (remainingSlides < 0) {
        remainingSlides = 0;
      }
      if (remainingSlides >= activeSlides) {
        setLeftEdgeIndex(leftEdgeIndex => leftEdgeIndex + activeSlides);
        setSlidesToMove(activeSlides);
        slidesToShift = activeSlides;
      } else {
        setLeftEdgeIndex(leftEdgeIndex => leftEdgeIndex + remainingSlides);
        setSlidesToMove(remainingSlides);
        slidesToShift = remainingSlides;
      }
    } else {
      setLeftEdgeIndex(0);
      setSlidesToMove(activeSlides);
      slidesToShift = activeSlides;
    }
    console.log("SLIDES TO MOVE", slidesToShift);
    // update state after specific time to make slidinjg illusion
    setTimeout(() => {
      if (hasMovedOnce) {
        let moviesCopy: Movie[] = [...movies];
        let tempArray: Movie[] = [];
        for (let i: number = 0; i < slidesToShift; i++) {
          if (
            moviesCopy &&
            Array.isArray(moviesCopy) &&
            moviesCopy.length > 0
          ) {
            let movieAtIndexZero: Movie = moviesCopy.shift()!;
            tempArray.push(movieAtIndexZero);
          }
        }

        moviesCopy = [...moviesCopy, ...tempArray];
        setMovies(moviesCopy);
      }
      if (!hasMovedOnce) {
        if (length > 2 * activeSlides) {
          let newMovies: Movie[] = [...movies];
          newMovies = newMovies.map(item => ({
            ...item,
            key: item.title + 20
          }));
          let newMoviesCopy: Movie[] = [...newMovies];
          if (
            newMoviesCopy &&
            Array.isArray(newMoviesCopy) &&
            newMoviesCopy.length > 0
          ) {
            let movieAtEndOfArray: Movie = newMoviesCopy.pop()!;
            setMovies(movies => [
              movieAtEndOfArray,
              ...movies,
              ...newMoviesCopy
            ]);
          }
        } else {
          let moviesCopy = [...movies];
          let tempArray = [];
          console.log(slidesToShift);
          for (let i = 0; i < 2 * slidesToShift - 1; i++) {
            tempArray.push(moviesCopy.shift());
          }
          //@ts-ignore
          setMovies([...moviesCopy, ...tempArray]);
        }
        setHasMovedOnce(true);
      }
      setSliding(false);
      setDirection(0);
    }, TIME);
  };

  const handlePrevious = () => {
    setSliding(true);
    setDirection(-1);
    let slidesToPop: number = 0;
    if (leftEdgeIndex !== 0) {
      if (leftEdgeIndex >= activeSlides) {
        slidesToPop = activeSlides;
        setLeftEdgeIndex(leftEdgeIndex => leftEdgeIndex - activeSlides);
        setSlidesToMove(0);
      } else {
        slidesToPop = leftEdgeIndex;
        setLeftEdgeIndex(0);
        setSlidesToMove(leftEdgeIndex);
      }
    } else {
      setLeftEdgeIndex(length - activeSlides);
      setSlidesToMove(activeSlides);
      slidesToPop = activeSlides;
    }

    setTimeout(() => {
      let moviesCopy: Movie[] = [...movies];
      let tempArray: Movie[] = [];
      for (let i = 0; i < slidesToPop; i++) {
        if (moviesCopy && Array.isArray(moviesCopy) && moviesCopy.length > 0) {
          let movieAtEndOfArray: Movie = moviesCopy.pop()!;
          tempArray.unshift(movieAtEndOfArray);
        }
      }
      moviesCopy = [...tempArray, ...moviesCopy];
      setMovies(moviesCopy);
      setSliding(false);
      setDirection(0);
    }, TIME);
  };

  return (
    <div className="slider">
      <div ref={sliderRef} className="slider-wrapper">
        <div style={styles}>
          {movies.map((movie, index) => {
            return (
              <div
                key={movie.key}
                className="slider-item"
                // style={{ backgroundColor: movie.color }}
              >
                {/* {movie.title} */}
                <img src={movie.movie} alt={movie.title.toString()} />
              </div>
            );
          })}
        </div>
      </div>
      <button
        className="previous"
        disabled={!hasMovedOnce}
        onClick={() => {
          if (!isSliding) {
            handlePrevious();
          }
        }}
      >
        <svg
          width="8"
          height="12"
          viewBox="0 0 8 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.59 12L8 10.59L3.42 6L8 1.41L6.59 0L0.589999 6L6.59 12Z"
            fill="white"
          />
        </svg>
      </button>
      <button
        className="next"
        onClick={() => {
          if (!isSliding) {
            handleNext();
          }
        }}
      >
        <svg
          width="8"
          height="12"
          viewBox="0 0 8 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 0L0.59 1.41L5.17 6L0.59 10.59L2 12L8 6L2 0Z"
            fill="white"
          />
        </svg>
      </button>
    </div>
  );
}
