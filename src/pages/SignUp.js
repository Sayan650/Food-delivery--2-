import { useCallback } from "react";
import { Button, TextField, Input, Icon } from "@mui/material";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  const onHomeClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onAboutText1Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onLogInText1Click = useCallback(() => {
    navigate("/log-in");
  }, [navigate]);

  const onSignUpClick = useCallback(() => {
    navigate("/sign-up");
  }, [navigate]);

  const onDontHaveAnClick = useCallback(() => {
    navigate("/log-in");
  }, [navigate]);

  return (
    <div className="relative bg-white w-full h-[1024px] overflow-hidden text-left text-base text-black font-comfortaa">
      <div className="absolute top-[160px] left-[180px] w-[710px] h-[647px] text-xl text-gray-200">
        <b className="absolute top-[0px] left-[0px]">Open Your Account</b>
        <Button
          className="absolute top-[591px] left-[0px]"
          sx={{ width: 560 }}
          variant="contained"
          color="warning"
        >
          Log In
        </Button>
        <Button
          className="absolute top-[107px] left-[0.17px]"
          sx={{ width: 320 }}
          variant="outlined"
          color="primary"
        >
          log in with Google
        </Button>
        <Button
          className="absolute top-[107px] left-[390px]"
          sx={{ width: 320 }}
          variant="outlined"
          color="primary"
        >
          log in with Apple ID
        </Button>
        <i className="absolute top-[196.83px] left-[318.41px] text-sm flex font-extrabold font-inter text-gray-400 text-center items-center justify-center w-[72.4px] h-[43.28px]">
          -OR-
        </i>
        <div className="absolute top-[339.07px] left-[13.67px] box-border w-[564.48px] h-px border-t-[1px] border-solid border-gray-800" />
        <div className="absolute top-[446.89px] left-[13.67px] box-border w-[564.48px] h-px border-t-[1px] border-solid border-gray-600" />
        <div className="absolute top-[554.7px] left-[13.67px] box-border w-[564.48px] h-px border-t-[1px] border-solid border-gray-900" />
        <TextField
          className="[border:none] bg-[transparent] absolute top-[296.29px] left-[29.12px]"
          sx={{ width: 236.88009643554688 }}
          color="primary"
          variant="standard"
          type="text"
          label="Full Name"
          placeholder="Placeholder"
          size="medium"
          margin="none"
        />
        <TextField
          className="[border:none] bg-[transparent] absolute top-[404.1px] left-[29.12px]"
          sx={{ width: 236.88009643554688 }}
          color="primary"
          variant="standard"
          type="text"
          label="Email ID"
          placeholder="Placeholder"
          size="medium"
          margin="none"
        />
        <TextField
          className="[border:none] bg-[transparent] absolute top-[511.13px] left-[29.12px]"
          sx={{ width: 236.88009643554688 }}
          color="primary"
          variant="filled"
          type="text"
          label="Password"
          placeholder="Placeholder"
          size="medium"
          margin="none"
        />
      </div>
      <i className="absolute top-[179px] left-[1213px] text-xs flex font-extrabold font-inter text-gray-300 items-center w-[133px] h-[32.27px]">
        ENGLISH (UK)
      </i>
      <img
        className="absolute top-[190.21px] left-[1323.94px] w-[19.51px] h-[12.48px]"
        alt=""
        src="../polygon-1.svg"
      />
      <div className="absolute top-[0px] left-[0px] [background:linear-gradient(180deg,_rgba(255,_255,_255,_0.6),_rgba(255,_255,_255,_0))] w-[1440px] h-20 overflow-hidden font-roboto">
        <div className="absolute top-[18px] left-[1031px] rounded-base box-border w-[89px] h-[42px] border-[2px] border-solid border-black" />
        <div className="absolute top-[18px] left-[1160px] rounded-base bg-gold-200 w-[100px] h-[42px]" />
        <div className="absolute top-[23px] left-[180px] w-[142px] h-7">
          <div className="absolute top-[0px] left-[28px] font-semibold">
            <span>Start</span>
            <span className="text-gray-500">Small</span>
          </div>
          <img
            className="absolute top-[2px] left-[0px] w-6 h-6 object-cover"
            alt=""
            src="../start-1@2x.png"
          />
        </div>
        <div className="absolute top-[25px] left-[1168px] font-semibold">
          Sign Up
        </div>
        <div className="absolute top-[24px] left-[1043px] font-semibold">
          Log In
        </div>
        <div className="absolute top-[29px] left-[428px] text-sm font-light">
          Home
        </div>
        <div className="absolute top-[29px] left-[537px] text-sm font-light">
          About
        </div>
        <div className="absolute top-[29px] left-[644px] text-sm font-light">
          Services
        </div>
        <div className="absolute top-[29px] left-[777px] text-sm font-light">
          Contact us
        </div>
        <div className="absolute top-[0px] left-[0px] bg-black w-[1440px] h-20 overflow-hidden text-white font-comfortaa">
          <b className="absolute top-[22px] left-[120px] text-lg">LOGO</b>
          <div className="absolute top-[27px] left-[632px] flex flex-row items-center justify-center gap-[32px]">
            <Button
              className="relative cursor-pointer"
              variant="text"
              color="primary"
              onClick={onHomeClick}
            >
              Home
            </Button>
            <div
              className="relative font-semibold cursor-pointer"
              onClick={onAboutText1Click}
            >
              About
            </div>
          </div>
          <div className="absolute top-[27px] left-[1109px] flex flex-row items-start justify-start gap-[32px]">
            <div
              className="relative font-semibold cursor-pointer"
              onClick={onLogInText1Click}
            >
              Log In
            </div>
            <Button
              className="relative cursor-pointer"
              variant="text"
              color="primary"
              onClick={onSignUpClick}
            >
              Sign Up
            </Button>
          </div>
          <img
            className="absolute h-[30%] w-[1.67%] top-[35.77%] right-[25.21%] bottom-[34.23%] left-[73.13%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="../vector4.svg"
          />
        </div>
      </div>
      <b
        className="absolute top-[843px] left-[180px] text-center cursor-pointer"
        onClick={onDontHaveAnClick}
      >
        <span>{`Don’t have an account ? `}</span>
        <span className="text-gold-200">Sign Up here</span>
      </b>
    </div>
  );
};

export default SignUp;
