import { data } from "autoprefixer";
import { useCallback, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import MealList from "./MealList";


const [mealData, setMealData] = useState(null);
const [calories, setCalories] = useState(2000);

function handleChange(e){
  setCalories(e.target.value);
}
function getMealData(){
  fetch(
    `https://api.spoonacular.com/mealplanner/generate?timeFrame=day?apiKey=60a46f841bfc4fc781959fa15392ad9f&timeFrame=day&targetCalories=${calories}`
  )
  .then((response) => response.json())
  .then((data) => {
    setMealData(data);
    console.log(data);
  })
  .catch(()=>{
    console.log("error");
  });
}

const Menu = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  const onAboutTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='aboutUs']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onLogInClick = useCallback(() => {
    navigate("/log-in");
  }, [navigate]);

  const onSignUpClick = useCallback(() => {
    navigate("/sign-up");
  }, [navigate]);

  return (
    <div className="relative bg-black w-full h-[1024px] overflow-hidden">
      <nav
        className="absolute top-[0px] left-[0px] bg-black w-[1440px] h-[124px] overflow-hidden [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in] opacity-[0]"
        data-animate-on-scroll
      >
        <b className="absolute top-[44px] left-[120px] text-lg font-comfortaa text-white text-left">
          LOGO
        </b>
        <div className="absolute top-[48px] left-[632px] flex flex-row items-center justify-center gap-[32px]">
          <a className="[text-decoration:none] relative text-base font-semibold font-comfortaa text-white text-left">
            Home
          </a>
          <div
            className="relative text-base font-semibold font-comfortaa text-white text-left cursor-pointer"
            onClick={onAboutTextClick}
          >
            About
          </div>
        </div>
        <div className="absolute top-[48px] left-[1109px] flex flex-row items-start justify-start gap-[32px]">
          <Link
            className="cursor-pointer [text-decoration:none] relative text-base font-bold font-comfortaa text-white text-left"
            to="/sign-up"
            onClick={onLogInClick}
          >
            Log In
          </Link>
          <Link
            className="cursor-pointer [text-decoration:none] relative text-base font-semibold font-comfortaa text-white text-left"
            to="/log-in"
            onClick={onSignUpClick}
          >
            Sign Up
          </Link>
        </div>
        <img
          className="absolute h-[19.35%] w-[1.67%] top-[39.52%] right-[25.21%] bottom-[41.13%] left-[73.13%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="../vector.svg"
        />
      </nav>
      <div className="Menu">
        <section className="controls">
          <input
          type="number"
          placeholder="Calories (e.g. 2000)"
          onChange={handleChange}
          />
        </section>
        <botton onClick={getMealData}>Get Daily Meal Plan</botton>
        {mealData && <MealList mealData={mealData}/>}

      </div>
    </div>
  );
};

export default Menu;
