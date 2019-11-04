import React from "react";
import "./carousel.scss";
import { relative } from "path";
const NUM = 6;
const TIME = 600;
export default function Carousel() {
  const sliderRef = React.useRef(null);
  const [isSliding, setSliding] = React.useState(false);
  const [direction, setDirection] = React.useState(0);
  const [hasMovedOnce, setHasMovedOnce] = React.useState(false);
  const [activeSlides, setActiveSlides] = React.useState(0);
  const [width, setWidth] = React.useState(window ? window.innerWidth : 0);
  const [leftEdgeIndex, setLeftEdgeIndex] = React.useState(0);
  const [slidesToMove, setSlidesToMove] = React.useState(activeSlides);
  const [movies, setMovies] = React.useState([
    {
      title: 0,
      key: 0,
      movie:
        "https://occ-0-3409-2773.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABaxvzq-QrYi7gL4wOyOBc63ao-5441L6LgSYJ5KfsOAedVyIDHPgkNXyU8xuKD6lRdr7CrN2Eg9WtfBW6yRCHDpdBWjuFbEQ.webp?r=88d",
      color: "red"
    },
    {
      title: 1,
      key: 1,
      movie:
        "https://occ-0-3409-2773.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABd0Ng-XYm6lVJoQkjZv1fRFK-eEpRGrYZwqv6g4R4mMbaRntHFu5D_iVxuZEiFs74hKt4RTzYqRv8vgsrBqcqZEpSrGDTBV-.webp?r=e8f",
      color: "green"
    },
    {
      title: 2,
      key: 2,
      movie:
        "https://occ-0-3409-2773.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABQTuEMRqug-Pb0-w5xE3z0gFDSOpKVcVWNu-qwqwa0TfN0zffHhr2b2NBZdnK8t3EEI8M7ESi4dBQ1SWBVADjNFzAQ_8TiyH.webp?r=72f",
      color: "yellow"
    },
    {
      title: 3,
      key: 3,
      movie:
        "https://occ-0-3409-2773.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABYHPj_fHm-MQx-fxFppjfWz8UJY0WwurrKOoV2Q4GJ2oKYWgaqZoVb-HxDyXdX0eJU81Xv2CS_KeLsdpG2wENCvbPEQRPT50MpeCJjKbJIYEtTlKgVY3L8SzCy5BbYYwXg.jpg?r=6b9",
      color: "blue"
    },
    {
      title: 4,
      key: 4,
      movie:
        "https://occ-0-3409-2773.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABTHSLjT6Oqkl4TS2OSEuBhIfW6xB5-pyEOlIzoeNtuL_OLB_32ogRbGlNMKQ-y6kbzm6_QiMl7_h3kqQgBlo6UWkrWJ33G0s.jpg?r=854",
      color: "orange"
    },
    {
      title: 5,
      key: 5,
      movie:
        "https://occ-0-3409-2773.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABQBZ-Hs2sbqvNzoMK_NNzhLV29bfUGZ3zfa0VMRZRoWC-tzDy_Zr3Pa9EEkcdEnvOy0XDj_UvepaT5P22XnNscJ_gyLKziXB.webp?r=4fb",
      color: "purple"
    },
    {
      title: 6,
      key: 6,
      movie:
        "https://occ-0-3409-2773.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABSO0Uahpb8-OKaMrCJ0ByzZjl0smJiIGc3nPCNtQWaV3H29fjwy0IfQ-tAzdpz73Yp6nJ0ivR4t2ngSF8SWtXHz_kDTBKoPA.webp?r=4de",
      color: "red"
    },
    {
      title: 7,
      key: 7,
      movie:
        "https://occ-0-3409-2773.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABXdkA5mmI9OxER465PCbCmRFVdyxGl3TclzKgZm_6Pn7hyVsy1FvAPtsbPMsoKZ5H56EPsnFZlqmEdXf_rmz98fEvQ6WZhxE.jpg?r=e7b",
      color: "black"
    },
    {
      title: 8,
      key: 8,
      movie:
        "https://occ-0-3409-2773.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABdUHnWCCn29uk30cE_YipZxY2DU-KsJGJ1PvWpULKDHL0MMdpnlzo-iFlJc-FRGfrwyxLcvNC7YOZGYTtwK8zNRpJ-7_2Wx7.jpg?r=de9",
      color: "white"
    },
    {
      title: 9,
      key: 9,
      movie:
        "https://occ-0-3409-300.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABf23LNHN5pkUwKm4Y-HVwnHmqlWBZY07m909lmJ81gd6ZRYoD4klGGXpl6oobb0UXQDt2PGKsyDou17mhin13jEPdkXoAIFWj4rNV_JhgksC6QHFr5TNZRwsckIU.jpg?r=978",
      color: "cyan"
    },
    {
      title: 10,
      key: 10,
      movie:
        "https://occ-0-3409-300.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABewXZBFgqhncFj1bH7-RYmdeq_nDlM_QxK01ZC6qMg8y45vtzrR2KC0jU_VSUZElYnqN6UMHacJZxAbvvujrwGlWQD6bjGFZEITX6bcopOZHMwVKaKq2aop_6Q3-.jpg?r=7f0",
      color: "#176dff"
    },
    {
      title: 11,
      key: 11,
      movie:
        "https://occ-0-3409-300.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABe7nQ-4uFaozqJT77LMhmej6PcaIPm3K_HNgPZD0b0n9dVz4E61H8cxiRxX6aGEZN7Srqimm1LTX1N7V-jMfCdEs-r3QaIlwqjbhsLY0XVu9V2MtzBDY7adyvXyk.jpg?r=680",
      color: "#135cdd"
    },
    {
      title: 12,
      key: 12,
      movie:
        "https://occ-0-3409-300.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABTq_xlD7mWNAxPZhErXQ-yvHOtSLy_yZkzM4aGPfadUkBoouXmuxLz2VJaNEQzr9OALFighp_ZZNM72B-KuESfLbotDX1j_ejXcpGhfVQnZ0eWDUEM6cydtOJh70NmBy9Q.webp?r=3db",
      color: "#efefef"
    },
    {
      title: 13,
      key: 13,
      movie:
        "https://occ-0-3409-300.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABWFE5iihqfc9JBHE0X-KSo581HCrf63U0rTcLj6IkY-HhG6qz7-rBVu1SiGNek1Y0CmbtSxOCu5wwymxgKr4g7IHuTS6pm1MT_zkXz88Os5gzyNzFX75fgpycpy-.jpg?r=0dc",
      color: "#e5fded"
    }
  ]);

  let length = 0;
  if (hasMovedOnce) {
    length = movies.length / 2;
  } else {
    length = movies.length;
  }

  React.useEffect(() => {
    console.log("MOVIES ", movies);
  }, [movies]);

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

  const x = 100;
  const styles =
    hasMovedOnce && !isSliding
      ? { transform: `translateX(-${x}%)` }
      : hasMovedOnce && isSliding && direction === 1
      ? {
          transform: `translateX(-${x + slidesToMove * (100 / activeSlides)}%)`,
          transition: `all ${TIME}ms ease`
        }
      : !hasMovedOnce && isSliding && direction === 1
      ? {
          transform: `translateX(-${x}%)`,
          transition: `all ${TIME}ms ease`
        }
      : isSliding && direction === -1 && slidesToMove !== 0
      ? {
          transform: `translateX(-${x - slidesToMove * (100 / activeSlides)}%)`,
          transition: `all ${TIME}ms ease`
        }
      : isSliding && direction === -1 && slidesToMove === 0
      ? {
          transform: `translateX(${0}%)`,
          transition: `all ${TIME}ms ease`
        }
      : { transform: "translateX(0%)" };
  const handleNext = () => {
    setSliding(true);
    setDirection(1);
    let slidesToShift = 0;
    if (leftEdgeIndex + activeSlides !== length) {
      let remainingSlides = length - (leftEdgeIndex + activeSlides);
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
    setTimeout(() => {
      if (hasMovedOnce) {
        let moviesCopy: Array<any> = [...movies];
        let tempArray = [];
        for (let i = 0; i < slidesToShift; i++) {
          tempArray.push(moviesCopy.shift());
        }
        moviesCopy = [...moviesCopy, ...tempArray];
        setMovies(moviesCopy);
      }
      setSliding(false);
      if (!hasMovedOnce) {
        let newMovies = [...movies];
        newMovies = newMovies.map(item => ({
          ...item,
          key: item.title + 20
        }));
        setMovies(movies => [...movies, ...newMovies]);
        setHasMovedOnce(true);
      }
      setDirection(0);
    }, TIME);
  };

  const handlePrevious = () => {
    setSliding(true);
    setDirection(-1);
    let slidesToPop = 0;
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
      let moviesCopy: Array<any> = [...movies];
      let tempArray = [];
      for (let i = 0; i < slidesToPop; i++) {
        tempArray.unshift(moviesCopy.pop());
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
                style={{ backgroundColor: movie.color }}
              >
                {movie.title}
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
