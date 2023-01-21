import { useCallback, useEffect } from "react";
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const GLUGWeb = () => {
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
    <div className="relative bg-white w-full h-[2276px] overflow-hidden text-left text-xl text-black font-comfortaa">
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
      <div className="absolute top-[124px] left-[0px] bg-black w-[1440px] h-[1024px] overflow-hidden text-white">
        <h3 className="m-0 absolute top-[117px] left-[120px] text-[inherit] font-bold font-inherit">
          <p className="[margin-block-start:0] [margin-block-end:0px]">{`Food Ordering Made `}</p>
          <p className="m-0">Easy</p>
        </h3>
        <h4 className="m-0 absolute top-[299px] left-[120px] text-lg font-bold font-inherit text-gold-100">
          Get Started Today
        </h4>
        <img
          className="absolute top-[70px] left-[842px] w-[523px] h-[530px] object-cover"
          alt=""
          src="../unsplash-jsplkuauwsiremovebgpreview-1@2x.png"
        />
        <Button
          className="absolute top-[385px] left-[120px]"
          sx={{ width: 180 }}
          variant="contained"
          color="warning"
        >
          Order Now
        </Button>
      </div>
      <article className="absolute top-[778px] left-[265px] rounded-3xl bg-black w-[960px] h-[520px] overflow-hidden text-left text-base text-white font-comfortaa">
        <div className="absolute top-[0px] left-[0px] w-[960px] h-[520px]">
          <div className="absolute top-[0px] left-[0px] rounded-3xl [background:linear-gradient(0deg,_#000_32.29%,_#999)] w-[280px] h-[520px] overflow-hidden">
            <img
              className="absolute top-[57px] left-[53px] w-[173.33px] h-[260px] object-cover"
              alt=""
              src="../unsplashuc0hzduitwy@2x.png"
            />
            <b className="absolute top-[341px] left-[108px]">Food</b>
            <div className="absolute top-[392px] left-[62px] text-sm font-light inline-block w-[156px]">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, `}</div>
          </div>
          <div className="absolute top-[0px] left-[340px] rounded-3xl [background:linear-gradient(0deg,_#000_32.29%,_#999)] w-[280px] h-[520px] overflow-hidden">
            <img
              className="absolute top-[58px] left-[54px] w-[172.41px] h-[260px] object-cover"
              alt=""
              src="../unsplashofismyezpny@2x.png"
            />
            <b className="absolute top-[342px] left-[107px]">Food</b>
            <div className="absolute top-[393px] left-[62px] text-sm font-light inline-block w-[156px]">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, `}</div>
          </div>
          <div className="absolute top-[0px] left-[680px] rounded-3xl [background:linear-gradient(0deg,_#000_32.29%,_#999)] w-[280px] h-[520px] overflow-hidden">
            <img
              className="absolute top-[59px] left-[53px] w-[173.33px] h-[260px] object-cover"
              alt=""
              src="../unsplashzuidlsz3xlg@2x.png"
            />
            <b className="absolute top-[343px] left-[107px]">Food</b>
            <div className="absolute top-[394px] left-[62px] text-sm font-light inline-block w-[156px]">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, `}</div>
            <img
              className="absolute top-[202px] left-[217px] w-11 h-11"
              alt=""
              src="../ellipse-1.svg"
            />
            <img
              className="absolute h-[4.62%] w-[8.57%] top-[40.77%] right-[10.36%] bottom-[54.62%] left-[81.07%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="../vector1.svg"
            />
          </div>
        </div>
      </article>
      <h1
        className="m-0 absolute top-[1418px] left-[120px] text-[inherit] font-bold font-inherit"
        data-scroll-to="aboutUs"
      >
        About Us
      </h1>
      <p
        className="m-0 absolute top-[1537px] left-[120px] text-base font-bold inline-block w-[684px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in] opacity-[0]"
        data-animate-on-scroll
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum
      </p>
      <img
        className="absolute top-[1467px] left-[841px] w-[479px] h-80 object-cover"
        alt=""
        src="../unsplashn-y88twmgwa@2x.png"
      />
      <footer
        className="absolute top-[1907px] left-[0px] bg-gray-1000 w-[1440px] h-[369px] overflow-hidden [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in] opacity-[0] text-left text-base text-white font-comfortaa"
        data-animate-on-scroll
      >
        <b className="absolute top-[76px] left-[84px] text-lg">Company</b>
        <b className="absolute top-[76px] left-[503px] text-lg">Legal</b>
        <div className="absolute top-[132px] left-[84px] font-medium">
          About
        </div>
        <div className="absolute top-[132px] left-[503px] font-medium">
          Privacy Policy
        </div>
        <div className="absolute top-[179px] left-[503px] font-medium">
          Licence
        </div>
        <div className="absolute top-[226px] left-[503px] font-medium">{`Terms & Condition`}</div>
        <div className="absolute top-[179px] left-[84px] font-medium">Menu</div>
      </footer>
    </div>
  );
};

export default GLUGWeb;
