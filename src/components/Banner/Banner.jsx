import userEvent from "@testing-library/user-event";
import React, { useContext } from "react";
import { AuthContext } from "../../contexts/UserContext";

const Banner = () => {
  const myUser = useContext(AuthContext);
  console.log(myUser);
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="h-96 w-3/4 carousel carousel-vertical rounded-box">
          <div className="carousel-item h-full">
            <img className="w-full" src="https://placeimg.com/256/400/arch" />
          </div>
          <div className="carousel-item h-full">
            <img className="w-full" src="https://placeimg.com/256/400/arch" />
          </div>
          <div className="carousel-item h-full">
            <img className="w-full" src="https://placeimg.com/256/400/arch" />
          </div>
        </div>
        <div>
          <h1 className="text-5xl font-bold">
            {myUser.user ? myUser.user.email : "Box Office News!"}{" "}
          </h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
